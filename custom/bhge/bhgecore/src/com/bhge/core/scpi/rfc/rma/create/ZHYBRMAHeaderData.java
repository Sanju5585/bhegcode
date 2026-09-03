/**
 * 
 */
package com.bhge.core.scpi.rfc.rma.create;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author 212722447
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ZHYBRMAHeaderData
{

	@JsonProperty(value = "NOTIF_TYPE")
	private String notifyType;
	@JsonProperty(value = "CUSTOMER")
	private String customer;
	@JsonProperty(value = "SALES_AREA_ORG")
	private String salesAreaOrg;
	@JsonProperty(value = "DIST_CHANNEL")
	private String distChannel;
	@JsonProperty(value = "DIVISION")
	private String division;
	@JsonProperty(value = "REPAIR_PLANT")
	private String repairPlant;


	/**
	 * @return the notifyType
	 */
	public String getNotifyType()
	{
		return notifyType;
	}
	/**
	 * @param notifyType the notifyType to set
	 */
	public void setNotifyType(String notifyType)
	{
		this.notifyType = notifyType;
	}
	/**
	 * @return the customer
	 */
	public String getCustomer()
	{
		return customer;
	}
	/**
	 * @param customer the customer to set
	 */
	public void setCustomer(String customer)
	{
		this.customer = customer;
	}
	/**
	 * @return the salesAreaOrg
	 */
	public String getSalesAreaOrg()
	{
		return salesAreaOrg;
	}
	/**
	 * @param salesAreaOrg the salesAreaOrg to set
	 */
	public void setSalesAreaOrg(String salesAreaOrg)
	{
		this.salesAreaOrg = salesAreaOrg;
	}
	/**
	 * @return the distChannel
	 */
	public String getDistChannel()
	{
		return distChannel;
	}
	/**
	 * @param distChannel the distChannel to set
	 */
	public void setDistChannel(String distChannel)
	{
		this.distChannel = distChannel;
	}
	/**
	 * @return the division
	 */
	public String getDivision()
	{
		return division;
	}
	/**
	 * @param division the division to set
	 */
	public void setDivision(String division)
	{
		this.division = division;
	}
	/**
	 * @return the repairPlant
	 */
	public String getRepairPlant()
	{
		return repairPlant;
	}
	/**
	 * @param repairPlant the repairPlant to set
	 */
	public void setRepairPlant(String repairPlant)
	{
		this.repairPlant = repairPlant;
	}
	/**
	 * @return the deliveryPt
	 */
	public String getDeliveryPt()
	{
		return deliveryPt;
	}
	/**
	 * @param deliveryPt the deliveryPt to set
	 */
	public void setDeliveryPt(String deliveryPt)
	{
		this.deliveryPt = deliveryPt;
	}
	/**
	 * @return the deliveryAccName
	 */
	public String getDeliveryAccName()
	{
		return deliveryAccName;
	}
	/**
	 * @param deliveryAccName the deliveryAccName to set
	 */
	public void setDeliveryAccName(String deliveryAccName)
	{
		this.deliveryAccName = deliveryAccName;
	}
	/**
	 * @return the returnToSite
	 */
	public String getReturnToSite()
	{
		return returnToSite;
	}
	/**
	 * @param returnToSite the returnToSite to set
	 */
	public void setReturnToSite(String returnToSite)
	{
		this.returnToSite = returnToSite;
	}
	/**
	 * @return the shipToParty
	 */
	public String getShipToParty()
	{
		return shipToParty;
	}
	/**
	 * @param shipToParty the shipToParty to set
	 */
	public void setShipToParty(String shipToParty)
	{
		this.shipToParty = shipToParty;
	}
	/**
	 * @return the billToParty
	 */
	public String getBillToParty()
	{
		return billToParty;
	}
	/**
	 * @param billToParty the billToParty to set
	 */
	public void setBillToParty(String billToParty)
	{
		this.billToParty = billToParty;
	}
	/**
	 * @return the shipToAdd
	 */
	public String getShipToAdd()
	{
		return shipToAdd;
	}
	/**
	 * @param shipToAdd the shipToAdd to set
	 */
	public void setShipToAdd(String shipToAdd)
	{
		this.shipToAdd = shipToAdd;
	}
	/**
	 * @return the shipConact1Name
	 */
	public String getShipConact1Name()
	{
		return shipConact1Name;
	}
	/**
	 * @param shipConact1Name the shipConact1Name to set
	 */
	public void setShipConact1Name(String shipConact1Name)
	{
		this.shipConact1Name = shipConact1Name;
	}
	/**
	 * @return the shipConact1Num
	 */
	public String getShipConact1Num()
	{
		return shipConact1Num;
	}
	/**
	 * @param shipConact1Num the shipConact1Num to set
	 */
	public void setShipConact1Num(String shipConact1Num)
	{
		this.shipConact1Num = shipConact1Num;
	}
	/**
	 * @return the shipConact2Name
	 */
	public String getShipConact2Name()
	{
		return shipConact2Name;
	}
	/**
	 * @param shipConact2Name the shipConact2Name to set
	 */
	public void setShipConact2Name(String shipConact2Name)
	{
		this.shipConact2Name = shipConact2Name;
	}
	/**
	 * @return the shipConact2Num
	 */
	public String getShipConact2Num()
	{
		return shipConact2Num;
	}
	/**
	 * @param shipConact2Num the shipConact2Num to set
	 */
	public void setShipConact2Num(String shipConact2Num)
	{
		this.shipConact2Num = shipConact2Num;
	}
	/**
	 * @return the endUserNo
	 */
	public String getEndUserNo()
	{
		return endUserNo;
	}
	/**
	 * @param endUserNo the endUserNo to set
	 */
	public void setEndUserNo(String endUserNo)
	{
		this.endUserNo = endUserNo;
	}
	/**
	 * @return the endCustRefNum
	 */
	public String getEndCustRefNum()
	{
		return endCustRefNum;
	}
	/**
	 * @param endCustRefNum the endCustRefNum to set
	 */
	public void setEndCustRefNum(String endCustRefNum)
	{
		this.endCustRefNum = endCustRefNum;
	}
	/**
	 * @return the endCustDetails
	 */
	public String getEndCustDetails()
	{
		return endCustDetails;
	}
	/**
	 * @param endCustDetails the endCustDetails to set
	 */
	public void setEndCustDetails(String endCustDetails)
	{
		this.endCustDetails = endCustDetails;
	}
	/**
	 * @return the expostAddText
	 */
	public String getExpostAddText()
	{
		return expostAddText;
	}
	/**
	 * @param expostAddText the expostAddText to set
	 */
	public void setExpostAddText(String expostAddText)
	{
		this.expostAddText = expostAddText;
	}
	/**
	 * @return the shippingMail
	 */
	public String getShippingMail()
	{
		return shippingMail;
	}
	/**
	 * @param shippingMail the shippingMail to set
	 */
	public void setShippingMail(String shippingMail)
	{
		this.shippingMail = shippingMail;
	}
	/**
	 * @return the invoiceMail
	 */
	public String getInvoiceMail()
	{
		return invoiceMail;
	}
	/**
	 * @param invoiceMail the invoiceMail to set
	 */
	public void setInvoiceMail(String invoiceMail)
	{
		this.invoiceMail = invoiceMail;
	}
	/**
	 * @return the orderConfMail
	 */
	public String getOrderConfMail()
	{
		return orderConfMail;
	}
	/**
	 * @param orderConfMail the orderConfMail to set
	 */
	public void setOrderConfMail(String orderConfMail)
	{
		this.orderConfMail = orderConfMail;
	}
	/**
	 * @return the purchaseOrdNum
	 */
	public String getPurchaseOrdNum()
	{
		return purchaseOrdNum;
	}
	/**
	 * @param purchaseOrdNum the purchaseOrdNum to set
	 */
	public void setPurchaseOrdNum(String purchaseOrdNum)
	{
		this.purchaseOrdNum = purchaseOrdNum;
	}
	/**
	 * @return the originalSo
	 */
	public String getOriginalSo()
	{
		return originalSo;
	}
	/**
	 * @param originalSo the originalSo to set
	 */
	public void setOriginalSo(String originalSo)
	{
		this.originalSo = originalSo;
	}
	/**
	 * @return the originalPo
	 */
	public String getOriginalPo()
	{
		return originalPo;
	}
	/**
	 * @param originalPo the originalPo to set
	 */
	public void setOriginalPo(String originalPo)
	{
		this.originalPo = originalPo;
	}
	/**
	 * @return the originalInv
	 */
	public String getOriginalInv()
	{
		return originalInv;
	}
	/**
	 * @param originalInv the originalInv to set
	 */
	public void setOriginalInv(String originalInv)
	{
		this.originalInv = originalInv;
	}
	/**
	 * @return the headerDeliveryDate
	 */
	public String getHeaderDeliveryDate()
	{
		return headerDeliveryDate;
	}
	/**
	 * @param headerDeliveryDate the headerDeliveryDate to set
	 */
	public void setHeaderDeliveryDate(String headerDeliveryDate)
	{
		this.headerDeliveryDate = headerDeliveryDate;
	}
	/**
	 * @return the alternateContMail
	 */
	public String getAlternateContMail()
	{
		return alternateContMail;
	}
	/**
	 * @param alternateContMail the alternateContMail to set
	 */
	public void setAlternateContMail(String alternateContMail)
	{
		this.alternateContMail = alternateContMail;
	}
	/**
	 * @return the returnCredit
	 */
	public String getReturnCredit()
	{
		return returnCredit;
	}
	/**
	 * @param returnCredit the returnCredit to set
	 */
	public void setReturnCredit(String returnCredit)
	{
		this.returnCredit = returnCredit;
	}
	/**
	 * @return the isGovernment
	 */
	public String getIsGovernment()
	{
		return isGovernment;
	}
	/**
	 * @param isGovernment the isGovernment to set
	 */
	public void setIsGovernment(String isGovernment)
	{
		this.isGovernment = isGovernment;
	}
	/**
	 * @return the isGovBuyer
	 */
	public String getIsGovBuyer()
	{
		return isGovBuyer;
	}
	/**
	 * @param isGovBuyer the isGovBuyer to set
	 */
	public void setIsGovBuyer(String isGovBuyer)
	{
		this.isGovBuyer = isGovBuyer;
	}
	/**
	 * @return the usTaxExemptId
	 */
	public String getUsTaxExemptId()
	{
		return usTaxExemptId;
	}
	/**
	 * @param usTaxExemptId the usTaxExemptId to set
	 */
	public void setUsTaxExemptId(String usTaxExemptId)
	{
		this.usTaxExemptId = usTaxExemptId;
	}
	/**
	 * @return the priorityReq
	 */
	public String getPriorityReq()
	{
		return priorityReq;
	}
	/**
	 * @param priorityReq the priorityReq to set
	 */
	public void setPriorityReq(String priorityReq)
	{
		this.priorityReq = priorityReq;
	}
	/**
	 * @return the carrierName
	 */
	public String getCarrierName()
	{
		return carrierName;
	}
	/**
	 * @param carrierName the carrierName to set
	 */
	public void setCarrierName(String carrierName)
	{
		this.carrierName = carrierName;
	}
	/**
	 * @return the shippingMethod
	 */
	public String getShippingMethod()
	{
		return shippingMethod;
	}
	/**
	 * @param shippingMethod the shippingMethod to set
	 */
	public void setShippingMethod(String shippingMethod)
	{
		this.shippingMethod = shippingMethod;
	}
	/**
	 * @return the userComments
	 */
	public String getUserComments()
	{
		return userComments;
	}
	/**
	 * @param userComments the userComments to set
	 */
	public void setUserComments(String userComments)
	{
		this.userComments = userComments;
	}
	/**
	 * @return the nuclearOrder
	 */
	public String getNuclearOrder()
	{
		return nuclearOrder;
	}
	/**
	 * @param nuclearOrder the nuclearOrder to set
	 */
	public void setNuclearOrder(String nuclearOrder)
	{
		this.nuclearOrder = nuclearOrder;
	}
	/**
	 * @return the exportOrder
	 */
	public String getExportOrder()
	{
		return exportOrder;
	}
	/**
	 * @param exportOrder the exportOrder to set
	 */
	public void setExportOrder(String exportOrder)
	{
		this.exportOrder = exportOrder;
	}
	/**
	 * @return the csrFlag
	 */
	public String getCsrFlag()
	{
		return csrFlag;
	}
	/**
	 * @param csrFlag the csrFlag to set
	 */
	public void setCsrFlag(String csrFlag)
	{
		this.csrFlag = csrFlag;
	}
	/**
	 * @return the technicalFlag
	 */
	public String getTechnicalFlag()
	{
		return technicalFlag;
	}
	/**
	 * @param technicalFlag the technicalFlag to set
	 */
	public void setTechnicalFlag(String technicalFlag)
	{
		this.technicalFlag = technicalFlag;
	}
	/**
	 * @return the hazardousPart
	 */
	public String getHazardousPart()
	{
		return hazardousPart;
	}
	/**
	 * @param hazardousPart the hazardousPart to set
	 */
	public void setHazardousPart(String hazardousPart)
	{
		this.hazardousPart = hazardousPart;
	}
	/**
	 * @return the csrHelpText
	 */
	public String getCsrHelpText()
	{
		return csrHelpText;
	}
	/**
	 * @param csrHelpText the csrHelpText to set
	 */
	public void setCsrHelpText(String csrHelpText)
	{
		this.csrHelpText = csrHelpText;
	}
	@JsonProperty(value = "DELIVERY_PT")
	private String deliveryPt;
	@JsonProperty(value = "DELIVERY_ACC_NUM")
	private String deliveryAccName;
	@JsonProperty(value = "RETUN_TO_SITE")
	private String returnToSite;
	@JsonProperty(value = "SHIP_TO_PARTY")
	private String shipToParty;
	@JsonProperty(value = "BILL_TO_PARTY")
	private String billToParty;
	@JsonProperty(value = "PAYER")
	private String payer;
	@JsonProperty(value = "SHIP_TO_ADDR")
	private String shipToAdd;
	@JsonProperty(value = "SHIPCONTACT1NAME")
	private String shipConact1Name;
	@JsonProperty(value = "SHIPCONTACT1NUM")
	private String shipConact1Num;
	@JsonProperty(value = "SHIPCONTACT2NAME")
	private String shipConact2Name;
	@JsonProperty(value = "SHIPCONTACT2NUM")
	private String shipConact2Num;
	@JsonProperty(value = "END_USER_PO")
	private String endUserNo;
	@JsonProperty(value = "END_CUST_REF_NUM")
	private String endCustRefNum;
	@JsonProperty(value = "END_CUST_DETAILS")
	private String endCustDetails;
	@JsonProperty(value = "EXPORT_ADD_TEXT")
	private String expostAddText;
	@JsonProperty(value = "SHIPPING_MAIL")
	private String shippingMail;
	@JsonProperty(value = "INVOICE_MAIL")
	private String invoiceMail;
	@JsonProperty(value = "ORDER_CONF_MAIL")
	private String orderConfMail;
	@JsonProperty(value = "PURCHASE_ORD_NUM")
	private String purchaseOrdNum;
	@JsonProperty(value = "ORIGINAL_SO")
	private String originalSo;
	@JsonProperty(value = "ORIGINAL_PO")
	private String originalPo;
	@JsonProperty(value = "ORIGINAL_INV")
	private String originalInv;
	@JsonProperty(value = "HEADER_DELIVERY_DATE")
	private String headerDeliveryDate;
	@JsonProperty(value = "ALTERNATE_CONT_MAIL")
	private String alternateContMail;
	@JsonProperty(value = "RETURN_CREDIT")
	private String returnCredit;
	@JsonProperty(value = "ISGOVERNMENT")
	private String isGovernment;
	@JsonProperty(value = "IS_GOV_BUYER")
	private String isGovBuyer;
	@JsonProperty(value = "USTAXEXEMPT_ID")
	private String usTaxExemptId;
	@JsonProperty(value = "PRIORITY_REQ")
	private String priorityReq;
	@JsonProperty(value = "CARRIERNAME")
	private String carrierName;
	@JsonProperty(value = "SHIPPING_METHOD")
	private String shippingMethod;
	@JsonProperty(value = "USERCOMMENTS")
	private String userComments;
	@JsonProperty(value = "NUCLEAR_ORDER")
	private String nuclearOrder;
	@JsonProperty(value = "EXPORT_ORDER")
	private String exportOrder;
	@JsonProperty(value = "CSR_FLAG")
	private String csrFlag;
	@JsonProperty(value = "TECHNICAL_FLAG")
	private String technicalFlag;
	@JsonProperty(value = "HAZARDOUS_PART")
	private String hazardousPart;
	@JsonProperty(value = "CSR_HELP_TEXT")
	private String csrHelpText;

	@JsonProperty(value = "INVOICECONTACTNAME")
	private String invoiceContactName;
	@JsonProperty(value = "INVOICECONTACT1NUM")
	private String invoiceContact1Num;
	@JsonProperty(value = "ORDER_CONF_NAME")
	private String orderConfirmationName;
	@JsonProperty(value = "ORDER_CONF_PHONE")
	private String orderConfirmationNum;

	public String getInvoiceContactName() {
		return invoiceContactName;
	}

	public void setInvoiceContactName(String invoiceContactName) {
		this.invoiceContactName = invoiceContactName;
	}

	public String getInvoiceContact1Num() {
		return invoiceContact1Num;
	}

	public void setInvoiceContact1Num(String invoiceContact1Num) {
		this.invoiceContact1Num = invoiceContact1Num;
	}

	public String getOrderConfirmationName() {
		return orderConfirmationName;
	}

	public void setOrderConfirmationName(String orderConfirmationName) {
		this.orderConfirmationName = orderConfirmationName;
	}

	public String getOrderConfirmationNum() {
		return orderConfirmationNum;
	}

	public void setOrderConfirmationNum(String orderConfirmationNum) {
		this.orderConfirmationNum = orderConfirmationNum;
	}
	
	public String getPayer() {
		return payer;
	}
	public void setPayer(String payer) {
		this.payer = payer;
	}
}
