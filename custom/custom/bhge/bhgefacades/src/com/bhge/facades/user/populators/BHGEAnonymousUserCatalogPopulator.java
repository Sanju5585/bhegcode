/**
 *
 */
package com.bhge.facades.user.populators;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUnitData;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.product.data.CategoryData;
import de.hybris.platform.commercefacades.user.data.CountryData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.dto.converter.Converter;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.apache.commons.collections4.CollectionUtils;

import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.facades.user.data.BHGEAnonymousUserCatalogData;


/**
 * Custom populate to populate guest country and related fields
 *
 * @author 212695810
 *
 */
public class BHGEAnonymousUserCatalogPopulator implements Populator<BHGEAnonymousUserCatalogModel, BHGEAnonymousUserCatalogData>
{
	private Converter<CategoryModel, CategoryData> categoryConverter;
	private Converter<B2BUnitModel, B2BUnitData> b2bUnitConverter;
	private Converter<CountryModel, CountryData> countryConverter;

	@Override
	public void populate(final BHGEAnonymousUserCatalogModel source, final BHGEAnonymousUserCatalogData target)
			throws ConversionException
	{
		target.setCountry(countryConverter.convert(source.getCountry()));
		if(Objects.nonNull(source.getB2BUnit()))
		{
			target.setB2bUnit(b2bUnitConverter.convert(source.getB2BUnit()));
		}
		final List<CategoryData> categoryDataList = new ArrayList<CategoryData>();
		if(CollectionUtils.isNotEmpty(source.getCategories()))
		{
			for (final CategoryModel categoryModel : source.getCategories())
			{
				final CategoryData categoryData = categoryConverter.convert(categoryModel);
				categoryDataList.add(categoryData);
			}
		}
		target.setCategories(categoryDataList);
		target.setSalesOrg(source.getSalesOrg());
		target.setDistributionChannel(source.getDistributionChannel());
		target.setDivision(source.getDivision());
	}

	/**
	 * @return the categoryConverter
	 */
	public Converter<CategoryModel, CategoryData> getCategoryConverter()
	{
		return categoryConverter;
	}

	/**
	 * @param categoryConverter
	 *           the categoryConverter to set
	 */
	public void setCategoryConverter(final Converter<CategoryModel, CategoryData> categoryConverter)
	{
		this.categoryConverter = categoryConverter;
	}

	/**
	 * @return the b2bUnitConverter
	 */
	public Converter<B2BUnitModel, B2BUnitData> getB2bUnitConverter()
	{
		return b2bUnitConverter;
	}

	/**
	 * @param b2bUnitConverter
	 *           the b2bUnitConverter to set
	 */
	public void setB2bUnitConverter(final Converter<B2BUnitModel, B2BUnitData> b2bUnitConverter)
	{
		this.b2bUnitConverter = b2bUnitConverter;
	}

	/**
	 * @return the countryConverter
	 */
	public Converter<CountryModel, CountryData> getCountryConverter()
	{
		return countryConverter;
	}

	/**
	 * @param countryConverter
	 *           the countryConverter to set
	 */
	public void setCountryConverter(final Converter<CountryModel, CountryData> countryConverter)
	{
		this.countryConverter = countryConverter;
	}

}
