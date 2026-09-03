package com.bhge.core.dataimport.service;

import java.io.File;

public interface BHGEBlobDataImportService {

	/**
	 * Read from blob.
	 *
	 * @param fileNameTobeRead the file name tobe read
	 * @param fileExtension the file extension
	 * @param containerName the containername
	 * @return the file
	 */
	public File readFromBlob(String fileNameTobeRead,String fileExtension,String containerName);

	/**
	 * Write file to blob.
	 *
	 * @param fileToBeWritten the file To Be Written
	 * @param containerName the containerName
	 */
	public void writeFileToBlob(File fileToBeWritten, String containerName);



}
