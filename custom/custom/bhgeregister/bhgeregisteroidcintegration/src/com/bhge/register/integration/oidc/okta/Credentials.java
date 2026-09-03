package com.bhge.register.integration.oidc.okta;
import com.fasterxml.jackson.annotation.*;
import org.apache.commons.lang3.builder.ToStringBuilder;

import jakarta.annotation.Generated;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"password",
"emails",
"provider"
})
@Generated("jsonschema2pojo")
public class Credentials {

@JsonProperty("password")
private com.bhge.register.integration.oidc.okta.Password password;
@JsonProperty("emails")
private List<com.bhge.register.integration.oidc.okta.Email> emails = null;
@JsonProperty("provider")
private com.bhge.register.integration.oidc.okta.Provider provider;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("password")
public com.bhge.register.integration.oidc.okta.Password getPassword() {
return password;
}

@JsonProperty("password")
public void setPassword( com.bhge.register.integration.oidc.okta.Password password) {
this.password = password;
}

@JsonProperty("emails")
public List<com.bhge.register.integration.oidc.okta.Email> getEmails() {
return emails;
}

@JsonProperty("emails")
public void setEmails(List<com.bhge.register.integration.oidc.okta.Email> emails) {
this.emails = emails;
}

@JsonProperty("provider")
public com.bhge.register.integration.oidc.okta.Provider getProvider() {
return provider;
}

@JsonProperty("provider")
public void setProvider( com.bhge.register.integration.oidc.okta.Provider provider) {
this.provider = provider;
}

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
                .append("password", password)
                .append("emails", emails)
                .append("provider", provider)
                .append("additionalProperties", additionalProperties)
                .toString();
    }
}