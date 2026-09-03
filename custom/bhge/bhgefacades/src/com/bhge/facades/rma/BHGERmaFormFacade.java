/**
 *
 */
package com.bhge.facades.rma;

import com.bhge.facades.rma.data.*;
import com.ds.dsocc.rma.dto.BHGERmaEntryWsDTO;

import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.order.InvalidCartException;
import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;

import java.io.IOException;
import java.io.Writer;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.data.BHGERmaStatusData;
import com.bhge.facades.data.CheckoutRmaData;
import com.bhge.facades.data.ReturnPoData;
import com.bhge.facades.product.data.RMAData;


/**
 * @author 1185137
 *
 */
public interface BHGERmaFormFacade
{
	/**
	 *
	 */
	public Integer rmaFormSubmit(final BHGERmaFormData rmaFormData);

	List<String> getInfoForPartNumOrPartSerialNumber(String partNo, String srNo);

	List<ProductData> getProductDataForPartNumber(List<String> PartNums);

	public String getCartType();

	public List<OrderModel> placeOrderWithSplit() throws InvalidCartException, BackendException;


	/**
	 * @return
	 */
	Boolean deleteCart();

	Boolean removeEntry(List<Integer> entryNumber);

	Integer cloneEntry(Integer entryNumber);

	/**
	 * @param entryNumber
	 * @return
	 */
	BHGERmaData fetchRMADetails(Integer entryNumber);

	Integer uploadAdditionalFile(final MultipartFile file, final Integer cartEntryNumber);


	public List<ProductData> getAccessories(AccessoryData accessoryData);

	public List<ProductData> parentCartAccessories(Integer cartEntryCode);

	/**
	 * @param rmaOfferingData
	 * @param part
	 * @return
	 */
	Map<String, Map<String, Collection<Object>>> getOfferingMatrix(BHGERmaOfferingData rmaOfferingData, String part);

	/**
	 * @param
	 * @return
	 */
	List<BHGERmaOfferingData> getServiceOffering(List<RMAData> data, final boolean equipSearch, final String wildSearch,
			final String searchType);

	List<BHGERmaOfferingData> getServiceOfferingsForAccessories(List<RMAData> data, final boolean equipSearch, final String wildSearch,
			final String searchType);

	public List<Integer> cloneAccessoryEntry(final Integer cartEntryCode);

	public void cloneAccessories(final Integer cartEntryCode, Integer newCartEntryCode);



	String testSalesArea(String salesArea);

	List<RmaReturnCartData> createRmaReturnCart();

	BHGECheckoutFormData saveCheckoutForm(BHGECheckoutFormData checkoutForm)
			throws BackendException, InvalidCartException, CalculationException;



	/**
	 * @param pageSize
	 * @param pageNo
	 * @return
	 */
	List<SavedCartData> getSavedCarts(Integer pageSize, Integer pageNo);

	CheckoutData getCheckoutData();

	/**
	 * @param switchCartType
	 * @return
	 */
	String switchCartType(String switchCartType);

	public List<OrderModel> processRMAOrder() throws InvalidCartException;

	Boolean saveHazardInfo(BHGEHazardousInfoData hazardousInfo);

	BHGEHazardousInfoData getHazardInfo();

	String gethazardCompleteness();
	
	String gethazardCompletenessforWS();

	List<CheckoutRmaData> setCheckoutRmaData(List<OrderData> orderDetailsList, final CurrencyModel currency);

	public void setCheckoutRmaDataforWS(List<OrderData> orderDetailsList, final CurrencyModel currency);

	Boolean removeAttachment(String fileName, int entryNo);

	public GEEdgeProductModel fetchReturnPart(final String partNumber);

	/**
	 * @param poData
	 * @return
	 */
	Boolean saveReturnPo(List<ReturnPoData> poData);

	/**
	 * @param file
	 * @param flag
	 * @param returnLocation
	 * @return
	 */
	String uploadAdditionalFileForCart(MultipartFile file, Integer flag, String returnLocation);


	public void generateCsvForGuestUser(final List<String> headers, final boolean includeHeader, final CartData cartData,
			final Writer writer) throws IOException;

	/**
	 * @return
	 */
	List<RmaReturnCartData> createReturnCart();

	/**
	 * @param returnLocation
	 * @return
	 */
	Boolean removePOAttachment(String returnLocation);


	public String uploadAdditionalFileForHazardForm(MultipartFile file);


	Boolean removeHazardInfoFiles(String fileName);

	public void generateExcelFromCart(HSSFWorkbook xlsFile, HSSFSheet sheet, CartData cartData, CreationHelper helper, Boolean isLoggedInUser);

	public List<MaterialData> prepareServiceOffering(List<RMAData> data, boolean b, String wildSearchVal, String searchTypeVal);
	
	public Integer saveRmaForm(BHGERmaEntryWsDTO rmaFormEntry, String cartId);

	/**
	 * Populates service offering description and plant data on response JSON
	 * @param rmaOfferingData
	 * @param part
	 * @return
	 */
	public List<OfferDescriptionData> setOfferDescriptionData(BHGERmaOfferingData rmaOfferingData,String part);
	/**
	 * Populates error data on response JSON
	 * @param rmaOfferingData
	 * @param part
	 * @return
	 */
	public List<ErrorData> getErrorDataList(BHGERmaOfferingData rmaOfferingData,String part);
	
	public BHGERmaFormEntryData editRMAForm(Integer entryNumber);
	
	public CartData getReturnsCart(CartData cartData);

	// Added for file upload for DS Store spartacus migration
	public String uploadAdditionalFileForCartWs(CartModel cartModel, MultipartFile file, Integer flag, String returnLocation);

	public Boolean removePOAttachmentWs(CartModel cartModel, String returnLocation);
	
	//Added for spartacus migration
	Boolean saveReturnPoForWs(CartModel cartModel, List<ReturnPoData> poDataList);

	List<OrderModel> placeOrderWithSplitForWs(CartModel cartModel) throws InvalidCartException;

	public List<OrderModel> processRMAOrderForWs(CartModel checkoutCartModel) throws InvalidCartException;

	void beforePlaceOrderForWs(CartModel cartModel);
	
	List<RmaReturnCartData> createRmaReturnCartForSavedCart(String cartId,UserModel currentUser);

	CartData getReturnsCartForSavedCart(CartData cartData,String cartId);
	
	public BHGERmaStatusData createEntireCartFromRMA(String rmaNumber,String cartId);
	
	public BHGERmaStatusData createCartFromRMA(final String rmaNumber, final String cartId, final Integer entryNumber);
	
	
}