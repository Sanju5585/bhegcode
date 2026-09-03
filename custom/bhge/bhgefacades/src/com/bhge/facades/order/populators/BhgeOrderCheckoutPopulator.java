/**
 *
 */
package com.bhge.facades.order.populators;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import org.apache.log4j.Logger;

import com.bhge.facades.rma.data.BHGECheckoutFormData;
import com.bhge.facades.rma.data.BhgeAddrData;
import com.bhge.facades.rma.data.BhgeCountryData;
import com.bhge.facades.rma.data.BhgeStateData;


public class BhgeOrderCheckoutPopulator implements Populator<CartModel, BHGECheckoutFormData>
{
	private static final Logger LOG = Logger.getLogger(BHGEOrderPopulator.class);

	@Override
	public void populate(final CartModel cartModel, final BHGECheckoutFormData checkoutData) throws ConversionException
	{
		checkoutData.setShipContactName(cartModel.getShipToContactName());
		checkoutData.setShipContactPhoneNumber(cartModel.getShipToContactPhone());
		checkoutData.setExportAddress(cartModel.getExportAddressText());
		checkoutData.setShipNotification(cartModel.getShipNotificationEmail());
		checkoutData.setInvoiceMail(cartModel.getInvoiceEmail());
		checkoutData.setOrderConfMail(cartModel.getOrderConfirmationEMail());
		checkoutData.setPoNumber(cartModel.getPurchaseOrderNumber());
		checkoutData.setIsGovernment(cartModel.getIsGovernment());
		checkoutData.setShippingMethod(cartModel.getShippingMethod());
		checkoutData.setShippingRemarks(cartModel.getShippingRemarks());
		checkoutData.setIsNuclear(cartModel.getIsNuclearOppurtunity());
		checkoutData.setMaterialExport(cartModel.getIsExport());
		checkoutData.setIsGovernmentBuyer(String.valueOf(cartModel.getIsBuyer()));
		checkoutData.setAlternateContactName(cartModel.getShippingConatct2Name());
		checkoutData.setAlternateContactEmail(cartModel.getAlternateContactEmail());
		checkoutData.setAlternateContactPhoneNumber(cartModel.getShippingConatct2Number());
		checkoutData.setDeliveryPoint(cartModel.getDeliveryPoint());
		checkoutData.setDeliveryAccountNo(cartModel.getDeliveryAccountNum());
		checkoutData.setReqShipDate(cartModel.getReqHeaderDeliveryDate().toString());
		checkoutData.setCarrier(cartModel.getShippingCarrierMethod().toString());
		if (null != cartModel.getRMAEndUserAddress())
		{

				final BhgeAddrData addrData = new BhgeAddrData();
				addrData.setLine1(cartModel.getRMAEndUserAddress().getLine1());
				addrData.setLine2(cartModel.getRMAEndUserAddress().getLine2());
				checkoutData.setEndUserAddress(addrData);

			final BhgeCountryData data = new BhgeCountryData();
			//data.setCountryName(cartModel.getRMAEndUserAddress().getCountry().getName());
			checkoutData.setEndUserCountry(data);
			final BhgeStateData stateData = new BhgeStateData();
			//stateData.setStateName(cartModel.getRMAEndUserAddress().getRegion().getName());
			checkoutData.setEndUserCity(cartModel.getRMAEndUserAddress().getDistrict().toString());
			checkoutData.setEndUserZip(cartModel.getRMAEndUserAddress().getPostalcode());
		}
		checkoutData.setPlanningSite("Plannitg site");
		checkoutData.setReturnToSite("ReturnToSite");

	}
}
