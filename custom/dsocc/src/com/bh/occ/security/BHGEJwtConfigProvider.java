package com.bh.occ.security;

import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.jwk.source.RemoteJWKSet;
import com.nimbusds.jose.proc.BadJOSEException;
import com.nimbusds.jose.proc.JWSKeySelector;
import com.nimbusds.jose.proc.JWSVerificationKeySelector;
import com.nimbusds.jose.proc.SecurityContext;
import com.nimbusds.jose.util.DefaultResourceRetriever;
import com.nimbusds.jwt.proc.DefaultJWTProcessor;
import com.nimbusds.jwt.proc.JWTProcessor;
import com.sap.cx.commerce.platform.oauth2.resourceserver.config.impl.DefaultJwtConfigProvider;
import com.sap.cx.commerce.platform.oauth2.resourceserver.revocation.RevokedAccessTokensStore;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.spring.security.CoreUserDetailsService;
import de.hybris.platform.util.Config;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtTimestampValidator;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class BHGEJwtConfigProvider extends DefaultJwtConfigProvider {
    private final static Logger LOG = Logger.getLogger(BHGEJwtConfigProvider.class);
    private final UserDetailsService userDetailsService;
   @Autowired
   private  ModelService modelService;
    @Autowired
    private  FlexibleSearchService flexibleSearchService;



    public BHGEJwtConfigProvider(RevokedAccessTokensStore revokedAccessTokensStore,
                                 CoreUserDetailsService userDetailsService,
                                 JWKSource<SecurityContext> jwkSource) {
        super(revokedAccessTokensStore, userDetailsService, jwkSource);
        this.userDetailsService = userDetailsService;
        LOG.info("BHGEJwtConfigProvider initialized with RevokedAccessTokensStore, CoreUserDetailsService, and JWKSource");
    }

    @Override
    public JWTProcessor<SecurityContext> createJwtProcessor() {
        LOG.info("Creating custom JWTProcessor with JWKSource and RevokedAccessTokensStore");
        DefaultJWTProcessor<SecurityContext> jwtProcessor = (DefaultJWTProcessor<SecurityContext>)  super.createJwtProcessor();
        jwtProcessor.setJWSTypeVerifier((header,context) -> {
            String typ = header.getType()!=null?header.getType().toString():null;
            if(typ==null || "JWT".equalsIgnoreCase(typ) || "application/okta-internal-at+jwt".equalsIgnoreCase(typ)){
                return;
            }
            throw  new BadJOSEException("Unsupported token type: "+typ);
        });
        // Replace claims verifier to skip Commerce revocation check
        LOG.info("Replacing claims verifier to skip Commerce revocation check");
        jwtProcessor.setJWTClaimsSetVerifier((claimsSet, context) -> {
            LOG.info("Verifying JWT claims set: " + claimsSet.toJSONObject());
            // Okta tokens are validated by JWKS signature only
        });
        LOG.info("BHGEJwtConfigProvider type succesful");
        String jwksUri= Config.getParameter("okta.jwks.uri");
        LOG.info("BHGEJwtConfigProvider jwksUri"+jwksUri);
        RemoteJWKSet<SecurityContext> jwkSource = null;
        try {
            jwkSource = new RemoteJWKSet<>(new URL(jwksUri),new DefaultResourceRetriever(5000,5000));
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
        JWSKeySelector<SecurityContext> jwsKeySelector = new JWSVerificationKeySelector<>(JWSAlgorithm.RS256,jwkSource);
        jwtProcessor.setJWSKeySelector(jwsKeySelector);
        return jwtProcessor;
    }
    @Override
    public Collection<OAuth2TokenValidator<Jwt>> getOAuth2TokenValidators() {
        LOG.info("Creating custom OAuth2TokenValidators with JwtTimestampValidator");
        List<OAuth2TokenValidator<Jwt>> validators = new ArrayList();
        validators.add(new JwtTimestampValidator());
       //validators.add(new JWTRevocationTokenValidator(this.revokedAccessTokensStore));
        return validators;
    }
@Override
public Collection<Converter<Jwt, Collection<GrantedAuthority>>> getGrantedAuthorityConverters() {
    return List.of(this.scopeJwtAuthenticationConverter(), this.rolesJwtAuthenticationConverter(), this.dbRolesAuthenticationConverter(this.userDetailsService));
}
    private JwtGrantedAuthoritiesConverter scopeJwtAuthenticationConverter() {
        LOG.info("Creating JwtGrantedAuthoritiesConverter for scopeJwtAuthenticationConverter");
        return new JwtGrantedAuthoritiesConverter();
    }

    private JwtGrantedAuthoritiesConverter rolesJwtAuthenticationConverter() {
        JwtGrantedAuthoritiesConverter clientRoles = new JwtGrantedAuthoritiesConverter();
        LOG.info("Setting authority prefix and authorities claim name for rolesJwtAuthenticationConverter");
        clientRoles.setAuthorityPrefix("");
        clientRoles.setAuthoritiesClaimName("roles");
        return clientRoles;
    }
    private Converter<Jwt, Collection<GrantedAuthority>> dbRolesAuthenticationConverter(final UserDetailsService userDetailsService) {
        LOG.info("Creating custom BHGEJwtDBRolesAuthenticationConverter with UserDetailsService");
        return new BHGEJwtDBRolesAuthenticationConverter(userDetailsService, modelService, flexibleSearchService);
    }

}