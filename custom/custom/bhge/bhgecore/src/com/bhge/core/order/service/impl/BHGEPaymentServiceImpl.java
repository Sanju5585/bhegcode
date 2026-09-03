package com.bhge.core.order.service.impl;

import com.bhge.core.order.daos.BHGEB2BOrderDao;
import com.bhge.core.order.service.BHGEPaymentService;
import com.bhge.facades.data.SavedCardAuthoriseRequestCardData;
import com.bhge.facades.data.SavedCardAuthoriseRequestData;
import com.bhge.facades.data.SavedCardAuthoriseResponseData;
import com.ds.dsocc.common.dto.CCPaymentInfoWsDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.hybris.ge.edge.core.model.type.BHGECurrencyCardThresholdModel;
import com.hybris.ge.edge.core.model.type.BHGESavedCreditcardModel;
import com.hybris.ge.edge.core.model.type.FiservMerchantIdModel;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import jakarta.annotation.Resource;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;

import com.bhge.facades.data.BinLookUpResponseData;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

public class BHGEPaymentServiceImpl implements BHGEPaymentService {
    private static final Logger LOG = LoggerFactory.getLogger(BHGEPaymentServiceImpl.class);

    private static final String TRANSACTION_AMOUNT = "0";

    private static final String USERID = "ECOMM";

    @Resource(name = "configurationService")
    private ConfigurationService configurationService;

    @Resource(name = "bhgeB2BOrderDao")
    private BHGEB2BOrderDao bhgeB2BOrderDao;
    @Autowired
    RestTemplate restTemplate;

    /***
     * US-465616
     * Method to get Bin Lookup status of new credit card for payment
     * @param merchantId
     * @param token
     * @return
     */
    @Override
    public BinLookUpResponseData getBinLookUpStatus(String merchantId, String token) {
        try {
            if (!isValidMerchantId(merchantId) || !isValidToken(token)) {
                LOG.warn("Invalid merchantId or token");
                throw new IllegalArgumentException("Invalid merchantId or token");
            }
            String hmacSignature = getBinLookupHmacSignature(merchantId,token);
            if (StringUtils.isNotEmpty(hmacSignature)) {
                final HttpHeaders headers = getSnapPayHTTPHeader(Arrays.asList(MediaType.APPLICATION_JSON), hmacSignature);

                HttpEntity<?> httpEntity = new HttpEntity<>(headers);
                BinLookUpResponseData responseData = null;
                ResponseEntity<BinLookUpResponseData> response = restTemplate.exchange(getBinLookupUrl()+"/"+merchantId+"/"+token, HttpMethod.GET,
                        httpEntity, BinLookUpResponseData.class);
                if (response != null) {
                    responseData = response.getBody();
                }
                return responseData;
            }
        }
        catch(Exception e){
            LOG.error("Error in getting response from getBinLookupStatus:-" + e);
        }
        return null;
    }
    private boolean isValidMerchantId(String merchantId) {
        return merchantId != null && merchantId.matches("^[a-zA-Z0-9_-]{1,100}$");
    }

    private boolean isValidToken(String token) {
        return token != null && token.matches("^[a-zA-Z0-9_-]{1,100}$");
    }
    private String getBinLookupHmacSignature(String merchantId, String token)
    {
        String HmacData64String = null;
        String timestamp = Long.toString(TimeUnit.MILLISECONDS.toSeconds(System.currentTimeMillis()));
        String nonce = UUID.randomUUID().toString();
        String signatureRawData = "";
        signatureRawData = getAuthUserName() + "GET" + getBinLookupUrl() + "/" + merchantId +"/"+ token + timestamp + nonce;
        byte[] secretKeyByteArray = Base64.getDecoder().decode(configurationService.getConfiguration().getString("bh.ds.payment.snappay.hmac.secretKey"));
        byte[] signature = new byte[0];
        signature = signatureRawData.getBytes(StandardCharsets.UTF_8);
        try {
            String HMAC_SHA256 = "HmacSHA256";
            final Mac hMacSHA256 = Mac.getInstance(HMAC_SHA256);
            final SecretKeySpec secretKey = new SecretKeySpec(secretKeyByteArray, HMAC_SHA256);
            hMacSHA256.init(secretKey);

            byte[] Signaturebytes = hMacSHA256.doFinal(signature);
            String Signature64String = Base64.getEncoder().encodeToString(Signaturebytes);
            String HmacData =   getAuthUserName() + ":" + Signature64String + ":" + nonce + ":" + timestamp;
            HmacData64String = new String(Base64.getEncoder().encode(HmacData.getBytes()));
        } catch (Exception e) {
            LOG.error("Error in generating hmac signature",e);
        }
        return HmacData64String;
    }

    private String getAuthorisationHmac(CCPaymentInfoWsDTO paymentInfo, String currencyCode, String customerId) throws NoSuchAlgorithmException, JsonProcessingException, UnsupportedEncodingException {
        String HmacData64String = null;
        String timestamp = Long.toString(TimeUnit.MILLISECONDS.toSeconds(System.currentTimeMillis()));
        String nonce = UUID.randomUUID().toString();
        String savedCardContent = savedCardAuthorizeEncodeData(paymentInfo, currencyCode, customerId);
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(savedCardContent.getBytes("UTF-8"));
        String result = new String(Base64.getEncoder().encode(md.digest()));
        String signatureRawData = getAuthUserName() + "POST" + getAuthorizeAPIURL() + timestamp + nonce + result;
        byte[] secretKeyByteArray = Base64.getDecoder().decode(configurationService.getConfiguration().getString("bh.ds.payment.snappay.hmac.secretKey"));
        byte[] signature = new byte[0];
        signature = signatureRawData.getBytes(StandardCharsets.UTF_8);
        try {
            String HMAC_SHA256 = "HmacSHA256";
            final Mac hMacSHA256 = Mac.getInstance(HMAC_SHA256);
            final SecretKeySpec secretKey = new SecretKeySpec(secretKeyByteArray, HMAC_SHA256);
            hMacSHA256.init(secretKey);
            byte[] Signaturebytes = hMacSHA256.doFinal(signature);
            String Signature64String = Base64.getEncoder().encodeToString(Signaturebytes);
            String HmacData =   getAuthUserName() + ":" + Signature64String + ":" + nonce + ":" + timestamp;
            HmacData64String = new String(Base64.getEncoder().encode(HmacData.getBytes()));
        } catch (Exception e) {
            LOG.error("Error in generating authorise hmac signature",e);
        }
        return HmacData64String;
    }

    private String savedCardAuthorizeEncodeData(CCPaymentInfoWsDTO paymentInfo, String currencyCode, String customerId) throws JsonProcessingException {
        JsonMapper mapper = new JsonMapper();
        SavedCardAuthoriseRequestData authoriseSavedCardRequest = new SavedCardAuthoriseRequestData();
        authoriseSavedCardRequest.setCurrency(currencyCode);
        authoriseSavedCardRequest.setCustomerid(customerId);
        authoriseSavedCardRequest.setCompanycode(customerId);
        authoriseSavedCardRequest.setUserid(USERID);
        populateSavedCardRequestData(paymentInfo, authoriseSavedCardRequest);
        return mapper.writeValueAsString(authoriseSavedCardRequest);
    }

    @Override
    public List<BHGESavedCreditcardModel> getSavedCards(B2BCustomerModel b2bCustomer)
    {
        List<BHGESavedCreditcardModel> creditcardList = bhgeB2BOrderDao.getSavedCards(b2bCustomer);
        if (creditcardList != null) {
            //Logic to validate the card validity date
            List<BHGESavedCreditcardModel> savedCreditcardModelList = new ArrayList<>();
            for (BHGESavedCreditcardModel item : creditcardList) {
                Date todayDate = new Date();
                DateFormat inputFormat = new SimpleDateFormat("yyyyMMdd");
                String inputText = item.getValidTru() + "01";
                Date validThru = null;
                try {
                    validThru = inputFormat.parse(inputText);
                } catch (ParseException e) {
                    throw new RuntimeException(e);
                }
                //Validating validthru date. Whether today's date is before than validThru date or not.
                if (todayDate.before(validThru)) {
                    savedCreditcardModelList.add(item);
                }
            }
            return savedCreditcardModelList;
        }
        return null;
    }

    @Override
    public BHGECurrencyCardThresholdModel getCardThreshold(CurrencyModel cartCurrency)
    {
        return bhgeB2BOrderDao.getCurrencyLimit(cartCurrency);
    }

    @Override
    public SavedCardAuthoriseResponseData getSavedCardAuthorisationStatus(CCPaymentInfoWsDTO paymentInfo, String currencyCode, String customerId) {
        try {
            String hmacSignature = getAuthorisationHmac(paymentInfo, currencyCode, customerId);
            LOG.info("Saved Card HMAC Signature: "+ hmacSignature);
            if (StringUtils.isNotEmpty(hmacSignature)) {
                final HttpHeaders headers = getSnapPayHTTPHeader(List.of(MediaType.APPLICATION_JSON), hmacSignature);
                String requestBody = generateSavedCardReqeustData(paymentInfo, currencyCode, customerId);
                LOG.info("Saved Card Authorization: "+ requestBody);
                HttpEntity<?> httpEntity = new HttpEntity<>(requestBody, headers);
                SavedCardAuthoriseResponseData responseData = null;
                ResponseEntity<SavedCardAuthoriseResponseData> response = restTemplate.exchange(getAuthorizeAPIURL(), HttpMethod.POST,
                        httpEntity, SavedCardAuthoriseResponseData.class);
                responseData = response.getBody();
                return responseData;
            }
        }
        catch(Exception e){
            LOG.error("Error in getting response from getAuthorisationStatus:-" + e);
        }
        return null;
    }

    @Override
    public FiservMerchantIdModel getFiservMerchantId(String currentSalesArea, String currency) {
        return bhgeB2BOrderDao.getFiservMerchantId(currentSalesArea, currency);
    }

    private HttpHeaders getSnapPayHTTPHeader(List<MediaType> APPLICATION_JSON, String hmacSignature) {
        final String plainCredentials = getAuthUserName() + ":" + getAuthPassword();
        final String base64Credentials = Arrays.toString(Base64.getEncoder().encode(plainCredentials.getBytes()));
        final HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Basic " + base64Credentials);
        headers.setAccept(APPLICATION_JSON);
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("accountid", getAuthUserName());
        headers.add("signature", "Hmac " + hmacSignature);
        return headers;
    }

    private String generateSavedCardReqeustData(CCPaymentInfoWsDTO paymentInfo, String currencyCode, String customerId) throws JsonProcessingException {
        JsonMapper mapper = new JsonMapper();
        SavedCardAuthoriseRequestData authoriseSavedCardRequest = new SavedCardAuthoriseRequestData();
        authoriseSavedCardRequest.setCurrency(currencyCode);
        authoriseSavedCardRequest.setCustomerid(customerId);
        authoriseSavedCardRequest.setCompanycode(customerId);
        authoriseSavedCardRequest.setUserid(USERID);
        populateSavedCardRequestData(paymentInfo, authoriseSavedCardRequest);
        return mapper.writeValueAsString(authoriseSavedCardRequest);
    }

    private void populateSavedCardRequestData(CCPaymentInfoWsDTO paymentInfo, SavedCardAuthoriseRequestData authoriseSavedCardRequest){
        SavedCardAuthoriseRequestCardData authoriseSavedCard = new SavedCardAuthoriseRequestCardData();
        List<SavedCardAuthoriseRequestCardData> authoriseSavedCardList = new ArrayList<SavedCardAuthoriseRequestCardData>();
        String cardExp = paymentInfo.getCcValidTru();
        String newCCExp = cardExp.substring(4) + cardExp.substring(0,4);
        authoriseSavedCard.setTokenid(paymentInfo.getToken());
        authoriseSavedCard.setTransactionamount(TRANSACTION_AMOUNT);
        authoriseSavedCard.setType(paymentInfo.getCcType());
        authoriseSavedCard.setLast4(paymentInfo.getCcNumber());
        authoriseSavedCard.setExpirationdate(newCCExp);
        authoriseSavedCardList.add(authoriseSavedCard);
        authoriseSavedCardRequest.setCards(authoriseSavedCardList);
        authoriseSavedCardRequest.setAccountid(getAuthUserName());
    }

    private String getBinLookupUrl()
    {
        return configurationService.getConfiguration().getString("bh.ds.payment.snappay.bin.lookup.url");
    }

    private String getAuthPassword()
    {
        return configurationService.getConfiguration().getString("bh.ds.payment.snappay.user.password");
    }
    private String getAuthUserName()
    {
        return configurationService.getConfiguration().getString("bh.ds.payment.snappay.user");
    }

    private String getAuthorizeAPIURL(){
        return configurationService.getConfiguration().getString("bh.ds.payment.snappay.authorise.url");
    }
}
