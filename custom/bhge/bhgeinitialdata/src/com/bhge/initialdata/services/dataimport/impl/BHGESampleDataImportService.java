/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.initialdata.services.dataimport.impl;

import de.hybris.platform.commerceservices.dataimport.impl.SampleDataImportService;
import de.hybris.platform.core.initialization.SystemSetupContext;


/**
 * Implementation to handle specific Sample Data Import services to bhge.
 */
public class BHGESampleDataImportService extends SampleDataImportService
{

	/**
	 * Imports the data related to Commerce Org.
	 *
	 * @param context
	 *           the context used.
	 */
	public void importCommerceOrgData(final SystemSetupContext context)
	{
		//final String extensionName = context.getExtensionName();

		getSetupImpexService().importImpexFile("/bhgeinitialdata/import/sampledata/commerceorg/user-groups.impex", false);
	}

	/**
	 * Imports the custom impexes related.
	 *
	 * @param context
	 *           the context used.
	 */
	public void importBhgeCustomData(final SystemSetupContext context)
	{
		//final String extensionName = context.getExtensionName();

		// Add Custom Impexes here
		getSetupImpexService().importImpexFile("/bhgeinitialdata/import/sampledata/common/cronjobs.impex", false);
		getSetupImpexService()
				.importImpexFile("/bhgeinitialdata/import/sampledata/productCatalogs/bhgeProductCatalog/product_type.impex", false);
		/*
		 * getSetupImpexService().importImpexFile(
		 * "/bhgeinitialdata/import/sampledata/productCatalogs/bhgeProductCatalog/FILM_CategoryRestrictions.impex",
		 * false); getSetupImpexService().importImpexFile(
		 * "/bhgeinitialdata/import/sampledata/productCatalogs/bhgeProductCatalog/NON_FILM_CategoryRestrictions.impex",
		 * false); getSetupImpexService().importImpexFile(
		 * "/bhgeinitialdata/import/sampledata/productCatalogs/bhgeProductCatalog/MS_CategoryRestrictions.impex", false);
		 */
		getSetupImpexService().importImpexFile(
				"/bhgeinitialdata/import/sampledata/productCatalogs/bhgeProductCatalog/plant_salesarea_mapping.impex", false);
		getSetupImpexService()
				.importImpexFile("/bhgeinitialdata/import/sampledata/productCatalogs/bhgeProductCatalog/plant_data.impex", false);
		getSetupImpexService().importImpexFile("/bhgeinitialdata/import/sampledata/stores/bhge/promotions.impex", false);
	}

}