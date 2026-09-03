/**
 *
 */
package com.bhge.facades.mysite;

import java.util.List;

import com.bhge.core.data.AddToMSEOutputData;
import com.bhge.core.data.EquipmentData;
import com.bhge.core.data.ServiceHistoryDetails;

import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import com.bhge.core.data.AddToMSEInputData;
import java.io.IOException;
import org.xml.sax.SAXException;
import java.text.ParseException;


/**
 * @author 1423683
 *
 */
public interface MySiteEquipmentFacade
{
	/**
	 * Gets the cached equipment data if available or makes a fresh SAP call
	 *
	 * @param customerNumber
	 * @param mANorMELflag
	 * @param refreshFlag
	 * @return
	 */
	EquipmentData getMSECacheData(String customerNumber, String mANorMELflag, boolean refreshFlag, String fromDateFilter,
			String toDateFilter, String endCustomerID);

	boolean clearMSEDataFromCache(String customerNumber, String mANorMELflag, String fromDate, String toDate,
			String endCustomerID);

	List<ProductData> getProductDataForPartNumber(List<String> partNums);

	/**
	 * Gets the final equipment list after applies all filters
	 *
	 * @param equipmentData
	 * @param filterBy
	 * @param mANorMELFlag
	 * @param fromDate
	 * @param toDate
	 * @param searchBy
	 * @param groupBy
	 * @param pageableData
	 * @param brFilter
	 * @return
	 */
	public EquipmentData getFinalEquipmentList(final EquipmentData equipmentData, final String filterBy, final String mANorMELFlag,
			final String searchBy, final String groupBy, PageableData pageableData, String brFilter,
			List<String> productLinesSelected, String sortBy);

	/**
	 * Populates product data object on equipment data
	 *
	 * @param filterEquipmentData
	 */
	public void populateProductDataOnEquipmentRecord(final EquipmentData filterEquipmentData);
	
	/**
	 * Add service history to equipment data
	 * @param customerNumber
	 * @param serviceHistoryInputData
	 * @return
	 */
	public List<AddToMSEOutputData> addServiceHistoryRFC(final String customerNumber,
			 final ServiceHistoryDetails serviceHistoryInputData);

	public String searchBySanity(String url);
	
	/**
	 * Facade layer method for MSE look up
	 * @param customerNumber
	 * @param partNumber
	 * @param serialNumber
	 * @return
	 */
	public EquipmentData getMSELookupRFC(final String customerNumber, final String partNumber, final String serialNumber);
	
	/**
	 * Method to add a new equipment record
	 * @param customerNumber
	 * @param inputData
	 * @return
	 * @throws IOException
	 * @throws ParseException
	 * @throws SAXException
	 */
	List<AddToMSEOutputData> addToMelRFC(final String customerNumber, final List<AddToMSEInputData> inputData) throws IOException, ParseException, SAXException;

	void updateFilterList(EquipmentData finalEquipmentData, Boolean itemsInWatchlist);

}
