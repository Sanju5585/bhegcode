package com.bhge.register.integration.oidc.okta;

import com.fasterxml.jackson.annotation.*;
import org.apache.commons.lang3.builder.ToStringBuilder;
import jakarta.annotation.Generated;
import java.util.HashMap;
import java.util.Map;


@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "errorSummary"
})

@Generated("jsonschema2pojo")
public class ErrorCauses {

    @JsonProperty("errorSummary")
    private String errorSummary;

    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("errorSummary")
    public String getErrorSummary() {
        return errorSummary;
    }
    @JsonProperty("errorSummary")
    public void setErrorSummary(String errorSummary) {
        this.errorSummary = errorSummary;
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
                .append("errorSummary", errorSummary)
                .append("additionalProperties", additionalProperties)
                .toString();
    }
}