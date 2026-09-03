/**
 *
 */
package com.bhge.facades.rma.populators;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

import org.apache.log4j.Logger;

import com.bhge.facades.rma.data.BHGEAdditionalInfoData;
import com.hybris.ge.edge.core.model.type.BHGEAdditionalInfoModel;


/**
 * @author 1185137
 *
 */
public class BHGEAdditionalInfoPopulator implements Populator<BHGEAdditionalInfoData, BHGEAdditionalInfoModel>
{

	private final static Logger LOG = Logger.getLogger(BHGEAdditionalInfoPopulator.class);


	@Override
	public void populate(final BHGEAdditionalInfoData source, final BHGEAdditionalInfoModel target) throws ConversionException
	{
		if (Objects.nonNull((source.getRecommendedAccessories())))
		{
			target.setAccessoriesNotes(source.getRecommendedAccessories());
		}
		if (Objects.nonNull((source.getAsFoundReceived())))
		{
			target.setAsFoundReceived(source.getAsFoundReceived());
		}
		if (Objects.nonNull((source.getFormAttachments())))
		{
			target.setFormAttachments(source.getFormAttachments());
		}
		if (Objects.nonNull((source.getIsAccessoryPresent())))
		{
			target.setIsAccessoryPresent(source.getIsAccessoryPresent());
		}


		LOG.info("RMA Form - Additional Info - Manu Year 01 - " + source.getManufactureYear());
		if (source.getManufactureYear() != null && !source.getManufactureYear().equalsIgnoreCase(" "))
		{
			target.setManufactureYear(convert(source.getManufactureYear()));
		}
		if (Objects.nonNull((source.getRecommendedAccessories())))
		{
			target.setRecommendedAccessories(source.getRecommendedAccessories());
		}
		if (Objects.nonNull((source.getWarrantyStatement())))
		{
			target.setWarrantyInfoLong(source.getWarrantyStatement());
		}
		if (Objects.nonNull((source.getServiceNotes())))
		{
			target.setServiceNotesLong(source.getServiceNotes());
		}

	}

	private Date convert(final String inputDate)
	{

		try
		{
			final Date date = new SimpleDateFormat("yyyy").parse(inputDate);
			LOG.info("RMA Form - Additional Info - Manu Year 02 - " + date.toString());
			return date;
		}
		catch (final ParseException e)
		{
			e.printStackTrace();
		}
		return null;

	}
}
