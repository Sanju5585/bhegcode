/**
 *
 */
package com.bhge.integration.order.history.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.bhge.facades.forms.OrderHistoryFormSearchData;
import com.bhge.facades.order.data.BHGEOrderHistoryCollectionData;
import com.bhge.facades.order.notification.data.OrderNotificationData;
import com.sap.conn.jco.JCoFunction;


public interface BHGEOrderHistoryService
{

	/**
	 * Get the Order history data collection from SAP for the given soldto and ordertype using the RFC connection
	 *
	 * @param soldto
	 * @param orderType
	 * @return
	 */

	public BHGEOrderHistoryCollectionData getOrders(String soldto, String orderType);

	/**
	 * Get the order items for the given search conditions
	 *
	 * @param searchData
	 * @return
	 */
	public BHGEOrderHistoryCollectionData getSearchOrderResult(final OrderHistoryFormSearchData searchData);

	/**
	 * Get whether the order is CP_PAST or CP_OPEN based on the given page flag
	 *
	 * @param pageFlag
	 * @return
	 */
	public String getOrderType(final String pageFlag);

	/**
	 * This method will give the Date value for the given string date value.
	 *
	 * @param dateValue
	 * @param inputFormat
	 * @param outputFormat
	 * @return
	 */
	public Date getDateValueForString(String dateValue, SimpleDateFormat inputFormat, SimpleDateFormat outputFormat);

	public BHGEOrderHistoryCollectionData getFastOrder(final String soldto, final String orderType, final String salesOrderNumber,
			final String poNumber);

	public BHGEOrderHistoryCollectionData getFastOrderSCPI(final String soldto, final String orderType, final String salesOrderNumber,
													   final String poNumber);

	public BHGEOrderHistoryCollectionData getOrderHistoryData(final String soldto, final String orderType, String fromDate,
			String toDate);


	BHGEOrderHistoryCollectionData processFastOrderResponse(JCoFunction function);

	public String defineProductLine(final String productHeirarchy);

	public BHGEOrderHistoryCollectionData getFastOrderSCPIForWS(final String soldto, final String orderType, final String salesOrderNumber,
																final String poNumber);

	List<OrderNotificationData> getNotificationOrders(String key);

	String getSoldToFromCurrentUser();
}

