package com.bhge.register.integration.oidc.okta;

import com.fasterxml.jackson.annotation.*;
import org.apache.commons.lang3.builder.ToStringBuilder;

import jakarta.annotation.Generated;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"id",
"status",
"created",
"activated",
"statusChanged",
"lastLogin",
"lastUpdated",
"passwordChanged",
"type",
"profile",
"credentials",
"_links",
"errorCode",
"errorSummary",
"errorLink",
"errorId",
"errorCauses"
})
@Generated("jsonschema2pojo")
public class OktaUser {

@JsonProperty("id")
private String id;
@JsonProperty("status")
private String status;
@JsonProperty("created")
private String created;
@JsonProperty("activated")
private String activated;
@JsonProperty("statusChanged")
private String statusChanged;
@JsonProperty("lastLogin")
private String lastLogin;
@JsonProperty("lastUpdated")
private String lastUpdated;
@JsonProperty("passwordChanged")
private String passwordChanged;
@JsonProperty("type")
private Type type;
@JsonProperty("profile")
private com.bhge.register.integration.oidc.okta.Profile profile;
@JsonProperty("credentials")
private Credentials credentials;
//@JsonProperty("_links")
//private Links links;
@JsonProperty("errorCode")
private String errorCode;
@JsonProperty("errorSummary")
private String errorSummary;
@JsonProperty("errorLink")
private String errorLink;
@JsonProperty("errorId")
private String errorId;
@JsonProperty("errorCauses")
private List<com.bhge.register.integration.oidc.okta.ErrorCauses> errorCauses = null;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("id")
public String getId() {
return id;
}

@JsonProperty("id")
public void setId(String id) {
this.id = id;
}

@JsonProperty("status")
public String getStatus() {
return status;
}

@JsonProperty("status")
public void setStatus(String status) {
this.status = status;
}

@JsonProperty("created")
public String getCreated() {
return created;
}

@JsonProperty("created")
public void setCreated(String created) {
this.created = created;
}

@JsonProperty("activated")
public String getActivated() {
return activated;
}

@JsonProperty("activated")
public void setActivated(String activated) {
this.activated = activated;
}

@JsonProperty("statusChanged")
public String getStatusChanged() {
return statusChanged;
}

@JsonProperty("statusChanged")
public void setStatusChanged(String statusChanged) {
this.statusChanged = statusChanged;
}

@JsonProperty("lastLogin")
public String getLastLogin() {
return lastLogin;
}

@JsonProperty("lastLogin")
public void setLastLogin(String lastLogin) {
this.lastLogin = lastLogin;
}

@JsonProperty("lastUpdated")
public String getLastUpdated() {
return lastUpdated;
}

@JsonProperty("lastUpdated")
public void setLastUpdated(String lastUpdated) {
this.lastUpdated = lastUpdated;
}

@JsonProperty("passwordChanged")
public String getPasswordChanged() {
return passwordChanged;
}

@JsonProperty("passwordChanged")
public void setPasswordChanged(String passwordChanged) {
this.passwordChanged = passwordChanged;
}

@JsonProperty("type")
public Type getType() {
return type;
}

@JsonProperty("type")
public void setType(Type type) {
this.type = type;
}

@JsonProperty("profile")
public com.bhge.register.integration.oidc.okta.Profile getProfile() {
return profile;
}

@JsonProperty("profile")
public void setProfile(com.bhge.register.integration.oidc.okta.Profile profile) {
this.profile = profile;
}

@JsonProperty("credentials")
public Credentials getCredentials() {
return credentials;
}

@JsonProperty("credentials")
public void setCredentials(Credentials credentials) {
this.credentials = credentials;
}

@JsonProperty("errorCode")
 public String getErrorCode() {
    return errorCode;
 }
@JsonProperty("errorCode")
public void setErrorCode(String errorCode) {
   this.errorCode = errorCode;
}
@JsonProperty("errorSummary")
public String getErrorSummary() {
    return errorSummary;
}
@JsonProperty("errorSummary")
public void setErrorSummary(String errorSummary) {
    this.errorSummary = errorSummary;
}
@JsonProperty("errorLink")
public String getErrorLink() {
    return errorLink;
}
@JsonProperty("errorLink")
public void setErrorLink(String errorLink) {
    this.errorLink = errorLink;
}
@JsonProperty("errorId")
public String getErrorId() {
    return errorId;
}
@JsonProperty("errorId")
public void setErrorId(String errorId) {
    this.errorId = errorId;
}
@JsonProperty("errorCauses")
public List<com.bhge.register.integration.oidc.okta.ErrorCauses> getErrorCauses() {
    return errorCauses;
}
@JsonProperty("errorCauses")
public void setErrorCauses(List<com.bhge.register.integration.oidc.okta.ErrorCauses> errorCauses) {
    this.errorCauses = errorCauses;
}

//@JsonProperty("_links")
//public Links getLinks() {
//return links;
//}
//
//@JsonProperty("_links")
//public void setLinks(Links links) {
//this.links = links;
//}

@JsonAnyGetter
public Map<String, Object> getAdditionalProperties() {
return this.additionalProperties;
}

@JsonAnySetter
public void setAdditionalProperty(String name, Object value) {
this.additionalProperties.put(name, value);
}

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", id)
                .append("status", status)
                .append("created", created)
                .append("activated", activated)
                .append("statusChanged", statusChanged)
                .append("lastLogin", lastLogin)
                .append("lastUpdated", lastUpdated)
                .append("passwordChanged", passwordChanged)
                .append("type", type)
                .append("profile", profile)
                .append("credentials", credentials)
//                .append("links", links)
                .append("errorCode",errorCode)
                .append("errorSummary",errorSummary)
                .append("errorLink",errorLink)
                .append("errorId",errorId)
                .append("errorCauses",errorCauses)
                .append("additionalProperties", additionalProperties)
                .toString();
    }
}