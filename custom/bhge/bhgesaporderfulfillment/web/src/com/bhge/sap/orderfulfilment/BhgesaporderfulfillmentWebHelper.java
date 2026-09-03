/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.bhge.sap.orderfulfilment;

import org.apache.log4j.Logger;


/**
 * Simple test class to demonstrate how to include utility classes to your webmodule.
 */
public class BhgesaporderfulfillmentWebHelper
{
	private BhgesaporderfulfillmentWebHelper() {
		throw new IllegalStateException("Utility class");
	}

	/** Edit the local|project.properties to change logging behavior (properties log4j.*). */
	private static final Logger LOG = Logger.getLogger(BhgesaporderfulfillmentWebHelper.class.getName());

	public static final String getTestOutput()
	{
		return "testoutput";
	}
}
