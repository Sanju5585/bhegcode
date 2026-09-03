package com.bhge.sap.orderfulfilment.jalo;

import com.bhge.sap.orderfulfilment.constants.BhgesaporderfulfillmentConstants;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import org.apache.log4j.Logger;

public class BhgesaporderfulfillmentManager extends GeneratedBhgesaporderfulfillmentManager
{
	@SuppressWarnings("unused")
	private static final Logger log = Logger.getLogger( BhgesaporderfulfillmentManager.class.getName() );
	
	public static final BhgesaporderfulfillmentManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (BhgesaporderfulfillmentManager) em.getExtension(BhgesaporderfulfillmentConstants.EXTENSIONNAME);
	}
	
}
