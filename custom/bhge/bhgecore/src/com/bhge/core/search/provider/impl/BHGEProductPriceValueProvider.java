package com.bhge.core.search.provider.impl;

import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.europe1.model.PriceRowModel;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.util.BHGEPriceRowSorterUtil;



public class BHGEProductPriceValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider
{

	@Resource(name = "sessionService")
	SessionService sessionService;

	@Resource(name = "bhgePriceRowSorterUtil")
	BHGEPriceRowSorterUtil bhgePriceRowSorterUtil;

	private final static Logger LOG = Logger.getLogger(BHGEProductPriceValueProvider.class);

	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();


		ProductModel productModel = null;
		String priceIndexKey = "";
		String salesArea = "";
		if (model instanceof ProductModel)
		{
			productModel = (ProductModel) model;
		}
		if (productModel.getEurope1Prices() != null && !productModel.getEurope1Prices().isEmpty())
		{
			final Collection<PriceRowModel> priceRowModels = bhgePriceRowSorterUtil
					.sortByModifiedTime(productModel.getEurope1Prices());

			if (priceRowModels != null)
			{
				final Set<String> priceIndexKeyMap = new HashSet<String>();
				for (final PriceRowModel priceRowModel : priceRowModels)
				{
					final Date currentDate = new Date();

					if (priceRowModel == null || priceRowModel.getPriceCriteria() == null
							|| priceRowModel.getPriceCriteria().isEmpty())
					{
						continue;
					}

					// if price not in active window, skip
					if ((priceRowModel.getStartTime() != null && currentDate.before(priceRowModel.getStartTime()))
							|| (priceRowModel.getEndTime() != null && currentDate.after(priceRowModel.getEndTime())))
					{
						continue;
					}

					String priceCriteria = priceRowModel.getPriceCriteria();
					if (StringUtils.isNotBlank(priceCriteria))
					{
						priceCriteria = priceCriteria.replaceAll("\\s", "");
					}
					try
					{
						LOG.debug("The product is ==" + productModel.getCode());
						LOG.debug("The sales area key for price row model " + priceRowModel.getPk() + "-is"
								+ priceRowModel.getSalesAreaPriceKey());
						if (priceRowModel.getSalesAreaPriceKey() != null
								&& StringUtils.split(priceRowModel.getSalesAreaPriceKey(), "\\|").length > 1)
						{
							final String[] salesAreaPriceKeys = StringUtils.split(priceRowModel.getSalesAreaPriceKey(), "\\|");
							salesArea = salesAreaPriceKeys[1];
						}
						priceIndexKey = indexedProperty.getExportId() + "_" + priceCriteria + "_" + salesArea + "_string";
						final String priceIndexValue = priceRowModel.getCurrency().getIsocode() + "_"
								+ priceRowModel.getPrice().toString() + "_" + salesArea;
						LOG.debug("price index value is " + priceIndexValue);
						// if the price criteria does not exist in indexer
						if (!priceIndexKey.isEmpty() && !priceIndexKeyMap.contains(priceIndexKey))
						{
							priceIndexKeyMap.add(priceIndexKey);
							// add price row to indexed price values
							fieldValues.add(new FieldValue(priceIndexKey, priceIndexValue));
						}

					}
					catch (final Exception e)
					{
						LOG.error("Error indexing price for: " + priceRowModel.getProductId() + e);
					}

				}
			}

		}

		return fieldValues;
	}
}
