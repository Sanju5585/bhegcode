/**
 *
 */
package com.bhge.core.forms;

import java.util.List;


/**
 * @author 503047662
 *
 */
public class BHGEAdvacedSearchForm
{
	private String globalSearchOperatorType;

	private List<BHGEAdvanceSearchRow> bhgeAdvanceSearchRow;

	public String getGlobalSearchOperatorType()
	{
		return globalSearchOperatorType;
	}

	public void setGlobalSearchOperatorType(final String globalSearchOperatorType)
	{
		this.globalSearchOperatorType = globalSearchOperatorType;
	}

	public List<BHGEAdvanceSearchRow> getBhgeAdvanceSearchRow()
	{
		return bhgeAdvanceSearchRow;
	}

	public void setBhgeAdvanceSearchRow(final List<BHGEAdvanceSearchRow> bhgeAdvanceSearchRow)
	{
		this.bhgeAdvanceSearchRow = bhgeAdvanceSearchRow;
	}

	@Override
	public String toString()
	{
		final StringBuilder builder = new StringBuilder();
		builder.append("BHGEAdvacedSearchForm [globalSearchOperatorType=");
		builder.append(globalSearchOperatorType);
		builder.append(", bhgeAdvanceSearchRow=");
		builder.append(bhgeAdvanceSearchRow);
		builder.append("]");
		return builder.toString();
	}


}
