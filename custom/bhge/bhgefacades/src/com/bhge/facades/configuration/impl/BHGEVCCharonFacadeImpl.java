package com.bhge.facades.configuration.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.facades.configuration.BHGEVCCharonFacade;
import com.bhge.facades.configuration.BHGEVCCharonKBDeterminationFacade;
import com.hybris.charon.RawResponse;
import com.hybris.charon.exp.HttpException;

import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.sap.productconfig.runtime.cps.impl.CPSTimer;
import de.hybris.platform.sap.productconfig.runtime.cps.impl.CharonFacadeImpl;
import de.hybris.platform.sap.productconfig.runtime.cps.model.masterdata.common.CPSMasterDataKBHeaderInfo;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSConfiguration;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSCreateConfigInput;
import de.hybris.platform.sap.productconfig.runtime.interf.KBKey;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import rx.Observable;

public class BHGEVCCharonFacadeImpl extends CharonFacadeImpl implements BHGEVCCharonFacade {

    private static final Logger LOG = Logger.getLogger(BHGEVCCharonFacadeImpl.class);
    private final CPSTimer timer = new CPSTimer();
    private static final String COMMA = ",";

    @Resource
    private ProductService productService;

    @Resource
    private SessionService sessionService;

    @Resource
    private ConfigurationService configurationService;

    @Resource
    private UserService userService;

    @Resource
    private BHGEVCCharonKBDeterminationFacade bhgeVCCharonKBDeterminationFacade;


    @Override
    public CPSConfiguration createDefaultConfiguration(final KBKey kbKey) {


        final String kbDeterminationProductLine = sessionService.getAttribute(BhgeCoreConstants.KB_DETERMINATION_PRODUCTLINE_SESSION);
        final List<String> productLineList = getProductLineList();
       
        LOG.info("BHGEVCCharonFacadeImpl:: productline: " + kbDeterminationProductLine);

        if(null != kbDeterminationProductLine && productLineList.contains(kbDeterminationProductLine)) {
        	
        	final CPSCreateConfigInput cloudEngineConfigurationRequest = assembleCreateDefaultConfigurationRequest(kbKey);
            String kbId = null;

            final BHGEProductUtil productUtil = new BHGEProductUtil();
            final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) productService.getProductForCode(kbKey.getProductCode());
            final String deliveryPlant = productUtil.getPlantForCurrentSalesAreaData(geEdgeProductModel, userService);
            LOG.info("BHGEVCCharonFacadeImpl:: current sales area delivery plant is: " + deliveryPlant);
            List<CPSMasterDataKBHeaderInfo> listOfKbs =  bhgeVCCharonKBDeterminationFacade.readAllKbsForDate(kbKey.getProductCode(),kbKey.getDate());
            LOG.info("BHGEVCCharonFacadeImpl:: List of Kbs size: " + listOfKbs.size());
			
            for (CPSMasterDataKBHeaderInfo cpsMasterDataKBHeaderInfo : listOfKbs) {
				LOG.info("BHGEVCCharonFacadeImpl:: plant value in kb knowledgebase is: " + cpsMasterDataKBHeaderInfo.getPlant());
				
				if (StringUtils.isNotEmpty(deliveryPlant) 
						&& StringUtils.isNotEmpty(cpsMasterDataKBHeaderInfo.getPlant())
						&& deliveryPlant.equalsIgnoreCase(cpsMasterDataKBHeaderInfo.getPlant())) {
					LOG.info("BHGEVCCharonFacadeImpl:: For delivery plant: " + deliveryPlant + " kbid in knowledgebase is : " + cpsMasterDataKBHeaderInfo.getId());
					if (Objects.nonNull(cpsMasterDataKBHeaderInfo.getId())) {
						kbId = String.valueOf(cpsMasterDataKBHeaderInfo.getId());
					}
					break;
				}
			}
			try {

				if (StringUtils.isNotEmpty(kbId)) {
					cloudEngineConfigurationRequest.setKbId(kbId);
				}

				traceJsonRequestBody("BHGEVCCharonFacadeImpl:: for REST call (create default configuration): ",
						cloudEngineConfigurationRequest);
				timer.start("createDefaultConfiguration");
				final String select = isReadDomainValuesOnDemand() ? GET_CONFIG_SELECT_ALL_WITHOUT_POSSIBLE_VALUES : GET_CONFIG_SELECT_ALL;
				final Observable<RawResponse<CPSConfiguration>> rawResponse = getClient().createDefaultConfiguration(
						cloudEngineConfigurationRequest, getI18NService().getCurrentLocale().toLanguageTag(),
						getPassportService().generate(PASSPORT_CREATE_CONFIG), getAutoCleanUpFlag(), select);
				final CPSConfiguration cpsConfig = retrieveConfigurationAndSaveResponseAttributes(rawResponse);
				timer.stop();
				getConfigurationParentReferenceStrategy().addParentReferences(cpsConfig);
				return cpsConfig;

			} catch (final HttpException ex) {
				return getRequestErrorHandler().processCreateDefaultConfigurationError(ex);
			}

        } else {
                return super.createDefaultConfiguration(kbKey);
            }
    }

    private List<String> getProductLineList() {
        final String productLine = configurationService.getConfiguration().getString(BhgeCoreConstants.MULTIPLANT_KB_DETERMINATION);
        List<String> productLineList = new ArrayList<String>(Arrays.asList(productLine.split(COMMA)));
        return productLineList;
    }


}
