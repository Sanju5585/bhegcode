/**
 *
 */
package com.bhge.core.util;

import de.hybris.platform.europe1.model.PriceRowModel;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.apache.log4j.Logger;


public class BHGEPriceRowSorterUtil
{

	private static final Logger LOG = Logger.getLogger(BHGEPriceRowSorterUtil.class);

	public Collection<PriceRowModel> sortByModifiedTime(final Collection<PriceRowModel> priceRow)
	{

		if (null != priceRow && priceRow.size() > 0)
		{

			final List<PriceRowModel> priceRows = new ArrayList<PriceRowModel>(priceRow);
			Collections.sort(priceRows, new Comparator<PriceRowModel>()
			{
				@Override
				public int compare(final PriceRowModel priceRow1, final PriceRowModel priceRow2)
				{
					return (priceRow1.getModifiedtime().compareTo(priceRow2.getModifiedtime()));
				}
			});
			Collections.reverse(priceRows);
			return priceRows;
		}
		else
		{
			LOG.error("Error in Sorting the Price Row.");
		}
		return null;
	}

}
