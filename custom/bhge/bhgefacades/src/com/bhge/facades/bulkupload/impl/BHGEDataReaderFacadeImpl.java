/**
 *
 */
package com.bhge.facades.bulkupload.impl;

import java.io.IOException;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

import org.apache.log4j.Logger;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.facades.bulkupload.BHGEDataReaderFacade;
import com.bhge.facades.user.data.BHGEBulkUploadInputEntryData;

/**
 * @author riyan
 *
 */
public class BHGEDataReaderFacadeImpl implements BHGEDataReaderFacade {

	
	private final static Logger LOG = Logger.getLogger(BHGEDataReaderFacadeImpl.class);
	
	/* (non-Javadoc)
	 * @see com.bhge.facades.bulkupload.BHGEDataReaderFacade#csvDataReader(java.lang.String)
	 */
	@Override
	public List<BHGEBulkUploadInputEntryData> csvDataReader(String input)
	{
		if (input == null) {
			LOG.error("Invalid CSV String input.");
			return null;
		}

		final List<BHGEBulkUploadInputEntryData> bulkUploadList = new ArrayList<BHGEBulkUploadInputEntryData>();
		if(input != null){
			final Scanner scanIn = new Scanner(input);
			while (scanIn.hasNextLine()) {
				final String currentLine = scanIn.nextLine();
				final BHGEBulkUploadInputEntryData bulkUploadInputEntryData = CSVLineReader(currentLine);
				if (bulkUploadInputEntryData != null) {
					bulkUploadList.add(bulkUploadInputEntryData);
				}
			}
			scanIn.close();
		}
		return bulkUploadList;
	}
	
// take a line of CSV and populate the part number and quantity
	private BHGEBulkUploadInputEntryData CSVLineReader(String currentLine) {
		if (currentLine == null) {
			return null;
		}

		/* Parts with spaces coming as invalid - Fixed */
		currentLine = currentLine.trim();

		if (currentLine.isEmpty()) {
			return null;
		}

		final String[] split = currentLine.split(",");
		final BHGEBulkUploadInputEntryData bulkUploadInputEntryData = new BHGEBulkUploadInputEntryData();

		// get part number
		if (split.length > 0) {
			bulkUploadInputEntryData.setPartNum((split[0] != null ? split[0]
					: ""));
		}
		if (split.length > 1) {
			bulkUploadInputEntryData.setQuantity((split[1] != null ? split[1]
					: ""));
		}

		return bulkUploadInputEntryData;
	}
	
	@Override
	public List<BHGEBulkUploadInputEntryData> csvDataReaderWs(String input)
	{
		if (input == null) {
			LOG.error("Invalid CSV String input.");
			return null;
		}

		final List<BHGEBulkUploadInputEntryData> bulkUploadList = new ArrayList<BHGEBulkUploadInputEntryData>();
		final String[] splitProducts = input.split(";");

		for(int i=0; splitProducts.length > i; i++) {
			final BHGEBulkUploadInputEntryData bulkUploadInputEntryData = new BHGEBulkUploadInputEntryData();
			final String currentLine = splitProducts[i];
			final String[] split = currentLine.split(",");
			if (split.length > 0) {
				bulkUploadInputEntryData.setPartNum((split[0] != null ? split[0]
						: ""));
			}
			if (split.length > 1) {
				bulkUploadInputEntryData.setQuantity((split[1] != null ? split[1]
						: ""));
			}
			
			bulkUploadList.add(bulkUploadInputEntryData);
		}
		
		return bulkUploadList;
	}
}