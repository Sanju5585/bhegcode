/*
 *  
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.bhgeticketingaddon.jalo;

import de.hybris.platform.bhgeticketingaddon.constants.BhgeticketingaddonConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgeticketingaddonManager extends GeneratedBhgeticketingaddonManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgeticketingaddonManager.class.getName() );
	
	public static final BhgeticketingaddonManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgeticketingaddonManager) em.getExtension(BhgeticketingaddonConstants.EXTENSIONNAME);
	}
	
}
