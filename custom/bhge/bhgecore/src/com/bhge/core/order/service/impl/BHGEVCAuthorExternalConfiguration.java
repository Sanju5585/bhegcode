package com.bhge.core.order.service.impl;

import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityRequestItem;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class BHGEVCAuthorExternalConfiguration {

    private static final Logger LOG = Logger.getLogger(BHGEVCAuthorExternalConfiguration.class);

    private static final String EXTERNAL_CONFIGURATION = "externalConfiguration";

    private static final String ROOT_ITEM = "rootItem";

    private static final String CHARACTERISTICS = "characteristics";

    private static final String CHARACTERISTIC_ID = "id";

    private static final String CHARACTERISTIC_VALUE_ARRAY = "values";

    private static final String AUTHOR_VALUE = "author";


    public void requestAuthorPrepare(final String externalConfiguration, final BHGEZPriceandAvailablityRequestItem orderCfgsValueDetail) throws JSONException {

        LOG.info("BHGEVCAuthorExternalConfiguration requestAuthorPrepare");

        if(StringUtils.isNotEmpty(externalConfiguration)) {
            final JSONObject externalConfigurationObject = new JSONObject(externalConfiguration);
            LOG.info("BHGEVCAuthorExternalConfiguration : externalConfiguration json array data : " + externalConfigurationObject);
            final JSONObject externalConfigurationData = externalConfigurationObject.getJSONObject(EXTERNAL_CONFIGURATION);
            LOG.info("BHGEVCAuthorExternalConfiguration : externalConfigurationData json object : " + externalConfigurationData);
            final JSONObject rootItemObj = externalConfigurationData.getJSONObject(ROOT_ITEM);
            final JSONArray characteristicsData = rootItemObj.getJSONArray(CHARACTERISTICS);
            LOG.info(" BHGEVCAuthorExternalConfiguration : characteristicsData json array :" + characteristicsData);
            if (null != characteristicsData) {
                for (int charIndex = 0; charIndex < characteristicsData.length(); ++charIndex) {
                    final JSONObject charData = characteristicsData.getJSONObject(charIndex);
                    final String charId = charData.getString(CHARACTERISTIC_ID);
                    LOG.info("BHGEVCAuthorExternalConfiguration : characteristic id is : " + charId);
                    if (StringUtils.isNotEmpty(charId) && charId.equalsIgnoreCase(orderCfgsValueDetail.getCharc())) {
                        final JSONArray charValues = charData.getJSONArray(CHARACTERISTIC_VALUE_ARRAY);
                        if (null != charValues) {
                            LOG.info("BHGEVCAuthorExternalConfiguration : authorValueData array data :: " + charValues);
                            final JSONObject valueData = charValues.getJSONObject(0);
                            final String authorValue = valueData.getString(AUTHOR_VALUE);
                            LOG.info("BHGEVCAuthorExternalConfiguration : author value :" + authorValue);
                            orderCfgsValueDetail.setAuthor(authorValue);
                        }
                    }
                }
            }
        }
    }
}
