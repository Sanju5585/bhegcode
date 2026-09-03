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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem DSWaygateBatchLookup}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedDSWaygateBatchLookup extends GenericItem
{
	/** Qualifier of the <code>DSWaygateBatchLookup.Type</code> attribute **/
	public static final String TYPE = "Type";
	/** Qualifier of the <code>DSWaygateBatchLookup.Clas</code> attribute **/
	public static final String CLAS = "Clas";
	/** Qualifier of the <code>DSWaygateBatchLookup.G2</code> attribute **/
	public static final String G2 = "G2";
	/** Qualifier of the <code>DSWaygateBatchLookup.G4</code> attribute **/
	public static final String G4 = "G4";
	/** Qualifier of the <code>DSWaygateBatchLookup.SigmaD2</code> attribute **/
	public static final String SIGMAD2 = "SigmaD2";
	/** Qualifier of the <code>DSWaygateBatchLookup.GSigmaD</code> attribute **/
	public static final String GSIGMAD = "GSigmaD";
	/** Qualifier of the <code>DSWaygateBatchLookup.KsmGy</code> attribute **/
	public static final String KSMGY = "KsmGy";
	/** Qualifier of the <code>DSWaygateBatchLookup.kV120</code> attribute **/
	public static final String KV120 = "kV120";
	/** Qualifier of the <code>DSWaygateBatchLookup.ISOSpeed</code> attribute **/
	public static final String ISOSPEED = "ISOSpeed";
	/** Qualifier of the <code>DSWaygateBatchLookup.AvgContrast</code> attribute **/
	public static final String AVGCONTRAST = "AvgContrast";
	/** Qualifier of the <code>DSWaygateBatchLookup.IR192</code> attribute **/
	public static final String IR192 = "IR192";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(TYPE, AttributeMode.INITIAL);
		tmp.put(CLAS, AttributeMode.INITIAL);
		tmp.put(G2, AttributeMode.INITIAL);
		tmp.put(G4, AttributeMode.INITIAL);
		tmp.put(SIGMAD2, AttributeMode.INITIAL);
		tmp.put(GSIGMAD, AttributeMode.INITIAL);
		tmp.put(KSMGY, AttributeMode.INITIAL);
		tmp.put(KV120, AttributeMode.INITIAL);
		tmp.put(ISOSPEED, AttributeMode.INITIAL);
		tmp.put(AVGCONTRAST, AttributeMode.INITIAL);
		tmp.put(IR192, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.AvgContrast</code> attribute.
	 * @return the AvgContrast
	 */
	public String getAvgContrast(final SessionContext ctx)
	{
		return (String)getProperty( ctx, AVGCONTRAST);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.AvgContrast</code> attribute.
	 * @return the AvgContrast
	 */
	public String getAvgContrast()
	{
		return getAvgContrast( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.AvgContrast</code> attribute. 
	 * @param value the AvgContrast
	 */
	public void setAvgContrast(final SessionContext ctx, final String value)
	{
		setProperty(ctx, AVGCONTRAST,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.AvgContrast</code> attribute. 
	 * @param value the AvgContrast
	 */
	public void setAvgContrast(final String value)
	{
		setAvgContrast( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.Clas</code> attribute.
	 * @return the Clas
	 */
	public String getClas(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CLAS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.Clas</code> attribute.
	 * @return the Clas
	 */
	public String getClas()
	{
		return getClas( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.Clas</code> attribute. 
	 * @param value the Clas
	 */
	public void setClas(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CLAS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.Clas</code> attribute. 
	 * @param value the Clas
	 */
	public void setClas(final String value)
	{
		setClas( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.G2</code> attribute.
	 * @return the G2
	 */
	public String getG2(final SessionContext ctx)
	{
		return (String)getProperty( ctx, G2);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.G2</code> attribute.
	 * @return the G2
	 */
	public String getG2()
	{
		return getG2( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.G2</code> attribute. 
	 * @param value the G2
	 */
	public void setG2(final SessionContext ctx, final String value)
	{
		setProperty(ctx, G2,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.G2</code> attribute. 
	 * @param value the G2
	 */
	public void setG2(final String value)
	{
		setG2( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.G4</code> attribute.
	 * @return the G4
	 */
	public String getG4(final SessionContext ctx)
	{
		return (String)getProperty( ctx, G4);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.G4</code> attribute.
	 * @return the G4
	 */
	public String getG4()
	{
		return getG4( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.G4</code> attribute. 
	 * @param value the G4
	 */
	public void setG4(final SessionContext ctx, final String value)
	{
		setProperty(ctx, G4,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.G4</code> attribute. 
	 * @param value the G4
	 */
	public void setG4(final String value)
	{
		setG4( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.GSigmaD</code> attribute.
	 * @return the GSigmaD
	 */
	public String getGSigmaD(final SessionContext ctx)
	{
		return (String)getProperty( ctx, GSIGMAD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.GSigmaD</code> attribute.
	 * @return the GSigmaD
	 */
	public String getGSigmaD()
	{
		return getGSigmaD( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.GSigmaD</code> attribute. 
	 * @param value the GSigmaD
	 */
	public void setGSigmaD(final SessionContext ctx, final String value)
	{
		setProperty(ctx, GSIGMAD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.GSigmaD</code> attribute. 
	 * @param value the GSigmaD
	 */
	public void setGSigmaD(final String value)
	{
		setGSigmaD( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.IR192</code> attribute.
	 * @return the IR192
	 */
	public String getIR192(final SessionContext ctx)
	{
		return (String)getProperty( ctx, IR192);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.IR192</code> attribute.
	 * @return the IR192
	 */
	public String getIR192()
	{
		return getIR192( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.IR192</code> attribute. 
	 * @param value the IR192
	 */
	public void setIR192(final SessionContext ctx, final String value)
	{
		setProperty(ctx, IR192,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.IR192</code> attribute. 
	 * @param value the IR192
	 */
	public void setIR192(final String value)
	{
		setIR192( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.ISOSpeed</code> attribute.
	 * @return the ISOSpeed
	 */
	public String getISOSpeed(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ISOSPEED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.ISOSpeed</code> attribute.
	 * @return the ISOSpeed
	 */
	public String getISOSpeed()
	{
		return getISOSpeed( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.ISOSpeed</code> attribute. 
	 * @param value the ISOSpeed
	 */
	public void setISOSpeed(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ISOSPEED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.ISOSpeed</code> attribute. 
	 * @param value the ISOSpeed
	 */
	public void setISOSpeed(final String value)
	{
		setISOSpeed( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.KsmGy</code> attribute.
	 * @return the KsmGy
	 */
	public String getKsmGy(final SessionContext ctx)
	{
		return (String)getProperty( ctx, KSMGY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.KsmGy</code> attribute.
	 * @return the KsmGy
	 */
	public String getKsmGy()
	{
		return getKsmGy( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.KsmGy</code> attribute. 
	 * @param value the KsmGy
	 */
	public void setKsmGy(final SessionContext ctx, final String value)
	{
		setProperty(ctx, KSMGY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.KsmGy</code> attribute. 
	 * @param value the KsmGy
	 */
	public void setKsmGy(final String value)
	{
		setKsmGy( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.kV120</code> attribute.
	 * @return the kV120
	 */
	public String getKV120(final SessionContext ctx)
	{
		return (String)getProperty( ctx, KV120);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.kV120</code> attribute.
	 * @return the kV120
	 */
	public String getKV120()
	{
		return getKV120( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.kV120</code> attribute. 
	 * @param value the kV120
	 */
	public void setKV120(final SessionContext ctx, final String value)
	{
		setProperty(ctx, KV120,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.kV120</code> attribute. 
	 * @param value the kV120
	 */
	public void setKV120(final String value)
	{
		setKV120( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.SigmaD2</code> attribute.
	 * @return the SigmaD2
	 */
	public String getSigmaD2(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SIGMAD2);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.SigmaD2</code> attribute.
	 * @return the SigmaD2
	 */
	public String getSigmaD2()
	{
		return getSigmaD2( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.SigmaD2</code> attribute. 
	 * @param value the SigmaD2
	 */
	public void setSigmaD2(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SIGMAD2,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.SigmaD2</code> attribute. 
	 * @param value the SigmaD2
	 */
	public void setSigmaD2(final String value)
	{
		setSigmaD2( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.Type</code> attribute.
	 * @return the Type
	 */
	public String getType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSWaygateBatchLookup.Type</code> attribute.
	 * @return the Type
	 */
	public String getType()
	{
		return getType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.Type</code> attribute. 
	 * @param value the Type
	 */
	public void setType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSWaygateBatchLookup.Type</code> attribute. 
	 * @param value the Type
	 */
	public void setType(final String value)
	{
		setType( getSession().getSessionContext(), value );
	}
	
}
