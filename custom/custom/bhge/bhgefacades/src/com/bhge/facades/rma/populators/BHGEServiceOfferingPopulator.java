/**
 *
 */
package com.bhge.facades.rma.populators;

import com.bhge.facades.rma.impl.BHGERmaFormFacadeImpl;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.util.Config;

import org.apache.log4j.Logger;
import org.springframework.util.StringUtils;

import com.bhge.core.enums.BHGERMAServiceOfferingType;
import com.bhge.facades.rma.data.BHGEServiceOfferingsData;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;


/**
 * @author 1185137
 *
 */
public class BHGEServiceOfferingPopulator implements Populator<BHGEServiceOfferingsData, BHGEServiceOfferingsModel>
{
	private final static Logger LOG = Logger.getLogger(BHGEServiceOfferingPopulator.class);
	@Override
	public void populate(final BHGEServiceOfferingsData source, final BHGEServiceOfferingsModel target) throws ConversionException
	{
		final String offeringType = source.getOfferingType();
		LOG.info("BHGEServiceOfferingPopulator::offeringType: " +  source.getOfferingType());
		if (!StringUtils.isEmpty(offeringType))
		{
			if (offeringType.equalsIgnoreCase("RETURNFORREPLACE"))
			{
				target.setOfferingCode("Z01");
				target.setOfferingType(BHGERMAServiceOfferingType.valueOf(Config.getParameter("PRODUCTRECALL")));
				target.setOfferingText("RETURNFORREPLACE");
			}
			else if (offeringType.equalsIgnoreCase("RETURNFORCREDIT"))
			{
				target.setOfferingCode("Z02");
				target.setOfferingType(BHGERMAServiceOfferingType.valueOf(Config.getParameter("RETURNFORCREDIT")));
				target.setOfferingText("RETURNFORCREDIT");
			}
			else if (offeringType.equalsIgnoreCase("RETURNFORSCRAP"))
			{
				target.setOfferingCode("Z03");
				target.setOfferingType(BHGERMAServiceOfferingType.valueOf(Config.getParameter("RETURNFORSCRAP")));
				target.setOfferingText("RETURNFORSCRAP");
			}
			else if (offeringType.equalsIgnoreCase("REPAIR"))
			{
				target.setOfferingCode(source.getOfferingCode());
				target.setOfferingType(BHGERMAServiceOfferingType.valueOf(Config.getParameter("REPAIR")));
				target.setOfferingText(source.getOfferingText());
			}
			else if (offeringType.equalsIgnoreCase("UPGRADE"))
			{
				target.setOfferingCode(source.getOfferingCode());
				target.setOfferingType(BHGERMAServiceOfferingType.valueOf(Config.getParameter("UPGRADE")));
				target.setOfferingText(source.getOfferingText());
			}
			else if (offeringType.equalsIgnoreCase("CALIBERATON") || offeringType.equalsIgnoreCase("Calibrate"))
			{
				target.setOfferingCode(source.getOfferingCode());
				target.setOfferingType(BHGERMAServiceOfferingType.valueOf(Config.getParameter("CALIBERATON")));
				target.setOfferingText(source.getOfferingText());
			}
			else
			{
				target.setOfferingCode(source.getOfferingCode());
				target.setOfferingType(BHGERMAServiceOfferingType.valueOf(source.getOfferingType()));
				target.setOfferingText(source.getOfferingText());
			}
		}
		//target.setOfferingCode(source.getOfferingCode());
		target.setOfferingPrice(source.getOfferingPrice());
		if(null != source.getOfferingDiscount()) {
			target.setOfferingDiscount(source.getOfferingDiscount().toString());
		}
		//target.setOfferingText(source.getOfferingText());
		//target.setOfferingType(BHGERMAServiceOfferingType.valueOf((source.getOfferingType())));
		target.setOtherDetails(source.getOtherDetails());
		target.setProblemDescLong(source.getProblemDescription());
		//target.setAvailableSites(source.getAvailableSitesList());
		target.setServiceOfferingLongText(source.getOfferingLongText());
		target.setServiceOfferingLongTextConfirmation(source.getOfferingLongTextConfirmation());
	}
}
