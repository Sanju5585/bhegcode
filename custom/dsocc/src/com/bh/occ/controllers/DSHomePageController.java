package com.bh.occ.controllers;


import com.bhge.register.webservices.dao.RegisterUserDao;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.facades.BhgeRegisterFacade;
import com.bhgeregister.dto.BHGERegisterResponse;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;

@Controller
@ApiVersion("v2")
@CacheControl(directive = CacheControlDirective.NO_CACHE)
@Tag(name = "DS home")
@RequestMapping(value ={"/{baseSiteId}/dshome" })
public class DSHomePageController {
    private final static Logger LOG = Logger.getLogger(DSHomePageController.class);
    @Resource
    private BhgeRegisterFacade bhgeRegisterFacade;

    @Resource
    RegisterUserDao registerUserDao;

    @Resource
    private EmailService emailservice;

    @Operation(operationId = "reacivate", summary = "Reacivate account")
    @RequestMapping(value = {"/account/reactivate/load/{userName}"}, method = RequestMethod.GET)
    @ResponseBody
    public String activateEmailTrigger(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
                               @Parameter(description = "UserName", required = true) @PathVariable final String userName,
                               HttpServletRequest httpServletRequest)throws CMSItemNotFoundException, EmailException {
        LOG.info("Inside activateEmailTrigger - START - " + StringEscapeUtils.escapeHtml4(userName));
        final String tokenValue = bhgeRegisterFacade.loadReactivateAccount(StringEscapeUtils.escapeHtml4(userName));
        LOG.info("tokenValue = " + tokenValue);

        if (tokenValue != null && tokenValue.equals("NOCHANGE"))
        {
          return "NOCHANGE";
        }
        else
        {
            final GEEdgeCustomerModel user = registerUserDao.validateReactivateAccount(StringEscapeUtils.escapeHtml4(userName));
            if (user != null)
            {
                try
                {
                    emailservice.loadReactiveMail(user.getEmail(), user.getName(), tokenValue, StringEscapeUtils.escapeHtml4(userName),
                            true);
                }
                catch (final CMSItemNotFoundException e)
                {
                    LOG.error("CMSItemNotFoundException found while triggering resend verification email");
                }
                catch (final EmailException e)
                {
                    LOG.error("EmailException found while triggering resend verification email");
                }

            }
                return "ENABLED";
        }
    }

    @Operation(operationId = "validateActivation", summary = "Validate Activation")
    @RequestMapping(value = "/account/reactivate/validate/{userName}/{userToken}", method = RequestMethod.GET)
    @ResponseBody
    public String validateActivation(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
                                     @Parameter(description = "UserName", required = true) @PathVariable final String userName,
                                     @Parameter(description = "userToken", required = true) @PathVariable final String userToken) throws CMSItemNotFoundException, EmailException {
        LOG.info("Inside validateActivation START = " + userName);
        final BHGERegisterResponse validateResult = bhgeRegisterFacade.validateReactivateAccount(userName, userToken);
        LOG.info("Inside validateActivation = " + userName + " & Status = " + validateResult.getStatusCode());
        return validateResult.getStatusCode();
    }

}

