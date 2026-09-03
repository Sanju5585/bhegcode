/**
 *
 */
package com.bhge.core.rma.service;

import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;

import java.io.File;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.bhge.facades.rma.data.BHGERmaFormData;
import com.hybris.ge.edge.core.model.type.BHGEHazardousInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;


/**
 * @author 1185137
 *
 */
public interface BHGERmaFormService
{


	/**
	 * @param cartModel
	 * @return
	 */
	public Boolean saveRma(CartModel cartModel);


	public CartModel fetchCart();

	/**
	 * @return
	 */
	public List<BHGEHazardousInfoModel> fetchHazardData();


	//public Boolean generateHazardPdf(BHGERmaData rmaData);

	public BHGEServiceOfferingsModel fetchServicingOfferings(String offeringCode);


	public OrderModel getOrderByRMA(final String rmaNumber);
	
	public BHGEServiceOfferingsModel getServiceOfferingByText(final String offeringText);
	
	public CartModel getCartById(final String cartId);
	
	public MediaModel uploadAdditionalFile(MultipartFile file);

	public Boolean completenessCheck(AbstractOrderEntryModel cart);


	/**
	 * @param rmaFormEntryDataList
	 * @return
	 * @throws Exception 
	 */
	File generateHazardPdf(AbstractOrderModel cart, final BHGERmaFormData rmaFormData) throws Exception;

	File generateCheckoutPdf(final AbstractOrderModel cart) throws Exception;


	File generateCheckoutPdfForWs(AbstractOrderModel cart) throws Exception;
	MediaModel uploadAdditionalFileWs(final MultipartFile file);
	

}
