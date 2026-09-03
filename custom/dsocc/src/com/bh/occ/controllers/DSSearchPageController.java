package com.bh.occ.controllers;

import com.bhge.facades.order.BHGECartFacade;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercewebservicescommons.dto.product.PriceWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductWsDTO;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.annotation.Resource;

@Controller
@Tag(name = "Ds Search")
@RequestMapping("/{baseSiteId}/users/{userId}/search")
public class DSSearchPageController extends DSBaseController {

    private static final Logger LOG = Logger.getLogger(DSSearchPageController.class);

    @Resource(name = "bhgeCartFacade")
    private BHGECartFacade bhgeCartFacade;

    @ResponseBody
    @Operation(operationId = "checkRealTimePrice", summary = "Check Real Time Price.",  description = "Check Real Time Price.")
    @ApiBaseSiteIdAndUserIdParam
    @RequestMapping(value = "/checkRealTimePrice", method =
            { RequestMethod.POST }, produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ProductWsDTO checkRealTimePrice(@RequestParam("productCode") final String productCode,
                                        @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
                                        @RequestParam(value = "callingsourceinfo", required = false) final String callingsource,
                                        @ApiFieldsParam @RequestParam(value = "guestSalesArea", required = false) final String guestSalesArea) throws Exception
    {
        ProductWsDTO productWsDTO = new ProductWsDTO();
        PriceWsDTO priceWsDTO = new PriceWsDTO();
        PriceData priceData = new PriceData();

        LOG.info("########################## CheckRealTimePrice for Product: " + productCode + " from " + callingsource
                + " ############### ");
        String Sanitizedfields = StringEscapeUtils.escapeHtml4(fields);
        priceData = bhgeCartFacade.getPriceFromRFCForWS(StringEscapeUtils.escapeHtml4(productCode), StringEscapeUtils.escapeHtml4(guestSalesArea));
        if (null != priceData)
        {
            priceWsDTO = getDataMapper().map(priceData, PriceWsDTO.class, "FULL");
        }
        else
        {
            LOG.info("No Price available for Product: " + productCode);
        }
        productWsDTO.setPrice(priceWsDTO);
        return productWsDTO;
    }
}
