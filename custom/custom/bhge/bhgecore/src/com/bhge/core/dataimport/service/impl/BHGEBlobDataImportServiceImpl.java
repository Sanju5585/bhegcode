package com.bhge.core.dataimport.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import com.bhge.core.dataimport.service.BHGEBlobDataImportService;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import org.apache.log4j.Logger;

import java.io.File;
import com.microsoft.azure.storage.CloudStorageAccount;
import com.microsoft.azure.storage.OperationContext;
import com.microsoft.azure.storage.blob.BlobContainerPublicAccessType;
import com.microsoft.azure.storage.blob.BlobRequestOptions;
import com.microsoft.azure.storage.blob.CloudBlobClient;
import com.microsoft.azure.storage.blob.CloudBlobContainer;
import com.microsoft.azure.storage.blob.CloudBlockBlob;
import com.microsoft.azure.storage.blob.ListBlobItem;
public class BHGEBlobDataImportServiceImpl implements BHGEBlobDataImportService {
	
	/** The Constant LOG. */
	private static final Logger LOG = Logger.getLogger(BHGEBlobDataImportServiceImpl.class);

	/** The configuration service. */
	private ConfigurationService configurationService;


	@Override
	public File readFromBlob(String fileNameTobeRead, String fileExtension, String containerName)
	{
		CloudStorageAccount storageAccount = settingBlobConnection();
		 File sourceFile =null;
        try {
	        CloudBlobClient blobClient = storageAccount.createCloudBlobClient();
	        CloudBlobContainer container = blobClient.getContainerReference(containerName);
	        // Create the container if it does not exist with public access.
	        LOG.info("Creating container: " + container.getName());
	        LOG.info("File to be read : " + fileNameTobeRead);
	        String fileTobeRead =null;
	        for (ListBlobItem blobItem : container.listBlobs()) {
	        String uriString = blobItem.getUri().toString();
	        String fileNameInBlob = uriString.substring(uriString.lastIndexOf('/')+1);
	        if(fileNameInBlob.startsWith(fileNameTobeRead) && fileNameInBlob.endsWith(fileExtension)){
	        fileTobeRead = fileNameInBlob;
	        	break;
	         }
	        }
	        LOG.info("fileTobeRead: " + fileTobeRead);
	        //Getting a blob reference
	        CloudBlockBlob blob = container.getBlockBlobReference(fileTobeRead);
	        //Creating a sample file
	        sourceFile = File.createTempFile(fileNameTobeRead,fileExtension);
	        LOG.info("Creating a sample file at: " + sourceFile.toString());
	        blob.downloadToFile(sourceFile.toString());
	        return sourceFile;
        }
  		catch (Exception ex) {
  		ex.printStackTrace();
  		 return sourceFile;
  		}
       
  }



	public void writeFileToBlob(File fileToBeWritten,String containerName)
	{
		CloudStorageAccount storageAccount = settingBlobConnection();
		//String directory =null;
		try {
			CloudBlobClient   blobClient = storageAccount.createCloudBlobClient();
			CloudBlobContainer  container = blobClient.getContainerReference(containerName);
			LOG.info("Creating container: " + container.getName());
			// Create the container if it does not exist with public access.
			LOG.info("Creating container: " + container.getName());
			LOG.info("File to be written " + fileToBeWritten.toString());
			//Getting a blob reference
			CloudBlockBlob blob = container.getBlockBlobReference(fileToBeWritten.getName());
			//Creating blob and uploading file to it
			LOG.info("Uploading the sample file ");
			blob.uploadFromFile(fileToBeWritten.getAbsolutePath());
			//Listing contents of container
			for (ListBlobItem blobItem : container.listBlobs()) {
				LOG.info("URI of blob is: " + blobItem.getUri());
			}
		}
		catch (Exception ex) {
			ex.printStackTrace();

		}
	}


	/**
	 * Setting blob connection.
	 *
	 * @return the cloud storage account
	 */
	private CloudStorageAccount settingBlobConnection() {
		String accountName = configurationService.getConfiguration().getString("blob.accountName");
		String accountKey = configurationService.getConfiguration().getString("blob.accountKey");
		String storageConnectionString = "DefaultEndpointsProtocol=https;" +  "AccountName="+ accountName +  "AccountKey=" + accountKey;
		CloudStorageAccount storageAccount = null;
		try {
			storageAccount = CloudStorageAccount.parse(storageConnectionString);
		} catch (InvalidKeyException | URISyntaxException  e) {
			e.printStackTrace();
		}
		return storageAccount;
	}


	public ConfigurationService getConfigurationService() {
		return configurationService;
	}

	public void setConfigurationService(ConfigurationService configurationService) {
		this.configurationService = configurationService;
	}
}
