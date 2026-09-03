package com.bhge.register.integration.oidc.jalo;

import com.bhge.register.integration.oidc.constants.BhgeregisteroidcintegrationConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgeregisteroidcintegrationManager extends GeneratedBhgeregisteroidcintegrationManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgeregisteroidcintegrationManager.class.getName() );
	
	public static final BhgeregisteroidcintegrationManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgeregisteroidcintegrationManager) em.getExtension(BhgeregisteroidcintegrationConstants.EXTENSIONNAME);
	}
	
}
