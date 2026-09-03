package com.bhge.fulfilmentprocess.jalo;

import com.bhge.fulfilmentprocess.constants.BhgeFulfilmentProcessConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgeFulfilmentProcessManager extends GeneratedBhgeFulfilmentProcessManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgeFulfilmentProcessManager.class.getName() );
	
	public static final BhgeFulfilmentProcessManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgeFulfilmentProcessManager) em.getExtension(BhgeFulfilmentProcessConstants.EXTENSIONNAME);
	}
	
}
