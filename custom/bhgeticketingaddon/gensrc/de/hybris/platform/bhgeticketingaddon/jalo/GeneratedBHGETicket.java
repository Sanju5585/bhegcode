/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 *  
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.bhgeticketingaddon.jalo;

import de.hybris.platform.bhgeticketingaddon.constants.BhgeticketingaddonConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.media.Media;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGETicket}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGETicket extends GenericItem
{
	/** Qualifier of the <code>BHGETicket.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>BHGETicket.message</code> attribute **/
	public static final String MESSAGE = "message";
	/** Qualifier of the <code>BHGETicket.phoneNo</code> attribute **/
	public static final String PHONENO = "phoneNo";
	/** Qualifier of the <code>BHGETicket.subject</code> attribute **/
	public static final String SUBJECT = "subject";
	/** Qualifier of the <code>BHGETicket.emailId</code> attribute **/
	public static final String EMAILID = "emailId";
	/** Qualifier of the <code>BHGETicket.attachFile</code> attribute **/
	public static final String ATTACHFILE = "attachFile";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(NAME, AttributeMode.INITIAL);
		tmp.put(MESSAGE, AttributeMode.INITIAL);
		tmp.put(PHONENO, AttributeMode.INITIAL);
		tmp.put(SUBJECT, AttributeMode.INITIAL);
		tmp.put(EMAILID, AttributeMode.INITIAL);
		tmp.put(ATTACHFILE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.attachFile</code> attribute.
	 * @return the attachFile
	 */
	public Media getAttachFile(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, ATTACHFILE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.attachFile</code> attribute.
	 * @return the attachFile
	 */
	public Media getAttachFile()
	{
		return getAttachFile( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.attachFile</code> attribute. 
	 * @param value the attachFile
	 */
	public void setAttachFile(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, ATTACHFILE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.attachFile</code> attribute. 
	 * @param value the attachFile
	 */
	public void setAttachFile(final Media value)
	{
		setAttachFile( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.emailId</code> attribute.
	 * @return the emailId
	 */
	public String getEmailId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.emailId</code> attribute.
	 * @return the emailId
	 */
	public String getEmailId()
	{
		return getEmailId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.emailId</code> attribute. 
	 * @param value the emailId
	 */
	public void setEmailId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.emailId</code> attribute. 
	 * @param value the emailId
	 */
	public void setEmailId(final String value)
	{
		setEmailId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.message</code> attribute.
	 * @return the message
	 */
	public String getMessage(final SessionContext ctx)
	{
		return (String)getProperty( ctx, MESSAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.message</code> attribute.
	 * @return the message
	 */
	public String getMessage()
	{
		return getMessage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.message</code> attribute. 
	 * @param value the message
	 */
	public void setMessage(final SessionContext ctx, final String value)
	{
		setProperty(ctx, MESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.message</code> attribute. 
	 * @param value the message
	 */
	public void setMessage(final String value)
	{
		setMessage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.phoneNo</code> attribute.
	 * @return the phoneNo
	 */
	public String getPhoneNo(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PHONENO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.phoneNo</code> attribute.
	 * @return the phoneNo
	 */
	public String getPhoneNo()
	{
		return getPhoneNo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.phoneNo</code> attribute. 
	 * @param value the phoneNo
	 */
	public void setPhoneNo(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PHONENO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.phoneNo</code> attribute. 
	 * @param value the phoneNo
	 */
	public void setPhoneNo(final String value)
	{
		setPhoneNo( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.subject</code> attribute.
	 * @return the subject
	 */
	public String getSubject(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SUBJECT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGETicket.subject</code> attribute.
	 * @return the subject
	 */
	public String getSubject()
	{
		return getSubject( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.subject</code> attribute. 
	 * @param value the subject
	 */
	public void setSubject(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SUBJECT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGETicket.subject</code> attribute. 
	 * @param value the subject
	 */
	public void setSubject(final String value)
	{
		setSubject( getSession().getSessionContext(), value );
	}
	
}
