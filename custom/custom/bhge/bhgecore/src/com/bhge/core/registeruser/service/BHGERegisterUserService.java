
package com.bhge.core.registeruser.service;

import org.springframework.http.ResponseEntity;

import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;


public interface BHGERegisterUserService
{

	public ResponseEntity<BHGERegisterResponse> fetchSSOForEmail(String emailAddress);

	public ResponseEntity<BHGERegisterResponse> validUsername(String ssousername);

	public ResponseEntity<BHGERegisterResponse> validUsernameFetch(String ssousername, String lastName, String firstName,
			String emailAddress);

	public BHGERegisterResponse submit(BHGERegisterRequest requestData);


}
