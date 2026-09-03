package com.bhge.core.event;

import java.io.ByteArrayOutputStream;

import com.ds.dsocc.calibration.data.GuestUserDetailsWsDTO;

import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.event.AbstractCommerceUserEvent;

public class GuestUserCalibrationDataSheetPDFEvent extends AbstractCommerceUserEvent<BaseSiteModel>{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private GuestUserDetailsWsDTO GuestUserDetails;
	private ByteArrayOutputStream calibrationEmailOutputSteam;

	/**
	 * @return
	 */
	public ByteArrayOutputStream getCalibrationEmailOutputSteam() {
		return calibrationEmailOutputSteam;
	}

	/**
	 * @param calibrationEmailOutputSteam
	 */
	public void setCalibrationEmailOutputSteam(ByteArrayOutputStream calibrationEmailOutputSteam) {
		this.calibrationEmailOutputSteam = calibrationEmailOutputSteam;
	}

	/**
	 * @return the guestUserDetails
	 */
	public GuestUserDetailsWsDTO getGuestUserDetails() {
		return GuestUserDetails;
	}

	/**
	 * @param guestUserDetails the guestUserDetails to set
	 */
	public void setGuestUserDetails(GuestUserDetailsWsDTO guestUserDetails) {
		GuestUserDetails = guestUserDetails;
	}
	

}
