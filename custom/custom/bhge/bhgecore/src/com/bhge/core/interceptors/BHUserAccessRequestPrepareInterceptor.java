package com.bhge.core.interceptors;

import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.register.webservices.enums.BHGEAccessRequestStatus;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.servicelayer.interceptor.InterceptorContext;
import de.hybris.platform.servicelayer.interceptor.InterceptorException;
import de.hybris.platform.servicelayer.interceptor.PrepareInterceptor;
import de.hybris.platform.util.Config;
import org.apache.log4j.Logger;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class BHUserAccessRequestPrepareInterceptor implements PrepareInterceptor<BHGEUserAccessRequestModel> {

    private static final Logger LOG = Logger.getLogger(BHUserAccessRequestPrepareInterceptor.class);
    private static final String ACCESS_PENDING_MAIL_TEMPLATE = "AccessPendingMailTemplate";

    private BHGEEmailService bhgeEmailService;

    public BHGEEmailService getBhgeEmailService() {
        return bhgeEmailService;
    }

    public void setBhgeEmailService(BHGEEmailService bhgeEmailService) {
        this.bhgeEmailService = bhgeEmailService;
    }

    @Override
    public void onPrepare(BHGEUserAccessRequestModel bhgeUserAccessRequestModel, InterceptorContext ctx) throws InterceptorException {
        if (ctx.isModified(bhgeUserAccessRequestModel, BHGEUserAccessRequestModel.REQUESTSTATUS)) {
            LOG.info("Inside BHUserAccessRequestPrepareInterceptor Start");
            try {
                handleAccessPendingRequests(bhgeUserAccessRequestModel, ctx);
                LOG.info("Inside BHUserAccessRequestPrepareInterceptor End");
            } catch (RuntimeException re) {
                LOG.error("Exception in BHUserAccessRequestPrepareInterceptor");
            }
        }
    }

    private void handleAccessPendingRequests(BHGEUserAccessRequestModel bhgeUserAccessRequestModel, InterceptorContext ctx) {
        if (bhgeUserAccessRequestModel.getRequestStatus().equals(BHGEAccessRequestStatus.APPROVED)) {
            LOG.info("Inside BHUserAccessRequestPrepareInterceptor - handleAccessPendingRequests Start");
            // Setting default values
            String REGISTERFAILURETEMPLATE = "registerFailureTemplate";
            List<String> attribName = Collections.emptyList();
            List<String> attribValue = Collections.emptyList();
            String userEmail = null;
            String subject = null;

            // For DSStore Start
            // Application ID "1" is for DSS
            if (null != bhgeUserAccessRequestModel.getApproverDetails()
                    && null != bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel()
                    && null != bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo()
                    && bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1) {

                userEmail = Config.getParameter("bhge.register.email.failure.technical"); // "TO" address (i.e recipient)
                subject = Config.getParameter("bhge.register.email.access.pending.subject"); // Subject
                REGISTERFAILURETEMPLATE = "registerFailureTemplate"; // Email vm Template

                BHGERegieterCustomerModel requesterId = bhgeUserAccessRequestModel.getRequesterId();
                if (null != requesterId) {
                    attribName = Arrays.asList("Email", "Last Name", "First Name", "User SSO", "Requester Id");
                    attribValue = Arrays.asList(requesterId.getEmail(), requesterId.getFamilyName(),
                            requesterId.getGivenName(), requesterId.getSso(), Long.toString(bhgeUserAccessRequestModel.getAccessRequestId()));
                }

                // Email sending functionality
                bhgeEmailService.accessPendingMail(REGISTERFAILURETEMPLATE, subject, userEmail, attribName, attribValue);
                LOG.info("Inside BHUserAccessRequestPrepareInterceptor - handleAccessPendingRequests for DS Store End");
            }
            // For DSStore End
            
            // For ValvStore Start
            // Application ID "4" is for VavlStore
            if (null != bhgeUserAccessRequestModel.getApproverDetails()
                    && null != bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel()
                    && null != bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo()
                    && bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 4) {

                userEmail = Config.getParameter("fpt.bhge.register.email.failure.technical"); // "TO" address (i.e recipient)
                subject = Config.getParameter("fpt.bhge.register.email.access.pending.subject"); // Subject
                REGISTERFAILURETEMPLATE = "registerFailureTemplate"; // Email vm Template

                BHGERegieterCustomerModel requesterId = bhgeUserAccessRequestModel.getRequesterId();
                if (null != requesterId) {
                    attribName = Arrays.asList("Email", "Last Name", "First Name", "User SSO", "Requester Id");
                    attribValue = Arrays.asList(requesterId.getEmail(), requesterId.getFamilyName(),
                            requesterId.getGivenName(), requesterId.getSso(), Long.toString(bhgeUserAccessRequestModel.getAccessRequestId()));
                }

                // Email sending functionality
                bhgeEmailService.accessPendingMail(REGISTERFAILURETEMPLATE, subject, userEmail, attribName, attribValue);
                LOG.info("Inside BHUserAccessRequestPrepareInterceptor - handleAccessPendingRequests for ValvStore End");
            }
            // For ValvStore End
            //OFS changes start
            if (null != bhgeUserAccessRequestModel.getApproverDetails()
                    && null != bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel()
                    && null != bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo()
                    && bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 5) {

                userEmail = Config.getParameter("bhge.ofs.register.email.failure.technical"); // "TO" address (i.e recipient)
                subject = Config.getParameter("ofs.bhge.register.email.access.pending.subject"); // Subject
                REGISTERFAILURETEMPLATE = "registerFailureTemplate"; // Email vm Template

                BHGERegieterCustomerModel requesterId = bhgeUserAccessRequestModel.getRequesterId();
                if (null != requesterId) {
                    attribName = Arrays.asList("Email", "Last Name", "First Name", "User SSO", "Requester Id");
                    attribValue = Arrays.asList(requesterId.getEmail(), requesterId.getFamilyName(),
                            requesterId.getGivenName(), requesterId.getSso(), Long.toString(bhgeUserAccessRequestModel.getAccessRequestId()));
                }

                // Email sending functionality
                bhgeEmailService.accessPendingMail(REGISTERFAILURETEMPLATE, subject, userEmail, attribName, attribValue);
                LOG.info("Inside BHUserAccessRequestPrepareInterceptor - handleAccessPendingRequests for Shop Baker Hughes End");
            }
            //OFS changes End
        }
    }
}
