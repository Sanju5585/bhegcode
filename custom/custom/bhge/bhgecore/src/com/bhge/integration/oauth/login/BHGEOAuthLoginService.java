package com.bhge.integration.oauth.login;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;

import org.springframework.security.core.Authentication;


import com.bhge.core.util.AccessToken;

public interface BHGEOAuthLoginService {

    /**
     * Method to generate authorization code
     */
    //void generateAuthorizationCode();
    
    //void generateAuthorizationCode(final HttpSession session);

    /**
     * Method to generate access token
     *
     * @param authorizationCode
     * @param state
     * @param preservedState
     * @return
     */
    //OAuth2AccessToken generateAccessToken(String authorizationCode, String state, Object preservedState);
    AccessToken generateAccessToken(String authorizationCode, String state, Object preservedState, final HttpServletRequest request);

    /**
     * Method to make rest call to get User Info and returns customer id
     *
     * @param token
     * @return
     */
    //String getUserInfo(OAuth2AccessToken token);
    //String getUserInfo(AccessToken token);
    ResponseEntity<String> getUserInfo(AccessToken token);
    
    String generateSSOURL(String requestURI);

    AccessToken getOAuthAccessToken(final Authentication auth, AccessToken responseEntity);

    /**
     * Method to remove the token for logout
     */
    //public Boolean revoke(final String tokenString);

}


