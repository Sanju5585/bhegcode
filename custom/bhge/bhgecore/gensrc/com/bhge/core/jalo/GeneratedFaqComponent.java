/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.cms2.jalo.contents.components.SimpleCMSComponent;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Language;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.bhge.core.jalo.FaqComponent FaqComponent}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedFaqComponent extends SimpleCMSComponent
{
	/** Qualifier of the <code>FaqComponent.question</code> attribute **/
	public static final String QUESTION = "question";
	/** Qualifier of the <code>FaqComponent.answer</code> attribute **/
	public static final String ANSWER = "answer";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(SimpleCMSComponent.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(QUESTION, AttributeMode.INITIAL);
		tmp.put(ANSWER, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FaqComponent.answer</code> attribute.
	 * @return the answer
	 */
	public String getAnswer(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedFaqComponent.getAnswer requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, ANSWER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FaqComponent.answer</code> attribute.
	 * @return the answer
	 */
	public String getAnswer()
	{
		return getAnswer( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FaqComponent.answer</code> attribute. 
	 * @return the localized answer
	 */
	public Map<Language,String> getAllAnswer(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,ANSWER,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FaqComponent.answer</code> attribute. 
	 * @return the localized answer
	 */
	public Map<Language,String> getAllAnswer()
	{
		return getAllAnswer( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FaqComponent.answer</code> attribute. 
	 * @param value the answer
	 */
	public void setAnswer(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedFaqComponent.setAnswer requires a session language", 0 );
		}
		setLocalizedProperty(ctx, ANSWER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FaqComponent.answer</code> attribute. 
	 * @param value the answer
	 */
	public void setAnswer(final String value)
	{
		setAnswer( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FaqComponent.answer</code> attribute. 
	 * @param value the answer
	 */
	public void setAllAnswer(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,ANSWER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FaqComponent.answer</code> attribute. 
	 * @param value the answer
	 */
	public void setAllAnswer(final Map<Language,String> value)
	{
		setAllAnswer( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FaqComponent.question</code> attribute.
	 * @return the question
	 */
	public String getQuestion(final SessionContext ctx)
	{
		return (String)getProperty( ctx, QUESTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>FaqComponent.question</code> attribute.
	 * @return the question
	 */
	public String getQuestion()
	{
		return getQuestion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FaqComponent.question</code> attribute. 
	 * @param value the question
	 */
	public void setQuestion(final SessionContext ctx, final String value)
	{
		setProperty(ctx, QUESTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>FaqComponent.question</code> attribute. 
	 * @param value the question
	 */
	public void setQuestion(final String value)
	{
		setQuestion( getSession().getSessionContext(), value );
	}
	
}
