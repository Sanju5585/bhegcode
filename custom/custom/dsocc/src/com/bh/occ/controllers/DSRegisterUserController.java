package com.bh.occ.controllers;

import com.bhge.facades.contactus.BHGEContactUsFacade;
import com.bhge.facades.register.BHGERegisterUserFacade;
import com.bhge.register.webservices.dao.RegisterUserDao;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.facades.BHGEManualApprovalFacade;
import com.bhge.register.webservices.facades.BhgeRegisterFacade;
import com.bhge.register.webservices.facades.impl.DefaultDSUserRegisterFacade;
import com.bhge.util.exception.BhgeUtilException;
import com.bhge.util.service.BhgecommonutilsService;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.ds.dsocc.data.BHGERegisterRequestWsDTO;
import com.ds.dsocc.data.UserRegisterWsDTO;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.i18n.I18NFacade;
import de.hybris.platform.commercefacades.storesession.StoreSessionFacade;
import de.hybris.platform.commercefacades.user.UserFacade;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.webservicescommons.util.YSanitizer;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.io.IOException;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import java.util.ArrayList;

import java.util.List;

@RestController
@Tag(name = "Register User")
@RequestMapping(value = "/{baseSiteId}/{productLine}/registerUser")
public class DSRegisterUserController extends DSBaseController {
    private static final Logger LOG = Logger.getLogger(DSRegisterUserController.class);
    @Resource
    private BHGEManualApprovalFacade bhgeManualApprovalFacade;

    @Resource
    BHGERegisterUserFacade registerUserFacade;
    @Resource
    RegisterUserDao registerUserDao;
    @Resource(name = "userService")
    private UserService userService;

    @Resource
    private BhgecommonutilsService commonUtilsService;

    @Resource(name = "storeSessionFacade")
    private StoreSessionFacade storeSessionFacade;

    @Resource(name = "userFacade")
    private UserFacade userFacade;

    @Autowired
    RestTemplate restTemplate;

    @Resource(name = "bhgeContactUsFacade")
    private BHGEContactUsFacade bhgeContactUsFacade;

    @Resource(name = "defaultDSUserRegisterFacade")
    private DefaultDSUserRegisterFacade defaultDSUserRegisterFacade;

    @Resource(name = "i18NFacade")
    private I18NFacade i18NFacade;

    @Resource(name = "commonI18NService")
    private CommonI18NService commonI18NService;

    @Autowired
    private BhgeRegisterFacade bhgeRegisterFacade;

    private static final String register = "bhgeRegisterUser";

    private static final String ACTIVATE_LOADER_PAGE = "loadRegisterActivatepage";
    private static final String USERCHECK = "CustomerEmail";
    private static final String ACTIVATE_VALIDATOR_PAGE = "validateRegisterActivatepage";
    private static final String EMAIL_RESEND = "emailResendpage";

    private static final String userManager = "bhgeUserManager";
    private static final String userManagerDetails = "bhgeUserManagerDetails";
    private static final String manualworkflowpage = "Manualworkflowhomepage";
    private static final String manualworkflowpagedetails = "Manualworkflowdetailpage";
    private static final String registerProgressPage = "registerProgressPage";
    private static final String registerErrorPage = "registerErrorPage";
    private static final String ALLOW = "1";
    private static final String NOTALLOW = "0";
    private static final String FORM_GLOBAL_ERROR = "form.global.error";
    private static final String REGIONS_ATTR = "regions";
    protected I18NFacade getI18NFacade()
    {
        return i18NFacade;
    }
    @Resource
    private EmailService emailservice;

    public EmailService getEmailservice()
    {
        return emailservice;
    }
    public void setEmailservice(final EmailService emailservice)
    {
        this.emailservice = emailservice;
    }

    @RequestMapping(value = "/details", method = RequestMethod.GET)
    @ResponseBody
    @ApiBaseSiteIdParam
    @Operation(operationId = "getDetails", summary = "Get user register page details.", description = "Returns details of user register page.")
    public UserRegisterWsDTO getDetails(
            @Parameter(description = "Product Line", required = true) @PathVariable final String productLine
    )
    {
        BHGERegisterResponse bhgeRegisterResponse;
        bhgeRegisterResponse = defaultDSUserRegisterFacade.getDetails(productLine);
        UserRegisterWsDTO userRegisterWsDTO = getDataMapper().map(bhgeRegisterResponse, UserRegisterWsDTO.class, "FULL");
        return userRegisterWsDTO;
    }

    @RequestMapping(value = "/fetchSSOForEmail", method = RequestMethod.GET)
    @ResponseBody
    @ApiBaseSiteIdParam
    @Operation(operationId = "fetchSSOForEmail", summary = "Get SSO for email ID.", description = "Returns details of SSO for email ID.")
    public UserRegisterWsDTO fetchSSOForEmail(@RequestParam(value = "email") final String email,
                                              @RequestParam(value = "fname", required = false) final String fname,
                                              @RequestParam(value = "lname", required = false) final String lname,
                                              @Parameter(description = "Product Line", required = true) @PathVariable final String productLine
    )
    {
        final String sanitizedEmail = YSanitizer.sanitize(email);
        LOG.info("Inside fetchSSOForEmail: START - " + sanitizedEmail + " in dsocc 136");
        final BHGERegisterRequest serviceRequest = new BHGERegisterRequest();
        serviceRequest.setUserId(sanitizedEmail);
        serviceRequest.setEmail(sanitizedEmail);
        serviceRequest.setProductLine(YSanitizer.sanitize(productLine));
        LOG.info("ProductLine is 142: "+ productLine);
        //commenting the code as we are checking this in service class
        //response = defaultDSUserRegisterFacade.fetchSSOForEmail(serviceRequest);

        //Validating the sso username
        LOG.info("Setting statusCode 146 and userMessageList in registerResponse");
        BHGERegisterResponse response = defaultDSUserRegisterFacade.checkSSOAvailability(serviceRequest);
        LOG.info("Response received from Okta and Backoffice: StatusCode - "+response.getStatusCode() + " userMessageList - "+ response.getUserMessageList());
        try {
            if (response.getStatusCode().equalsIgnoreCase("NO")) {
                emailservice.userCheckMail(USERCHECK, sanitizedEmail, "DSS", YSanitizer.sanitize(fname), response.getUserMessageList(), YSanitizer.sanitize(lname));
                LOG.info("US499687 Status Check: "+response.getStatusCode());
            }
        }
        catch(Exception e){
            LOG.error(e.getMessage());
            return null;
        }
        UserRegisterWsDTO userRegisterWsDTO = getDataMapper().map(response, UserRegisterWsDTO.class, "FULL");
        return userRegisterWsDTO;
    }

    @RequestMapping(value = "/SAPCustomerNumberValidation", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE })
    @ResponseBody
    @ApiBaseSiteIdParam
    @Operation(operationId = "customerNumberValidation", summary = "Validate customer number.", description = "Validate customer number.")
    public UserRegisterWsDTO customerNumberValidation(
            @Parameter(description = "Request body parameter that contains details such as the user details during registration.\n\nThe DTO is in XML or .json format.", required = true) @RequestBody final BHGERegisterRequestWsDTO requestData,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
    {
        BHGERegisterResponse registerResponse;
        final BHGERegisterRequest creatingRequest = creatingRequest(requestData);
        registerResponse = defaultDSUserRegisterFacade.customerNumberValidation(creatingRequest);
        UserRegisterWsDTO userRegisterWsDTO = getDataMapper().map(registerResponse, UserRegisterWsDTO.class, "FULL");
        return userRegisterWsDTO;
    }

    @RequestMapping(value = "/processRequest", method = RequestMethod.POST)
    @ApiBaseSiteIdParam
    public @ResponseBody BHGERegisterResponse validSubmit(
            @Parameter(description = "Request body parameter that contains details such as the user details during registration.\n\nThe DTO is in XML or .json format.", required = true) @RequestBody final BHGERegisterRequestWsDTO form,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields
            ,HttpServletRequest request, HttpSession session,
            @Parameter(description = "Product Line", required = true) @PathVariable final String productLine,
            @RequestParam(value = "lang", required = false) final String language) throws BhgeUtilException
    {
        LOG.info("Inside validSubmit: START - " + form.getFirstName());
        BHGERegisterResponse registerResponse = new BHGERegisterResponse();

        if(StringUtils.isNotEmpty(language)) {
            commonI18NService.setCurrentLanguage(commonI18NService.getLanguage(language));
        }

        final List<String> userMessageList = new ArrayList<>();
        String password=form.getUserPswd();
        //Register User Email and SSo validation
        boolean internalEmail = false;
        if (StringUtils.isNotEmpty(form.getEmailId()))
        {
            final String[] email = YSanitizer.sanitize(form.getEmailId()).split("@");
            if (email[1].equalsIgnoreCase("bhge.com") || email[1].equalsIgnoreCase("bakerhughes.com"))
            {
                internalEmail = true;
            }
        }

        final BHGERegisterRequest serviceRequest = new BHGERegisterRequest();
        BHGERegisterResponse ssoAvailability = new BHGERegisterResponse();
        try
        {
            if (StringUtils.isNotEmpty(form.getUserName()))
            {
                serviceRequest.setEmail(form.getEmailId());
                serviceRequest.setUserId(YSanitizer.sanitize(form.getUserName()));
                serviceRequest.setProductLine(YSanitizer.sanitize(productLine));
                ssoAvailability = defaultDSUserRegisterFacade.checkSSOAvailability(serviceRequest);
                if (ssoAvailability.getUserMessageList().size() > 0){
                    form.setFormFlag("false");
                }
            }
        }
        catch (final Exception e)
        {
            LOG.error("exception " + e);
        }

        if (internalEmail || (ssoAvailability != null && Boolean.valueOf(form.getFormFlag())
                && StringUtils.isNotEmpty(ssoAvailability.getStatusCode()) && ssoAvailability.getStatusCode().equalsIgnoreCase("NO"))
                || StringUtils.isEmpty(form.getUserName()))
        {
            if (internalEmail)
            {
                LOG.info("Internal User  - " + internalEmail);
                registerResponse.setErrorMessage("GE employees and contractors must register at oneidm.ge.com (oneidm.ge.com).");
            }
            else
            {
                LOG.info("SSO name availability - " + ssoAvailability.getStatusCode());
                registerResponse.setErrorMessage("There is an existing record with the same SSO number");
            }
        }
        //Register User Email and SSo validation end
        else
        {
            validatePassword(password,registerResponse,form);
            if(null!=registerResponse.getErrorMessage()){
                return registerResponse;
            }
            //final String captcha = StringEscapeUtils.escapeHtml4(form.getGoogleCaptcha());
            //if (StringUtils.equals(Config.getParameter("current.env"), "dev") || commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha))
            //{
                //LOG.info("Under Google Captcha - " + form.getUserName() + " | " + form.getFormFlag());
                final BHGERegisterRequest requestData = creatingRequest(form);
                registerResponse = defaultDSUserRegisterFacade.submitDetails(requestData);
            //}

            //else
            //{
                //LOG.info("Under Captcha Failure - " + form.getUserName());
                //userMessageList.add("Invalid Captcha");
                //registerResponse.setUserMessageList(userMessageList);
            //}
        }

        LOG.info("Error message in validSubmit method DSRegisterUserController- "+registerResponse.getErrorMessage());
        LOG.info("Inside validSubmit: CLOSE - " + form.getUserName());
        return registerResponse;
    }
private String sanitizeName(String input){
    if (input == null){
        return StringUtils.EMPTY;
    }
    String regex = "^[\\p{L} \\-']+$";
    if (input.matches(regex)){
        return input;
    }else{
        return input.replaceAll("^[\\p{L} \\-']","");
    }
}
    private BHGERegisterRequest creatingRequest(BHGERegisterRequestWsDTO form)
    {
        final BHGERegisterRequest serviceRequest = new BHGERegisterRequest();
        final List<String> appList = new ArrayList<String>();
        final String DSS = Config.getParameter("register.appName.DSS");
        serviceRequest.setUserId(YSanitizer.sanitize(form.getUserName()));
        serviceRequest.setLastName(sanitizeName(form.getLastName()));
        serviceRequest.setFirstName(sanitizeName(form.getFirstName()));
        serviceRequest.setEmail(YSanitizer.sanitize(form.getEmailId()));
        serviceRequest.setUserSecret(YSanitizer.sanitize(form.getUserPswd()));
        serviceRequest.setCustomerNumber(null != form.getCustomerNumber()
                ? (("0000000000" + form.getCustomerNumber()).substring(form.getCustomerNumber().length())) : null);
        serviceRequest.setCompanyAddressLine1(YSanitizer.sanitize(form.getCompanyAddressLine1()));
        serviceRequest.setCompanyAddressLine2(YSanitizer.sanitize(form.getCompanyAddressLine2()));
        serviceRequest.setStateProvince(YSanitizer.sanitize(form.getStateProvince()));
        serviceRequest.setTown(YSanitizer.sanitize(form.getTown()));
        serviceRequest.setPostalCode(YSanitizer.sanitize(form.getPostalCode()));
        serviceRequest.setCompanyName(YSanitizer.sanitize(form.getCompanyName()));
        serviceRequest.setCountry(YSanitizer.sanitize(form.getCountry()));
        serviceRequest.setProductLine(YSanitizer.sanitize(form.getProductLine()));
        if(form.getProductLine().toLowerCase().contains("waygate")){
            serviceRequest.setEndCustomer(form.getEndCustomer());
            serviceRequest.setGovernmentEntity(form.getGovernmentEntity());
            serviceRequest.setDetailNumber(YSanitizer.sanitize(form.getDetailNumber()));
            serviceRequest.setDetailNumberValue(YSanitizer.sanitize(form.getDetailNumberValue()));
            serviceRequest.setAddressType(YSanitizer.sanitize(form.getAddressType()));
            serviceRequest.setAddressProof(YSanitizer.sanitize(form.getAddressProof()));
            serviceRequest.setOwnershipStructure(YSanitizer.sanitize(form.getOwnershipStructure()));

        }

        final List<String> subProductLineList = new ArrayList<String>();
        for (String item : form.getSubProductLine()) {
            subProductLineList.add(item.toLowerCase());
        }
        serviceRequest.setSubProductLine(subProductLineList);

        final List<String> dsMarketList = new ArrayList<String>();
        for (String item : form.getDsMarket()) {
            dsMarketList.add(YSanitizer.sanitize(item).toLowerCase());
        }
        serviceRequest.setDsMarket(dsMarketList);

        final List<String> dsOrgTypesList = new ArrayList<String>();
        for (String item : form.getOrgTypes()) {
            dsOrgTypesList.add(YSanitizer.sanitize(item).toLowerCase());
        }
        serviceRequest.setDsAccountType(dsOrgTypesList);

        serviceRequest.setDsRole(YSanitizer.sanitize(form.getDsRoles()));
        appList.add(DSS);
        serviceRequest.setAppList(appList);
        serviceRequest.setFormFlag(form.getFormFlag());
        return serviceRequest;
    }

    @ResponseBody
    @ResponseStatus(code = HttpStatus.CREATED)
    @PostMapping (value = "/uploadKYCAttachment", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(operationId = "uploadKYCAttachment", summary = "Upload KYC Attachment", description = "Upload KYC Attachment")
    @ApiBaseSiteIdAndUserIdParam
    public ResponseEntity<String> uploadKYCAttachment(@Parameter @RequestPart(value = "file") MultipartFile file) throws IOException {
        LOG.info("==================Upload KYC Attachment==================");
        try {
            if (file != null) {
                MediaModel attachment=defaultDSUserRegisterFacade.saveKYCAttachment(file);
                LOG.info("Uploaded Contact Us attachment for checkout successfully");
                return new ResponseEntity<>(attachment.getCode(), HttpStatus.OK);
            }
            else{
                LOG.error("File doesn't Exist");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (final Exception ex) {
            LOG.error("Error in uploading the KYC attachment" + ex);
            return new ResponseEntity<>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ResponseBody
    @ResponseStatus(code = HttpStatus.CREATED)
    @PostMapping (value = "/uploadOSAttachment", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(operationId = "uploadOSAttachment", summary = "Upload KYC Attachment", description = "Upload Ownership Structure Attachment")
    @ApiBaseSiteIdAndUserIdParam
    public ResponseEntity<String> uploadOSAttachment(@Parameter @RequestPart(value = "file") MultipartFile file) throws IOException {
        LOG.info("==================Upload OS Attachment==================");
        try {
            if (file != null) {
                MediaModel attachment=defaultDSUserRegisterFacade.saveOSAttachment(file);
                LOG.info("Uploaded Contact Us attachment for checkout successfully");
                return new ResponseEntity<>(attachment.getCode(), HttpStatus.OK);
            }
            else{
                LOG.error("File doesn't Exist");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (final Exception ex) {
            LOG.error("Error in uploading the OS attachment" + ex);
            return new ResponseEntity<>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private void validatePassword(String password,BHGERegisterResponse registerResponse,BHGERegisterRequestWsDTO form)
    {
        // Password backend validation starts
        if(StringUtils.isNotEmpty(password)){
            String upperCaseChars = "(.*[A-Z].*)";
            String lowerCaseChars  = "(.*[a-z].*)";
            String numbers  = "(.*[0-9].*)";
            String userName="[-@._]";

            LOG.info("Inside Password check method");

            if (StringUtils.isEmpty(password))
            {
                registerResponse.setErrorMessage("register.pwd.invalid");
            }
            else if (StringUtils.length(password) < 8 || StringUtils.length(password) > 255)
            {
                registerResponse.setErrorMessage("password must have atleast 8 char");
            }
            else if(!password.matches(upperCaseChars))
            {
                registerResponse.setErrorMessage("Password must have atleast one uppercase character");
            }
            else if(!password.matches(lowerCaseChars))
            {
                registerResponse.setErrorMessage("Password must have atleast one lowercase character");
            }
            else if(!password.matches(numbers))
            {
                registerResponse.setErrorMessage("Password must have atleast one number");
            }
            else if(password.toLowerCase().contains(form.getFirstName().toLowerCase()))
            {
                registerResponse.setErrorMessage("Password must not have your firstname");
            }
            else if(password.toLowerCase().contains(form.getLastName().toLowerCase()))
            {
                registerResponse.setErrorMessage("Password must not have your lastname");
            }
            else if(form.getUserName() != null)
            {
                String[] userNameArr=form.getUserName().split(userName);
                for(String sso:userNameArr)
                {
                    if(sso !=null)
                    {
                        if(password.toLowerCase().contains(sso.toLowerCase()))
                        {
                            registerResponse.setErrorMessage("Password must not part of your username");
                        }
                    }

                }
            }
        }
        // Password backend validation ends
    }

    @PostMapping(value = "/emailConfirmation/{emailId}")
    @Operation(operationId = "emailConfirmation", summary = "Email Confirmation", description = "Email Confirmation")
    @ApiBaseSiteIdParam
    public UserRegisterWsDTO validateActivation(
            @PathVariable String emailId,
            @RequestParam String token) throws CMSItemNotFoundException, EmailException {

        LOG.info("Inside validateActivation: START - " + emailId);
        final BHGERegisterResponse validateResult = bhgeRegisterFacade.validateActivateAccount(emailId, token);
        return getDataMapper().map(validateResult, UserRegisterWsDTO.class, "FULL");
    }

    @PostMapping(value = "/cancelRequest/{emailId}")
    @Operation(operationId = "cancelRequest", summary = "Cancel Request", description = "Cancel Request")
    @ApiBaseSiteIdParam
    public UserRegisterWsDTO cancelRequest(
            @PathVariable String emailId,
            @RequestParam String token) throws CMSItemNotFoundException, EmailException {

        LOG.info("Inside cancelRequest: START - " + emailId);
        final BHGERegisterResponse validateResult = bhgeRegisterFacade.cancelRequest(emailId, token);
        return getDataMapper().map(validateResult, UserRegisterWsDTO.class, "FULL");
    }

    @PostMapping(value = "/{productcategory}/resendEmail/{emailId}")
    @Operation(operationId = "resendEmail", summary = "Resend Email", description = "Resend Email")
    @ApiBaseSiteIdParam
    public void resendEmail(
            @PathVariable ("emailId") String emailId,
            @PathVariable ("productcategory") String productcategory) throws CMSItemNotFoundException, EmailException {

        LOG.info("Inside resendEmail: START - " + emailId);
        final String tokenValue = bhgeRegisterFacade.loadActivateAccount(StringEscapeUtils.escapeHtml4(emailId));
        if (!StringUtils.equalsIgnoreCase(tokenValue, "ACTIVE")) {
            final BHGERegieterCustomerModel user = (BHGERegieterCustomerModel) registerUserDao
                    .getUserBySSO(StringEscapeUtils.escapeHtml4(emailId));
            if (null != user) {
                final String store = Config.getParameter("register.appList.mncStore");

                try
                {
                    getEmailservice().userVerifyMail(user.getEmail(), user.getGivenName(), tokenValue,
                            StringEscapeUtils.escapeHtml4(emailId), store, productcategory);
                }
                catch (final EmailException e)
                {
                    LOG.error("EmailException found while triggering resend verification email");
                }
                LOG.info("Inside resendEmailController - SUCCESS" + StringEscapeUtils.escapeHtml4(emailId));
            }
        }
    }
}
