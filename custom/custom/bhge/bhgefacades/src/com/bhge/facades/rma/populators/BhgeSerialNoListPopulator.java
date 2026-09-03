/**
 *
 */
package com.bhge.facades.rma.populators;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import com.bhge.core.model.BHGERmaEquipSerialNumberModel;


/**
 * @author 1121219
 *
 */
public class BhgeSerialNoListPopulator implements Populator<String, BHGERmaEquipSerialNumberModel>
{

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.converters.Populator#populate(java.lang.Object, java.lang.Object)
	 */
	@Override
	public void populate(final String source, final BHGERmaEquipSerialNumberModel target) throws ConversionException
	{
		target.setSerialNumber(source);
	}

}
