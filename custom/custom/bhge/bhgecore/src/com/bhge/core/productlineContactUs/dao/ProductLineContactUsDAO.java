package com.bhge.core.productlineContactUs.dao;

import com.bhge.core.model.ContactusSettingsModel;
import de.hybris.platform.core.model.media.MediaModel;

import java.util.List;
import java.util.Map;

public interface ProductLineContactUsDAO {
    MediaModel getMediaByCode(String attachmentId);
    
    Map<String, String> getContactUsSubProductLines(String productLine, String requestType);
}
