/**
 * 
 */
package com.bhge.core.sap;

import org.apache.log4j.Logger;

import de.hybris.platform.sap.core.bol.backend.jco.BackendBusinessObjectBaseJCo;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;

public class SAPJcoContainer extends BackendBusinessObjectBaseJCo {
	private final static Logger LOG = Logger.getLogger(SAPJcoContainer.class);

	JCoConnection conn = null;

	public JCoConnection getRFCConnection() {
		LOG.debug("~~~~~~~~~~~~~~~~~~Trying to Establish connection now~~~~~~~~~~~~~~~~~~");
		try {
			conn = getDefaultJCoConnection();
			LOG.debug("~~~~~~~~~~~~~~~~~~Connection successful~~~~~~~~~~~~~~~~~~");
			LOG.debug("Connection=" + conn);
			return conn;
		} catch (Exception e) {
			LOG.error("Exception occured while establishing the connection ", e);
			return null;
		}
	}
}

