/**
 *
 */
package com.bhge.core.order.strategies.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commercefacades.storesession.data.CurrencyData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.europe1.model.PriceRowModel;
import de.hybris.platform.jalo.order.AbstractOrderEntry;

import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.order.strategies.calculation.FindDiscountValuesHook;
import de.hybris.platform.order.strategies.calculation.FindPriceHook;
import de.hybris.platform.order.strategies.calculation.impl.FindPricingWithCurrentPriceFactoryStrategy;
import de.hybris.platform.promotions.util.Pair;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.PriceValue;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.facades.user.data.BHGESoldToData;


/**
 * @author riyan
 *
 */
public class BHGEFindPricingwithCurrentPriceFactoryStrategy extends FindPricingWithCurrentPriceFactoryStrategy
{
	private final static Logger LOG = Logger.getLogger(BHGEFindPricingwithCurrentPriceFactoryStrategy.class);

	@Resource(name = "sessionService")
	public SessionService sessionService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "userService")
	private UserService userService;
	
	private transient List<FindPriceHook> findPriceHooks = Collections.emptyList();
	
	private transient List<FindDiscountValuesHook> findDiscountValuesHooks = Collections.emptyList();

	@Override
	public PriceValue findBasePrice(final AbstractOrderEntryModel entry) throws CalculationException
	{
		LOG.debug("inside BHGEFindPricingwithCurrentPriceFactoryStrategy");
		final ProductModel product = entry.getProduct();
		if(product.getSapConfigurable()) {
			LOG.debug("product : " + product.getCode() + " in order : "+ entry.getOrder().getCode() +" is configurable product hence getting price from cps");
			return findConfigurationPrice(entry);
		} else {
			LOG.debug("product : " + product.getCode() + " in order : "+ entry.getOrder().getCode() +" is non-configurable product");
			final String orderCurrencyCode = entry.getOrder().getCurrency().getIsocode();
			if (!getUserService().isAnonymousUser(getUserService().getCurrentUser()))
			{
				final B2BUnitModel soldTo = entry.getOrder().getSoldToForCart();
				final ProductModel productModel = entry.getProduct();
				final List<PriceRowModel> priceRows = (List<PriceRowModel>) productModel.getEurope1Prices();
				//final String orderCurrencyCode = entry.getOrder().getCurrency().getIsocode();
				final HashMap<String, Integer> soldToPriceMatchMap = getSoldToPriceMatchCollection(getGEEdgeSoldToDataForPrice(soldTo),
						productModel.getCode());

				if ((entry.getGiveAway() != null && entry.getGiveAway().equals(Boolean.TRUE))
						|| entry.getRejected() != null && entry.getRejected().equals(Boolean.TRUE))
				{
					final PriceValue pv = new PriceValue(orderCurrencyCode, 0.00, false);
					return pv;
				}

				final List<PriceRowModel> rankedPriceRows = sortPriceRowList(priceRows, soldToPriceMatchMap);
				if (rankedPriceRows == null || rankedPriceRows.isEmpty())
				{
					return new PriceValue(orderCurrencyCode, 0.00, false);
				}
				else
				{
					final PriceRowModel pr = rankedPriceRows.get(rankedPriceRows.size() - 1);
					final PriceValue pv = new PriceValue(pr.getCurrency().getIsocode(), pr.getPrice().doubleValue(), false);
					return pv;
				}
			}
			return new PriceValue(orderCurrencyCode, 0.00, false);
		}
		
	}
	
	
	public PriceValue findConfigurationPrice(final AbstractOrderEntryModel entry) throws CalculationException {
		final AbstractOrderEntry entryItem = getModelService().getSource(entry);
		final AbstractOrderModel order = entry.getOrder();
		final PriceValue defaultPrice = new PriceValue(order.getCurrency().getIsocode(), 0.0D, order.getNet());
		LOG.debug("inside findConfigurationPrice of BHGEFindPricingwithCurrentPriceFactoryStrategy");
		final PriceValue configPrice = findPriceHooks.stream().filter(h -> h.isApplicable(entry)).findFirst()
				.map(h -> h.findCustomBasePrice(entry, defaultPrice)).orElse(defaultPrice);
		LOG.debug("inside findConfigurationPrice of BHGEFindPricingwithCurrentPriceFactoryStrategy and config price " +  configPrice.getValue() + " for cart " + order.getCode());
		return configPrice;
	}

	public PriceValue findBasePriceForEntry(final AbstractOrderEntryModel entry, final BHGESoldToData geEdgeSoldToData)
			throws CalculationException
	{
		final ProductModel productModel = entry.getProduct();
		final List<PriceRowModel> priceRows = (List<PriceRowModel>) productModel.getEurope1Prices();
		LOG.info("priceRows for material " + productModel.getCode() + " is " + priceRows.toString());
		final String orderCurrencyCode = entry.getOrder().getCurrency().getIsocode();
		final HashMap<String, Integer> soldToPriceMatchMap = getSoldToPriceMatchCollection(geEdgeSoldToData,
				productModel.getCode());
		LOG.info("orderCurrencyCode: " + orderCurrencyCode);
		LOG.info("soldToPriceMatchMap: " + soldToPriceMatchMap.toString());
		if ((entry.getGiveAway() != null && entry.getGiveAway().equals(Boolean.TRUE))
				|| entry.getRejected() != null && entry.getRejected().equals(Boolean.TRUE))
		{
			final PriceValue pv = new PriceValue(orderCurrencyCode, 0.00, false);
			return pv;
		}

		final List<PriceRowModel> rankedPriceRows = sortPriceRowList(priceRows, soldToPriceMatchMap);
		LOG.info("rankedPriceRows: " + rankedPriceRows);
		if (rankedPriceRows == null || rankedPriceRows.isEmpty())
		{
			return new PriceValue(orderCurrencyCode, 0.00, false);
		}
		else
		{
			final PriceRowModel pr = rankedPriceRows.get(rankedPriceRows.size() - 1);

			/** Check if price row currency is matched with session currency */
			if (pr.getCurrency().getIsocode().equals(entry.getOrder().getCurrency().getIsocode()))
			{
				final PriceValue pv = new PriceValue(pr.getCurrency().getIsocode(), pr.getPrice().doubleValue(), false);
				LOG.info("Price row currency is same as Session currency " + pr.getCurrency().getIsocode());
				return pv;
			}
			else
			{
				/** If not matched - remove product from cart */
				LOG.info("Price row currency and Session currency both are different. Hence returning 0 price");
				return new PriceValue(orderCurrencyCode, 0.00, false);
			}


		}
	}

	// check 1 and move down to 9 till you find a row with list price
	// maintained.
	// 1> IF Price maintained for combination of Currency and Customer and
	// Material ELSE [ZCM1]
	// 2> IF Price maintained for combination of Country and Currency and
	// Material ELSE
	// 3> IF Price maintained for combination of Country and Material ELSE
	// 4> IF Price maintained for combination of Sub-region and Currency and
	// Material ELSE
	// 5> IF Price maintained for combination of Sub-region and Material ELSE
	// 6> IF Price maintained for combination of Region Cod and Currency and
	// Material ELSE
	// 7> IF Price maintained for combination of Region Cod and Material ELSE
	// 8> IF Price maintained for combination of Currency and Material v
	// 9> IF Price maintained for combination of Material END IF.

	public List<PriceRowModel> sortPriceRowList(final List<PriceRowModel> priceRows,
			final HashMap<String, Integer> soldToPriceMatchMap)
	{
		try
		{
			if (priceRows == null || priceRows.size() == 0 || soldToPriceMatchMap == null)
			{
				return null;
			}
			final List<Pair<Integer, PriceRowModel>> rankedPriceRows = new ArrayList<Pair<Integer, PriceRowModel>>();
			final List<PriceRowModel> result = new ArrayList<PriceRowModel>();

			for (final PriceRowModel priceRow : priceRows)
			{
				if (priceRow == null || priceRow.getPriceCriteria() == null)
				{
					continue;
				}

				final Date currentDate = new Date();
				if ((priceRow.getStartTime() != null && currentDate.before(priceRow.getStartTime()))
						|| (priceRow.getEndTime() != null && currentDate.after(priceRow.getEndTime())))
				{
					continue;
				}

				final String priceCriteria = priceRow.getPriceCriteria().replaceAll("\\s", "");
				final Integer matchScore = soldToPriceMatchMap.get(priceCriteria);

				if (priceCriteria != null && !priceCriteria.isEmpty() && matchScore != null)
				{
					rankedPriceRows.add(new Pair<Integer, PriceRowModel>(matchScore, priceRow));
				}
			}

			if (rankedPriceRows.size() > 1)
			{
				Collections.sort(rankedPriceRows, new Comparator<Pair<Integer, PriceRowModel>>()
				{
					/*
					 * (non-Javadoc)
					 *
					 * @see java.util.Comparator#compare(java.lang.Object, java.lang.Object)
					 */
					@Override
					public int compare(final Pair<Integer, PriceRowModel> o1, final Pair<Integer, PriceRowModel> o2)
					{
						final Integer score1 = o1.getKey();
						final Integer score2 = o2.getKey();
						return score1.compareTo(score2);
					}
				});
				if (rankedPriceRows.get(rankedPriceRows.size() - 1).getKey().intValue() == 0)
				{
					return null;
				}
			}
			for (final Pair<Integer, PriceRowModel> rankedPriceRow : rankedPriceRows)
			{
				result.add(rankedPriceRow.getValue());
			}
			return result;
		}
		catch (final Exception e)
		{
			LOG.error(e);
		}
		return null;
	}

	public HashMap<String, Integer> getSoldToPriceMatchCollection(final BHGESoldToData soldTo, final String materialID)
	{
		final String regionSoldTo = soldTo.getRegionCP();
		final String subRegionSoldTo = soldTo.getSubRegionCP();
		final String currencySoldTo = soldTo.getCurrency() == null ? "USD" : soldTo.getCurrency().getIsocode();
		final String countrySoldTo = soldTo.getCountryCP();
		//ZCM1 changes
		final String soldToId = soldTo.getUid();

		final HashMap<String, Integer> soldToPriceMatchMap = new HashMap<String, Integer>();

		if (countrySoldTo != null && !countrySoldTo.isEmpty() && currencySoldTo != null && !currencySoldTo.isEmpty())
		{
			soldToPriceMatchMap.put(countrySoldTo + currencySoldTo + materialID, new Integer(7));
		}
		if (countrySoldTo != null && !countrySoldTo.isEmpty())
		{
			soldToPriceMatchMap.put(countrySoldTo + materialID, new Integer(6));
		}
		if (subRegionSoldTo != null && !subRegionSoldTo.isEmpty() && currencySoldTo != null && !currencySoldTo.isEmpty())
		{
			soldToPriceMatchMap.put(subRegionSoldTo + currencySoldTo + materialID, new Integer(5));
		}
		if (subRegionSoldTo != null && !subRegionSoldTo.isEmpty())
		{
			soldToPriceMatchMap.put(subRegionSoldTo + materialID, new Integer(4));
		}
		if (regionSoldTo != null && !regionSoldTo.isEmpty() && currencySoldTo != null && !currencySoldTo.isEmpty())
		{
			soldToPriceMatchMap.put(regionSoldTo + currencySoldTo + materialID, new Integer(3));
		}
		if (regionSoldTo != null && !regionSoldTo.isEmpty())
		{
			soldToPriceMatchMap.put(regionSoldTo + materialID, new Integer(2));
		}
		if (currencySoldTo != null && !currencySoldTo.isEmpty())
		{
			soldToPriceMatchMap.put(currencySoldTo + materialID, new Integer(1));
		}
		//ZCM1 price row changes starts //
		if (currencySoldTo != null && !currencySoldTo.isEmpty() && soldToId != null && !soldToId.isEmpty())
		{
			soldToPriceMatchMap.put(currencySoldTo + soldToId + materialID, new Integer(8));
		}
		//ZCM1 price row changes ends //
		soldToPriceMatchMap.put(materialID, new Integer(0));

		return soldToPriceMatchMap;


		// 8. <currency> <customer> <material id>
		// 7. <country> <currency> <material id>
		// 6. <country> <material id>
		// 5. <subregion> <currency> <material id>
		// 4. <subregion> <material id>
		// 3. <region> <currency> <material id>
		// 2. <region> <material id>
		// 1. <currency> <material id>
		// 0. <material id>
	}

	private BHGESoldToData getGEEdgeSoldToDataForPrice(final B2BUnitModel childB2BUnitModel)
	{
		String parentUid = "";
		if (null != childB2BUnitModel && null != childB2BUnitModel.getUid() && childB2BUnitModel.getUid().contains("_"))
		{
			final String[] uid = childB2BUnitModel.getUid().split("_");
			parentUid = uid[0];
		}
		final B2BUnitModel b2bUnit = userProfileService.findChildB2BUnitModel(parentUid);

		final String uidOfParent = b2bUnit.getUid();
		final String nameOfParent = b2bUnit.getLocname();
		final BHGESoldToData geEdgeSoldToData = new BHGESoldToData();
		geEdgeSoldToData.setUid(uidOfParent);
		geEdgeSoldToData.setCountryCP(b2bUnit.getCountryCP());
		geEdgeSoldToData.setRegionCP(b2bUnit.getRegionCP());
		geEdgeSoldToData.setSubRegionCP(b2bUnit.getSubRegionCP());
		geEdgeSoldToData.setLocName(nameOfParent);

		if (childB2BUnitModel != null)
		{
			geEdgeSoldToData.setCurrency(getCurrency(childB2BUnitModel.getCurrency()));
			geEdgeSoldToData.setPaymentTerms(childB2BUnitModel.getPaymentTerms());
			geEdgeSoldToData.setIncoterms1(childB2BUnitModel.getIncoterms1());
			geEdgeSoldToData.setIncoterms2(childB2BUnitModel.getIncoterms2());
			if (childB2BUnitModel.getBillingAddress() != null)
			{
				geEdgeSoldToData.setBillingAddress(populateAddressData(childB2BUnitModel.getBillingAddress()));
			}
		}
		return geEdgeSoldToData;
	}

	public CurrencyData getCurrency(final CurrencyModel currency)
	{
		if (currency != null)
		{
			final CurrencyData currencyData = new CurrencyData();
			currencyData.setName(currency.getName());
			currencyData.setIsocode(currency.getIsocode());
			currencyData.setSymbol(currency.getSymbol());
			return currencyData;
		}
		else
		{
			return null;
		}
	}

	protected AddressData populateAddressData(final AddressModel addressModel)
	{
		final AddressData address = new AddressData();
		address.setLine1(addressModel.getStreetnumber());
		address.setLine2(addressModel.getStreetname());
		address.setTown(addressModel.getTown());
		address.setPostalCode(addressModel.getPostalcode());
		address.setDistrict(addressModel.getDistrict());

		final RegionData regionData = new RegionData();

		try
		{
			if (addressModel.getRegion() != null)
			{
				regionData.setName(addressModel.getRegion().getName());
				regionData.setIsocode(addressModel.getRegion().getIsocode());
				address.setRegion(regionData);
			}

		}
		catch (final Exception ee)
		{
			LOG.error("Exception occured in GEEdgeSoldToUtil file" + ee);
		}
		return address;
	}

	/**
	 * @return the userService
	 */
	public UserService getUserService()
	{
		return userService;
	}

	/**
	 * @param userService
	 *           the userService to set
	 */
	public void setUserService(final UserService userService)
	{
		this.userService = userService;
	}
	
	public void setFindPriceHooks(List<FindPriceHook> findPriceHooks)
	{
		super.setFindPriceHooks(findPriceHooks);
		this.findPriceHooks = findPriceHooks;
	}

	public List<FindPriceHook> getFindPriceHooks()
	{
		return findPriceHooks;
	}
	
	public void setFindDiscountValuesHooks(List<FindDiscountValuesHook> findDiscountValuesHooks)
	{
		super.setFindDiscountValuesHooks(findDiscountValuesHooks);
		this.findDiscountValuesHooks = findDiscountValuesHooks;
	}

	public List<FindDiscountValuesHook> getFindDiscountValuesHooks()
	{
		return findDiscountValuesHooks;
	}
}