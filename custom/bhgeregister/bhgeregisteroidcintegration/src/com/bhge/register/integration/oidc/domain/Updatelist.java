package com.bhge.register.integration.oidc.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class Updatelist
{

	@JsonProperty("uid")
	private String uid;

	@JsonProperty("gessolinkedbu")
	private String gessolinkedbu;

	@JsonProperty("sn")
	private String sn;

	@JsonProperty("givenName")
	private String givenName;

	@JsonProperty("cn")
	private String cn;

	@JsonProperty("mail")
	private String mail;

	@JsonProperty("gessochallenge")
	private String gessochallenge;

	@JsonProperty("gessoresponse")
	private String gessoresponse;

	@JsonProperty("userPassword")
	private String userPassword;

	@JsonProperty("gessotheblob")
	private String gessotheblob;

	public Updatelist(final String uid, final String gessolinkedbu, final String sn, final String givenName, final String cn,
			final String mail, final String gessochallenge, final String gessoresponse, final String userPassword,
			final String gessotheblob)
	{
		super();
		this.uid = uid;
		this.gessolinkedbu = gessolinkedbu;
		this.sn = sn;
		this.givenName = givenName;
		this.cn = cn;
		this.mail = mail;
		this.gessochallenge = gessochallenge;
		this.gessoresponse = gessoresponse;
		this.userPassword = userPassword;
		this.gessotheblob = gessotheblob;
	}

	public Updatelist()
	{

	}


	public String getUid()
	{
		return uid;
	}

	public void setUid(final String uid)
	{
		this.uid = uid;
	}

	public String getGessolinkedbu()
	{
		return gessolinkedbu;
	}

	public void setGessolinkedbu(final String gessolinkedbu)
	{
		this.gessolinkedbu = gessolinkedbu;
	}

	public String getSn()
	{
		return sn;
	}

	public void setSn(final String sn)
	{
		this.sn = sn;
	}

	public String getGivenName()
	{
		return givenName;
	}

	public void setGivenName(final String givenName)
	{
		this.givenName = givenName;
	}

	public String getCn()
	{
		return cn;
	}

	public void setCn(final String cn)
	{
		this.cn = cn;
	}

	public String getMail()
	{
		return mail;
	}

	public void setMail(final String mail)
	{
		this.mail = mail;
	}

	public String getGessochallenge()
	{
		return gessochallenge;
	}

	public void setGessochallenge(final String gessochallenge)
	{
		this.gessochallenge = gessochallenge;
	}

	public String getGessoresponse()
	{
		return gessoresponse;
	}

	public void setGessoresponse(final String gessoresponse)
	{
		this.gessoresponse = gessoresponse;
	}

	/*
	 * public String getUserPassword() { return userPassword; }
	 * 
	 * public void setUserPassword(final String userPassword) { this.userPassword = userPassword; }
	 */

	public String getUserPassword()
	{
		return userPassword;
	}

	public void setUserPassword(final String userPassword)
	{
		final String salt = SecurePassword.getSalt(30);
		final String secPassword = SecurePassword.generateSecurePassword(userPassword, salt);
		this.userPassword = secPassword;
	}

	public String getGessotheblob()
	{
		return gessotheblob;
	}

	public void setGessotheblob(final String gessotheblob)
	{
		this.gessotheblob = gessotheblob;
	}

	@Override
	public String toString()
	{
		return "uid:" + uid + ",gessolinkedbu:" + gessolinkedbu + ",sn:" + sn + ",givenName:" + givenName + ",cn:" + cn + ",mail:";
	}
}
