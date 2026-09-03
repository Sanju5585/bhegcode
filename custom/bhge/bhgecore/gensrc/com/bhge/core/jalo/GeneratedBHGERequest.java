/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGERequest}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGERequest extends GenericItem
{
	/** Qualifier of the <code>BHGERequest.requestId</code> attribute **/
	public static final String REQUESTID = "requestId";
	/** Qualifier of the <code>BHGERequest.requestNumber</code> attribute **/
	public static final String REQUESTNUMBER = "requestNumber";
	/** Qualifier of the <code>BHGERequest.requestType</code> attribute **/
	public static final String REQUESTTYPE = "requestType";
	/** Qualifier of the <code>BHGERequest.requestStatus</code> attribute **/
	public static final String REQUESTSTATUS = "requestStatus";
	/** Qualifier of the <code>BHGERequest.approver</code> attribute **/
	public static final String APPROVER = "approver";
	/** Qualifier of the <code>BHGERequest.requestDate</code> attribute **/
	public static final String REQUESTDATE = "requestDate";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(REQUESTID, AttributeMode.INITIAL);
		tmp.put(REQUESTNUMBER, AttributeMode.INITIAL);
		tmp.put(REQUESTTYPE, AttributeMode.INITIAL);
		tmp.put(REQUESTSTATUS, AttributeMode.INITIAL);
		tmp.put(APPROVER, AttributeMode.INITIAL);
		tmp.put(REQUESTDATE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.approver</code> attribute.
	 * @return the approver - String Value
	 */
	public String getApprover(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APPROVER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.approver</code> attribute.
	 * @return the approver - String Value
	 */
	public String getApprover()
	{
		return getApprover( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.approver</code> attribute. 
	 * @param value the approver - String Value
	 */
	public void setApprover(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APPROVER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.approver</code> attribute. 
	 * @param value the approver - String Value
	 */
	public void setApprover(final String value)
	{
		setApprover( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestDate</code> attribute.
	 * @return the requestDate - String Value
	 */
	public Date getRequestDate(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, REQUESTDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestDate</code> attribute.
	 * @return the requestDate - String Value
	 */
	public Date getRequestDate()
	{
		return getRequestDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestDate</code> attribute. 
	 * @param value the requestDate - String Value
	 */
	public void setRequestDate(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, REQUESTDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestDate</code> attribute. 
	 * @param value the requestDate - String Value
	 */
	public void setRequestDate(final Date value)
	{
		setRequestDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestId</code> attribute.
	 * @return the requestId - Integer Value
	 */
	public Integer getRequestId(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, REQUESTID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestId</code> attribute.
	 * @return the requestId - Integer Value
	 */
	public Integer getRequestId()
	{
		return getRequestId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestId</code> attribute. 
	 * @return the requestId - Integer Value
	 */
	public int getRequestIdAsPrimitive(final SessionContext ctx)
	{
		Integer value = getRequestId( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestId</code> attribute. 
	 * @return the requestId - Integer Value
	 */
	public int getRequestIdAsPrimitive()
	{
		return getRequestIdAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestId</code> attribute. 
	 * @param value the requestId - Integer Value
	 */
	public void setRequestId(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, REQUESTID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestId</code> attribute. 
	 * @param value the requestId - Integer Value
	 */
	public void setRequestId(final Integer value)
	{
		setRequestId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestId</code> attribute. 
	 * @param value the requestId - Integer Value
	 */
	public void setRequestId(final SessionContext ctx, final int value)
	{
		setRequestId( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestId</code> attribute. 
	 * @param value the requestId - Integer Value
	 */
	public void setRequestId(final int value)
	{
		setRequestId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestNumber</code> attribute.
	 * @return the requestNumber - String Value
	 */
	public String getRequestNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REQUESTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestNumber</code> attribute.
	 * @return the requestNumber - String Value
	 */
	public String getRequestNumber()
	{
		return getRequestNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestNumber</code> attribute. 
	 * @param value the requestNumber - String Value
	 */
	public void setRequestNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REQUESTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestNumber</code> attribute. 
	 * @param value the requestNumber - String Value
	 */
	public void setRequestNumber(final String value)
	{
		setRequestNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestStatus</code> attribute.
	 * @return the requestStatus - String Value
	 */
	public String getRequestStatus(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REQUESTSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestStatus</code> attribute.
	 * @return the requestStatus - String Value
	 */
	public String getRequestStatus()
	{
		return getRequestStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestStatus</code> attribute. 
	 * @param value the requestStatus - String Value
	 */
	public void setRequestStatus(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REQUESTSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestStatus</code> attribute. 
	 * @param value the requestStatus - String Value
	 */
	public void setRequestStatus(final String value)
	{
		setRequestStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestType</code> attribute.
	 * @return the requestType - String Value
	 */
	public String getRequestType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REQUESTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERequest.requestType</code> attribute.
	 * @return the requestType - String Value
	 */
	public String getRequestType()
	{
		return getRequestType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestType</code> attribute. 
	 * @param value the requestType - String Value
	 */
	public void setRequestType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REQUESTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERequest.requestType</code> attribute. 
	 * @param value the requestType - String Value
	 */
	public void setRequestType(final String value)
	{
		setRequestType( getSession().getSessionContext(), value );
	}
	
}
