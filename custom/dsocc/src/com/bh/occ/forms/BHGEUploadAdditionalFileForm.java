package com.bh.occ.forms;

import org.springframework.web.multipart.MultipartFile;


/**
 * @author 1185137
 *
 */
public class BHGEUploadAdditionalFileForm
{
	private MultipartFile file;

	private Integer entryNumber;

	private String returnLocation;

	/**
	 * @return the file
	 */
	public MultipartFile getFile()
	{
		return file;
	}

	/**
	 * @param file
	 *           the file to set
	 */
	public void setFile(final MultipartFile file)
	{
		this.file = file;
	}

	/**
	 * @return the entryNumber
	 */
	public Integer getEntryNumber()
	{
		return entryNumber;
	}

	/**
	 * @param entryNumber
	 *           the entryNumber to set
	 */
	public void setEntryNumber(final Integer entryNumber)
	{
		this.entryNumber = entryNumber;
	}

	/**
	 * @return the returnLocation
	 */
	public String getReturnLocation()
	{
		return returnLocation;
	}

	/**
	 * @param returnLocation
	 *           the returnLocation to set
	 */
	public void setReturnLocation(final String returnLocation)
	{
		this.returnLocation = returnLocation;
	}
}