package com.bh.occ.security;

import de.hybris.platform.util.Config;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.security.oauth2.jose.jws.SignatureAlgorithm;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;

public class BHGEOktaJwtDecoder implements JwtDecoder
{
    private final NimbusJwtDecoder nimbusJwtDecoder;
    private final String issuer;

    public BHGEOktaJwtDecoder(final String issuer,
                              final String jwksUri)
    {
        this.issuer = issuer;

        this.nimbusJwtDecoder = NimbusJwtDecoder.withJwkSetUri(jwksUri).jwsAlgorithm(SignatureAlgorithm.RS256).build();
    }

    @Override
    public Jwt decode(final String token) throws JwtException
    {
        validateTokenType(token);

        Jwt jwt = nimbusJwtDecoder.decode(token);

        validateIssuer(jwt);

        return jwt;
    }

    private void validateTokenType(final String token)
    {
        try
        {
            final String[] parts = token.split("\\.");

            if (parts.length < 2)
            {
                throw new JwtException("Invalid JWT");
            }

            final String headerJson = new String(Base64.getUrlDecoder().decode(parts[0]), StandardCharsets.UTF_8);

            if (headerJson.contains("\"typ\":\"JWT\"")
                    || headerJson.contains("\"typ\":\"application/okta-internal-at+jwt\""))
            {
                return;
            }

            throw new JwtException("Unsupported token type");
        }
        catch (Exception e)
        {
            throw new JwtException("Unable to validate JWT type", e);
        }
    }

    private void validateIssuer(final Jwt jwt)
    {
        final String tokenIssuer = jwt.getIssuer() != null ? jwt.getIssuer().toString() : null;

        if (tokenIssuer == null)
        {
            throw new JwtException("Issuer missing");
        }

        if (!issuer.equals(tokenIssuer))
        {
            throw new JwtException("Invalid issuer. Expected: " + issuer + " Actual: " + tokenIssuer);
        }
    }
}
