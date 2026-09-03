/**
 *
 */
package com.bhge.facades.rma.populators;

import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.bhge.core.enums.BHGERMAHazardType;
import com.bhge.facades.rma.data.BHGEHazardousInfoData;
import com.hybris.ge.edge.core.model.type.BHGEHazardousInfoModel;




/**
 * @author 1185137
 *
 */
public class BHGEHazardousInfoPopulator implements Populator<BHGEHazardousInfoData, BHGEHazardousInfoModel>
{

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.converters.Populator#populate(java.lang.Object, java.lang.Object)
	 */
	@Override
	public void populate(final BHGEHazardousInfoData source, final BHGEHazardousInfoModel target) throws ConversionException
	{
		target.setContainsFluids(source.getContainsFluids());
		target.setDecontaminated(source.getDecontaminated());
		target.setDeclerationA(source.getDeclarationA());
		target.setDeclerationB(source.getDeclarationB());
		target.setHazardInfo(source.getHazardInfo());
		target.setHazardType(enumConversion(source.getHazardType()));
		target.setFluidText(source.getFluidText());
		target.setIsOther(source.getIsOther());
		target.setOtherText(source.getOtherText());
	}

	private List<BHGERMAHazardType> enumConversion(final List<String> hazardList)
	{
		final List<BHGERMAHazardType> list = new ArrayList<BHGERMAHazardType>();
		if (Objects.nonNull(hazardList))
		{
			hazardList.forEach(el -> list.add(BHGERMAHazardType.valueOf(el)));
		}
		return list;
	}
}
