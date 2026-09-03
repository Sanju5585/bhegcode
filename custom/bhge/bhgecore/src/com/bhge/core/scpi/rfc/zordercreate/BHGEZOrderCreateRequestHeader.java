/**
 *
 */
package com.bhge.core.scpi.rfc.zordercreate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;


/**
 * @author 212695810 This class is used to add all header data for order creation XML
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BHGEZOrderCreateRequestHeader
{
	@JacksonXmlProperty(localName = "DOC_NUMBER")
	private String documentNumber;
	@JacksonXmlProperty(localName = "DOC_TYPE")
	private String documentType;
	@JacksonXmlProperty(localName = "SALES_ORG")
	private String salesOrg;
	@JacksonXmlProperty(localName = "DISTR_CHAN")
	private String distributionChannel;
	@JacksonXmlProperty(localName = "DIVISION")
	private String division;
	@JacksonXmlProperty(localName = "COURIER")
	private String courier;
	@JacksonXmlProperty(localName = "DELIV_ACC")
	private String deliveryAccountNumber;
	@JacksonXmlProperty(localName = "PURCH_NO_C")
	private String purchaseOrderNumber;
	@JacksonXmlProperty(localName = "END_USER")
	private String endUser;
	@JacksonXmlProperty(localName = "SHIPPING_REMARKS")
	private String shippingRemarks;
	@JacksonXmlProperty(localName = "SHIP_EMAIL")
	private String shippingEmail;
	@JacksonXmlProperty(localName = "INVOICE_EMAIL")
	private String invoiceEmail;
	@JacksonXmlProperty(localName = "SOA_EMAIL")
	private String soaEmail;
	@JacksonXmlProperty(localName = "GOVT_FLAG")
	private String governmentFlag;
	@JacksonXmlProperty(localName = "NUC_FLAG")
	private String nuclearFlag;
	@JacksonXmlProperty(localName = "SHP_CHRG")
	private String shippingCharge;
	@JacksonXmlProperty(localName = "EXPORT_ADDRESS")
	private String exportAddress;
	@JacksonXmlProperty(localName = "SHIP_TO_PHONE")
	private String shiptoPhone;
	@JacksonXmlProperty(localName = "ISSHIPCOMPLETEORDER")
	private String isShipCompleteOrder;
	@JacksonXmlProperty(localName = "NUC_OPPTY_FLAG")
	private String nuclearOpptyFlag;
	@JacksonXmlProperty(localName = "REQUEST_DEL_DATE")
	private String requestDelDate;
	@JacksonXmlProperty(localName = "CURRENCY")
	private String currency;
	@JacksonXmlProperty(localName = "NO_RDD")
	private String noRdd;
	@JacksonXmlProperty(localName = "SHIP_TO_CONTACT")
	private String shiptoContact;
	@JacksonXmlProperty(localName = "DISC_CODE")
	private String discountCode;
	@JacksonXmlProperty(localName = "GOVT_BUYER")
	private String govermentBuyer;
	@JacksonXmlProperty(localName = "ALT_CONT_NUM")
	private String alternateNumber;
	@JacksonXmlProperty(localName = "ALT_CONT_NAME")
	private String alternateName;
	@JacksonXmlProperty(localName = "ALT_CONT_EMAIL")
	private String alternateEmail;
	@JacksonXmlProperty(localName = "ENDUSER_NEW_DTL")
	private String endUserNewDetails;
	@JacksonXmlProperty(localName = "CSR_HELP")
	private String csrHelp;
	@JacksonXmlProperty(localName = "ENDUSER_PO")
	private String endUserPO;

	@JacksonXmlProperty(localName = "INVOICE_CONTACT")
	private String invoiceContact;

	@JacksonXmlProperty(localName = "INVOICE_PHONE")
	private String InvoicePhone;

	@JacksonXmlProperty(localName = "SOA_CONTACT")
	private String soaContact;

	@JacksonXmlProperty(localName = "SOA_PHONE")
	private String soaPhone;


	public String getDocumentNumber()
	{
		return documentNumber;
	}

	public void setDocumentNumber(final String documentNumber)
	{
		this.documentNumber = documentNumber;
	}

	public String getDocumentType()
	{
		return documentType;
	}

	public void setDocumentType(final String documentType)
	{
		this.documentType = documentType;
	}

	public String getSalesOrg()
	{
		return salesOrg;
	}

	public void setSalesOrg(final String salesOrg)
	{
		this.salesOrg = salesOrg;
	}

	public String getDistributionChannel()
	{
		return distributionChannel;
	}

	public void setDistributionChannel(final String distributionChannel)
	{
		this.distributionChannel = distributionChannel;
	}

	public String getDivision()
	{
		return division;
	}

	public void setDivision(final String division)
	{
		this.division = division;
	}

	public String getCourier()
	{
		return courier;
	}

	public void setCourier(final String courier)
	{
		this.courier = courier;
	}

	public String getDeliveryAccountNumber()
	{
		return deliveryAccountNumber;
	}

	public void setDeliveryAccountNumber(final String deliveryAccountNumber)
	{
		this.deliveryAccountNumber = deliveryAccountNumber;
	}

	public String getPurchaseOrderNumber()
	{
		return purchaseOrderNumber;
	}

	public void setPurchaseOrderNumber(final String purchaseOrderNumber)
	{
		this.purchaseOrderNumber = purchaseOrderNumber;
	}

	public String getEndUser()
	{
		return endUser;
	}

	public void setEndUser(final String endUser)
	{
		this.endUser = endUser;
	}

	public String getShippingRemarks()
	{
		return shippingRemarks;
	}

	public void setShippingRemarks(final String shippingRemarks)
	{
		this.shippingRemarks = shippingRemarks;
	}

	public String getShippingEmail()
	{
		return shippingEmail;
	}

	public void setShippingEmail(final String shippingEmail)
	{
		this.shippingEmail = shippingEmail;
	}

	public String getInvoiceEmail()
	{
		return invoiceEmail;
	}

	public void setInvoiceEmail(final String invoiceEmail)
	{
		this.invoiceEmail = invoiceEmail;
	}

	public String getSoaEmail()
	{
		return soaEmail;
	}

	public void setSoaEmail(final String soaEmail)
	{
		this.soaEmail = soaEmail;
	}

	public String getGovernmentFlag()
	{
		return governmentFlag;
	}

	public void setGovernmentFlag(final String governmentFlag)
	{
		this.governmentFlag = governmentFlag;
	}

	public String getNuclearFlag()
	{
		return nuclearFlag;
	}

	public void setNuclearFlag(final String nuclearFlag)
	{
		this.nuclearFlag = nuclearFlag;
	}

	public String getShippingCharge()
	{
		return shippingCharge;
	}

	public void setShippingCharge(final String shippingCharge)
	{
		this.shippingCharge = shippingCharge;
	}


	public String getExportAddress()
	{
		return exportAddress;
	}

	public void setExportAddress(final String exportAddress)
	{
		this.exportAddress = exportAddress;
	}

	public String getShiptoPhone()
	{
		return shiptoPhone;
	}

	public void setShiptoPhone(final String shiptoPhone)
	{
		this.shiptoPhone = shiptoPhone;
	}

	public String getIsShipCompleteOrder()
	{
		return isShipCompleteOrder;
	}

	public void setIsShipCompleteOrder(final String isShipCompleteOrder)
	{
		this.isShipCompleteOrder = isShipCompleteOrder;
	}

	public String getNuclearOpptyFlag()
	{
		return nuclearOpptyFlag;
	}

	public void setNuclearOpptyFlag(final String nuclearOpptyFlag)
	{
		this.nuclearOpptyFlag = nuclearOpptyFlag;
	}

	public String getRequestDelDate()
	{
		return requestDelDate;
	}

	public void setRequestDelDate(final String requestDelDate)
	{
		this.requestDelDate = requestDelDate;
	}

	public String getCurrency()
	{
		return currency;
	}

	public void setCurrency(final String currency)
	{
		this.currency = currency;
	}

	public String getNoRdd()
	{
		return noRdd;
	}

	public void setNoRdd(final String noRdd)
	{
		this.noRdd = noRdd;
	}

	public String getShiptoContact()
	{
		return shiptoContact;
	}

	public void setShiptoContact(final String shiptoContact)
	{
		this.shiptoContact = shiptoContact;
	}

	public String getDiscountCode()
	{
		return discountCode;
	}

	public void setDiscountCode(final String discountCode)
	{
		this.discountCode = discountCode;
	}

	public String getGovermentBuyer()
	{
		return govermentBuyer;
	}

	public void setGovermentBuyer(final String govermentBuyer)
	{
		this.govermentBuyer = govermentBuyer;
	}

	public String getAlternateNumber()
	{
		return alternateNumber;
	}

	public void setAlternateNumber(final String alternateNumber)
	{
		this.alternateNumber = alternateNumber;
	}

	public String getAlternateName()
	{
		return alternateName;
	}

	public void setAlternateName(final String alternateName)
	{
		this.alternateName = alternateName;
	}

	public String getAlternateEmail()
	{
		return alternateEmail;
	}

	public void setAlternateEmail(final String alternateEmail)
	{
		this.alternateEmail = alternateEmail;
	}

	public String getEndUserNewDetails()
	{
		return endUserNewDetails;
	}

	public void setEndUserNewDetails(final String endUserNewDetails)
	{
		this.endUserNewDetails = endUserNewDetails;
	}

	public String getCsrHelp()
	{
		return csrHelp;
	}

	public void setCsrHelp(final String csrHelp)
	{
		this.csrHelp = csrHelp;
	}

	public String getEndUserPO()
	{
		return endUserPO;
	}

	public void setEndUserPO(final String endUserPO)
	{
		this.endUserPO = endUserPO;
	}

	public String getInvoiceContact() {
		return invoiceContact;
	}

	public void setInvoiceContact(String invoiceContact) {
		this.invoiceContact = invoiceContact;
	}

	public String getInvoicePhone() {
		return InvoicePhone;
	}

	public void setInvoicePhone(String invoicePhone) {
		InvoicePhone = invoicePhone;
	}

	public String getSoaContact() {
		return soaContact;
	}

	public void setSoaContact(String soaContact) {
		this.soaContact = soaContact;
	}

	public String getSoaPhone() {
		return soaPhone;
	}

	public void setSoaPhone(String soaPhone) {
		this.soaPhone = soaPhone;
	}
}
