package com.bhge.facades.configuration;

import de.hybris.platform.sap.productconfig.runtime.cps.CharonFacade;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSConfiguration;
import de.hybris.platform.sap.productconfig.runtime.interf.KBKey;

public interface BHGEVCCharonFacade extends CharonFacade {

    public CPSConfiguration createDefaultConfiguration(final KBKey kbKey) ;
}
