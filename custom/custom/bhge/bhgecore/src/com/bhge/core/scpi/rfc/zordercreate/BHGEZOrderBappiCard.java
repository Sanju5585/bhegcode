package com.bhge.core.scpi.rfc.zordercreate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;

import java.math.BigDecimal;
import java.sql.Time;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGEZOrderBappiCard {

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
    private List<BHGEZOrderBappiCard> items;

    public List<BHGEZOrderBappiCard> getItems() {
        return items;
    }

    public void setItems(List<BHGEZOrderBappiCard> items) {
        this.items = items;
    }

    public BHGEZOrderBappiCard() {
        this.items = new LinkedList<>();
    }

    //Item table fields
    @JacksonXmlProperty(localName = "CC_TYPE")
    private String ccType;

    @JacksonXmlProperty(localName = "CC_NUMBER")
    private String ccNumber;

    @JacksonXmlProperty(localName = "CC_VALID_T")
    private String ccValidTru;

    @JacksonXmlProperty(localName = "CC_NAME")
    private String ccName;

    @JacksonXmlProperty(localName = "BILLAMOUNT")
    private Float billAmount;

    @JacksonXmlProperty(localName = "AUTH_FLAG")
    private String authFlag;

    @JacksonXmlProperty(localName = "AUTHAMOUNT")
    private Float authAmount;

    @JacksonXmlProperty(localName = "CURRENCY")
    private BigDecimal currency;

    @JacksonXmlProperty(localName = "CURR_ISO")
    private String currUISO;

    @JacksonXmlProperty(localName = "AUTH_DATE")
    private Date authDate;

    @JacksonXmlProperty(localName = "AUTH_TIME")
    private Time authTime;

    @JacksonXmlProperty(localName = "AUTH_CC_NO")
    private String authCCNo;

    @JacksonXmlProperty(localName = "AUTH_REFNO")
    private String authRef;

    @JacksonXmlProperty(localName = "CC_REACT")
    private String ccReact;

    @JacksonXmlProperty(localName = "CC_RE_AMOUNT")
    private BigDecimal ccReAmt;

    @JacksonXmlProperty(localName = "GL_ACCOUNT")
    private String glAmt;

    @JacksonXmlProperty(localName = "CC_STAT_EX")
    private String ccStatEx;

    @JacksonXmlProperty(localName = "CC_REACT_T")
    private String ccReactT;

    @JacksonXmlProperty(localName = "VIRT_CARD")
    private String virtCard;

    @JacksonXmlProperty(localName = "MERCHIDCL")
    private String merchatId;

    @JacksonXmlProperty(localName = "PRE_AUTH")
    private String preAuth;

    @JacksonXmlProperty(localName = "CC_SEQ_NO")
    private String ccSeqNo;

    @JacksonXmlProperty(localName = "AMOUNTCHAN")
    private String amtChan;

    @JacksonXmlProperty(localName = "AUTHORTYPE")
    private String authorType;

    @JacksonXmlProperty(localName = "DATAORIGIN")
    private String dataOrg;

    @JacksonXmlProperty(localName = "RADRCHECK1")
    private String rCheck1;

    @JacksonXmlProperty(localName = "RADRCHECK2")
    private String rCheck2;

    @JacksonXmlProperty(localName = "RADRCHECK3")
    private String rCheck3;

    @JacksonXmlProperty(localName = "RCARDCHECK")
    private String rCheck;

    @JacksonXmlProperty(localName = "CC_LIMITED")
    private String ccLtd;

    @JacksonXmlProperty(localName = "CC_VERIF_VALUE")
    private String ccVerifVal;

    @JacksonXmlProperty(localName = "CC_CTRL_FIELD")
    private String ccCTRField;

    @JacksonXmlProperty(localName = "CC_IN_USE_ST")
    private String ccInUseSt;

    public String getCcType() {
        return ccType;
    }

    public void setCcType(String ccType) {
        this.ccType = ccType;
    }

    public String getCcNumber() {
        return ccNumber;
    }

    public void setCcNumber(String ccNumber) {
        this.ccNumber = ccNumber;
    }

    public String getCcValidTru() {
        return ccValidTru;
    }

    public void setCcValidTru(String ccValidTru) {
        this.ccValidTru = ccValidTru;
    }

    public String getCcName() {
        return ccName;
    }

    public void setCcName(String ccName) {
        this.ccName = ccName;
    }

    public Float getBillAmount() {
        return billAmount;
    }

    public void setBillAmount(Float billAmount) {
        this.billAmount = billAmount;
    }

    public String getAuthFlag() {
        return authFlag;
    }

    public void setAuthFlag(String authFlag) {
        this.authFlag = authFlag;
    }

    public Float getAuthAmount() {
        return authAmount;
    }

    public void setAuthAmount(Float authAmount) {
        this.authAmount = authAmount;
    }

    public BigDecimal getCurrency() {
        return currency;
    }

    public void setCurrency(BigDecimal currency) {
        this.currency = currency;
    }

    public String getCurrUISO() {
        return currUISO;
    }

    public void setCurrUISO(String currUISO) {
        this.currUISO = currUISO;
    }

    public Date getAuthDate() {
        return authDate;
    }

    public void setAuthDate(Date authDate) {
        this.authDate = authDate;
    }

    public Time getAuthTime() {
        return authTime;
    }

    public void setAuthTime(Time authTime) {
        this.authTime = authTime;
    }

    public String getAuthCCNo() {
        return authCCNo;
    }

    public void setAuthCCNo(String authCCNo) {
        this.authCCNo = authCCNo;
    }

    public String getAuthRef() {
        return authRef;
    }

    public void setAuthRef(String authRef) {
        this.authRef = authRef;
    }

    public String getCcReact() {
        return ccReact;
    }

    public void setCcReact(String ccReact) {
        this.ccReact = ccReact;
    }

    public BigDecimal getCcReAmt() {
        return ccReAmt;
    }

    public void setCcReAmt(BigDecimal ccReAmt) {
        this.ccReAmt = ccReAmt;
    }

    public String getGlAmt() {
        return glAmt;
    }

    public void setGlAmt(String glAmt) {
        this.glAmt = glAmt;
    }

    public String getCcStatEx() {
        return ccStatEx;
    }

    public void setCcStatEx(String ccStatEx) {
        this.ccStatEx = ccStatEx;
    }

    public String getCcReactT() {
        return ccReactT;
    }

    public void setCcReactT(String ccReactT) {
        this.ccReactT = ccReactT;
    }

    public String getVirtCard() {
        return virtCard;
    }

    public void setVirtCard(String virtCard) {
        this.virtCard = virtCard;
    }

    public String getMerchatId() {
        return merchatId;
    }

    public void setMerchatId(String merchatId) {
        this.merchatId = merchatId;
    }

    public String getPreAuth() {
        return preAuth;
    }

    public void setPreAuth(String preAuth) {
        this.preAuth = preAuth;
    }

    public String getCcSeqNo() {
        return ccSeqNo;
    }

    public void setCcSeqNo(String ccSeqNo) {
        this.ccSeqNo = ccSeqNo;
    }

    public String getAmtChan() {
        return amtChan;
    }

    public void setAmtChan(String amtChan) {
        this.amtChan = amtChan;
    }

    public String getAuthorType() {
        return authorType;
    }

    public void setAuthorType(String authorType) {
        this.authorType = authorType;
    }

    public String getDataOrg() {
        return dataOrg;
    }

    public void setDataOrg(String dataOrg) {
        this.dataOrg = dataOrg;
    }

    public String getrCheck1() {
        return rCheck1;
    }

    public void setrCheck1(String rCheck1) {
        this.rCheck1 = rCheck1;
    }

    public String getrCheck2() {
        return rCheck2;
    }

    public void setrCheck2(String rCheck2) {
        this.rCheck2 = rCheck2;
    }

    public String getrCheck3() {
        return rCheck3;
    }

    public void setrCheck3(String rCheck3) {
        this.rCheck3 = rCheck3;
    }

    public String getrCheck() {
        return rCheck;
    }

    public void setrCheck(String rCheck) {
        this.rCheck = rCheck;
    }

    public String getCcLtd() {
        return ccLtd;
    }

    public void setCcLtd(String ccLtd) {
        this.ccLtd = ccLtd;
    }

    public String getCcVerifVal() {
        return ccVerifVal;
    }

    public void setCcVerifVal(String ccVerifVal) {
        this.ccVerifVal = ccVerifVal;
    }

    public String getCcCTRField() {
        return ccCTRField;
    }

    public void setCcCTRField(String ccCTRField) {
        this.ccCTRField = ccCTRField;
    }

    public String getCcInUseSt() {
        return ccInUseSt;
    }

    public void setCcInUseSt(String ccInUseSt) {
        this.ccInUseSt = ccInUseSt;
    }
}
