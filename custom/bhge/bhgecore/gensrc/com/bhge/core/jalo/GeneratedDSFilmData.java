/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.DSWaygateBatchLookup;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem DSFilmData}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedDSFilmData extends GenericItem
{
	/** Qualifier of the <code>DSFilmData.type</code> attribute **/
	public static final String TYPE = "type";
	/** Qualifier of the <code>DSFilmData.batch</code> attribute **/
	public static final String BATCH = "batch";
	/** Qualifier of the <code>DSFilmData.emNr</code> attribute **/
	public static final String EMNR = "emNr";
	/** Qualifier of the <code>DSFilmData.rol</code> attribute **/
	public static final String ROL = "rol";
	/** Qualifier of the <code>DSFilmData.sper</code> attribute **/
	public static final String SPER = "sper";
	/** Qualifier of the <code>DSFilmData.cper</code> attribute **/
	public static final String CPER = "cper";
	/** Qualifier of the <code>DSFilmData.control</code> attribute **/
	public static final String CONTROL = "control";
	/** Qualifier of the <code>DSFilmData.expiry</code> attribute **/
	public static final String EXPIRY = "expiry";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(TYPE, AttributeMode.INITIAL);
		tmp.put(BATCH, AttributeMode.INITIAL);
		tmp.put(EMNR, AttributeMode.INITIAL);
		tmp.put(ROL, AttributeMode.INITIAL);
		tmp.put(SPER, AttributeMode.INITIAL);
		tmp.put(CPER, AttributeMode.INITIAL);
		tmp.put(CONTROL, AttributeMode.INITIAL);
		tmp.put(EXPIRY, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.batch</code> attribute.
	 * @return the batch
	 */
	public String getBatch(final SessionContext ctx)
	{
		return (String)getProperty( ctx, BATCH);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.batch</code> attribute.
	 * @return the batch
	 */
	public String getBatch()
	{
		return getBatch( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.batch</code> attribute. 
	 * @param value the batch
	 */
	public void setBatch(final SessionContext ctx, final String value)
	{
		setProperty(ctx, BATCH,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.batch</code> attribute. 
	 * @param value the batch
	 */
	public void setBatch(final String value)
	{
		setBatch( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.control</code> attribute.
	 * @return the control
	 */
	public String getControl(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CONTROL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.control</code> attribute.
	 * @return the control
	 */
	public String getControl()
	{
		return getControl( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.control</code> attribute. 
	 * @param value the control
	 */
	public void setControl(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CONTROL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.control</code> attribute. 
	 * @param value the control
	 */
	public void setControl(final String value)
	{
		setControl( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.cper</code> attribute.
	 * @return the cper
	 */
	public String getCper(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CPER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.cper</code> attribute.
	 * @return the cper
	 */
	public String getCper()
	{
		return getCper( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.cper</code> attribute. 
	 * @param value the cper
	 */
	public void setCper(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CPER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.cper</code> attribute. 
	 * @param value the cper
	 */
	public void setCper(final String value)
	{
		setCper( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.emNr</code> attribute.
	 * @return the emNr
	 */
	public String getEmNr(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EMNR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.emNr</code> attribute.
	 * @return the emNr
	 */
	public String getEmNr()
	{
		return getEmNr( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.emNr</code> attribute. 
	 * @param value the emNr
	 */
	public void setEmNr(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EMNR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.emNr</code> attribute. 
	 * @param value the emNr
	 */
	public void setEmNr(final String value)
	{
		setEmNr( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.expiry</code> attribute.
	 * @return the expiry
	 */
	public String getExpiry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EXPIRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.expiry</code> attribute.
	 * @return the expiry
	 */
	public String getExpiry()
	{
		return getExpiry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.expiry</code> attribute. 
	 * @param value the expiry
	 */
	public void setExpiry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EXPIRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.expiry</code> attribute. 
	 * @param value the expiry
	 */
	public void setExpiry(final String value)
	{
		setExpiry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.rol</code> attribute.
	 * @return the rol
	 */
	public String getRol(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ROL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.rol</code> attribute.
	 * @return the rol
	 */
	public String getRol()
	{
		return getRol( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.rol</code> attribute. 
	 * @param value the rol
	 */
	public void setRol(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ROL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.rol</code> attribute. 
	 * @param value the rol
	 */
	public void setRol(final String value)
	{
		setRol( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.sper</code> attribute.
	 * @return the sper
	 */
	public String getSper(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SPER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.sper</code> attribute.
	 * @return the sper
	 */
	public String getSper()
	{
		return getSper( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.sper</code> attribute. 
	 * @param value the sper
	 */
	public void setSper(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SPER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.sper</code> attribute. 
	 * @param value the sper
	 */
	public void setSper(final String value)
	{
		setSper( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.type</code> attribute.
	 * @return the type
	 */
	public DSWaygateBatchLookup getType(final SessionContext ctx)
	{
		return (DSWaygateBatchLookup)getProperty( ctx, TYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSFilmData.type</code> attribute.
	 * @return the type
	 */
	public DSWaygateBatchLookup getType()
	{
		return getType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final SessionContext ctx, final DSWaygateBatchLookup value)
	{
		setProperty(ctx, TYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSFilmData.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final DSWaygateBatchLookup value)
	{
		setType( getSession().getSessionContext(), value );
	}
	
}
