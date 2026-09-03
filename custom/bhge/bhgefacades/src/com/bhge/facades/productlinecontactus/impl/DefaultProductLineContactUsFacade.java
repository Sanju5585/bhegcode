package com.bhge.facades.productlinecontactus.impl;

import com.bhge.core.data.ProductLineContactUsData;
import com.bhge.core.model.BHGEContactUsModel;
import com.bhge.core.model.ContactusSettingsModel;
import com.bhge.core.productlineContactUs.service.ProductLineContactUsService;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.facades.order.populators.BHGEContactUsReversePopulator;
import com.bhge.facades.productlinecontactus.ProductLineContactUsFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.ds.dsocc.data.ProductLineContactUsDataWsDTO;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import java.util.*;
import java.util.stream.Collectors;

public class DefaultProductLineContactUsFacade implements ProductLineContactUsFacade {

    @Resource(name = "productLineContactUsService")
    ProductLineContactUsService productLineContactUsService;

    @Resource(name="userService")
    UserService userService;

    @Resource(name = "bhgeUserProfileFacade")
    BHGEUserProfileFacade bhgeUserProfileFacade;

    @Autowired
    private BHGEContactUsReversePopulator reversePopulator;

    @Autowired
    private BHGEUserProfileDao bhgeUserProfileDao;

    @Override
    public MediaModel saveContactUsAttachment(MultipartFile contactUsAttachment) {
        return productLineContactUsService.saveContactUsAttachment(contactUsAttachment);
    }
    @Override
    public void submitContactUsDataForGuestUser(ProductLineContactUsDataWsDTO form, String productLine) {
        final ProductLineContactUsData contactUsData = new ProductLineContactUsData();
        if(Objects.nonNull(form)){
            contactUsData.setProductLine(StringEscapeUtils.escapeHtml4(productLine));
            contactUsData.setRequestType(StringEscapeUtils.escapeHtml4(form.getRequestType()));
            contactUsData.setOrderNumber(StringEscapeUtils.escapeHtml4(form.getOrderNumber()));
            contactUsData.setRmaNumber(StringEscapeUtils.escapeHtml4(form.getRmaNumber()));
            contactUsData.setSubProductLine(StringEscapeUtils.escapeHtml4(form.getSubProductLine()));
            contactUsData.setFirstName(StringEscapeUtils.escapeHtml4(form.getFirstName()));
            contactUsData.setLastName(StringEscapeUtils.escapeHtml4(form.getLastName()));
            contactUsData.setCompanyName(StringEscapeUtils.escapeHtml4(form.getCompanyName()));
            contactUsData.setEmail(StringEscapeUtils.escapeHtml4(form.getEmail()));
            contactUsData.setPhoneNum(StringEscapeUtils.escapeHtml4(form.getPhoneNum()));
            contactUsData.setCountry(StringEscapeUtils.escapeHtml4(form.getCountry()));
            contactUsData.setState(StringEscapeUtils.escapeHtml4(form.getState()));
            contactUsData.setMktoPersonNotes(StringEscapeUtils.escapeHtml4(form.getMktoPersonNotes()));
            contactUsData.setOptIn(form.isOptIn());
            contactUsData.setAttachmentId(StringEscapeUtils.escapeHtml4(form.getAttachmentId()));
        }
        reversePopulator.populate(contactUsData, new BHGEContactUsModel());
    }

    @Override
    public void submitContactUsDataForLoggedInUser(ProductLineContactUsDataWsDTO form, String productLine) {
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        final ProductLineContactUsData contactUsData = new ProductLineContactUsData();
        if (currentUser!=null){
            contactUsData.setFirstName(StringUtils.isNotBlank(currentUser.getFirstName()) ? currentUser.getFirstName() : currentUser.getName());
            contactUsData.setLastName(StringUtils.isNotBlank(currentUser.getLastName()) ? currentUser.getLastName() : "");
            contactUsData.setEmail(currentUser.getUid());
            if(currentUser.getDefaultB2BUnit()!=null){
                contactUsData.setCompanyName(currentUser.getDefaultB2BUnit().getName());
                B2BUnitModel parentB2bUnitModel = bhgeUserProfileFacade.getParentB2bUnitModel(currentUser.getDefaultB2BUnit());
                AddressData addressData = bhgeUserProfileFacade.findSoldToAddressForSearchPop(parentB2bUnitModel);
                if(addressData!=null) {
                    contactUsData.setCountry(addressData.getCountry()!=null?addressData.getCountry().getIsocode():null);
                    contactUsData.setState(addressData.getRegion()!=null?addressData.getRegion().getCountryIso():null);
                }
            }
        }
        if(Objects.nonNull(form)){
            contactUsData.setProductLine(StringEscapeUtils.escapeHtml4(productLine));
            contactUsData.setRequestType(StringEscapeUtils.escapeHtml4(form.getRequestType()));
            contactUsData.setOrderNumber(StringEscapeUtils.escapeHtml4(form.getOrderNumber()));
            contactUsData.setRmaNumber(StringEscapeUtils.escapeHtml4(form.getRmaNumber()));
            contactUsData.setSubProductLine(StringEscapeUtils.escapeHtml4(form.getSubProductLine()));
            contactUsData.setMktoPersonNotes(StringEscapeUtils.escapeHtml4(form.getMktoPersonNotes()));
            contactUsData.setOptIn(form.isOptIn());
            contactUsData.setAttachmentId(StringEscapeUtils.escapeHtml4(form.getAttachmentId()));
            contactUsData.setContactUsEmail(StringEscapeUtils.escapeHtml4(form.getContactUsEmail()));
        }
        reversePopulator.populate(contactUsData, new BHGEContactUsModel());
    }

    @Override
    public Map<String, String> getContactUsSubProductLines(String productLine, String requestType) {
        if (userService.isAnonymousUser(userService.getCurrentUser())) {
            return productLineContactUsService.getContactUsSubProductLines(productLine, requestType);
        } else {
            Map<String, String> subProductLines = new HashMap<>();
            final UserModel user = userService.getCurrentUser();
            if (user instanceof GEEdgeCustomerModel requestedUser) {
                final B2BUnitModel defaultB2bUnit = requestedUser.getDefaultB2BUnit();
                B2BUnitModel parentB2bUnitModel = bhgeUserProfileFacade.getParentB2bUnitModel(defaultB2bUnit);
                AddressData addressData = bhgeUserProfileFacade.findSoldToAddressForSearchPop(parentB2bUnitModel);
                if (Objects.nonNull(addressData) &&
                        Objects.nonNull(addressData.getCountry()) &&
                        StringUtils.isNotBlank(addressData.getCountry().getIsocode())) {
                    String regionValue = bhgeUserProfileFacade.getRegionValue(addressData);
                    if (StringUtils.isBlank(regionValue)){
                        regionValue = "NorthAmerica";
                    }
                    List<ContactusSettingsModel> contactusList = bhgeUserProfileDao.getContactUsByRegion(regionValue);
                    if (CollectionUtils.isNotEmpty(contactusList)) {
                        subProductLines = contactusList.stream()
                                .filter(settings ->
                                        StringUtils.isNotBlank(settings.getCommerceTypeValue())
                                                && StringUtils.containsIgnoreCase(settings.getCommerceTypeValue(), requestType)
                                                && StringUtils.isNotBlank(settings.getContactUsProductLine())
                                                && StringUtils.containsIgnoreCase(settings.getContactUsProductLine(), productLine))
                                .collect(Collectors.toMap(
                                        ContactusSettingsModel::getContactUsProductLine,
                                        settings -> StringUtils.isNotBlank(settings.getEmail()) && isValidEmail(settings.getEmail()) ? settings.getEmail() : "",
                                        (existing, replacement) -> existing
                                ));

                    }
                }

            }
            return subProductLines;
        }
    }
    private boolean isValidEmail(String email) {
        return email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }
}
