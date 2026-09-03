/**
 *
 */
package com.bhge.register.webservices.services;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;

import de.hybris.platform.core.model.order.AbstractOrderModel;
import org.apache.commons.mail2.core.EmailException;

import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import org.springframework.web.multipart.MultipartFile;
import de.hybris.platform.core.model.media.MediaModel;

/**
 * @author 586667
 *
 */
public interface SubmitRegisterRequestService
{
    /* Anish POST */
	public /* BHGERegisterResponse */ boolean submitAccessRequest(final String role, final String comment, final String Uid);
	/* Anish POST */
    
	public BHGERegisterResponse submitDetails(final BHGERegisterRequest submitDetails);

	public MediaModel saveKYCAttachment(MultipartFile KYCAttachment);

	public MediaModel saveOSAttachment(MultipartFile OSAttachment);

	public BHGERegisterResponse customerNumberValidation(final BHGERegisterRequest customerNumberDetails);

	public String loadActivateAccount(String userName) throws CMSItemNotFoundException, EmailException;

	public BHGERegisterResponse validateActivateAccount(final String userName);

	public void cancelAccessRequest(final String userName);

	public boolean checkActivateAccount(final String userName);

	public BHGERegisterResponse createReverseFlowForIdoc(final BHGERegisterRequest submitDetails,
			final GEEdgeCustomerModel customerModel);

	public BHGERegisterResponse updateReverseFlowForIdoc(final BHGERegisterRequest submitDetails,
			final GEEdgeCustomerModel customerModel);

	public BHGERegisterResponse fetchApplications(String userName);

	public BHGERegisterResponse fetchCountry();

	public BHGERegisterResponse fetchProducts(String appName, String productLine);

	public String fetchOrderTrackingAccess(String userSSO);

	public boolean checkReactivateAccount(final String userName);

	public String loadReactivateAccount(String userName) throws CMSItemNotFoundException, EmailException;

	public BHGERegisterResponse validateReactivateAccount(final String userName);

	public boolean isSystemDisabled(String accountCode);

	public void rfcFailureEmail(AbstractOrderModel entry);

	// US8159 : FPT Valv store changes start
	public BHGERegisterResponse fetchUserRolesFPT(final String appName);

	public BHGERegisterResponse fetchVSLegalEntities(final String appName);

	public BHGERegisterResponse validateCustomerNumber(final BHGERegisterRequest requestData, final String store)
			throws CMSItemNotFoundException, EmailException;

	public BHGERegisterResponse fetchSapForCustomer(final String customerAccNumber);
	public String customerDetails(String uid);
	
	public String allowAllAddress();
	
	public boolean accessToApplication(final String applicationId);
	// US8159 : FPT Valv store changes end

	public BHGERegisterResponse fetchAccountType(String appName);
}
