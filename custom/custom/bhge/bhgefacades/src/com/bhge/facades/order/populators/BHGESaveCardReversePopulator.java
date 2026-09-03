/**
 *
 */
package com.bhge.facades.order.populators;

import com.bhge.core.enums.BHGERMAHazardType;
import com.bhge.facades.data.BHGECreditCardData;
import com.bhge.facades.rma.data.BHGEHazardousInfoData;
import com.hybris.ge.edge.core.model.type.BHGEHazardousInfoModel;
import com.hybris.ge.edge.core.model.type.BHGESavedCreditcardModel;
import de.hybris.platform.commercefacades.order.data.CCPaymentInfoData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


/**
 * @author 1185137
 *
 */
public class BHGESaveCardReversePopulator implements Populator<BHGECreditCardData, BHGESavedCreditcardModel>
{

	/*
	 * BHGEHazardousInfoModel (non-Javadoc)
	 *
	 * @see de.hybris.platform.converters.Populator#populate(java.lang.Object, java.lang.Object)
	 */
	@Override
	public void populate(final BHGECreditCardData source, final BHGESavedCreditcardModel target) throws ConversionException
	{
		if (Objects.nonNull(source))
		{
			//source.setB2bUnit(b2bUnit);
			target.setName(source.getCcName());
			target.setNumber(source.getCcNumber());
			target.setType(source.getCcType());
			target.setValidTru(source.getCcValidTru());
			target.setToken(source.getToken());
		}
	}

}
