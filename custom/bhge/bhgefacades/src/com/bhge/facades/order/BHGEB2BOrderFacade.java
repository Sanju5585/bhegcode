/**
 *
 */
package com.bhge.facades.order;

import com.bhge.facades.order.data.OrderErrorData;
import com.bhge.facades.order.notification.data.OrderNotificationData;
import de.hybris.platform.b2bacceleratorfacades.order.B2BOrderFacade;
import de.hybris.platform.commercefacades.order.data.OrderData;
import de.hybris.platform.commercefacades.order.data.OrderHistoryViewData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.bhge.facades.data.BHGEOrderTypeData;
import com.bhge.facades.forms.OrderHistoryFormSearchData;
import com.bhge.facades.order.data.BHGEOrderHistoryCollectionData;
import com.bhge.facades.order.data.BHGEOrderHistoryData;


/**
 * @author 503046678
 *
 */
public interface BHGEB2BOrderFacade extends B2BOrderFacade
{

	public Map<String, Object> getDefaultCurrentOrderWS(final PageableData pageableData, List<String> multiPleSoldToId,
			String statusFilter, String sapOrderType);

	public SearchPageData<BHGEOrderHistoryData> getDefaultPastOrderWS(final PageableData pageableData, String statusFilter,
			String sapOrderType);

	public SearchPageData<BHGEOrderHistoryData> getSearchOrderResult(final OrderHistoryFormSearchData searchData,
			final PageableData pageableData, List<String> multiPleSoldToId, String statusFilter, String sapOrderType,
			final Map<String, Object> responseObject, final String orderNumber);

	public ArrayList<OrderHistoryViewData> getLineItem(String orderNo, String pageFlag, List<String> multiPleSoldToId);

	public ArrayList<OrderHistoryViewData> getLineItemOrderData(BHGEOrderHistoryCollectionData collectData, String orderNo,
			String pageFlag, List<String> multiPleSoldToId);


	public SearchPageData<BHGEOrderHistoryData> getOrdersForPage(OrderHistoryFormSearchData searchData, PageableData pageableData,
			String statusFilter, String sapOrderType);

	public void removeOrderHistoryDataFromCache();

	public void clearOrderHistoryCacheForCustomer(List<String> soldToList);

	public List<BHGEOrderTypeData> getSalesOrderTypes();

	public boolean isOrderVisibleForCurrentUser(String orderCode);

	public OrderData fetchOrderDetailsForCode(String orderCode);

	//Fast Order
	public ArrayList<OrderHistoryViewData> getLineItemForFastOrder(final String orderNo, final String pageType,
			final String soldTo, final String salesOrderNumber, final String poNumber);

	//Fast Order
	public SearchPageData<BHGEOrderHistoryData> getDefaultFastOrderWS(final String soldto, final String salesOrderNumber,
			final String poNumber, final PageableData pageableData, String statusFilter, String sapOrderType);

	/* Anish */
	public SearchPageData<BHGEOrderHistoryData> newGetDefaultFastOrderWS(final String soldto, final String salesOrderNumber,
			final String poNumber, final PageableData pageableData, String statusFilter, String sapOrderType);
	/* Anish */

	public Map<String, Object> getsearchPageData(final List<String> multipleSoldToId, final String poOrderNumberReplace,
			final PageableData pageableData, String fromDate, String toDate, OrderHistoryFormSearchData searchData,
			String statusFilter, String sapOrderType);

	public Map<String, Object> getBhgeOrderStatus(final OrderHistoryFormSearchData searchData, final PageableData pageableData,
			final List<String> multipleSoldToId, final String statusFilter, final String sapOrderType, final String orderNumber);


	public Map<String, Object> getBhgeOrderStatusForEmail(String customerNumber, OrderHistoryFormSearchData searchData,
			PageableData pageableData, List<String> multipleSoldToId, String statusFilter, String sapOrderType, String orderNumber);

	public SearchPageData<BHGEOrderHistoryData> newGetDefaultFastOrdersForWS(final String soldto, final String salesOrderNumber,
																			 final String poNumber, final PageableData pageableData, final String statusFilter, final String sapOrderType, final OrderErrorData orderErrorData);

	public SearchPageData<BHGEOrderHistoryData> getSearchOrderResultForWs(final OrderHistoryFormSearchData searchData,
                                                                          final PageableData pageableData, final List<String> multipleSoldToId, final String statusFilter,
                                                                          final String sapOrderType, final Map<String, Object> responseObject, final String orderNumber, boolean excludeDefaultSoldTo);

	public Map<String, Object> getBhgeOrderStatusForWS(final OrderHistoryFormSearchData searchData, final PageableData pageableData,
													   final List<String> multipleSoldToId, final String statusFilter, final String sapOrderType, final String orderNumber, boolean excludeDefaultSoldTo);
	
	/* Added for order history-order details spartacus migration api creation*/
	public List<OrderHistoryViewData> getOrderDetailsForCodeWs(String code);

	List<OrderNotificationData> getOrderNotificationData();

	boolean updateNotification(String orderId);
}

