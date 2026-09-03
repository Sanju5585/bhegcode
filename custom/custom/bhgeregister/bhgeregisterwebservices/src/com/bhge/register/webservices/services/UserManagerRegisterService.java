/**
 *
 */
package com.bhge.register.webservices.services;

import java.util.Map;

import com.bhgeregister.dto.BHGEUserManagerRequest;
import com.bhgeregister.dto.BHGEUserManagerResponse;


/**
 * @author 586667
 *
 */
public interface UserManagerRegisterService
{

	public BHGEUserManagerResponse fetchUsers(final BHGEUserManagerRequest submitDetails);

	/* Anish */
	public BHGEUserManagerResponse fetchUpdateProfileUsers(final BHGEUserManagerRequest submitDetails);

	public Map<String, Object> fetchAllUsers(final BHGEUserManagerRequest submitDetails);
	/* Anish */

	public boolean managerProcessRequest(BHGEUserManagerRequest serviceRequest);

	public boolean revokeAccess(BHGEUserManagerRequest serviceRequest);

	public boolean provideAccess(BHGEUserManagerRequest serviceRequest);

}
