package com.bhge.sap.orderfulfilment.sapcpiorderexchange.service.impl;

import java.util.*;
import java.util.stream.Stream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hybris.platform.sap.orderexchange.constants.PartnerRoles;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiOrder;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiOrderAddress;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiOrderItem;
import de.hybris.platform.sap.sapcpiadapter.data.SapCpiPartnerRole;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundAddressModel;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundOrderItemModel;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundOrderModel;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundPartnerRoleModel;
import de.hybris.platform.sap.sapcpiorderexchange.service.impl.DefaultSapCpiOrderMapperService;
import de.hybris.platform.sap.sapcpiorderexchange.service.impl.SapCpiOmmOrderMapperService;

public class BHGEVCSapCpiOmmOrderMapperService extends SapCpiOmmOrderMapperService {
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCSapCpiOmmOrderMapperService.class);
	
	@Override
	protected final void mapSapCpiOrderToSAPCpiOrderOutbound(final SapCpiOrder sapCpiOrder, final SAPCpiOutboundOrderModel sapCpiOutboundOrder) {
		LOG.debug("Starting mapping of sapCpiOrder to sapCpiOutboundOrder inside BHGEVCSapCpiOmmOrderMapperService for order {} ", sapCpiOrder.getOrderId());
		sapCpiOutboundOrder.setCourier(sapCpiOrder.getCourier());
		sapCpiOutboundOrder.setShippingEmail(sapCpiOrder.getShippingEmail());
		sapCpiOutboundOrder.setInvoiceEmail(sapCpiOrder.getInvoiceEmail());
		sapCpiOutboundOrder.setSoaEmail(sapCpiOrder.getSoaEmail());
		sapCpiOutboundOrder.setDeliveryAccountNumber(sapCpiOrder.getDeliveryAccountNumber());
		sapCpiOutboundOrder.setEndUser(sapCpiOrder.getEndUser());
		sapCpiOutboundOrder.setNoRdd(sapCpiOrder.getNoRdd());
		sapCpiOutboundOrder.setGovernmentFlag(sapCpiOrder.getGovernmentFlag());	
		sapCpiOutboundOrder.setNuclearFlag(sapCpiOrder.getGovernmentFlag());
		sapCpiOutboundOrder.setExportAddress(sapCpiOrder.getExportAddress());
		sapCpiOutboundOrder.setShippingRemarks(sapCpiOrder.getShippingRemarks());
		sapCpiOutboundOrder.setNuclearOpptyFlag(sapCpiOrder.getNuclearOpptyFlag());
		sapCpiOutboundOrder.setGovermentBuyer(sapCpiOrder.getGovermentBuyer());
		sapCpiOutboundOrder.setExportFlag(sapCpiOrder.getExportFlag());
		sapCpiOutboundOrder.setAlternateNumber(sapCpiOrder.getAlternateNumber());
		sapCpiOutboundOrder.setAlternateName(sapCpiOrder.getAlternateName());
		sapCpiOutboundOrder.setAlternateEmail(sapCpiOrder.getAlternateEmail());
		sapCpiOutboundOrder.setEndUserNewDetails(sapCpiOrder.getEndUserNewDetails());
		sapCpiOutboundOrder.setCsrHelp(sapCpiOrder.getCsrHelp());
		sapCpiOutboundOrder.setEndUserPO(sapCpiOrder.getEndUserPO());
		sapCpiOutboundOrder.setInvoiceContact(sapCpiOrder.getInvoiceContact());
		sapCpiOutboundOrder.setInvoicePhone(sapCpiOrder.getInvoicePhone());
		sapCpiOutboundOrder.setSoaContact(sapCpiOrder.getSoaContact());
		sapCpiOutboundOrder.setSoaPhone(sapCpiOrder.getSoaPhone());
		sapCpiOutboundOrder.setReqHeaderDeliveryDate(sapCpiOrder.getReqHeaderDeliveryDate());
		
		sapCpiOutboundOrder.setShiptoContact(sapCpiOrder.getShiptoContact());
		sapCpiOutboundOrder.setShiptoPhone(sapCpiOrder.getShiptoPhone());
		sapCpiOutboundOrder.setDiscountCode(sapCpiOrder.getDiscountCode());
		sapCpiOutboundOrder.setShippingCharge(sapCpiOrder.getShippingCharge());
		sapCpiOutboundOrder.setIsShipCompleteOrder(sapCpiOrder.getIsShipCompleteOrder());
		sapCpiOutboundOrder.setConfigurationBlock(sapCpiOrder.getConfigurationBlock());
		
		sapCpiOutboundOrder.setSapCpiOutboundOrderItems(mapBHGEOrderItems(sapCpiOutboundOrder, sapCpiOrder.getSapCpiOrderItems()));
		sapCpiOutboundOrder.setSapCpiOutboundPartnerRoles(mapBHGEOrderPartners(sapCpiOutboundOrder, sapCpiOrder.getSapCpiPartnerRoles()));
		sapCpiOutboundOrder.setSapCpiOutboundAddresses(mapBHGEOrderAddress(sapCpiOutboundOrder, sapCpiOrder.getSapCpiOrderAddresses()));
		LOG.debug("Completed mapping of sapCpiOrder to sapCpiOutboundOrder inside BHGEVCSapCpiOmmOrderMapperService for order {} ", sapCpiOrder.getOrderId());
	}
	
	
	protected Set<SAPCpiOutboundOrderItemModel> mapBHGEOrderItems(final SAPCpiOutboundOrderModel sapCpiOutboundOrder, final List<SapCpiOrderItem> sapCpiOrderItems) {
		 final Set<SAPCpiOutboundOrderItemModel>  existingOutboundOrderItems = sapCpiOutboundOrder.getSapCpiOutboundOrderItems();
		 LOG.debug("Starting mapping of SAPCpiOutboundOrderItemModel inside BHGEVCSapCpiOmmOrderMapperService ");
		 for (SapCpiOrderItem item : sapCpiOrderItems) {
			 for (SAPCpiOutboundOrderItemModel outboundItemModel : existingOutboundOrderItems) {
				 if (item.getEntryNumber().equalsIgnoreCase(outboundItemModel.getEntryNumber())) {
                     LOG.debug("Entry number is same of  SAPCpiOutboundOrderItemModel and SapCpiOrderItem for order {}", outboundItemModel.getOrderId());
					 LOG.debug("BHGEVCSapCpiOmmOrderMapperService mapBHGEOrderItems, SapCpiOrderItem EntryNumber is " + item.getEntryNumber() + " and SAPCpiOutboundOrderItemModel EntryNumber is  " + outboundItemModel.getEntryNumber());
					 outboundItemModel.setPlant(item.getPlant());
					 outboundItemModel.setReqLineDeliveryDate(item.getReqLineDeliveryDate());
					 outboundItemModel.setNote(item.getNote());
					 outboundItemModel.setAvailableLineText(item.getAvailableLineText());
					 outboundItemModel.setDiscountReason(item.getDiscountReason());
					 outboundItemModel.setVoucherCode(item.getVoucherCode());
					 outboundItemModel.setSaveForFuture(item.getSaveForFuture());
					 outboundItemModel.setPaymentTerms(item.getPaymentTerms());
					 outboundItemModel.setReferenceNumber(item.getReferenceNumber());
					 outboundItemModel.setTagInformation(item.getTagInformation());
					 outboundItemModel.setDummyProductDetails1(item.getDummyProductDetails1());
					 outboundItemModel.setDummyProductDetails2(item.getDummyProductDetails2());
					 outboundItemModel.setDummyProductDetails3(item.getDummyProductDetails3());
					 outboundItemModel.setDummyProductDetails4(item.getDummyProductDetails4());
					 if(item.getEndCustomerPO() != null) {
						 outboundItemModel.setEndCustomerPO(item.getEndCustomerPO());
						 LOG.info("BHGEVCSapCpiOmmOrderMapperService mapBHGEOrderItems, SapCpiOrderItem EntryNumber is " + item.getEntryNumber() + " and SAPCpiOutboundOrderItemModel EntryNumber is  " + outboundItemModel.getEntryNumber());
					 }
				 }
			 }
		 }
		 List<SAPCpiOutboundOrderItemModel> sortedOutboundOrderItems= existingOutboundOrderItems.stream().sorted(Comparator.comparing(SAPCpiOutboundOrderItemModel::getEntryNumber)).toList();
		 			 sapCpiOutboundOrder.setSapCpiOutboundOrderItems(new HashSet<>(sortedOutboundOrderItems));
					  for(SAPCpiOutboundOrderItemModel outboundItemModel : sapCpiOutboundOrder.getSapCpiOutboundOrderItems())
					  {
						  LOG.debug("After sorting, BHGEVCSapCpiOmmOrderMapperService mapBHGEOrderItems, SAPCpiOutboundOrderItemModel EntryNumber is " + outboundItemModel.getEntryNumber() + " and OrderId is  " + outboundItemModel.getOrderId());
						  LOG.debug("After sorting line item in BHGEVCSapCpiOmmOrderMapperService mapBHGEOrderItems, SAPCpiOutboundOrderItemModel");
					  }
		 
		 LOG.debug("Completed mapping of sapCpiOrderItems to SAPCpiOutboundOrderItemModel inside BHGEVCSapCpiOmmOrderMapperService ");
		 return new HashSet<>(existingOutboundOrderItems);
	}
	
	protected Set<SAPCpiOutboundPartnerRoleModel> mapBHGEOrderPartners(final SAPCpiOutboundOrderModel sapCpiOutboundOrder, final List<SapCpiPartnerRole> sapCpiPartnerRoles) {

		final Set<SAPCpiOutboundPartnerRoleModel>  existingOutboundOrderPartners = sapCpiOutboundOrder.getSapCpiOutboundPartnerRoles();
		LOG.debug("size of sapCpiPartnerRoles is " + sapCpiPartnerRoles.size());
	    for (SapCpiPartnerRole partnerRole : sapCpiPartnerRoles) {
	   	 for (SAPCpiOutboundPartnerRoleModel partnerRoleModel : existingOutboundOrderPartners) {
	   		 	 LOG.debug("BHGEVCSapCpiOmmOrderMapperService mapBHGEOrderPartners, SapCpiPartnerRole is " + partnerRole.getPartnerRoleCode() + " and SAPCpiOutboundPartnerRoleModel is  " +  partnerRoleModel.getPartnerRoleCode());
	   		 	LOG.debug("BHGEVCSapCpiOmmOrderMapperService mapBHGEOrderPartners, SapCpiPartnerRole PartnerId is " + partnerRole.getPartnerId() + " and SAPCpiOutboundPartnerRoleModel PartnerId is  " +  partnerRoleModel.getPartnerId());
	   			 if (partnerRoleModel.getPartnerId() != null && partnerRoleModel.getPartnerId().equalsIgnoreCase(partnerRole.getPartnerId())) {
	   				 partnerRoleModel.setDeliveryPoint(partnerRole.getDeliveryPoint());
	   			 }
	   			 
	   	 }
	   	 
	    }
	    LOG.debug("Completed mapping of sapCpiPartnerRoles to SAPCpiOutboundPartnerRoleModel inside BHGEVCSapCpiOmmOrderMapperService ");
	    return new HashSet<>(existingOutboundOrderPartners);

	  }
	
	protected Set<SAPCpiOutboundAddressModel> mapBHGEOrderAddress(final SAPCpiOutboundOrderModel sapCpiOutboundOrder, final List<SapCpiOrderAddress> sapCpiAddressess) {
		
		final Set<SAPCpiOutboundAddressModel> existingAddresses = sapCpiOutboundOrder.getSapCpiOutboundAddresses();
		for (SapCpiOrderAddress scpiOrderAddress : sapCpiAddressess) {
			for(SAPCpiOutboundAddressModel addressModel : existingAddresses ) {
				
				if(scpiOrderAddress.getDocumentAddressId() != null  && scpiOrderAddress.getDocumentAddressId().equalsIgnoreCase(addressModel.getDocumentAddressId())) {
					addressModel.setCompany(scpiOrderAddress.getCompany());
					if (scpiOrderAddress.getCheckStatus() != null) {
						addressModel.setCheckStatus(scpiOrderAddress.getCheckStatus());
						LOG.info("BHGEVCSapCpiOmmOrderMapperService mapBHGEOrderAddress, SapCpiOrderAddress DocumentAddressId is " + scpiOrderAddress.getDocumentAddressId() + " and SAPCpiOutboundAddressModel DocumentAddressId is  " + addressModel.getDocumentAddressId());
						LOG.info("BHGEVCSapCpiOmmOrderMapperService mapBHGEOrderAddress, SapCpiOrderAddress CheckStatus is " + scpiOrderAddress.getCheckStatus() + " and SAPCpiOutboundAddressModel CheckStatus is  " + addressModel.getCheckStatus());
					}
				}
				
			}
		}
		 return new HashSet<>(existingAddresses);
	 }
	
}
