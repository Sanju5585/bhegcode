package com.bhge.util.jalo;

import com.bhge.util.constants.BhgecommonutilsConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgecommonutilsManager extends GeneratedBhgecommonutilsManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgecommonutilsManager.class.getName() );
	
	public static final BhgecommonutilsManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgecommonutilsManager) em.getExtension(BhgecommonutilsConstants.EXTENSIONNAME);
	}
	
}
