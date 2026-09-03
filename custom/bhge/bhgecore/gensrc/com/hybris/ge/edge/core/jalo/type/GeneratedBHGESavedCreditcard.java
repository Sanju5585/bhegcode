/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.hybris.ge.edge.core.jalo.type;

import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.b2b.jalo.B2BCustomer;
import de.hybris.platform.b2b.jalo.B2BUnit;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.util.BidirectionalOneToManyHandler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.hybris.ge.edge.core.jalo.type.BHGESavedCreditcard BHGESavedCreditcard}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBHGESavedCreditcard extends GenericItem
{
	/** Qualifier of the <code>BHGESavedCreditcard.number</code> attribute **/
	public static final String NUMBER = "number";
	/** Qualifier of the <code>BHGESavedCreditcard.type</code> attribute **/
	public static final String TYPE = "type";
	/** Qualifier of the <code>BHGESavedCreditcard.validTru</code> attribute **/
	public static final String VALIDTRU = "validTru";
	/** Qualifier of the <code>BHGESavedCreditcard.token</code> attribute **/
	public static final String TOKEN = "token";
	/** Qualifier of the <code>BHGESavedCreditcard.name</code> attribute **/
	public static final String NAME = "name";
	/** Qualifier of the <code>BHGESavedCreditcard.b2bUnitPOS</code> attribute **/
	public static final String B2BUNITPOS = "b2bUnitPOS";
	/** Qualifier of the <code>BHGESavedCreditcard.b2bUnit</code> attribute **/
	public static final String B2BUNIT = "b2bUnit";
	/** Qualifier of the <code>BHGESavedCreditcard.b2bCustomerPOS</code> attribute **/
	public static final String B2BCUSTOMERPOS = "b2bCustomerPOS";
	/** Qualifier of the <code>BHGESavedCreditcard.b2bCustomer</code> attribute **/
	public static final String B2BCUSTOMER = "b2bCustomer";
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n B2BUNIT's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedBHGESavedCreditcard> B2BUNITHANDLER = new BidirectionalOneToManyHandler<GeneratedBHGESavedCreditcard>(
	BhgeCoreConstants.TC.BHGESAVEDCREDITCARD,
	false,
	"b2bUnit",
	"b2bUnitPOS",
	true,
	true,
	CollectionType.LIST
	);
	/**
	* {@link BidirectionalOneToManyHandler} for handling 1:n B2BCUSTOMER's relation attributes from 'one' side.
	**/
	protected static final BidirectionalOneToManyHandler<GeneratedBHGESavedCreditcard> B2BCUSTOMERHANDLER = new BidirectionalOneToManyHandler<GeneratedBHGESavedCreditcard>(
	BhgeCoreConstants.TC.BHGESAVEDCREDITCARD,
	false,
	"b2bCustomer",
	"b2bCustomerPOS",
	true,
	true,
	CollectionType.LIST
	);
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put(NUMBER, AttributeMode.INITIAL);
		tmp.put(TYPE, AttributeMode.INITIAL);
		tmp.put(VALIDTRU, AttributeMode.INITIAL);
		tmp.put(TOKEN, AttributeMode.INITIAL);
		tmp.put(NAME, AttributeMode.INITIAL);
		tmp.put(B2BUNITPOS, AttributeMode.INITIAL);
		tmp.put(B2BUNIT, AttributeMode.INITIAL);
		tmp.put(B2BCUSTOMERPOS, AttributeMode.INITIAL);
		tmp.put(B2BCUSTOMER, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bCustomer</code> attribute.
	 * @return the b2bCustomer - B2B Customer
	 */
	public B2BCustomer getB2bCustomer(final SessionContext ctx)
	{
		return (B2BCustomer)getProperty( ctx, B2BCUSTOMER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bCustomer</code> attribute.
	 * @return the b2bCustomer - B2B Customer
	 */
	public B2BCustomer getB2bCustomer()
	{
		return getB2bCustomer( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bCustomer</code> attribute. 
	 * @param value the b2bCustomer - B2B Customer
	 */
	public void setB2bCustomer(final SessionContext ctx, final B2BCustomer value)
	{
		B2BCUSTOMERHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bCustomer</code> attribute. 
	 * @param value the b2bCustomer - B2B Customer
	 */
	public void setB2bCustomer(final B2BCustomer value)
	{
		setB2bCustomer( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bCustomerPOS</code> attribute.
	 * @return the b2bCustomerPOS
	 */
	 Integer getB2bCustomerPOS(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, B2BCUSTOMERPOS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bCustomerPOS</code> attribute.
	 * @return the b2bCustomerPOS
	 */
	 Integer getB2bCustomerPOS()
	{
		return getB2bCustomerPOS( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bCustomerPOS</code> attribute. 
	 * @return the b2bCustomerPOS
	 */
	 int getB2bCustomerPOSAsPrimitive(final SessionContext ctx)
	{
		Integer value = getB2bCustomerPOS( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bCustomerPOS</code> attribute. 
	 * @return the b2bCustomerPOS
	 */
	 int getB2bCustomerPOSAsPrimitive()
	{
		return getB2bCustomerPOSAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bCustomerPOS</code> attribute. 
	 * @param value the b2bCustomerPOS
	 */
	 void setB2bCustomerPOS(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, B2BCUSTOMERPOS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bCustomerPOS</code> attribute. 
	 * @param value the b2bCustomerPOS
	 */
	 void setB2bCustomerPOS(final Integer value)
	{
		setB2bCustomerPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bCustomerPOS</code> attribute. 
	 * @param value the b2bCustomerPOS
	 */
	 void setB2bCustomerPOS(final SessionContext ctx, final int value)
	{
		setB2bCustomerPOS( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bCustomerPOS</code> attribute. 
	 * @param value the b2bCustomerPOS
	 */
	 void setB2bCustomerPOS(final int value)
	{
		setB2bCustomerPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bUnit</code> attribute.
	 * @return the b2bUnit - B2B unit
	 */
	public B2BUnit getB2bUnit(final SessionContext ctx)
	{
		return (B2BUnit)getProperty( ctx, B2BUNIT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bUnit</code> attribute.
	 * @return the b2bUnit - B2B unit
	 */
	public B2BUnit getB2bUnit()
	{
		return getB2bUnit( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bUnit</code> attribute. 
	 * @param value the b2bUnit - B2B unit
	 */
	public void setB2bUnit(final SessionContext ctx, final B2BUnit value)
	{
		B2BUNITHANDLER.addValue( ctx, value, this  );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bUnit</code> attribute. 
	 * @param value the b2bUnit - B2B unit
	 */
	public void setB2bUnit(final B2BUnit value)
	{
		setB2bUnit( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bUnitPOS</code> attribute.
	 * @return the b2bUnitPOS
	 */
	 Integer getB2bUnitPOS(final SessionContext ctx)
	{
		return (Integer)getProperty( ctx, B2BUNITPOS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bUnitPOS</code> attribute.
	 * @return the b2bUnitPOS
	 */
	 Integer getB2bUnitPOS()
	{
		return getB2bUnitPOS( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bUnitPOS</code> attribute. 
	 * @return the b2bUnitPOS
	 */
	 int getB2bUnitPOSAsPrimitive(final SessionContext ctx)
	{
		Integer value = getB2bUnitPOS( ctx );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.b2bUnitPOS</code> attribute. 
	 * @return the b2bUnitPOS
	 */
	 int getB2bUnitPOSAsPrimitive()
	{
		return getB2bUnitPOSAsPrimitive( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bUnitPOS</code> attribute. 
	 * @param value the b2bUnitPOS
	 */
	 void setB2bUnitPOS(final SessionContext ctx, final Integer value)
	{
		setProperty(ctx, B2BUNITPOS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bUnitPOS</code> attribute. 
	 * @param value the b2bUnitPOS
	 */
	 void setB2bUnitPOS(final Integer value)
	{
		setB2bUnitPOS( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bUnitPOS</code> attribute. 
	 * @param value the b2bUnitPOS
	 */
	 void setB2bUnitPOS(final SessionContext ctx, final int value)
	{
		setB2bUnitPOS( ctx,Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.b2bUnitPOS</code> attribute. 
	 * @param value the b2bUnitPOS
	 */
	 void setB2bUnitPOS(final int value)
	{
		setB2bUnitPOS( getSession().getSessionContext(), value );
	}
	
	@Override
	protected Item createItem(final SessionContext ctx, final ComposedType type, final ItemAttributeMap allAttributes) throws JaloBusinessException
	{
		B2BUNITHANDLER.newInstance(ctx, allAttributes);
		B2BCUSTOMERHANDLER.newInstance(ctx, allAttributes);
		return super.createItem( ctx, type, allAttributes );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.name</code> attribute.
	 * @return the name
	 */
	public String getName(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.name</code> attribute.
	 * @return the name
	 */
	public String getName()
	{
		return getName( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.name</code> attribute. 
	 * @param value the name
	 */
	public void setName(final String value)
	{
		setName( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.number</code> attribute.
	 * @return the number
	 */
	public String getNumber(final SessionContext ctx)
	{
		return (String)getProperty( ctx, NUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.number</code> attribute.
	 * @return the number
	 */
	public String getNumber()
	{
		return getNumber( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.number</code> attribute. 
	 * @param value the number
	 */
	public void setNumber(final SessionContext ctx, final String value)
	{
		setProperty(ctx, NUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.number</code> attribute. 
	 * @param value the number
	 */
	public void setNumber(final String value)
	{
		setNumber( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.token</code> attribute.
	 * @return the token
	 */
	public String getToken(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TOKEN);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.token</code> attribute.
	 * @return the token
	 */
	public String getToken()
	{
		return getToken( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.token</code> attribute. 
	 * @param value the token
	 */
	public void setToken(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TOKEN,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.token</code> attribute. 
	 * @param value the token
	 */
	public void setToken(final String value)
	{
		setToken( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.type</code> attribute.
	 * @return the type
	 */
	public String getType(final SessionContext ctx)
	{
		return (String)getProperty( ctx, TYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.type</code> attribute.
	 * @return the type
	 */
	public String getType()
	{
		return getType( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final SessionContext ctx, final String value)
	{
		setProperty(ctx, TYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.type</code> attribute. 
	 * @param value the type
	 */
	public void setType(final String value)
	{
		setType( getSession().getSessionContext(), value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.validTru</code> attribute.
	 * @return the validTru
	 */
	public String getValidTru(final SessionContext ctx)
	{
		return (String)getProperty( ctx, VALIDTRU);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BHGESavedCreditcard.validTru</code> attribute.
	 * @return the validTru
	 */
	public String getValidTru()
	{
		return getValidTru( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.validTru</code> attribute. 
	 * @param value the validTru
	 */
	public void setValidTru(final SessionContext ctx, final String value)
	{
		setProperty(ctx, VALIDTRU,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BHGESavedCreditcard.validTru</code> attribute. 
	 * @param value the validTru
	 */
	public void setValidTru(final String value)
	{
		setValidTru( getSession().getSessionContext(), value );
	}
	
}
