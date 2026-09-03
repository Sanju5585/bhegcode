/**
 *
 */
package com.bhge.core.mailmessages.context;

import com.bhge.core.cronjob.BHGESavedCartExpiryMailVO;



/**
 * @author marchaka
 *
 */
public class BHGESavedCartExpiryMailContext
{
	BHGESavedCartExpiryMailVO geEdgeSavedCartsDetails;

	public BHGESavedCartExpiryMailVO getGeEdgeSavedCartsDetails()
	{
		return geEdgeSavedCartsDetails;
	}

	public void setGeEdgeSavedCartsDetails(final BHGESavedCartExpiryMailVO geEdgeSavedCartsDetails)
	{
		this.geEdgeSavedCartsDetails = geEdgeSavedCartsDetails;
	}
}
