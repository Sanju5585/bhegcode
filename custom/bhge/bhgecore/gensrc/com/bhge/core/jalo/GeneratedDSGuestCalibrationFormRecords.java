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
import de.hybris.platform.jalo.user.Address;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem DSGuestCalibrationFormRecords}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedDSGuestCalibrationFormRecords extends GenericItem
{
	/** Qualifier of the <code>DSGuestCalibrationFormRecords.guestUserID</code> attribute **/
	public static final String GUESTUSERID = "guestUserID";
	/** Qualifier of the <code>DSGuestCalibrationFormRecords.probeSerialNumber</code> attribute **/
	public static final String PROBESERIALNUMBER = "probeSerialNumber";
	/** Qualifier of the <code>DSGuestCalibrationFormRecords.title</code> attribute **/
	public static final String TITLE = "title";
	/** Qualifier of the <code>DSGuestCalibrationFormRecords.country</code> attribute **/
	public static final String COUNTRY = "country";
	/** Qualifier of the <code>DSGuestCalibrationFormRecords.state</code> attribute **/
	public static final String STATE = "state";
	/** Qualifier of the <code>DSGuestCalibrationFormRecords.communicationsPreference</code> attribute **/
	public static final String COMMUNICATIONSPREFERENCE = "communicationsPreference";
	/** Qualifier of the <code>DSGuestCalibrationFormRecords.address</code> attribute **/
	public static final String ADDRESS = "address";
	/** Qualifier of the <code>DSGuestCalibrationFormRecords.sensorType</code> attribute **/
	public static final String SENSORTYPE = "sensorType";
	/** Qualifier of the <code>DSGuestCalibrationFormRecords.lastCalibrationDate</code> attribute **/
	public static final String LASTCALIBRATIONDATE = "lastCalibrationDate";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(GUESTUSERID, AttributeMode.INITIAL);
		tmp.put(PROBESERIALNUMBER, AttributeMode.INITIAL);
		tmp.put(TITLE, AttributeMode.INITIAL);
		tmp.put(COUNTRY, AttributeMode.INITIAL);
		tmp.put(STATE, AttributeMode.INITIAL);
		tmp.put(COMMUNICATIONSPREFERENCE, AttributeMode.INITIAL);
		tmp.put(ADDRESS, AttributeMode.INITIAL);
		tmp.put(SENSORTYPE, AttributeMode.INITIAL);
		tmp.put(LASTCALIBRATIONDATE, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.address</code> attribute.
	 * @return the address
	 */
	public Address getAddress(final SessionContext ctx)
	{
		return (Address)getProperty( ctx, ADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.address</code> attribute.
	 * @return the address
	 */
	public Address getAddress()
	{
		return getAddress( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.address</code> attribute. 
	 * @param value the address
	 */
	public void setAddress(final SessionContext ctx, final Address value)
	{
		setProperty(ctx, ADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.address</code> attribute. 
	 * @param value the address
	 */
	public void setAddress(final Address value)
	{
		setAddress( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.communicationsPreference</code> attribute.
	 * @return the communicationsPreference - Communication preference opt in
	 */
	public Boolean isCommunicationsPreference(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, COMMUNICATIONSPREFERENCE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.communicationsPreference</code> attribute.
	 * @return the communicationsPreference - Communication preference opt in
	 */
	public Boolean isCommunicationsPreference()
	{
		return isCommunicationsPreference( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.communicationsPreference</code> attribute. 
	 * @return the communicationsPreference - Communication preference opt in
	 */
	public boolean isCommunicationsPreferenceAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isCommunicationsPreference( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.communicationsPreference</code> attribute. 
	 * @return the communicationsPreference - Communication preference opt in
	 */
	public boolean isCommunicationsPreferenceAsPrimitive()
	{
		return isCommunicationsPreferenceAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.communicationsPreference</code> attribute. 
	 * @param value the communicationsPreference - Communication preference opt in
	 */
	public void setCommunicationsPreference(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, COMMUNICATIONSPREFERENCE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.communicationsPreference</code> attribute. 
	 * @param value the communicationsPreference - Communication preference opt in
	 */
	public void setCommunicationsPreference(final Boolean value)
	{
		setCommunicationsPreference( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.communicationsPreference</code> attribute. 
	 * @param value the communicationsPreference - Communication preference opt in
	 */
	public void setCommunicationsPreference(final SessionContext ctx, final boolean value)
	{
		setCommunicationsPreference( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.communicationsPreference</code> attribute. 
	 * @param value the communicationsPreference - Communication preference opt in
	 */
	public void setCommunicationsPreference(final boolean value)
	{
		setCommunicationsPreference( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.country</code> attribute.
	 * @return the country - Country name
	 */
	public String getCountry(final SessionContext ctx)
	{
		return (String)getProperty( ctx, COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.country</code> attribute.
	 * @return the country - Country name
	 */
	public String getCountry()
	{
		return getCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.country</code> attribute. 
	 * @param value the country - Country name
	 */
	public void setCountry(final SessionContext ctx, final String value)
	{
		setProperty(ctx, COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.country</code> attribute. 
	 * @param value the country - Country name
	 */
	public void setCountry(final String value)
	{
		setCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.guestUserID</code> attribute.
	 * @return the guestUserID - Guest user Id
	 */
	public String getGuestUserID(final SessionContext ctx)
	{
		return (String)getProperty( ctx, GUESTUSERID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.guestUserID</code> attribute.
	 * @return the guestUserID - Guest user Id
	 */
	public String getGuestUserID()
	{
		return getGuestUserID( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.guestUserID</code> attribute. 
	 * @param value the guestUserID - Guest user Id
	 */
	public void setGuestUserID(final SessionContext ctx, final String value)
	{
		setProperty(ctx, GUESTUSERID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.guestUserID</code> attribute. 
	 * @param value the guestUserID - Guest user Id
	 */
	public void setGuestUserID(final String value)
	{
		setGuestUserID( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.lastCalibrationDate</code> attribute.
	 * @return the lastCalibrationDate - Last Calibration Date
	 */
	public String getLastCalibrationDate(final SessionContext ctx)
	{
		return (String)getProperty( ctx, LASTCALIBRATIONDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.lastCalibrationDate</code> attribute.
	 * @return the lastCalibrationDate - Last Calibration Date
	 */
	public String getLastCalibrationDate()
	{
		return getLastCalibrationDate( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.lastCalibrationDate</code> attribute. 
	 * @param value the lastCalibrationDate - Last Calibration Date
	 */
	public void setLastCalibrationDate(final SessionContext ctx, final String value)
	{
		setProperty(ctx, LASTCALIBRATIONDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.lastCalibrationDate</code> attribute. 
	 * @param value the lastCalibrationDate - Last Calibration Date
	 */
	public void setLastCalibrationDate(final String value)
	{
		setLastCalibrationDate( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.probeSerialNumber</code> attribute.
	 * @return the probeSerialNumber - Probe serial number
	 */
	public String getProbeSerialNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PROBESERIALNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.probeSerialNumber</code> attribute.
	 * @return the probeSerialNumber - Probe serial number
	 */
	public String getProbeSerialNumber()
	{
		return getProbeSerialNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.probeSerialNumber</code> attribute. 
	 * @param value the probeSerialNumber - Probe serial number
	 */
	public void setProbeSerialNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PROBESERIALNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.probeSerialNumber</code> attribute. 
	 * @param value the probeSerialNumber - Probe serial number
	 */
	public void setProbeSerialNumber(final String value)
	{
		setProbeSerialNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.sensorType</code> attribute.
	 * @return the sensorType - sensorType
	 */
	public String getSensorType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SENSORTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.sensorType</code> attribute.
	 * @return the sensorType - sensorType
	 */
	public String getSensorType()
	{
		return getSensorType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.sensorType</code> attribute. 
	 * @param value the sensorType - sensorType
	 */
	public void setSensorType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SENSORTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.sensorType</code> attribute. 
	 * @param value the sensorType - sensorType
	 */
	public void setSensorType(final String value)
	{
		setSensorType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.state</code> attribute.
	 * @return the state - State name
	 */
	public String getState(final SessionContext ctx)
	{
		return (String)getProperty( ctx, STATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.state</code> attribute.
	 * @return the state - State name
	 */
	public String getState()
	{
		return getState( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.state</code> attribute. 
	 * @param value the state - State name
	 */
	public void setState(final SessionContext ctx, final String value)
	{
		setProperty(ctx, STATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.state</code> attribute. 
	 * @param value the state - State name
	 */
	public void setState(final String value)
	{
		setState( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.title</code> attribute.
	 * @return the title - Title of the user
	 */
	public String getTitle(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TITLE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>DSGuestCalibrationFormRecords.title</code> attribute.
	 * @return the title - Title of the user
	 */
	public String getTitle()
	{
		return getTitle( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.title</code> attribute. 
	 * @param value the title - Title of the user
	 */
	public void setTitle(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TITLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>DSGuestCalibrationFormRecords.title</code> attribute. 
	 * @param value the title - Title of the user
	 */
	public void setTitle(final String value)
	{
		setTitle( getSession().getSessionContext(), value );
	}
	
}
