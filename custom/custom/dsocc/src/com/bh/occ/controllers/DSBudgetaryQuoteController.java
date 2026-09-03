package com.bh.occ.controllers;

import com.bhge.core.order.service.BHGECartService;
import com.bhge.facades.order.BHGECartFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import io.swagger.v3.oas.annotations.Operation;
import org.apache.fop.apps.FOPException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactoryConfigurationError;
import java.io.IOException;
import java.net.URISyntaxException;
import java.text.ParseException;

@Controller
@RequestMapping(value = "/{baseSiteId}/users/{userId}")
public class DSBudgetaryQuoteController extends DSBaseController
{

    @Resource(name = "bhgeCartFacade")
    private BHGECartFacade bhgeCartFacade;

    @Resource(name = "bhgeCartService")
    public BHGECartService bhgeCartService;

    @Resource(name="cartConverter")
    private Converter<CartModel, CartData> cartConverter;


    private static final Logger LOG = LoggerFactory.getLogger(DSBudgetaryQuoteController.class);

    @RequestMapping(value = "/{cartId}/downloadBudgetoryQuoteExcel", method = RequestMethod.GET ,produces = "application/vnd.ms-excel")
    @ApiBaseSiteIdAndUserIdParam
    public void getRMAExcelData(final HttpServletRequest request, final HttpServletResponse response,
                                @PathVariable String cartId, @RequestParam String customFileName) throws BackendException, ParseException, IOException {
        if (null != cartId) {
            CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(cartId);
            CartData cartData = cartConverter.convert(cartModel);
            if (null != cartData) {
                LOG.info("DSBudgetaryQuoteController generating BUDGETORYQUOTEEXCEL");
                bhgeCartFacade.generateExcelForBudgetoryQuote(cartData, customFileName, response,cartModel);
            }
        }
    }

    @RequestMapping(value = "/{cartId}/downloadBudgetoryQuotePDF", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "downloadBudgetoryQuotePDF", summary = "Budgetory Quote pdf download.", description = "Budgetory Quote pdf download.")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public void downloadQuotePDF(@PathVariable String cartId, final HttpServletRequest request, final HttpServletResponse response, @RequestParam String customFileName) throws TransformerException, IOException, FOPException, JAXBException, TransformerFactoryConfigurationError, URISyntaxException {
        if (null != cartId) {
            CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(cartId);
            CartData cartData = cartConverter.convert(cartModel);
            if (null != cartData) {
                LOG.info("DSBudgetaryQuoteController generating BUDGETORYQUOTEPDF");
                bhgeCartFacade.downloadBudgetoryQuotePDF(cartData, customFileName, request, response,cartModel);
            }
        }
    }

}
