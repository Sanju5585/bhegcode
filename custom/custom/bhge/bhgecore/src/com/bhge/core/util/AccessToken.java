/**
 * 
 */
package com.bhge.core.util;

import org.apache.commons.lang3.builder.ToStringBuilder;

import java.io.Serializable;
import java.util.List;

/**
 * @author 212722447
 *
 */
public class AccessToken implements Serializable
{

	
	private static final long serialVersionUID = 1L;
	private String access_token, refresh_token, id_token, token_type, expires_in, scope, userId, default_currency, default_b2b;
	private Boolean isInternalUser ;
	private List<String> visibleCategories;
	private List<String> accessCSRProductLines;

	public AccessToken() {
	}

	public String getAccess_token() {
		return access_token;
	}

	public void setAccess_token(String access_token) {
		this.access_token = access_token;
	}

	public String getRefresh_token() {
		return refresh_token;
	}

	public void setRefresh_token(String refresh_token) {
		this.refresh_token = refresh_token;
	}

	public String getId_token() {
		return id_token;
	}

	public void setId_token(String id_token) {
		this.id_token = id_token;
	}

	public String getToken_type() {
		return token_type;
	}

	public void setToken_type(String token_type) {
		this.token_type = token_type;
	}

	public String getExpires_in() {
		return expires_in;
	}

	public void setExpires_in(String expires_in) {
		this.expires_in = expires_in;
	}

	public String getScope() {
		return scope;
	}

	public void setScope(String scope) {
		this.scope = scope;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getDefault_currency() {
		return default_currency;
	}

	public void setDefault_currency(String default_currency) {
		this.default_currency = default_currency;
	}

	public String getDefault_b2b() {
		return default_b2b;
	}

	public void setDefault_b2b(String default_b2b) {
		this.default_b2b = default_b2b;
	}

	public Boolean getInternalUser() {
		return isInternalUser;
	}

	public void setInternalUser(Boolean internalUser) {
		isInternalUser = internalUser;
	}

	public List<String> getVisibleCategories() {
		return visibleCategories;
	}

	public void setVisibleCategories(List<String> visibleCategories) {
		this.visibleCategories = visibleCategories;
	}

	public List<String> getAccessCSRProductLines() {
		return accessCSRProductLines;
	}

	public void setAccessCSRProductLines(List<String> accessCSRProductLines) {
		this.accessCSRProductLines = accessCSRProductLines;
	}

	@Override
	public String toString() {
		return new ToStringBuilder(this)
				.append("access_token", access_token)
				.append("refresh_token", refresh_token)
				.append("id_token", id_token)
				.append("token_type", token_type)
				.append("expires_in", expires_in)
				.append("scope", scope)
				.append("userId", userId)
				.append("default_currency", default_currency)
				.append("default_b2b", default_b2b)
				.append("isInternalUser", isInternalUser)
				.append("visibleCategories", visibleCategories)
				.append("accessCSRProductLines", accessCSRProductLines)
				.toString();
	}
}
