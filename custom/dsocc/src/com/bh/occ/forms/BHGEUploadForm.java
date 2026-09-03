/**
 * 
 */
package com.bh.occ.forms;

/**
 * @author deepakde
 *
 */
import org.springframework.web.multipart.MultipartFile;


public class BHGEUploadForm
{
	private MultipartFile filetoUpload;

	public MultipartFile getFiletoUpload()
	{
		return filetoUpload;
	}

	public void setFiletoUpload(final MultipartFile filetoUpload)
	{
		this.filetoUpload = filetoUpload;
	}
}