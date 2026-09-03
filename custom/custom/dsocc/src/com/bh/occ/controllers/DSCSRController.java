package com.bh.occ.controllers;

import com.bhge.register.webservices.appoval.CSRInfoFormWsDTO;
import com.bhge.register.webservices.appoval.CSRSearchPageWsDto;
import com.bhge.register.webservices.appoval.StatusCountBean;
import com.bhge.register.webservices.appoval.StatusCountBeanWsDTO;
import com.bhge.register.webservices.data.ManualApprovalData;
import com.bhge.register.webservices.data.ManualApprovalWsDTO;
import com.bhge.register.webservices.exception.BhgeRegisterException;
import com.bhge.register.webservices.facades.BHGEManualApprovalFacade;
import com.bhge.register.webservices.data.ManualApprovalData;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import com.bhgeregister.dto.BHGECSRRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.google.gson.Gson;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.warehousingwebservices.dto.store.WarehouseSearchPageWsDto;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;
import org.mvel2.util.Make;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletResponse;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.media.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.io.InputStream;

import jakarta.annotation.Resource;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@Tag(name = "CSR")
@RequestMapping(value = "/{baseSiteId}/csr")
public class DSCSRController extends DSBaseController{
    private static final Logger LOG = Logger.getLogger(DSCSRController.class);
    public static final int MAX_PAGE_LIMIT_FOR_DOWNLOAD = 10000;

    @Resource(name = "userService")
    private UserService userService;
    @Autowired
    private MediaService mediaService;
    @Resource
    private BHGEManualApprovalFacade bhgeManualApprovalFacade;

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public List<ManualApprovalWsDTO> fetch() throws Exception
    {
        LOG.info("Inside CSR fetch: START - " + userService.getCurrentUser().getUid());
        /*ManualApprovalWsDTO manualApprovalWsDTO = new ManualApprovalWsDTO();
        if (userService.isMemberOfGroup(userService.getCurrentUser(), userService.getUserGroupForUID("BHGEUserManagerGroup")))
        {
            manualApprovalWsDTO.setMultiDashboadAccess("yes");
        }*/
        final List<ManualApprovalData> worklist = bhgeManualApprovalFacade
                .fetchHomepageDashboardDetails(userService.getCurrentUser().getUid());
        List<ManualApprovalWsDTO> manualApprovals = getManualApprovalList(worklist);
        LOG.info("Inside CSR fetch: Worklist Count - " + worklist.size() + " & User - " + userService.getCurrentUser().getUid());
        return manualApprovals;
    }

    private List<ManualApprovalWsDTO> getManualApprovalList(List<ManualApprovalData> worklist)
    {
        ArrayList<ManualApprovalWsDTO> manualApprovalWsDTOS = new ArrayList<>();
        if(CollectionUtils.isNotEmpty(worklist)){
            for(ManualApprovalData manualApprovalData : worklist){
                ManualApprovalWsDTO manualApprovalWsDTO = getDataMapper().map(manualApprovalData, ManualApprovalWsDTO.class, "FULL");
                manualApprovalWsDTOS.add(manualApprovalWsDTO);
            }
        }
        return manualApprovalWsDTOS;
    }

    @RequestMapping(value = "/fetchRequestlist", method = RequestMethod.GET)
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public CSRSearchPageWsDto detailsPage(@RequestParam(value = "page", defaultValue = "0") final int page,
                                          @RequestParam(value = "pageSize", required = false) final String pageSize,
                                          @RequestParam(value = "name", required = false) final String name,
                                          @RequestParam(value = "productLine", required = false) final String productLine,
                                          @RequestParam(value = "fromDate", required = false) final String fromDate,
                                          @RequestParam(value = "toDate", required = false) final String toDate,
                                          @RequestParam(value = "reqStatusVal", required = false) final String reqStatusVal) throws Exception
    {
        LOG.info("Inside CSR fetchRequestlist: START - " + reqStatusVal + " & User - " + userService.getCurrentUser().getUid());
        final PageableData pageableData = createPageableData(page, getPageSize(pageSize), null, null);
        final SearchPageData<ManualApprovalData> worklist = bhgeManualApprovalFacade
                .fetchManualWorkflow(userService.getCurrentUser().getUid(), pageableData,name,productLine,fromDate,toDate);
        if (reqStatusVal != null)
        {
            final SearchPageData<ManualApprovalData> dashboardApprovalDetails = bhgeManualApprovalFacade
                    .fetchDashboardApprovalDetails(userService.getCurrentUser().getUid(), reqStatusVal, pageableData,name,productLine,fromDate,toDate);
            LOG.info("Inside CSR Dashboard Size fetchRequestlist - " + dashboardApprovalDetails.getResults().size() + " & Status = " + reqStatusVal
                    + " & User - " + userService.getCurrentUser().getUid());
            return getDataMapper().map(dashboardApprovalDetails, CSRSearchPageWsDto.class, "DEFAULT");
        }
        return getDataMapper().map(worklist, CSRSearchPageWsDto.class, "DEFAULT");
    }

    @RequestMapping(value = "/downloadlist", method = RequestMethod.GET,produces = "application/vnd.ms-excel")
    @ResponseBody
    @Operation(operationId = "downloadlist", summary = "Download access request and their details.", description = "Returns details in file")
    @ApiBaseSiteIdAndUserIdParam
    public void downloadUserDetails(HttpServletResponse response,@RequestParam(value = "page", defaultValue = "0") final int page,
                                    @RequestParam(value = "pageSize", required = false) final String pageSize,
                                    @RequestParam(value = "name", required = false) final String name,
                                    @RequestParam(value = "productLine", required = false) final String productLine,
                                    @RequestParam(value = "fromDate", required = false) final String fromDate,
                                    @RequestParam(value = "toDate", required = false) final String toDate,
                                    @RequestParam(value = "reqStatusVal", required = false) final String reqStatusVal)
    {
        final PageableData pageableData = createPageableData(page, MAX_PAGE_LIMIT_FOR_DOWNLOAD, null, null);
        SearchPageData<ManualApprovalData> dashboardApprovalDetails = bhgeManualApprovalFacade
                .fetchManualWorkflow(userService.getCurrentUser().getUid(), pageableData,name,productLine,fromDate,toDate);
        if (reqStatusVal != null) {
            dashboardApprovalDetails = bhgeManualApprovalFacade
                    .fetchDashboardApprovalDetailsDownloads(userService.getCurrentUser().getUid(), reqStatusVal, pageableData, name, productLine, fromDate, toDate);
        }
        generateExcelForManageUsers(dashboardApprovalDetails.getResults(), response);
    }
    private void generateExcelForManageUsers(List<ManualApprovalData> ManualApprovalData, HttpServletResponse response)
    {
        try
        {
            final Workbook workbook = new XSSFWorkbook();
            final Sheet sheet = workbook.createSheet("AccessRequestDataList");
            sheet.setDefaultColumnWidth(5);

            final CellStyle style = workbook.createCellStyle();
            final Font font = workbook.createFont();
            font.setFontName("Calibri");
            font.setBold(true);
            style.setFont(font);

            final Row header = sheet.createRow(0);

            header.createCell(0).setCellValue("User Name");
            header.getCell(0).setCellStyle(style);
            header.createCell(1).setCellValue("Product Line");
            header.getCell(1).setCellStyle(style);
            header.createCell(2).setCellValue("Region");
            header.getCell(2).setCellStyle(style);
            header.createCell(3).setCellValue("Request Date");
            header.getCell(3).setCellStyle(style);
            header.createCell(4).setCellValue("Status");
            header.getCell(4).setCellStyle(style);
            int rowCount = 1;
            for(ManualApprovalData user : ManualApprovalData)
            {
                final Row row = sheet.createRow(rowCount++);
                row.createCell(0).setCellValue(user.getEmail());
                row.createCell(1).setCellValue(user.getProductLine());
                row.createCell(2).setCellValue(user.getRegion());
                row.createCell(3).setCellValue(user.getRequestorDate());
                row.createCell(4).setCellValue(user.getApprovalStatus());
            }
            sheet.autoSizeColumn(0);
            sheet.autoSizeColumn(1);
            sheet.autoSizeColumn(2);
            sheet.autoSizeColumn(3);
            sheet.autoSizeColumn(4);

            final Date date = new Date();
            final SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
            final String date1 = format1.format(date);

            response.setContentType("application/vnd.ms-excel");
            response.setHeader("Content-disposition", "attachment;filename=" + "AccessRequestData_" + date1 + ".xlsx");
            final OutputStream ouputStream = response.getOutputStream();
            workbook.write(ouputStream);
            ouputStream.flush();
            ouputStream.close();
        }
        catch (final Exception e)
        {
            LOG.error("Error creating excel template for AccessRequestData export :" + e);
        }
    }

    @RequestMapping(value = "/fetchCounts", method = RequestMethod.GET)
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public StatusCountBeanWsDTO getDashboardCounts( @RequestParam(value = "name", required = false) final String name,
                                                    @RequestParam(value = "productLine", required = false) final String productLine,
                                                    @RequestParam(value = "fromDate", required = false) final String fromDate,
                                                    @RequestParam(value = "toDate", required = false) final String toDate)
    {
        final StatusCountBean dashboardDetails = bhgeManualApprovalFacade
                .fetchDashboardDetails(userService.getCurrentUser().getUid(),name,productLine,fromDate,toDate);
        LOG.info("CSR getDashboardCounts() Dashboard Count = "
                + dashboardDetails.getPendingApprovalCount() + " | " + dashboardDetails.getOnHoldCount() + " | "
                + dashboardDetails.getRejectedCount() + " | " + dashboardDetails.getApprovedCount() + " | "
                + dashboardDetails.getCompletedCount() + " & User - " + userService.getCurrentUser().getUid());
        StatusCountBeanWsDTO statusCountBeanWsDTO = getDataMapper().map(dashboardDetails, StatusCountBeanWsDTO.class, "FULL");
        return statusCountBeanWsDTO;
    }

    @RequestMapping(value = "/fetchRequestorDetails", method = RequestMethod.GET)
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public ManualApprovalWsDTO getRequestorDetails(@RequestParam(value = "requestAccessId", required = false) final String requestAccessId)
    {
        ManualApprovalWsDTO manualApprovalWsDTO = new ManualApprovalWsDTO();
        if (requestAccessId != null)
        {
            try
            {
                bhgeManualApprovalFacade.authorizeApproverAccess(userService.getCurrentUser().getUid(), requestAccessId);
            }
            catch (final BhgeRegisterException ex)
            {
                LOG.error("No pending requests for CSR getRequestorDetails with ID " + userService.getCurrentUser().getUid());
            }
            final ManualApprovalData detailsdata = bhgeManualApprovalFacade.fetchManualWorkflowDetails(requestAccessId);
            manualApprovalWsDTO = getDataMapper().map(detailsdata, ManualApprovalWsDTO.class, "FULL");
        }
        return manualApprovalWsDTO;
    }

    @RequestMapping(value = "/updateCSRData", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE })
    @ApiBaseSiteIdAndUserIdParam
    @Operation(operationId = "customerNumberValidation", summary = "Validate customer number.", description = "Validate customer number.")
    public @ResponseBody String updateCSRData(
            @Parameter(description = "Request body parameter that contains details such as the user details for CSR.\n\nThe DTO is in XML or .json format.", required = true) @RequestBody final CSRInfoFormWsDTO requestData,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
    {
        final BHGECSRRequest csrRequestData = creatingCSRRequest(requestData);
        String updateStatus = bhgeManualApprovalFacade.updateCSRData(csrRequestData);
        return updateStatus;
    }

    private int getPageSize(final String pageSize) {
        if (StringUtils.isBlank(pageSize)) {
            return Integer.parseInt(PAGE_SIZE);
        } else {
            return Integer.parseInt(pageSize);
        }
    }

    @RequestMapping(value="/downloadAttachment", method = RequestMethod.GET)
    @ResponseBody
    @Operation(operationId = "downloadAttachment", summary = "Download attachment.", description = "Returns attachment")
    @ApiBaseSiteIdParam
    public ResponseEntity<byte[]> downloadAttachment(@RequestParam("mediaCode") String mediaCode) {
        MediaModel media = mediaService.getMedia(mediaCode);
        if (media == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        try (InputStream inputStream = mediaService.getStreamFromMedia(media)) {
            byte[] content = inputStream.readAllBytes();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Disposition", "attachment; filename=" + media.getRealFileName());
            headers.set(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, HttpHeaders.CONTENT_DISPOSITION);
            return new ResponseEntity<>(content, headers, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/processWorklist", method = RequestMethod.POST)
    @ApiBaseSiteIdAndUserIdParam
    public @ResponseBody BHGERegisterResponse processWorklist(@RequestParam(value = "accountLinking", required = false) final String accountLinking,
                                  @RequestParam(value = "status", required = false) final String status,
                                  @RequestParam(value = "comments", required = false) final String comments,
                                  @RequestParam(value = "accessid", required = false) final String accessid,
                                  @RequestParam(value = "reqStatusVal", required = false) final String reqStatusVal) throws BhgeRegisterException, CMSItemNotFoundException, EmailException
    {
        final String sanitizedAccessid = StringEscapeUtils.escapeHtml4(accessid);
        final String sanitizedAccountLinking = StringEscapeUtils.escapeHtml4(accountLinking);
        LOG.info("Inside CSR processWorklist: START - " + sanitizedAccessid + " - " + accountLinking + " - "
                + sanitizedAccountLinking);
        final Gson gsonObj = new Gson();

        bhgeManualApprovalFacade.authorizeApproverAccess(userService.getCurrentUser().getUid(), sanitizedAccessid);
        ManualApprovalData accountValue = null;

        if (StringUtils.isNotEmpty(sanitizedAccountLinking) || StringUtils.isEmpty(sanitizedAccountLinking))
        {
            accountValue = gsonObj.fromJson(
                    "{\"accountLinking\":" + sanitizedAccountLinking.replaceAll("&quot;", "\"") + "}",
                    ManualApprovalData.class);
        }
        if (StringUtils.isNotEmpty(sanitizedAccessid) || StringUtils.isEmpty(sanitizedAccessid))
        {
            accountValue.setAccessRequestId(sanitizedAccessid);
        }
        if (StringUtils.isNotEmpty(comments) || StringUtils.isEmpty(comments))
        {
            accountValue.setComments(StringEscapeUtils.escapeHtml4(comments));
        }
        if (StringUtils.isNotEmpty(status) || StringUtils.isEmpty(status))
        {
            accountValue.setApprovalStatus(StringEscapeUtils.escapeHtml4(status));
        }

        final BHGERegisterResponse storeResponse = bhgeManualApprovalFacade.updateManualWorkflow(accountValue,
                userService.getCurrentUser().getUid());

        //Handling error messages
        List<String> messagesSalesList = new ArrayList<String>();
        int i=0;
        if(CollectionUtils.isNotEmpty(storeResponse.getSalesraeaResult())) {
            for (String salesResult : storeResponse.getSalesraeaResult()) {
                if (StringUtils.contains(salesResult, "FAIL")) {
                    messagesSalesList.add("Invalid SalesArea at " + i);
                }
                i++;
            }
        }
        i=0;
        if(CollectionUtils.isNotEmpty(storeResponse.getSoldtoResult())) {
            for (String soldResult : storeResponse.getSoldtoResult()) {
                if (StringUtils.contains(soldResult, "FAIL")) {
                    messagesSalesList.add("Invalid SoldTo Number at " + i);
                }
                i++;
            }
        }
        storeResponse.setErrorMessageList(messagesSalesList);

        return storeResponse;
    }

    private BHGECSRRequest creatingCSRRequest(final CSRInfoFormWsDTO form)
    {
        final BHGECSRRequest csrRequest = new BHGECSRRequest();
        csrRequest.setCompanyAddress(form.getCompanyAddress());
        csrRequest.setCompanyAddressLine2(form.getCompanyAddressLine2());
        csrRequest.setCompanyName(form.getCompanyName());
        csrRequest.setCountry(form.getCountry());
        csrRequest.setDistrict(form.getDistrict());
        csrRequest.setPostalCode(form.getPostalCode());
        csrRequest.setRequestAccessId(form.getRequestAccessId());
        csrRequest.setTown(form.getTown());
        csrRequest.setDistrict(form.getDistrictEdit());
        csrRequest.setPostalCode(form.getPostalCodeEdit());
        csrRequest.setTown(form.getTownEdit());
        csrRequest.setCompanyName(form.getCompanyNameEdit());
        csrRequest.setProductLine(form.getProductLine());
        return csrRequest;
    }

}
