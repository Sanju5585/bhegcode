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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGEEquipment}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEEquipment extends GenericItem
{
	/** Qualifier of the <code>BHGEEquipment.siteName</code> attribute **/
	public static final String SITENAME = "siteName";
	/** Qualifier of the <code>BHGEEquipment.namePlateSerialNumber</code> attribute **/
	public static final String NAMEPLATESERIALNUMBER = "namePlateSerialNumber";
	/** Qualifier of the <code>BHGEEquipment.unitSerialNumber</code> attribute **/
	public static final String UNITSERIALNUMBER = "unitSerialNumber";
	/** Qualifier of the <code>BHGEEquipment.customerSerialNumber</code> attribute **/
	public static final String CUSTOMERSERIALNUMBER = "customerSerialNumber";
	/** Qualifier of the <code>BHGEEquipment.technologyCode</code> attribute **/
	public static final String TECHNOLOGYCODE = "technologyCode";
	/** Qualifier of the <code>BHGEEquipment.technologyDesc</code> attribute **/
	public static final String TECHNOLOGYDESC = "technologyDesc";
	/** Qualifier of the <code>BHGEEquipment.siteDuns</code> attribute **/
	public static final String SITEDUNS = "siteDuns";
	/** Qualifier of the <code>BHGEEquipment.serviceRelationship</code> attribute **/
	public static final String SERVICERELATIONSHIP = "serviceRelationship";
	/** Qualifier of the <code>BHGEEquipment.equipmentCode</code> attribute **/
	public static final String EQUIPMENTCODE = "equipmentCode";
	/** Qualifier of the <code>BHGEEquipment.unitStatus</code> attribute **/
	public static final String UNITSTATUS = "unitStatus";
	/** Qualifier of the <code>BHGEEquipment.unitNumber</code> attribute **/
	public static final String UNITNUMBER = "unitNumber";
	/** Qualifier of the <code>BHGEEquipment.apmSSO</code> attribute **/
	public static final String APMSSO = "apmSSO";
	/** Qualifier of the <code>BHGEEquipment.apmName</code> attribute **/
	public static final String APMNAME = "apmName";
	/** Qualifier of the <code>BHGEEquipment.cpmSSO</code> attribute **/
	public static final String CPMSSO = "cpmSSO";
	/** Qualifier of the <code>BHGEEquipment.cpmName</code> attribute **/
	public static final String CPMNAME = "cpmName";
	/** Qualifier of the <code>BHGEEquipment.salesManagerSSO</code> attribute **/
	public static final String SALESMANAGERSSO = "salesManagerSSO";
	/** Qualifier of the <code>BHGEEquipment.salesManagerName</code> attribute **/
	public static final String SALESMANAGERNAME = "salesManagerName";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(SITENAME, AttributeMode.INITIAL);
		tmp.put(NAMEPLATESERIALNUMBER, AttributeMode.INITIAL);
		tmp.put(UNITSERIALNUMBER, AttributeMode.INITIAL);
		tmp.put(CUSTOMERSERIALNUMBER, AttributeMode.INITIAL);
		tmp.put(TECHNOLOGYCODE, AttributeMode.INITIAL);
		tmp.put(TECHNOLOGYDESC, AttributeMode.INITIAL);
		tmp.put(SITEDUNS, AttributeMode.INITIAL);
		tmp.put(SERVICERELATIONSHIP, AttributeMode.INITIAL);
		tmp.put(EQUIPMENTCODE, AttributeMode.INITIAL);
		tmp.put(UNITSTATUS, AttributeMode.INITIAL);
		tmp.put(UNITNUMBER, AttributeMode.INITIAL);
		tmp.put(APMSSO, AttributeMode.INITIAL);
		tmp.put(APMNAME, AttributeMode.INITIAL);
		tmp.put(CPMSSO, AttributeMode.INITIAL);
		tmp.put(CPMNAME, AttributeMode.INITIAL);
		tmp.put(SALESMANAGERSSO, AttributeMode.INITIAL);
		tmp.put(SALESMANAGERNAME, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.apmName</code> attribute.
	 * @return the apmName - APM Name
	 */
	public String getApmName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APMNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.apmName</code> attribute.
	 * @return the apmName - APM Name
	 */
	public String getApmName()
	{
		return getApmName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.apmName</code> attribute. 
	 * @param value the apmName - APM Name
	 */
	public void setApmName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APMNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.apmName</code> attribute. 
	 * @param value the apmName - APM Name
	 */
	public void setApmName(final String value)
	{
		setApmName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.apmSSO</code> attribute.
	 * @return the apmSSO - APM SSO
	 */
	public String getApmSSO(final SessionContext ctx)
	{
		return (String)getProperty( ctx, APMSSO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.apmSSO</code> attribute.
	 * @return the apmSSO - APM SSO
	 */
	public String getApmSSO()
	{
		return getApmSSO( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.apmSSO</code> attribute. 
	 * @param value the apmSSO - APM SSO
	 */
	public void setApmSSO(final SessionContext ctx, final String value)
	{
		setProperty(ctx, APMSSO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.apmSSO</code> attribute. 
	 * @param value the apmSSO - APM SSO
	 */
	public void setApmSSO(final String value)
	{
		setApmSSO( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.cpmName</code> attribute.
	 * @return the cpmName - CPM Name
	 */
	public String getCpmName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CPMNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.cpmName</code> attribute.
	 * @return the cpmName - CPM Name
	 */
	public String getCpmName()
	{
		return getCpmName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.cpmName</code> attribute. 
	 * @param value the cpmName - CPM Name
	 */
	public void setCpmName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CPMNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.cpmName</code> attribute. 
	 * @param value the cpmName - CPM Name
	 */
	public void setCpmName(final String value)
	{
		setCpmName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.cpmSSO</code> attribute.
	 * @return the cpmSSO - CPM SSO
	 */
	public String getCpmSSO(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CPMSSO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.cpmSSO</code> attribute.
	 * @return the cpmSSO - CPM SSO
	 */
	public String getCpmSSO()
	{
		return getCpmSSO( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.cpmSSO</code> attribute. 
	 * @param value the cpmSSO - CPM SSO
	 */
	public void setCpmSSO(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CPMSSO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.cpmSSO</code> attribute. 
	 * @param value the cpmSSO - CPM SSO
	 */
	public void setCpmSSO(final String value)
	{
		setCpmSSO( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.customerSerialNumber</code> attribute.
	 * @return the customerSerialNumber - Customer Serial Number
	 */
	public String getCustomerSerialNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, CUSTOMERSERIALNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.customerSerialNumber</code> attribute.
	 * @return the customerSerialNumber - Customer Serial Number
	 */
	public String getCustomerSerialNumber()
	{
		return getCustomerSerialNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.customerSerialNumber</code> attribute. 
	 * @param value the customerSerialNumber - Customer Serial Number
	 */
	public void setCustomerSerialNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, CUSTOMERSERIALNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.customerSerialNumber</code> attribute. 
	 * @param value the customerSerialNumber - Customer Serial Number
	 */
	public void setCustomerSerialNumber(final String value)
	{
		setCustomerSerialNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.equipmentCode</code> attribute.
	 * @return the equipmentCode - Equipment Code
	 */
	public String getEquipmentCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, EQUIPMENTCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.equipmentCode</code> attribute.
	 * @return the equipmentCode - Equipment Code
	 */
	public String getEquipmentCode()
	{
		return getEquipmentCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.equipmentCode</code> attribute. 
	 * @param value the equipmentCode - Equipment Code
	 */
	public void setEquipmentCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, EQUIPMENTCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.equipmentCode</code> attribute. 
	 * @param value the equipmentCode - Equipment Code
	 */
	public void setEquipmentCode(final String value)
	{
		setEquipmentCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.namePlateSerialNumber</code> attribute.
	 * @return the namePlateSerialNumber - Name Plate Serial Number
	 */
	public String getNamePlateSerialNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NAMEPLATESERIALNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.namePlateSerialNumber</code> attribute.
	 * @return the namePlateSerialNumber - Name Plate Serial Number
	 */
	public String getNamePlateSerialNumber()
	{
		return getNamePlateSerialNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.namePlateSerialNumber</code> attribute. 
	 * @param value the namePlateSerialNumber - Name Plate Serial Number
	 */
	public void setNamePlateSerialNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NAMEPLATESERIALNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.namePlateSerialNumber</code> attribute. 
	 * @param value the namePlateSerialNumber - Name Plate Serial Number
	 */
	public void setNamePlateSerialNumber(final String value)
	{
		setNamePlateSerialNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.salesManagerName</code> attribute.
	 * @return the salesManagerName - Sales Manager Name
	 */
	public String getSalesManagerName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALESMANAGERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.salesManagerName</code> attribute.
	 * @return the salesManagerName - Sales Manager Name
	 */
	public String getSalesManagerName()
	{
		return getSalesManagerName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.salesManagerName</code> attribute. 
	 * @param value the salesManagerName - Sales Manager Name
	 */
	public void setSalesManagerName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALESMANAGERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.salesManagerName</code> attribute. 
	 * @param value the salesManagerName - Sales Manager Name
	 */
	public void setSalesManagerName(final String value)
	{
		setSalesManagerName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.salesManagerSSO</code> attribute.
	 * @return the salesManagerSSO - Sales Manager SSO
	 */
	public String getSalesManagerSSO(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SALESMANAGERSSO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.salesManagerSSO</code> attribute.
	 * @return the salesManagerSSO - Sales Manager SSO
	 */
	public String getSalesManagerSSO()
	{
		return getSalesManagerSSO( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.salesManagerSSO</code> attribute. 
	 * @param value the salesManagerSSO - Sales Manager SSO
	 */
	public void setSalesManagerSSO(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SALESMANAGERSSO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.salesManagerSSO</code> attribute. 
	 * @param value the salesManagerSSO - Sales Manager SSO
	 */
	public void setSalesManagerSSO(final String value)
	{
		setSalesManagerSSO( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.serviceRelationship</code> attribute.
	 * @return the serviceRelationship - Service Relationship
	 */
	public String getServiceRelationship(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICERELATIONSHIP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.serviceRelationship</code> attribute.
	 * @return the serviceRelationship - Service Relationship
	 */
	public String getServiceRelationship()
	{
		return getServiceRelationship( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.serviceRelationship</code> attribute. 
	 * @param value the serviceRelationship - Service Relationship
	 */
	public void setServiceRelationship(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICERELATIONSHIP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.serviceRelationship</code> attribute. 
	 * @param value the serviceRelationship - Service Relationship
	 */
	public void setServiceRelationship(final String value)
	{
		setServiceRelationship( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.siteDuns</code> attribute.
	 * @return the siteDuns - Site DUNS
	 */
	public String getSiteDuns(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SITEDUNS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.siteDuns</code> attribute.
	 * @return the siteDuns - Site DUNS
	 */
	public String getSiteDuns()
	{
		return getSiteDuns( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.siteDuns</code> attribute. 
	 * @param value the siteDuns - Site DUNS
	 */
	public void setSiteDuns(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SITEDUNS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.siteDuns</code> attribute. 
	 * @param value the siteDuns - Site DUNS
	 */
	public void setSiteDuns(final String value)
	{
		setSiteDuns( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.siteName</code> attribute.
	 * @return the siteName - Site Name of Unit
	 */
	public String getSiteName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SITENAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.siteName</code> attribute.
	 * @return the siteName - Site Name of Unit
	 */
	public String getSiteName()
	{
		return getSiteName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.siteName</code> attribute. 
	 * @param value the siteName - Site Name of Unit
	 */
	public void setSiteName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SITENAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.siteName</code> attribute. 
	 * @param value the siteName - Site Name of Unit
	 */
	public void setSiteName(final String value)
	{
		setSiteName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.technologyCode</code> attribute.
	 * @return the technologyCode - Technology Code
	 */
	public String getTechnologyCode(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TECHNOLOGYCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.technologyCode</code> attribute.
	 * @return the technologyCode - Technology Code
	 */
	public String getTechnologyCode()
	{
		return getTechnologyCode( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.technologyCode</code> attribute. 
	 * @param value the technologyCode - Technology Code
	 */
	public void setTechnologyCode(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TECHNOLOGYCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.technologyCode</code> attribute. 
	 * @param value the technologyCode - Technology Code
	 */
	public void setTechnologyCode(final String value)
	{
		setTechnologyCode( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.technologyDesc</code> attribute.
	 * @return the technologyDesc - Technology Description
	 */
	public String getTechnologyDesc(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TECHNOLOGYDESC);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.technologyDesc</code> attribute.
	 * @return the technologyDesc - Technology Description
	 */
	public String getTechnologyDesc()
	{
		return getTechnologyDesc( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.technologyDesc</code> attribute. 
	 * @param value the technologyDesc - Technology Description
	 */
	public void setTechnologyDesc(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TECHNOLOGYDESC,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.technologyDesc</code> attribute. 
	 * @param value the technologyDesc - Technology Description
	 */
	public void setTechnologyDesc(final String value)
	{
		setTechnologyDesc( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.unitNumber</code> attribute.
	 * @return the unitNumber - Unit Number
	 */
	public String getUnitNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, UNITNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.unitNumber</code> attribute.
	 * @return the unitNumber - Unit Number
	 */
	public String getUnitNumber()
	{
		return getUnitNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.unitNumber</code> attribute. 
	 * @param value the unitNumber - Unit Number
	 */
	public void setUnitNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, UNITNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.unitNumber</code> attribute. 
	 * @param value the unitNumber - Unit Number
	 */
	public void setUnitNumber(final String value)
	{
		setUnitNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.unitSerialNumber</code> attribute.
	 * @return the unitSerialNumber - Unit Serial Number
	 */
	public String getUnitSerialNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, UNITSERIALNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.unitSerialNumber</code> attribute.
	 * @return the unitSerialNumber - Unit Serial Number
	 */
	public String getUnitSerialNumber()
	{
		return getUnitSerialNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.unitSerialNumber</code> attribute. 
	 * @param value the unitSerialNumber - Unit Serial Number
	 */
	public void setUnitSerialNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, UNITSERIALNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.unitSerialNumber</code> attribute. 
	 * @param value the unitSerialNumber - Unit Serial Number
	 */
	public void setUnitSerialNumber(final String value)
	{
		setUnitSerialNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.unitStatus</code> attribute.
	 * @return the unitStatus - Unit Status
	 */
	public String getUnitStatus(final SessionContext ctx)
	{
		return (String)getProperty( ctx, UNITSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEEquipment.unitStatus</code> attribute.
	 * @return the unitStatus - Unit Status
	 */
	public String getUnitStatus()
	{
		return getUnitStatus( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.unitStatus</code> attribute. 
	 * @param value the unitStatus - Unit Status
	 */
	public void setUnitStatus(final SessionContext ctx, final String value)
	{
		setProperty(ctx, UNITSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEEquipment.unitStatus</code> attribute. 
	 * @param value the unitStatus - Unit Status
	 */
	public void setUnitStatus(final String value)
	{
		setUnitStatus( getSession().getSessionContext(), value );
	}
	
}
