/**
 *
 */
package com.bhge.core.mailmessages.context;

import de.hybris.platform.commercefacades.order.data.OrderHistoryViewData;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


/**
 * @author 667142
 *
 */
public class BHGEOrderTrackingEmailContext
{
	private List<String> toAddresses;
	private String mediaBaseUrl;
	private Map<String, Object> messages;

	/**
	 * Retrieves a specific localized messageId from the template
	 *
	 * @param messageId
	 * @return the localized messageId
	 */
	public String getMessage(final String messageId)
	{
		return messages.get(messageId).toString();
	}

	public Map<String, Object> getMessages()
	{
		return messages;
	}

	public void setMessages(final Map<String, Object> messages)
	{
		this.messages = messages;
	}

	public List<String> getToAddresses()
	{
		return toAddresses;
	}

	public void setToAddresses(final List<String> toAddresses)
	{
		this.toAddresses = toAddresses;
	}

	public String getSubject()
	{
		return subject;
	}

	public void setSubject(final String subject)
	{
		this.subject = subject;
	}

	public ArrayList<OrderHistoryViewData> getOrder()
	{
		return order;
	}

	public void setOrder(final ArrayList<OrderHistoryViewData> order)
	{
		this.order = order;
	}

	private String subject;

	private ArrayList<OrderHistoryViewData> order;

	/**
	 * @return the mediaBaseUrl
	 */
	public String getMediaBaseUrl()
	{
		return mediaBaseUrl;
	}

	/**
	 * @param mediaBaseUrl
	 *           the mediaBaseUrl to set
	 */
	public void setMediaBaseUrl(final String mediaBaseUrl)
	{
		this.mediaBaseUrl = mediaBaseUrl;
	}
}
