/**
 *
 */
package com.bhge.core.sap.service;

import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;

import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.scpi.rfc.zordercreate.BHGEZOrderCreateRequestItem;


/**
 * @author sagbharatha
 *
 */
public interface BHGESAPOrderSubmissionService
{
	public void submitOrderToSAP(final OrderModel cart, JCoConnection connection);

	/**
	 * @param messageTable
	 * @param orderModel
	 */
	public void getErrorFromMessageTable(BHGEZOrderCreateRequestItem messageTable, OrderModel orderModel);

	/**
	 * @param templateCode
	 * @param subjectr
	 * @param to
	 * @param model
	 * @param orderId
	 */
	void sendEmail(String templateCode, String subject, String to, BHGERfcCallErrorModel model, String orderId, String userSSO);
	
	void sendOrderStatusEmail(final OrderModel order);
}
