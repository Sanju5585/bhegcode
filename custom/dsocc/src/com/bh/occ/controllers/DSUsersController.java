package com.bh.occ.controllers;

import com.bh.occ.dto.user.DSUserSignUpWsDTO;
import com.bh.occ.dto.user.UserDetailDTO;

import com.bh.occ.dto.user.UserRoleDTO;
import com.bh.occ.dto.user.UserRolesResponseDTO;
import com.bhge.facades.register.BHGERegisterUserFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.customergroups.CustomerGroupFacade;
import de.hybris.platform.commercewebservicescommons.annotation.SecurePortalUnauthenticatedAccess;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import de.hybris.platform.webservicescommons.util.YSanitizer;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Controller
@RequestMapping(value = "/{baseSiteId}/ds/users")
@CacheControl(directive = CacheControlDirective.PRIVATE)
@Tag(name = "DS Users")
public class DSUsersController {

    private static final Logger LOG = LoggerFactory.getLogger(DSUsersController.class);
    protected static final String DEFAULT_FIELD_SET = FieldSetLevelHelper.DEFAULT_LEVEL;
    public static final String RESPONSE = "User operation is successful";
    public static final String RESPONSE_FAILURE = "User creation/updation failed";

    public static final String DEACTIVATE_FAILURE = "User deactivation failed";
    @Resource(name = "wsCustomerFacade")
    private CustomerFacade customerFacade;
    @Resource(name = "wsCustomerGroupFacade")
    private CustomerGroupFacade customerGroupFacade;
    @Resource(name = "registerUserFacade")
    private BHGERegisterUserFacade bhgeRegisterUserFacade;
    @Resource(name = "bhgeUserProfileFacade")
    private BHGEUserProfileFacade bhgeUserProfileFacade;

    @SecurePortalUnauthenticatedAccess
    @Secured({"ROLE_CLIENT", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @RequestMapping(method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseStatus(value = HttpStatus.CREATED)
    @ResponseBody
    @Operation(operationId = "createInternalUser", summary = "Registers a customer", description
            = "Registers a customer. Requires the following parameters: login, password, firstName, lastName, titleCode.")
    @ApiBaseSiteIdParam
    public String createUser(
            @Parameter(description = "User's object.", required = true) @RequestBody final DSUserSignUpWsDTO user,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            final HttpServletRequest httpRequest, final HttpServletResponse httpResponse) {
        try {
            String sanitizedUid = sanitize(user.getUid());
            String sanitizedRole = sanitize(user.getRole());
            final GEEdgeCustomerModel bhgeCustomerModel = bhgeUserProfileFacade.findCurrentUserProfile(sanitizedUid);
            if (Objects.nonNull(bhgeCustomerModel) && StringUtils.isNotEmpty(sanitizedRole)) {
                bhgeRegisterUserFacade.assignAccessRoleToCustomer(bhgeCustomerModel, sanitizedRole);
            }
            return RESPONSE;
        } catch (UnknownIdentifierException ex) {
            final GEEdgeCustomerModel newCustomer = bhgeRegisterUserFacade.createCustomer(user);
            bhgeRegisterUserFacade.assignAccessRoleToCustomer(newCustomer, user.getRole());
            return RESPONSE;
        } catch (Exception e) {
            LOG.error("Error creating or updating user", e);
            return RESPONSE_FAILURE;
        }
    }

    @SecurePortalUnauthenticatedAccess
    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @RequestMapping(value = "/removeUser", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    @Operation(operationId = "removeUser", summary = "Deactivates the customer profile.")
    @ApiBaseSiteIdParam
    public ResponseEntity<String> removeUser(@Parameter(description = "Customer UID") @RequestParam(required = true) final String uid) {
        String sanitizedUid = sanitize(uid);
        String message = "";
        try {
            final GEEdgeCustomerModel customer = bhgeUserProfileFacade.findCurrentUserProfile(sanitizedUid);
            if (Objects.nonNull(customer)) {
                bhgeRegisterUserFacade.deactivateUser(customer);
            }
            message = "Successfully deactivated the user";
        } catch (UnknownIdentifierException ex) {
            LOG.error("UnknownIdentifierException", ex);
            message = "User does not exists";
        } catch (Exception e) {
            LOG.error("Error deactivating user", e);
            message = "Error in deactivating the user";
        }
        return new ResponseEntity<String>(message, HttpStatus.OK);

    }

//    @SecurePortalUnauthenticatedAccess
//    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
//    @RequestMapping(value = "/removeAllRoles", method = RequestMethod.DELETE)
//    @ResponseBody
//    @Operation(operationId = "removeAllRoles", summary = "Removes all user group roles from a user.")
//    @ApiBaseSiteIdParam
//    public ResponseEntity<String> removeAllRoles(
//            @Parameter(description = "Customer UID", required = true) @RequestParam final String uid) {
//        String sanitizedUid = sanitize(uid);
//        try {
//            GEEdgeCustomerModel customer = bhgeUserProfileFacade.findCurrentUserProfile(sanitizedUid);
//            if (customer != null) {
//                bhgeUserProfileFacade.removeAllRolesFromUser(customer);
//                return ResponseEntity.ok("Roles removed successfully");
//            } else {
//                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//            }
//        } catch (Exception e) {
//            LOG.error("Error removing roles", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error removing roles");
//        }
//    }
    @SecurePortalUnauthenticatedAccess
    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @RequestMapping(value = "/fetchDetails", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    @Operation(operationId = "getAllUserDetails", summary = "Fetches details of all users.")
    @ApiBaseSiteIdParam
    public ResponseEntity<List<UserDetailDTO>> getAllUserDetails() {
        try {
            List<UserDetailDTO> allUserDetails = bhgeUserProfileFacade.fetchAllUserDetails(); //Method to fetch all user details
            return ResponseEntity.ok(allUserDetails);
        } catch (Exception e) {
            LOG.error("Error fetching all user details", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @SecurePortalUnauthenticatedAccess
    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @RequestMapping(value = "/fetchRoles", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    @Operation(operationId = "fetchAllRoles", summary = "Fetches all User group Roles from the data base.")
    @ApiBaseSiteIdParam

    public ResponseEntity<UserRolesResponseDTO> fetchAllRoles() {
        try {
            List<String> userRoles = bhgeUserProfileFacade.getAllUserGroupRoles();
            List<UserRoleDTO> roleDTOList = new ArrayList<>();
            for (String role : userRoles) {
                UserRoleDTO roleDTO = new UserRoleDTO();
                roleDTO.setRole(role.trim());
                roleDTOList.add(roleDTO);
            }
            UserRolesResponseDTO responseDTO = new UserRolesResponseDTO();
            responseDTO.setUserRoles(roleDTOList);
            return new ResponseEntity<>(responseDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error("Error fetching user group roles", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @SecurePortalUnauthenticatedAccess
    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @RequestMapping(value = "/enableUser", method = RequestMethod.POST)
    @Operation(operationId = "enableUser", summary = "Enables the customer profile.")
    @ApiBaseSiteIdParam
    public ResponseEntity<String> enableUser(@Parameter(description = "Customer UID") @RequestParam(required = true) final String uid) {
        String sanitizedUid = sanitize(uid);
        String message = "";
        try {
            final GEEdgeCustomerModel customer = bhgeUserProfileFacade.findCurrentUserProfile(sanitizedUid);
            if (Objects.nonNull(customer)) {
                bhgeRegisterUserFacade.enableUser(customer);
                return ResponseEntity.ok("User has been enabled successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
            }
        } catch (UnknownIdentifierException ex) {
            LOG.error("UnknownIdentifierException", ex);
            message = "User does not exists";
        } catch (Exception e) {
            LOG.error("Error enabling user", e);
            message = "Error in enabling the user";
        }
        return new ResponseEntity<String>(message, HttpStatus.OK);

    }

    protected static String sanitize(final String input) {

        return YSanitizer.sanitize(input);

    }

}
