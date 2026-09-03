package com.bh.occ.controllers;

import com.bhge.facades.UserManage.BHGEUserManageFacade;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.ManageUsersB2bUnitData;
import com.ds.dsocc.common.dto.ManageUsersB2bUnitWsDTO;
import com.ds.dsocc.common.dto.ManageUsersB2bUnitsWsDTO;
import com.ds.dsocc.common.dto.UserManageSearchPageWsDto;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@Tag(name = "User Manage")
@RequestMapping(value = "/{baseSiteId}/usermanage")
public class DSUserManageController extends DSBaseController{
    private static final Logger LOG = Logger.getLogger(DSUserManageController.class);

    @Resource(name = "bhgeUserManageFacade")
    private BHGEUserManageFacade bhgeUserManageFacade;
    public static final int MAX_PAGE_LIMIT_FOR_DOWNLOAD = 10000;

    @GetMapping(value = "/getusers")
    @Operation(operationId = "getUsers", summary = "Get users and their details.", description = "Returns details of all users by user group.")
    @ApiBaseSiteIdAndUserIdParam
    public UserManageSearchPageWsDto getUsersWithRoles(@RequestParam(value = "page", defaultValue = "0") final int page,
                                                       @RequestParam(value = "pageSize", required = false) final String pageSize,@RequestParam(value = "sort", required = false) final String sort,@RequestParam(value = "searchTerm", required = false) final String searchTerm,
                                                       @RequestParam(value = "filterRoles", required = false) final List<String> filterRoles,
                                                       @RequestParam(value = "b2bUnit", required = false) final String b2bUnit,
                                                       @RequestParam(value = "isInternalusers", required = false) final boolean isInternalusers)
    {
        final PageableData pageableData = createPageableData(page, getPageSize(pageSize), sort, null);
        SearchPageData<BHGECustomerData> b2BCustomerModels = bhgeUserManageFacade.getUserDetails(pageableData, searchTerm, filterRoles, b2bUnit, isInternalusers);
        return getDataMapper().map(b2BCustomerModels, UserManageSearchPageWsDto.class, "DEFAULT");
    }


    @PostMapping(value = "/updateuser")
    @Operation(operationId = "updateuser", summary = "Update user detail from Management portal.", description = "Returns true if details updated.")
    @ApiBaseSiteIdAndUserIdParam
    public boolean updateUserDetails(@RequestParam(value = "uid", required = true) final String uid,
                                                       @RequestParam(value = "role", required = true) final String role, @RequestParam(value = "loginDisabled", required = true) final boolean logindisabled)
    {
        return bhgeUserManageFacade.updateUserDetails(uid,role,logindisabled);
    }

    private int getPageSize(final String pageSize) {
        if (StringUtils.isBlank(pageSize)) {
            return Integer.parseInt(PAGE_SIZE);
        } else {
            return Integer.parseInt(pageSize);
        }
    }

    @GetMapping(value = "/downloadusers",produces = "application/vnd.ms-excel")
    @Operation(operationId = "downloadusers", summary = "Download users and their details.", description = "Returns details in file")
    @ApiBaseSiteIdAndUserIdParam
    public void downloadUserDetails(HttpServletResponse response,@RequestParam(value = "page", defaultValue = "0") final int page,
                                    @RequestParam(value = "pageSize", required = false) final String pageSize,@RequestParam(value = "sort", required = false) final String sort,@RequestParam(value = "searchTerm", required = false) final String searchTerm,@RequestParam(value = "filterRoles", required = false) final List<String> filterRoles,
                                    @RequestParam(value = "b2bUnit", required = false) final String b2bUnit,
                                    @RequestParam(value = "isInternalusers", required = false) final boolean isInternalusers)
    {
        final PageableData pageableData = createPageableData(page, MAX_PAGE_LIMIT_FOR_DOWNLOAD, sort, null);
        SearchPageData<BHGECustomerData> b2BCustomerModels = bhgeUserManageFacade.getUserDetails(pageableData, searchTerm,filterRoles, b2bUnit, isInternalusers);
        generateExcelForManageUsers(b2BCustomerModels.getResults(),response);
    }

    @GetMapping(value = "/getB2bUnits")
    @ApiBaseSiteIdAndUserIdParam
    @Operation(operationId = "getB2bUnits", summary = "Get B2b Units.", description = "Returns B2b Units.")
    public ManageUsersB2bUnitsWsDTO getB2bUnits(
            @RequestParam(value = "page", defaultValue = "0") final int page,
            @RequestParam(value = "pageSize", required = false) final String pageSize,@RequestParam(value = "sort", required = false) final String sort,@RequestParam(value = "searchTerm", required = false) final String searchTerm)
    {
        final PageableData pageableData = createPageableData(page, getPageSize(pageSize), sort, null);
        SearchPageData<ManageUsersB2bUnitData> b2bUnitsData = bhgeUserManageFacade.getB2bUnits(pageableData, searchTerm);
        return getDataMapper().map(b2bUnitsData, ManageUsersB2bUnitsWsDTO.class, "DEFAULT");
    }

    @GetMapping(value = "/getB2bUnit")
    @ApiBaseSiteIdAndUserIdParam
    @Operation(operationId = "getB2bUnit", summary = "Get sepecific B2b Unit.", description = "Returns a specific B2b Unit.")
    public ManageUsersB2bUnitWsDTO getB2bUnit(
            @RequestParam(value = "searchTerm", required = true) final String searchTerm)
    {
        final ManageUsersB2bUnitData b2bUnitData = bhgeUserManageFacade.getB2bUnit(searchTerm);
        return getDataMapper().map(b2bUnitData, ManageUsersB2bUnitWsDTO.class, "DEFAULT");
    }

    private void generateExcelForManageUsers(List<BHGECustomerData> bhgeCustomerData, HttpServletResponse response)
    {
        try
        {
            final Workbook workbook = new XSSFWorkbook();
            final Sheet sheet = workbook.createSheet("UserDataList");
            sheet.setDefaultColumnWidth(5);

            final CellStyle style = workbook.createCellStyle();
            final Font font = workbook.createFont();
            font.setFontName("Calibri");
            font.setBold(true);
            style.setFont(font);

            final Row header = sheet.createRow(0);

            header.createCell(0).setCellValue("UID");
            header.getCell(0).setCellStyle(style);
            header.createCell(1).setCellValue("Name");
            header.getCell(1).setCellStyle(style);
            header.createCell(2).setCellValue("Role");
            header.getCell(2).setCellStyle(style);
            header.createCell(3).setCellValue("Last Login");
            header.getCell(3).setCellStyle(style);
            header.createCell(4).setCellValue("Login Disabled");
            header.getCell(4).setCellStyle(style);
            int rowCount = 1;
            for(BHGECustomerData user : bhgeCustomerData)
            {
                final Row row = sheet.createRow(rowCount++);
                row.createCell(0).setCellValue(user.getUid());
                row.createCell(1).setCellValue(user.getName());
                row.createCell(2).setCellValue(user.getDsRoles());
                row.createCell(3).setCellValue(user.getLastLogin());
                row.createCell(4).setCellValue(user.getLoginDisabled());
            }
            sheet.autoSizeColumn(0);
            sheet.autoSizeColumn(1);
            sheet.autoSizeColumn(2);
            sheet.autoSizeColumn(3);
            sheet.autoSizeColumn(4);

            final Date date = new Date();
            final SimpleDateFormat format1 = new SimpleDateFormat("dd-MM-yyyy");
            final String date1 = format1.format(date);

            response.setContentType("application/vnd.ms-excel");
            response.setHeader("Content-disposition", "attachment;filename=" + "UserData_" + date1 + ".xlsx");
            final OutputStream ouputStream = response.getOutputStream();
            workbook.write(ouputStream);
            ouputStream.flush();
            ouputStream.close();
        }
        catch (final Exception e)
        {
            LOG.error("Error creating excel template for userData export :" + e);
        }
    }
}
