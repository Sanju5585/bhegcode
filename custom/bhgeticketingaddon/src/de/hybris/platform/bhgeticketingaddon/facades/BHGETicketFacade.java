/**
 *
 */
package de.hybris.platform.bhgeticketingaddon.facades;

import de.hybris.platform.customerticketingfacades.TicketFacade;
import de.hybris.platform.customerticketingfacades.data.TicketData;

/**
 * @author ashvyas
 *
 */
public interface BHGETicketFacade extends TicketFacade {
	public void bhgeCreateTicket(final TicketData ticketData);
}
