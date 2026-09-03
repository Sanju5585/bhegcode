package com.bhge.integration.oauth.login.converter;

import com.bhge.integration.oauth.login.impl.BHGEOAuthLoginServiceImpl;
import com.sap.cx.commerce.platform.oauth2.authorizationserver.custom.CustomAuthenticationConverter;
import com.sap.cx.commerce.platform.oauth2.authorizationserver.custom.CustomUserAuthenticationToken;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.log4j.Logger;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2ErrorCodes;
import org.springframework.security.oauth2.core.endpoint.OAuth2ParameterNames;
import org.springframework.security.oauth2.server.authorization.authentication.OAuth2ClientAuthenticationToken;

public class DSUserAuthenticationConverter implements CustomAuthenticationConverter
{
    private static final AuthorizationGrantType DS_AUTHORIZATION_GRANT_TYPE = new AuthorizationGrantType("client_credentials");
    private final UserDetailsService userDetailsService;
    private final static Logger LOG = Logger.getLogger(DSUserAuthenticationConverter.class);

    public DSUserAuthenticationConverter(final UserDetailsService userDetailsService)
    {
        this.userDetailsService = userDetailsService;
    }

    @Override
    public CustomUserAuthenticationToken convert(final HttpServletRequest request)
    {
        final String grantType = request.getParameter(OAuth2ParameterNames.GRANT_TYPE);
        LOG.info("Grant Type received in request: {}" + grantType);
        /*if (!DS_AUTHORIZATION_GRANT_TYPE.getValue().equals(grantType))
        {
            return null;
        }*/
        final String userId = request.getParameter("userId");
         LOG.info("UserId received in request: {}" + userId);
        final OAuth2ClientAuthenticationToken oAuth2ClientAuthenticationToken = (OAuth2ClientAuthenticationToken) SecurityContextHolder.getContext()
                .getAuthentication();
        final UserDetails loadedUser = userDetailsService.loadUserByUsername(userId);

        final Authentication userAuth = new UsernamePasswordAuthenticationToken(userId, null, loadedUser.getAuthorities());

        if (userAuth.isAuthenticated())
        {
            LOG.info("User authenticated successfully for userId: {}"+ userId);
            return new CustomUserAuthenticationToken(userAuth, oAuth2ClientAuthenticationToken, DS_AUTHORIZATION_GRANT_TYPE);
        }
        else
        {
            LOG.info("User authentication failed for userId:" + userId);
            throw new OAuth2AuthenticationException(OAuth2ErrorCodes.INVALID_REQUEST);
        }
    }

    private boolean someCondition()
    {
        return true;
    }

}

