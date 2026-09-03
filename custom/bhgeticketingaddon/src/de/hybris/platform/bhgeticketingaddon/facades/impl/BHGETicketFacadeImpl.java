/**
 *
 */
package de.hybris.platform.bhgeticketingaddon.facades.impl;

import de.hybris.platform.bhgeticketingaddon.facades.BHGETicketFacade;
import de.hybris.platform.bhgeticketingaddon.services.BHGETicketBusinessService;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.converters.Converters;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.customerticketingfacades.constants.CustomerticketingfacadesConstants;
import de.hybris.platform.customerticketingfacades.data.StatusData;
import de.hybris.platform.customerticketingfacades.data.TicketAssociatedData;
import de.hybris.platform.customerticketingfacades.data.TicketCategory;
import de.hybris.platform.customerticketingfacades.data.TicketData;
import de.hybris.platform.customerticketingfacades.strategies.TicketAssociationStrategies;
import de.hybris.platform.enumeration.EnumerationService;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.exceptions.ClassMismatchException;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.ticket.enums.CsEventReason;
import de.hybris.platform.ticket.enums.CsInterventionType;
import de.hybris.platform.ticket.enums.CsResolutionType;
import de.hybris.platform.ticket.enums.CsTicketCategory;
import de.hybris.platform.ticket.enums.CsTicketPriority;
import de.hybris.platform.ticket.enums.CsTicketState;
import de.hybris.platform.ticket.events.model.CsCustomerEventModel;
import de.hybris.platform.ticket.model.CsAgentGroupModel;
import de.hybris.platform.ticket.model.CsTicketModel;
import de.hybris.platform.ticket.service.TicketAttachmentsService;
import de.hybris.platform.ticket.service.TicketBusinessService;
import de.hybris.platform.ticket.service.TicketException;
import de.hybris.platform.ticket.service.TicketService;
import de.hybris.platform.ticketsystem.data.CsTicketParameter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;

import jakarta.annotation.Resource;

import de.hybris.platform.util.Config;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import org.springframework.web.multipart.MultipartFile;

/**
 * @author ashvyas
 *
 */
public class BHGETicketFacadeImpl implements BHGETicketFacade {
	private static final Logger LOG = Logger.getLogger(BHGETicketFacadeImpl.class);

	@Resource(name = "bhgeTicketBusinessService")
	private BHGETicketBusinessService bhgeTicketBusinessService;

	private TicketService ticketService;
	private UserService userService;
	private BaseSiteService baseSiteService;

	private TicketBusinessService ticketBusinessService;
	private Converter<CsTicketModel, TicketData> ticketConverter;
	private Converter<CsTicketModel, TicketData> ticketListConverter;
	private Map<String, StatusData> statusMapping;
	private List<TicketAssociationStrategies> associationStrategies;
	private String ticketPriority;
	private String ticketReason;
	private EnumerationService enumerationService;
	private ConfigurationService configurationService;
	private TicketAttachmentsService ticketAttachmentsService;

	/**
	 * @return the ticketService
	 */
	protected TicketService getTicketService() {
		return ticketService;
	}

	/**
	 * @return the userService
	 */
	protected UserService getUserService() {
		return userService;
	}

	/**
	 * @return the ticketBusinessService
	 */
	protected TicketBusinessService getTicketBusinessService() {
		return ticketBusinessService;
	}

	/**
	 * @param ticketService
	 *            the ticketService to set
	 */
	
	public void setTicketService(final TicketService ticketService) {
		this.ticketService = ticketService;
	}

	/**
	 * @param userService
	 *            the userService to set
	 */
	
	public void setUserService(final UserService userService) {
		this.userService = userService;
	}

	/**
	 * @param ticketBusinessService
	 *            the ticketBusinessService to set
	 */
	
	public void setTicketBusinessService(final TicketBusinessService ticketBusinessService) {
		this.ticketBusinessService = ticketBusinessService;
	}

	/**
	 * @return the ticketConverter
	 */
	protected Converter<CsTicketModel, TicketData> getTicketConverter() {
		return ticketConverter;
	}

	protected Converter<CsTicketModel, TicketData> getTicketListConverter() {
		return ticketListConverter;
	}

	
	public void setTicketListConverter(final Converter<CsTicketModel, TicketData> ticketListConverter) {
		this.ticketListConverter = ticketListConverter;
	}

	/**
	 * @return the statusMapping
	 */
	protected Map<String, StatusData> getStatusMapping() {
		return statusMapping;
	}

	/**
	 * @return the associationStrategies
	 */
	protected List<TicketAssociationStrategies> getAssociationStrategies() {
		return associationStrategies;
	}

	/**
	 * @param ticketConverter
	 *            the ticketConverter to set
	 */
	
	public void setTicketConverter(final Converter<CsTicketModel, TicketData> ticketConverter) {
		this.ticketConverter = ticketConverter;
	}

	/**
	 * @param statusMapping
	 *            the statusMapping to set
	 */
	
	public void setStatusMapping(final Map<String, StatusData> statusMapping) {
		this.statusMapping = statusMapping;
	}

	/**
	 * @param associationStrategies
	 *            the associationStrategies to set
	 */
	
	public void setAssociationStrategies(final List<TicketAssociationStrategies> associationStrategies) {
		this.associationStrategies = associationStrategies;
	}

	/**
	 * @return the ticketPriority
	 */
	protected String getTicketPriority() {
		return ticketPriority;
	}

	/**
	 * @param ticketPriority
	 *            the ticketPriority to set
	 */
	
	public void setTicketPriority(final String ticketPriority) {
		this.ticketPriority = ticketPriority;
	}

	/**
	 * @return the ticketReason
	 */
	protected String getTicketReason() {
		return ticketReason;
	}

	/**
	 * @param ticketReason
	 *            the ticketReason to set
	 */
	
	public void setTicketReason(final String ticketReason) {
		this.ticketReason = ticketReason;
	}

	/**
	 * @return the enumerationService
	 */
	protected EnumerationService getEnumerationService() {
		return enumerationService;
	}

	/**
	 * @param enumerationService
	 *            the enumerationService to set
	 */
	
	public void setEnumerationService(final EnumerationService enumerationService) {
		this.enumerationService = enumerationService;
	}

	@Override
	public List<TicketCategory> getTicketCategories() {
		return Arrays.asList(TicketCategory.values());
	}

	/**
	 * @return the configurationService
	 */
	protected ConfigurationService getConfigurationService() {
		return configurationService;
	}

	/**
	 * @param configurationService
	 *            the configurationService to set
	 */
	
	public void setConfigurationService(final ConfigurationService configurationService) {
		this.configurationService = configurationService;
	}

	/**
	 * @return the baseSiteService
	 */
	protected BaseSiteService getBaseSiteService() {
		return baseSiteService;
	}

	/**
	 * @param baseSiteService
	 *            the baseSiteService to set
	 */
	
	public void setBaseSiteService(final BaseSiteService baseSiteService) {
		this.baseSiteService = baseSiteService;
	}

	/**
	 * @return the ticketAttachmentsService
	 */
	protected TicketAttachmentsService getTicketAttachmentsService() {
		return ticketAttachmentsService;
	}

	/**
	 * @param ticketAttachmentsService
	 *            the ticketAttachmentsService to set
	 */
	
	public void setTicketAttachmentsService(final TicketAttachmentsService ticketAttachmentsService) {
		this.ticketAttachmentsService = ticketAttachmentsService;
	}

	/**
	 * @return the bhgeTicketBusinessService
	 */
	public BHGETicketBusinessService getBhgeTicketBusinessService() {
		return bhgeTicketBusinessService;
	}

	/**
	 * @param bhgeTicketBusinessService
	 *            the bhgeTicketBusinessService to set
	 */
	public void setBhgeTicketBusinessService(final BHGETicketBusinessService bhgeTicketBusinessService) {
		this.bhgeTicketBusinessService = bhgeTicketBusinessService;
	}

	protected CsTicketParameter createCsTicketParameter(final TicketData ticketData) {
		final CsTicketParameter csTicketParameter = new CsTicketParameter();
		csTicketParameter.setAttachments(ticketData.getAttachments());
		csTicketParameter.setSubject(ticketData.getSubject());
		csTicketParameter.setEmailId(ticketData.getEmailId());
		csTicketParameter.setMessage(ticketData.getMessage());
		csTicketParameter.setName(ticketData.getName());
		csTicketParameter.setPhoneNo(ticketData.getPhoneNo());
		csTicketParameter
				.setPriority(getEnumerationService().getEnumerationValue(CsTicketPriority._TYPECODE, ticketPriority));
		csTicketParameter.setReason(getEnumerationService().getEnumerationValue(CsEventReason._TYPECODE, ticketReason));
		csTicketParameter
				.setAssociatedTo(getTicketService().getAssociatedObject(ticketData.getAssociatedTo(), null, null));
		csTicketParameter.setAssignedGroup(getDefaultCsAgentManagerGroup());
		csTicketParameter.setCategory(CsTicketCategory.valueOf(ticketData.getTicketCategory().name()));
		csTicketParameter.setHeadline(ticketData.getSubject());
		csTicketParameter.setInterventionType(CsInterventionType.TICKETMESSAGE);
		csTicketParameter.setCreationNotes(ticketData.getMessage());
		csTicketParameter.setCustomer(getUserService().getCurrentUser());
		csTicketParameter.setAttachments(ticketData.getAttachments());

		return csTicketParameter;
	}

	/**
	 * @return CsAgentGroupModel - Default Cs Agent Group Manager
	 */
	protected CsAgentGroupModel getDefaultCsAgentManagerGroup() {
		final String csManagerGroup = getConfigurationService().getConfiguration()
				.getString(CustomerticketingfacadesConstants.DEFAULT_CS_AGENT_MANAGER_GROUP_UID, "");
		if (StringUtils.isNotBlank(csManagerGroup)) {
			try {
				return getUserService().getUserGroupForUID(csManagerGroup, CsAgentGroupModel.class);
			} catch (ClassMismatchException | UnknownIdentifierException exception) {
				LOG.error("Can't set AssignedGroup for the group " + csManagerGroup + ", cause: " + exception);
			}
		}
		return null;
	}

	@Override
	public TicketData updateTicket(final TicketData ticketData) {
		CsTicketModel ticket = getTicketService().getTicketForTicketId(ticketData.getId());
		if (ticket == null) {
			throw new RuntimeException("Ticket not found for the given ID " + ticketData.getId()); // NOSONAR
		}

		// if with status change
		if (!getStatusMapping().get(ticket.getState().getCode()).getId()
				.equalsIgnoreCase(ticketData.getStatus().getId())) {
			ticket = stateChanges.get(getCsStatus(ticketData)).apply(ticket, ticketData);
		} else
		// only a note
		{
			final List<MediaModel> attachments = getAttachments(ticketData);
			final CsCustomerEventModel customerEventModel = getTicketBusinessService().addNoteToTicket(ticket,
					CsInterventionType.IM, CsEventReason.UPDATE, ticketData.getMessage(), attachments);
			ticket = customerEventModel != null ? getTicketService().getTicketForTicketId(ticket.getTicketID()) : null;
		}

		if (ticket == null) {
			throw new RuntimeException(
					"Something went worng while updating the ticket for the give ID " + ticketData.getId()); // NOSONAR
		}

		return ticketData;
	}

	/**
	 * @param ticketData
	 * @return List<MediaModel>
	 */
	protected List<MediaModel> getAttachments(final TicketData ticketData) {
		List<MediaModel> attachments = null;
		if (CollectionUtils.isNotEmpty(ticketData.getAttachments())) {
			attachments = new ArrayList<>(ticketData.getAttachments().size());
			for (final MultipartFile file : ticketData.getAttachments()) {
				try {
					attachments.add(getTicketAttachmentsService().createAttachment(file.getOriginalFilename(),
							file.getContentType(), file.getBytes(), getUserService().getCurrentUser()));
				} catch (final IOException e) {
					LOG.error(e.getMessage(), e);
					return Collections.emptyList();
				}
			}
		}
		return attachments;
	}

	/**
	 * Matches TicketData.Status with CsTicketStatus, using statusMapping map.
	 *
	 * @param data
	 * @return CsTicketState
	 */
	protected CsTicketState getCsStatus(final TicketData data) {
		for (final String key : getStatusMapping().keySet()) {
			if (data.getStatus().getId().equalsIgnoreCase(getStatusMapping().get(key).getId())) {
				LOG.info("matching with: " + key);
				return CsTicketState.valueOf(key);
			}
		}
		LOG.warn("Status key not found");
		return null;
	}

	/**
	 * Special map, that know what to do in case of status changed.
	 */
	protected Map<CsTicketState, BiFunction<CsTicketModel, TicketData, CsTicketModel>> stateChanges = new HashMap<CsTicketState, BiFunction<CsTicketModel, TicketData, CsTicketModel>>() // NOSONAR
	{
		private static final long serialVersionUID = 1L;

		{ // NOSONAR
			put(CsTicketState.CLOSED, (updatedTicket, ticketData) -> {
				try {
					final List<MediaModel> attachments = getAttachments(ticketData);
					return getTicketBusinessService().resolveTicket(updatedTicket, CsInterventionType.IM,
							CsResolutionType.CLOSED, ticketData.getMessage(), attachments) != null
									? getTicketService().getTicketForTicketId(updatedTicket.getTicketID())
									: null;
				} catch (final TicketException ex) {
					LOG.error(ex.getMessage(), ex);
					return null;
				}
			});

			put(CsTicketState.OPEN, (updatedTicket, ticketData) -> {
				try {
					final List<MediaModel> attachments = getAttachments(ticketData);
					return getTicketBusinessService().unResolveTicket(updatedTicket, CsInterventionType.IM,
							CsEventReason.UPDATE, ticketData.getMessage(), attachments) != null
									? getTicketService().getTicketForTicketId(updatedTicket.getTicketID())
									: null;
				} catch (final TicketException ex) {
					LOG.error(ex.getMessage(), ex);
					return null;
				}
			});
		}
	};

	@Override
	public TicketData getTicket(final String ticketId) {
		final CsTicketModel ticketModel = getTicketService().getTicketForTicketId(ticketId);
		if (ticketModel == null) {
			throw new RuntimeException("Ticket not found for the given ID " + ticketId); // NOSONAR
		}

		return ticketModel.getCustomer().getUid().equals(getUserService().getCurrentUser().getUid())
				? getTicketConverter().convert(ticketModel, new TicketData())
				: null;
	}

	@SuppressWarnings("deprecation")
	@Override
	public SearchPageData<TicketData> getTickets(final PageableData pageableData) {
		final SearchPageData<CsTicketModel> searchPageData = getTicketService()
				.getTicketsForCustomerOrderByModifiedTime(getUserService().getCurrentUser(),
						getBaseSiteService().getCurrentBaseSite(), pageableData);

		return convertPageData(searchPageData, getTicketListConverter());
	}

	protected <S, T> SearchPageData<T> convertPageData(final SearchPageData<S> source,
			final Converter<S, T> converter) {
		final SearchPageData<T> result = new SearchPageData<T>();
		result.setPagination(source.getPagination());
		result.setSorts(source.getSorts());
		result.setResults(Converters.convertAll(source.getResults(), converter));
		return result;
	}

	@Override
	public Map<String, List<TicketAssociatedData>> getAssociatedToObjects() {
		final Map<String, List<TicketAssociatedData>> associatedObjects = new HashMap<String, List<TicketAssociatedData>>();
		for (final TicketAssociationStrategies ticketAssocitedStartegy : getAssociationStrategies()) {
			associatedObjects.putAll(ticketAssocitedStartegy.getObjects(getUserService().getCurrentUser()));
		}
		return associatedObjects;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * de.hybris.platform.customerticketingfacades.TicketFacade#createTicket(de.
	 * hybris.platform.customerticketingfacades. data.TicketData)
	 */
	@Override
	public TicketData createTicket(final TicketData ticketData) {
		final CsTicketModel ticket;
		final CsTicketParameter ticketParameter = createCsTicketParameter(ticketData);
		ticket = getTicketBusinessService().createTicket(ticketParameter);
		ticketData.setId(ticket.getTicketID());
		return ticketData;
	}

	@Override
	public void bhgeCreateTicket(final TicketData ticketData) {
		LOG.info("Start bhgeCreateTicket() method");
		final CsTicketParameter csTicketParameter = this.createCsTicketParameter(ticketData);
		getBhgeTicketBusinessService().bhgeCreateTicket(csTicketParameter);
		LOG.info("End bhgeCreateTicket() method");
	}

}
