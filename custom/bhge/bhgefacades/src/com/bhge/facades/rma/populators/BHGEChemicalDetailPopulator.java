/**
 *
 */
package com.bhge.facades.rma.populators;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import com.bhge.facades.rma.data.BHGEChemicalsDetailData;
import com.hybris.ge.edge.core.model.type.BHGEChemicalDetailsModel;


/**
 * @author 1185137
 *
 */
public class BHGEChemicalDetailPopulator implements Populator<BHGEChemicalsDetailData, BHGEChemicalDetailsModel>
{

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.converters.Populator#populate(java.lang.Object, java.lang.Object)
	 */
	@Override
	public void populate(final BHGEChemicalsDetailData source, final BHGEChemicalDetailsModel target) throws ConversionException
	{
		target.setChemicalName(source.getChemicalName());
		target.setChemicalNotes(source.getChemicalNotes());
		target.setIsMsdnSupplied(source.getIsMsdnSupplied());
		target.setUn(source.getUn());

	}



}
