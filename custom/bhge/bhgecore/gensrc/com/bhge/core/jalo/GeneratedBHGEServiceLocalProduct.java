/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.BHGEServiceSite;
import de.hybris.platform.core.model.GEEdgeProduct;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Country;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEServiceLocalProduct}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEServiceLocalProduct extends GenericItem
{
	/** Qualifier of the <code>BHGEServiceLocalProduct.code</code> attribute **/
	public static final String CODE = "code";
	/** Qualifier of the <code>BHGEServiceLocalProduct.orderToAddressSiteCode</code> attribute **/
	public static final String ORDERTOADDRESSSITECODE = "orderToAddressSiteCode";
	/** Qualifier of the <code>BHGEServiceLocalProduct.product</code> attribute **/
	public static final String PRODUCT = "product";
	/** Qualifier of the <code>BHGEServiceLocalProduct.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>BHGEServiceLocalProduct.description</code> attribute **/
	public static final String DESCRIPTION = "description";
	/** Qualifier of the <code>BHGEServiceLocalProduct.leadTimeOfRepair</code> attribute **/
	public static final String LEADTIMEOFREPAIR = "leadTimeOfRepair";
	/** Qualifier of the <code>BHGEServiceLocalProduct.depreciationValue</code> attribute **/
	public static final String DEPRECIATIONVALUE = "depreciationValue";
	/** Qualifier of the <code>BHGEServiceLocalProduct.returnToAddressSiteCode</code> attribute **/
	public static final String RETURNTOADDRESSSITECODE = "returnToAddressSiteCode";
	/** Qualifier of the <code>BHGEServiceLocalProduct.erpPartNumber</code> attribute **/
	public static final String ERPPARTNUMBER = "erpPartNumber";
	/** Qualifier of the <code>BHGEServiceLocalProduct.marketValue</code> attribute **/
	public static final String MARKETVALUE = "marketValue";
	/** Qualifier of the <code>BHGEServiceLocalProduct.isMiliteryUsage</code> attribute **/
	public static final String ISMILITERYUSAGE = "isMiliteryUsage";
	/** Qualifier of the <code>BHGEServiceLocalProduct.countries</code> attribute **/
	public static final String COUNTRIES = "countries";
	/** Qualifier of the <code>BHGEServiceLocalProduct.supportedReturnReasons</code> attribute **/
	public static final String SUPPORTEDRETURNREASONS = "supportedReturnReasons";
	/** Qualifier of the <code>BHGEServiceLocalProduct.minimumCustomPrice</code> attribute **/
	public static final String MINIMUMCUSTOMPRICE = "minimumCustomPrice";
	/** Qualifier of the <code>BHGEServiceLocalProduct.standardLeadTimeMap</code> attribute **/
	public static final String STANDARDLEADTIMEMAP = "standardLeadTimeMap";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(CODE, AttributeMode.INITIAL);
		tmp.put(ORDERTOADDRESSSITECODE, AttributeMode.INITIAL);
		tmp.put(PRODUCT, AttributeMode.INITIAL);
		tmp.put(NAME, AttributeMode.INITIAL);
		tmp.put(DESCRIPTION, AttributeMode.INITIAL);
		tmp.put(LEADTIMEOFREPAIR, AttributeMode.INITIAL);
		tmp.put(DEPRECIATIONVALUE, AttributeMode.INITIAL);
		tmp.put(RETURNTOADDRESSSITECODE, AttributeMode.INITIAL);
		tmp.put(ERPPARTNUMBER, AttributeMode.INITIAL);
		tmp.put(MARKETVALUE, AttributeMode.INITIAL);
		tmp.put(ISMILITERYUSAGE, AttributeMode.INITIAL);
		tmp.put(COUNTRIES, AttributeMode.INITIAL);
		tmp.put(SUPPORTEDRETURNREASONS, AttributeMode.INITIAL);
		tmp.put(MINIMUMCUSTOMPRICE, AttributeMode.INITIAL);
		tmp.put(STANDARDLEADTIMEMAP, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.code</code> attribute.
	 * @return the code
	 */
	public String getCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.code</code> attribute.
	 * @return the code
	 */
	public String getCode()
	{
		return getCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.code</code> attribute. 
	 * @param value the code
	 */
	public void setCode(final String value)
	{
		setCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.countries</code> attribute.
	 * @return the countries
	 */
	public Collection<Country> getCountries(final SessionContext ctx)
	{
		Collection<Country> coll = (Collection<Country>)getProperty( ctx, COUNTRIES);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.countries</code> attribute.
	 * @return the countries
	 */
	public Collection<Country> getCountries()
	{
		return getCountries( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.countries</code> attribute. 
	 * @param value the countries
	 */
	public void setCountries(final SessionContext ctx, final Collection<Country> value)
	{
		setProperty(ctx, COUNTRIES,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.countries</code> attribute. 
	 * @param value the countries
	 */
	public void setCountries(final Collection<Country> value)
	{
		setCountries( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.depreciationValue</code> attribute.
	 * @return the depreciationValue
	 */
	public Long getDepreciationValue(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, DEPRECIATIONVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.depreciationValue</code> attribute.
	 * @return the depreciationValue
	 */
	public Long getDepreciationValue()
	{
		return getDepreciationValue( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.depreciationValue</code> attribute. 
	 * @return the depreciationValue
	 */
	public long getDepreciationValueAsPrimitive(final SessionContext ctx)
	{
		Long value = getDepreciationValue( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.depreciationValue</code> attribute. 
	 * @return the depreciationValue
	 */
	public long getDepreciationValueAsPrimitive()
	{
		return getDepreciationValueAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.depreciationValue</code> attribute. 
	 * @param value the depreciationValue
	 */
	public void setDepreciationValue(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, DEPRECIATIONVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.depreciationValue</code> attribute. 
	 * @param value the depreciationValue
	 */
	public void setDepreciationValue(final Long value)
	{
		setDepreciationValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.depreciationValue</code> attribute. 
	 * @param value the depreciationValue
	 */
	public void setDepreciationValue(final SessionContext ctx, final long value)
	{
		setDepreciationValue( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.depreciationValue</code> attribute. 
	 * @param value the depreciationValue
	 */
	public void setDepreciationValue(final long value)
	{
		setDepreciationValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.description</code> attribute.
	 * @return the description
	 */
	public String getDescription(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceLocalProduct.getDescription requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, DESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.description</code> attribute.
	 * @return the description
	 */
	public String getDescription()
	{
		return getDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.description</code> attribute. 
	 * @return the localized description
	 */
	public Map<Language,String> getAllDescription(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,DESCRIPTION,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.description</code> attribute. 
	 * @return the localized description
	 */
	public Map<Language,String> getAllDescription()
	{
		return getAllDescription( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceLocalProduct.setDescription requires a session language", 0 );
		}
		setLocalizedProperty(ctx, DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.description</code> attribute. 
	 * @param value the description
	 */
	public void setDescription(final String value)
	{
		setDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.description</code> attribute. 
	 * @param value the description
	 */
	public void setAllDescription(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,DESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.description</code> attribute. 
	 * @param value the description
	 */
	public void setAllDescription(final Map<Language,String> value)
	{
		setAllDescription( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.erpPartNumber</code> attribute.
	 * @return the erpPartNumber
	 */
	public String getErpPartNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ERPPARTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.erpPartNumber</code> attribute.
	 * @return the erpPartNumber
	 */
	public String getErpPartNumber()
	{
		return getErpPartNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.erpPartNumber</code> attribute. 
	 * @param value the erpPartNumber
	 */
	public void setErpPartNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ERPPARTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.erpPartNumber</code> attribute. 
	 * @param value the erpPartNumber
	 */
	public void setErpPartNumber(final String value)
	{
		setErpPartNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.isMiliteryUsage</code> attribute.
	 * @return the isMiliteryUsage
	 */
	public Boolean isIsMiliteryUsage(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISMILITERYUSAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.isMiliteryUsage</code> attribute.
	 * @return the isMiliteryUsage
	 */
	public Boolean isIsMiliteryUsage()
	{
		return isIsMiliteryUsage( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.isMiliteryUsage</code> attribute. 
	 * @return the isMiliteryUsage
	 */
	public boolean isIsMiliteryUsageAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsMiliteryUsage( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.isMiliteryUsage</code> attribute. 
	 * @return the isMiliteryUsage
	 */
	public boolean isIsMiliteryUsageAsPrimitive()
	{
		return isIsMiliteryUsageAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.isMiliteryUsage</code> attribute. 
	 * @param value the isMiliteryUsage
	 */
	public void setIsMiliteryUsage(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISMILITERYUSAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.isMiliteryUsage</code> attribute. 
	 * @param value the isMiliteryUsage
	 */
	public void setIsMiliteryUsage(final Boolean value)
	{
		setIsMiliteryUsage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.isMiliteryUsage</code> attribute. 
	 * @param value the isMiliteryUsage
	 */
	public void setIsMiliteryUsage(final SessionContext ctx, final boolean value)
	{
		setIsMiliteryUsage( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.isMiliteryUsage</code> attribute. 
	 * @param value the isMiliteryUsage
	 */
	public void setIsMiliteryUsage(final boolean value)
	{
		setIsMiliteryUsage( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.leadTimeOfRepair</code> attribute.
	 * @return the leadTimeOfRepair
	 */
	public Long getLeadTimeOfRepair(final SessionContext ctx)
	{
		return (Long)getProperty( ctx, LEADTIMEOFREPAIR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.leadTimeOfRepair</code> attribute.
	 * @return the leadTimeOfRepair
	 */
	public Long getLeadTimeOfRepair()
	{
		return getLeadTimeOfRepair( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.leadTimeOfRepair</code> attribute. 
	 * @return the leadTimeOfRepair
	 */
	public long getLeadTimeOfRepairAsPrimitive(final SessionContext ctx)
	{
		Long value = getLeadTimeOfRepair( ctx );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.leadTimeOfRepair</code> attribute. 
	 * @return the leadTimeOfRepair
	 */
	public long getLeadTimeOfRepairAsPrimitive()
	{
		return getLeadTimeOfRepairAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.leadTimeOfRepair</code> attribute. 
	 * @param value the leadTimeOfRepair
	 */
	public void setLeadTimeOfRepair(final SessionContext ctx, final Long value)
	{
		setProperty(ctx, LEADTIMEOFREPAIR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.leadTimeOfRepair</code> attribute. 
	 * @param value the leadTimeOfRepair
	 */
	public void setLeadTimeOfRepair(final Long value)
	{
		setLeadTimeOfRepair( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.leadTimeOfRepair</code> attribute. 
	 * @param value the leadTimeOfRepair
	 */
	public void setLeadTimeOfRepair(final SessionContext ctx, final long value)
	{
		setLeadTimeOfRepair( ctx,Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.leadTimeOfRepair</code> attribute. 
	 * @param value the leadTimeOfRepair
	 */
	public void setLeadTimeOfRepair(final long value)
	{
		setLeadTimeOfRepair( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.marketValue</code> attribute.
	 * @return the marketValue
	 */
	public Double getMarketValue(final SessionContext ctx)
	{
		return (Double)getProperty( ctx, MARKETVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.marketValue</code> attribute.
	 * @return the marketValue
	 */
	public Double getMarketValue()
	{
		return getMarketValue( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.marketValue</code> attribute. 
	 * @return the marketValue
	 */
	public double getMarketValueAsPrimitive(final SessionContext ctx)
	{
		Double value = getMarketValue( ctx );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.marketValue</code> attribute. 
	 * @return the marketValue
	 */
	public double getMarketValueAsPrimitive()
	{
		return getMarketValueAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.marketValue</code> attribute. 
	 * @param value the marketValue
	 */
	public void setMarketValue(final SessionContext ctx, final Double value)
	{
		setProperty(ctx, MARKETVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.marketValue</code> attribute. 
	 * @param value the marketValue
	 */
	public void setMarketValue(final Double value)
	{
		setMarketValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.marketValue</code> attribute. 
	 * @param value the marketValue
	 */
	public void setMarketValue(final SessionContext ctx, final double value)
	{
		setMarketValue( ctx,Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.marketValue</code> attribute. 
	 * @param value the marketValue
	 */
	public void setMarketValue(final double value)
	{
		setMarketValue( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.minimumCustomPrice</code> attribute.
	 * @return the minimumCustomPrice
	 */
	public Double getMinimumCustomPrice(final SessionContext ctx)
	{
		return (Double)getProperty( ctx, MINIMUMCUSTOMPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.minimumCustomPrice</code> attribute.
	 * @return the minimumCustomPrice
	 */
	public Double getMinimumCustomPrice()
	{
		return getMinimumCustomPrice( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.minimumCustomPrice</code> attribute. 
	 * @return the minimumCustomPrice
	 */
	public double getMinimumCustomPriceAsPrimitive(final SessionContext ctx)
	{
		Double value = getMinimumCustomPrice( ctx );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.minimumCustomPrice</code> attribute. 
	 * @return the minimumCustomPrice
	 */
	public double getMinimumCustomPriceAsPrimitive()
	{
		return getMinimumCustomPriceAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.minimumCustomPrice</code> attribute. 
	 * @param value the minimumCustomPrice
	 */
	public void setMinimumCustomPrice(final SessionContext ctx, final Double value)
	{
		setProperty(ctx, MINIMUMCUSTOMPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.minimumCustomPrice</code> attribute. 
	 * @param value the minimumCustomPrice
	 */
	public void setMinimumCustomPrice(final Double value)
	{
		setMinimumCustomPrice( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.minimumCustomPrice</code> attribute. 
	 * @param value the minimumCustomPrice
	 */
	public void setMinimumCustomPrice(final SessionContext ctx, final double value)
	{
		setMinimumCustomPrice( ctx,Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.minimumCustomPrice</code> attribute. 
	 * @param value the minimumCustomPrice
	 */
	public void setMinimumCustomPrice(final double value)
	{
		setMinimumCustomPrice( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceLocalProduct.getName requires a session language", 0 );
		}
		return (String)getLocalizedProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.name</code> attribute. 
	 * @return the localized name
	 */
	public Map<Language,String> getAllName(final SessionContext ctx)
	{
		return (Map<Language,String>)getAllLocalizedProperties(ctx,NAME,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.name</code> attribute. 
	 * @return the localized name
	 */
	public Map<Language,String> getAllName()
	{
		return getAllName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedBHGEServiceLocalProduct.setName requires a session language", 0 );
		}
		setLocalizedProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.name</code> attribute. 
	 * @param value the name
	 */
	public void setAllName(final SessionContext ctx, final Map<Language,String> value)
	{
		setAllLocalizedProperties(ctx,NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.name</code> attribute. 
	 * @param value the name
	 */
	public void setAllName(final Map<Language,String> value)
	{
		setAllName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.orderToAddressSiteCode</code> attribute.
	 * @return the orderToAddressSiteCode
	 */
	public BHGEServiceSite getOrderToAddressSiteCode(final SessionContext ctx)
	{
		return (BHGEServiceSite)getProperty( ctx, ORDERTOADDRESSSITECODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.orderToAddressSiteCode</code> attribute.
	 * @return the orderToAddressSiteCode
	 */
	public BHGEServiceSite getOrderToAddressSiteCode()
	{
		return getOrderToAddressSiteCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.orderToAddressSiteCode</code> attribute. 
	 * @param value the orderToAddressSiteCode
	 */
	public void setOrderToAddressSiteCode(final SessionContext ctx, final BHGEServiceSite value)
	{
		setProperty(ctx, ORDERTOADDRESSSITECODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.orderToAddressSiteCode</code> attribute. 
	 * @param value the orderToAddressSiteCode
	 */
	public void setOrderToAddressSiteCode(final BHGEServiceSite value)
	{
		setOrderToAddressSiteCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.product</code> attribute.
	 * @return the product
	 */
	public GEEdgeProduct getProduct(final SessionContext ctx)
	{
		return (GEEdgeProduct)getProperty( ctx, PRODUCT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.product</code> attribute.
	 * @return the product
	 */
	public GEEdgeProduct getProduct()
	{
		return getProduct( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.product</code> attribute. 
	 * @param value the product
	 */
	public void setProduct(final SessionContext ctx, final GEEdgeProduct value)
	{
		setProperty(ctx, PRODUCT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.product</code> attribute. 
	 * @param value the product
	 */
	public void setProduct(final GEEdgeProduct value)
	{
		setProduct( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.returnToAddressSiteCode</code> attribute.
	 * @return the returnToAddressSiteCode
	 */
	public BHGEServiceSite getReturnToAddressSiteCode(final SessionContext ctx)
	{
		return (BHGEServiceSite)getProperty( ctx, RETURNTOADDRESSSITECODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.returnToAddressSiteCode</code> attribute.
	 * @return the returnToAddressSiteCode
	 */
	public BHGEServiceSite getReturnToAddressSiteCode()
	{
		return getReturnToAddressSiteCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.returnToAddressSiteCode</code> attribute. 
	 * @param value the returnToAddressSiteCode
	 */
	public void setReturnToAddressSiteCode(final SessionContext ctx, final BHGEServiceSite value)
	{
		setProperty(ctx, RETURNTOADDRESSSITECODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.returnToAddressSiteCode</code> attribute. 
	 * @param value the returnToAddressSiteCode
	 */
	public void setReturnToAddressSiteCode(final BHGEServiceSite value)
	{
		setReturnToAddressSiteCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.standardLeadTimeMap</code> attribute.
	 * @return the standardLeadTimeMap
	 */
	public Map<String,Double> getAllStandardLeadTimeMap(final SessionContext ctx)
	{
		Map<String,Double> map = (Map<String,Double>)getProperty( ctx, STANDARDLEADTIMEMAP);
		return map != null ? map : Collections.EMPTY_MAP;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.standardLeadTimeMap</code> attribute.
	 * @return the standardLeadTimeMap
	 */
	public Map<String,Double> getAllStandardLeadTimeMap()
	{
		return getAllStandardLeadTimeMap( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.standardLeadTimeMap</code> attribute. 
	 * @param value the standardLeadTimeMap
	 */
	public void setAllStandardLeadTimeMap(final SessionContext ctx, final Map<String,Double> value)
	{
		setProperty(ctx, STANDARDLEADTIMEMAP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.standardLeadTimeMap</code> attribute. 
	 * @param value the standardLeadTimeMap
	 */
	public void setAllStandardLeadTimeMap(final Map<String,Double> value)
	{
		setAllStandardLeadTimeMap( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.supportedReturnReasons</code> attribute.
	 * @return the supportedReturnReasons
	 */
	public Collection<EnumerationValue> getSupportedReturnReasons(final SessionContext ctx)
	{
		Collection<EnumerationValue> coll = (Collection<EnumerationValue>)getProperty( ctx, SUPPORTEDRETURNREASONS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEServiceLocalProduct.supportedReturnReasons</code> attribute.
	 * @return the supportedReturnReasons
	 */
	public Collection<EnumerationValue> getSupportedReturnReasons()
	{
		return getSupportedReturnReasons( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.supportedReturnReasons</code> attribute. 
	 * @param value the supportedReturnReasons
	 */
	public void setSupportedReturnReasons(final SessionContext ctx, final Collection<EnumerationValue> value)
	{
		setProperty(ctx, SUPPORTEDRETURNREASONS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEServiceLocalProduct.supportedReturnReasons</code> attribute. 
	 * @param value the supportedReturnReasons
	 */
	public void setSupportedReturnReasons(final Collection<EnumerationValue> value)
	{
		setSupportedReturnReasons( getSession().getSessionContext(), value );
	}
	
}
