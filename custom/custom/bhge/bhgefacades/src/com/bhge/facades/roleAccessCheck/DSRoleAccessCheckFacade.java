/**
 *
 */
package com.bhge.facades.roleAccessCheck;

import java.util.List;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;


/**
 * @author 212722447
 *
 */
public interface DSRoleAccessCheckFacade
{

	/**
	 * @param pageId
	 * @return
	 * @throws CMSItemNotFoundException
	 */
	Boolean checkUserAccess(String pageId) throws CMSItemNotFoundException;
	
	List<String> getUserRole();
	Boolean getUserRoleofB2BUnit();

}
