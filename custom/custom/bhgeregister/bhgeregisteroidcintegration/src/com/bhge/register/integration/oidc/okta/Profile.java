package com.bhge.register.integration.oidc.okta;

import com.fasterxml.jackson.annotation.*;
import org.apache.commons.lang3.builder.ToStringBuilder;

import jakarta.annotation.Generated;
import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"uid",
"firstName",
"lastName",
"mobilePhone",
"secondEmail",
"login",
"email"
})
@Generated("jsonschema2pojo")
public class Profile {

@JsonProperty("uid")
private String uid;
@JsonProperty("firstName")
private String firstName;
@JsonProperty("lastName")
private String lastName;
@JsonProperty("mobilePhone")
private Object mobilePhone;
@JsonProperty("secondEmail")
private Object secondEmail;
@JsonProperty("login")
private String login;
@JsonProperty("email")
private String email;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("uid")
public String getUid() {
return uid;
}

@JsonProperty("uid")
public void setUid(String uid) {
this.uid = uid;
}

@JsonProperty("firstName")
public String getFirstName() {
return firstName;
}

@JsonProperty("firstName")
public void setFirstName(String firstName) {
this.firstName = firstName;
}

@JsonProperty("lastName")
public String getLastName() {
return lastName;
}

@JsonProperty("lastName")
public void setLastName(String lastName) {
this.lastName = lastName;
}

@JsonProperty("mobilePhone")
public Object getMobilePhone() {
return mobilePhone;
}

@JsonProperty("mobilePhone")
public void setMobilePhone(Object mobilePhone) {
this.mobilePhone = mobilePhone;
}

@JsonProperty("secondEmail")
public Object getSecondEmail() {
return secondEmail;
}

@JsonProperty("secondEmail")
public void setSecondEmail(Object secondEmail) {
this.secondEmail = secondEmail;
}

@JsonProperty("login")
public String getLogin() {
return login;
}

@JsonProperty("login")
public void setLogin(String login) {
this.login = login;
}

@JsonProperty("email")
public String getEmail() {
return email;
}

@JsonProperty("email")
public void setEmail(String email) {
this.email = email;
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
                .append("uid", uid)
                .append("firstName", firstName)
                .append("lastName", lastName)
                .append("mobilePhone", mobilePhone)
                .append("secondEmail", secondEmail)
                .append("login", login)
                .append("email", email)
                .append("additionalProperties", additionalProperties)
                .toString();
    }
}