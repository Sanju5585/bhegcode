package com.bhge.core.rma.service;

import com.bhge.facades.rma.data.RMAOrderRFCData;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.OrderModel;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface BHGERmaOrderService {
    public RMAOrderRFCData generateSAPResponseForRMA(final AbstractOrderModel orderModel);
    public Boolean generateHazardPdf(AbstractOrderModel cart) throws IOException, Exception;
    public Boolean uploadHazardFile(final MultipartFile file, final AbstractOrderModel cart);
    public Boolean uploadCheckoutFile(final MultipartFile file, final AbstractOrderModel cart);
    public Boolean generateCheckoutPdf(final AbstractOrderModel cart) throws IOException, Exception;
    public void rfcFailureEmail(AbstractOrderModel entry);
    String generateRMAFileName(String folder,String originalFileName, String fileExtension, String rmaNumber);
	Boolean generateCheckoutPdfForWs(AbstractOrderModel cart) throws Exception;
}
