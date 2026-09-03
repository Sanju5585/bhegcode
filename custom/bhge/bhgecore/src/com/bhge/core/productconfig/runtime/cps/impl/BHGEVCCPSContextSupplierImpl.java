package com.bhge.core.productconfig.runtime.cps.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.constants.BhgeCoreConstants;

import de.hybris.platform.sap.productconfig.runtime.cps.impl.CPSContextSupplierImpl;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.common.CPSContextInfo;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.services.BaseStoreService;

public class BHGEVCCPSContextSupplierImpl extends CPSContextSupplierImpl {
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCCPSContextSupplierImpl.class);
	
	@Autowired
	private BaseStoreService baseStoreService;
	
	@Override
	public List<CPSContextInfo> retrieveContext(final String productCode) {
		
		LOG.info("BHGEVCCPSContextSupplierImpl inside retrieveContext");
		
		final List<CPSContextInfo> context = super.retrieveContext(productCode);
		
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		if(baseStore != null && baseStore.getDefaultCurrency() != null) {
			context.add(createContextInfo(BhgeCoreConstants.CONTEXT_ATTRIBUTE_VBAK_WAERK, baseStore.getDefaultCurrency().getIsocode()));
		}

		return context;
	}

}
