package com.bhge.inbound;

import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.inboundservices.persistence.PersistenceContext;
import de.hybris.platform.inboundservices.persistence.hook.PrePersistHook;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.i18n.I18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Locale;
import java.util.Optional;

public class BHGESapCpiProductDocumentPrePersistenceHook implements PrePersistHook {

    private static final Logger LOG = LoggerFactory.getLogger(BHGESapCpiProductDocumentPrePersistenceHook.class);

    @Autowired
    private ModelService modelService;

    @Autowired
    private I18NService i18nService;

    @Autowired
    private CommonI18NService commonI18NService;

    @Override
    public Optional<ItemModel> execute(ItemModel item, PersistenceContext context) {
        if (item instanceof ProductModel product) {
            LOG.info("Processing ProductModel in PrePersistHook for item {}", item);
            setLocaleToEnglish();
            try {
                updateProductDescriptionIfNecessary(product);
            } catch (Exception ex) {
                LOG.error("Error while processing product description in PrePersistHook: {}", ex.getMessage(), ex);
            }
        }
        return Optional.of(item);
    }

    private void setLocaleToEnglish() {
        try {
            LanguageModel languageModel = commonI18NService.getLanguage("en");
            Locale locale = commonI18NService.getLocaleForLanguage(languageModel);
            i18nService.setCurrentLocale(locale);
            LOG.info("Locale set to English for product description processing");
        } catch (Exception e) {
            LOG.error("Failed to set locale in PrePersistHook: {}", e.getMessage(), e);
        }
    }

    private void updateProductDescriptionIfNecessary(ProductModel product) {
        String prodDes = product.getDescription(i18nService.getCurrentLocale());
        if (StringUtils.isNotBlank(prodDes) && prodDes.contains("\n")) {
            LOG.info("Line break detected in product description. Updating...");
            prodDes = prodDes.replace("\n", "<br>").trim();
            LOG.info("Updated product description: {}", prodDes);
            product.setDescription(prodDes, i18nService.getCurrentLocale());
            modelService.save(product);
            modelService.refresh(product);
            LOG.info("Product description updated and saved successfully for product{}", product.getCode());
        } else {
            LOG.info("No line breaks detected in product description");
        }
    }
}