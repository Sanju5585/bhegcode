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
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEServiceType}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEServiceType extends GenericItem
{
	/** Qualifier of the <code>BHGEServiceType.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>BHGEServiceType.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>BHGEServiceType.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>BHGEServiceType.summary</code> attribute **/
	public static final String SUMMARY = "summary";
	/** Qualifier of the <code>BHGEServiceType.type</code> attribute **/
	public static final String TYPE = "type";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(NAME, AttributeMode.INITIAL);
		tmp.put(DESCRIPTION, AttributeMode.INITIAL);
		tmp.put(SUMMARY, AttributeMode.INITIAL);
		tmp.put(TYPE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.code</code> attribute.
	 * @return the code - To hold the unique value of the object
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.code</code> attribute.
	 * @return the code - To hold the unique value of the object
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.code</code> attribute. 
	 * @param value the code - To hold the unique value of the object
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.code</code> attribute. 
	 * @param value the code - To hold the unique value of the object
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.description</code> attribute.
	 * @return the description - Description for the return reason code
	 */
	public String getDescription(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceType.getDescription requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.description</code> attribute.
	 * @return the description - Description for the return reason code
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.description</code> attribute. 
	 * @return the localized description - Description for the return reason code
	 */
	public Map<Language,String> getAllDescription(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,DESCRIPTION,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.description</code> attribute. 
	 * @return the localized description - Description for the return reason code
	 */
	public Map<Language,String> getAllDescription()
	{
		return getAllDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.description</code> attribute. 
	 * @param value the description - Description for the return reason code
	 */
	public void setDescription(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceType.setDescription requires a session language", 0 );
		}
		setLocalizedProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.description</code> attribute. 
	 * @param value the description - Description for the return reason code
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.description</code> attribute. 
	 * @param value the description - Description for the return reason code
	 */
	public void setAllDescription(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.description</code> attribute. 
	 * @param value the description - Description for the return reason code
	 */
	public void setAllDescription(final Map<Language,String> value)
	{
		setAllDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.name</code> attribute.
	 * @return the name - To hold the name of the service type
	 */
	public String getName(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceType.getName requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.name</code> attribute.
	 * @return the name - To hold the name of the service type
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.name</code> attribute. 
	 * @return the localized name - To hold the name of the service type
	 */
	public Map<Language,String> getAllName(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,NAME,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.name</code> attribute. 
	 * @return the localized name - To hold the name of the service type
	 */
	public Map<Language,String> getAllName()
	{
		return getAllName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.name</code> attribute. 
	 * @param value the name - To hold the name of the service type
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceType.setName requires a session language", 0 );
		}
		setLocalizedProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.name</code> attribute. 
	 * @param value the name - To hold the name of the service type
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.name</code> attribute. 
	 * @param value the name - To hold the name of the service type
	 */
	public void setAllName(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.name</code> attribute. 
	 * @param value the name - To hold the name of the service type
	 */
	public void setAllName(final Map<Language,String> value)
	{
		setAllName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.summary</code> attribute.
	 * @return the summary - Holds the summary of the RMA service offered
	 */
	public String getSummary(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceType.getSummary requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, SUMMARY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.summary</code> attribute.
	 * @return the summary - Holds the summary of the RMA service offered
	 */
	public String getSummary()
	{
		return getSummary( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.summary</code> attribute. 
	 * @return the localized summary - Holds the summary of the RMA service offered
	 */
	public Map<Language,String> getAllSummary(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,SUMMARY,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.summary</code> attribute. 
	 * @return the localized summary - Holds the summary of the RMA service offered
	 */
	public Map<Language,String> getAllSummary()
	{
		return getAllSummary( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.summary</code> attribute. 
	 * @param value the summary - Holds the summary of the RMA service offered
	 */
	public void setSummary(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceType.setSummary requires a session language", 0 );
		}
		setLocalizedProperty(ctx, SUMMARY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.summary</code> attribute. 
	 * @param value the summary - Holds the summary of the RMA service offered
	 */
	public void setSummary(final String value)
	{
		setSummary( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.summary</code> attribute. 
	 * @param value the summary - Holds the summary of the RMA service offered
	 */
	public void setAllSummary(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,SUMMARY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.summary</code> attribute. 
	 * @param value the summary - Holds the summary of the RMA service offered
	 */
	public void setAllSummary(final Map<Language,String> value)
	{
		setAllSummary( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.type</code> attribute.
	 * @return the type - Return reason type - States whether return reason is
	 * 							calibration/warranty etc.,
	 */
	public String getType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceType.type</code> attribute.
	 * @return the type - Return reason type - States whether return reason is
	 * 							calibration/warranty etc.,
	 */
	public String getType()
	{
		return getType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.type</code> attribute. 
	 * @param value the type - Return reason type - States whether return reason is
	 * 							calibration/warranty etc.,
	 */
	public void setType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceType.type</code> attribute. 
	 * @param value the type - Return reason type - States whether return reason is
	 * 							calibration/warranty etc.,
	 */
	public void setType(final String value)
	{
		setType( getSession().getSessionContext(), value );
	}
	
}
