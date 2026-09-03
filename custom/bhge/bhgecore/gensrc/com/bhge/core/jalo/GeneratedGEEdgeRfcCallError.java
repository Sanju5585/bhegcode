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
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem GEEdgeRfcCallError}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeRfcCallError extends GenericItem
{
	/** Qualifier of the <code>GEEdgeRfcCallError.orderID</code> attribute **/
	public static final String ORDERID = "orderID";
	/** Qualifier of the <code>GEEdgeRfcCallError.errorCode</code> attribute **/
	public static final String ERRORCODE = "errorCode";
	/** Qualifier of the <code>GEEdgeRfcCallError.errorType</code> attribute **/
	public static final String ERRORTYPE = "errorType";
	/** Qualifier of the <code>GEEdgeRfcCallError.errorDescription</code> attribute **/
	public static final String ERRORDESCRIPTION = "errorDescription";
	/** Qualifier of the <code>GEEdgeRfcCallError.errorTime</code> attribute **/
	public static final String ERRORTIME = "errorTime";
	/** Qualifier of the <code>GEEdgeRfcCallError.currentUserEmail</code> attribute **/
	public static final String CURRENTUSEREMAIL = "currentUserEmail";
	/** Qualifier of the <code>GEEdgeRfcCallError.currentSoldToId</code> attribute **/
	public static final String CURRENTSOLDTOID = "currentSoldToId";
	/** Qualifier of the <code>GEEdgeRfcCallError.criticality</code> attribute **/
	public static final String CRITICALITY = "criticality";
	/** Qualifier of the <code>GEEdgeRfcCallError.status</code> attribute **/
	public static final String STATUS = "status";
	/** Qualifier of the <code>GEEdgeRfcCallError.requestParameterToSAP</code> attribute **/
	public static final String REQUESTPARAMETERTOSAP = "requestParameterToSAP";
	/** Qualifier of the <code>GEEdgeRfcCallError.responseParameterFromSAP</code> attribute **/
	public static final String RESPONSEPARAMETERFROMSAP = "responseParameterFromSAP";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ORDERID, AttributeMode.INITIAL);
		tmp.put(ERRORCODE, AttributeMode.INITIAL);
		tmp.put(ERRORTYPE, AttributeMode.INITIAL);
		tmp.put(ERRORDESCRIPTION, AttributeMode.INITIAL);
		tmp.put(ERRORTIME, AttributeMode.INITIAL);
		tmp.put(CURRENTUSEREMAIL, AttributeMode.INITIAL);
		tmp.put(CURRENTSOLDTOID, AttributeMode.INITIAL);
		tmp.put(CRITICALITY, AttributeMode.INITIAL);
		tmp.put(STATUS, AttributeMode.INITIAL);
		tmp.put(REQUESTPARAMETERTOSAP, AttributeMode.INITIAL);
		tmp.put(RESPONSEPARAMETERFROMSAP, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.criticality</code> attribute.
	 * @return the criticality
	 */
	public String getCriticality(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CRITICALITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.criticality</code> attribute.
	 * @return the criticality
	 */
	public String getCriticality()
	{
		return getCriticality( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.criticality</code> attribute. 
	 * @param value the criticality
	 */
	public void setCriticality(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CRITICALITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.criticality</code> attribute. 
	 * @param value the criticality
	 */
	public void setCriticality(final String value)
	{
		setCriticality( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.currentSoldToId</code> attribute.
	 * @return the currentSoldToId
	 */
	public String getCurrentSoldToId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CURRENTSOLDTOID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.currentSoldToId</code> attribute.
	 * @return the currentSoldToId
	 */
	public String getCurrentSoldToId()
	{
		return getCurrentSoldToId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.currentSoldToId</code> attribute. 
	 * @param value the currentSoldToId
	 */
	public void setCurrentSoldToId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CURRENTSOLDTOID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.currentSoldToId</code> attribute. 
	 * @param value the currentSoldToId
	 */
	public void setCurrentSoldToId(final String value)
	{
		setCurrentSoldToId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.currentUserEmail</code> attribute.
	 * @return the currentUserEmail
	 */
	public String getCurrentUserEmail(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CURRENTUSEREMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.currentUserEmail</code> attribute.
	 * @return the currentUserEmail
	 */
	public String getCurrentUserEmail()
	{
		return getCurrentUserEmail( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.currentUserEmail</code> attribute. 
	 * @param value the currentUserEmail
	 */
	public void setCurrentUserEmail(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CURRENTUSEREMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.currentUserEmail</code> attribute. 
	 * @param value the currentUserEmail
	 */
	public void setCurrentUserEmail(final String value)
	{
		setCurrentUserEmail( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.errorCode</code> attribute.
	 * @return the errorCode
	 */
	public String getErrorCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERRORCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.errorCode</code> attribute.
	 * @return the errorCode
	 */
	public String getErrorCode()
	{
		return getErrorCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.errorCode</code> attribute. 
	 * @param value the errorCode
	 */
	public void setErrorCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERRORCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.errorCode</code> attribute. 
	 * @param value the errorCode
	 */
	public void setErrorCode(final String value)
	{
		setErrorCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.errorDescription</code> attribute.
	 * @return the errorDescription
	 */
	public String getErrorDescription(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERRORDESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.errorDescription</code> attribute.
	 * @return the errorDescription
	 */
	public String getErrorDescription()
	{
		return getErrorDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.errorDescription</code> attribute. 
	 * @param value the errorDescription
	 */
	public void setErrorDescription(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERRORDESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.errorDescription</code> attribute. 
	 * @param value the errorDescription
	 */
	public void setErrorDescription(final String value)
	{
		setErrorDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.errorTime</code> attribute.
	 * @return the errorTime
	 */
	public String getErrorTime(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERRORTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.errorTime</code> attribute.
	 * @return the errorTime
	 */
	public String getErrorTime()
	{
		return getErrorTime( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.errorTime</code> attribute. 
	 * @param value the errorTime
	 */
	public void setErrorTime(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERRORTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.errorTime</code> attribute. 
	 * @param value the errorTime
	 */
	public void setErrorTime(final String value)
	{
		setErrorTime( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.errorType</code> attribute.
	 * @return the errorType
	 */
	public String getErrorType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERRORTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.errorType</code> attribute.
	 * @return the errorType
	 */
	public String getErrorType()
	{
		return getErrorType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.errorType</code> attribute. 
	 * @param value the errorType
	 */
	public void setErrorType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERRORTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.errorType</code> attribute. 
	 * @param value the errorType
	 */
	public void setErrorType(final String value)
	{
		setErrorType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.orderID</code> attribute.
	 * @return the orderID
	 */
	public String getOrderID(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ORDERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.orderID</code> attribute.
	 * @return the orderID
	 */
	public String getOrderID()
	{
		return getOrderID( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.orderID</code> attribute. 
	 * @param value the orderID
	 */
	public void setOrderID(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ORDERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.orderID</code> attribute. 
	 * @param value the orderID
	 */
	public void setOrderID(final String value)
	{
		setOrderID( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.requestParameterToSAP</code> attribute.
	 * @return the requestParameterToSAP
	 */
	public String getRequestParameterToSAP(final SessionContext ctx)
	{
		return (String)getProperty( ctx, REQUESTPARAMETERTOSAP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.requestParameterToSAP</code> attribute.
	 * @return the requestParameterToSAP
	 */
	public String getRequestParameterToSAP()
	{
		return getRequestParameterToSAP( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.requestParameterToSAP</code> attribute. 
	 * @param value the requestParameterToSAP
	 */
	public void setRequestParameterToSAP(final SessionContext ctx, final String value)
	{
		setProperty(ctx, REQUESTPARAMETERTOSAP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.requestParameterToSAP</code> attribute. 
	 * @param value the requestParameterToSAP
	 */
	public void setRequestParameterToSAP(final String value)
	{
		setRequestParameterToSAP( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.responseParameterFromSAP</code> attribute.
	 * @return the responseParameterFromSAP
	 */
	public String getResponseParameterFromSAP(final SessionContext ctx)
	{
		return (String)getProperty( ctx, RESPONSEPARAMETERFROMSAP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.responseParameterFromSAP</code> attribute.
	 * @return the responseParameterFromSAP
	 */
	public String getResponseParameterFromSAP()
	{
		return getResponseParameterFromSAP( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.responseParameterFromSAP</code> attribute. 
	 * @param value the responseParameterFromSAP
	 */
	public void setResponseParameterFromSAP(final SessionContext ctx, final String value)
	{
		setProperty(ctx, RESPONSEPARAMETERFROMSAP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.responseParameterFromSAP</code> attribute. 
	 * @param value the responseParameterFromSAP
	 */
	public void setResponseParameterFromSAP(final String value)
	{
		setResponseParameterFromSAP( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.status</code> attribute.
	 * @return the status
	 */
	public Boolean isStatus(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, STATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.status</code> attribute.
	 * @return the status
	 */
	public Boolean isStatus()
	{
		return isStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.status</code> attribute. 
	 * @return the status
	 */
	public boolean isStatusAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isStatus( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeRfcCallError.status</code> attribute. 
	 * @return the status
	 */
	public boolean isStatusAsPrimitive()
	{
		return isStatusAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.status</code> attribute. 
	 * @param value the status
	 */
	public void setStatus(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, STATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.status</code> attribute. 
	 * @param value the status
	 */
	public void setStatus(final Boolean value)
	{
		setStatus( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.status</code> attribute. 
	 * @param value the status
	 */
	public void setStatus(final SessionContext ctx, final boolean value)
	{
		setStatus( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeRfcCallError.status</code> attribute. 
	 * @param value the status
	 */
	public void setStatus(final boolean value)
	{
		setStatus( getSession().getSessionContext(), value );
	}
	
}
