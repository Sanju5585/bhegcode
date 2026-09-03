
package com.bhge.facades.register;

import com.bh.occ.dto.user.DSUserSignUpWsDTO;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import org.springframework.http.ResponseEntity;


public interface BHGERegisterUserFacade
{
	public ResponseEntity<BHGERegisterResponse> fetchSSOForEmail(String emailAddress);

	public ResponseEntity<BHGERegisterResponse> validUsername(String ssousername);

	public ResponseEntity<BHGERegisterResponse> validUsernameFetch(String ssousername, String lastName, String firstName,
			String emailAddress);

	public BHGERegisterResponse submit(BHGERegisterRequest requestData);


	public void assignAccessRoleToCustomer(GEEdgeCustomerModel geEdgeCustomerModel,String role);

	GEEdgeCustomerModel createCustomer(DSUserSignUpWsDTO user);

	void deactivateUser(GEEdgeCustomerModel customer);

	void enableUser (GEEdgeCustomerModel customer);
}

