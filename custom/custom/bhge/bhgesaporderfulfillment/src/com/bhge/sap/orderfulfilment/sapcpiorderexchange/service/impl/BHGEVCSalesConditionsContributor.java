package com.bhge.sap.orderfulfilment.sapcpiorderexchange.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.CollectionUtils;

import com.bhge.sap.orderfulfilment.constants.BhgesaporderfulfillmentConstants;

import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.sap.orderexchange.constants.OrderCsvColumns;
import de.hybris.platform.sap.orderexchange.constants.SalesConditionCsvColumns;
import de.hybris.platform.sap.orderexchange.constants.SaporderexchangeConstants;
import de.hybris.platform.sap.orderexchange.outbound.impl.DefaultSalesConditionsContributor;
import de.hybris.platform.util.DiscountValue;

public class BHGEVCSalesConditionsContributor extends DefaultSalesConditionsContributor {
	
	@Override
	protected void createProductDiscountRows(final OrderModel order, final List<Map<String, Object>> result,
			final AbstractOrderEntryModel entry) {

		
		List<DiscountValue> discountList = entry.getDiscountValues();
		int conditionCounter = getConditionCounterStartProductDiscount();

		for (final DiscountValue disVal : discountList) {
			System.out.println( " Entry inside coupon block " + disVal.getCode());
			final Map<String, Object> row = new HashMap<>();
			row.put(OrderCsvColumns.ORDER_ID, order.getCode());
			row.put(SalesConditionCsvColumns.CONDITION_ENTRY_NUMBER, entry.getEntryNumber());
			row.put(SalesConditionCsvColumns.CONDITION_COUNTER, conditionCounter++);
			if (disVal.isAbsolute() && disVal.getValue() > entry.getYourPriceDiscount()) {
				double deltaValue = disVal.getValue()-entry.getYourPriceDiscount();
				row.put(SalesConditionCsvColumns.ABSOLUTE, Boolean.TRUE);
				row.put(SalesConditionCsvColumns.CONDITION_CURRENCY_ISO_CODE, order.getCurrency().getIsocode());
				row.put(SalesConditionCsvColumns.CONDITION_UNIT_CODE, entry.getUnit().getCode());
				row.put(SalesConditionCsvColumns.CONDITION_PRICE_QUANTITY, entry.getQuantity());
				row.put(SalesConditionCsvColumns.CONDITION_VALUE, deltaValue * entry.getQuantity() * -1);
				System.out.println("coupon applied" + deltaValue);
				System.out.println("Total Discount" + deltaValue*entry.getQuantity());

			}else {
				row.put(SalesConditionCsvColumns.ABSOLUTE, Boolean.FALSE);
				row.put(SalesConditionCsvColumns.CONDITION_VALUE, 0);
				System.out.println("Discount will not apply");
			}
			row.put(SalesConditionCsvColumns.CONDITION_CODE, BhgesaporderfulfillmentConstants.VOUCHER_TYPE);
			getBatchIdAttributes().forEach(row::putIfAbsent);
			row.put("dh_batchId", order.getCode());
			result.add(row);
		}
	}
}
