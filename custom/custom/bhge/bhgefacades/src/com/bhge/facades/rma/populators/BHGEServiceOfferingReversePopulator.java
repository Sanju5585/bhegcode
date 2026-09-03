/**
 *
 */
package com.bhge.facades.rma.populators;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import java.util.Objects;

import com.bhge.facades.rma.data.BHGEServiceOfferingsData;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;


/**
 * @author 1185137
 *
 */
public class BHGEServiceOfferingReversePopulator implements Populator<BHGEServiceOfferingsModel, BHGEServiceOfferingsData>
{

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.converters.Populator#populate(java.lang.Object, java.lang.Object)
	 */
	@Override
	public void populate(final BHGEServiceOfferingsModel source, final BHGEServiceOfferingsData target) throws ConversionException
	{
		if (Objects.nonNull(source))
		{
			target.setOfferingCode(source.getOfferingCode());
			target.setOfferingPrice(source.getOfferingPrice());
			target.setOfferingText(source.getOfferingText());
			target.setOfferingType(source.getOfferingType().toString());
			target.setOtherDetails(source.getOtherDetails());
			target.setProblemDescription(source.getProblemDescLong());
			target.setOfferingLongText(source.getServiceOfferingLongText());
			target.setOfferingLongTextConfirmation(source.getServiceOfferingLongTextConfirmation());
		}
	}

}
