/**
 *
 */
package com.bhge.facades.bulkupload;

import java.util.List;

import com.bhge.facades.user.data.BHGEBulkUploadInputEntryData;

/**
 * @author riyan
 *
 */
public interface BHGEDataReaderFacade {

	public List<BHGEBulkUploadInputEntryData> csvDataReader(final String input);
	public List<BHGEBulkUploadInputEntryData> csvDataReaderWs(final String input);
}
