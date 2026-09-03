package com.bhge.core.productconfig.runtime.cps.populator.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSCharacteristicGroup;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSConfiguration;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSConflict;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSItem;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSVariable;
import de.hybris.platform.sap.productconfig.runtime.cps.populator.impl.ConfigurationPopulator;
import de.hybris.platform.sap.productconfig.runtime.cps.populator.impl.MasterDataContext;
import de.hybris.platform.sap.productconfig.runtime.interf.model.ConfigModel;
import de.hybris.platform.sap.productconfig.runtime.interf.model.SolvableConflictModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;

public class BHGEVCConfigurationPopulator extends ConfigurationPopulator{
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCConfigurationPopulator.class);
	
	private static final String COMMA = ",";
	
	private static final String GENERAL_GROUP = "$general";
	
	private static final String ENG_GROUP = "ENG";
	
	
	@Resource(name = "configurationService")
	private ConfigurationService configurationService;
	
	
	
	protected void populateConflicts(final CPSConfiguration source, final ConfigModel target)
	{
		
		LOG.info("Entered into  BHGEVCConfigurationPopulator populateConflicts");
		
		if (CollectionUtils.isEmpty(source.getConflicts()))
		{
			return;
		}
		
		List<String> removeConflictList = getRemoveConflictList();
		

		final List<SolvableConflictModel> solvableConflicts = new ArrayList<>();
		
		for (final CPSConflict conflict : source.getConflicts()) {

			for (CPSVariable cpsVariable : conflict.getVariables()) {
				
				if (!removeConflictList.contains(cpsVariable.getCharacteristicId())) {
					final SolvableConflictModel solvableConflict = getConflictModelConverter().convert(conflict);

					solvableConflicts.add(solvableConflict);
				}

			}
		}

		target.setSolvableConflicts(solvableConflicts);
	}

	private List<String> getRemoveConflictList() {
		final String removeConflicts = configurationService.getConfiguration().getString("remove.configuration.conflicts");
		
		List<String> removeConflictList = new ArrayList<String>(Arrays.asList(removeConflicts.split(COMMA)));
		return removeConflictList;
	}
	
	protected void populateRootItem(final CPSConfiguration source, final ConfigModel target,
			final MasterDataContext ctxt) {
		final CPSItem rootItem = source.getRootItem();
		
		List<String> removeConflictList = getRemoveConflictList();

		if (null != rootItem
				&& CollectionUtils.isNotEmpty(rootItem.getCharacteristicGroups())) {

			for (CPSCharacteristicGroup charGroup : rootItem.getCharacteristicGroups()) {

				LOG.info("BHGEVCConfigurationPopulator populateRootItem before if char id :" + charGroup.getId()
						+ " and consisent : " + charGroup.isConsistent());

				if ((charGroup.getId().equalsIgnoreCase(GENERAL_GROUP) || charGroup.getId().equalsIgnoreCase(ENG_GROUP))
						&& !charGroup.isConsistent()) {

					for (final CPSConflict conflict : source.getConflicts()) {

						for (CPSVariable cpsVariable : conflict.getVariables()) {
							if (removeConflictList.contains(cpsVariable.getCharacteristicId())) {

								charGroup.setConsistent(true);
								target.setConsistent(true);
								
								LOG.info("BHGEVCConfigurationPopulator populateRootItem inside if char id :"
										+ charGroup.getId() + " and consisent : " + charGroup.isConsistent());
							}

						}
					}

				}
			}
		}

		target.setRootInstance(getInstanceModelConverter().convertWithContext(rootItem, ctxt));
	}

}

