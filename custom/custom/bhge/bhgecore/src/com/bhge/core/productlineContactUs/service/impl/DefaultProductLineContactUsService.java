package com.bhge.core.productlineContactUs.service.impl;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.productlineContactUs.dao.ProductLineContactUsDAO;
import com.bhge.core.productlineContactUs.service.ProductLineContactUsService;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import java.io.InputStream;
import java.util.Map;

public class DefaultProductLineContactUsService implements ProductLineContactUsService {

    private static final Logger LOG = LoggerFactory.getLogger(DefaultProductLineContactUsService.class);

    @Resource(name = "mediaService")
    private MediaService mediaService;

    @Resource(name = "mediaCodeGenerator")
    private KeyGenerator mediaCodeGenerator;

    @Resource(name = "catalogVersionService")
    private CatalogVersionService catalogVersionService;

    @Resource(name = "modelService")
    private ModelService modelService;

    @Resource(name="productLineContactUsDAO")
    private ProductLineContactUsDAO productLineContactUsDAO;


    @Override
    public MediaModel saveContactUsAttachment(MultipartFile contactUsAttachment) {
        String mediaName;
        final String contentType = contactUsAttachment.getContentType();
        final MediaModel mediaModel = new MediaModel();
        final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
        mediaModel.setFolder(mediaFolder);
        mediaName = mediaCodeGenerator.generate().toString();
        mediaModel.setRealFileName(contactUsAttachment.getOriginalFilename());
        mediaModel.setCode(mediaName);
        // POC mandates catalog version for media.
        final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG, "Online");
        mediaModel.setCatalogVersion(versions);
        modelService.save(mediaModel);
        return uploadFile(contactUsAttachment, mediaModel,contactUsAttachment.getOriginalFilename(), contentType);
    }

    @Override
    public Map<String, String> getContactUsSubProductLines(String productLine, String requestType) {
        return productLineContactUsDAO.getContactUsSubProductLines(productLine, requestType);
    }

    public MediaModel uploadFile(final MultipartFile file, final MediaModel mediaModel, final String originalFileName,
                                 final String contentType)
    {
        try
        {
            final InputStream inputStream = file.getInputStream();
            mediaService.setStreamForMedia(mediaModel, inputStream, originalFileName, contentType);
        }
        catch (final Exception e)
        {
            LOG.error("Exception while uploading media{}", e.getMessage());
        }
        return mediaModel;
    }
}
