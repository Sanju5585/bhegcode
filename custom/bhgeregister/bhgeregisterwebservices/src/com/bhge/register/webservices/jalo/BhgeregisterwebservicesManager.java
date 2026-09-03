package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgeregisterwebservicesManager extends GeneratedBhgeregisterwebservicesManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgeregisterwebservicesManager.class.getName() );
	
	public static final BhgeregisterwebservicesManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgeregisterwebservicesManager) em.getExtension(BhgeregisterwebservicesConstants.EXTENSIONNAME);
	}
	
}
