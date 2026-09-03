package com.bhge.core.scpi.rfc.orderattachmentdownload;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;

import java.util.LinkedList;
import java.util.List;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName ="item")public class ZOrderAttachmentDownloadRequest$Item {


    private List<ZOrderAttachmentDownloadRequest$Item> items;

    public ZOrderAttachmentDownloadRequest$Item() {
        this.items = new LinkedList<>();
    }

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<ZOrderAttachmentDownloadRequest$Item> getItems() {

        return this.items;
    }
    public void setItems(List<ZOrderAttachmentDownloadRequest$Item> items) {
        this.items = items;
    }
   
    // Others
    @JacksonXmlProperty(localName = "VBELN")
    private String vbeln;
    
    @JacksonXmlProperty(localName = "FLAG")
    private String flag;

    // Error Messages attributes
    @JacksonXmlProperty(localName = "TYPE")
    private String type;

    @JacksonXmlProperty(localName = "ID")
    private String id;

    @JacksonXmlProperty(localName = "NUMBER")
    private String number;

    @JacksonXmlProperty(localName = "MESSAGE")
    private String message;

    @JacksonXmlProperty(localName = "LOG_NO")
    private String log_no;

    @JacksonXmlProperty(localName = "LOG_MSG_NO")
    private String log_msg_no;

    @JacksonXmlProperty(localName = "MESSAGE_V1")
    private String message_v1;

    @JacksonXmlProperty(localName = "MESSAGE_V2")
    private String message_v2;

    @JacksonXmlProperty(localName = "MESSAGE_V3")
    private String message_v3;

    @JacksonXmlProperty(localName = "MESSAGE_V4")
    private String message_v4;

    @JacksonXmlProperty(localName = "PARAMETER")
    private String parameter;

    @JacksonXmlProperty(localName = "ROW")
    private String row;

    @JacksonXmlProperty(localName = "FIELD")
    private String field;

    @JacksonXmlProperty(localName = "SYSTEM")
    private String system;

	/**
	 * @return the vbeln
	 */
	public String getVbeln()
	{
		return vbeln;
	}

	/**
	 * @param vbeln the vbeln to set
	 */
	public void setVbeln(String vbeln)
	{
		this.vbeln = vbeln;
	}

	/**
	 * @return the flag
	 */
	public String getFlag()
	{
		return flag;
	}

	/**
	 * @param flag the flag to set
	 */
	public void setFlag(String flag)
	{
		this.flag = flag;
	}

	/**
	 * @return the type
	 */
	public String getType()
	{
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(String type)
	{
		this.type = type;
	}

	/**
	 * @return the id
	 */
	public String getId()
	{
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id)
	{
		this.id = id;
	}

	/**
	 * @return the number
	 */
	public String getNumber()
	{
		return number;
	}

	/**
	 * @param number the number to set
	 */
	public void setNumber(String number)
	{
		this.number = number;
	}

	/**
	 * @return the message
	 */
	public String getMessage()
	{
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message)
	{
		this.message = message;
	}

	/**
	 * @return the log_no
	 */
	public String getLog_no()
	{
		return log_no;
	}

	/**
	 * @param log_no the log_no to set
	 */
	public void setLog_no(String log_no)
	{
		this.log_no = log_no;
	}

	/**
	 * @return the log_msg_no
	 */
	public String getLog_msg_no()
	{
		return log_msg_no;
	}

	/**
	 * @param log_msg_no the log_msg_no to set
	 */
	public void setLog_msg_no(String log_msg_no)
	{
		this.log_msg_no = log_msg_no;
	}

	/**
	 * @return the message_v1
	 */
	public String getMessage_v1()
	{
		return message_v1;
	}

	/**
	 * @param message_v1 the message_v1 to set
	 */
	public void setMessage_v1(String message_v1)
	{
		this.message_v1 = message_v1;
	}

	/**
	 * @return the message_v2
	 */
	public String getMessage_v2()
	{
		return message_v2;
	}

	/**
	 * @param message_v2 the message_v2 to set
	 */
	public void setMessage_v2(String message_v2)
	{
		this.message_v2 = message_v2;
	}

	/**
	 * @return the message_v3
	 */
	public String getMessage_v3()
	{
		return message_v3;
	}

	/**
	 * @param message_v3 the message_v3 to set
	 */
	public void setMessage_v3(String message_v3)
	{
		this.message_v3 = message_v3;
	}

	/**
	 * @return the message_v4
	 */
	public String getMessage_v4()
	{
		return message_v4;
	}

	/**
	 * @param message_v4 the message_v4 to set
	 */
	public void setMessage_v4(String message_v4)
	{
		this.message_v4 = message_v4;
	}

	/**
	 * @return the parameter
	 */
	public String getParameter()
	{
		return parameter;
	}

	/**
	 * @param parameter the parameter to set
	 */
	public void setParameter(String parameter)
	{
		this.parameter = parameter;
	}

	/**
	 * @return the row
	 */
	public String getRow()
	{
		return row;
	}

	/**
	 * @param row the row to set
	 */
	public void setRow(String row)
	{
		this.row = row;
	}

	/**
	 * @return the field
	 */
	public String getField()
	{
		return field;
	}

	/**
	 * @param field the field to set
	 */
	public void setField(String field)
	{
		this.field = field;
	}

	/**
	 * @return the system
	 */
	public String getSystem()
	{
		return system;
	}

	/**
	 * @param system the system to set
	 */
	public void setSystem(String system)
	{
		this.system = system;
	}

    
    
    
}
