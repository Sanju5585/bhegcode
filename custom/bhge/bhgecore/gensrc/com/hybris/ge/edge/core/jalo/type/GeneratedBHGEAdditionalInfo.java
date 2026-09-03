/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.media.Media;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.BHGEAdditionalInfo BHGEAdditionalInfo}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGEAdditionalInfo extends GenericItem
{
	/** Qualifier of the <code>BHGEAdditionalInfo.manufactureYear</code> attribute **/
	public static final String MANUFACTUREYEAR = "manufactureYear";
	/** Qualifier of the <code>BHGEAdditionalInfo.warrantyStatement</code> attribute **/
	public static final String WARRANTYSTATEMENT = "warrantyStatement";
	/** Qualifier of the <code>BHGEAdditionalInfo.warrantyInfoLong</code> attribute **/
	public static final String WARRANTYINFOLONG = "warrantyInfoLong";
	/** Qualifier of the <code>BHGEAdditionalInfo.serviceNotes</code> attribute **/
	public static final String SERVICENOTES = "serviceNotes";
	/** Qualifier of the <code>BHGEAdditionalInfo.serviceNotesLong</code> attribute **/
	public static final String SERVICENOTESLONG = "serviceNotesLong";
	/** Qualifier of the <code>BHGEAdditionalInfo.asFoundReceived</code> attribute **/
	public static final String ASFOUNDRECEIVED = "asFoundReceived";
	/** Qualifier of the <code>BHGEAdditionalInfo.recommendedAccessories</code> attribute **/
	public static final String RECOMMENDEDACCESSORIES = "recommendedAccessories";
	/** Qualifier of the <code>BHGEAdditionalInfo.isAccessoryPresent</code> attribute **/
	public static final String ISACCESSORYPRESENT = "isAccessoryPresent";
	/** Qualifier of the <code>BHGEAdditionalInfo.accessoriesNotes</code> attribute **/
	public static final String ACCESSORIESNOTES = "accessoriesNotes";
	/** Qualifier of the <code>BHGEAdditionalInfo.formAttachments</code> attribute **/
	public static final String FORMATTACHMENTS = "formAttachments";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(MANUFACTUREYEAR, AttributeMode.INITIAL);
		tmp.put(WARRANTYSTATEMENT, AttributeMode.INITIAL);
		tmp.put(WARRANTYINFOLONG, AttributeMode.INITIAL);
		tmp.put(SERVICENOTES, AttributeMode.INITIAL);
		tmp.put(SERVICENOTESLONG, AttributeMode.INITIAL);
		tmp.put(ASFOUNDRECEIVED, AttributeMode.INITIAL);
		tmp.put(RECOMMENDEDACCESSORIES, AttributeMode.INITIAL);
		tmp.put(ISACCESSORYPRESENT, AttributeMode.INITIAL);
		tmp.put(ACCESSORIESNOTES, AttributeMode.INITIAL);
		tmp.put(FORMATTACHMENTS, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.accessoriesNotes</code> attribute.
	 * @return the accessoriesNotes
	 */
	public String getAccessoriesNotes(final SessionContext ctx)
	{
		return (String)getProperty( ctx, ACCESSORIESNOTES);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.accessoriesNotes</code> attribute.
	 * @return the accessoriesNotes
	 */
	public String getAccessoriesNotes()
	{
		return getAccessoriesNotes( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.accessoriesNotes</code> attribute. 
	 * @param value the accessoriesNotes
	 */
	public void setAccessoriesNotes(final SessionContext ctx, final String value)
	{
		setProperty(ctx, ACCESSORIESNOTES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.accessoriesNotes</code> attribute. 
	 * @param value the accessoriesNotes
	 */
	public void setAccessoriesNotes(final String value)
	{
		setAccessoriesNotes( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.asFoundReceived</code> attribute.
	 * @return the asFoundReceived
	 */
	public Boolean isAsFoundReceived(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ASFOUNDRECEIVED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.asFoundReceived</code> attribute.
	 * @return the asFoundReceived
	 */
	public Boolean isAsFoundReceived()
	{
		return isAsFoundReceived( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.asFoundReceived</code> attribute. 
	 * @return the asFoundReceived
	 */
	public boolean isAsFoundReceivedAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isAsFoundReceived( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.asFoundReceived</code> attribute. 
	 * @return the asFoundReceived
	 */
	public boolean isAsFoundReceivedAsPrimitive()
	{
		return isAsFoundReceivedAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.asFoundReceived</code> attribute. 
	 * @param value the asFoundReceived
	 */
	public void setAsFoundReceived(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ASFOUNDRECEIVED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.asFoundReceived</code> attribute. 
	 * @param value the asFoundReceived
	 */
	public void setAsFoundReceived(final Boolean value)
	{
		setAsFoundReceived( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.asFoundReceived</code> attribute. 
	 * @param value the asFoundReceived
	 */
	public void setAsFoundReceived(final SessionContext ctx, final boolean value)
	{
		setAsFoundReceived( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.asFoundReceived</code> attribute. 
	 * @param value the asFoundReceived
	 */
	public void setAsFoundReceived(final boolean value)
	{
		setAsFoundReceived( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.formAttachments</code> attribute.
	 * @return the formAttachments - The form attachments
	 */
	public Collection<Media> getFormAttachments(final SessionContext ctx)
	{
		Collection<Media> coll = (Collection<Media>)getProperty( ctx, FORMATTACHMENTS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.formAttachments</code> attribute.
	 * @return the formAttachments - The form attachments
	 */
	public Collection<Media> getFormAttachments()
	{
		return getFormAttachments( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.formAttachments</code> attribute. 
	 * @param value the formAttachments - The form attachments
	 */
	public void setFormAttachments(final SessionContext ctx, final Collection<Media> value)
	{
		setProperty(ctx, FORMATTACHMENTS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.formAttachments</code> attribute. 
	 * @param value the formAttachments - The form attachments
	 */
	public void setFormAttachments(final Collection<Media> value)
	{
		setFormAttachments( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.isAccessoryPresent</code> attribute.
	 * @return the isAccessoryPresent
	 */
	public Boolean isIsAccessoryPresent(final SessionContext ctx)
	{
		return (Boolean)getProperty( ctx, ISACCESSORYPRESENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.isAccessoryPresent</code> attribute.
	 * @return the isAccessoryPresent
	 */
	public Boolean isIsAccessoryPresent()
	{
		return isIsAccessoryPresent( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.isAccessoryPresent</code> attribute. 
	 * @return the isAccessoryPresent
	 */
	public boolean isIsAccessoryPresentAsPrimitive(final SessionContext ctx)
	{
		Boolean value = isIsAccessoryPresent( ctx );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.isAccessoryPresent</code> attribute. 
	 * @return the isAccessoryPresent
	 */
	public boolean isIsAccessoryPresentAsPrimitive()
	{
		return isIsAccessoryPresentAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.isAccessoryPresent</code> attribute. 
	 * @param value the isAccessoryPresent
	 */
	public void setIsAccessoryPresent(final SessionContext ctx, final Boolean value)
	{
		setProperty(ctx, ISACCESSORYPRESENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.isAccessoryPresent</code> attribute. 
	 * @param value the isAccessoryPresent
	 */
	public void setIsAccessoryPresent(final Boolean value)
	{
		setIsAccessoryPresent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.isAccessoryPresent</code> attribute. 
	 * @param value the isAccessoryPresent
	 */
	public void setIsAccessoryPresent(final SessionContext ctx, final boolean value)
	{
		setIsAccessoryPresent( ctx,Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.isAccessoryPresent</code> attribute. 
	 * @param value the isAccessoryPresent
	 */
	public void setIsAccessoryPresent(final boolean value)
	{
		setIsAccessoryPresent( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.manufactureYear</code> attribute.
	 * @return the manufactureYear
	 */
	public Date getManufactureYear(final SessionContext ctx)
	{
		return (Date)getProperty( ctx, MANUFACTUREYEAR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.manufactureYear</code> attribute.
	 * @return the manufactureYear
	 */
	public Date getManufactureYear()
	{
		return getManufactureYear( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.manufactureYear</code> attribute. 
	 * @param value the manufactureYear
	 */
	public void setManufactureYear(final SessionContext ctx, final Date value)
	{
		setProperty(ctx, MANUFACTUREYEAR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.manufactureYear</code> attribute. 
	 * @param value the manufactureYear
	 */
	public void setManufactureYear(final Date value)
	{
		setManufactureYear( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.recommendedAccessories</code> attribute.
	 * @return the recommendedAccessories
	 */
	public String getRecommendedAccessories(final SessionContext ctx)
	{
		return (String)getProperty( ctx, RECOMMENDEDACCESSORIES);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.recommendedAccessories</code> attribute.
	 * @return the recommendedAccessories
	 */
	public String getRecommendedAccessories()
	{
		return getRecommendedAccessories( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.recommendedAccessories</code> attribute. 
	 * @param value the recommendedAccessories
	 */
	public void setRecommendedAccessories(final SessionContext ctx, final String value)
	{
		setProperty(ctx, RECOMMENDEDACCESSORIES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.recommendedAccessories</code> attribute. 
	 * @param value the recommendedAccessories
	 */
	public void setRecommendedAccessories(final String value)
	{
		setRecommendedAccessories( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.serviceNotes</code> attribute.
	 * @return the serviceNotes
	 */
	public String getServiceNotes(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICENOTES);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.serviceNotes</code> attribute.
	 * @return the serviceNotes
	 */
	public String getServiceNotes()
	{
		return getServiceNotes( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.serviceNotes</code> attribute. 
	 * @param value the serviceNotes
	 */
	public void setServiceNotes(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICENOTES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.serviceNotes</code> attribute. 
	 * @param value the serviceNotes
	 */
	public void setServiceNotes(final String value)
	{
		setServiceNotes( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.serviceNotesLong</code> attribute.
	 * @return the serviceNotesLong
	 */
	public String getServiceNotesLong(final SessionContext ctx)
	{
		return (String)getProperty( ctx, SERVICENOTESLONG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.serviceNotesLong</code> attribute.
	 * @return the serviceNotesLong
	 */
	public String getServiceNotesLong()
	{
		return getServiceNotesLong( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.serviceNotesLong</code> attribute. 
	 * @param value the serviceNotesLong
	 */
	public void setServiceNotesLong(final SessionContext ctx, final String value)
	{
		setProperty(ctx, SERVICENOTESLONG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.serviceNotesLong</code> attribute. 
	 * @param value the serviceNotesLong
	 */
	public void setServiceNotesLong(final String value)
	{
		setServiceNotesLong( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.warrantyInfoLong</code> attribute.
	 * @return the warrantyInfoLong
	 */
	public String getWarrantyInfoLong(final SessionContext ctx)
	{
		return (String)getProperty( ctx, WARRANTYINFOLONG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.warrantyInfoLong</code> attribute.
	 * @return the warrantyInfoLong
	 */
	public String getWarrantyInfoLong()
	{
		return getWarrantyInfoLong( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.warrantyInfoLong</code> attribute. 
	 * @param value the warrantyInfoLong
	 */
	public void setWarrantyInfoLong(final SessionContext ctx, final String value)
	{
		setProperty(ctx, WARRANTYINFOLONG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.warrantyInfoLong</code> attribute. 
	 * @param value the warrantyInfoLong
	 */
	public void setWarrantyInfoLong(final String value)
	{
		setWarrantyInfoLong( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.warrantyStatement</code> attribute.
	 * @return the warrantyStatement
	 */
	public String getWarrantyStatement(final SessionContext ctx)
	{
		return (String)getProperty( ctx, WARRANTYSTATEMENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGEAdditionalInfo.warrantyStatement</code> attribute.
	 * @return the warrantyStatement
	 */
	public String getWarrantyStatement()
	{
		return getWarrantyStatement( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.warrantyStatement</code> attribute. 
	 * @param value the warrantyStatement
	 */
	public void setWarrantyStatement(final SessionContext ctx, final String value)
	{
		setProperty(ctx, WARRANTYSTATEMENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGEAdditionalInfo.warrantyStatement</code> attribute. 
	 * @param value the warrantyStatement
	 */
	public void setWarrantyStatement(final String value)
	{
		setWarrantyStatement( getSession().getSessionContext(), value );
	}
	
}
