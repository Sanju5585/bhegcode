package com.bhge.core.scpi.rfc.mse.create.req;

import com.bhge.core.scpi.rfc.mse.MSEMessageTable;
import com.bhge.core.scpi.rfc.mse.MyEquipments;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement(localName ="ZHYB_RMA_MEL_CREATE")
@JsonPropertyOrder({"CP_FLAG", "CUSTOMER", "ET_MYEQUIPMENT", "T_MESSAGETABLE"})

public class ZHYBRmaMSECreateReq {

    @JacksonXmlProperty(localName="CP_FLAG")
    private String cpFlag;

    @JacksonXmlProperty(localName="CUSTOMER")
    private String customer;

    @JacksonXmlProperty(localName="ET_MYEQUIPMENT")
    private MyEquipments myequipment;

    @JacksonXmlProperty(localName="T_MESSAGETABLE")
    private MSEMessageTable messageTable;

    public String getCpFlag() {
        return cpFlag;
    }

    public void setCpFlag(String cpFlag) {
        this.cpFlag = cpFlag;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public MyEquipments getMyequipment() {
        this.myequipment =  myequipment == null ? new MyEquipments() : myequipment;
        return myequipment;
    }

    public void setMyequipment(MyEquipments myequipment) {
        this.myequipment = myequipment;
    }

    public MSEMessageTable getMessageTable() {
        this.messageTable =  messageTable == null ? new MSEMessageTable() : messageTable;
        return messageTable;
    }

    public void setMessageTable(MSEMessageTable messageTable) {
        this.messageTable = messageTable;
    }

}
