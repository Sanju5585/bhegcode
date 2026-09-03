
package com.bhge.register.connector.dam.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserRequest
{

	@JsonProperty("username")
	private String username;
	@JsonProperty("first")
	private String first;
	@JsonProperty("last")
	private String last;
	@JsonProperty("email")
	private String email;
	@JsonProperty("status")
	private String status;
	@JsonProperty("sendemail")
	private String sendemail;

	public UserRequest()
	{
	}

	public UserRequest(final String username, final String password1, final String password2, final String first,
			final String last, final String email, final String status, final String sendemail)
	{
		super();
		this.username = username;
		this.first = first;
		this.last = last;
		this.email = email;
		this.status = status;
		this.sendemail = sendemail;
	}

	public String getUsername()
	{
		return username;
	}

	public void setUsername(final String username)
	{
		this.username = username;
	}

	public String getFirst()
	{
		return first;
	}

	public void setFirst(final String first)
	{
		this.first = first;
	}

	public String getLast()
	{
		return last;
	}

	public void setLast(final String last)
	{
		this.last = last;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(final String email)
	{
		this.email = email;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(final String status)
	{
		this.status = status;
	}

	public String getSendemail()
	{
		return sendemail;
	}

	public void setSendemail(final String sendemail)
	{
		this.sendemail = sendemail;
	}

	@Override
	public String toString()
	{
		return " | " + username + " | " + " | " + first + " | " + last + " | " + email + " | " + sendemail + " | " + status + " | ";
	}

}
