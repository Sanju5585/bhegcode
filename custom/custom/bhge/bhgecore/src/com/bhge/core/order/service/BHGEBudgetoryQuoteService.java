package com.bhge.core.order.service;

import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.core.model.order.CartModel;
import jakarta.xml.bind.JAXBException;
import org.apache.fop.apps.FOPException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBException;
import javax.xml.transform.TransformerException;
import java.io.IOException;
import java.net.URISyntaxException;

public interface BHGEBudgetoryQuoteService {
    void generateExcelForBudgetoryQuote(CartData cartData, String customFileName, String formattedaddress, HttpServletResponse response, CartModel cartModel) throws IOException;

    void generatePdfForBudgetoryQuote(CartData cartData, String customFileName, String formatedAddress, HttpServletRequest request, HttpServletResponse response, CartModel cartModel) throws FOPException, IOException, URISyntaxException, TransformerException, JAXBException, JAXBException;
}
