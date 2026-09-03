package com.bhge.core.carts.service;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import jakarta.annotation.Resource;

import com.bhge.core.model.*;
import com.bhge.core.scpi.rfc.configresponse.*;
import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.core.PK;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bhge.product.service.BHGEProductService;

import de.hybris.platform.catalog.enums.ConfiguratorType;
import de.hybris.platform.catalog.enums.ProductInfoStatus;
import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.order.CommerceCartModificationStatus;
import de.hybris.platform.commerceservices.order.impl.DefaultCommerceAddToCartStrategy;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.order.model.AbstractOrderEntryProductInfoModel;
import de.hybris.platform.sap.productconfig.services.model.CPQOrderEntryProductInfoModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.storelocator.model.PointOfServiceModel;


public class BHGEDefaultCommerceAddToCartStrategy extends DefaultCommerceAddToCartStrategy {
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEDefaultCommerceAddToCartStrategy.class);

    private static final String APR_CHARACTERISTIC_VALUE  = "APR";
    private static final String SALES_ACK_ID  = "SALES_APPROVAL";


    @Resource(name = "modelService")
	public ModelService modelService;
    @Resource(name= "userService")
    UserService userService;
    @Resource(name = "b2bCommerceUnitService")
    B2BCommerceUnitService b2bCommerceUnitService;
	
	@Resource(name = "productService")
	private BHGEProductService bhgeProductService;
	
    @Override
    public CommerceCartModification addToCart(final CommerceCartParameter parameter) throws CommerceCartModificationException
    {
    	LOG.debug("Calling doAddtoCart inside BHGEDefaultCommerceAddToCartStrategy");
        final CommerceCartModification modification = doAddToCart(parameter);
        LOG.debug("Calling afterAddToCart inside BHGEDefaultCommerceAddToCartStrategy");
        afterAddToCart(parameter, modification);
        // Here the entry is fully populated, so we can search for a similar one and merge.
        LOG.debug("Calling mergeEntry inside BHGEDefaultCommerceAddToCartStrategy");
        mergeEntry(modification, parameter);
        LOG.debug("Calling calculateCart inside BHGEDefaultCommerceAddToCartStrategy of strategy {}",  getCommerceCartCalculationStrategy());
        getCommerceCartCalculationStrategy().calculateCart(parameter);
        LOG.debug("calculateCart method inside BHGEDefaultCommerceAddToCartStrategy has been executed");
        return modification;
    }

    protected CommerceCartModification doAddToCart(final CommerceCartParameter parameter) throws CommerceCartModificationException
    {
        CommerceCartModification modification;
        LOG.debug("inside doAddtoCart method of BHGEDefaultCommerceAddToCartStrategy");
        final CartModel cartModel = parameter.getCart();
        LOG.info("BHGEDefaultCommerceAddToCartStrategy inside doAddtoCart method cartModel " +cartModel.getCode());
        final ProductModel productModel = parameter.getProduct();
        final long quantityToAdd = parameter.getQuantity();
        final PointOfServiceModel deliveryPointOfService = parameter.getPointOfService();

        this.beforeAddToCart(parameter);
        validateAddToCart(parameter);

        if (isProductForCode(parameter).booleanValue())
        {
            // So now work out what the maximum allowed to be added is (note that this may be negative!)
            final long actualAllowedQuantityChange = getAllowedCartAdjustmentForProduct(cartModel, productModel, quantityToAdd,
                    deliveryPointOfService);
            final Integer maxOrderQuantity = productModel.getMaxOrderQuantity();
            final long cartLevel = checkCartLevel(productModel, cartModel, deliveryPointOfService);
            final long cartLevelAfterQuantityChange = actualAllowedQuantityChange + cartLevel;

            if (actualAllowedQuantityChange > 0)
            {
                // We are allowed to add items to the cart
                final CartEntryModel entryModel = addCartEntry(parameter, actualAllowedQuantityChange);

                getModelService().save(entryModel);

                final String statusCode = getStatusCodeAllowedQuantityChange(actualAllowedQuantityChange, maxOrderQuantity,
                        quantityToAdd, cartLevelAfterQuantityChange);

                modification = createAddToCartResp(parameter, statusCode, entryModel, actualAllowedQuantityChange);
                
                if(StringUtils.isNotEmpty(parameter.getLongConfiguration())) {
                    LOG.info("BHGEDefaultCommerceAddToCartStrategy inside after cart entry creation long config " +parameter.getLongConfiguration());
                	addLongConfigurationToCartEntry(entryModel, parameter.getLongConfiguration());
                }
                if(null != parameter.getEcaCode())
                {
                    LOG.info("BHGEDefaultCommerceAddToCartStrategy inside doAddtoCart method ECA code " +parameter.getEcaCode());
                    populateEndCustomerAddress(parameter.getEcaCode(), entryModel);
                }

                
            }
            else
            {
                // Not allowed to add any quantity, or maybe even asked to reduce the quantity
                // Do nothing!
                final String status = getStatusCodeForNotAllowedQuantityChange(maxOrderQuantity, maxOrderQuantity);

                modification = createAddToCartResp(parameter, status, createEmptyCartEntry(parameter), 0);

            }
        }
        else
        {
            modification = createAddToCartResp(parameter, CommerceCartModificationStatus.UNAVAILABLE,
                    createEmptyCartEntry(parameter), 0);
        }

        return modification;
    }

    private void populateEndCustomerAddress(Long ecaCode, CartEntryModel entryModel) {
     LOG.info("BHGEDefaultCommerceAddToCartStrategy inside of populateEndCustomerAddress method ECA code "+ecaCode);
        entryModel.setEcaCode(ecaCode);

        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        B2BUnitModel salesArea = currentUser.getDefaultB2BUnit();
        AddressModel shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, ecaCode.toString());
        if(null !=shipTo) {
            entryModel.setEndCustomerAddress(shipTo);
            LOG.info("BHGEDefaultCommerceAddToCartStrategy inside of populateEndCustomerAddress method shipTo address " + shipTo.getPk());
        }
        else {
            try {
                shipTo = modelService.get(PK.parse(ecaCode.toString()));
            } catch (Exception e) {
                LOG.error("BHGEDefaultCommerceAddToCartStrategy inside of populateEndCustomerAddress method Exception while getting shipTo address by pk " + ecaCode, e);
            }
            if (null != shipTo) {
                LOG.info("BHGEDefaultCommerceAddToCartStrategy inside of populateEndCustomerAddress method shipTo address after get by pk " + shipTo.getPk());
                entryModel.setEndCustomerAddress(shipTo);
            }
        }
        modelService.save(entryModel);

    }

    protected void validateAddToCart(final CommerceCartParameter parameters) throws CommerceCartModificationException
    {
        final CartModel cartModel = parameters.getCart();
        final ProductModel productModel = parameters.getProduct();

        validateParameterNotNull(cartModel, "Cart model cannot be null");
        validateParameterNotNull(productModel, "Product model cannot be null");
//        if (productModel.getVariantType() != null)
//        {
//            throw new CommerceCartModificationException("Choose a variant instead of the base product");
//        }

        if (parameters.getQuantity() < 1)
        {
            throw new CommerceCartModificationException("Quantity must not be less than one");
        }
    }
    
    protected void addLongConfigurationToCartEntry(final AbstractOrderEntryModel entryModel, final String longConfiguration) {

        LOG.info("BHGEDefaultCommerceAddToCartStrategy inside of addLongConfigurationToCartEntry method longconfiguration "+longConfiguration);
        final Map<Integer, String> productCodes = new HashMap<Integer, String>();
    	int requestLineItemNumber = 1000;
    	requestLineItemNumber = requestLineItemNumber * entryModel.getEntryNumber() + requestLineItemNumber;

		productCodes.put(requestLineItemNumber, longConfiguration);

    	BHGELongConfigResponse response = bhgeProductService.getConfigurationFromSAP(productCodes);

        LOG.info("BHGEDefaultCommerceAddToCartStrategy Long conifguration add to cart response "+ response);

        populateConfigurationInfo(response, entryModel, requestLineItemNumber);

    }

    private void populateConfigurationInfo(final BHGELongConfigResponse response,final AbstractOrderEntryModel entryModel, int requestLineItemNumber) {

        LOG.info("BHGEDefaultCommerceAddToCartStrategy inside of populateConfigurationInfo method");
        LOG.info("BHGEDefaultCommerceAddToCartStrategy populateConfigurationInfo response "+ response);
        LOG.info("BHGEDefaultCommerceAddToCartStrategy populateConfigurationInfo entryModel"+ entryModel.getPk().toString());
        List<BHGEProductInfoModel> productInfoModels=new ArrayList<>();
        List<BHGEVariantFactorModel> variantFactorsList = new ArrayList<>();
        List<BHGEConfigurationInstanceModel> configInstanceList = new ArrayList<>();
        List<BHGEConfigurationPartModel> configPartList = new ArrayList<>();
        if(null != response.getItemOut() && CollectionUtils.isNotEmpty(response.getItemOut().getItem())){
            for(BHGELongConfigItemResponse itemResponse : response.getItemOut().getItem()){
               if(requestLineItemNumber == itemResponse.getItemNo() && null != itemResponse.getConfigurationDetails()
            		   && CollectionUtils.isNotEmpty(itemResponse.getConfigurationDetails().getItem())) {
                   LOG.info("BHGEDefaultCommerceAddToCartStrategy inside of populateConfigurationInfo method linteitem matches req item number is " +requestLineItemNumber + "itemNo is "+itemResponse.getItemNo());
                    for (BHGELongConfigConfigurationDetailItemResponse configResponse : itemResponse.getConfigurationDetails().getItem()) {
                        LOG.info("BHGEDefaultCommerceAddToCartStrategy inside of populateConfigurationInfo method configResponse charc " +configResponse.getCharc() + " value is "+configResponse.getValue());
                        final BHGEProductInfoModel productInfoModel=modelService.create(BHGEProductInfoModel.class);
                        productInfoModel.setCpqCharacteristicName(configResponse.getCharc());
                        if(StringUtils.containsIgnoreCase(configResponse.getCharc(),SALES_ACK_ID)){
                            productInfoModel.setCpqCharacteristicAssignedValues(APR_CHARACTERISTIC_VALUE);
                        } else {
                            productInfoModel.setCpqCharacteristicAssignedValues(configResponse.getValue());
                        }
                        productInfoModel.setAuthor(configResponse.getAuthor());
                        productInfoModel.setInstanceId(configResponse.getInstId());
                        productInfoModel.setOrderEntry(entryModel);
                        modelService.save(productInfoModel);
                        productInfoModels.add(productInfoModel);
                    }
                    for(BHGEProductInfoModel productInfoModel: productInfoModels)
                    {
                        LOG.info(("BHGEDefaultCommerceAddToCartStrategy BHGEProductInfo inside of populateConfigurationInfo method  new values productInfo charc " +productInfoModel.getCpqCharacteristicName() + " value is "+productInfoModel.getCpqCharacteristicAssignedValues()));

                    }
                   if (null != itemResponse.getVariantFactor() && CollectionUtils.isNotEmpty(itemResponse.getVariantFactor().getItem())) {
                	   for (BHGELongConfigVariantFactorResponseItemResponse configVariantFactorResponse : itemResponse.getVariantFactor().getItem()) {
                           final BHGEVariantFactorModel variantFactorModel = modelService.create(BHGEVariantFactorModel.class);
                           variantFactorModel.setInstanceId(configVariantFactorResponse.getVariantInstanceId());
                           variantFactorModel.setVariantKey(configVariantFactorResponse.getVariantKey());
                           variantFactorModel.setVariantFactor(configVariantFactorResponse.getVariantFactorValue());
                           variantFactorModel.setOrderEntry(entryModel);
                           modelService.save(variantFactorModel);
                           variantFactorsList.add(variantFactorModel);
                       }
                   }
                   
                   if (Objects.nonNull(itemResponse.getConfigurationData()) && Objects.nonNull(itemResponse.getConfigurationData().getItem()) ) {
                	   
                	   final BHGELongConfigConfigurationDataItemResponse kbInfoResponse = itemResponse.getConfigurationData().getItem();
                	   final BHGEKBInformationModel kbInfoModel = modelService.create(BHGEKBInformationModel.class);
                	   kbInfoModel.setRootId(kbInfoResponse.getRootId());
                	   kbInfoModel.setSce(kbInfoResponse.getSce());
                	   kbInfoModel.setKbName(kbInfoResponse.getKbName());
                	   kbInfoModel.setKbVersion(kbInfoResponse.getKbVersion());
                	   kbInfoModel.setComplete(kbInfoResponse.getComplete());
                	   kbInfoModel.setConsitent(kbInfoResponse.getConsistent());
                       modelService.save(kbInfoModel);
                	   entryModel.setBhgeKBInformation(kbInfoModel);
                   }
                   
                   if (Objects.nonNull(itemResponse.getConfigurationInstance()) && CollectionUtils.isNotEmpty(itemResponse.getConfigurationInstance().getItem())) {
                	   for (BHGELongConfigConfigurationInstanceItemResponse configInstanceResponse : itemResponse.getConfigurationInstance().getItem()) {

                		   final BHGEConfigurationInstanceModel configInstanceModel = modelService.create(BHGEConfigurationInstanceModel.class);
                           configInstanceModel.setInstanceId(configInstanceResponse.getVariantInstanceId());
                           configInstanceModel.setObjectType(configInstanceResponse.getObjType());
                           configInstanceModel.setClassType(configInstanceResponse.getClassType());
                           configInstanceModel.setObjKey(configInstanceResponse.getObjKey());
                           configInstanceModel.setQuantity(configInstanceResponse.getQuantity());
                           configInstanceModel.setAuthor(configInstanceResponse.getAuthor());
                           configInstanceModel.setQuantityUnit(configInstanceResponse.getQuantityUnit());
                           configInstanceModel.setComplete(configInstanceResponse.getComplete());
                           configInstanceModel.setConsistent(configInstanceResponse.getConsistent());
                           configInstanceModel.setOrderEntry(entryModel);
                           modelService.save(configInstanceModel);
                           configInstanceList.add(configInstanceModel);
                       }
                   }
                   
                   if (Objects.nonNull(itemResponse.getConfigurationPart()) && CollectionUtils.isNotEmpty(itemResponse.getConfigurationPart().getItem())) {
                	   for (BHGELongConfigConfigurationPartResponseItemResponse configPartResponse : itemResponse.getConfigurationPart().getItem()) {

                		   final BHGEConfigurationPartModel configPartModel = modelService.create(BHGEConfigurationPartModel.class);
                		   configPartModel.setParentId(configPartResponse.getParentId());
                		   configPartModel.setInstanceId(configPartResponse.getVariantInstanceId());
                		   configPartModel.setPartOfNo(configPartResponse.getPartOfNo());
                		   configPartModel.setObjType(configPartResponse.getObjType());
                		   configPartModel.setClassType(configPartResponse.getClassType());
                		   configPartModel.setObjKey(configPartResponse.getObjKey());
                		   configPartModel.setAuthor(configPartResponse.getAuthor());
                		   configPartModel.setSalesRelevant(configPartResponse.getSalesRelevant());
                		   configPartModel.setOrderEntry(entryModel);                          
                		   configPartList.add(configPartModel);
                       }
                   }
                  
                }
            }
        }
        entryModel.setCpqentryinfo(productInfoModels);
        entryModel.setVariantFactors(variantFactorsList);
        entryModel.setConfigurationInstance(configInstanceList);
        entryModel.setConfigurationPart(configPartList);
        entryModel.setLongConfigEntry(true);
        modelService.save(entryModel);

    }
}