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
package com.bhge.facades.order;

import de.hybris.platform.acceleratorfacades.csv.CsvFacade;



import java.io.IOException;
import java.io.Writer;
import java.util.List;




import com.bhge.facades.user.data.BHGEConfigPartNumbersData;


/**
 * Default implementation of {@link de.hybris.platform.acceleratorfacades.csv.CsvFacade}
 */
public interface BHGECsvFacade extends CsvFacade
{

	public void generateCSVForMaterialBomData(final List<String> headers, final boolean includeHeader,
			final List<BHGEConfigPartNumbersData> materialBomDataList, final Writer writer);
	public void generateCSVForOrderBomData(final List<String>headers,final boolean includeHeader,final List<BHGEConfigPartNumbersData>orderBomDataList,final Writer writer);
}
