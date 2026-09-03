package com.bh.occ.security;

import com.sap.cx.commerce.platform.oauth2.resourceserver.util.JwtDBRolesAuthenticationConverter;
import de.hybris.bootstrap.util.LocaleHelper;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.jalo.JaloItemNotFoundException;
import de.hybris.platform.jalo.security.PrincipalGroup;
import de.hybris.platform.jalo.user.User;
import de.hybris.platform.servicelayer.exceptions.ModelNotFoundException;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.jwt.Jwt;
import wiremock.org.checkerframework.checker.units.qual.A;

import java.util.*;


public class BHGEJwtDBRolesAuthenticationConverter implements Converter<Jwt, Collection<GrantedAuthority>> {

    private static final Logger LOG = LoggerFactory.getLogger(BHGEJwtDBRolesAuthenticationConverter.class);
    private String rolePrefix = "ROLE_";

    private final UserDetailsService userDetailsService;
    private  final ModelService modelService;


   private final FlexibleSearchService flexibleSearchService;
    public BHGEJwtDBRolesAuthenticationConverter(UserDetailsService userDetailsService, ModelService modelService, FlexibleSearchService flexibleSearchService) {
        LOG.info("BHGEJwtDBRolesAuthenticationConverter initialized with UserDetailsService, ModelService, and FlexibleSearchService");
        this.userDetailsService = userDetailsService;
        LOG.info("UserDetailsService class: " + userDetailsService.getClass().getName());
        this.flexibleSearchService = flexibleSearchService;
        LOG.info("FlexibleSearchService class: " + flexibleSearchService.getClass().getName());
        this.modelService = modelService;
        LOG.info("ModelService class: " + modelService.getClass().getName());
    }

    @Override
    public Collection<GrantedAuthority> convert(Jwt jwt) {
        Collection<GrantedAuthority> authorities = Collections.emptySet();
        String subject = jwt.getSubject();
        subject= (subject != null) ? subject.toLowerCase() : null;
        LOG.info("Converting JWT to Granted Authorities for subject: " + subject);
        if (Objects.isNull(subject)) {
            LOG.debug("Unable to retrieve granted authorities from the database: JWT subject claim is missing or null.");
            return Collections.emptySet();
        } else {
            try {
                if((areRolesLoadedForUser(jwt)))
                {
                  LOG.info("Roles are loaded for user with subject: " + subject + ". Retrieving authorities from UserDetailsService.");
                  LOG.info("Loading UserDetails for subject: " + subject.toLowerCase()+ " using UserDetailsService.");
                    UserDetails username = this.userDetailsService.loadUserByUsername(subject.toLowerCase());
                    LOG.info("Retrieved UserDetails for subject: " + subject + ". Authorities: " + username.getUsername());
                    LOG.info("Returning unmodifiable collection of authorities for user with subject: " + subject + ". Authorities: " + username.getAuthorities());
                    authorities= Collections.unmodifiableCollection(username.getAuthorities());
                    for(GrantedAuthority authority : authorities)
                    {
                        LOG.info("Authority: from OOTB code " + authority.getAuthority());
                    }
                     authorities = Collections.unmodifiableCollection(getAuthorities(getUserByLogin(username.getUsername())));
                    for(GrantedAuthority authority : authorities)
                    {
                        LOG.info("Authority: from DB " + authority.getAuthority());
                    }
                    return authorities;
                } else {
                    LOG.info("Roles are not loaded for user with subject: " + subject + ". Returning empty set of authorities.");
                   return  Collections.emptySet();
                }
                    } catch (UsernameNotFoundException var4) {
                LOG.info("BHGEJwtDBRolesAuthenticationConverter Unable to retrieve granted authorities from the database: user was not found");
                return Collections.emptySet();
            }
        }
    }
    private static boolean areRolesLoadedForUser(final Jwt jwt) {
        Boolean readUserRoles = jwt.getClaimAsBoolean("read_user_roles");
        LOG.info("Checking if roles are loaded for user with subject: " + jwt.getSubject() + ", read_user_roles claim: " + readUserRoles);
        return readUserRoles == null || readUserRoles;
    }

    private Collection<GrantedAuthority> getAuthorities(final User user) {
        LOG.info("Retrieving authorities for user: " + user.getUid() + " with groups: " + user.getGroups());
        Set<PrincipalGroup> groups = user.getGroups();
        Collection<GrantedAuthority> authorities = new ArrayList(groups.size());
        Iterator<PrincipalGroup> itr = groups.iterator();

        while(itr.hasNext()) {
            PrincipalGroup group = (PrincipalGroup)itr.next();
            String var10003 = rolePrefix;
            authorities.add(new SimpleGrantedAuthority(var10003 + group.getUid().toUpperCase(LocaleHelper.getPersistenceLocale())));
            Iterator var6 = group.getAllGroups().iterator();

            while(var6.hasNext()) {
                PrincipalGroup gr = (PrincipalGroup)var6.next();
                var10003 = rolePrefix;
                authorities.add(new SimpleGrantedAuthority(var10003 + gr.getUid().toUpperCase(LocaleHelper.getPersistenceLocale())));
            }
        }
        LOG.info("Retrieved authorities for user: " + user.getUid() + ". Authorities: " + authorities);
        for(GrantedAuthority authority : authorities) {
            LOG.info("Authority: " + authority.getAuthority());
        }
        return authorities;
    }
    private User getUserByLogin(final String username) {
        LOG.info("Retrieving user by username: " + username + " from the database");
        try {
            User user;
                String query = "SELECT {PK} FROM {User} WHERE {uid} = ?uid";
                Map<String, Object> params = Map.of("uid", username);
                UserModel userModel = (UserModel)this.flexibleSearchService.searchUnique(new FlexibleSearchQuery("SELECT {PK} FROM {User} WHERE {uid} = ?uid", params));
                user = (User)this.modelService.getSource(userModel);
                LOG.info("Successfully retrieved user by username: " + username + " from the database. User: " + user.getUid());
            return user;
        } catch (ModelNotFoundException | JaloItemNotFoundException var6) {
            throw new UsernameNotFoundException("User '" + username + "' not found!", var6);
        }
    }

}
