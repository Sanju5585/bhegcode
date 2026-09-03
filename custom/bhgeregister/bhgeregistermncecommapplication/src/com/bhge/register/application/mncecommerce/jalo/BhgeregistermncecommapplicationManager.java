package com.bhge.register.application.mncecommerce.jalo;

import com.bhge.register.application.mncecommerce.constants.BhgeregistermncecommapplicationConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgeregistermncecommapplicationManager extends GeneratedBhgeregistermncecommapplicationManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgeregistermncecommapplicationManager.class.getName() );
	
	public static final BhgeregistermncecommapplicationManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgeregistermncecommapplicationManager) em.getExtension(BhgeregistermncecommapplicationConstants.EXTENSIONNAME);
	}
	
}
