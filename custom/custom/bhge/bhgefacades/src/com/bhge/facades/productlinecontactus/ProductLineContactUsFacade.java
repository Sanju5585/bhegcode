package com.bhge.facades.productlinecontactus;

import com.ds.dsocc.data.ProductLineContactUsDataWsDTO;
import de.hybris.platform.core.model.media.MediaModel;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
import java.util.Set;

public interface ProductLineContactUsFacade {
    MediaModel saveContactUsAttachment(MultipartFile contactUsAttachment);
    void submitContactUsDataForGuestUser(ProductLineContactUsDataWsDTO form, String productLine);
    void submitContactUsDataForLoggedInUser(ProductLineContactUsDataWsDTO form, String productLine);
    Map<String, String> getContactUsSubProductLines(String productLine, String requestType);
}
