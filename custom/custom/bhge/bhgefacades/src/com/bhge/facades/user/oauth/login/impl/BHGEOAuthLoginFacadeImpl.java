package com.bhge.facades.user.oauth.login.impl;

import com.bhge.core.util.AccessToken;
import com.bhge.facades.user.oauth.login.BHGEOAuthLoginFacade;
import com.bhge.integration.oauth.login.BHGEOAuthLoginService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;

import java.io.IOException;

import jakarta.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.oauth2.common.OAuth2AccessToken;

public class BHGEOAuthLoginFacadeImpl implements BHGEOAuthLoginFacade {

	 private final static Logger LOG = Logger.getLogger(BHGEOAuthLoginFacadeImpl.class);
    private BHGEOAuthLoginService bhgeOAuthLoginService;
    private SessionService sessionService;
    private UserService userService;

    public String getUserInfoFromAuthCode_legacy(String authorizationCode, String state, Object preservedState,
                                          HttpServletRequest request) {
        AccessToken accessToken=bhgeOAuthLoginService.generateAccessToken(authorizationCode,state,preservedState,request);
        if(null!=accessToken) {
            //String userId = bhgeOAuthLoginService.getUserInfo(accessToken);
            String userId = null;
            String firstname = null;
            String lastname = null;
            String mail = null;
            ResponseEntity<String> response = bhgeOAuthLoginService.getUserInfo(accessToken);
            try {
                ObjectMapper mapper = new ObjectMapper();
                JsonNode node = mapper.readTree(response.getBody());
                userId = node.path("sub").asText();
                firstname = node.path("firstname").asText();
                lastname = node.path("lastname").asText();
                mail = node.path("mail").asText();
                UserModel userModel=userService.getUserForUID(userId);
                if(userModel!=null && userModel instanceof GEEdgeCustomerModel)
                {
                    GEEdgeCustomerModel customerModel=(GEEdgeCustomerModel)userModel;
                    request.getSession().setAttribute("sessionSso",customerModel.getUid());
                    request.getSession().setAttribute("sessionFirstName",customerModel.getName());
                    request.getSession().setAttribute("sessionLastName",customerModel.getName());
                    request.getSession().setAttribute("sessionEmail",customerModel.getEmail());
                    /*
                     * sessionService.setAttribute("sessionSso",customerModel.getUid());
                     * sessionService.setAttribute("sessionFirstName",customerModel.getName());
                     * sessionService.setAttribute("sessionLastName",customerModel.getName());
                     * sessionService.setAttribute("sessionEmail",customerModel.getEmail());
                     */
                }
                else
                {
                    request.getSession().setAttribute("sessionSso",userId);
                    request.getSession().setAttribute("sessionFirstName",firstname);
                    request.getSession().setAttribute("sessionLastName",lastname);
                    request.getSession().setAttribute("sessionEmail",mail);
                    //sessionService.setAttribute("sessionSso",userId);
                }
            }
            catch(Exception e)
            {
                LOG.info("User with Uid " + userId + " " + firstname + " " + lastname + " notFound in System");
                request.getSession().setAttribute("sessionSso",userId);
                request.getSession().setAttribute("sessionFirstName",firstname);
                request.getSession().setAttribute("sessionLastName",lastname);
                request.getSession().setAttribute("sessionEmail",mail);
            }
            return accessToken.getAccess_token();
        }
        else
        {
            return null;
        }
    }
   /* @Override
    public String getUserInfoFromAuthCode(String authorizationCode, String state, Object preservedState, 
   		 HttpServletRequest request) {
        AccessToken accessToken=bhgeOAuthLoginService.generateAccessToken(authorizationCode,state,preservedState,request);
        if(null!=accessToken) {
            //String userId = bhgeOAuthLoginService.getUserInfo(accessToken);
            String userId = null;
            String firstname = null;
            String lastname = null;
            String mail = null;
            ResponseEntity<String> response = bhgeOAuthLoginService.getUserInfo(accessToken);
            try {
                ObjectMapper mapper = new ObjectMapper();
                JsonNode node = mapper.readTree(response.getBody());
                userId = node.path("preferred_username").asText();
                firstname = node.path("given_name").asText();
                lastname = node.path("family_name").asText();
                mail = node.path("email").asText();
               UserModel userModel=userService.getUserForUID(userId);
               if(userModel!=null && userModel instanceof GEEdgeCustomerModel)
               {
               	GEEdgeCustomerModel customerModel=(GEEdgeCustomerModel)userModel;
               	request.getSession().setAttribute("sessionSso",customerModel.getUid());
               	request.getSession().setAttribute("sessionFirstName",customerModel.getName());
               	request.getSession().setAttribute("sessionLastName",customerModel.getName());
               	request.getSession().setAttribute("sessionEmail",customerModel.getEmail());
               }
               else
               {
               	request.getSession().setAttribute("sessionSso",userId);
            	request.getSession().setAttribute("sessionFirstName",firstname);
            	request.getSession().setAttribute("sessionLastName",lastname);
            	request.getSession().setAttribute("sessionEmail",mail);
               	//sessionService.setAttribute("sessionSso",userId);
               }
            }
            catch(Exception e)
            {
            	LOG.info("User with Uid " + userId + " " + firstname + " " + lastname + " notFound in System");
            	request.getSession().setAttribute("sessionSso",userId);
            	request.getSession().setAttribute("sessionFirstName",firstname);
            	request.getSession().setAttribute("sessionLastName",lastname);
            	request.getSession().setAttribute("sessionEmail",mail);
            }
            return accessToken.getAccess_token();
        }
        else
        {
      	  return null;
        }
    }*/


    public BHGEOAuthLoginService getBhgeOAuthLoginService() {
        return bhgeOAuthLoginService;
    }

    public void setBhgeOAuthLoginService(BHGEOAuthLoginService bhgeOAuthLoginService) {
        this.bhgeOAuthLoginService = bhgeOAuthLoginService;
    }

    public SessionService getSessionService() {
        return sessionService;
    }

    public void setSessionService(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }




}
