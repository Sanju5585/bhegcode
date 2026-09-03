package com.bhge.bhgestorefrontaddon.jalo;

import com.bhge.bhgestorefrontaddon.constants.BhgestorefrontaddonConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgestorefrontaddonManager extends GeneratedBhgestorefrontaddonManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgestorefrontaddonManager.class.getName() );
	
	public static final BhgestorefrontaddonManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgestorefrontaddonManager) em.getExtension(BhgestorefrontaddonConstants.EXTENSIONNAME);
	}
	
}
