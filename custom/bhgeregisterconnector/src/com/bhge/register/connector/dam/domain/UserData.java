
package com.bhge.register.connector.dam.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserData
{

	@JsonProperty("type")
	private String type;
	@JsonProperty("id")
	private String id;
	@JsonProperty("username")
	private String username;
	@JsonProperty("first")
	private String first;
	@JsonProperty("last")
	private String last;
	@JsonProperty("name")
	private String name;
	@JsonProperty("email")
	private String email;
	@JsonProperty("datecreated")
	private String datecreated;
	@JsonProperty("lastlogin")
	private String lastlogin;
	@JsonProperty("company")
	private String company;
	@JsonProperty("companyurl")
	private String companyurl;
	@JsonProperty("phone")
	private String phone;
	@JsonProperty("fax")
	private String fax;
	@JsonProperty("country")
	private String country;
	@JsonProperty("city")
	private String city;
	@JsonProperty("address1")
	private String address1;
	@JsonProperty("address2")
	private String address2;
	@JsonProperty("zip")
	private String zip;
	@JsonProperty("status")
	private String status;
	@JsonProperty("sendemail")
	private String sendemail;

	public UserData()
	{
	}

	public UserData(final String type, final String id, final String username, final String password1, final String password2,
			final String first, final String last, final String name, final String email, final String datecreated,
			final String lastlogin, final String company, final String companyurl, final String phone, final String fax,
			final String country, final String city, final String address1, final String address2, final String zip,
			final String status, final String sendemail)
	{
		super();
		this.type = type;
		this.id = id;
		this.username = username;
		this.first = first;
		this.last = last;
		this.name = name;
		this.email = email;
		this.datecreated = datecreated;
		this.lastlogin = lastlogin;
		this.company = company;
		this.companyurl = companyurl;
		this.phone = phone;
		this.fax = fax;
		this.country = country;
		this.city = city;
		this.address1 = address1;
		this.address2 = address2;
		this.zip = zip;
		this.status = status;
		this.sendemail = sendemail;
	}

	public String getType()
	{
		return type;
	}

	public void setType(final String type)
	{
		this.type = type;
	}

	public String getId()
	{
		return id;
	}

	public void setId(final String id)
	{
		this.id = id;
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

	public String getName()
	{
		return name;
	}

	public void setName(final String name)
	{
		this.name = name;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(final String email)
	{
		this.email = email;
	}

	public String getDatecreated()
	{
		return datecreated;
	}

	public void setDatecreated(final String datecreated)
	{
		this.datecreated = datecreated;
	}

	public String getLastlogin()
	{
		return lastlogin;
	}

	public void setLastlogin(final String lastlogin)
	{
		this.lastlogin = lastlogin;
	}

	public String getCompany()
	{
		return company;
	}

	public void setCompany(final String company)
	{
		this.company = company;
	}

	public String getCompanyurl()
	{
		return companyurl;
	}

	public void setCompanyurl(final String companyurl)
	{
		this.companyurl = companyurl;
	}

	public String getPhone()
	{
		return phone;
	}

	public void setPhone(final String phone)
	{
		this.phone = phone;
	}

	public String getFax()
	{
		return fax;
	}

	public void setFax(final String fax)
	{
		this.fax = fax;
	}

	public String getCountry()
	{
		return country;
	}

	public void setCountry(final String country)
	{
		this.country = country;
	}

	public String getCity()
	{
		return city;
	}

	public void setCity(final String city)
	{
		this.city = city;
	}

	public String getAddress1()
	{
		return address1;
	}

	public void setAddress1(final String address1)
	{
		this.address1 = address1;
	}

	public String getAddress2()
	{
		return address2;
	}

	public void setAddress2(final String address2)
	{
		this.address2 = address2;
	}

	public String getZip()
	{
		return zip;
	}

	public void setZip(final String zip)
	{
		this.zip = zip;
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
		return id + " | " + username + " | " + datecreated + " | " + " | " + first + " | " + last + " | " + email + " | " + country
				+ " | " + zip + " | " + sendemail + " | " + status + " | ";
	}

}
