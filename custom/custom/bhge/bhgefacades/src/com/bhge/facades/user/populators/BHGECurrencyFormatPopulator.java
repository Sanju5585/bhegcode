/**
 *
 */
package com.bhge.facades.user.populators;

import de.hybris.platform.converters.impl.AbstractPopulatingConverter;

import org.springframework.util.Assert;

import com.bhge.core.model.BHGECurrencyFormatModel;
import com.bhge.facades.user.data.BHGECurrencyFormatData;


/**
 * @author 212595527
 *
 */
public class BHGECurrencyFormatPopulator extends AbstractPopulatingConverter<BHGECurrencyFormatModel, BHGECurrencyFormatData>
{
	@Override
	protected BHGECurrencyFormatData createTarget()
	{
		return new BHGECurrencyFormatData();
	}

	@Override
	public void populate(final BHGECurrencyFormatModel source, final BHGECurrencyFormatData target)
	{
		Assert.notNull(source, "Parameter source cannot be null.");
		Assert.notNull(target, "Parameter target cannot be null.");
		target.setCode(source.getCode());
		target.setDisplayValue(source.getCurrencyDisplay());
		target.setIsDefalutFormat(source.getIsDefaultLocale());
	}
}