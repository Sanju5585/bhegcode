/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.facades.order;

import com.bhge.facades.quote.data.QuoteTrackingRequestData;
import com.bhge.facades.quote.data.QuoteTrackingResponseData;
import com.ds.dsocc.quote.data.QuoteCreationRequestData;
import de.hybris.platform.commercefacades.order.QuoteFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.quote.data.QuoteData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.order.QuoteModel;

import java.util.List;

import com.bhge.facades.EndUserTypeData;
import com.bhge.facades.address.BHGEShippingAddressFormData;
import com.ds.dsocc.quote.data.QuoteWsDTO;
import org.apache.fop.apps.FOPException;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URISyntaxException;
import jakarta.xml.bind.JAXBException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactoryConfigurationError;

/**
 * Facade interface providing an API for performing various quote management operations.
 */
public interface BHGEQuoteFacade extends QuoteFacade
{

	/**
	 * Submits an existing quote.
	 *
	 * @param quoteCode
	 *           the code of the quote to process
	 * @param postalCode
	 * @param city
	 * @param region
	 * @param country
	 * @param address2
	 * @param address1
	 * @param emailAddress
	 * @param contactNumber
	 * @param company
	 * @param userName
	 */
	public void submitQuoteForm(String quoteCode, String userName, String company, String contactNumber, String emailAddress,
			String address1, String address2, String country, String region, String city, String postalCode, String emailtype,
			String description, BHGEShippingAddressFormData bhgeAddressFormData);
	
	public QuoteData createQuote(String id, QuoteCreationRequestData quoteCreationRequestData);
	
	public Boolean submitQuote(final String quoteId, final QuoteWsDTO quoteWsDTO);
	
	public List<EndUserTypeData> getEndUserTypeData();
		
	public QuoteData editQuote(final String quoteCode);

	public void downloadQuotePDF(String rfqCartId, final HttpServletRequest request, final HttpServletResponse response)
			throws IOException, FOPException, TransformerException, JAXBException, TransformerFactoryConfigurationError,
			URISyntaxException;
	
	public String uploadQuoteAttachmentWs(QuoteModel quoteModel, final MultipartFile file);
	
	public void removeQuoteAttachmentsWs(QuoteModel quoteModel);

	SearchPageData<QuoteTrackingResponseData> getQuoteTrackingData(QuoteTrackingRequestData trackingReqData, PageableData pageableData);

	CartData acceptQuote(String quoteId);
}


