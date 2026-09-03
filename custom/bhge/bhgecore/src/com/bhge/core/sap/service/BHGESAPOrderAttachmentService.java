package com.bhge.core.sap.service;

import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;

public interface BHGESAPOrderAttachmentService {

	public void submitOrderAttachmentsToSAP(final OrderModel cart, JCoConnection connection);
	
	public void submitOrderAttachmentsToSCPI(final OrderModel cart);

	void submitConfigAttachmentsToSCPI(final AbstractOrderEntryModel orderEntry);

	void handleExceptionAndSendEmail(final AbstractOrderModel order, final Exception exception, final String attachmentType);

	boolean submitQuoteAttachmentToSCPI(QuoteModel quote);
}
