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
public class BHGEHazardousInfoReversePopulator implements Populator<BHGEHazardousInfoModel, BHGEHazardousInfoData>
{

	/*
	 * BHGEHazardousInfoModel (non-Javadoc)
	 *
	 * @see de.hybris.platform.converters.Populator#populate(java.lang.Object, java.lang.Object)
	 */
	@Override
	public void populate(final BHGEHazardousInfoModel source, final BHGEHazardousInfoData target) throws ConversionException
	{
		if (Objects.nonNull(source))
		{
			target.setContainsFluids(source.getContainsFluids());
			target.setDeclarationA(source.getDeclerationA());
			target.setDeclarationB(source.getDeclerationB());
			target.setHazardInfo(source.getHazardInfo());
			target.setDecontaminated(source.getDecontaminated());
			target.setHazardType((enumConversion(source.getHazardType())));
			target.setFluidText(source.getFluidText());
			target.setIsOther(source.getIsOther());
			target.setOtherText(source.getOtherText());
		}
	}

	private List<String> enumConversion(final List<BHGERMAHazardType> hazardEnumList)
	{
		final List<String> list = new ArrayList<String>();
		hazardEnumList.forEach(el -> list.add(el.toString()));
		return list;
	}

}
