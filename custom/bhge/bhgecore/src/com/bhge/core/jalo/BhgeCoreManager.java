package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgeCoreManager extends GeneratedBhgeCoreManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgeCoreManager.class.getName() );
	
	public static final BhgeCoreManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgeCoreManager) em.getExtension(BhgeCoreConstants.EXTENSIONNAME);
	}
	
}
