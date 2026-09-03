/**
 *
 */
package de.hybris.platform.bhgeticketingaddon.services;

import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.ticketsystem.data.CsTicketParameter;

import org.springframework.web.multipart.MultipartFile;

/**
 * @author ashvyas
 *
 */
public interface BHGETicketBusinessService {
	public void bhgeCreateTicket(final CsTicketParameter csTicketParameter);

	public MediaModel getMediaForFileAttachment(final MultipartFile multipartFile);

}
