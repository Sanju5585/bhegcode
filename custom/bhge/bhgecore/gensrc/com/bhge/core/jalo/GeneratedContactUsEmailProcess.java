/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.BHGEContactUs;
import de.hybris.platform.commerceservices.jalo.process.StoreFrontCustomerProcess;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.bhge.core.jalo.ContactUsEmailProcess ContactUsEmailProcess}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedContactUsEmailProcess extends StoreFrontCustomerProcess
{
	/** Qualifier of the <code>ContactUsEmailProcess.contactUsForm</code> attribute **/
	public static final String CONTACTUSFORM = "contactUsForm";
	/** Qualifier of the <code>ContactUsEmailProcess.ccList</code> attribute **/
	public static final String CCLIST = "ccList";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(StoreFrontCustomerProcess.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(CONTACTUSFORM, AttributeMode.INITIAL);
		tmp.put(CCLIST, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactUsEmailProcess.ccList</code> attribute.
	 * @return the ccList - Requester Email addresses
	 */
	public Collection<String> getCcList(final SessionContext ctx)
	{
		Collection<String> coll = (Collection<String>)getProperty( ctx, CCLIST);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactUsEmailProcess.ccList</code> attribute.
	 * @return the ccList - Requester Email addresses
	 */
	public Collection<String> getCcList()
	{
		return getCcList( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactUsEmailProcess.ccList</code> attribute. 
	 * @param value the ccList - Requester Email addresses
	 */
	public void setCcList(final SessionContext ctx, final Collection<String> value)
	{
		setProperty(ctx, CCLIST,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactUsEmailProcess.ccList</code> attribute. 
	 * @param value the ccList - Requester Email addresses
	 */
	public void setCcList(final Collection<String> value)
	{
		setCcList( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactUsEmailProcess.contactUsForm</code> attribute.
	 * @return the contactUsForm
	 */
	public BHGEContactUs getContactUsForm(final SessionContext ctx)
	{
		return (BHGEContactUs)getProperty( ctx, CONTACTUSFORM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ContactUsEmailProcess.contactUsForm</code> attribute.
	 * @return the contactUsForm
	 */
	public BHGEContactUs getContactUsForm()
	{
		return getContactUsForm( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactUsEmailProcess.contactUsForm</code> attribute. 
	 * @param value the contactUsForm
	 */
	public void setContactUsForm(final SessionContext ctx, final BHGEContactUs value)
	{
		setProperty(ctx, CONTACTUSFORM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ContactUsEmailProcess.contactUsForm</code> attribute. 
	 * @param value the contactUsForm
	 */
	public void setContactUsForm(final BHGEContactUs value)
	{
		setContactUsForm( getSession().getSessionContext(), value );
	}
	
}
