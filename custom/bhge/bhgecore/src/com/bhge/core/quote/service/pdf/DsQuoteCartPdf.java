package com.bhge.core.quote.service.pdf;

        import com.bhge.core.quote.service.pdf.BHGEQuoteEntryData;
        import com.bhge.core.quote.service.pdf.DsPdfImageData;
        import de.hybris.platform.commercefacades.order.data.OrderEntryData;
        import de.hybris.platform.commercefacades.quote.data.QuoteData;
        import de.hybris.platform.commercefacades.user.data.AddressData;
        import org.junit.jupiter.api.Order;

        import jakarta.xml.bind.annotation.XmlElement;
        import jakarta.xml.bind.annotation.XmlRootElement;
        import jakarta.xml.bind.annotation.XmlTransient;
        import java.util.List;


/**
 * @author mkuma229
 *
 */
@XmlRootElement(name = "quoteData")
public class DsQuoteCartPdf
{
    private String customerProjectName;
    private String totalItems;
    private String notificationEmail;
    private String orderType;
    private String endUserIndustry;
    private String sanctionCheckQuestion;
    private String restrictedCountryCheckQuestion;
    private String restrictedPartListQuestion;
    private String warningFlagsQuestion;
    private String customerReviewCheckQuestion;
    private String isNuclearQuestion;
    private String hasRestrictedUseQuestion;
    private String requiresExportLicenseQuestion;
    private String governmentPartiesQuestion;
    private String isGovernmentParties;
    private String warningFlagText;
    private String warningFlagCheck;
    private String governmentPartiesCheck;
    private String isSanctionCheckQuestion;
    private String isRestrictedCountryCheckQuestion;
    private String isRestrictedPartListQuestion;
    private String isWarningFlagsQuestion;
    private String isCustomerReviewCheckQuestion;
    private String isNuclear;
    private String isHasRestrictedUseQuestion;
    private String isRequiresExportLicenseQuestion;
    private String currentDate;
    private String quoteID;
    private String billToAddress;
    private String billToAddressFirstName;
    private String billToAddressLastName;
    private String billToAddressLine1;
    private String billToAddressLine2;
    private String billToAddressPostalCode;
    private String billToAddressRegion;
    private String billToAddressTown;

    private String shipToAddress;
    private String shipToAddressFirstName;
    private String shipToAddressLastName;
    private String shipToAddressLine1;
    private String shipToAddressLine2;
    private String shipToAddressPostalCode;
    private String shipToAddressRegion;
    private String shipToAddressTown;

    private String endCustomerAddress;
    private String endCustomerAddressFirstName;
    private String endCustomerAddressLastName;
    private String endCustomerAddressLine1;
    private String endCustomerAddressLine2;
    private String endCustomerAddressPostalCode;
    private String endCustomerAddressRegion;
    private String endCustomerAddressTown;
    private List<BHGEQuoteEntryData> entries;
    @XmlTransient
    private DsPdfImageData attachments;



    /**
     * @return the customerProjectName
     */
    @XmlElement
    public String getCustomerProjectName()
    {
        return customerProjectName;
    }

    /**
     * @param customerProjectName
     *           the customerProjectName to set
     */
    public void setCustomerProjectName(final String customerProjectName)
    {
        this.customerProjectName = customerProjectName;
    }

    @XmlElement
    public List<BHGEQuoteEntryData> getEntries() {return entries;}
    public void setEntries(final  List<BHGEQuoteEntryData> entries){
        this.entries=entries;
    }

    @XmlElement
    public String getBillToAddress()
    {
        return billToAddress;
    }

    public void setBillToAddress(final String billToAddress)
    {
        this.billToAddress = billToAddress;
    }
    @XmlElement
    public String getBillToAddressFirstName()
    {
        return billToAddressFirstName;
    }

    public void setBillToAddressFirstName(final String billToAddressFirstName)
    {
        this.billToAddressFirstName = billToAddressFirstName;
    }

    @XmlElement
    public String getBillToAddressLastName()
    {
        return billToAddressLastName;
    }

    public void setBillToAddressLastName(final String billToAddressLastName)
    {
        this.billToAddressLastName = billToAddressLastName;
    }

    public String getBillToAddressLine1()
    {
        return billToAddressLine1;
    }

    public void setBillToAddressLine1(final String billToAddressLine1)
    {
        this.billToAddressLine1 = billToAddressLine1;
    }
    @XmlElement
    public String getBillToAddressLine2()
    {
        return billToAddressLine2;
    }

    public void setBillToAddressLine2(final String billToAddressLine2)
    {
        this.billToAddressLine2 = billToAddressLine2;
    }

    @XmlElement
    public String getBillToAddressPostalCode()
    {
        return billToAddressPostalCode;
    }

    public void setBillToAddressPostalCode(final String billToAddressPostalCode)
    {
        this.billToAddressPostalCode = billToAddressPostalCode;
    }
    @XmlElement
    public String getBillToAddressRegion()
    {
        return billToAddressRegion;
    }

    public void setBillToAddressRegion(final String billToAddressRegion)
    {
        this.billToAddressRegion = billToAddressRegion;
    }
    @XmlElement
    public String getBillToAddressTown()
    {
        return billToAddressTown;
    }

    public void setBillToAddressTown(final String billToAddressTown)
    {
        this.billToAddressTown = billToAddressTown;
    }

    @XmlElement
    public String getEndCustomerAddress()
    {
        return endCustomerAddress;
    }

    public void setEndCustomerAddress(final String endCustomerAddress)
    {
        this.endCustomerAddress = endCustomerAddress;
    }
    @XmlElement
    public String getEndCustomerAddressFirstName()
    {
        return endCustomerAddressFirstName;
    }

    public void setEndCustomerAddressFirstName(final String endCustomerAddressFirstName)
    {
        this.endCustomerAddressFirstName = endCustomerAddressFirstName;
    }

    @XmlElement
    public String getEndCustomerAddressLastName()
    {
        return endCustomerAddressLastName;
    }

    public void setEndCustomerAddressLastName(final String endCustomerAddressLastName)
    {
        this.endCustomerAddressLastName = endCustomerAddressLastName;
    }

    @XmlElement
    public String getEndCustomerAddressLine1()
    {
        return endCustomerAddressLine1;
    }

    public void setEndCustomerAddressLine1(final String endCustomerAddressLine1)
    {
        this.endCustomerAddressLine1 = endCustomerAddressLine1;
    }
    @XmlElement
    public String getEndCustomerAddressLine2()
    {
        return endCustomerAddressLine2;
    }

    public void setEndCustomerAddressLine2(final String endCustomerAddressLine2)
    {
        this.endCustomerAddressLine2 = endCustomerAddressLine2;
    }

    @XmlElement
    public String getEndCustomerAddressPostalCode()
    {
        return endCustomerAddressPostalCode;
    }

    public void setEndCustomerAddressPostalCode(final String endCustomerAddressPostalCode)
    {
        this.endCustomerAddressPostalCode = endCustomerAddressPostalCode;
    }
    @XmlElement
    public String getEndCustomerAddressRegion()
    {
        return endCustomerAddressRegion;
    }

    public void setEndCustomerAddressRegion(final String endCustomerAddressRegion)
    {
        this.endCustomerAddressRegion = endCustomerAddressRegion;
    }
    @XmlElement
    public String getEndCustomerAddressTown()
    {
        return endCustomerAddressTown;
    }

    public void setEndCustomerAddressTown(final String endCustomerAddressTown)
    {
        this.endCustomerAddressTown = endCustomerAddressTown;
    }

    @XmlElement
    public String getShipToAddress()
    {
        return shipToAddress;
    }

    public void setShipToAddress(final String shipToAddress)
    {
        this.shipToAddress = shipToAddress;
    }
    @XmlElement
    public String getShipToAddressFirstName()
    {
        return shipToAddressFirstName;
    }

    public void setShipToAddressFirstName(final String shipToAddressFirstName)
    {
        this.shipToAddressFirstName = shipToAddressFirstName;
    }

    @XmlElement
    public String getShipToAddressLastName()
    {
        return shipToAddressLastName;
    }

    public void setShipToAddressLastName(final String shipToAddressLastName)
    {
        this.shipToAddressLastName = shipToAddressLastName;
    }

    @XmlElement
    public String getShipToAddressLine1()
    {
        return shipToAddressLine1;
    }

    public void setShipToAddressLine1(final String shipToAddressLine1)
    {
        this.shipToAddressLine1 = shipToAddressLine1;
    }
    @XmlElement
    public String getShipToAddressLine2()
    {
        return shipToAddressLine2;
    }

    public void setShipToAddressLine2(final String shipToAddressLine2)
    {
        this.shipToAddressLine2 = shipToAddressLine2;
    }

    @XmlElement
    public String getShipToAddressPostalCode()
    {
        return shipToAddressPostalCode;
    }

    public void setShipToAddressPostalCode(final String shipToAddressPostalCode)
    {
        this.shipToAddressPostalCode = shipToAddressPostalCode;
    }
    @XmlElement
    public String getShipToAddressRegion()
    {
        return shipToAddressRegion;
    }

    public void setShipToAddressRegion(final String shipToAddressRegion)
    {
        this.shipToAddressRegion = shipToAddressRegion;
    }
    @XmlElement
    public String getShipToAddressTown()
    {
        return shipToAddressTown;
    }

    public void setShipToAddressTown(final String shipToAddressTown)
    {
        this.shipToAddressTown = shipToAddressTown;
    }


    /**
     * @return the orderType
     */
    @XmlElement
    public String getOrderType()
    {
        return orderType;
    }

    /**
     * @param orderType
     *           the orderType to set
     */
    public void setOrderType(final String orderType)
    {
        this.orderType = orderType;
    }

    /**
     * @return the endUserIndustry
     */
    @XmlElement
    public String getEndUserIndustry()
    {
        return endUserIndustry;
    }

    /**
     * @param endUserIndustry
     *           the endUserIndustry to set
     */
    public void setEndUserIndustry(final String endUserIndustry)
    {
        this.endUserIndustry = endUserIndustry;
    }

    /**
     * @return the billToAddress
     */


    /**
     * @return the sanctionCheckQuestion
     */
    @XmlElement
    public String getSanctionCheckQuestion()
    {
        return sanctionCheckQuestion;
    }

    /**
     * @param sanctionCheckQuestion
     *           the sanctionCheckQuestion to set
     */
    public void setSanctionCheckQuestion(final String sanctionCheckQuestion)
    {
        this.sanctionCheckQuestion = sanctionCheckQuestion;
    }

    /**
     * @return the restrictedCountryCheckQuestion
     */
    @XmlElement
    public String getRestrictedCountryCheckQuestion()
    {
        return restrictedCountryCheckQuestion;
    }

    /**
     * @param restrictedCountryCheckQuestion
     *           the restrictedCountryCheckQuestion to set
     */
    public void setRestrictedCountryCheckQuestion(final String restrictedCountryCheckQuestion)
    {
        this.restrictedCountryCheckQuestion = restrictedCountryCheckQuestion;
    }

    /**
     * @return the restrictedPartListQuestion
     */
    @XmlElement
    public String getRestrictedPartListQuestion()
    {
        return restrictedPartListQuestion;
    }

    /**
     * @param restrictedPartListQuestion
     *           the restrictedPartListQuestion to set
     */
    public void setRestrictedPartListQuestion(final String restrictedPartListQuestion)
    {
        this.restrictedPartListQuestion = restrictedPartListQuestion;
    }

    /**
     * @return the warningFlagsQuestion
     */
    @XmlElement
    public String getWarningFlagsQuestion()
    {
        return warningFlagsQuestion;
    }

    /**
     * @param warningFlagsQuestion
     *           the warningFlagsQuestion to set
     */
    public void setWarningFlagsQuestion(final String warningFlagsQuestion)
    {
        this.warningFlagsQuestion = warningFlagsQuestion;
    }

    /**
     * @return the customerReviewCheckQuestion
     */
    @XmlElement
    public String getCustomerReviewCheckQuestion()
    {
        return customerReviewCheckQuestion;
    }

    /**
     * @param customerReviewCheckQuestion
     *           the customerReviewCheckQuestion to set
     */
    public void setCustomerReviewCheckQuestion(final String customerReviewCheckQuestion)
    {
        this.customerReviewCheckQuestion = customerReviewCheckQuestion;
    }


    /**
     * @return the hasRestrictedUseQuestion
     */
    @XmlElement
    public String getHasRestrictedUseQuestion()
    {
        return hasRestrictedUseQuestion;
    }

    /**
     * @param hasRestrictedUseQuestion
     *           the hasRestrictedUseQuestion to set
     */
    public void setHasRestrictedUseQuestion(final String hasRestrictedUseQuestion)
    {
        this.hasRestrictedUseQuestion = hasRestrictedUseQuestion;
    }

    /**
     * @return the requiresExportLicenseQuestion
     */
    @XmlElement
    public String getRequiresExportLicenseQuestion()
    {
        return requiresExportLicenseQuestion;
    }

    /**
     * @param requiresExportLicenseQuestion
     *           the requiresExportLicenseQuestion to set
     */
    public void setRequiresExportLicenseQuestion(final String requiresExportLicenseQuestion)
    {
        this.requiresExportLicenseQuestion = requiresExportLicenseQuestion;
    }


    /**
     * @return the notificationEmail
     */
    @XmlElement
    public String getNotificationEmail()
    {
        return notificationEmail;
    }

    /**
     * @param notificationEmail
     *           the notificationEmail to set
     */
    public void setNotificationEmail(final String notificationEmail)
    {
        this.notificationEmail = notificationEmail;
    }

    /**
     * @return the attachments
     */
    @XmlElement
    public DsPdfImageData getAttachments()
    {
        return attachments;
    }

    /**
     * @param attachments
     *           the attachments to set
     */
    public void setAttachments(final DsPdfImageData attachments)
    {
        this.attachments = attachments;
    }

    /**
     * @return the totalItems
     */
    @XmlElement
    public String getTotalItems()
    {
        return totalItems;
    }

    /**
     * @param totalItems
     *           the totalItems to set
     */
    public void setTotalItems(final String totalItems)
    {
        this.totalItems = totalItems;
    }

    /**
     * @return the isNuclearQuestion
     */
    @XmlElement
    public String getIsNuclearQuestion()
    {
        return isNuclearQuestion;
    }

    /**
     * @param isNuclearQuestion
     *           the isNuclearQuestion to set
     */
    public void setIsNuclearQuestion(final String isNuclearQuestion)
    {
        this.isNuclearQuestion = isNuclearQuestion;
    }

    public String getIsSanctionCheckQuestion()
    {
        return isSanctionCheckQuestion;
    }

    public void setIsSanctionCheckQuestion(final String isSanctionCheckQuestion)
    {
        this.isSanctionCheckQuestion = isSanctionCheckQuestion;
    }

    public String getIsRestrictedCountryCheckQuestion()
    {
        return isRestrictedCountryCheckQuestion;
    }

    public void setIsRestrictedCountryCheckQuestion(final String isRestrictedCountryCheckQuestion)
    {
        this.isRestrictedCountryCheckQuestion = isRestrictedCountryCheckQuestion;
    }

    public String getIsRestrictedPartListQuestion()
    {
        return isRestrictedPartListQuestion;
    }

    public void setIsRestrictedPartListQuestion(final String isRestrictedPartListQuestion)
    {
        this.isRestrictedPartListQuestion = isRestrictedPartListQuestion;
    }

    public String getIsWarningFlagsQuestion()
    {
        return isWarningFlagsQuestion;
    }

    public void setIsWarningFlagsQuestion(final String isWarningFlagsQuestion)
    {
        this.isWarningFlagsQuestion = isWarningFlagsQuestion;
    }

    public String getIsCustomerReviewCheckQuestion()
    {
        return isCustomerReviewCheckQuestion;
    }

    public void setIsCustomerReviewCheckQuestion(final String isCustomerReviewCheckQuestion)
    {
        this.isCustomerReviewCheckQuestion = isCustomerReviewCheckQuestion;
    }

    public String getIsNuclear()
    {
        return isNuclear;
    }

    public void setIsNuclear(final String isNuclear)
    {
        this.isNuclear = isNuclear;
    }

    public String getIsHasRestrictedUseQuestion()
    {
        return isHasRestrictedUseQuestion;
    }

    public void setIsHasRestrictedUseQuestion(final String isHasRestrictedUseQuestion)
    {
        this.isHasRestrictedUseQuestion = isHasRestrictedUseQuestion;
    }

    public String getIsRequiresExportLicenseQuestion()
    {
        return isRequiresExportLicenseQuestion;
    }

    public void setIsRequiresExportLicenseQuestion(final String isRequiresExportLicenseQuestion)
    {
        this.isRequiresExportLicenseQuestion = isRequiresExportLicenseQuestion;
    }

    public String getCurrentDate()
    {
        return currentDate;
    }

    public void setCurrentDate(final String currentDate)
    {
        this.currentDate = currentDate;
    }

    public String getQuoteID()
    {
        return quoteID;
    }

    public void setQuoteID(final String quoteID)
    {
        this.quoteID = quoteID;
    }

    public String getGovernmentPartiesQuestion()
    {
        return governmentPartiesQuestion;
    }

    public void setGovernmentPartiesQuestion(final String governmentPartiesQuestion)
    {
        this.governmentPartiesQuestion = governmentPartiesQuestion;
    }

    public String getIsGovernmentParties()
    {
        return isGovernmentParties;
    }

    public void setIsGovernmentParties(final String isGovernmentParties)
    {
        this.isGovernmentParties = isGovernmentParties;
    }

    public String getWarningFlagText()
    {
        return warningFlagText;
    }

    public void setWarningFlagText(final String warningFlagText)
    {
        this.warningFlagText = warningFlagText;
    }

    public String getWarningFlagCheck()
    {
        return warningFlagCheck;
    }

    public void setWarningFlagCheck(final String warningFlagCheck)
    {
        this.warningFlagCheck = warningFlagCheck;
    }

    public String getGovernmentPartiesCheck()
    {
        return governmentPartiesCheck;
    }

    public void setGovernmentPartiesCheck(final String governmentPartiesCheck)
    {
        this.governmentPartiesCheck = governmentPartiesCheck;
    }

}
