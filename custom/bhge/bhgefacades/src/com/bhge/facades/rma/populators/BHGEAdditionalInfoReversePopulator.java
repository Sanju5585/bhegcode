/**
 *
 */
package com.bhge.facades.rma.populators;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Objects;

import org.apache.log4j.Logger;

import com.bhge.facades.rma.data.BHGEAdditionalInfoData;
import com.hybris.ge.edge.core.model.type.BHGEAdditionalInfoModel;


/**
 * @author 1185137
 *
 */
public class BHGEAdditionalInfoReversePopulator implements Populator<BHGEAdditionalInfoModel, BHGEAdditionalInfoData>
{
	private static final Logger LOG = Logger.getLogger(BHGEAdditionalInfoReversePopulator.class);

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.converters.Populator#populate(java.lang.Object, java.lang.Object)
	 */
	@Override
	public void populate(final BHGEAdditionalInfoModel source, final BHGEAdditionalInfoData target) throws ConversionException
	{
		if (Objects.nonNull(source))
		{
			LOG.info("Cart Entry Details  BHGEAdditionalInfo:- ");
			target.setRecommendedAccessories(source.getRecommendedAccessories());
			target.setAsFoundReceived(source.getAsFoundReceived());
			target.setFormAttachments((List<MediaModel>) source.getFormAttachments());
			LOG.info("Cart Entry Details  BHGEAdditionalInfo IsAccessoryPresent:- " + source.getIsAccessoryPresent());
			target.setIsAccessoryPresent(source.getIsAccessoryPresent());
			if (Objects.nonNull(source.getManufactureYear()))
			{
				LOG.info("Cart Entry Details  BHGEAdditionalInfo getManufactureYear:- "
						+ new SimpleDateFormat("yyyy").format(source.getManufactureYear()));
				target.setManufactureYear(new SimpleDateFormat("yyyy").format(source.getManufactureYear()));
			}
			LOG.info("Cart Entry Details  BHGEAdditionalInfo getWarrantyStatement:- " + source.getWarrantyInfoLong());
			target.setWarrantyStatement(source.getWarrantyInfoLong());
			target.setServiceNotes(source.getServiceNotesLong());
		}
	}

}
