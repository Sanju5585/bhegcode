package com.bhge.core.productlineContactUs.dao.impl;

import com.bhge.core.model.ContactusSettingsModel;
import com.bhge.core.productlineContactUs.dao.ProductLineContactUsDAO;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.Resource;
import java.util.*;
import java.util.stream.Collectors;

public class DefaultProductLineContactUsDAO implements ProductLineContactUsDAO {

    private static final Logger LOG = LoggerFactory.getLogger(DefaultProductLineContactUsDAO.class);

    @Resource(name = "flexibleSearchService")
    FlexibleSearchService flexibleSearchService;

    private static final String CONTACTUS_SETTINGS_PRODUCT_LINES = """
           SELECT {cs.PK}
           FROM {ContactusSettings AS cs}
           WHERE LOWER({cs.contactUsProductLine}) LIKE LOWER(CONCAT('%', ?productLine, '%')) AND LOWER({cs.commerceTypeValue})=?requestType
       """;

    @Override
    public MediaModel getMediaByCode(String attachmentId) {
        try {
            final FlexibleSearchQuery fQuery = new FlexibleSearchQuery("SELECT {PK} FROM {Media} WHERE {code}=?code");
            fQuery.addQueryParameter("code", attachmentId);
            return flexibleSearchService.searchUnique(fQuery);
        } catch (Exception e) {
            LOG.error("Exception while fetching Media by code: {}", attachmentId);
        }
        return null;
    }

    @Override
    public Map<String, String> getContactUsSubProductLines(String productLine, String requestType) {
        try {
            Map<String, String> subProductLines;
            final FlexibleSearchQuery query = new FlexibleSearchQuery(CONTACTUS_SETTINGS_PRODUCT_LINES);
            query.addQueryParameter("productLine", productLine);
            query.addQueryParameter("requestType", requestType.toLowerCase());
            final SearchResult<ContactusSettingsModel> result = flexibleSearchService.search(query);
            if (CollectionUtils.isNotEmpty(result.getResult())) {
                subProductLines = result.getResult().stream()
                        .collect(Collectors.toMap(
                                ContactusSettingsModel::getContactUsProductLine,
                                settings -> StringUtils.isNotBlank(settings.getEmail()) && isValidEmail(settings.getEmail()) ? settings.getEmail() : "",
                                (existing, replacement) -> existing
                        ));
                return subProductLines;
            }
        } catch (Exception e) {
            LOG.error("Error while fetching sub-product lines: {}", e.getMessage());
        }
        return null;
    }
    private boolean isValidEmail(String email) {
        return email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }
}
