package com.bhge.register.integration.oidc.okta;

import com.fasterxml.jackson.annotation.*;
import org.apache.commons.lang3.builder.ToStringBuilder;

import jakarta.annotation.Generated;
import java.util.HashMap;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"self"
})
@Generated("jsonschema2pojo")
public class Links {

@JsonProperty("self")
private Self self;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("self")
public Self getSelf() {
return self;
}

@JsonProperty("self")
public void setSelf(Self self) {
this.self = self;
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
                .append("self", self)
                .append("additionalProperties", additionalProperties)
                .toString();
    }
}