package com.bhge.register.integration.oidc.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class PrimaryKeyReadData
{

	@JsonProperty("statusCode")
	@JsonInclude(Include.NON_EMPTY)
	private String statusCode;

	@JsonProperty("uid")
	@JsonInclude(Include.NON_EMPTY)
	private String uid;

	@JsonProperty("mail")
	@JsonInclude(Include.NON_EMPTY)
	private String mail;

	@JsonProperty("gessostatus")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoStatus;

	@JsonProperty("cn")
	@JsonInclude(Include.NON_EMPTY)
	private String cn;

	@JsonProperty("sn")
	@JsonInclude(Include.NON_EMPTY)
	private String sn;

	@JsonProperty("givenname")
	@JsonInclude(Include.NON_EMPTY)
	private String givenName;

	@JsonProperty("gessolinkedbu")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoLinkedbu;

	@JsonProperty("gessouid")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoUid;

	@JsonProperty("c")
	@JsonInclude(Include.NON_EMPTY)
	private String c;

	@JsonProperty("employeetype")
	@JsonInclude(Include.NON_EMPTY)
	private String employeeType;

	@JsonProperty("gehrbusinesssegment")
	@JsonInclude(Include.NON_EMPTY)
	private String geHrBusinessSegment;

	@JsonProperty("gehrindustrygroup")
	@JsonInclude(Include.NON_EMPTY)
	private String geHrIndustryGroup;

	@JsonProperty("georaclehrid")
	@JsonInclude(Include.NON_EMPTY)
	private String geOracleHrId;

	@JsonProperty("gessobusinessunit")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoBusinessUnit;

	@JsonProperty("gessocompanyname")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoCompanyName;

	@JsonProperty("gessodepartment")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoDepartment;

	@JsonProperty("gessoeffectiveenddate")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoEffectiveEndDate;

	@JsonProperty("gessoeffectivestartdate")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoEffectiveStartDate;

	@JsonProperty("gessointernallocation")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoInternalLocation;

	@JsonProperty("gessojobfunction")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoJobFunction;

	@JsonProperty("gessomailstop")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoMailStop;

	@JsonProperty("gessopole")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoPole;

	@JsonProperty("gessoresetcount")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoResetCount;

	@JsonProperty("gessosupervisorid")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoSupervisorId;

	@JsonProperty("gessotheblob")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoTheBlob;

	@JsonProperty("gessotimezone")
	@JsonInclude(Include.NON_EMPTY)
	private String geSsoTimeZone;

	@JsonProperty("l")
	@JsonInclude(Include.NON_EMPTY)
	private String l;

	@JsonProperty("manager")
	@JsonInclude(Include.NON_EMPTY)
	private String manager;

	@JsonProperty("mobile")
	@JsonInclude(Include.NON_EMPTY)
	private String mobile;

	@JsonProperty("postalcode")
	@JsonInclude(Include.NON_EMPTY)
	private String postalCode;

	@JsonProperty("st")
	@JsonInclude(Include.NON_EMPTY)
	private String st;

	@JsonProperty("street")
	@JsonInclude(Include.NON_EMPTY)
	private String street;

	@JsonProperty("telephonenumber")
	@JsonInclude(Include.NON_EMPTY)
	private String telephoneNumber;

	@JsonProperty("title")
	@JsonInclude(Include.NON_EMPTY)
	private String title;

	public PrimaryKeyReadData()
	{

	}

	public PrimaryKeyReadData(final String value, final boolean checkMail)
	{
		if (checkMail)
		{
			this.mail = value;
		}
		else
		{
			this.uid = value;
		}
	}

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

	public String getGeSsoStatus()
	{
		return geSsoStatus;
	}

	public void setGeSsoStatus(final String geSsoStatus)
	{
		this.geSsoStatus = geSsoStatus;
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

	public String getGeSsoLinkedbu()
	{
		return geSsoLinkedbu;
	}

	public void setGeSsoLinkedbu(final String geSsoLinkedbu)
	{
		this.geSsoLinkedbu = geSsoLinkedbu;
	}

	public String getGeSsoUid()
	{
		return geSsoUid;
	}

	public void setGeSsoUid(final String geSsoUid)
	{
		this.geSsoUid = geSsoUid;
	}

	public String getC()
	{
		return c;
	}

	public void setC(final String c)
	{
		this.c = c;
	}

	public String getEmployeeType()
	{
		return employeeType;
	}

	public void setEmployeeType(final String employeeType)
	{
		this.employeeType = employeeType;
	}

	public String getGeHrBusinessSegment()
	{
		return geHrBusinessSegment;
	}

	public void setGeHrBusinessSegment(final String geHrBusinessSegment)
	{
		this.geHrBusinessSegment = geHrBusinessSegment;
	}

	public String getGeHrIndustryGroup()
	{
		return geHrIndustryGroup;
	}

	public void setGeHrIndustryGroup(final String geHrIndustryGroup)
	{
		this.geHrIndustryGroup = geHrIndustryGroup;
	}

	public String getGeOracleHrId()
	{
		return geOracleHrId;
	}

	public void setGeOracleHrId(final String geOracleHrId)
	{
		this.geOracleHrId = geOracleHrId;
	}

	public String getGeSsoBusinessUnit()
	{
		return geSsoBusinessUnit;
	}

	public void setGeSsoBusinessUnit(final String geSsoBusinessUnit)
	{
		this.geSsoBusinessUnit = geSsoBusinessUnit;
	}

	public String getGeSsoCompanyName()
	{
		return geSsoCompanyName;
	}

	public void setGeSsoCompanyName(final String geSsoCompanyName)
	{
		this.geSsoCompanyName = geSsoCompanyName;
	}

	public String getGeSsoDepartment()
	{
		return geSsoDepartment;
	}

	public void setGeSsoDepartment(final String geSsoDepartment)
	{
		this.geSsoDepartment = geSsoDepartment;
	}

	public String getGeSsoEffectiveEndDate()
	{
		return geSsoEffectiveEndDate;
	}

	public void setGeSsoEffectiveEndDate(final String geSsoEffectiveEndDate)
	{
		this.geSsoEffectiveEndDate = geSsoEffectiveEndDate;
	}

	public String getGeSsoEffectiveStartDate()
	{
		return geSsoEffectiveStartDate;
	}

	public void setGeSsoEffectiveStartDate(final String geSsoEffectiveStartDate)
	{
		this.geSsoEffectiveStartDate = geSsoEffectiveStartDate;
	}

	public String getGeSsoInternalLocation()
	{
		return geSsoInternalLocation;
	}

	public void setGeSsoInternalLocation(final String geSsoInternalLocation)
	{
		this.geSsoInternalLocation = geSsoInternalLocation;
	}

	public String getGeSsoJobFunction()
	{
		return geSsoJobFunction;
	}

	public void setGeSsoJobFunction(final String geSsoJobFunction)
	{
		this.geSsoJobFunction = geSsoJobFunction;
	}

	public String getGeSsoMailStop()
	{
		return geSsoMailStop;
	}

	public void setGeSsoMailStop(final String geSsoMailStop)
	{
		this.geSsoMailStop = geSsoMailStop;
	}

	public String getGeSsoPole()
	{
		return geSsoPole;
	}

	public void setGeSsoPole(final String geSsoPole)
	{
		this.geSsoPole = geSsoPole;
	}

	public String getGeSsoResetCount()
	{
		return geSsoResetCount;
	}

	public void setGeSsoResetCount(final String geSsoResetCount)
	{
		this.geSsoResetCount = geSsoResetCount;
	}

	public String getGeSsoSupervisorId()
	{
		return geSsoSupervisorId;
	}

	public void setGeSsoSupervisorId(final String geSsoSupervisorId)
	{
		this.geSsoSupervisorId = geSsoSupervisorId;
	}

	public String getGeSsoTheBlob()
	{
		return geSsoTheBlob;
	}

	public void setGeSsoTheBlob(final String geSsoTheBlob)
	{
		this.geSsoTheBlob = geSsoTheBlob;
	}

	public String getGeSsoTimeZone()
	{
		return geSsoTimeZone;
	}

	public void setGeSsoTimeZone(final String geSsoTimeZone)
	{
		this.geSsoTimeZone = geSsoTimeZone;
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

	public String getPostalCode()
	{
		return postalCode;
	}

	public void setPostalCode(final String postalCode)
	{
		this.postalCode = postalCode;
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

	public String getTelephoneNumber()
	{
		return telephoneNumber;
	}

	public void setTelephoneNumber(final String telephoneNumber)
	{
		this.telephoneNumber = telephoneNumber;
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
