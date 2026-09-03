package com.bh.occ.controllers;

import com.bhge.core.data.ContactUsData;
import com.bhge.facades.contactus.BHGEContactUsFacade;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.ds.dsocc.common.dto.ContactUsDataWsDTO;
import com.ds.dsocc.common.dto.ContactUsSettingsDataWsDTO;
import com.ds.dsocc.common.dto.ContactUsSettingsListWsDTO;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.enums.data.ContactUsSettingsData;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.text.StringEscapeUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.validation.Valid;
import java.io.IOException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

/**
 * This controller is used for Contactus related APIs for revamped DS store
 * Added on 24/3/2021
 * 
 * @author 212595527
 *
 */

@Controller
@ApiVersion("v2")
@Tag(name = "Contact Us")
@RequestMapping(value = "/{baseSiteId}")
public class DSContactUsController extends DSBaseController {

	private static final Logger LOG = LoggerFactory.getLogger(DSContactUsController.class);

	@Resource(name = "bhgeContactUsFacade")
	private BHGEContactUsFacade bhgeContactUsFacade;
	@Resource(name = "b2bCheckoutFacade")
	private DefaultBHGECheckoutFacade bhgeCheckoutFacade;
	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;
	@Resource(name = "userService")
	private UserService userService;

	@RequestMapping(value = "/users/{userId}/contactUsAnonymousUser", method = RequestMethod.POST)
	@ResponseBody
	@Operation(operationId = "Contact Us Form Request", description = "Places the Contact Us form request for anonymous user.")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public String setContactUsDetails(@Valid final ContactUsData contactUsData, final BindingResult bindingResult)
			throws UnknownHostException {

		contactUsData.setFirstName(StringEscapeUtils.escapeHtml4(contactUsData.getFirstName()));
		LOG.info("Contact Us form request for anonymous user with first name: " + contactUsData.getFirstName());
		contactUsData.setLastName(StringEscapeUtils.escapeHtml4(contactUsData.getLastName()));
		LOG.info("Contact Us form request for anonymous user with last name: " + contactUsData.getLastName());
		contactUsData.setEmail(StringEscapeUtils.escapeHtml4(contactUsData.getEmail()));
		contactUsData.setEmail(StringEscapeUtils.escapeHtml4(contactUsData.getEmail()));
		contactUsData.setAreaOfInterest(StringEscapeUtils.escapeHtml4(contactUsData.getAreaOfInterest()));
		contactUsData.setCountry(StringEscapeUtils.escapeHtml4(contactUsData.getCountry()));
		contactUsData.setCity(StringEscapeUtils.escapeHtml4(contactUsData.getCity()));
		contactUsData.setState(StringEscapeUtils.escapeHtml4(contactUsData.getState()));
		//contactUsData.setCompany(StringEscapeUtils.escapeHtml(contactUsData.getCompany()));
		contactUsData.setTitle(StringEscapeUtils.escapeHtml4(contactUsData.getTitle()));
		//contactUsData.setPhone(StringEscapeUtils.escapeHtml(contactUsData.getPhone()));
		contactUsData.setPostalCode(StringEscapeUtils.escapeHtml4(contactUsData.getPostalCode()));
		contactUsData.setAreaOfInterest(StringEscapeUtils.escapeHtml4(contactUsData.getAreaOfInterest()));
		contactUsData.setMktoPersonNotes(StringEscapeUtils.escapeHtml4(contactUsData.getMktoPersonNotes()));

		return bhgeContactUsFacade.postContactUsData(contactUsData);
//        vsContactUsFacade.setContactUsData(vsContactUsForm);
	}

	@RequestMapping(value = "/users/{userId}/contactus", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getContactus List", summary = "Get a Contactus List ", description  = "Get a Contactus List")
	@ApiBaseSiteIdAndUserIdParam
	public ContactUsSettingsListWsDTO getContactUspage(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User Id", required = true) @PathVariable final String userId)
			throws CMSItemNotFoundException, IOException, ServletException {

		LOG.info("Start Loding ContactUsSettingsData ");
		final List<ContactUsSettingsDataWsDTO> contactUsSettingList = new ArrayList<ContactUsSettingsDataWsDTO>();
		final ContactUsSettingsListWsDTO contactUsSettingdataWSDTO = new ContactUsSettingsListWsDTO();
		LOG.info(" Finish Loding ContactUsSettingsData ");
		LOG.info("Start Loding contactUsSettingsList ");
		/*final List<List<ContactUsSettingsData>> contactussettingsforSoldTo = bhgeUserProfileFacade
				.getContactUsListForSoldTo();*/
		// Fetching the Top section of Contact Us page
		List<List<ContactUsSettingsData>> contactussettingsforSoldTo = new ArrayList<>();
		try {
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			contactussettingsforSoldTo = bhgeUserProfileFacade.getContactUsListForCustomer(currentUser);
		} catch (RuntimeException re) {
			LOG.error("Exception in Top section of Contact Us");
			re.printStackTrace();
		}
		for (List<ContactUsSettingsData> contactUsSettingsListforSoldTO : contactussettingsforSoldTo) {
			for (ContactUsSettingsData contactUsSettingDataSoldTO : contactUsSettingsListforSoldTO) {

				ContactUsSettingsDataWsDTO contactUsSettingsDataWsDTO = getDataMapper().map(contactUsSettingDataSoldTO,
						ContactUsSettingsDataWsDTO.class, "FULL");
				contactUsSettingList.add(contactUsSettingsDataWsDTO);
			}
		}

		contactUsSettingdataWSDTO.setContactussettinglist(contactUsSettingList);

		return contactUsSettingdataWSDTO;

	}

	@RequestMapping(value = "/users/{userId}/staticContactus", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "get static Contactus List", summary = "Get static Contactus List ", description  = "Get static Contactus List")
	@ApiBaseSiteIdAndUserIdParam
	public ContactUsSettingsListWsDTO getStaticContactUsPage(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User Id", required = true) @PathVariable final String userId)
			throws CMSItemNotFoundException, IOException, ServletException {

		LOG.info("Start Loding Static ContactUsSettingsData ");
		final List<ContactUsSettingsDataWsDTO> contactUsSettingList = new ArrayList<ContactUsSettingsDataWsDTO>();
		final ContactUsSettingsListWsDTO contactUsSettingdataWSDTO = new ContactUsSettingsListWsDTO();
		LOG.info(" Finish Loding Static ContactUsSettingsData ");
		LOG.info("Start Loding Static contactUsSettingsList ");

		/*final List<List<ContactUsSettingsData>> contactUsSettingsList = bhgeUserProfileFacade.getContactUsListForUser();*/

		// Fetching the Static Bottom section Contact Us data
		List<List<ContactUsSettingsData>> contactUsSettingsList = new ArrayList<>();
		try {
			contactUsSettingsList = bhgeUserProfileFacade.getStaticContactUs();
		} catch (RuntimeException re) {
			LOG.error("Exception in Static Bottom section Contact Us");
			re.printStackTrace();
		}

		for (List<ContactUsSettingsData> contactUsSettingsDataList : contactUsSettingsList) {
			for (ContactUsSettingsData contactUsSettingData : contactUsSettingsDataList) {

				ContactUsSettingsDataWsDTO contactUsSettingsDataWsDTO = getDataMapper().map(contactUsSettingData,
						ContactUsSettingsDataWsDTO.class, "FULL");
				contactUsSettingList.add(contactUsSettingsDataWsDTO);
			}
		}

		contactUsSettingdataWSDTO.setContactussettinglist(contactUsSettingList);

		return contactUsSettingdataWSDTO;

	}

	@RequestMapping(value = "/users/{userId}/contactus", method = RequestMethod.POST, consumes = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@Operation(operationId = "createContactUsFrom", summary = "Creates a new ContactUs From ", description  = "Creates a new ContactUs From")
	@ApiBaseSiteIdAndUserIdParam
	public ContactUsDataWsDTO postContactUs(
			@Parameter(description = "contactus object.", required = true) @RequestBody final ContactUsDataWsDTO form,
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User Id", required = true) @PathVariable final String userId)
			throws CMSItemNotFoundException, IOException, ServletException {

		LOG.info(" Start Setting ContactUsData ");
		final ContactUsData contactUsData = new ContactUsData();
		String response = null;

		contactUsData.setFirstName(StringEscapeUtils.escapeHtml4(form.getFirstName()));
		LOG.info("Contact Us form request with first name: " + form.getFirstName() + " for user: " + userId);
		contactUsData.setLastName(StringEscapeUtils.escapeHtml4(form.getLastName()));
		LOG.info("Contact Us form request with last name: " + form.getLastName() + " for user: " + userId);
		contactUsData.setEmail(StringEscapeUtils.escapeHtml4(form.getEmail()));
		contactUsData.setAreaOfInterest(StringEscapeUtils.escapeHtml4(form.getAreaOfInterest()));
		LOG.info("Contact Us form request with area of interest: " + form.getAreaOfInterest() + " for user: " + userId);
		contactUsData.setCountry(StringEscapeUtils.escapeHtml4(form.getCountry()));
		contactUsData.setCity(StringEscapeUtils.escapeHtml4(form.getCity()));
		contactUsData.setState(StringEscapeUtils.escapeHtml4(form.getState()));
		contactUsData.setCompanyName(StringEscapeUtils.escapeHtml4(form.getCompanyName()));
		contactUsData.setMktoPersonNotes(StringEscapeUtils.escapeHtml4(form.getMktoPersonNotes()));
		contactUsData.setPhoneNum(StringEscapeUtils.escapeHtml4(form.getPhoneNum()));
		contactUsData.setPostalCode(StringEscapeUtils.escapeHtml4(form.getPostalCode()));
 
		contactUsData.setTitle(StringEscapeUtils.escapeHtml4(form.getTitle()));

		contactUsData.setOptIn(form.isOptIn());
		

		LOG.info(" Finished Setting ContactUsData ");
		
		response = bhgeContactUsFacade.postContactUsData(contactUsData);
		return getDataMapper().map(contactUsData, ContactUsDataWsDTO.class, "FULL");
	}
}
