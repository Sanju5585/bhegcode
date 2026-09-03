/**
 *
 */
package com.bhge.core.order.service;

import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.commerceservices.enums.CountryType;
import de.hybris.platform.order.CartService;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.enums.GEEdgeProductType;
import com.bhge.facades.user.data.BHGESoldToData;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoTable;


/**
 * @author riyan
 *
 */
public interface BHGECartService extends CartService
{

	public List<CartEntryModel> nonSellableProductForCart(CartModel cart, UserModel user);

	public List<EnumerationValueModel> getShippingCarrierMethods(String shippingChargemethod);
	public void updateCartentryECA(final String cartId, final int entryNumber, Long ecaCode);

	public List<EnumerationValueModel> getShippingCarrierTypes(String getShippingCarrierTypes);

	public GEEdgeCartType getCartTypeForProductType(final GEEdgeProductType productType);

	public CartModel getInventoryCheckData(final CartModel cart);

	public JCoFunction setFunctionAndDefault(final CartModel cart, JCoConnection connection, String functionModule)
			throws BackendException;

	public JCoTable setVariantConfigDetails(final JCoTable variantConfigTable, final String posex,
			final AbstractOrderEntryModel orderEntry);

	public Boolean getErrorFromMessageTable(JCoTable messageTable, AbstractOrderModel orderModel);

	@Override
	public void removeSessionCart();

	@Override
	boolean hasSessionCart();

	public boolean hasSessionCartWitoutCreateNewCart();

	public MediaModel uploadOrderAttachment(MultipartFile file);

	public MediaModel uploadFile(MultipartFile file, MediaModel mediaModel, String originalFileName, String contentType)
			throws Exception;

	public boolean isCompleteShipmentWithMultiplePlants();

	public String getIncotermModel(AddressData shipToData, BHGESoldToData soldToData);

	public String getIncoterm1(AddressData shipToData, BHGESoldToData soldToData);

	public String getIncoterm2(AddressData shipToData, BHGESoldToData soldToData);

	public void clearSessionCart();

	public GEEdgeCartType getCartTypeForCart(CartModel cart);

	void setSurchargeForOrder(CartModel cart);
	public CartModel getRealTimePriceAndAvailabiltyDetails(CartModel cart, Boolean isShipComplete);

	public void saveReqHeaderDeliveryDate(Date reqDelDateNonFilm, boolean isShipComplete);

	public void saveReqHeaderDeliveryDateFilm(Date reqHdrDate);

	public ProductData getPriceFromRFC(GEEdgeProductModel productModel);

	public JCoFunction setFunctionAndDefault(final GEEdgeProductModel product, JCoConnection connection, String functionModule)
			throws BackendException;

	public CartModel getProductAvailabiltyDetails(CartModel cart, Boolean isShipComplete);


	public CommerceCartModification addProductToCart(CommerceCartParameter parameter) throws CommerceCartModificationException;

	public CartEntryModel addProductToCartEntry(CommerceCartParameter parameter);

	public Map<String, String> getPlantsForMaterial(GEEdgeProductModel productModel);

	public AbstractOrderEntryModel updateDefaultPlantForEntry(String cartId, String defaultPlant, int entryNumber);

	public CartModel getPriceForVCCartEntry(int entryNumber);

	public boolean getSoldtoBlockDetails();

	/**
	 * Updates cart alternate email with guest email as per requirement
	 *
	 * @param guestEmailID
	 */
	public void updateCartAlternateEmailWithGuestEmail(String guestEmailID);
	
	public void updateCartAlternateEmailWithGuestEmail(String cartId, String guestEmailID);

	/**
	 * Generates checkout PDF for Guest cart
	 * 
	 * @param cart
	 * @return
	 * @throws IOException
	 */
	public Boolean generateCheckoutPdf(final AbstractOrderModel cart) throws IOException;

	public ProductData getPriceFromRFCForWS(final GEEdgeProductModel product, final String guestSalesArea);

	public AddressModel getDefaultShiptoForUserForWs();

	public CartModel getInventoryCheckDataForWS(final CartModel cart, final String guestSalesArea);
	/**
	 * Gets price by taking guestSalesArea as input
	 * @param cart
	 * @param shipmentMethod
	 * @param guestSalesArea
	 * @param productLine
	 * @return
	 */
	public CartModel getRealTimePriceAndAvailabiltyDetails(final CartModel cart, final Boolean shipmentMethod, String guestSalesArea, String productLine, 
			final Map<Integer, ConfigurationData> configDataMap);

	/**
	 * Gets the cartModel based on cartID
	 * @param cartId
	 * @return
	 */
	public CartModel getCartByCodeForDSstore(final String cartId);

	// Added for ds store spartacus migration
	public MediaModel uploadOrderAttachmentWs(CartModel cartModel, MultipartFile file, boolean isEUC);

	void saveReqHeaderDeliveryDateFilmForWs(Date reqHdrDate, String cartId);

	void saveReqHeaderDeliveryDateForWs(Date reqDelDateNonFilm, boolean isShipComplete, String cartId);
	
	void changeCurrentCartUser(CartModel cartModel, final UserModel user);

	public String getIncoterm1ForWs(AddressData shipToData, BHGESoldToData soldToData, String guestSalesArea);
	
	public List<CountryModel> getCountries(CountryType countryType);

	void updateEntryReqDate(String reqDate, int entryNumber);

	void updateHeaderReqDate(String cartId, String date);

    void deleteAllCarts(UserModel customer, String b2bUnit, String salesOrg, String commerceType);

	boolean checkIfProductConfigIssue(CartModel cartModel);
}
