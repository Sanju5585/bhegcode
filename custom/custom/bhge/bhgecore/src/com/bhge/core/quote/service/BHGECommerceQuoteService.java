package com.bhge.core.quote.service;

import com.bhge.facades.address.BHGEShippingAddressFormData;
import de.hybris.platform.commerceservices.order.CommerceQuoteService;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.UserModel;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface BHGECommerceQuoteService extends CommerceQuoteService {
    void submitQuoteFrom(String userName, String company, String contactNumber, String emailAddress, String address1, String address2, String country, String region, String postalCode, String city, String emailtype, QuoteModel quoteModel, UserModel userModel, String description, BHGEShippingAddressFormData bhgeAddressFormData);

    void submitQuoteFromforWS(String userName, String company, String contactNumber, String emailAddress, String address1, String address2, String country, String region, String postalCode, String city, String emailtype, QuoteModel quoteModel, UserModel userModel, String description, BHGEShippingAddressFormData bhgeAddressFormData);

    MediaModel uploadQuoteAttachmentWs(QuoteModel quoteModel, MultipartFile file);

    boolean replicateQuote(QuoteModel quote);

    List<QuoteModel> getPendingQuotes();

    boolean quoteAttachment(QuoteModel quote);
    
    QuoteModel getQuoteByCode(String quoteCode);

    boolean isQuoteConverted(QuoteModel quote, OrderModel order);
}
