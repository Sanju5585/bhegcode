/**
 *
 */
package com.bhge.facades.rma.impl;

import java.util.Comparator;
import java.util.Objects;

import com.bhge.facades.rma.data.RmaReturnCartData;


public class SortByPlantName implements Comparator<RmaReturnCartData>
{

	/*
	 * (non-Javadoc)
	 *
	 * @see java.util.Comparator#compare(java.lang.Object, java.lang.Object)
	 */
	@Override
	public int compare(final RmaReturnCartData o1, final RmaReturnCartData o2)
	{
		// XXX Auto-generated method stub
		if (Objects.isNull(o1.getReturnLocation()) || Objects.isNull(o2.getReturnLocation()))
		{
			return -1;
		}
		return o1.getReturnLocation().compareToIgnoreCase(o2.getReturnLocation());

	}

}
