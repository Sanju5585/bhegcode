package com.bhge.facades.register.impl;

import com.bh.occ.dto.user.DSUserSignUpWsDTO;
import com.bhge.core.enums.UserCreationChannel;
import com.bhge.core.registeruser.service.BHGERegisterUserService;
import com.bhge.facades.register.BHGERegisterUserFacade;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.daos.UserGroupDao;
import de.hybris.platform.util.Config;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;

import jakarta.annotation.Resource;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

public class DefaultBHGERegisterUserFacade implements BHGERegisterUserFacade {

    @Resource
    private BHGERegisterUserService registerUserService;
    @Resource
    private UserGroupDao userGroupDao;
    @Resource
    private ModelService modelService;
    @Resource(name = "b2bCommerceUnitService")
    private B2BCommerceUnitService b2BCommerceUnitService;

    private static final Logger LOG = Logger.getLogger(DefaultBHGERegisterUserFacade.class);
    public static final String CUSTOMERGROUP = "b2bcustomergroup";
    public static final String B2BUNIT = Config.getString("dsocc.b2bUnit", "0000138305_1800_GE_GE");
    public static final String SOLDTOUNIT = Config.getString("dsocc.soldToUnit", "0000138305");

    /**
     * @return the registerUserService
     */
    public BHGERegisterUserService getRegisterUserService() {
        return registerUserService;
    }

    /**
     * @param registerUserService the registerUserService to set
     */
    public void setRegisterUserService(final BHGERegisterUserService registerUserService) {
        this.registerUserService = registerUserService;
    }


    /*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.register.BHGERegisterUserFacade#fetchSSOForEmail(java.lang.String)
     */
    @Override
    public ResponseEntity<BHGERegisterResponse> fetchSSOForEmail(final String emailAddress) {
        return getRegisterUserService().fetchSSOForEmail(emailAddress);

    }

    /*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.register.BHGERegisterUserFacade#validUsername(java.lang.String)
     */
    @Override
    public ResponseEntity<BHGERegisterResponse> validUsername(final String ssousername) {
        return getRegisterUserService().validUsername(ssousername);
    }

    /*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.register.BHGERegisterUserFacade#validUsernameFetch(java.lang.String, java.lang.String,
	 * java.lang.String, java.lang.String)
     */
    @Override
    public ResponseEntity<BHGERegisterResponse> validUsernameFetch(final String ssousername, final String lastName,
            final String firstName, final String emailAddress) {
        return getRegisterUserService().validUsernameFetch(ssousername, lastName, firstName, emailAddress);
    }

    /*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.facades.register.BHGERegisterUserFacade#submit(com.bhgeregister.dto.BHGERegisterRequest)
     */
    @Override
    public BHGERegisterResponse submit(final BHGERegisterRequest requestData) {
        return getRegisterUserService().submit(requestData);
    }

    @Override
    public void assignAccessRoleToCustomer(GEEdgeCustomerModel newCustomer, String role) {
        List<String> userActivationComments = new ArrayList<String>();
        userActivationComments.add("User is created and Activated from MyAccess");
        final Set<PrincipalGroupModel> userGroups = new HashSet<PrincipalGroupModel>();
        if (Objects.nonNull(newCustomer)) {
            /*Always add b2bcustomergroup*/
            UserGroupModel customerGroup = userGroupDao.findUserGroupByUid(CUSTOMERGROUP);
            if (customerGroup != null) {
                userGroups.add(customerGroup);
            }
            List<String> roles = new ArrayList<>();
            if ("UG_VIEW_STORE".equals(role)) {
                /*If the role is UG_VIEW_STORE, add both UG_VIEW_STORE and UG_RMA_AUTHORITY*/
                roles.add("UG_VIEW_STORE");
                roles.add("UG_RMA_AUTHORITY");
            } else {
                /* Otherwise, just add the provided role*/
                roles.add(role);
            }
            for (final String group : roles) {
                customerGroup = userGroupDao.findUserGroupByUid(group);
                if (customerGroup != null) {
                    userGroups.add(customerGroup);
                }
            }
            newCustomer.setGroups(userGroups);
            newCustomer.setCustomerActivationComments(userActivationComments);
            newCustomer.setActive(true);
            LOG.info("Setting UserCreationChannel for InternalUsers(MyAccess).");
            newCustomer.setUserCreationChannel(UserCreationChannel.MYACCESS);
            modelService.save(newCustomer);
        }
    }

    @Override
    public void deactivateUser(GEEdgeCustomerModel customer) {
        if (Objects.nonNull(customer)) {
            customer.setCustomerActivationComments(Collections.singletonList("User is deactivated from MyAccess"));
            customer.setActive(false);
            customer.setLoginDisabled(true);
            LOG.info("Setting UserCreationChannel for InternalUsers(MyAccess).");
            customer.setUserCreationChannel(UserCreationChannel.MYACCESS);
            modelService.save(customer);
        }
    }

    @Override
    public void enableUser(GEEdgeCustomerModel customer) {
        if (Objects.nonNull(customer)) {
            customer.setCustomerActivationComments(Collections.singletonList("User is enabled from MyAccess"));
            customer.setActive(true);
            customer.setLoginDisabled(false);
            LOG.info("Setting UserCreationChannel for InternalUsers(MyAccess).");
            customer.setUserCreationChannel(UserCreationChannel.MYACCESS);
            modelService.save(customer);
        }
    }

    public GEEdgeCustomerModel createCustomer(DSUserSignUpWsDTO user) {
        final GEEdgeCustomerModel newCustomer = modelService.create(GEEdgeCustomerModel.class);
        newCustomer.setUid(user.getUid());
        newCustomer.setCustomerID(user.getUid());
        newCustomer.setFirstName(user.getFirstName());
        newCustomer.setLastName(user.getLastName());
        String fullName = (user.getFirstName() + " " + user.getLastName());
        newCustomer.setName(fullName.trim());
        newCustomer.setEmail(user.getUid());
        newCustomer.setLoginDisabled(false);
        newCustomer.setIsInternalUser(true);
        newCustomer.setEncodedPassword("test");
        newCustomer.setPasswordEncoding("plain");
        B2BUnitModel b2bunitModel = b2BCommerceUnitService.getUnitForUid(B2BUNIT);
        newCustomer.setDefaultB2BUnit(b2bunitModel);
        B2BUnitModel soldToUnitModel = b2BCommerceUnitService.getUnitForUid(SOLDTOUNIT);
        newCustomer.setDefaultSoldTo(soldToUnitModel);
        LOG.info("Setting UserCreationChannel for InternalUsers(MyAccess).");
        newCustomer.setUserCreationChannel(UserCreationChannel.MYACCESS);
        modelService.save(newCustomer);
        modelService.refresh(newCustomer);
        return newCustomer;
    }
}
