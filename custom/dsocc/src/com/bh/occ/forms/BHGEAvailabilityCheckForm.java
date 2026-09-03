package com.bh.occ.forms;


import org.apache.commons.lang3.builder.ToStringBuilder;

import java.io.Serializable;

public class BHGEAvailabilityCheckForm implements Serializable
{

	private String partNum;
	private String qty;
	private String csvInput;
	private String endCustomerRefNum;
	private String defaultShipTo;
	private String isHomePage;
	private String isInvPage;
	private String defaultPlant;

	public String getDefaultPlant()
	{
		return defaultPlant;
	}

	public void setDefaultPlant(final String defaultPlant)
	{
		this.defaultPlant = defaultPlant;
	}

	public String getIsHomePage()
	{
		return isHomePage;
	}

	public void setIsHomePage(final String isHomePage)
	{
		this.isHomePage = isHomePage;
	}

	public String getIsInvPage()
	{
		return isInvPage;
	}

	public void setIsInvPage(final String isInvPage)
	{
		this.isInvPage = isInvPage;
	}

	public String getPartNum()
	{
		return partNum;
	}

	public void setPartNum(final String partNum)
	{
		this.partNum = partNum;
	}

	public String getQty()
	{
		return qty;
	}

	public void setQty(final String qty)
	{
		this.qty = qty;
	}

	public String getCsvInput()
	{
		return csvInput;
	}

	public void setCsvInput(final String csvInput)
	{
		this.csvInput = csvInput;
	}

	public String getEndCustomerRefNum()
	{
		return endCustomerRefNum;
	}

	public void setEndCustomerRefNum(final String endCustomerRefNum)
	{
		this.endCustomerRefNum = endCustomerRefNum;
	}

	public String getDefaultShipTo()
	{
		return defaultShipTo;
	}

	public void setDefaultShipTo(final String defaultShipTo)
	{
		this.defaultShipTo = defaultShipTo;
	}


	@Override
	public String toString() {
		return new ToStringBuilder(this)
				.append("partNum", partNum)
				.append("qty", qty)
				.append("csvInput", csvInput)
				.append("endCustomerRefNum", endCustomerRefNum)
				.append("defaultShipTo", defaultShipTo)
				.append("isHomePage", isHomePage)
				.append("isInvPage", isInvPage)
				.append("defaultPlant", defaultPlant)
				.toString();
	}
}