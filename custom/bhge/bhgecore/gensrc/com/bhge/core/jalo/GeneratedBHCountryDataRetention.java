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
import de.hybris.platform.jalo.c2l.Country;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHCountryDataRetention}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHCountryDataRetention extends GenericItem
{
	/** Qualifier of the <code>BHCountryDataRetention.country</code> attribute **/
	public static final String COUNTRY = "country";
	/** Qualifier of the <code>BHCountryDataRetention.dataRetentionPeriod</code> attribute **/
	public static final String DATARETENTIONPERIOD = "dataRetentionPeriod";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(COUNTRY, AttributeMode.INITIAL);
		tmp.put(DATARETENTIONPERIOD, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHCountryDataRetention.country</code> attribute.
	 * @return the country - Country
	 */
	public Country getCountry(final SessionContext ctx)
	{
		return (Country)getProperty( ctx, COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHCountryDataRetention.country</code> attribute.
	 * @return the country - Country
	 */
	public Country getCountry()
	{
		return getCountry( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHCountryDataRetention.country</code> attribute. 
	 * @param value the country - Country
	 */
	public void setCountry(final SessionContext ctx, final Country value)
	{
		setProperty(ctx, COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHCountryDataRetention.country</code> attribute. 
	 * @param value the country - Country
	 */
	public void setCountry(final Country value)
	{
		setCountry( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHCountryDataRetention.dataRetentionPeriod</code> attribute.
	 * @return the dataRetentionPeriod - Data Retention Peroid in Years/Months
	 */
	public Integer getDataRetentionPeriod(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, DATARETENTIONPERIOD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHCountryDataRetention.dataRetentionPeriod</code> attribute.
	 * @return the dataRetentionPeriod - Data Retention Peroid in Years/Months
	 */
	public Integer getDataRetentionPeriod()
	{
		return getDataRetentionPeriod( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHCountryDataRetention.dataRetentionPeriod</code> attribute. 
	 * @return the dataRetentionPeriod - Data Retention Peroid in Years/Months
	 */
	public int getDataRetentionPeriodAsPrimitive(final SessionContext ctx)
	{
		Integer value = getDataRetentionPeriod( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHCountryDataRetention.dataRetentionPeriod</code> attribute. 
	 * @return the dataRetentionPeriod - Data Retention Peroid in Years/Months
	 */
	public int getDataRetentionPeriodAsPrimitive()
	{
		return getDataRetentionPeriodAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHCountryDataRetention.dataRetentionPeriod</code> attribute. 
	 * @param value the dataRetentionPeriod - Data Retention Peroid in Years/Months
	 */
	public void setDataRetentionPeriod(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, DATARETENTIONPERIOD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHCountryDataRetention.dataRetentionPeriod</code> attribute. 
	 * @param value the dataRetentionPeriod - Data Retention Peroid in Years/Months
	 */
	public void setDataRetentionPeriod(final Integer value)
	{
		setDataRetentionPeriod( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHCountryDataRetention.dataRetentionPeriod</code> attribute. 
	 * @param value the dataRetentionPeriod - Data Retention Peroid in Years/Months
	 */
	public void setDataRetentionPeriod(final SessionContext ctx, final int value)
	{
		setDataRetentionPeriod( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHCountryDataRetention.dataRetentionPeriod</code> attribute. 
	 * @param value the dataRetentionPeriod - Data Retention Peroid in Years/Months
	 */
	public void setDataRetentionPeriod(final int value)
	{
		setDataRetentionPeriod( getSession().getSessionContext(), value );
	}
	
}
