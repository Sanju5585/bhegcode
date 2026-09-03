/**
 *
 */
package com.bhge.core.cronjob;

import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.user.AddressModel;

import java.util.Date;
import java.util.List;


/**
 * @author marchaka
 *
 */
public class BHGESavedCartExpiryMailVO
{
	Date expiryDate;

	String savedCartName;
	
	String savedCartDescription;

	String userName;
	
	List<AbstractOrderEntryModel> entries;
	
	String sessionSoldToName;
	
	AddressModel sessionSoldToAddress;
	
	public String getSessionSoldToName()
	{
		return sessionSoldToName;
	}

	public void setSessionSoldToName(String sessionSoldToName)
	{
		this.sessionSoldToName = sessionSoldToName;
	}

	public AddressModel getSessionSoldToAddress()
	{
		return sessionSoldToAddress;
	}

	public void setSessionSoldToAddress(AddressModel sessionSoldToAddress)
	{
		this.sessionSoldToAddress = sessionSoldToAddress;
	}

	public List<AbstractOrderEntryModel> getEntries()
	{
		return entries;
	}

	public void setEntries(List<AbstractOrderEntryModel> entries)
	{
		this.entries = entries;
	}

	public Date getExpiryDate()
	{
		return expiryDate;
	}

	public void setExpiryDate(final Date expiryDate)
	{
		this.expiryDate = expiryDate;
	}

	public String getSavedCartName()
	{
		return savedCartName;
	}

	public void setSavedCartName(final String savedCartName)
	{
		this.savedCartName = savedCartName;
	}

	public String getUserName()
	{
		return userName;
	}

	public void setUserName(final String userName)
	{
		this.userName = userName;
	}

	public String getSavedCartDescription()
	{
		return savedCartDescription;
	}

	public void setSavedCartDescription(String savedCartDescription)
	{
		this.savedCartDescription = savedCartDescription;
	}
}
