package com.bhge.core.order.service.impl;

import de.hybris.platform.core.CoreAlgorithms;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.jalo.order.AbstractOrder;
import de.hybris.platform.jalo.order.price.JaloPriceFactoryException;
import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.order.impl.DefaultCalculationService;
import de.hybris.platform.order.strategies.calculation.FindDeliveryCostStrategy;
import de.hybris.platform.order.strategies.calculation.FindDiscountValuesStrategy;
import de.hybris.platform.order.strategies.calculation.FindPaymentCostStrategy;
import de.hybris.platform.order.strategies.calculation.FindPriceStrategy;
import de.hybris.platform.order.strategies.calculation.FindTaxValuesStrategy;
import de.hybris.platform.order.strategies.calculation.OrderRequiresCalculationStrategy;
import de.hybris.platform.promotionengineservices.promotionengine.PromotionEngineService;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.util.ServicesUtil;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.DiscountValue;
import de.hybris.platform.util.PriceValue;
import de.hybris.platform.util.TaxValue;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.log4j.Logger;


import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.coupon.service.BHGECouponService;
import com.bhge.core.model.BHGECouponModel;
import com.bhge.core.order.service.BHGECalculationService;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;


public class BHGECalculationServiceImpl extends DefaultCalculationService implements BHGECalculationService
{

	private static final Logger LOG = Logger.getLogger(BHGECalculationServiceImpl.class);
	private List<FindTaxValuesStrategy> findTaxesStrategies;
	private List<FindDiscountValuesStrategy> findDiscountsStrategies;
	private FindPriceStrategy findPriceStrategy;
	private FindDeliveryCostStrategy findDeliveryCostStrategy;
	private FindPaymentCostStrategy findPaymentCostStrategy;
	private OrderRequiresCalculationStrategy orderRequiresCalculationStrategy;

	private CommonI18NService commonI18NService;

	private boolean taxFreeEntrySupport = false;

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "bhgeCouponService")
	public BHGECouponService bhgeCouponService;
	
	@Resource(name = "baseStoreService")
	private BHGEBaseStoreServiceImpl baseStoreService;


	@Override
	public void calculate(final AbstractOrderModel order) throws CalculationException
	{
		if (orderRequiresCalculationStrategy.requiresCalculation(order))
		{
			// -----------------------------
			// first calc all entries
			LOG.debug("inside calculate method of BHGECalculationServiceImpl");
			calculateEntries(order, false);
			// -----------------------------
			// reset own values
			final Map taxValueMap = resetAllValues(order);
			// -----------------------------
			// now calculate all totals
			LOG.info("Payment type before calcluate refresh  : " + order.getPaymentType());
			refreshOrder(order);
			LOG.info("Payment type after calcluate refresh 1 : " + order.getPaymentType());
			calculateTotals(order, false, taxValueMap);
			LOG.info("Payment type after calcluate refresh 2 : " + order.getPaymentType());
		}
	}

	@Override
	public boolean requiresCalculation(final AbstractOrderModel order)
	{
		ServicesUtil.validateParameterNotNullStandardMessage("order", order);
		return orderRequiresCalculationStrategy.requiresCalculation(order);
	}

	@Override
	protected void setCalculatedStatus(final AbstractOrderModel order)
	{
        LOG.info("US644202 before calculatedstatus  discounta: " + order.getGlobalDiscountValues());
        order.setCalculated(Boolean.TRUE);
        LOG.info("US644202 calcluate refresh  : " + order.getCalculated());
		getModelService().save(order);
		//getModelService().refresh(order);
        LOG.info("US644202 after calculatedstatus save discounta: " + order.getGlobalDiscountValues());
        final List<AbstractOrderEntryModel> entries = order.getEntries();
		if (entries != null)
		{
			for (final AbstractOrderEntryModel entry : entries)
			{
				entry.setCalculated(Boolean.TRUE);
			}
			getModelService().saveAll(entries);
		}
        LOG.info("US644202 after entrycalculatedstatus discounta: " + order.getGlobalDiscountValues());
    }

	@Override
	protected void setCalculatedStatus(final AbstractOrderEntryModel entry)
	{
		entry.setCalculated(Boolean.TRUE);
		getModelService().save(entry);
		//getModelService().refresh(entry);
	}

	@Override
	public void calculate(final AbstractOrderModel order, final Date date) throws CalculationException
	{
		final Date old = order.getDate();
		order.setDate(date);
		try
		{
			calculate(order);
		}
		finally
		{
			order.setDate(old);
			getModelService().save(order);
		}
	}

	@Override
	public void calculateTotals(final AbstractOrderModel order, final boolean recalculate) throws CalculationException
	{
		LOG.info("Payment Type 7 -------------" + order.getPaymentType().getCode());
		calculateTotals(order, recalculate, calculateSubtotal(order, recalculate));
		LOG.info("Payment Type 8 -------------" + order.getPaymentType().getCode());
	}

	@Override
	protected void calculateTotals(final AbstractOrderModel order, final boolean recalculate,
			final Map<TaxValue, Map<Set<TaxValue>, Double>> taxValueMap) throws CalculationException
	{
		LOG.info("inside calculateTotals method of BHGECalculationServiceImpl");
        LOG.info("US644202 before calculatetotals  discounta: " + order.getGlobalDiscountValues());
        if (recalculate || orderRequiresCalculationStrategy.requiresCalculation(order))
		{
			final CurrencyModel curr = order.getCurrency();
			final int digits = curr.getDigits().intValue();
			// subtotal
			final double subtotal = order.getSubtotal().doubleValue();
			LOG.info("BHGECalculationServiceImpl: Subtotal : " + subtotal);
			// discounts
            LOG.info("US644202 before calculatediscountvalues-1 discounta: " + order.getGlobalDiscountValues());
            final double totalDiscounts = calculateDiscountValues(order, recalculate);
            LOG.info("US644202 after calculatediscountvalues-1 " + order.getGlobalDiscountValues());
            final double roundedTotalDiscounts = commonI18NService.roundCurrency(totalDiscounts, digits);
			order.setTotalDiscounts(Double.valueOf(roundedTotalDiscounts));
			LOG.info("BHGECalculationServiceImpl: TotalDiscounts : " + roundedTotalDiscounts);
			// set total
            Double surCharge = 0.0;
			LOG.info("BHGECalculationServiceImpl Currency is " + order.getCurrency().getIsocode());
			if(order.getCurrency().getIsocode().equals("JPY"))
				{
					LOG.info("BHGECalculationServiceImpl: Japan Currency");
					LOG.info("BHGECalculationServiceImpl: Subtotal is " + subtotal);

		}
            if(subtotal<10000  && order.getSurCharge()!=null && (order.getCurrency().getIsocode().equals("JPY"))){
                surCharge =Double.parseDouble(order.getSurCharge());
                LOG.info("BHGECalculationServiceImpl SurCharge is "+ surCharge);
            }

			final double total = subtotal + order.getPaymentCost().doubleValue() + order.getDeliveryCost().doubleValue() + surCharge
					- roundedTotalDiscounts;
			final double totalRounded = commonI18NService.roundCurrency(total, digits);
			LOG.info("TotalPriceAfterDiscount : " + totalRounded);
			order.setTotalPrice(Double.valueOf(totalRounded));
            LOG.info("US644202  calculatetotals after setting totalprice discounta: " + order.getGlobalDiscountValues());
			// Setting Total List Price in Order level
			double totalListPrice = 0.0;
			for (final AbstractOrderEntryModel entry : order.getEntries())
			{
				final double entryTotal = entry.getSubTotalListPrice().doubleValue();
				totalListPrice += entryTotal;
				LOG.info("BHGECalculationServiceImpl: TotalListPrice of entry : " + entry.getPartNumber() + " is : " + entryTotal);
			}

			order.setTotalListPrice(totalListPrice);

			// taxes
			final double totalTaxes = calculateTotalTaxValues(
					//
					order, recalculate, //
					digits, //
					getTaxCorrectionFactor(taxValueMap, subtotal, total, order), //
					taxValueMap);//
			final double totalRoundedTaxes = commonI18NService.roundCurrency(totalTaxes, digits);
			order.setTotalTax(Double.valueOf(totalRoundedTaxes));
            LOG.info("US644202 in calculatetotals before save discounta: " + order.getGlobalDiscountValues());
            getModelService().save(order);
			//getModelService().refresh(order);
            LOG.info("US644202 in calculatetotals after save discounta: " + order.getGlobalDiscountValues());
            setCalculatedStatus(order);
            LOG.info("US644202 after calculatetotals---1  discounta: " + order.getGlobalDiscountValues());

        }
	}

	@Override
	protected double getTaxCorrectionFactor(final Map<TaxValue, Map<Set<TaxValue>, Double>> taxValueMap, final double subtotal,
			final double total, final AbstractOrderModel order) throws CalculationException
	{
		// default: adjust taxes relative to total-subtotal ratio
		double factor = total / subtotal;

		if (mustHandleTaxFreeEntries(taxValueMap, subtotal, order))
		{
			final double taxFreeSubTotal = getTaxFreeSubTotal(order);

			final double taxedTotal = total - taxFreeSubTotal;
			final double taxedSubTotal = subtotal - taxFreeSubTotal;

			// illegal state: taxed subtotal is <= 0 -> cannot calculate with
			// that
			if (taxedSubTotal <= 0)
			{
				throw new CalculationException("illegal taxed subtotal " + taxedSubTotal + ", must be > 0");
			}
			// illegal state: taxed total is <= 0 -> no sense in having negative
			// taxes (factor would become negative!)
			if (taxedTotal <= 0)
			{
				throw new CalculationException("illegal taxed total " + taxedTotal + ", must be > 0");
			}
			factor = taxedTotal / taxedSubTotal;
		}
		return factor;
	}

	// see PLA-11851: we must take special actions in case some entries DO NOT
	// HAVE TAXES on them
	@Override
	protected boolean mustHandleTaxFreeEntries(final Map<TaxValue, Map<Set<TaxValue>, Double>> taxValueMap, final double subtotal,
			final AbstractOrderModel order)
	{
		return MapUtils.isNotEmpty(taxValueMap) // got taxes at all
				&& taxFreeEntrySupport // mode is enabled
				&& !isAllEntriesTaxed(taxValueMap, subtotal, order); // check
		// sums
		// whether
		// some
		// entries
		// are
		// contributing
		// to
		// tax
		// map
	}

	/**
	 * Calculates the sub total of all order entries with NO tax values.
	 */
	@Override
	protected double getTaxFreeSubTotal(final AbstractOrderModel order)
	{
		double sum = 0;
		for (final AbstractOrderEntryModel e : order.getEntries())
		{
			if (CollectionUtils.isEmpty(e.getTaxValues()))
			{
				sum += e.getTotalPrice().doubleValue();
			}
		}
		return sum;
	}

	@Override
	protected boolean isAllEntriesTaxed(final Map<TaxValue, Map<Set<TaxValue>, Double>> taxValueMap, final double subtotal,
			final AbstractOrderModel order)
	{
		double sum = 0.0;
		final Set<Set<TaxValue>> consumedTaxGroups = new HashSet<Set<TaxValue>>();
		for (final Map.Entry<TaxValue, Map<Set<TaxValue>, Double>> taxEntry : taxValueMap.entrySet())
		{
			for (final Map.Entry<Set<TaxValue>, Double> taxGroupEntry : taxEntry.getValue().entrySet())
			{
				if (consumedTaxGroups.add(taxGroupEntry.getKey())) // avoid
				// duplicate
				// occurrences
				// of the
				// same tax
				// group
				{
					sum += taxGroupEntry.getValue().doubleValue();
				}
			}
		}
		final double allowedDelta = Math.pow(10, -1 * (order.getCurrency().getDigits().intValue() + 1));
		return Math.abs(subtotal - sum) <= allowedDelta;
	}

	@Override
	public void recalculate(final AbstractOrderModel order) throws CalculationException
	{
		LOG.info("BHGECalculationServiceImpl: recalculate order : " + order.getCode());
		LOG.info("US644202 before recalculate order  discounta: " + order.getGlobalDiscountValues());
		if (order.getCommerceType() == null || !(order.getCommerceType().toString().equalsIgnoreCase("RETURNS")))
		{
			// -----------------------------
			// first force calc entries
			LOG.info("Payment type before refresh : " + order.getPaymentType());
			Double subTotal = order.getSubtotal();
			LOG.info("BHGECalculationServiceImpl: Subtotal : " + subTotal);
            LOG.info("US644202 before refresh-1  discounta: " + order.getGlobalDiscountValues());
            refreshOrder(order);
            LOG.info("US644202 after refresh-2  discounta: " + order.getGlobalDiscountValues());
            LOG.info("Payment type after refresh 1 : " + order.getPaymentType());
			calculateEntries(order, true);
            LOG.info("US644202 before reselalllvalues-1  discounta: " + order.getGlobalDiscountValues());
            // -----------------------------
			// reset own values
			final Map taxValueMap = resetAllValues(order);
            LOG.info("US644202 after resetallvalues-2  discounta: " + order.getGlobalDiscountValues());
            // -----------------------------
			// now recalculate totals
			calculateTotals(order, true, taxValueMap);
            LOG.info("US644202 after calculatetotals  discounta: " + order.getGlobalDiscountValues());
            LOG.info("Payment type after refresh 1.1 : " + order.getPaymentType());
		}

	}

	// phase 1 : delegate to Jalo
	@Override
	public void recalculate(final AbstractOrderModel order, final Date date) throws CalculationException
	{
		final AbstractOrder orderItem = getModelService().getSource(order);
		try
		{
			orderItem.recalculate(date);
		}
		catch (final JaloPriceFactoryException e)
		{
			throw new CalculationException(e);
		}
		refreshOrder(order);
	}

	@Override
	public void calculateEntries(final AbstractOrderModel order, final boolean forceRecalculate) throws CalculationException
	{
		double subtotal = 0.0;
		double yourPriceDiscountTotal = 0.0;
		double shipmentCost = 0.0;
		LOG.debug("inside calculateEntries method of BHGECalculationServiceImpl");
        LOG.info("US644202 before in calculateentries-1  discounta: " + order.getGlobalDiscountValues());
        for (final AbstractOrderEntryModel e : order.getEntries())
		{
			LOG.debug("Starting recalculateOrderEntryIfNeeded inside calculateEntries method of BHGECalculationServiceImpl");
			LOG.debug("Inside calculateEntries of BHGECalculationServiceImpl, discount price is " + e.getDiscountPrice()
			+ " Total price is " + e.getTotalPrice() 
			+ " Base price " + e.getBasePrice()
			+ " Sub total price " + e.getSubTotalListPrice());
            LOG.info("US644202 before recalculateorderentry discounta: " + order.getGlobalDiscountValues());
            recalculateOrderEntryIfNeeded(e, forceRecalculate);
            LOG.info("US644202 after recalculateorderentry discounta: " + order.getGlobalDiscountValues());
            subtotal += e.getTotalPrice().doubleValue();
			LOG.debug("value of subtotal of order inside BHGECalculationServiceImpl " + subtotal);
			//Coupon Split changes
			if (e.getYourPriceDiscount() != null && CollectionUtils.isNotEmpty(e.getDiscountValues()))
			{
				double unitDiscount = e.getDiscountValues().get(0).getValue() / e.getQuantity();
				LOG.info("unitDiscount : " + unitDiscount);
				if(e.getYourPriceDiscount() >= unitDiscount) {
					LOG.info("Your Price Discount : " + e.getYourPriceDiscount());
					LOG.info("Quantity : " + e.getQuantity());
					LOG.info("Discount Value : " + e.getDiscountValues().get(0).getValue() / e.getQuantity());
					yourPriceDiscountTotal += e.getYourPriceDiscount().doubleValue();
					LOG.info("Discount Value Total : " + yourPriceDiscountTotal);
				}
			}
			if (e.getSameDayShipmentCost() != null)
			{
				shipmentCost += e.getSameDayShipmentCost().doubleValue();
			}
		}
        LOG.info("US644202 after calculate orderentries-1  discounta: " + order.getGlobalDiscountValues());
        order.setYourPriceDiscount(yourPriceDiscountTotal);
		order.setTotalPrice(Double.valueOf(subtotal));
		order.setDeliveryCost(Double.valueOf(shipmentCost));

	}

	@Override
	public void calculateTotals(final AbstractOrderEntryModel entry, final boolean recalculate)
	{
		if (recalculate || orderRequiresCalculationStrategy.requiresCalculation(entry))
		{
			double totalPriceWithYourPriceAndSilver = 0.0;
			final AbstractOrderModel order = entry.getOrder();
			final CurrencyModel curr = order.getCurrency();
			final int digits = curr.getDigits().intValue();
			try
			{
				if (entry.getDiscountPrice() != null && NumberUtils.isNumber(entry.getDiscountPrice()))
				{
					totalPriceWithYourPriceAndSilver = CoreAlgorithms
							.round(new Double(entry.getDiscountPrice()).doubleValue() * entry.getQuantity().longValue(), digits);
					LOG.debug("BHGECalculationServiceImpl total price taken from discount price and the value is "
							+ totalPriceWithYourPriceAndSilver 
							+ " discount price " + entry.getDiscountPrice()
							+ " for order " + entry.getOrder().getCode());
				}
				else
				{
					totalPriceWithYourPriceAndSilver = CoreAlgorithms
							.round(new Double(entry.getBasePrice().doubleValue()) * entry.getQuantity().longValue(), digits);
					LOG.debug("BHGECalculationServiceImpl total price taken from base price and the value is "
							+ totalPriceWithYourPriceAndSilver + " for order " + entry.getOrder().getCode());
				}
			}
			catch (final Exception ex)
			{
				LOG.info(ex);
			}

			final double quantity = entry.getQuantity().doubleValue();


			/**
			 * apply discounts (will be rounded each) convert absolute discount values in case their currency doesn't match
			 * the order currency
			 */

			//YTODO : use CalculatinService methods to apply discounts
			final List appliedDiscounts = DiscountValue.apply(quantity, totalPriceWithYourPriceAndSilver, digits,
					convertDiscountValues(order, entry.getDiscountValues()), curr.getIsocode());
			double totalPrice = totalPriceWithYourPriceAndSilver;
			for (final Iterator it = appliedDiscounts.iterator(); it.hasNext();)
			{
				double discountValue = ((DiscountValue) it.next()).getAppliedValue();
				LOG.debug("applied discount value = " + discountValue + " for order " + entry.getOrder().getCode());
				//Coupon Split changes
				Double unitDiscounts =  discountValue / entry.getQuantity();
				if(unitDiscounts > entry.getYourPriceDiscount()) {
					LOG.info("Your Price Discount : " + entry.getYourPriceDiscount());
					LOG.info("Discount Value : " + discountValue);
					entry.setDiscountValues(appliedDiscounts);
					totalPrice -= discountValue;
					LOG.info("totalPrice : " + totalPrice);
				}
				break;
			}

			entry.setTotalPrice(Double.valueOf(totalPrice));
			LOG.debug("BHGECalculationServiceImpl entry total price is = " + totalPrice + " for order " + entry.getOrder().getCode());
			final double listPrice = entry.getListPrice() != null ? entry.getListPrice().doubleValue()
					: entry.getBasePrice().doubleValue();
			// Setting Total List Price to the Cart Entry
			entry.setSubTotalListPrice(CoreAlgorithms.round(listPrice * entry.getQuantity().longValue(), digits));

			getModelService().save(entry);
			//getModelService().refresh(entry);
			setCalculatedStatus(entry);
		}
	}

	@Override
	protected void calculateTotalTaxValues(final AbstractOrderEntryModel entry)
	{
		final AbstractOrderModel order = entry.getOrder();
		final double quantity = entry.getQuantity().doubleValue();
		final double totalPrice = entry.getTotalPrice().doubleValue();
		final CurrencyModel curr = order.getCurrency();
		final int digits = curr.getDigits().intValue();

		entry.setTaxValues(
				TaxValue.apply(quantity, totalPrice, digits, entry.getTaxValues(), order.getNet().booleanValue(), curr.getIsocode()));
	}

	@Override
	protected void recalculateOrderEntryIfNeeded(final AbstractOrderEntryModel entry, final boolean forceRecalculation)
			throws CalculationException
	{
		LOG.debug("inside recalculateOrderEntryIfNeeded method of BHGECalculationServiceImpl and calculation require : " + orderRequiresCalculationStrategy.requiresCalculation(entry));
		if (forceRecalculation || orderRequiresCalculationStrategy.requiresCalculation(entry))
		{
			LOG.debug("inside if condition of recalculateOrderEntryIfNeeded method of BHGECalculationServiceImpl");
			resetAllValues(entry);
			calculateTotals(entry, true);
		}
	}

	@Override
	public void recalculate(final AbstractOrderEntryModel entry) throws CalculationException
	{
		recalculateOrderEntryIfNeeded(entry, true);
	}

	// Y - should not be necessary
	@Override
	protected void refreshOrder(final AbstractOrderModel order)
	{
        LOG.info("US644202 in before refresh-2 discounta: " + order.getGlobalDiscountValues());
        LOG.info("inside refreshOrder method of BHGECalculationServiceImpl");
		getModelService().save(order);
		getModelService().refresh(order);
        LOG.info("US644202 in refresh-1 discounta: " + order.getGlobalDiscountValues());
        for (final AbstractOrderEntryModel entry : order.getEntries())
		{
			getModelService().refresh(entry);
		}
        LOG.info("US644202 after refresh-1  discounta: " + order.getGlobalDiscountValues());
    }

	@Override
	protected void resetAllValues(final AbstractOrderEntryModel entry) throws CalculationException
	{
		// taxes
		LOG.debug("inside resetAllValues method of BHGECalculationServiceImpl");
		final Collection<TaxValue> entryTaxes = findTaxValues(entry);
		entry.setTaxValues(entryTaxes);
		final AbstractOrderModel order = entry.getOrder();

		PriceValue pv = null;
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		LOG.debug("inside resetAllValues method of BHGECalculationServiceImpl- base store is " + baseStore);
		if (entry.getProduct() != null && entry.getProduct().getSapConfigurable() && baseStore != null
				&& !baseStore.getUid().contains(BhgeCoreConstants.BENTLY_NEVADA_STORE) && !isLongConfigEntry(entry)) {
			LOG.debug("inside resetAllValues method of BHGECalculationServiceImpl to calculate the price of config product " 
					+ entry.getProduct().getCode() + " in cart : " + entry.getOrder().getCode());
			pv = findBasePrice(entry);
			//setting configurable price as list price for vc products
			entry.setListPrice(Double.valueOf(pv.getValue()));
		} else {
			
			if (entry.getBasePrice() != null && entry.getBasePrice() > 0)
			{
				LOG.debug("inside if condition of resetAllValues method of BHGECalculationServiceImpl as entry base price is greater than 0 : " + entry.getBasePrice()
						+ " for product : " + entry.getProduct().getCode() + " in cart : " + entry.getOrder().getCode());
				pv = new PriceValue(order.getCurrency().getIsocode(), entry.getBasePrice(), false);
			}
			else if (!entry.getProduct().getSapConfigurable())
			{
				LOG.debug("inside else condition of resetAllValues method of BHGECalculationServiceImpl as entry base price is null or less than 0  "
						+ "and entry has bently non configure product: " + entry.getBasePrice()
				+ " for product : " + entry.getProduct().getCode() + " in cart : " + entry.getOrder().getCode());
				pv = findBasePrice(entry);
			} else if (entry.getProduct().getSapConfigurable()) {
				
				LOG.debug("inside else if condition of resetAllValues method of BHGECalculationServiceImpl as entry base price null or 0"
						+ " and entry has Bently configure product " + entry.getBasePrice()
				+ " for product : " + entry.getProduct().getCode() + " in cart : " + entry.getOrder().getCode());
				pv = new PriceValue(order.getCurrency().getIsocode(), 0.00, false);
			}
			
		}

		final PriceValue basePrice = convertPriceIfNecessary(pv, order.getNet().booleanValue(), order.getCurrency(), entryTaxes);
		if(null != basePrice) {
			LOG.debug("inside resetAllValues setting base price " + basePrice.getValue()
					+ " for product : " + entry.getProduct().getCode() + " in cart : " + entry.getOrder().getCode());
			entry.setBasePrice(Double.valueOf(basePrice.getValue()));
		}
	}

	@Override
	protected Map resetAllValues(final AbstractOrderModel order) throws CalculationException
	{
        LOG.info("US644202 before resetallvalues-2 discounta: " + order.getGlobalDiscountValues());
        // -----------------------------
		// set subtotal and get tax value map
		final Map<TaxValue, Map<Set<TaxValue>, Double>> taxValueMap = calculateSubtotal(order, false);
        LOG.info("US644202 after calculatesubtotal discounta: " + order.getGlobalDiscountValues());


        /*
		 * * filter just relative tax values - payment and delivery prices might require conversion using taxes ->
		 * absolute taxes do not apply here : ask someone for absolute taxes and how they apply to delivery cost etc. -
		 * this implementation might be wrong now
		 */

		final Collection<TaxValue> relativeTaxValues = new LinkedList<TaxValue>();
		for (final Map.Entry<TaxValue, ?> e : taxValueMap.entrySet())
		{
			final TaxValue taxValue = e.getKey();
			if (!taxValue.isAbsolute())
			{
				relativeTaxValues.add(taxValue);
			}
		}

		// PLA-10914
		final boolean setAdditionalCostsBeforeDiscounts = Config
				.getBoolean("ordercalculation.reset.additionalcosts.before.discounts", true);
		if (setAdditionalCostsBeforeDiscounts)
		{
			resetAdditionalCosts(order, relativeTaxValues);
		}
		// -----------------------------
		// set discount values ( not applied yet ) - dont needed in model domain
		// (?)
        LOG.info("US644202 before findglobaldiscounts  discounta:  line 633" + order.getGlobalDiscountValues());
        order.setGlobalDiscountValues(findGlobalDiscounts(order));
        LOG.info("US644202 after findglobaldiscounts  discounta: libe 635" + order.getGlobalDiscountValues());

        // -----------------------------
		// set delivery costs - convert if net or currency is different

		if (!setAdditionalCostsBeforeDiscounts)
		{
			resetAdditionalCosts(order, relativeTaxValues);
		}
        LOG.info("US644202 after resetallvalues-1  discounta: " + order.getGlobalDiscountValues());
        return taxValueMap;

	}

	@Override
	protected void resetAdditionalCosts(final AbstractOrderModel order, final Collection<TaxValue> relativeTaxValues)
	{
	}

	@Override
	public PriceValue convertPriceIfNecessary(final PriceValue pv, final boolean toNet, final CurrencyModel toCurrency,
			final Collection taxValues)
	{
		// net - gross - conversion
		if(null != pv) {
			double convertedPrice = pv.getValue();
			if (pv.isNet() != toNet) {
				convertedPrice = pv.getOtherPrice(taxValues).getValue();
				convertedPrice = commonI18NService.roundCurrency(convertedPrice, toCurrency.getDigits().intValue());
			}
			// currency conversion
			final String iso = pv.getCurrencyIso();
			if (iso != null && !iso.equals(toCurrency.getIsocode())) {
				try {
					final CurrencyModel basePriceCurrency = commonI18NService.getCurrency(iso);
					convertedPrice = commonI18NService.convertAndRoundCurrency(basePriceCurrency.getConversion().doubleValue(),
							toCurrency.getConversion().doubleValue(), toCurrency.getDigits().intValue(), convertedPrice);
				} catch (final UnknownIdentifierException e) {
					LOG.warn("Cannot convert from currency '" + iso + "' to currency '" + toCurrency.getIsocode() + "' since '" + iso
							+ "' doesn't exist any more - ignored" + ExceptionUtils.getStackTrace(e));
				}
			}
			return new PriceValue(toCurrency.getIsocode(), convertedPrice, toNet);
		}
		return null;
	}

	@Override
	protected List convertDiscountValues(final AbstractOrderModel order, final List dvs)
	{
		if (dvs == null)
		{
			return null;
		}
		if (dvs.isEmpty())
		{
			return dvs;
		}
		//

		final CurrencyModel curr = order.getCurrency();
		final String iso = curr.getIsocode();
		final List tmp = new ArrayList(dvs);

		/** convert absolute discount values to order currency is needed */

		final Map<String, CurrencyModel> currencyMap = new HashMap<String, CurrencyModel>(); // just
		// don't
		// search
		// twice
		// for
		// an
		// isocode
		for (int i = 0; i < tmp.size(); i++)
		{
			final DiscountValue discountValue = (DiscountValue) tmp.get(i);
			if (discountValue.isAbsolute() && !iso.equals(discountValue.getCurrencyIsoCode()))
			{
				// get currency
				CurrencyModel dCurr = currencyMap.get(discountValue.getCurrencyIsoCode());
				if (dCurr == null)
				{
					currencyMap.put(discountValue.getCurrencyIsoCode(),
							dCurr = commonI18NService.getCurrency(discountValue.getCurrencyIsoCode()));
				}
				// replace old value in temp list
				tmp.set(i,
						new DiscountValue(discountValue.getCode(),
								commonI18NService.convertAndRoundCurrency(dCurr.getConversion().doubleValue(),
										curr.getConversion().doubleValue(), curr.getDigits().intValue(), discountValue.getValue()),
								true, iso));
			}
		}
		return tmp;
	}

	@Override
	protected Map<TaxValue, Map<Set<TaxValue>, Double>> calculateSubtotal(final AbstractOrderModel order,
			final boolean recalculate)
	{
		if (recalculate || orderRequiresCalculationStrategy.requiresCalculation(order))
		{
			double subtotal = 0.0;
			// entry grouping via map { tax code -> Double }
			final List<AbstractOrderEntryModel> entries = order.getEntries();

			for (final AbstractOrderEntryModel entry : entries)
			{
				calculateTotals(entry, recalculate);
				final double entryTotal = entry.getTotalPrice().doubleValue();
				subtotal += entryTotal;
				// // use un-applied version of tax values!!!
			}
			// store subtotal
			subtotal = commonI18NService.roundCurrency(subtotal, order.getCurrency().getDigits().intValue());
			order.setSubtotal(Double.valueOf(subtotal));
			//getModelService().refresh(order);
		}
		return Collections.EMPTY_MAP;
	}

	@Override
	protected double calculateDiscountValues(final AbstractOrderModel order, final boolean recalculate)
	{
		if (recalculate || orderRequiresCalculationStrategy.requiresCalculation(order))
		{
            LOG.info("US644202 before calculatediscountvalues-2  discounta: " + order.getGlobalDiscountValues());
            final List<DiscountValue> discountValues = order.getGlobalDiscountValues();
			LOG.info("Calculating discount values for order " + order.getCode() + " with discount values: " + discountValues);
			if(discountValues == null || discountValues.isEmpty()){
				LOG.info("No discount values found for order " + order.getCode());
			}
			else {
				for (final DiscountValue discountValue : discountValues) {
					LOG.info("Discount value: " + discountValue.getCode() + " - " + discountValue.getValue() + " - " + discountValue.isAbsolute() + " - " + discountValue.getCurrencyIsoCode());
				}
			}
			if (discountValues != null && !discountValues.isEmpty())
			{
				// clean discount value list -- do we still need it?
				//				removeAllGlobalDiscountValues();
				//
				final CurrencyModel curr = order.getCurrency();
				final String iso = curr.getIsocode();

				final int digits = curr.getDigits().intValue();
				final double discountablePrice = order.getSubtotal().doubleValue()
						+ (order.isDiscountsIncludeDeliveryCost() ? order.getDeliveryCost().doubleValue() : 0.0)
						+ (order.isDiscountsIncludePaymentCost() ? order.getPaymentCost().doubleValue() : 0.0);

				/*
				 * * apply discounts to this order's total
				 */
				final List appliedDiscounts = DiscountValue.apply(1.0, discountablePrice, digits,
						convertDiscountValues(order, discountValues), iso);
				// store discount values
				order.setGlobalDiscountValues(appliedDiscounts);
                LOG.info("US644202 after calculatediscountvalues-2  discounta: " + order.getGlobalDiscountValues());
                return DiscountValue.sumAppliedValues(appliedDiscounts);

            }
			return 0.0;
		}
		else
		{
			return DiscountValue.sumAppliedValues(order.getGlobalDiscountValues());
		}
	}

	@Override
	protected double calculateTotalTaxValues(final AbstractOrderModel order, final boolean recalculate, final int digits,
			final double taxAdjustmentFactor, final Map<TaxValue, Map<Set<TaxValue>, Double>> taxValueMap)
	{

		return order.getTotalTax().doubleValue();
	}

	@Override
	protected void addRelativeEntryTaxValue(final double entryTotal, final TaxValue taxValue,
			final Set<TaxValue> relativeEntryTaxValues, final Map<TaxValue, Map<Set<TaxValue>, Double>> taxValueMap)
	{
		Double relativeTaxTotalSum = null;
		// A. is tax value already registered ?
		Map<Set<TaxValue>, Double> taxTotalsMap = taxValueMap.get(taxValue);
		if (taxTotalsMap != null) // tax value exists
		{
			// A.1 is set of tax un-applied values already registered by set of
			// all relative tax values ?
			relativeTaxTotalSum = taxTotalsMap.get(relativeEntryTaxValues);
		}
		// B tax value did not exist before
		else
		{
			taxTotalsMap = new LinkedHashMap<Set<TaxValue>, Double>();
			taxValueMap.put(taxValue, taxTotalsMap);
		}
		taxTotalsMap.put(relativeEntryTaxValues,
				Double.valueOf((relativeTaxTotalSum != null ? relativeTaxTotalSum.doubleValue() : 0d) + entryTotal));

	}

	@Override
	protected void addAbsoluteEntryTaxValue(final long entryQuantity, final TaxValue taxValue,
			final Map<TaxValue, Map<Set<TaxValue>, Double>> taxValueMap)
	{
		Map<Set<TaxValue>, Double> taxGroupMap = taxValueMap.get(taxValue);
		Double quantitySum = null;
		final Set<TaxValue> absoluteTaxGroupKey = Collections.singleton(taxValue);
		if (taxGroupMap == null)
		{
			taxGroupMap = new LinkedHashMap<Set<TaxValue>, Double>(4);
			taxValueMap.put(taxValue, taxGroupMap);
		}
		else
		{
			quantitySum = taxGroupMap.get(absoluteTaxGroupKey);
		}
		taxGroupMap.put(absoluteTaxGroupKey, Double.valueOf((quantitySum != null ? quantitySum.doubleValue() : 0) + entryQuantity));

	}

	@Override
	protected Set<TaxValue> getUnappliedRelativeTaxValues(final Collection<TaxValue> allTaxValues)
	{
		return Collections.EMPTY_SET;
	}

	@Override
	protected TaxValue calculateAbsoluteTotalTaxValue(final CurrencyModel curr, final String currencyIso, final int digits,
			final boolean net, TaxValue taxValue, final double cumulatedEntryQuantities)
	{
		final String taxValueIsoCode = taxValue.getCurrencyIsoCode();
		// convert absolute tax values into order currency if necessary

		if (taxValueIsoCode != null && !currencyIso.equalsIgnoreCase(taxValueIsoCode))
		{
			final CurrencyModel taxCurrency = commonI18NService.getCurrency(taxValueIsoCode);
			final double taxConvertedValue = commonI18NService.convertAndRoundCurrency(taxCurrency.getConversion().doubleValue(),
					curr.getConversion().doubleValue(), digits, taxValue.getValue());
			taxValue = new TaxValue(taxValue.getCode(), taxConvertedValue, true, 0, currencyIso);
		}
		return taxValue.apply(cumulatedEntryQuantities, 0.0, digits, net, currencyIso);
	}

	@Override
	protected TaxValue applyGrossMixedRate(final TaxValue unappliedTaxValue, final Map<Set<TaxValue>, Double> taxGroups,
			final int digits, final double taxAdjustmentFactor)
	{
		if (unappliedTaxValue.isAbsolute())
		{
			throw new IllegalStateException("AbstractOrder.applyGrossMixedRate(..) cannot be called for absolute tax value!");
		}
		final double singleTaxRate = unappliedTaxValue.getValue();
		double appliedTaxValueNotRounded = 0.0;
		for (final Map.Entry<Set<TaxValue>, Double> taxGroupEntry : taxGroups.entrySet())
		{
			final double groupTaxesRate = TaxValue.sumRelativeTaxValues(taxGroupEntry.getKey());
			final double taxGroupPrice = taxGroupEntry.getValue().doubleValue();

			appliedTaxValueNotRounded += (taxGroupPrice * singleTaxRate) / (100.0 + groupTaxesRate);
		}

		// adjust taxes according to global discounts / costs
		appliedTaxValueNotRounded = appliedTaxValueNotRounded * taxAdjustmentFactor;

		return new TaxValue(//
				unappliedTaxValue.getCode(), //
				unappliedTaxValue.getValue(), //
				false, //
				// always round (even if digits are 0) since relative taxes
				// result in unwanted precision !!!
				CoreAlgorithms.round(appliedTaxValueNotRounded, Math.max(digits, 0)), //
				null //
		);
	}

	@Override
	protected TaxValue applyNetMixedRate(final TaxValue unappliedTaxValue, final Map<Set<TaxValue>, Double> taxGroups,
			final int digits, final double taxAdjustmentFactor)
	{
		if (unappliedTaxValue.isAbsolute())
		{
			throw new IllegalStateException("cannot applyGrossMixedRate(..) cannot be called on absolute tax value!");
		}

		// In NET mode we don't care for tax groups since they're only needed to
		// calculated *incldued* taxes!
		// Here we just sum up all group totals...
		double entriesTotalPrice = 0.0;
		for (final Map.Entry<Set<TaxValue>, Double> taxGroupEntry : taxGroups.entrySet())
		{
			entriesTotalPrice += taxGroupEntry.getValue().doubleValue();
		}
		// and apply them in one go:
		return unappliedTaxValue.apply(1.0, entriesTotalPrice * taxAdjustmentFactor, digits, true, null);
	}

	@Override
	protected Collection<TaxValue> findTaxValues(final AbstractOrderEntryModel entry) throws CalculationException
	{
		return Collections.<TaxValue> emptyList();
	}

	@Override
	protected List<DiscountValue> findDiscountValues(final AbstractOrderEntryModel entry) throws CalculationException
	{
		if (findDiscountsStrategies.isEmpty())
		{
			LOG.warn("No strategies for finding discount values could be found!");
			return Collections.<DiscountValue> emptyList();
		}
		else
		{
			final List<DiscountValue> result = new ArrayList<DiscountValue>();
			for (final FindDiscountValuesStrategy findStrategy : findDiscountsStrategies)
			{
				result.addAll(findStrategy.findDiscountValues(entry));
			}
			return result;
		}
	}

	@Override
	protected List<DiscountValue> findGlobalDiscounts(final AbstractOrderModel order) throws CalculationException
	{
        LOG.info("US644202 recalculate order  discounta: line 960 " + order.getGlobalDiscountValues());
		List<DiscountValue> newDiscountValues = order.getGlobalDiscountValues();
        if (findDiscountsStrategies.isEmpty())
		{
			LOG.info("No strategues for finding discount values could be found for order:{}" + order.getCode());
			LOG.warn("No strategies for finding discount values could be found!");
			return Collections.<DiscountValue> emptyList();
		}
		else
		{
			final List<DiscountValue> result = new ArrayList<DiscountValue>();
			for (final FindDiscountValuesStrategy findStrategy : findDiscountsStrategies)
			{
				LOG.info("Executing discount strategy: {}");
				LOG.info("US644202 recalculate order  discounta: line 974" + findStrategy.getClass().getName());
				LOG.info("US644202 recalculate order  discounta: line 975 " + order.getGlobalDiscountValues());
				result.addAll(findStrategy.findDiscountValues(order));
				LOG.info("US644202 recalculate order  discounta: line 977 " + result.size());
				newDiscountValues.addAll(result);
				order.setGlobalDiscountValues(newDiscountValues);
			}
            LOG.info("US644202 recalculate order  discounta: line 978 " + order.getGlobalDiscountValues());
            return newDiscountValues;
		}
	}

	/* Fetch Coupon coupon applied to cart */
	private BHGECouponModel getAppliedCouponToCart(final String couponId)
	{
		if (couponId != null)
		{
			final String query = "select {PK} from {BHGECoupon} WHERE {couponid}= '" + couponId + "'";
			final List<BHGECouponModel> couponList = flexibleSearchService.<BHGECouponModel> search(query).getResult();
			if (couponList != null && !couponList.isEmpty())
			{
				final BHGECouponModel coupon = couponList.get(0);
				return coupon;
			}
			else
			{
				return null;
			}
		}
		return null;
	}
	
	private boolean isLongConfigEntry(AbstractOrderEntryModel entry) {

		boolean longConfigEntry = false;
		if (Objects.nonNull(entry.getLongConfigEntry()) && entry.getLongConfigEntry()) {
			longConfigEntry = true;
		}
		return longConfigEntry;
	}

	@Override
	protected PriceValue findBasePrice(final AbstractOrderEntryModel entry) throws CalculationException
	{
		LOG.debug("inside findBasePrice method of BHGECalculationServiceImpl to calculate the price of product : " + entry.getProduct().getCode());
		return findPriceStrategy.findBasePrice(entry);
	}

	@Override
	
	public void setCommonI18NService(final CommonI18NService commonI18NService)
	{
		this.commonI18NService = commonI18NService;
	}

	@Override
	
	public void setFindTaxesStrategies(final List<FindTaxValuesStrategy> findTaxesStrategies)
	{
		this.findTaxesStrategies = findTaxesStrategies;
	}

	@Override
	
	public void setFindDiscountsStrategies(final List<FindDiscountValuesStrategy> findDiscountsStrategies)
	{
		this.findDiscountsStrategies = findDiscountsStrategies;
	}

	@Override
	
	public void setFindPriceStrategy(final FindPriceStrategy findPriceStrategy)
	{
		this.findPriceStrategy = findPriceStrategy;
	}

	@Override
	
	public void setFindDeliveryCostStrategy(final FindDeliveryCostStrategy findDeliveryCostStrategy)
	{
		this.findDeliveryCostStrategy = findDeliveryCostStrategy;
	}

	@Override
	
	public void setFindPaymentCostStrategy(final FindPaymentCostStrategy findPaymentCostStrategy)
	{
		this.findPaymentCostStrategy = findPaymentCostStrategy;
	}

	@Override
	
	public void setOrderRequiresCalculationStrategy(final OrderRequiresCalculationStrategy orderRequiresCalculationStrategy)
	{
		this.orderRequiresCalculationStrategy = orderRequiresCalculationStrategy;
	}

	@Override
	public void setTaxFreeEntrySupport(final boolean taxFreeEntrySupport)
	{
		this.taxFreeEntrySupport = taxFreeEntrySupport;
	}

	/**
	 * @deprecated use {@link #isTaxFreeEntrySupport()}
	 */
	@Override
	@Deprecated
	public boolean getTaxFreeEntrySupport() // NOPMD
	{
		return isTaxFreeEntrySupport();
	}

	@Override
	public boolean isTaxFreeEntrySupport()
	{
		return this.taxFreeEntrySupport;
	}

}
