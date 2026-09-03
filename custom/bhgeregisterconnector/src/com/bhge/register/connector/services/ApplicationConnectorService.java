/**
 *
 */
package com.bhge.register.connector.services;

import com.bhge.register.connector.dam.domain.UserRequest;


/**
 * @author 586667
 *
 */
public interface ApplicationConnectorService
{

	public String processDamUserSetup(final UserRequest userData);

}
