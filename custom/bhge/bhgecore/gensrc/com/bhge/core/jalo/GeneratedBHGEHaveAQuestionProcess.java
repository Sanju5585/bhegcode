/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.commerceservices.jalo.process.StoreFrontProcess;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.media.Media;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.commerceservices.jalo.process.StoreFrontProcess BHGEHaveAQuestionProcess}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEHaveAQuestionProcess extends StoreFrontProcess
{
	/** Qualifier of the <code>BHGEHaveAQuestionProcess.businessLine</code> attribute **/
	public static final String BUSINESSLINE = "businessLine";
	/** Qualifier of the <code>BHGEHaveAQuestionProcess.customerQuery</code> attribute **/
	public static final String CUSTOMERQUERY = "customerQuery";
	/** Qualifier of the <code>BHGEHaveAQuestionProcess.productCode</code> attribute **/
	public static final String PRODUCTCODE = "productCode";
	/** Qualifier of the <code>BHGEHaveAQuestionProcess.customerId</code> attribute **/
	public static final String CUSTOMERID = "customerId";
	/** Qualifier of the <code>BHGEHaveAQuestionProcess.haveAQuestionAttachmentFile</code> attribute **/
	public static final String HAVEAQUESTIONATTACHMENTFILE = "haveAQuestionAttachmentFile";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(StoreFrontProcess.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(BUSINESSLINE, AttributeMode.INITIAL);
		tmp.put(CUSTOMERQUERY, AttributeMode.INITIAL);
		tmp.put(PRODUCTCODE, AttributeMode.INITIAL);
		tmp.put(CUSTOMERID, AttributeMode.INITIAL);
		tmp.put(HAVEAQUESTIONATTACHMENTFILE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.businessLine</code> attribute.
	 * @return the businessLine
	 */
	public String getBusinessLine(final SessionContext ctx)
	{
		return (String)getProperty( ctx, BUSINESSLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.businessLine</code> attribute.
	 * @return the businessLine
	 */
	public String getBusinessLine()
	{
		return getBusinessLine( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.businessLine</code> attribute. 
	 * @param value the businessLine
	 */
	public void setBusinessLine(final SessionContext ctx, final String value)
	{
		setProperty(ctx, BUSINESSLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.businessLine</code> attribute. 
	 * @param value the businessLine
	 */
	public void setBusinessLine(final String value)
	{
		setBusinessLine( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.customerId</code> attribute.
	 * @return the customerId
	 */
	public String getCustomerId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.customerId</code> attribute.
	 * @return the customerId
	 */
	public String getCustomerId()
	{
		return getCustomerId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.customerId</code> attribute. 
	 * @param value the customerId
	 */
	public void setCustomerId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.customerId</code> attribute. 
	 * @param value the customerId
	 */
	public void setCustomerId(final String value)
	{
		setCustomerId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.customerQuery</code> attribute.
	 * @return the customerQuery
	 */
	public String getCustomerQuery(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERQUERY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.customerQuery</code> attribute.
	 * @return the customerQuery
	 */
	public String getCustomerQuery()
	{
		return getCustomerQuery( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.customerQuery</code> attribute. 
	 * @param value the customerQuery
	 */
	public void setCustomerQuery(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERQUERY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.customerQuery</code> attribute. 
	 * @param value the customerQuery
	 */
	public void setCustomerQuery(final String value)
	{
		setCustomerQuery( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.haveAQuestionAttachmentFile</code> attribute.
	 * @return the haveAQuestionAttachmentFile
	 */
	public Media getHaveAQuestionAttachmentFile(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, HAVEAQUESTIONATTACHMENTFILE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.haveAQuestionAttachmentFile</code> attribute.
	 * @return the haveAQuestionAttachmentFile
	 */
	public Media getHaveAQuestionAttachmentFile()
	{
		return getHaveAQuestionAttachmentFile( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.haveAQuestionAttachmentFile</code> attribute. 
	 * @param value the haveAQuestionAttachmentFile
	 */
	public void setHaveAQuestionAttachmentFile(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, HAVEAQUESTIONATTACHMENTFILE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.haveAQuestionAttachmentFile</code> attribute. 
	 * @param value the haveAQuestionAttachmentFile
	 */
	public void setHaveAQuestionAttachmentFile(final Media value)
	{
		setHaveAQuestionAttachmentFile( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.productCode</code> attribute.
	 * @return the productCode
	 */
	public String getProductCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PRODUCTCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEHaveAQuestionProcess.productCode</code> attribute.
	 * @return the productCode
	 */
	public String getProductCode()
	{
		return getProductCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.productCode</code> attribute. 
	 * @param value the productCode
	 */
	public void setProductCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PRODUCTCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEHaveAQuestionProcess.productCode</code> attribute. 
	 * @param value the productCode
	 */
	public void setProductCode(final String value)
	{
		setProductCode( getSession().getSessionContext(), value );
	}
	
}
