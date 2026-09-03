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
import de.hybris.platform.bhgeticketingaddon.jalo.BHGETicket;
import de.hybris.platform.bhgeticketingaddon.jalo.process.BHGETicketProcess;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.JaloSystemException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.extension.Extension;
import de.hybris.platform.jalo.media.Media;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.JaloGenericCreationException;
import de.hybris.platform.ticket.jalo.CsTicket;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type <code>BhgeticketingaddonManager</code>.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBhgeticketingaddonManager extends Extension
{
	protected static final Map<String, Map<String, AttributeMode>> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, Map<String, AttributeMode>> ttmp = new HashMap();
		Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put("name", AttributeMode.INITIAL);
		tmp.put("message", AttributeMode.INITIAL);
		tmp.put("phoneNo", AttributeMode.INITIAL);
		tmp.put("subject", AttributeMode.INITIAL);
		tmp.put("emailId", AttributeMode.INITIAL);
		tmp.put("attachFile", AttributeMode.INITIAL);
		tmp.put("attachFiles", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.ticket.jalo.CsTicket", Collections.unmodifiableMap(tmp));
		DEFAULT_INITIAL_ATTRIBUTES = ttmp;
	}
	@Override
	public Map<String, AttributeMode> getDefaultAttributeModes(final Class<? extends Item> itemClass)
	{
		Map<String, AttributeMode> ret = new HashMap<>();
		final Map<String, AttributeMode> attr = DEFAULT_INITIAL_ATTRIBUTES.get(itemClass.getName());
		if (attr != null)
		{
			ret.putAll(attr);
		}
		return ret;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.attachFile</code> attribute.
	 * @return the attachFile
	 */
	public Media getAttachFile(final SessionContext ctx, final CsTicket item)
	{
		return (Media)item.getProperty( ctx, BhgeticketingaddonConstants.Attributes.CsTicket.ATTACHFILE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.attachFile</code> attribute.
	 * @return the attachFile
	 */
	public Media getAttachFile(final CsTicket item)
	{
		return getAttachFile( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.attachFile</code> attribute. 
	 * @param value the attachFile
	 */
	public void setAttachFile(final SessionContext ctx, final CsTicket item, final Media value)
	{
		item.setProperty(ctx, BhgeticketingaddonConstants.Attributes.CsTicket.ATTACHFILE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.attachFile</code> attribute. 
	 * @param value the attachFile
	 */
	public void setAttachFile(final CsTicket item, final Media value)
	{
		setAttachFile( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.attachFiles</code> attribute.
	 * @return the attachFiles
	 */
	public Collection<Media> getAttachFiles(final SessionContext ctx, final CsTicket item)
	{
		Collection<Media> coll = (Collection<Media>)item.getProperty( ctx, BhgeticketingaddonConstants.Attributes.CsTicket.ATTACHFILES);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.attachFiles</code> attribute.
	 * @return the attachFiles
	 */
	public Collection<Media> getAttachFiles(final CsTicket item)
	{
		return getAttachFiles( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.attachFiles</code> attribute. 
	 * @param value the attachFiles
	 */
	public void setAttachFiles(final SessionContext ctx, final CsTicket item, final Collection<Media> value)
	{
		item.setProperty(ctx, BhgeticketingaddonConstants.Attributes.CsTicket.ATTACHFILES,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.attachFiles</code> attribute. 
	 * @param value the attachFiles
	 */
	public void setAttachFiles(final CsTicket item, final Collection<Media> value)
	{
		setAttachFiles( getSession().getSessionContext(), item, value );
	}
	
	public BHGETicket createBHGETicket(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeticketingaddonConstants.TC.BHGETICKET );
			return (BHGETicket)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGETicket : "+e.getMessage(), 0 );
		}
	}
	
	public BHGETicket createBHGETicket(final Map attributeValues)
	{
		return createBHGETicket( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGETicketProcess createBHGETicketProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeticketingaddonConstants.TC.BHGETICKETPROCESS );
			return (BHGETicketProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGETicketProcess : "+e.getMessage(), 0 );
		}
	}
	
	public BHGETicketProcess createBHGETicketProcess(final Map attributeValues)
	{
		return createBHGETicketProcess( getSession().getSessionContext(), attributeValues );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.emailId</code> attribute.
	 * @return the emailId
	 */
	public String getEmailId(final SessionContext ctx, final CsTicket item)
	{
		return (String)item.getProperty( ctx, BhgeticketingaddonConstants.Attributes.CsTicket.EMAILID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.emailId</code> attribute.
	 * @return the emailId
	 */
	public String getEmailId(final CsTicket item)
	{
		return getEmailId( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.emailId</code> attribute. 
	 * @param value the emailId
	 */
	public void setEmailId(final SessionContext ctx, final CsTicket item, final String value)
	{
		item.setProperty(ctx, BhgeticketingaddonConstants.Attributes.CsTicket.EMAILID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.emailId</code> attribute. 
	 * @param value the emailId
	 */
	public void setEmailId(final CsTicket item, final String value)
	{
		setEmailId( getSession().getSessionContext(), item, value );
	}
	
	@Override
	public String getName()
	{
		return BhgeticketingaddonConstants.EXTENSIONNAME;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.message</code> attribute.
	 * @return the message
	 */
	public String getMessage(final SessionContext ctx, final CsTicket item)
	{
		return (String)item.getProperty( ctx, BhgeticketingaddonConstants.Attributes.CsTicket.MESSAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.message</code> attribute.
	 * @return the message
	 */
	public String getMessage(final CsTicket item)
	{
		return getMessage( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.message</code> attribute. 
	 * @param value the message
	 */
	public void setMessage(final SessionContext ctx, final CsTicket item, final String value)
	{
		item.setProperty(ctx, BhgeticketingaddonConstants.Attributes.CsTicket.MESSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.message</code> attribute. 
	 * @param value the message
	 */
	public void setMessage(final CsTicket item, final String value)
	{
		setMessage( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx, final CsTicket item)
	{
		return (String)item.getProperty( ctx, BhgeticketingaddonConstants.Attributes.CsTicket.NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.name</code> attribute.
	 * @return the name
	 */
	public String getName(final CsTicket item)
	{
		return getName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final CsTicket item, final String value)
	{
		item.setProperty(ctx, BhgeticketingaddonConstants.Attributes.CsTicket.NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final CsTicket item, final String value)
	{
		setName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.phoneNo</code> attribute.
	 * @return the phoneNo
	 */
	public String getPhoneNo(final SessionContext ctx, final CsTicket item)
	{
		return (String)item.getProperty( ctx, BhgeticketingaddonConstants.Attributes.CsTicket.PHONENO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.phoneNo</code> attribute.
	 * @return the phoneNo
	 */
	public String getPhoneNo(final CsTicket item)
	{
		return getPhoneNo( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.phoneNo</code> attribute. 
	 * @param value the phoneNo
	 */
	public void setPhoneNo(final SessionContext ctx, final CsTicket item, final String value)
	{
		item.setProperty(ctx, BhgeticketingaddonConstants.Attributes.CsTicket.PHONENO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.phoneNo</code> attribute. 
	 * @param value the phoneNo
	 */
	public void setPhoneNo(final CsTicket item, final String value)
	{
		setPhoneNo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.subject</code> attribute.
	 * @return the subject
	 */
	public String getSubject(final SessionContext ctx, final CsTicket item)
	{
		return (String)item.getProperty( ctx, BhgeticketingaddonConstants.Attributes.CsTicket.SUBJECT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CsTicket.subject</code> attribute.
	 * @return the subject
	 */
	public String getSubject(final CsTicket item)
	{
		return getSubject( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.subject</code> attribute. 
	 * @param value the subject
	 */
	public void setSubject(final SessionContext ctx, final CsTicket item, final String value)
	{
		item.setProperty(ctx, BhgeticketingaddonConstants.Attributes.CsTicket.SUBJECT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CsTicket.subject</code> attribute. 
	 * @param value the subject
	 */
	public void setSubject(final CsTicket item, final String value)
	{
		setSubject( getSession().getSessionContext(), item, value );
	}
	
}
