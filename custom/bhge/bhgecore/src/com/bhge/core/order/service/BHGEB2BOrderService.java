/**
 *
 */
package com.bhge.core.order.service;

import com.hybris.ge.edge.core.model.type.PaymenttermModel;
import de.hybris.platform.b2b.services.B2BOrderService;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.UserModel;

import java.util.List;
import java.util.Set;

import com.bhge.core.model.BHGERfcCallErrorModel;


/**
 * @author pachoudhary
 *
 */
public interface BHGEB2BOrderService extends B2BOrderService
{

	public List<OrderModel> getUnsubmittedOrders(String fromDate);

	public List<OrderModel> getSubmittedOrders();

	public List<OrderModel> getRFCFailOrders();

	public List<BHGERfcCallErrorModel> getNonCriticalErrorModelLst();

	public String getPlantNameForCode(String plantCode);

	public List<EnumerationValueModel> getSalesOrderTypes();

	public void clearOrderHistoryCacheForCustomer(Set<String> soldTo);

	public List<BHGERfcCallErrorModel> getRFCErrorList();

	public boolean fetchAndSendInvalidData();

	public boolean fetchAndSendWeeklyOrders(String fromDate, String toDate);

	public CartModel getExistingCartForSoldTo(UserModel userModel);

	public OrderModel fetchOrderForCode(String orderCode);

	public List<OrderModel> getSubmittedBuyOrders();

	public List<OrderModel> getSubmittedReturnOrders();

	/**
	 * TA907173
	 * @param paymentTerm
	 * @Return PaymenttermModel
	 */
    public PaymenttermModel getCCPaymentTerms(String paymentTerm);

	public List<OrderModel> getNotProcessedOrders(final String fromDate);
	
	public List<OrderModel> getOrderByStatus(String fromDate);

	List<OrderEntryModel> getConfigAttachmentEntries();

    void deleteAllCarts(UserModel user, String b2bUnit, String salesOrg, String commerceType);
}