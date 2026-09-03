package com.bhge.core.order.service;

import com.bhge.facades.data.BinLookUpResponseData;
import com.bhge.facades.data.SavedCardAuthoriseResponseData;
import com.ds.dsocc.common.dto.CCPaymentInfoWsDTO;
import com.hybris.ge.edge.core.model.type.BHGESavedCreditcardModel;
import com.hybris.ge.edge.core.model.type.FiservMerchantIdModel;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import com.hybris.ge.edge.core.model.type.BHGECurrencyCardThresholdModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;

import java.util.List;

public interface BHGEPaymentService {
    /***
     * US-465616
     * Method to get Bin Lookup status of new credit card for payment
     * @param merchantId
     * @param token
     * @return
     */
    public BinLookUpResponseData getBinLookUpStatus(String merchantId, String token);

    public List<BHGESavedCreditcardModel> getSavedCards(B2BCustomerModel b2bCustomer);

    BHGECurrencyCardThresholdModel getCardThreshold(CurrencyModel cartCurrency);

    public SavedCardAuthoriseResponseData getSavedCardAuthorisationStatus(CCPaymentInfoWsDTO paymentInfo, String currencyCode, String customerId);

    public FiservMerchantIdModel getFiservMerchantId(String currentSalesArea, String currency);
}
