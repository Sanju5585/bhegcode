package com.bhge.register.integration.oidc.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReadDataResponse
{

	@JsonProperty("statusCode")
	private String statusCode;

	@JsonProperty("uid")
	private String uid;

	@JsonProperty("mail")
	private String mail;

	@JsonProperty("gessostatus")
	private String gessostatus;

	@JsonProperty("cn")
	private String cn;

	@JsonProperty("sn")
	private String sn;

	@JsonProperty("givenName")
	private String givenName;

	@JsonProperty("gessolinkedbu")
	private String gessolinkedbu;

	@JsonProperty("gessouid")
	private String gessouid;

	@JsonProperty("c")
	private String c;

	@JsonProperty("employeetype")
	private String employeetype;

	@JsonProperty("gehrbusinesssegment")
	private String gehrbusinesssegment;

	@JsonProperty("gehrindustrygroup")
	private String gehrindustrygroup;

	@JsonProperty("georaclehrid")
	private String georaclehrid;

	@JsonProperty("gessobusinessunit")
	private String gessobusinessunit;

	@JsonProperty("gessocompanyname")
	private String gessocompanyname;

	@JsonProperty("gessodepartment")
	private String gessodepartment;

	@JsonProperty("gessoeffectiveenddate")
	private String gessoeffectiveenddate;

	@JsonProperty("gessoeffectivestartdate")
	private String gessoeffectivestartdate;

	@JsonProperty("gessointernallocation")
	private String gessointernallocation;

	@JsonProperty("gessojobfunction")
	private String gessojobfunction;

	@JsonProperty("gessomailstop")
	private String gessomailstop;

	@JsonProperty("gessopole")
	private String gessopole;

	@JsonProperty("gessoresetcount")
	private String gessoresetcount;

	@JsonProperty("gessosupervisorid")
	private String gessosupervisorid;

	@JsonProperty("gessotheblob")
	private String gessotheblob;

	@JsonProperty("gessotimezone")
	private String gessotimezone;

	@JsonProperty("givenname")
	private String givenname;

	@JsonProperty("l")
	private String l;

	@JsonProperty("manager")
	private String manager;

	@JsonProperty("mobile")
	private String mobile;

	@JsonProperty("postalcode")
	private String postalcode;

	@JsonProperty("st")
	private String st;

	@JsonProperty("street")
	private String street;

	@JsonProperty("telephonenumber")
	private String telephonenumber;

	@JsonProperty("title")
	private String title;


	public String getStatusCode()
	{
		return statusCode;
	}

	public void setStatusCode(final String statusCode)
	{
		this.statusCode = statusCode;
	}

	public String getUid()
	{
		return uid;
	}

	public void setUid(final String uid)
	{
		this.uid = uid;
	}

	public String getMail()
	{
		return mail;
	}

	public void setMail(final String mail)
	{
		this.mail = mail;
	}

	public String getGessostatus()
	{
		return gessostatus;
	}

	public void setGessostatus(final String gessostatus)
	{
		this.gessostatus = gessostatus;
	}

	public String getCn()
	{
		return cn;
	}

	public void setCn(final String cn)
	{
		this.cn = cn;
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

	public String getGessolinkedbu()
	{
		return gessolinkedbu;
	}

	public void setGessolinkedbu(final String gessolinkedbu)
	{
		this.gessolinkedbu = gessolinkedbu;
	}

	public String getGessouid()
	{
		return gessouid;
	}

	public void setGessouid(final String gessouid)
	{
		this.gessouid = gessouid;
	}

	public String getC()
	{
		return c;
	}

	public void setC(final String c)
	{
		this.c = c;
	}

	public String getEmployeetype()
	{
		return employeetype;
	}

	public void setEmployeetype(final String employeetype)
	{
		this.employeetype = employeetype;
	}

	public String getGehrbusinesssegment()
	{
		return gehrbusinesssegment;
	}

	public void setGehrbusinesssegment(final String gehrbusinesssegment)
	{
		this.gehrbusinesssegment = gehrbusinesssegment;
	}

	public String getGehrindustrygroup()
	{
		return gehrindustrygroup;
	}

	public void setGehrindustrygroup(final String gehrindustrygroup)
	{
		this.gehrindustrygroup = gehrindustrygroup;
	}

	public String getGeoraclehrid()
	{
		return georaclehrid;
	}

	public void setGeoraclehrid(final String georaclehrid)
	{
		this.georaclehrid = georaclehrid;
	}

	public String getGessobusinessunit()
	{
		return gessobusinessunit;
	}

	public void setGessobusinessunit(final String gessobusinessunit)
	{
		this.gessobusinessunit = gessobusinessunit;
	}

	public String getGessocompanyname()
	{
		return gessocompanyname;
	}

	public void setGessocompanyname(final String gessocompanyname)
	{
		this.gessocompanyname = gessocompanyname;
	}

	public String getGessodepartment()
	{
		return gessodepartment;
	}

	public void setGessodepartment(final String gessodepartment)
	{
		this.gessodepartment = gessodepartment;
	}

	public String getGessoeffectiveenddate()
	{
		return gessoeffectiveenddate;
	}

	public void setGessoeffectiveenddate(final String gessoeffectiveenddate)
	{
		this.gessoeffectiveenddate = gessoeffectiveenddate;
	}

	public String getGessoeffectivestartdate()
	{
		return gessoeffectivestartdate;
	}

	public void setGessoeffectivestartdate(final String gessoeffectivestartdate)
	{
		this.gessoeffectivestartdate = gessoeffectivestartdate;
	}

	public String getGessointernallocation()
	{
		return gessointernallocation;
	}

	public void setGessointernallocation(final String gessointernallocation)
	{
		this.gessointernallocation = gessointernallocation;
	}

	public String getGessojobfunction()
	{
		return gessojobfunction;
	}

	public void setGessojobfunction(final String gessojobfunction)
	{
		this.gessojobfunction = gessojobfunction;
	}

	public String getGessomailstop()
	{
		return gessomailstop;
	}

	public void setGessomailstop(final String gessomailstop)
	{
		this.gessomailstop = gessomailstop;
	}

	public String getGessopole()
	{
		return gessopole;
	}

	public void setGessopole(final String gessopole)
	{
		this.gessopole = gessopole;
	}

	public String getGessoresetcount()
	{
		return gessoresetcount;
	}

	public void setGessoresetcount(final String gessoresetcount)
	{
		this.gessoresetcount = gessoresetcount;
	}

	public String getGessosupervisorid()
	{
		return gessosupervisorid;
	}

	public void setGessosupervisorid(final String gessosupervisorid)
	{
		this.gessosupervisorid = gessosupervisorid;
	}

	public String getGessotheblob()
	{
		return gessotheblob;
	}

	public void setGessotheblob(final String gessotheblob)
	{
		this.gessotheblob = gessotheblob;
	}

	public String getGessotimezone()
	{
		return gessotimezone;
	}

	public void setGessotimezone(final String gessotimezone)
	{
		this.gessotimezone = gessotimezone;
	}

	public String getGivenname()
	{
		return givenname;
	}

	public void setGivenname(final String givenname)
	{
		this.givenname = givenname;
	}

	public String getL()
	{
		return l;
	}

	public void setL(final String l)
	{
		this.l = l;
	}

	public String getManager()
	{
		return manager;
	}

	public void setManager(final String manager)
	{
		this.manager = manager;
	}

	public String getMobile()
	{
		return mobile;
	}

	public void setMobile(final String mobile)
	{
		this.mobile = mobile;
	}

	public String getPostalcode()
	{
		return postalcode;
	}

	public void setPostalcode(final String postalcode)
	{
		this.postalcode = postalcode;
	}

	public String getSt()
	{
		return st;
	}

	public void setSt(final String st)
	{
		this.st = st;
	}

	public String getStreet()
	{
		return street;
	}

	public void setStreet(final String street)
	{
		this.street = street;
	}

	public String getTelephonenumber()
	{
		return telephonenumber;
	}

	public void setTelephonenumber(final String telephonenumber)
	{
		this.telephonenumber = telephonenumber;
	}

	public String getTitle()
	{
		return title;
	}

	public void setTitle(final String title)
	{
		this.title = title;
	}

}