package com.bhge.core.productlineContactUs.service;

import com.bhge.core.model.ContactusSettingsModel;
import de.hybris.platform.core.model.media.MediaModel;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface ProductLineContactUsService {

    MediaModel saveContactUsAttachment(MultipartFile contactUsAttachment);

    Map<String, String> getContactUsSubProductLines(String productLine, String requestType);
}
