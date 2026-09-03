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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEKBInformation}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEKBInformation extends GenericItem
{
	/** Qualifier of the <code>BHGEKBInformation.rootId</code> attribute **/
	public static final String ROOTID = "rootId";
	/** Qualifier of the <code>BHGEKBInformation.sce</code> attribute **/
	public static final String SCE = "sce";
	/** Qualifier of the <code>BHGEKBInformation.kbName</code> attribute **/
	public static final String KBNAME = "kbName";
	/** Qualifier of the <code>BHGEKBInformation.kbVersion</code> attribute **/
	public static final String KBVERSION = "kbVersion";
	/** Qualifier of the <code>BHGEKBInformation.complete</code> attribute **/
	public static final String COMPLETE = "complete";
	/** Qualifier of the <code>BHGEKBInformation.consitent</code> attribute **/
	public static final String CONSITENT = "consitent";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(ROOTID, AttributeMode.INITIAL);
		tmp.put(SCE, AttributeMode.INITIAL);
		tmp.put(KBNAME, AttributeMode.INITIAL);
		tmp.put(KBVERSION, AttributeMode.INITIAL);
		tmp.put(COMPLETE, AttributeMode.INITIAL);
		tmp.put(CONSITENT, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.complete</code> attribute.
	 * @return the complete
	 */
	public String getComplete(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COMPLETE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.complete</code> attribute.
	 * @return the complete
	 */
	public String getComplete()
	{
		return getComplete( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.complete</code> attribute. 
	 * @param value the complete
	 */
	public void setComplete(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COMPLETE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.complete</code> attribute. 
	 * @param value the complete
	 */
	public void setComplete(final String value)
	{
		setComplete( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.consitent</code> attribute.
	 * @return the consitent
	 */
	public String getConsitent(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONSITENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.consitent</code> attribute.
	 * @return the consitent
	 */
	public String getConsitent()
	{
		return getConsitent( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.consitent</code> attribute. 
	 * @param value the consitent
	 */
	public void setConsitent(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONSITENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.consitent</code> attribute. 
	 * @param value the consitent
	 */
	public void setConsitent(final String value)
	{
		setConsitent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.kbName</code> attribute.
	 * @return the kbName
	 */
	public String getKbName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, KBNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.kbName</code> attribute.
	 * @return the kbName
	 */
	public String getKbName()
	{
		return getKbName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.kbName</code> attribute. 
	 * @param value the kbName
	 */
	public void setKbName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, KBNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.kbName</code> attribute. 
	 * @param value the kbName
	 */
	public void setKbName(final String value)
	{
		setKbName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.kbVersion</code> attribute.
	 * @return the kbVersion
	 */
	public String getKbVersion(final SessionContext ctx)
	{
		return (String)getProperty( ctx, KBVERSION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.kbVersion</code> attribute.
	 * @return the kbVersion
	 */
	public String getKbVersion()
	{
		return getKbVersion( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.kbVersion</code> attribute. 
	 * @param value the kbVersion
	 */
	public void setKbVersion(final SessionContext ctx, final String value)
	{
		setProperty(ctx, KBVERSION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.kbVersion</code> attribute. 
	 * @param value the kbVersion
	 */
	public void setKbVersion(final String value)
	{
		setKbVersion( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.rootId</code> attribute.
	 * @return the rootId
	 */
	public String getRootId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ROOTID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.rootId</code> attribute.
	 * @return the rootId
	 */
	public String getRootId()
	{
		return getRootId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.rootId</code> attribute. 
	 * @param value the rootId
	 */
	public void setRootId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ROOTID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.rootId</code> attribute. 
	 * @param value the rootId
	 */
	public void setRootId(final String value)
	{
		setRootId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.sce</code> attribute.
	 * @return the sce
	 */
	public String getSce(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SCE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEKBInformation.sce</code> attribute.
	 * @return the sce
	 */
	public String getSce()
	{
		return getSce( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.sce</code> attribute. 
	 * @param value the sce
	 */
	public void setSce(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SCE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEKBInformation.sce</code> attribute. 
	 * @param value the sce
	 */
	public void setSce(final String value)
	{
		setSce( getSession().getSessionContext(), value );
	}
	
}
