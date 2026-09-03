package com.bhge.core.mysite.service;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;

import com.bhge.core.data.AddToMSEInputData;
import com.bhge.core.data.AddToMSEOutputData;
import com.bhge.core.data.EquipmentData;
import com.bhge.core.data.ManElDataCount;
import com.bhge.core.data.MelDataCount;
import com.bhge.core.data.ServiceHistoryDetails;
import org.xml.sax.SAXException;


/**
 * @author 1423683
 *
 */
public interface MySiteEquipmentService
{

	EquipmentData getMSELookup(String customerNumber, String partNumber, String serialNumber);

	List<AddToMSEOutputData> addToMEL(String customerNumber, List<AddToMSEInputData> inputData);


	EquipmentData getEquipmentDataForCustomer(String customerNumber, String mANorMELFlag, String fromDate, String toDate,
			String endCustomerID);


	ManElDataCount prepareCountOfMANElEquipmentData(List<AddToMSEInputData> list);


	MelDataCount prepareCountOfMElEquipmentData(List<AddToMSEInputData> list);

	List<AddToMSEOutputData> addServiceHistory(String customerNumber, ServiceHistoryDetails serviceHistoryInputData);

	List<AddToMSEOutputData> addToMelRFC(final String customerNumber, final List<AddToMSEInputData> inputData) throws IOException, ParseException, SAXException;

	EquipmentData getEquipmentDataForCustomerMSE(final String customerNumber, final String MANorMELFlag,
																final String fromDate, final String toDate, final String endCustomerID);

	public List<AddToMSEOutputData> addServiceHistoryRFC(final String customerNumber,
														 final ServiceHistoryDetails serviceHistoryInputData);
	public EquipmentData getMSELookupRFC(final String customerNumber, final String partNumber, final String serialNumber);


}
