package com.bhge.core.rma.service.impl;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.rma.service.BHGERmaFormSearchService;
import com.bhge.core.sap.SAPJcoContainer;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoTable;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.util.Config;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

public class BHGERmaFormSearchServiceImpl implements BHGERmaFormSearchService {

    @Resource(name = "sapJcoContainer")
    private SAPJcoContainer sapJcoContainer;

    private final static Logger LOG = Logger.getLogger(BHGERmaServiceOfferingServiceImpl.class);


    @Override
    public List<String> getPartNumsForSearch(String partNo, String srNo) {

        LOG.info("Inside getPartNumsForSearch");
        //return rfcCallForPartNumber(partNo,srNo);
        return mockCallForPartNumber(partNo,srNo);


    }

    protected List<String> rfcCallForPartNumber(String partNo, String srNo){

        List<String> partNums=new ArrayList<String>();

        final JCoConnection connection = sapJcoContainer.getRFCConnection();
        LOG.info("Connection fetched ....");
        try {
            if (connection != null && !connection.isBackendOffline()) {
                LOG.info("Connection finalized ....");

                LOG.info("Condition Check 1 ....");
                final JCoFunction function = preparePartNoOrSrNoRequest(partNo,srNo,connection);
                //final JCoFunction function = preparePartNoRequest(partNo,srNo,connection);
                LOG.debug("getPartNumsForSearch Request: " + function.toXML());
                LOG.info("getPartNumsForSearch Request: " + function.toXML());
                connection.execute(function);
                //System.out.println("RETURN FUNCTION 1" + processFastOrderResponse(function));
                partNums= processPartNoResponse(function);


				/*LOG.info("Condition Check 2 ....");

				connection.execute(function);
				System.out.println("RETURN FUNCTION 1" + processFastOrderResponse(function));*/
				/*if ((salesOrderNumber == null) && poNumber != null && (!poNumber.equalsIgnoreCase(""))) {
					LOG.info("Condition Check 3 ....");
					final JCoFunction function = prepareRequest(connection, soldto, orderType, false);
					function.getImportParameterList().setValue(BhgeCoreConstants.F_BSTKD, poNumber);
					LOG.info("Fast Order Request: " + function.toXML());
					connection.execute(function);
					System.out.println("RETURN FUNCTION 1" + processFastOrderResponse(function));
				}*/


            }
        } catch (BackendException e) {
            LOG.info("Issue with connection");
            return null;
        }
        return partNums;
    }


    protected List<String> mockCallForPartNumber(String partNo, String srNo){

        LOG.info("Inside Part Number MockCall");
        List<String> products= new ArrayList<String>();
        products.add("118-560-007");
        products.add("118-560-026");

        return products;

    }
    protected JCoFunction preparePartNoOrSrNoRequest(final String partNo, String srNo, final JCoConnection connection) throws BackendException
    {


        LOG.info("Inside preparePartNoOrSrNoRequest");
        final JCoFunction function = setPartNoOrSrNoForSearch(partNo, srNo, connection);
		/*final JCoTable partTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_CUST_NO);
		partTable.appendRow();
		partTable.setValue(BhgeCoreConstants.CUST_NO_KUNNR, partNo);
		LOG.debug("Product Request for Part No: " + function.toXML());*/
        return function;
    }

    protected JCoFunction setPartNoOrSrNoForSearch(final String partNo, final String srNo, final JCoConnection connection) throws BackendException
    {
        if (LOG.isDebugEnabled())
        {
            LOG.debug("Setting the Default Input parameters for Part No search");
        }
        LOG.info("Inside setPartNoOrSrNoForSearch");
        final String partNoFunction = Config.getString("SAP_ORDER_HISTORY_FUNCTION", "Z_SORDER_HISTORY");
        final JCoFunction function = connection.getFunction(partNoFunction);
        if(!partNo.isEmpty() && !srNo.isEmpty()) {
            function.getImportParameterList().setValue(BhgeCoreConstants.CP_TYPE, partNo);
            function.getImportParameterList().setValue(BhgeCoreConstants.CP_TYPE, srNo);
        }
        else if (partNo.isEmpty() && !srNo.isEmpty()){
            function.getImportParameterList().setValue(BhgeCoreConstants.CP_TYPE, srNo);
        }

        LOG.debug("New Function without CP TYPE" + function.getImportParameterList());

        return function;
    }

    protected List<String> processPartNoResponse(final JCoFunction function)
    {
        LOG.debug("Products for part number Response: " + function.toXML());
        processErrors(function);
        if(!processProductDataForPartNoOrSrNo(function).isEmpty()) {
            return processProductDataForPartNoOrSrNo(function);
        }
        else{
            LOG.debug("No Part Number Found");
            return null;
        }
    }

    private void processErrors(JCoFunction function) {
    }

    private List<String> processProductDataForPartNoOrSrNo(final JCoFunction function) {

        List<String> partNumList = null;
        final JCoTable productDetailsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_HEADER);
        final int productHeaderCount = productDetailsTable.getNumRows();

        if (productHeaderCount > 0) {
            for (int i = 0; i < productHeaderCount; i++) {
                final String partNum = productDetailsTable.getString(BhgeCoreConstants.GE_SALES_ORDER);
                if (StringUtils.isNotBlank(partNum)) {
                    partNumList.add(partNum);
                }
                productDetailsTable.nextRow();
            }
            return partNumList;
        }
        else{
            return null;
        }
    }


}
