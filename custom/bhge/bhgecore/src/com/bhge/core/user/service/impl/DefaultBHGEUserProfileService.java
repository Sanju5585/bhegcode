/**
 *
 */
package com.bhge.core.user.service.impl;

import com.hybris.ge.edge.core.model.type.BHGECustomerClassificationModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.exceptions.AmbiguousIdentifierException;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.i18n.daos.CountryDao;
import de.hybris.platform.servicelayer.i18n.daos.RegionDao;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECategorytoSalesOrgModel;
import com.bhge.core.model.BHGECurrencyFormatModel;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
//import com.bhge.core.model.GEEdgeCurrencyFormatModel;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.user.data.GetAddressFormData;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.store.services.BHGEBaseStoreService;

public class DefaultBHGEUserProfileService implements BHGEUserProfileService {

    private static final Logger LOG = Logger.getLogger(DefaultBHGEUserProfileService.class);

    private static final String ORDER_ADMIN = "UG_ADMIN_ORDER_STORE";

    private BHGEUserProfileDao userProfileDao;

    @Resource(name = "countryDao")
    private CountryDao countryDao;

    @Resource(name = "regionDao")
    private RegionDao regionDao;

    @Resource(name = "baseStoreService")
    private BHGEBaseStoreService baseStoreService;

    @Resource(name = "catalogVersionService")
    private CatalogVersionService catalogVersionService;

    @Resource
    ModelService modelService;

    @Resource
    B2BUnitService b2bUnitService;

    @Autowired
    private BHGEB2BUnitService bhgeB2BUnitService;

    @Resource(name = "mediaCodeGenerator")
    private KeyGenerator mediaCodeGenerator;

    @Resource(name = "mediaService")
    private MediaService mediaService;

    @Resource(name = "bhgeEmailService")
    private BHGEEmailService bhgeEmailService;

    @Autowired
    private BHGESoldToUtil bhgeSoldToUtil;
    @Autowired
    FlexibleSearchService flexibleSearchService;

    @Override
    public GEEdgeCustomerModel findCurrentUserProfile(final String uid) {
        if (LOG.isDebugEnabled()) {
            LOG.debug("Entered into DefaultGEEdgeUserProfileService.findCurrentUserProfile method");
        }
        final List<GEEdgeCustomerModel> result = userProfileDao.findCurrentUserProfile(uid);
        if (result.isEmpty()) {
            throw new UnknownIdentifierException("user with uid '" + uid + "' not found!");
        } else if (result.size() > 1) {
            throw new AmbiguousIdentifierException("user uid '" + uid + "' is not unique, " + result.size() + " user found!");
        }
        return result.get(0);
    }

    @Override
    public B2BUnitModel findChildB2BUnitModel(final String uid) {
        if (LOG.isDebugEnabled()) {
            LOG.debug("Entered into DefaultGEEdgeUserProfileService.findParentB2BUnitModel method");
        }
        final List<B2BUnitModel> result = userProfileDao.findChildB2BUnitModel(uid);
        if (result.isEmpty()) {
            throw new UnknownIdentifierException("user not found!");
        } else if (result.size() > 1) {
            throw new AmbiguousIdentifierException("user uid, user found!");
        }
        return result.get(0);
    }

    @Override
    public List<B2BUnitModel> getAllChildB2BUnitModel(final String uid) {
        if (LOG.isDebugEnabled()) {
            LOG.debug("Entered into DefaultGEEdgeUserProfileService.findParentB2BUnitModel method");
        }
        final List<B2BUnitModel> result = userProfileDao.getAllChildB2BUnitModel(uid);
        if (result.isEmpty()) {
            throw new UnknownIdentifierException("user with uid '" + uid + "' not found!");
        }
        return result;
    }

    @Override
    public String getUserDefaultSalesRegion() {
        if (baseStoreService != null) {
            final BaseStoreModel baseStoreModel = baseStoreService.getCurrentBaseStore();
            final SAPConfigurationModel sapConfiguration = baseStoreModel.getSAPConfiguration();
            if (null != sapConfiguration) {
                return sapConfiguration.getSapcommon_salesOrganization() + "_" + sapConfiguration.getSapcommon_distributionChannel()
                        + "_" + sapConfiguration.getSapcommon_division();
            }
        }
        return null;
    }

    @Override
    public List<RegionModel> getRegionsForCountryCode(final String countryCode) {
        final List<CountryModel> countries = countryDao.findCountriesByCode(countryCode);

        if (countries.isEmpty()) {
            return Collections.EMPTY_LIST;
        } else {
            final CountryModel countryModel = countries.get(0);
            final List<RegionModel> regions = regionDao.findRegionsByCountry(countryModel);

            if (regions == null || regions.size() == 0) {
                //LOG.warn("Returning null. No regions found for countrycode");
                return null;
            } else {
                return regions;
            }
        }
    }

    @Override
    public List<B2BUnitModel> findSoldTo(final String text, final String soldtos) {
        if (LOG.isDebugEnabled()) {
            LOG.debug("Entered into DefaultGEEdgeUserProfileService.findCurrentUserProfile method");
        }
        final List<B2BUnitModel> result = userProfileDao.findSoldTo(text, soldtos);
        return result;
    }

    public List<AddressModel> getAddress(final String zipCode) {
        return userProfileDao.getAddress(zipCode);
    }

    
    public void setUserProfileDao(final BHGEUserProfileDao userProfileDao) {
        this.userProfileDao = userProfileDao;
    }

    @Override
    public ProductModel getProductForCode(final String code) {
        try {
            if (StringUtils.isNotBlank(code)) {
                return userProfileDao.getProductForCode(code);
            }
        } catch (final RuntimeException re) {
            LOG.error("Code is Empty");
        }
        return null;
    }

    //Added for spartacus migration
    @Override
    public ProductModel getProductForCodeWs(final String code, BHGESoldToUtil bhgeSoldToUtil) {
        try {
            if (StringUtils.isNotBlank(code)) {
                return userProfileDao.getProductForCodeWs(code, bhgeSoldToUtil);
            }
        } catch (final RuntimeException re) {
            LOG.error("Code is Empty");
        }
        return null;
    }

    @Override
    public List<B2BUnitModel> getB2bUnits() {
        return userProfileDao.getB2bUnits();
    }

    @Override
    public List<BHGECustomerClassificationModel> getCustomerClassification(String code) {
        return userProfileDao.getCustomerClassification(code);
    }

    @Override
    public List<BHGECurrencyFormatModel> getCurrencyFormats() {
        return userProfileDao.retriveAllCurrencyFormats();
    }

    public boolean uploadMediatoSoldto(final MultipartFile file, final String soldtoUid) {
        if ((null != file) && ((!file.isEmpty())) && null != soldtoUid) {
            try {
                final List<MediaModel> soldtounitmedia = new ArrayList<MediaModel>();
                final MediaModel mediaModel = new MediaModel();
                String mediaName = null;
                final String contentType = file.getContentType();
                String fileExtension = MediaUtil.getFileExtension(file.getName());
                if (StringUtils.isBlank(fileExtension)) {
                    fileExtension = MediaUtil.getFileExtension(file.getOriginalFilename());
                }
                mediaName = soldtoUid + "_" + "SoldtoPopupImage" + "_" + mediaCodeGenerator.generate().toString();
                mediaModel.setRealFileName(file.getOriginalFilename());
                mediaModel.setCode(mediaName);
                final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG,
                        "Online");
                mediaModel.setCatalogVersion(versions);
                modelService.save(mediaModel);
                final MediaModel soldToMedia = uploadFile(file, mediaModel, file.getOriginalFilename(), contentType);
                soldtounitmedia.add(soldToMedia);
                final B2BUnitModel soldtoUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(soldtoUid);
                if (soldtoUnit != null) {
                    soldtoUnit.setMedias(soldtounitmedia);
                }
                modelService.save(soldtoUnit);

                LOG.info("Image with name " + mediaName + " is succesfully uploaded to B2Bunit " + soldtoUid);

                return true;
            } catch (final Exception e) {
                LOG.error("Exception while uploading file:" + e);
                return false;
            }
        }
        return true;

    }

    public boolean removeMediaofSoldto(final String soldtoUid) {
        if (null != soldtoUid) {
            try {
                final B2BUnitModel soldtoUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(soldtoUid);
                if (soldtoUnit != null) {
                    if (!soldtoUnit.getMedias().isEmpty()) {
                        soldtoUnit.setMedias(null);
                    }
                }
                modelService.save(soldtoUnit);

                LOG.info("Image  is succesfully deleted from B2Bunit " + soldtoUid);

                return true;
            } catch (final Exception e) {
                LOG.error("Exception while uploading file:" + e);
                return false;
            }
        }
        return true;

    }

    public MediaModel uploadFile(final MultipartFile file, final MediaModel mediaModel, final String originalFileName,
            final String contentType) throws Exception {
        try {
            final InputStream inputStream = file.getInputStream();
            mediaService.setStreamForMedia(mediaModel, inputStream, originalFileName, contentType);
        } catch (final Exception e) {
            LOG.error("Exception while uploading media" + e);
        }
        return mediaModel;
    }

    /*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.user.service.BHGEUserProfileService#getProductForCodeRma(java.lang.String)
     */
    @Override
    public ProductModel getProductForCodeRma(final String code) {
        // XXX Auto-generated method stub
        return userProfileDao.getProductForCodeRma(code);
    }

    @Override
    public List<AddressModel> getAddressesForCurrentCustomerAccountAndSAPCustomerID(final GetAddressFormData form) {
        return userProfileDao.getAddressesForCurrentCustomerAccountAndSAPCustomerID(form);
    }

    @Override
    public boolean fetchAndSendPendingActiveUser() {
        FileOutputStream fos = null;
        File file = null;

        final List<BHGEUserAccessRequestModel> pendingActivationUsers = userProfileDao.fetchPendingActiveUser();

        // Generating Sheet based on Users with Pending Activation Status
        final Workbook xlsFile = generateXLSFileForPendingActivationUsers(pendingActivationUsers);

        if (CollectionUtils.isNotEmpty(pendingActivationUsers)) {
            try {
                fos = new FileOutputStream("PendingActivationUsers.xls");
                xlsFile.write(fos);
                file = new File("PendingActivationUsers.xls");

                // Sending Mail with attachment
                bhgeEmailService.sendMailForPendingActivationUsers(file, Config.getParameter("pendingActivationUsersSubject"),
                        Config.getParameter("pendingActivationUsersDataJobTo"));

            } catch (final RuntimeException re) {
                LOG.error("Exception in fetchAndSendPendingActiveUser method ", re);
                return false;
            } catch (final FileNotFoundException fne) {
                LOG.error("FileNotFoundException in fetchAndSendPendingActiveUser method ", fne);
                return false;
            } catch (final IOException ioe) {
                LOG.error("IOException in fetchAndSendPendingActiveUser method ", ioe);
                return false;
            } finally {
                try {
                    fos.flush();
                    fos.close();
                } catch (final IOException ioe) {
                    LOG.error("IOException in fetchAndSendPendingActiveUser method while closing the FileOutputStream", ioe);
                }
            }
        } else {
            LOG.info("No Users with Pending Activaton Status found");
        }
        return true;

    }

    private Workbook generateXLSFileForPendingActivationUsers(final List<BHGEUserAccessRequestModel> pendingActivationUsers) {

        final Workbook xlsFile = new HSSFWorkbook(); // create a workbook
        final CreationHelper helper = xlsFile.getCreationHelper();
        final Sheet usersSheet = xlsFile.createSheet("Users with PendingActivation");
        populateSheetForPendingActivationUsers(usersSheet, helper, pendingActivationUsers);

        return xlsFile;
    }

    private void populateSheetForPendingActivationUsers(final Sheet usersSheet, final CreationHelper helper,
            final List<BHGEUserAccessRequestModel> pendingActivationUsers) {
        try {
            LOG.debug("In populateSheetForPendingActivationUsers Method");
            usersSheet.setDefaultColumnWidth(16);

            final Row userRow = usersSheet.createRow((short) 0); // create a new row in your Buy sheet

            // cell creation for Users sheet
            userRow.createCell(0).setCellValue(helper.createRichTextString("NAME"));
            userRow.createCell(1).setCellValue(helper.createRichTextString("SSO"));
            userRow.createCell(2).setCellValue(helper.createRichTextString("EMAIL"));
            userRow.createCell(3).setCellValue(helper.createRichTextString("PRODUCT_LINE"));
            userRow.createCell(4).setCellValue(helper.createRichTextString("REGISTERED_DATE"));
            userRow.createCell(5).setCellValue(helper.createRichTextString("SOLD_TO"));
            userRow.createCell(6).setCellValue(helper.createRichTextString("SOLD_TO_NAME"));
            userRow.createCell(7).setCellValue(helper.createRichTextString("ADDRESS"));
            userRow.createCell(8).setCellValue(helper.createRichTextString("REQUEST_STATUS"));

            int userCount = 1;
            if (CollectionUtils.isNotEmpty(pendingActivationUsers)) {
                for (final BHGEUserAccessRequestModel pendingActiveUser : pendingActivationUsers) {
                    if (null != pendingActiveUser.getRequesterId() && null != pendingActiveUser.getApproverDetails()
                            && null != pendingActiveUser.getApproverDetails().getAppAccessLevel()
                            && null != pendingActiveUser.getApproverDetails().getAppAccessLevel().getApplicationInfo()
                            && pendingActiveUser.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1) {
                        final Row r = usersSheet.createRow(userCount);
                        populateSheetForUserdetails(pendingActiveUser, r);
                        userCount++;
                    }
                }
            }
        } catch (final RuntimeException re) {
            LOG.error("Exception in populateSheetForPendingActivationUsers", re);
        }
    }

    private void populateSheetForUserdetails(final BHGEUserAccessRequestModel pendingActiveUser, final Row r) {

        r.createCell(0).setCellValue(pendingActiveUser.getRequesterId().getName());
        r.createCell(1).setCellValue(pendingActiveUser.getRequesterId().getSso());
        r.createCell(2).setCellValue(pendingActiveUser.getRequesterId().getEmail());
        r.createCell(3)
                .setCellValue(pendingActiveUser.getRequesterId().getProductLine() != null
                        ? pendingActiveUser.getRequesterId().getProductLine().getAttributeKey()
                        : "");
        final Date userCreationTime = pendingActiveUser.getCreationtime();
        if (null != userCreationTime) {
            final String orderCreationDate = DateFormat.getDateInstance(DateFormat.LONG).format(userCreationTime);
            r.createCell(4).setCellValue(orderCreationDate);
        }
        if (StringUtils.isNotEmpty(pendingActiveUser.getRequesterId().getRequestCustomerId())) {
            final String b2bUnitId = BHGESAPJCoUtils.addLeadingZeros(pendingActiveUser.getRequesterId().getRequestCustomerId(), 10);
            r.createCell(5).setCellValue(b2bUnitId);
            final B2BUnitModel b2bUnit = bhgeB2BUnitService.getUnitForUid(b2bUnitId);
            if (null != b2bUnit) {
                final String b2bUnitName = b2bUnit.getName();
                r.createCell(6).setCellValue(b2bUnitName);
            }
        }
        r.createCell(7).setCellValue(populateCustomerAddress(pendingActiveUser.getRequesterId()));
        r.createCell(8).setCellValue(pendingActiveUser.getRequestStatus().getCode());
    }

    public String populateCustomerAddress(final BHGERegieterCustomerModel customer) {
        final String customerAddress = customer.getCompanyAddress() != null
                ? (((StringUtils.isNotEmpty(customer.getCompanyAddress().getCompany())
                || customer.getCompanyAddress().getCompany() != null) ? customer.getCompanyAddress().getCompany() + "-" : "")
                + ((StringUtils.isNotEmpty(customer.getCompanyAddress().getLine1())
                || customer.getCompanyAddress().getLine1() != null) ? customer.getCompanyAddress().getLine1() + "-" : "")
                + ((StringUtils.isNotEmpty(customer.getCompanyAddress().getLine2())
                || customer.getCompanyAddress().getLine2() != null) ? customer.getCompanyAddress().getLine2() + "-" : "")
                + ((StringUtils.isNotEmpty(customer.getCompanyAddress().getDistrict())
                || customer.getCompanyAddress().getDistrict() != null) ? customer.getCompanyAddress().getDistrict() + "-"
                : "")
                + (customer.getCompanyAddress().getCountry() != null
                ? customer.getCompanyAddress().getCountry().getIsocode() + "-"
                : "")
                + ((StringUtils.isNotEmpty(customer.getCompanyAddress().getPostalcode())
                || customer.getCompanyAddress().getPostalcode() != null) ? customer.getCompanyAddress().getPostalcode()
                : ""))
                : "";
        return customerAddress;
    }

    @Override
    public BHGEAnonymousUserCatalogModel getCountryToUnitMappingForAnonymousUser(final CountryModel defaultCountryModel) {
        return userProfileDao.getCountryToUnitMappingForAnonymousUser(defaultCountryModel);
    }

    @Override
    public BHGEAnonymousUserCatalogModel getCountryandSalesOrgMappingForAnonymousUser(final String salesOrg, final String distributionChannel,
            final String division, final CountryModel defaultCountryModel) {
        return userProfileDao.getCountryandSalesOrgMappingForAnonymousUser(salesOrg, distributionChannel, division, defaultCountryModel);
    }

    @Override
    public BHGECategorytoSalesOrgModel getSalesOrgToCategoryMappingForAnonymousUser(final String categoryCode) {
        return userProfileDao.getSalesOrgToCategoryMappingForAnonymousUser(categoryCode);
    }

    @Override
    public List<BHGECategorytoSalesOrgModel> getAllSalesOrgToCategoryForAnonymousUser() {
        return userProfileDao.getAllSalesOrgToCategoryForAnonymousUser();
    }

    @Override
    public List<RegionModel> getRegionsForCountryIso(final String countryIso) {
        LOG.info("Inside UserProfile Service class");
        return userProfileDao.getRegionsForCountryIso(countryIso);
    }

    @Override
    public List<GEEdgeCustomerModel> findAllUsers() {
        String query = "SELECT {pk} FROM {GEEdgeCustomer} where {uid} like '%@bakerhughes.com'";
        FlexibleSearchQuery searchQuery = new FlexibleSearchQuery(query);
        SearchResult<GEEdgeCustomerModel> result = flexibleSearchService.<GEEdgeCustomerModel>search(searchQuery);
        return result.getResult();
    }

    @Override
    public List<String> getAllUserRoles() {
        final String userRoles = Config.getString("all.user.roles", "UG_ADMIN_ORDER_STORE, UG_ORDER_TRACKING, UG_RMA_AUTHORITY, UG_VIEW_STORE");
        List<String> userRolesList = Arrays.asList(userRoles.split(","));
        return userRolesList;
    }
}
