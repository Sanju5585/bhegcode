package com.bhge.register.connector.jalo;

import com.bhge.register.connector.constants.BhgeregisterconnectorConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgeregisterconnectorManager extends GeneratedBhgeregisterconnectorManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgeregisterconnectorManager.class.getName() );
	
	public static final BhgeregisterconnectorManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgeregisterconnectorManager) em.getExtension(BhgeregisterconnectorConstants.EXTENSIONNAME);
	}
	
}
