/**
 *
 */
package com.bhge.register.connector.services;

import com.bhgeregister.dto.BHGEUserManagerRequest;
import com.bhgeregister.dto.BHGEUserManagerResponse;


/**
 * @author 586667
 *
 */
public interface UserManagerService
{

	public BHGEUserManagerResponse revokeAccess(final BHGEUserManagerRequest submitDetails);

	public BHGEUserManagerResponse addToGroup(BHGEUserManagerRequest ssoDetails);

}
