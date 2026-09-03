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
 * Generated class for type {@link de.hybris.platform.jalo.GenericItem BHGERMAPlantDetails}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGERMAPlantDetails extends GenericItem
{
	/** Qualifier of the <code>BHGERMAPlantDetails.plantId</code> attribute **/
	public static final String PLANTID = "plantId";
	/** Qualifier of the <code>BHGERMAPlantDetails.plantName</code> attribute **/
	public static final String PLANTNAME = "plantName";
	/** Qualifier of the <code>BHGERMAPlantDetails.plantDetails</code> attribute **/
	public static final String PLANTDETAILS = "plantDetails";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(PLANTID, AttributeMode.INITIAL);
		tmp.put(PLANTNAME, AttributeMode.INITIAL);
		tmp.put(PLANTDETAILS, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERMAPlantDetails.plantDetails</code> attribute.
	 * @return the plantDetails - plant Details
	 */
	public String getPlantDetails(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PLANTDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERMAPlantDetails.plantDetails</code> attribute.
	 * @return the plantDetails - plant Details
	 */
	public String getPlantDetails()
	{
		return getPlantDetails( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERMAPlantDetails.plantDetails</code> attribute. 
	 * @param value the plantDetails - plant Details
	 */
	public void setPlantDetails(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PLANTDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERMAPlantDetails.plantDetails</code> attribute. 
	 * @param value the plantDetails - plant Details
	 */
	public void setPlantDetails(final String value)
	{
		setPlantDetails( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERMAPlantDetails.plantId</code> attribute.
	 * @return the plantId - Plant Id
	 */
	public String getPlantId(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PLANTID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERMAPlantDetails.plantId</code> attribute.
	 * @return the plantId - Plant Id
	 */
	public String getPlantId()
	{
		return getPlantId( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERMAPlantDetails.plantId</code> attribute. 
	 * @param value the plantId - Plant Id
	 */
	public void setPlantId(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PLANTID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERMAPlantDetails.plantId</code> attribute. 
	 * @param value the plantId - Plant Id
	 */
	public void setPlantId(final String value)
	{
		setPlantId( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERMAPlantDetails.plantName</code> attribute.
	 * @return the plantName - Plant Name
	 */
	public String getPlantName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, PLANTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGERMAPlantDetails.plantName</code> attribute.
	 * @return the plantName - Plant Name
	 */
	public String getPlantName()
	{
		return getPlantName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERMAPlantDetails.plantName</code> attribute. 
	 * @param value the plantName - Plant Name
	 */
	public void setPlantName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, PLANTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGERMAPlantDetails.plantName</code> attribute. 
	 * @param value the plantName - Plant Name
	 */
	public void setPlantName(final String value)
	{
		setPlantName( getSession().getSessionContext(), value );
	}
	
}
