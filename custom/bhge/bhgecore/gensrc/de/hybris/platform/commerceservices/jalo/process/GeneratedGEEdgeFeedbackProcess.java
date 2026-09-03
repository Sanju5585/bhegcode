/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 *  
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.commerceservices.jalo.process;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.commerceservices.jalo.process.StoreFrontProcess;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.jalo.media.Media;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.commerceservices.jalo.process.GEEdgeFeedbackProcess GEEdgeFeedbackProcess}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedGEEdgeFeedbackProcess extends StoreFrontProcess
{
	/** Qualifier of the <code>GEEdgeFeedbackProcess.emailID</code> attribute **/
	public static final String EMAILID = "emailID";
	/** Qualifier of the <code>GEEdgeFeedbackProcess.emailSubject</code> attribute **/
	public static final String EMAILSUBJECT = "emailSubject";
	/** Qualifier of the <code>GEEdgeFeedbackProcess.emailBody</code> attribute **/
	public static final String EMAILBODY = "emailBody";
	/** Qualifier of the <code>GEEdgeFeedbackProcess.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>GEEdgeFeedbackProcess.phoneNo</code> attribute **/
	public static final String PHONENO = "phoneNo";
	/** Qualifier of the <code>GEEdgeFeedbackProcess.emailType</code> attribute **/
	public static final String EMAILTYPE = "emailType";
	/** Qualifier of the <code>GEEdgeFeedbackProcess.feedBackEmailBody</code> attribute **/
	public static final String FEEDBACKEMAILBODY = "feedBackEmailBody";
	/** Qualifier of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFile</code> attribute **/
	public static final String FEEDBACKATTACHMENTFILE = "feedbackAttachmentFile";
	/** Qualifier of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFiles</code> attribute **/
	public static final String FEEDBACKATTACHMENTFILES = "feedbackAttachmentFiles";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(StoreFrontProcess.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(EMAILID, AttributeMode.INITIAL);
		tmp.put(EMAILSUBJECT, AttributeMode.INITIAL);
		tmp.put(EMAILBODY, AttributeMode.INITIAL);
		tmp.put(NAME, AttributeMode.INITIAL);
		tmp.put(PHONENO, AttributeMode.INITIAL);
		tmp.put(EMAILTYPE, AttributeMode.INITIAL);
		tmp.put(FEEDBACKEMAILBODY, AttributeMode.INITIAL);
		tmp.put(FEEDBACKATTACHMENTFILE, AttributeMode.INITIAL);
		tmp.put(FEEDBACKATTACHMENTFILES, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.emailBody</code> attribute.
	 * @return the emailBody
	 */
	public String getEmailBody(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILBODY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.emailBody</code> attribute.
	 * @return the emailBody
	 */
	public String getEmailBody()
	{
		return getEmailBody( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.emailBody</code> attribute. 
	 * @param value the emailBody
	 */
	public void setEmailBody(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILBODY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.emailBody</code> attribute. 
	 * @param value the emailBody
	 */
	public void setEmailBody(final String value)
	{
		setEmailBody( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.emailID</code> attribute.
	 * @return the emailID
	 */
	public String getEmailID(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.emailID</code> attribute.
	 * @return the emailID
	 */
	public String getEmailID()
	{
		return getEmailID( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.emailID</code> attribute. 
	 * @param value the emailID
	 */
	public void setEmailID(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.emailID</code> attribute. 
	 * @param value the emailID
	 */
	public void setEmailID(final String value)
	{
		setEmailID( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.emailSubject</code> attribute.
	 * @return the emailSubject
	 */
	public String getEmailSubject(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILSUBJECT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.emailSubject</code> attribute.
	 * @return the emailSubject
	 */
	public String getEmailSubject()
	{
		return getEmailSubject( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.emailSubject</code> attribute. 
	 * @param value the emailSubject
	 */
	public void setEmailSubject(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILSUBJECT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.emailSubject</code> attribute. 
	 * @param value the emailSubject
	 */
	public void setEmailSubject(final String value)
	{
		setEmailSubject( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.emailType</code> attribute.
	 * @return the emailType
	 */
	public String getEmailType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMAILTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.emailType</code> attribute.
	 * @return the emailType
	 */
	public String getEmailType()
	{
		return getEmailType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.emailType</code> attribute. 
	 * @param value the emailType
	 */
	public void setEmailType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMAILTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.emailType</code> attribute. 
	 * @param value the emailType
	 */
	public void setEmailType(final String value)
	{
		setEmailType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFile</code> attribute.
	 * @return the feedbackAttachmentFile
	 */
	public Media getFeedbackAttachmentFile(final SessionContext ctx)
	{
		return (Media)getProperty( ctx, FEEDBACKATTACHMENTFILE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFile</code> attribute.
	 * @return the feedbackAttachmentFile
	 */
	public Media getFeedbackAttachmentFile()
	{
		return getFeedbackAttachmentFile( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFile</code> attribute. 
	 * @param value the feedbackAttachmentFile
	 */
	public void setFeedbackAttachmentFile(final SessionContext ctx, final Media value)
	{
		setProperty(ctx, FEEDBACKATTACHMENTFILE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFile</code> attribute. 
	 * @param value the feedbackAttachmentFile
	 */
	public void setFeedbackAttachmentFile(final Media value)
	{
		setFeedbackAttachmentFile( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFiles</code> attribute.
	 * @return the feedbackAttachmentFiles - store the user provided image as paste attachment.
	 */
	public Collection<Media> getFeedbackAttachmentFiles(final SessionContext ctx)
	{
		Collection<Media> coll = (Collection<Media>)getProperty( ctx, FEEDBACKATTACHMENTFILES);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFiles</code> attribute.
	 * @return the feedbackAttachmentFiles - store the user provided image as paste attachment.
	 */
	public Collection<Media> getFeedbackAttachmentFiles()
	{
		return getFeedbackAttachmentFiles( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFiles</code> attribute. 
	 * @param value the feedbackAttachmentFiles - store the user provided image as paste attachment.
	 */
	public void setFeedbackAttachmentFiles(final SessionContext ctx, final Collection<Media> value)
	{
		setProperty(ctx, FEEDBACKATTACHMENTFILES,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.feedbackAttachmentFiles</code> attribute. 
	 * @param value the feedbackAttachmentFiles - store the user provided image as paste attachment.
	 */
	public void setFeedbackAttachmentFiles(final Collection<Media> value)
	{
		setFeedbackAttachmentFiles( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.feedBackEmailBody</code> attribute.
	 * @return the feedBackEmailBody
	 */
	public String getFeedBackEmailBody(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedGEEdgeFeedbackProcess.getFeedBackEmailBody requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, FEEDBACKEMAILBODY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.feedBackEmailBody</code> attribute.
	 * @return the feedBackEmailBody
	 */
	public String getFeedBackEmailBody()
	{
		return getFeedBackEmailBody( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.feedBackEmailBody</code> attribute. 
	 * @return the localized feedBackEmailBody
	 */
	public Map<Language,String> getAllFeedBackEmailBody(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,FEEDBACKEMAILBODY,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.feedBackEmailBody</code> attribute. 
	 * @return the localized feedBackEmailBody
	 */
	public Map<Language,String> getAllFeedBackEmailBody()
	{
		return getAllFeedBackEmailBody( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.feedBackEmailBody</code> attribute. 
	 * @param value the feedBackEmailBody
	 */
	public void setFeedBackEmailBody(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedGEEdgeFeedbackProcess.setFeedBackEmailBody requires a session language", 0 );
		}
		setLocalizedProperty(ctx, FEEDBACKEMAILBODY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.feedBackEmailBody</code> attribute. 
	 * @param value the feedBackEmailBody
	 */
	public void setFeedBackEmailBody(final String value)
	{
		setFeedBackEmailBody( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.feedBackEmailBody</code> attribute. 
	 * @param value the feedBackEmailBody
	 */
	public void setAllFeedBackEmailBody(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,FEEDBACKEMAILBODY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.feedBackEmailBody</code> attribute. 
	 * @param value the feedBackEmailBody
	 */
	public void setAllFeedBackEmailBody(final Map<Language,String> value)
	{
		setAllFeedBackEmailBody( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.phoneNo</code> attribute.
	 * @return the phoneNo
	 */
	public String getPhoneNo(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PHONENO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>GEEdgeFeedbackProcess.phoneNo</code> attribute.
	 * @return the phoneNo
	 */
	public String getPhoneNo()
	{
		return getPhoneNo( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.phoneNo</code> attribute. 
	 * @param value the phoneNo
	 */
	public void setPhoneNo(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PHONENO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>GEEdgeFeedbackProcess.phoneNo</code> attribute. 
	 * @param value the phoneNo
	 */
	public void setPhoneNo(final String value)
	{
		setPhoneNo( getSession().getSessionContext(), value );
	}
	
}
