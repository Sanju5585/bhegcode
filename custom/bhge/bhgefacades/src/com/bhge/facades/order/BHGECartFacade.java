package com.bhge.facades.order;

import de.hybris.platform.commercefacades.order.CartFacade;
import de.hybris.platform.commercefacades.order.data.AddToCartParams;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.CartModificationData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.CountryData;
import de.hybris.platform.commercefacades.voucher.exceptions.VoucherOperationException;
import de.hybris.platform.commerceservices.enums.CountryType;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.core.model.order.CartEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.productconfig.occ.ProductConfigOrderEntryWsDTO;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;

import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.BHGEAvailabilityCheckFormData;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.BHGESoldToData;
import org.apache.fop.apps.FOPException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBException;
import javax.xml.transform.TransformerException;


public interface BHGECartFacade extends CartFacade
{

	public CartModificationData addToCart(final String code, final long quantity) throws CommerceCartModificationException;

    CartModificationData addToCart(String code, long quantity, long ecaCode) throws CommerceCartModificationException;

    public CartModificationData addToCart(final AddToCartParams addToCartParams) throws CommerceCartModificationException;

	public CartModel getAvailabilityDetailsForMaterials(final BHGEAvailabilityCheckFormData formData);

	public boolean removeCart(CartModel cart);

	public String getIncotermModel(AddressData shipToData, BHGESoldToData soldToData);

	public String getIncoterm1(AddressData shipToData, BHGESoldToData soldToData);

	public String getIncoterm2(AddressData shipToData, BHGESoldToData soldToData);

	public boolean addAccessoriesToCart(String productId, String caseAccessoryCode, String optinalAccessories);

	public void clearSessionCart();

	public boolean isSDSEnabled();

	public boolean isHybridCart();

	public void updateShipmentMethod(Boolean shipmentMethod, String endCustomerNumber, Boolean isEndCustomerChanged);

	public boolean isGuestUser();

	public CartModel getPriceAndAvailabiltyDetailsForCart();

	public boolean isCompleteShipmentWithMultiplePlants();

	public void saveReqHeaderDeliveryDate(Date reqDelDateNonFilm, boolean isShipComplete);

	public void saveReqHeaderDeliveryDateFilm(Date reqHdrDate);

	public boolean updateEntryNotes(int entryNo, String notes);
	
	public boolean updateEntryNotesforWS(int entryNo, String notes, String code);

	public boolean applyIfCouponHasImpact(String filter);

	public PriceData getPriceFromRFC(String productCode);

	public CartModel getAvailabiltyDetailsForCart();

	public CartData getMiniCart();

	public boolean addToCartBulkUpload(final String code, final long quantity);

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.order.BHGECartFacade#addToCartBulkUpload(java.lang.String, long)
	 */
	boolean addToCartBulkUploadWs(String code, long quantity, String ecaCode, String cartId, BHGESoldToUtil bhgeSoldToUtil);

	public boolean addToCartBulkUpload(final String code, final long quantity, final CustomerData customerData, final BHGECustomerData geEdgeCustomerData, final CartModel cartModel);

	CartModificationData addToCartWithPrice(String code, long quantity, PriceData priceData)
			throws CommerceCartModificationException;

	List<CartEntryModel> validateCartForNonSellableProducts(CartModel cart, String guestSalesArea, UserModel user);
	
	//public List<CartEntryModel> validateCartForNonSellableProducts(final CartModel cart,UserModel user);

	CartModificationData updateOrderEntry(OrderEntryData orderEntry);

    void updateCartentryECA(CartData cartData, int entryNumber, Long ecaCode);

    public CartModificationData addOrderEntry(final OrderEntryData cartEntry);

	Integer getOrderEntryNumber(OrderEntryData findEntry);

	CartModificationData deleteGroupedOrderEntries(OrderEntryData orderEntry);

	void setUpdateStatusMessage(OrderEntryData orderEntry, CartModificationData cartModification);

	void setAddStatusMessage(OrderEntryData orderEntry, CartModificationData cartModification);

	public CartData getPriceForVCCartEntry(int entryNumber);

	public boolean getSoldtoBlockDetails();

	public void setupBuyCart();

	public List<CountryData> getDeliveryCountries();
	
	public void setupGuestCart(ProductData productData);
	
	public String getGuestCartType();
	
	/**
	 * Populates availability details on product data for PDP 
	 * @param productData
	 */
	public void populateAvailabilityOnProductData(ProductData productData, String defaultPlant, int quantity, String guestSalesArea);

	public PriceData getPriceFromRFCForWS(final String productCode, String guestSalesArea);

	public CartModel getAvailabilityDetailsForMaterialsForWS(final BHGEAvailabilityCheckFormData formData, final String guestSalesArea);
	
	/**
	 * Gets cart instance for cart code
	 *
	 * @param code
	 * @param productLine
	 * @return
	 */
	public CartData getCartDataForCartID(String code, String guestSalesArea, String productLine);
	
	/**
	 * Returns true if cart is valid
	 *
	 * @param model
	 * @param deletedProductCodes
	 * @return
	 * @throws CommerceCartModificationException
	 */
	public boolean validateCart(String cartId, String guestSalesArea, StringBuffer deletedProductCodes) throws CommerceCartModificationException;
	
	public void setCartTypeforAnonymousUser(final ProductData productData);
	
	/**
	 * Updates default plant for entry
	 * @param cart
	 * @param defaultPlant
	 * @param entryNumber
	 * @return
	 */
	public boolean updateDefaultPlantForEntry(final String cartCode, final String defaultPlant,
			final int entryNumber);
	
	public void saveCartType(final String cartId, final String cartType, boolean isQuote);
	
	public CartData getSessionCartWithEntryOrderingforWS(final CartModel cartModel, boolean recentlyAddedFirst);

	//Added for spartacus migration
	public CartModificationData addToCartWithPriceWs(String code, long quantity, PriceData priceData, String cartId,
			BHGESoldToUtil bhgeSoldToUtil) throws CommerceCartModificationException;



	void saveReqHeaderDeliveryDateFilmForWs(Date reqHdrDate, String cartId);


	void saveReqHeaderDeliveryDateForWs(Date reqDelDateNonFilm, boolean isShipComplete, String cartId);


	String getIncoterm1ForWs(AddressData shipToData, BHGESoldToData soldToData, String guestSalesArea);
	
	AddressData validateDeliveryAddress(AddressData defaultShipToData, CartData cartData);

	public void updatevouchersFromCartData(CartData cartData);

	public List<CountryData> getCountries(CountryType countryType);
	public boolean hasSessionCart();
	public String getSessionCartID();

	void applyVoucherForCartInternal(String voucherId, String cartId) throws VoucherOperationException;

	void updateEntryReqDate(String reqDate, int entryNumber);

    void updateEarlyShipment(String cartId, boolean earlyShipment);
	boolean updateReferenceNumerForEntry(final int entryNo, final String referenceNumber, final String cartId);

	boolean updateTagInfoForEntry(final int entryNo, final String tagInormation, final String cartId);

    void updateHeaderReqDate(String cartId, String reqDate);

	void saveAccessoriesProducts(CartModificationData mainCartModificationData, List<Integer> accessoriesEntriesNumber, List<String> accessoriesProductList);

	void savePartPlaceHolderDetails(CartModificationData cartModificationData, ProductConfigOrderEntryWsDTO entry);

	Boolean removeAccessoryCartEntry(List<Integer> finalList);

	CartModificationData addLongConfigToCart(String code, long quantity, String longNumberConfig)
			throws CommerceCartModificationException;

    void deleteAllCarts(UserModel customer, String b2bUnit, String salesOrg, String commerceType);

    void generateExcelForBudgetoryQuote(CartData cartData, String customFileName, HttpServletResponse response, CartModel cartModel) throws IOException;

    void downloadBudgetoryQuotePDF(CartData cartData, String customFileName, HttpServletRequest request, HttpServletResponse response, CartModel cartModel) throws FOPException, IOException, URISyntaxException, TransformerException, JAXBException;
}
