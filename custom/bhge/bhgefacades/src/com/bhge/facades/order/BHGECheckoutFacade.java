/**
 *
 */
package com.bhge.facades.order;

import com.bhge.facades.data.BHGECreditCardData;
import com.ds.dsocc.common.dto.CCPaymentInfoWsDTO;
import com.ds.dsocc.common.dto.CheckoutWsDTO;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.core.model.order.CartModel;

import java.io.IOException;
import java.util.List;


/**
 * @author sagbharatha
 *
 */
public interface BHGECheckoutFacade
{

	public List<ShippingCarrierMethodData> retriveCarrierMethods(final String shippingCharge);

	public boolean setEnduserAddress(final AddressData addressData);

	public Boolean generateCheckoutPdf() throws IOException;

	//added for occ call
	public AddressData getDeliveryAddressForCodeWs(String selectedAddressCode,String checkoutCartId);

	public AddressData getEnduserAddressForCodeWs(String selectedAddressCode,String checkoutCartId);

	//Added for occ call
	public boolean setDeliveryAddressWs(AddressData addressData, String checkoutCartId);

	public CartData updateCheckoutCartWs(CartData cartData,String checkoutCartId);
	
	//Method to save the cartdetails in the cartModel
	public CartModel updateCheckoutCartForDS(CartData cartData,CartModel cartModel);
	
	// Method to genearte checkout pdf based on cartModel
	public Boolean generateCheckoutPdfForDs(CartModel cartModel) throws IOException;

	public AddressData getPayerAddressForCodeWs(String selectedAddressCode,String checkoutCartId);

	public Boolean getBinLookupStatus(String merchantId, String token);

	/***
	 * US-465610
	 * Method to show credit card option and hide PO option for payment
	 * @return
	 */
	void setAvailablePaymentOptions(CartModel cartModel, CheckoutWsDTO checkoutWsDTO);

	List<BHGECreditCardData> getSavedCards();

	/***
	 * US-465624 Method to save card saved Card Details
	 * @param orderCode
	 * @param bhgeCreditCardData
     * @return
	 */
	Boolean savedCardDetails(String orderCode, BHGECreditCardData bhgeCreditCardData);

    public Boolean getSaveCardAuthorisationStatus(CCPaymentInfoWsDTO paymentInfo, String currenyCode, String customerId);

    public String getFiservMerchantId();

	String getFiservMerchantIdWithSalesArea(String currentSalesArea, String currency);

	public void updateRequestedShipDate(CartModel cartModel, boolean isShipComplete, String reqDelDateNonFilm);

    Boolean savedCardDetails(BHGECreditCardData bhgeCreditCardData);

    boolean checkIfProductConfigIssue(CartModel cartModel);
}
