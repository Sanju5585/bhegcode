package com.bh.occ.controllers;

import com.bhge.core.data.GetContactUsData;
import com.bhge.facades.productlinecontactus.ProductLineContactUsFacade;
import com.ds.dsocc.data.ProductLineContactUsDataWsDTO;
import com.ds.dsocc.data.ProductLineContactWsDTO;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import java.io.IOException;
import java.net.UnknownHostException;

@Controller
@ApiVersion("v2")
@Tag(name = "Product Line Specific Contact Us")
@RequestMapping(value = "/{baseSiteId}/users/{userId}")
public class DsProductLineContactusController extends DSBaseController{

    private static final Logger LOG = LoggerFactory.getLogger(DsProductLineContactusController.class);
    @Resource(name = "userService")
    private UserService userService;
    @Resource(name = "productLineContactUsFacade")
    private ProductLineContactUsFacade productLineContactUsFacade;

    @RequestMapping( value = "/{productLine}/contactus/{requestType}", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "getContactus List", summary = "Get a Contactus List ", description  = "Get a Contactus List")
    @ApiBaseSiteIdAndUserIdParam
    public ProductLineContactWsDTO getContactUsPage(
            @Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
            @Parameter(description = "User Id", required = true) @PathVariable final String userId,
            @Parameter(description = "Product Line", required = true) @PathVariable final String productLine,
            @Parameter(description = "Request Type", required = false) @PathVariable final String requestType
    ){
        final GetContactUsData contactUsData = new GetContactUsData();
        try{
            contactUsData.setSubProductLine(productLineContactUsFacade.getContactUsSubProductLines(productLine, requestType));
        } catch (Exception ex){
            LOG.error("Error while fetching product Line specific contact us details"+ ex.getMessage());
        }
        return getDataMapper().map(contactUsData, ProductLineContactWsDTO.class, "FULL");
    }

    @RequestMapping( value = "{productLine}/contactus", method = RequestMethod.POST, consumes = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    @ResponseBody
    @Operation(operationId = "createContactUsFrom", summary = "Creates a new ContactUs From ", description  = "Creates a new ContactUs From")
    @ApiBaseSiteIdAndUserIdParam
    public ResponseEntity<String> postContactUs(
            @Parameter(description = "contactus object.", required = true) @RequestBody final ProductLineContactUsDataWsDTO form,
            @Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
            @Parameter(description = "User Id", required = true) @PathVariable final String userId,
            @Parameter(description = "Product Line", required = true) @PathVariable final String productLine
    ) throws UnknownHostException {
        try {
            final UserModel user = userService.getCurrentUser();
            if (userService.isAnonymousUser(user)) {
                productLineContactUsFacade.submitContactUsDataForGuestUser(form,productLine);
            } else {
                productLineContactUsFacade.submitContactUsDataForLoggedInUser(form,productLine);
            }
        }
        catch (Exception ex){
            LOG.error("Exception during post contact us form" + ex.getMessage());
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ResponseBody
    @ResponseStatus(code = HttpStatus.CREATED)
    @PostMapping (value = "/{productLine}/contactus/uploadContactUsAttachment", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(operationId = "uploadContactUsAttachment", summary = "Upload Contact Us Attachment", description = "Upload Contact Us Attachment")
    @ApiBaseSiteIdAndUserIdParam
    public ResponseEntity<String> uploadPOAttachment(@Parameter @RequestPart(value = "file") MultipartFile file) throws IOException {
        LOG.info("==================Upload Contact Us Attachment==================");
        try {
            if (file != null) {
                MediaModel attachment=productLineContactUsFacade.saveContactUsAttachment(file);
                LOG.info("Uploaded Contact Us attachment for checkout successfully");
                return new ResponseEntity<>(attachment.getCode(), HttpStatus.OK);
            }
            else{
                LOG.error("File doesn't Exist");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (final Exception ex) {
            LOG.error("Error in uploading the PO attachment" + ex);
            return new ResponseEntity<>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
