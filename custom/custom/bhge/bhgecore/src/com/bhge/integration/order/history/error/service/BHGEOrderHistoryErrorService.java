package com.bhge.integration.order.history.error.service;

public interface BHGEOrderHistoryErrorService
{

	/* public boolean handleCriticalError(String soldToId,String orderType); */
	public boolean handleNonCriticalError(String soldToId, String orderType, String Errmsg);

	boolean handleNonCriticalErrorForRMA(String soldToId, String orderType, String Errmsg);


}
