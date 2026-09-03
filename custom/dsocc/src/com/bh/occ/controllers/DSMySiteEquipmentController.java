package com.bh.occ.controllers;

import java.io.IOException;
import java.text.ParseException;
import java.util.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.bhge.core.category.dao.DefaultBHGECategoryDao;
import com.bhge.core.rmacache.SerialNumSearchCacheKey;
import com.bhge.facades.product.data.BrandNameData;
import com.bhge.facades.rma.data.MaterialData;
import com.bhge.facades.search.BHGEProductSearchFacade;
import com.ds.dsocc.mysiteequipment.data.AutocompleteResultDataWsDTO;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.search.data.AutocompleteResultData;
import de.hybris.platform.commercefacades.search.data.SearchQueryData;
import de.hybris.platform.commercefacades.search.data.SearchStateData;
import de.hybris.platform.commerceservices.search.facetdata.ProductSearchPageData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductWsDTO;
import de.hybris.platform.core.Registry;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.regioncache.region.CacheRegion;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.xml.sax.SAXException;

import com.bhge.core.data.AddToMSEInputData;
import com.bhge.core.data.AddToMSEOutputData;
import com.bhge.core.data.EquipmentData;
import com.bhge.core.data.ServiceHistoryDetails;
import com.bhge.facades.mysite.MySiteEquipmentFacade;
import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.BHGERmaFormFacade;
import com.bhge.facades.rma.data.WarrantyData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.facades.user.data.GetAddressFormData;
import com.ds.dsocc.mysiteequipment.data.AddToMSEInputDataWsDTO;
import com.ds.dsocc.mysiteequipment.data.BHGEAddToMSEOutputDataWsDTO;
import com.ds.dsocc.mysiteequipment.data.EquipmentWsDTO;

import com.bh.occ.util.XSSFilterUtil;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import com.bh.occ.forms.BHGEMySiteEquipmentForm;
import com.bhge.core.rma.service.BHGERMAStatusService;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.util.BHGECustomerUtil;
import de.hybris.platform.commercefacades.product.data.ProductData;

/**
 * This controller is used for mySite equipment related related APIs for revamped DS store
 * Added on 1/4/2021
 * @author 212695810
 *
 */
@Controller
@Tag(name = "My Site Equipment")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/mySiteEquipment")
public class DSMySiteEquipmentController extends DSBaseController {

	private static final Logger LOG = Logger.getLogger(DSMySiteEquipmentController.class);
	private static final String PAGE_SIZE = "50";
	public static final int MAX_PAGE_LIMIT = 100;
	
	@Resource(name = "bhgeRMAStatusService")
	private BHGERMAStatusService bhgeRMAStatusService;
	
	@Resource(name = "userService")
	private UserService userService;
	
	@Resource(name = "mySiteEquipmentFacade")
	private MySiteEquipmentFacade mySiteEquipmentFacade;
	
	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "customerFacade")
	private CustomerFacade customerFacade;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;
	
	@Resource(name = "bhgeRmaFormFacade")
	private BHGERmaFormFacade bhgeRmaFormFacade;

	@Resource(name = "bhgeProductSearchFacade")
	private BHGEProductSearchFacade<ProductData> productSearchFacade;

	@Resource(name = "bhgeCategoryDao")
	private DefaultBHGECategoryDao bhgeCategoryDao;

	@Resource(name = "serialNumSearchCacheRegion")
	private CacheRegion serialNumSearchCacheRegion;

	@SuppressWarnings("rawtypes")
	@Resource(name = "serialNumberSearchCacheValueLoader")
	private CacheValueLoader serialNumberSearchCacheValueLoader;


	/**
	 * Method to fetch the existing equipment records of the customer
	 * @param MANorMELflag
	 * @param searchBy
	 * @param filterBy
	 * @param fromDate
	 * @param toDate
	 * @param pageNumber
	 * @param pageSize
	 * @param groupBy
	 * @param refreshFlag
	 * @param brFlag
	 * @param productLinesSelected
	 * @param endCustomerID
	 * @param sortBy
	 * @return
	 * @throws ParseException
	 */
	@Operation(operationId = "fetchEquipmentsForCustomer", summary = "Fetches the existing equipment records of the customer", description = "Fetches the existing equipment records of the customer")
	@RequestMapping(value = "/fetchEquipmentsForCustomer", method = RequestMethod.GET)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public EquipmentWsDTO fetchEquipmentsForCustomer(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET)
													 final String fields, @RequestParam(value = "MANorMELflag", required = true)
													 final String MANorMELflag, @RequestParam(value = "searchBy", required = false)
													 final String searchBy, @RequestParam(value = "filterBy", defaultValue = "totalItems", required = false)
													 final String filterBy, @RequestParam(value = "fromDate", required = false)
													 final String fromDate, @RequestParam(value = "toDate", required = false)
													 final String toDate, @RequestParam(value = "pageNumber", required = false)
													 final String pageNumber, @RequestParam(value = "pageSize", required = false)
													 final String pageSize, @RequestParam(value = "groupBy", defaultValue = "default", required = false)
													 final String groupBy, @RequestParam(value = "refreshFlag",  required = false)
													 final boolean refreshFlag, @RequestParam(value = "brFlag", required = false)
													 final String brFlag, @RequestParam(value = "productLinesSelected", required = false)
													 final List<String> productLinesSelected, @RequestParam(value = "endCustomerID", required = false)
													 final String endCustomerID, @RequestParam(value = "sortBy", required = false)
													 final String sortBy,@RequestParam(value = "itemsInWatchlist", required = false)
													 final Boolean itemsInWatchlist) throws ParseException
	{
		LOG.info("=========================== Fetch Equipment Data for Customer Method ====================");
		LOG.info(" /fetchEquipmentsForCustomer method starts- " + java.time.LocalDateTime.now());

		// Get the logged in customer
		String sessionCustomer = null;
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		if(null != currentUser.getDefaultB2BUnit()) {
			sessionCustomer = currentUser.getDefaultB2BUnit().getUid().split("_")[0];
		}

		// Get the session customer
		//final String sessionCustomer = bhgeRMAStatusService.getSoldTo();
		LOG.info("sessionCustomer -" + sessionCustomer);
		final String customerNumber = StringUtils.isNotBlank(sessionCustomer) ? StringEscapeUtils.escapeHtml4(sessionCustomer)
				: null;

		EquipmentData finalEquipmentData = new EquipmentData();

		// Allow only logged in user to access the API. Guest user is not allowed to get the data
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel && StringUtils.isNotBlank(customerNumber)
				&& BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
		{
			LOG.info("Inside MySiteEquipmentController :: fetchEquipmentsForCustomer - User Name: " + userService.getCurrentUser().getName() + "  User UID: "
					+ userService.getCurrentUser().getUid() + " User SSO: " +  userService.getCurrentUser().getSso() + " customerNumber : " + customerNumber);

			//Sanitize input fields
			final String flag = StringEscapeUtils.escapeHtml4(MANorMELflag);
			String searchValue = "";
			if (searchBy != null && StringUtils.isNotBlank(searchBy))
			{
				searchValue = mySiteEquipmentFacade.searchBySanity(StringEscapeUtils.escapeHtml4(searchBy));
			}
			final String filterValue = StringEscapeUtils.escapeHtml4(filterBy);
			final String fromDateFilter = StringEscapeUtils.escapeHtml4(fromDate);
			final String toDateFilter = StringEscapeUtils.escapeHtml4(toDate);
			final String pageNum = StringEscapeUtils.escapeHtml4(pageNumber);
			final String size = StringEscapeUtils.escapeHtml4(pageSize);
			final String groupByFilter = StringEscapeUtils.escapeHtml4(groupBy);
			final String brFilter = StringEscapeUtils.escapeHtml4(brFlag);
			final String endCustomerFilterValue = StringEscapeUtils.escapeHtml4(endCustomerID);
			final String sortByValue = StringEscapeUtils.escapeHtml4(sortBy);
			 if(productLinesSelected!=null) {
			productLinesSelected.forEach(
					(productLineSelected) -> productLineSelected = StringEscapeUtils.escapeHtml4(productLineSelected));
			 }
			int page = 0;
			if (StringUtils.isNotBlank(pageNum) && NumberUtils.isNumber(pageNum))
			{
				page = (Integer.parseInt(pageNum));
			}
			LOG.info("pageSize -" + size);
			final PageableData pageableData = createPageableData(page, getUIPageSize(size), null, null);

			//Get cached equipment data if refresh flag is false else pull the real data
			final EquipmentData equipmentData = mySiteEquipmentFacade.getMSECacheData(customerNumber, flag, refreshFlag,
					fromDateFilter, toDateFilter, endCustomerFilterValue);
			if (equipmentData != null)
			{
				//Filter the equipment data
				finalEquipmentData = mySiteEquipmentFacade.getFinalEquipmentList(equipmentData, filterValue, flag, searchValue,
						groupByFilter, pageableData, brFilter, productLinesSelected, sortByValue);
				if(itemsInWatchlist!= null)
				{
					mySiteEquipmentFacade.updateFilterList(finalEquipmentData,itemsInWatchlist);
					
				}
			}
			LOG.info(" /fetchEquipmentsForCustomer method end time- " + java.time.LocalDateTime.now());
		}

		EquipmentWsDTO equipmentWsDTO = getDataMapper().map(finalEquipmentData, EquipmentWsDTO.class, "FULL");		
		
//		for(List<AddToMSEInputData>equipList : finalEquipmentData.getGroupByEquipmentList())
//		{
//			List<AddToMSEInputDataWsDTO> equipListWsDto = new ArrayList<AddToMSEInputDataWsDTO>();
//			for(AddToMSEInputData equipment : equipList)
//			{				
//				AddToMSEInputDataWsDTO equipmentWsDto = getDataMapper().map(equipment, AddToMSEInputDataWsDTO.class, "FULL");
//				equipListWsDto.add(equipmentWsDto);
//			}
//			equipmentWsDTO.getGroupByEquipmentList().add(equipListWsDto);
//		}

		return equipmentWsDTO;
	}
	/**
	 * Method to add a new equipment 
	 * @param fullInputData
	 * @return
	 * @throws ParseException
	 * @throws BackendException
	 */
	@RequestMapping(value = "/addToMySiteEquipment", method =
		{ RequestMethod.PUT, RequestMethod.POST }, produces = MediaType.APPLICATION_JSON_VALUE)
		@ResponseBody
		//@ApiOperation(value = "Add to My Site Equipment", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
		@ResponseStatus(value = HttpStatus.OK)
		@ApiBaseSiteIdAndUserIdParam
		public List<BHGEAddToMSEOutputDataWsDTO> addToMySiteEquipment(@RequestBody
		final List<List<BHGEMySiteEquipmentForm>> fullInputData) throws ParseException, BackendException
		{
			LOG.info("=========================== Add to My Site Equipment Method ==================== ");
			LOG.info(" /addToMySiteEquipment method start time- " + java.time.LocalDateTime.now());

			String customerNumber = null;
			List<AddToMSEOutputData> returnList = new ArrayList<AddToMSEOutputData>();
			List<BHGEAddToMSEOutputDataWsDTO> returnListDTOs = new ArrayList<BHGEAddToMSEOutputDataWsDTO>();
			final String sessionCustomer = bhgeRMAStatusService.getSoldTo();
			LOG.info("sessionCustomer -" + sessionCustomer);
			if (sessionCustomer != null && StringUtils.isNotBlank(sessionCustomer))
			{
				customerNumber = StringEscapeUtils.escapeHtml4(sessionCustomer);
			}
			//customerNumber = "0000133392";
			LOG.info("--------------------- 2 ============== " + customerNumber);
			if (userService.getCurrentUser() instanceof GEEdgeCustomerModel && StringUtils.isNotBlank(customerNumber)
					&& BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
			{
				final List<AddToMSEInputData> xssFilteredData = new ArrayList<>();

				for (final List<BHGEMySiteEquipmentForm> inputData : fullInputData){


				for (final BHGEMySiteEquipmentForm f : inputData)
					{
						final AddToMSEInputData eq = new AddToMSEInputData();
						eq.setSerialNumber(serialNumberSanity(StringEscapeUtils.escapeHtml4((f.getSerialNumber()).toUpperCase())));
						eq.setPartNumber(partNumberSanity((StringEscapeUtils.escapeHtml4((f.getPartNumber()).toUpperCase()))));
						eq.setPartName(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(getLimitedPartNameValue(f.getPartName()))));
						eq.setAssetNumber(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getAssetNumber())));
						eq.setLastServiceDate(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getLastServiceDate())));
						eq.setServiceInterval(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getServiceInterval())));
						eq.setLocation(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getLocation())));
						eq.setEndCustomer(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getEndCustomer())));
						eq.setEndCustomerName(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getEndCustomerName())));
						eq.setHtsCode(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getHtsCode())));
						eq.setAdditionalInfo(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getAdditionalInfo())));
						eq.setAddUpdateFlag(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getAddUpdateFlag())));
						eq.setRemoveFlag(f.isRemoveFlag());
						eq.setThereInMELFlag(f.isThereInMELFlag());
						eq.setStatus(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getStatus())));
						eq.setPinned(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getPinned())));
						eq.setSelectedOption(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getSelectedOption())));						
						eq.setSensorType(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getSensorType())));
						eq.setCustomer(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getCustomer())));
						eq.setProductLine(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getProductLine())));
						//TODO 23/8 - Reuse product family if required for druck BRD
						//eq.setProductFamily(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(f.getProductFamily())));
					
						
						xssFilteredData.add(eq);
					}
				}

				try {
					returnList = mySiteEquipmentFacade.addToMelRFC(customerNumber, xssFilteredData);
				} catch (IOException e) {
					LOG.error("IOException at addToMySiteEquipment : ",e);
				} catch (SAXException e) {
					LOG.error("SAXException at addToMySiteEquipment : ",e);
				}

			}
			
			for(AddToMSEOutputData outputData : returnList)
			{
				BHGEAddToMSEOutputDataWsDTO outputDataDTO = getDataMapper().map(outputData, BHGEAddToMSEOutputDataWsDTO.class,  "FULL");
				LOG.info("/addToMySiteEquipmentResponseData object " +outputData.getPartNumber());
				LOG.info("/addToMySiteEquipmentResponseData object " +outputData.getMessage());
				LOG.info("/addToMySiteEquipmentResponseDTO object " +outputDataDTO.getPartNumber());
				LOG.info("/addToMySiteEquipmentResponseDTO object " +outputDataDTO.getMessage());
				returnListDTOs.add(outputDataDTO);
			}
			LOG.info(" /addToMySiteEquipment method end time- " + java.time.LocalDateTime.now());
			return returnListDTOs;
		}
	
	
	
	/**
	 * Method to add service history to existing equipment record
	 * @param serviceHistoryInputData
	 * @return
	 */
		@Operation(operationId = "addServiceHistory", summary = "Adds Service History for equipment record", description = "Adds Service History for equipment record")
		@RequestMapping(value = "/addServiceHistory", method =
		{ RequestMethod.PUT, RequestMethod.POST })
		@ResponseBody
		@ApiBaseSiteIdAndUserIdParam
		public List<BHGEAddToMSEOutputDataWsDTO> addServiceHistory(@RequestBody
		final ServiceHistoryDetails serviceHistoryInputData)
		{
			LOG.info("=========================== Add SERVICE HISTORY Method ==================== ");
			LOG.info(" /addServiceHistory method start time- " + java.time.LocalDateTime.now());

			String customerNumber = null;
			final String sessionCustomer = bhgeRMAStatusService.getSoldTo();
			List<AddToMSEOutputData> serviceHistory = new ArrayList<AddToMSEOutputData>();
			List<BHGEAddToMSEOutputDataWsDTO> returnServiceHistoryDTOs = new ArrayList<BHGEAddToMSEOutputDataWsDTO>();
			if (sessionCustomer != null && StringUtils.isNotBlank(sessionCustomer))
			{
				LOG.info("sessionCustomer -" + sessionCustomer);
				customerNumber = StringEscapeUtils.escapeHtml4(sessionCustomer);
			}
			//customerNumber = "0000133392";
			LOG.info("--------------------- 2 ============== " + customerNumber);
			if (userService.getCurrentUser() instanceof GEEdgeCustomerModel && StringUtils.isNotBlank(customerNumber)
					&& BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
			{
				final ServiceHistoryDetails s = new ServiceHistoryDetails();
				s.setPartNumber(partNumberSanity(StringEscapeUtils.escapeHtml4(serviceHistoryInputData.getPartNumber())));
				s.setSerialNumber(serialNumberSanity(StringEscapeUtils.escapeHtml4(serviceHistoryInputData.getSerialNumber())));
				s.setServiceType(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(serviceHistoryInputData.getServiceType())));
				s.setServiceDescription(
						StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(serviceHistoryInputData.getServiceDescription())));
				s.setServiceDate(StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(serviceHistoryInputData.getServiceDate())));
				s.setAddRemoveFlag(
						StringEscapeUtils.unescapeHtml4(StringEscapeUtils.escapeHtml4(serviceHistoryInputData.getAddRemoveFlag())));
				s.setIndex(org.apache.commons.text.StringEscapeUtils.escapeHtml4(serviceHistoryInputData.getIndex()));

				serviceHistory = mySiteEquipmentFacade.addServiceHistoryRFC(customerNumber, s);
			}
			
			for(AddToMSEOutputData service : serviceHistory)
			{
				BHGEAddToMSEOutputDataWsDTO returnServiceHistoryDTO = getDataMapper().map(service, BHGEAddToMSEOutputDataWsDTO.class,  "FULL");
				returnServiceHistoryDTOs.add(returnServiceHistoryDTO);
			}
			LOG.info(" /addServiceHistory method end time- " + java.time.LocalDateTime.now());
			return returnServiceHistoryDTOs;
		}
		
		/**
		 * Method to get customer number and name
		 * @return
		 */
		@RequestMapping(value = "/getCustomerNameandNumber", method = RequestMethod.GET)
		@ResponseBody
		@ApiBaseSiteIdAndUserIdParam
		public List<Map<String, String>> getCustomerNameandNumber()
		{
			LOG.info(" /getCustomerNameandNumber method start time- " + java.time.LocalDateTime.now());
			final CustomerData customerData = customerFacade.getCurrentCustomer();
			final BHGECustomerData gEEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
			final List<Map<String, String>> returnList = new ArrayList<Map<String, String>>();
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			final String[] salesAreaIds = null;
			final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();
			String salesAreaUid = "";
			if (null != defaultSoldToUnit)
			{
				salesAreaUid = defaultSoldToUnit.getUid();
			}

			LOG.info("=========== SALES AREA uid: ==========" + salesAreaUid);

			final GetAddressFormData form = new GetAddressFormData();
			form.setPageNo("0");
			form.setPageSize("1000");
			form.setZipCode("");
			form.setState("");
			form.setB2bUnit(StringEscapeUtils.escapeHtml4(salesAreaUid));
			final boolean accountPageFlag = true;
			final SearchPageData<AddressData> searchPageData = bhgeUserProfileFacade.getAddressForSalesArea(form, accountPageFlag, true);
			final List<AddressData> results = searchPageData.getResults();
			if (CollectionUtils.isNotEmpty(results))
			{
				for (final AddressData data : results)
				{
					if (StringUtils.isNotBlank(data.getSapCustomerID()))
					{
						final Map<String, String> addressFormList = new HashMap<String, String>();
						addressFormList.put("customerName", data.getCompanyName());
						addressFormList.put("customerNumber", data.getSapCustomerID());
						returnList.add(addressFormList);
					}
				}
			}
			else
			{
				final BHGESoldToData soldto = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo"));
				if (null != soldto)
				{
					final Map<String, String> addressFormList = new HashMap<String, String>();
					addressFormList.put("customerName", soldto.getLocName());
					addressFormList.put("customerNumber", soldto.getUid());
					returnList.add(addressFormList);
				}
			}
			LOG.info(" /getCustomerNameandNumber method end time- " + java.time.LocalDateTime.now());

			return returnList;
		}
		
		/**
		 * Serial number lookup
		 * @param partNum
		 * @param srNum
		 * @param request
		 * @return
		 * @throws NullPointerException
		 */
		@RequestMapping(value = "/MSEPartSerialLookup", method = RequestMethod.GET)
		@ResponseBody
		@ApiBaseSiteIdAndUserIdParam
		public boolean MSEPartSerialLookup(@RequestParam(value = "partNum", required = true)
		final String partNum, @RequestParam(value = "srNum", required = true)
		final String srNum, final HttpServletRequest request) throws NullPointerException
		{
			LOG.info(" /MSEPartSerialLookup method start time- " + java.time.LocalDateTime.now());
			final List<ProductData> productDataList = new ArrayList<ProductData>();

			final String partNo = partNumberSanity((StringEscapeUtils.escapeHtml4(partNum)));
			final String srNo = serialNumberSanity((StringEscapeUtils.escapeHtml4(srNum)));
			final String wildSearchVal = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4("yes"));
			final String searchTypeVal = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4("2"));

			final List<RMAData> data = new ArrayList<>();
			final RMAData rmaData = new RMAData();

			final List<String> partNums = new ArrayList<>();
			List<MaterialData> equipDataList = new ArrayList<>();

			if (StringUtils.isNotBlank(partNo) && StringUtils.isNotBlank(srNo))
			{
				rmaData.setMaterialNumber(null);
				rmaData.setSerialNumber(BHGESAPJCoUtils.isNumericData(srNo) ? BHGESAPJCoUtils.addLeadingZeros(srNo, 18) : srNo);
				rmaData.setSrvOff("");
				rmaData.setPlant("");
				data.add(rmaData);

				LOG.info(" /MSEPartSerialLookup method having no wild search start time- " + java.time.LocalDateTime.now());
				equipDataList = bhgeRmaFormFacade.prepareServiceOffering(data, true, null, "");
				LOG.info(" /MSEPartSerialLookup method having no wild search end time- " + java.time.LocalDateTime.now());

				if (equipDataList != null && equipDataList.size() > 0)
				{
					for (final MaterialData equipDataset : equipDataList)
					{
						if (equipDataset.getPartNumber() != null && equipDataset.getSerialNumber() != null)
						{
							if (equipDataset.getPartNumber().equals(partNo) && equipDataset.getSerialNumber().equals(srNo))
							{
								LOG.info(
										" /MSEPartSerialLookup method having no wild search found end time- " + java.time.LocalDateTime.now());
								return true;
							}
						}
					}
				}

				else
				{
					rmaData.setMaterialNumber(partNo);
					rmaData.setSerialNumber(srNo);
					rmaData.setSrvOff("");
					rmaData.setPlant("");
					data.add(rmaData);

					LOG.info(" /MSEPartSerialLookup method having part and serial for wild search start time- "
							+ java.time.LocalDateTime.now());
					equipDataList = bhgeRmaFormFacade.prepareServiceOffering(data, true, wildSearchVal, searchTypeVal);
					LOG.info(" /MSEPartSerialLookup method having part and serial for wild search end time- "
							+ java.time.LocalDateTime.now());

					if (equipDataList != null && equipDataList.size() > 0)
					{
						for (final MaterialData equipDataset : equipDataList)
						{
							if (equipDataset.getPartNumber() != null && equipDataset.getSerialNumber() != null)
							{
								if (equipDataset.getPartNumber().equals(partNo) && equipDataset.getSerialNumber().equals(srNo))
								{
									LOG.info(" /MSEPartSerialLookup method having part and serial for wild search found end time- "
											+ java.time.LocalDateTime.now());
									return true;
								}
							}
						}
					}
				}


				LOG.info(" /MSEPartSerialLookup method for part and serial end time- " + java.time.LocalDateTime.now());
			}
			LOG.info(" /MSEPartSerialLookup method end time- " + java.time.LocalDateTime.now());
			return false;
		}
		
		/**
		 * Method for serial number look up
		 * @param mySiteEquipmentForm
		 * @return
		 */
		@RequestMapping(value = "/melEquipmentLookup", method =
			{ RequestMethod.PUT, RequestMethod.POST })
			@ResponseBody
			@ResponseStatus(value = HttpStatus.OK)
			@ApiBaseSiteIdAndUserIdParam
			public List<AddToMSEInputDataWsDTO> mseLookup(@RequestBody
			final BHGEMySiteEquipmentForm mySiteEquipmentForm)
			{
				final String partNumber = mySiteEquipmentForm.getPartNumber();
				final String serialNumber = mySiteEquipmentForm.getSerialNumber();
				String itemCustomerAccountValue = mySiteEquipmentForm.getCustomer();
				LOG.info("=========================== MY EQUIPMENT LOOKUP METHOD ========================");
				LOG.info(" /melEquipmentLookup method start time- " + java.time.LocalDateTime.now());
				List<AddToMSEInputData> lookupdata = new ArrayList<AddToMSEInputData>();
				List<AddToMSEInputDataWsDTO> returnLookupData = new ArrayList<AddToMSEInputDataWsDTO>();
				final String sessionCustomer = StringUtils.isNotBlank(itemCustomerAccountValue) ? itemCustomerAccountValue : bhgeRMAStatusService.getSoldTo();
				LOG.info("sessionCustomer -" + sessionCustomer);
				String customerNumber = "";
				if (sessionCustomer != null && StringUtils.isNotBlank(sessionCustomer))
				{
					customerNumber = StringEscapeUtils.escapeHtml4(sessionCustomer);
				}
				if (userService.getCurrentUser() instanceof GEEdgeCustomerModel && StringUtils.isNotBlank(customerNumber)
						&& BHGECustomerUtil.isUserAllowedToView(customerNumber, userService))
				{
					final String partNum = partNumberSanity(StringEscapeUtils.escapeHtml4(partNumber));
					final String serialNum = serialNumberSanity(StringEscapeUtils.escapeHtml4(serialNumber));

					final EquipmentData equipmentData = mySiteEquipmentFacade.getMSELookupRFC(customerNumber, partNum, serialNum);
					mySiteEquipmentFacade.populateProductDataOnEquipmentRecord(equipmentData);
					if (equipmentData.getEquipmentData() != null)
					{
						lookupdata = equipmentData.getEquipmentData();
					}
				}
				for(AddToMSEInputData lookup : lookupdata)
				{
					if(lookup.getCustomer() != null && lookup.getCustomer().equalsIgnoreCase(itemCustomerAccountValue))
					{
						AddToMSEInputDataWsDTO lookupDataDTO = getDataMapper().map(lookup, AddToMSEInputDataWsDTO.class, "FULL");
						LOG.info("/melEquipmentLookupResponse object " +lookup.getPartNumber());
						LOG.info("/melEquipmentLookupResponse object " +lookup.getSerialNumber());
						LOG.info("/melEquipmentLookupResponseDTO object " +lookupDataDTO.getPartNumber());
						LOG.info("/melEquipmentLookupResponseDTO object " +lookupDataDTO.getSerialNumber());
						returnLookupData.add(lookupDataDTO);
					}
				}
				
				
				LOG.info(" /melEquipmentLookup method end time- " + java.time.LocalDateTime.now());
				return returnLookupData;

			}

	@Operation(operationId = "autoCompleteSuggestions", summary = "Provides Auto complete Suggestions", description = "Provides Auto complete Suggestions")
	@RequestMapping(value = "/MSEAutocomplete", method = RequestMethod.GET)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public AutocompleteResultDataWsDTO getAutocompleteSuggestions(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
																  @RequestParam(value = "filter", defaultValue = "ALL") String filter,
																  @RequestParam("term") final String term,
															      final HttpServletRequest request, final HttpServletResponse response) throws CMSItemNotFoundException
	{
		LOG.info("getAutocompleteSuggestions Round 1 : - " + term + "|");

		final AutocompleteResultData resultData = new AutocompleteResultData();
		String str = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(term));
		filter = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(filter));
		LOG.info("getAutocompleteSuggestions Round 2 : - " + str + "|");

		final PageableData pageableData = createPageableData(0, 5, null, ShowMode.Page);
		final SearchStateData searchState = new SearchStateData();
		final SearchQueryData searchQueryData = new SearchQueryData();
		if (str != null)
		{
			str = getReplacedString(str);
		}
		LOG.info("getAutocompleteSuggestions Round 3 : - " + str + "|");

		searchQueryData.setValue(str);
		searchState.setQuery(searchQueryData);
		final ProductSearchPageData<SearchStateData, ProductData> pageData = productSearchFacade.textSearch(searchState,
				pageableData, filter);
		if (pageData.getResults() != null)
		{
			LOG.info("getAutocompleteSuggestions Round 4 : - " + pageData.getResults().size() + "|");
		}
		resultData.setProducts(subList(pageData.getResults(), 5));
		final Set<String> categoryNames = new HashSet<String>();

		for (final ProductData prod : resultData.getProducts())
		{
			if (prod != null)
			{
				final Collection<BrandNameData> brandNames = new LinkedList<>();
				final String searchTxt = str;
				categoryNames.add(prod.getParentCategoryName());
				if (prod.getBrandName() != null)
				{
					prod.getBrandName().forEach(bradNameData -> {
						if (bradNameData != null)
						{
							if (StringUtils.containsIgnoreCase(bradNameData.getName(), searchTxt))
							{
								final Collection<CategoryModel> categories = bhgeCategoryDao.findCategoriesByName(bradNameData.getName());
								if (categories.iterator().hasNext())
								{
									final CategoryModel categoryModel = categories.iterator().next();
									final String description = categoryModel.getDescription();
									final String code = categoryModel.getCode();
									
									String categoryImageURL = (categoryModel.getPicture() != null
											? (categoryModel.getPicture().getURL() != null ? categoryModel.getPicture().getURL() : "")
											: "");
									categoryImageURL = String.format("%s%s",
											request.getRequestURL().substring(0, request.getRequestURL().indexOf(request.getContextPath())),
											categoryImageURL);
									bradNameData.setCode(code);
									bradNameData.setImageUrl(categoryImageURL);
									bradNameData.setDescription(description);
									brandNames.add(bradNameData);
								}
							}
						}
					});
					prod.setBrandName(brandNames);
				}
				if(prod.getMediaurl() !=null)
				{
					String mediaURL = String.format("%s%s",
							request.getRequestURL().substring(0, request.getRequestURL().indexOf(request.getContextPath())),
							prod.getMediaurl());
					prod.setMediaurl(mediaURL);	
				}
			}
		}

		// Creating WsDTO Object
		AutocompleteResultDataWsDTO autocompleteResultDataWsDTO = getDataMapper().map(resultData, AutocompleteResultDataWsDTO.class, "FULL");
		LOG.info("getAutocompleteSuggestions CLOSURE.");
		return autocompleteResultDataWsDTO;
	}

	//Part Search for MSE
	@Operation(operationId = "search", summary = "Provides Search functionality", description = "Provides Search functionality")
	@RequestMapping(value = "/MSEPartSearch", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public List<ProductWsDTO> search(@RequestParam(value = "partNum", defaultValue = "", required = false)
									final String partNum, @RequestParam(value = "filter", defaultValue = "ALL")
									final String filterVal, @RequestParam(value = "srNum", defaultValue = "", required = false)
									final String srNum, @RequestParam(value = "wildSearch", defaultValue = "", required = false)
									final String wildSearch, @RequestParam(value = "searchType", defaultValue = "", required = false)
									final String searchType, @RequestParam(value = "pageNumber", defaultValue = "", required = false)
									final String pageNumber, @RequestParam(value = "pageSize", defaultValue = "50", required = false)
									final String pageSize, @RequestParam(value = "isSerialSearch", defaultValue = "false", required = false)
									final boolean isSerialSearch, @RequestParam(value = "equipmentFlag", defaultValue = "false", required = false)
									final boolean equipmentFlag, final HttpServletRequest request) throws NullPointerException
	{
		LOG.info("Inside /engage/partSearch controller - wildSearch - " + wildSearch + " | searchType - " + searchType);

		List<ProductData> productDataList = new ArrayList<ProductData>();

		final String partNo = partNumberSanity(StringEscapeUtils.escapeHtml4(partNum));
		final String srNo = serialNumberSanity(StringEscapeUtils.escapeHtml4(srNum));
		final String filter = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(filterVal));
		final String wildSearchVal = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(wildSearch));
		String searchTypeVal = XSSFilterUtil.filter(StringEscapeUtils.escapeHtml4(searchType));

		LOG.info("Inside /engage/partSearch controller - wildSearch - " + wildSearch + " | searchType - " + searchTypeVal);


		if (StringUtils.isNotBlank(partNo) && StringUtils.isBlank(srNo))
		{

			final AutocompleteResultData resultData = new AutocompleteResultData();
			String str = partNo;

			final PageableData pageableData = createPageableData(0, 5, null, ShowMode.Page);
			final SearchStateData searchState = new SearchStateData();
			final SearchQueryData searchQueryData = new SearchQueryData();
			if (str != null)
			{
				str = getReplacedString(str);
			}

			searchQueryData.setValue(str);
			searchState.setQuery(searchQueryData);
			final ProductSearchPageData<SearchStateData, ProductData> pageData = productSearchFacade.textSearch(searchState,
					pageableData);
			resultData.setProducts(subList(pageData.getResults(), 5));

			for (final ProductData prod : resultData.getProducts())
			{
				final Collection<BrandNameData> brandNames = new LinkedList<>();
				prod.getBrandName().forEach(bradNameData -> {
					final Collection<CategoryModel> categories = bhgeCategoryDao.findCategoriesByName(bradNameData.getName());
					if (categories.iterator().hasNext())
					{
						final CategoryModel categoryModel = categories.iterator().next();
						final String description = categoryModel.getDescription();
						final String code = categoryModel.getCode();
						final String categoryImageURL = (categoryModel.getPicture() != null
								? (categoryModel.getPicture().getURL() != null ? categoryModel.getPicture().getURL() : "")
								: "");
						bradNameData.setCode(code);
						bradNameData.setImageUrl(categoryImageURL);
						bradNameData.setDescription(description);
						brandNames.add(bradNameData);
					}
				});
				prod.setBrandName(brandNames);
			}

			productDataList.addAll(resultData.getProducts());



			LOG.info("$$$$$$$$$$$ Product data for only part number   ");
			for (final ProductData p : productDataList)
			{
				LOG.info("Product Name : " + p.getName());
				LOG.info("Product Image Url : " + p.getMediaurl());
				LOG.info("Product Part No : " + p.getCode());

			}
			return getProductWsDTOList(productDataList);

		}
		else
		{
			if (StringUtils.isBlank(searchTypeVal) || searchTypeVal.isBlank() || searchTypeVal.equals(""))
			{
				searchTypeVal = "x";
			}

			final List<String> partNums = new ArrayList<>();
			LOG.info("Equip Search : SAP Lookup - " + partNums);// START log
			//LOG.info("---------------------------- PREPARE SERVICE OFFERING START C LINE 1850 -------------------------- "+ java.time.LocalDateTime.now());

			List<WarrantyData> equipDataList = new ArrayList<>();
			List<WarrantyData> equipDataListFromCache = new ArrayList<>();

			final String key = getKey(srNo.trim(), searchTypeVal);
			final CacheKey cacheKey = new SerialNumSearchCacheKey(key, Registry.getCurrentTenant().getTenantID());
			if (isSerialSearch == true)
			{
				serialNumSearchCacheRegion.invalidate(cacheKey, false);
			}


			equipDataListFromCache = (List<WarrantyData>) serialNumSearchCacheRegion.getWithLoader(cacheKey,
					serialNumberSearchCacheValueLoader);

			if (equipDataListFromCache == null)
			{
				serialNumSearchCacheRegion.invalidate(cacheKey, false);
			}

			LOG.info("pageSize -" + pageSize);
			LOG.info("pageNumber -" + pageNumber);

			int page = 0;
			if (pageNumber != null && !"".equals(pageNumber))
			{
				page = Integer.parseInt(pageNumber);
			}

			int pageNumberRequired = 0;

			if (equipDataListFromCache != null && equipDataListFromCache.size() > 0)
			{
				pageNumberRequired = (equipDataListFromCache.size() / Integer.parseInt(pageSize));
				if (page <= pageNumberRequired)
				{
					final PageableData pageableData = createPageableData(page, getUIPageSize(pageSize), "", null);
					final SearchPageData<WarrantyData> filterData = getPaginatedData(equipDataListFromCache, pageableData);
					equipDataList = filterData.getResults();
				}
				else
				{
					LOG.info("================= PAGE NUMBER IS GREATER THAN REQUIRED ==================");
					return null;
				}
			}
			else
			{
				equipDataList = null;
			}

			//LOG.info("---------------------------- PREPARE SERVICE OFFERING END C LINE 1852 -------------------------- "+ java.time.LocalDateTime.now());
			// START log
			if (equipDataList != null)
			{
				for (final WarrantyData equipDataset : equipDataList)
				{
					if (equipDataset.getPartNumber() != null && equipDataset.getPartSerialNumber() != null)
					{
						partNums.add(equipDataset.getPartNumber() + "#$#" + equipDataset.getPartSerialNumber());
					}
				}
			}

			LOG.info("Equip Search : Product Fetch - " + partNums);// START log
			//LOG.info("---------------------------- prepareProductDatas START C LINE 1863 -------------------------- "+ java.time.LocalDateTime.now());
			final int counter = 0;
			if (partNums != null && partNums.size() != 0)
			{
				productDataList = prepareProductDatas(partNums);
			}

			//LOG.info("---------------------------- prepareProductDatas END C LINE 1865 -------------------------- "+ java.time.LocalDateTime.now());
			LOG.info("Equip Search : Product data for only part number and sr No Or Only sr Number  ");

			for (final ProductData p : productDataList)
			{
				LOG.info("Equip Search : Product Name : " + p.getName() + " & Product Image Url : " + p.getMediaurl()
						+ " & Equip Search : Product Part No : " + p.getCode());

			}
			// get the ProductWsDTO list
			List<ProductWsDTO> productWsDTOList = getProductWsDTOList(productDataList);
			return productWsDTOList;
		}
		//end log
	}

	private List<ProductWsDTO> getProductWsDTOList(List<ProductData> productDataList) {
		ArrayList<ProductWsDTO> productWsDTOList = new ArrayList<>();
		if(CollectionUtils.isNotEmpty(productDataList)){
				for(ProductData productData : productDataList){
					ProductWsDTO productWsDTO = getDataMapper().map(productData, ProductWsDTO.class, "FULL");
					productWsDTOList.add(productWsDTO);
				}
			}
		return productWsDTOList;
	}

	/**
	 * Method to sanitize part number in URL
	 * @param url
	 * @return
	 */
	private String partNumberSanity(String url)
	{
		if (url != null && StringUtils.isNotBlank(url))
		{
			if (url.contains("!"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("@"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("#"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("$"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("%"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("("))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains(")"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("}"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("{"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains(":"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains(""))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("?"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains(">"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("<"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
		}
		return url;
	}

	/**
	 * Method to sanitize serial number in URL
	 * @param url
	 * @return
	 */
	private String serialNumberSanity(String url)
	{
		if (url != null && StringUtils.isNotBlank(url))
		{
			if (url.contains("-"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
			if (url.contains("/"))
			{
				url = StringEscapeUtils.unescapeHtml4(url);
			}
		}
		return url;
	}

	/**
	 * Method to Truncate the Part name value to its max allowed length
	 * @param originalPartName
	 * @return
	 */
	private String getLimitedPartNameValue(String originalPartName){
		String correctedPartName = originalPartName;
		try {
			int maxPartNameLength = 40;
			if (originalPartName.length() >= maxPartNameLength) {
				correctedPartName = originalPartName.substring(0, maxPartNameLength);
			}
		}catch(RuntimeException re){
			LOG.error("Exception in getLimitedPartNameValue");
			re.printStackTrace();
		}
		return correctedPartName;
	}

	private String getReplacedString(String url)
	{
		if (url.contains("openingBrack"))
		{
			url = url.replaceAll("openingBrack", "(");
		}
		if (url.contains("closingBrack"))
		{
			url = url.replaceAll("closingBrack", ")");
		}
		if (url.contains("greatSymbol"))
		{
			url = url.replaceAll("greatSymbol", ">");
		}
		if (url.contains("lessSymbol"))
		{
			url = url.replaceAll("lessSymbol", "<");
		}
		if (url.contains("quotes"))
		{
			url = url.replaceAll("quotes", "\"");
		}
		if (url.contains("StraigtQuaote"))
		{
			url = url.replaceAll("StraigtQuaote", "'");
		}
		return url;
	}

	protected <E> List<E> subList(final List<E> list, final int maxElements)
	{
		if (CollectionUtils.isEmpty(list))
		{
			return Collections.emptyList();
		}

		if (list.size() > maxElements)
		{
			return list.subList(0, maxElements);
		}

		return list;
	}

	private String getKey(final String srNum, final String searchType)
	{
		if (StringUtils.isNotBlank(srNum))
		{
			return srNum + "-" + searchType;
		}
		return null;
	}

	private SearchPageData<WarrantyData> getPaginatedData(final List<WarrantyData> equipDataList, final PageableData pageableData)
	{
		LOG.info("********************************** PAGINATION *****************************************");
		final SearchPageData<WarrantyData> result = new SearchPageData<WarrantyData>();

		final PaginationData paginationData = new PaginationData();
		paginationData.setPageSize(pageableData.getPageSize());
		//paginationData.setSort(pageableData.getSort());
		paginationData.setTotalNumberOfResults(equipDataList.size());

		paginationData.setNumberOfPages((int) Math
				.ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

		paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
		result.setPagination(paginationData);

		int startIndex;
		int endIndex;

		if (pageableData.getCurrentPage() == 0)
		{
			//LOG.info("=================== Current Page ============== is 0");
			startIndex = 0;
			endIndex = pageableData.getPageSize();
		}
		else
		{
			//LOG.info("=================== Current Page is not Zero ==============");
			startIndex = pageableData.getCurrentPage() * pageableData.getPageSize();
			endIndex = (pageableData.getCurrentPage() + 1) * pageableData.getPageSize();
		}


		if (equipDataList.size() <= pageableData.getPageSize())
		{
			//LOG.info("================== 1st CONDITION, DATA SIZE=================" + equipDataList.size());
			result.setResults(equipDataList);
		}
		else if (endIndex <= equipDataList.size())
		{
			//LOG.info("================== 2nd CONDITION, END INDEX =================" + endIndex);
			result.setResults(equipDataList.subList(startIndex, endIndex));
		}
		else
		{
			//LOG.info("================== 3rd CONDITION, END INDEX =================" + endIndex);
			result.setResults(equipDataList.subList(startIndex, equipDataList.size()));
		}

		//LOG.info("********************************** PAGINATION ENDS*****************************************" + result.toString());
		return result;
	}

	private List<ProductData> prepareProductDatas(final List<String> partNums)
	{
		return mySiteEquipmentFacade.getProductDataForPartNumber(partNums);
	}

}
