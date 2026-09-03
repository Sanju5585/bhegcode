/**
 * 
 */
package com.bhge.core.scpi.rfc.orderattachment;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;

/**
 * POJO Class - Contains data elements for Order Attachment response
 * Cloud Move - Order Attachment by JACKSON 
 * @author 212778826
 *
 */

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JacksonXmlRootElement( localName = "ZGET_FILE_FROM_HYBRIS")
@JsonPropertyOrder({"FILE_DATA", "FILE_NAME", "FILE_TYPE","MESSAGE_TXT","MESSAGE_TYP"  })
public class ZHYBOrderAttachmentsResponse
{
   @JacksonXmlProperty(localName="FILE_DATA")
   private String filedata;
   
   @JacksonXmlProperty(localName="FILE_NAME")
   private String filename;
   
   @JacksonXmlProperty(localName="FILE_TYPE")
   private String filetype;
   
   @JacksonXmlProperty(localName="MESSAGE_TXT")
   private String messagetxt;
   
   @JacksonXmlProperty(localName="MESSAGE_TYP")
   private String messagetyp;

	/**
	 * @return the filedata
	 */
	public String getFiledata()
	{
		return filedata;
	}

	/**
	 * @param filedata the filedata to set
	 */
	public void setFiledata(String filedata)
	{
		this.filedata = filedata;
	}

	/**
	 * @return the filename
	 */
	public String getFilename()
	{
		return filename;
	}

	/**
	 * @param filename the filename to set
	 */
	public void setFilename(String filename)
	{
		this.filename = filename;
	}

	/**
	 * @return the filetype
	 */
	public String getFiletype()
	{
		return filetype;
	}

	/**
	 * @param filetype the filetype to set
	 */
	public void setFiletype(String filetype)
	{
		this.filetype = filetype;
	}

	/**
	 * @return the messagetxt
	 */
	public String getMessagetxt()
	{
		return messagetxt;
	}

	/**
	 * @param messagetxt the messagetxt to set
	 */
	public void setMessagetxt(String messagetxt)
	{
		this.messagetxt = messagetxt;
	}

	/**
	 * @return the messagetyp
	 */
	public String getMessagetyp()
	{
		return messagetyp;
	}

	/**
	 * @param messagetyp the messagetyp to set
	 */
	public void setMessagetyp(String messagetyp)
	{
		this.messagetyp = messagetyp;
	}
   
   
}
