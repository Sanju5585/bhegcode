/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.OrderNotification;
import de.hybris.platform.commerceservices.jalo.process.StoreFrontProcess;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.SessionContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type {@link com.bhge.core.jalo.OrderNotificationEmailProcess OrderNotificationEmailProcess}.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedOrderNotificationEmailProcess extends StoreFrontProcess
{
	/** Qualifier of the <code>OrderNotificationEmailProcess.notification</code> attribute **/
	public static final String NOTIFICATION = "notification";
	protected static final Map<String, AttributeMode> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>(StoreFrontProcess.DEFAULT_INITIAL_ATTRIBUTES);
		tmp.put(NOTIFICATION, AttributeMode.INITIAL);
		DEFAULT_INITIAL_ATTRIBUTES = Collections.unmodifiableMap(tmp);
	}
	@Override
	protected Map<String, AttributeMode> getDefaultAttributeModes()
	{
		return DEFAULT_INITIAL_ATTRIBUTES;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotificationEmailProcess.notification</code> attribute.
	 * @return the notification
	 */
	public OrderNotification getNotification(final SessionContext ctx)
	{
		return (OrderNotification)getProperty( ctx, NOTIFICATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OrderNotificationEmailProcess.notification</code> attribute.
	 * @return the notification
	 */
	public OrderNotification getNotification()
	{
		return getNotification( getSession().getSessionContext() );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotificationEmailProcess.notification</code> attribute. 
	 * @param value the notification
	 */
	public void setNotification(final SessionContext ctx, final OrderNotification value)
	{
		setProperty(ctx, NOTIFICATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OrderNotificationEmailProcess.notification</code> attribute. 
	 * @param value the notification
	 */
	public void setNotification(final OrderNotification value)
	{
		setNotification( getSession().getSessionContext(), value );
	}
	
}
