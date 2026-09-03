/**
 *
 */
package com.bhge.core.scpi.rfc.mse.zrmaequipment;


import java.util.Date;

import com.bhge.core.scpi.rfc.mse.MSEMessageTable;
import com.bhge.core.scpi.rfc.mse.MyEquipments;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import lombok.ToString;


@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName = "rfc:ZHYB_RMA_EQUIP.Response")
@JsonPropertyOrder(
{ "CP_DETAIL", "CP_FLAG", "CUST_NUM", "FROM_DATE", "PART_NUM", "SER_NUM", "TO_DATE", "ET_DETAIL", "ET_EQUIPMENT",
		"ET_MESSAGETABLE", "ET_MYEQUIPMENT" })
public class ZHYBRmaEquipResponse
{

	@JacksonXmlProperty(localName = "CP_DETAIL")
	private String cpDetail;

	@JacksonXmlProperty(localName = "CP_FLAG")
	private String cpFLAG;

	@JacksonXmlProperty(localName = "CUST_NUM")
	private String custNum;

	@JacksonXmlProperty(localName = "FROM_DATE")
	private Date fromDate;

	@JacksonXmlProperty(localName = "PART_NUM")
	private String partNum;

	@JacksonXmlProperty(localName = "SER_NUM")
	private String serNum;

	@JacksonXmlProperty(localName = "TO_DATE")
	private Date toDate;

	@JacksonXmlProperty(localName = "ET_DETAIL")
	private ETDetails etDetail;

	@JacksonXmlProperty(localName = "ET_EQUIPMENT")
	private Equipments etEquipment;

	@JacksonXmlProperty(localName = "ET_MESSAGETABLE")
	private MSEMessageTable messageTable;

	@JacksonXmlProperty(localName = "ET_MYEQUIPMENT")
	private MyEquipments myEquipment;

	/**
	 * @return the cpDetail
	 */
	public String getCpDetail()
	{
		return cpDetail;
	}

	/**
	 * @param cpDetail
	 *           the cpDetail to set
	 */
	public void setCpDetail(final String cpDetail)
	{
		this.cpDetail = cpDetail;
	}

	/**
	 * @return the cpFLAG
	 */
	public String getCpFLAG()
	{
		return cpFLAG;
	}

	/**
	 * @param cpFLAG
	 *           the cpFLAG to set
	 */
	public void setCpFLAG(final String cpFLAG)
	{
		this.cpFLAG = cpFLAG;
	}

	/**
	 * @return the custNum
	 */
	public String getCustNum()
	{
		return custNum;
	}

	/**
	 * @param custNum
	 *           the custNum to set
	 */
	public void setCustNum(final String custNum)
	{
		this.custNum = custNum;
	}

	/**
	 * @return the fromDate
	 */
	public Date getFromDate()
	{
		return fromDate;
	}

	/**
	 * @param fromDate
	 *           the fromDate to set
	 */
	public void setFromDate(final Date fromDate)
	{
		this.fromDate = fromDate;
	}

	/**
	 * @return the partNum
	 */
	public String getPartNum()
	{
		return partNum;
	}

	/**
	 * @param partNum
	 *           the partNum to set
	 */
	public void setPartNum(final String partNum)
	{
		this.partNum = partNum;
	}

	/**
	 * @return the serNum
	 */
	public String getSerNum()
	{
		return serNum;
	}

	/**
	 * @param serNum
	 *           the serNum to set
	 */
	public void setSerNum(final String serNum)
	{
		this.serNum = serNum;
	}

	/**
	 * @return the toDate
	 */
	public Date getToDate()
	{
		return toDate;
	}

	/**
	 * @param toDate
	 *           the toDate to set
	 */
	public void setToDate(final Date toDate)
	{
		this.toDate = toDate;
	}

	/**
	 * @return the etDetail
	 */
	public ETDetails getEtDetails()
	{
		this.etDetail = etDetail == null ? new ETDetails() : etDetail;

		return etDetail;
	}

	/**
	 * @param etDetail
	 *           the etDetail to set
	 */
	public void setEtDetails(final ETDetails etDetails)
	{
		this.etDetail = etDetails;
	}

	/**
	 * @return the etEquipment
	 */
	public Equipments getEtEquipments()
	{
		this.etEquipment = etEquipment == null ? new Equipments() : etEquipment;

		return etEquipment;
	}

	/**
	 * @param etEquipment
	 *           the etEquipment to set
	 */
	public void setEtEquipments(final Equipments etEquipments)
	{
		this.etEquipment = etEquipments;
	}

	/**
	 * @return the messageTable
	 */
	public MSEMessageTable getMessageTable() {
		return messageTable;
	}

	/**
	 * @param messageTable
	 *           the messageTable to set
	 */
	public void setMessageTable(MSEMessageTable messageTable) {
		this.messageTable = messageTable;
	}

	/**
	 * @return the myEquipment
	 */
	public MyEquipments getMyEquipment() {
		return myEquipment;
	}

	/**
	 * @param myEquipment
	 *           the myEquipment to set
	 */
	public void setMyEquipment(MyEquipments myEquipment) {
		this.myEquipment = myEquipment;
	}
}
