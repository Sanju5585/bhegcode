/**
 *
 */
package com.bhge.core.contactus.dao.impl;

import com.bhge.core.model.ContactusSettingsModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.*;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import lombok.Getter;
import lombok.Setter;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.contactus.dao.BHGEContactUsDAO;
import com.bhge.core.data.ContactUsData;
import com.bhge.core.model.BHGEAreaOfInterestModel;
import com.bhge.core.model.BHGEContactUsJobRoleModel;
import com.bhge.core.model.BHGEContactUsModel;


public class DefaultBHGEContactUsDAOImpl implements BHGEContactUsDAO
{

	private final static Logger LOG = Logger.getLogger(DefaultBHGEContactUsDAOImpl.class);

	private static final String getJobRolesQuery = "select {pk} from {BHGEContactUsJobRole}";
	private static final String getAreaOfInterestQuery = "select {pk} from {BHGEAreaOfInterest}";
	private static final String FETCH_VALUE_FROM_KEY_QUERY = "SELECT {value} from {BHGEGlobalProperties} where {uid}='";

	@Setter
    @Getter
    private FlexibleSearchService flexibleSearchService;

    @Resource(name = "modelService")
	ModelService modelService;

	@Override
	public List<BHGEContactUsJobRoleModel> getContactUsJobRoles()
	{
		final SearchResult<BHGEContactUsJobRoleModel> result = flexibleSearchService.search(getJobRolesQuery);
		return result.getResult();
	}

	@Override
	public List<BHGEAreaOfInterestModel> getAreaOfInterest()
	{
		final SearchResult<BHGEAreaOfInterestModel> result = flexibleSearchService.search(getAreaOfInterestQuery);
		return result.getResult();
	}

	@Override
	public void saveContactUsData(final ContactUsData contactUsData)
	{
		try
		{
			final BHGEContactUsModel bhgeContactUsModel = modelService.create(BHGEContactUsModel.class);
			LOG.info("Saving contact us data for first name: " + contactUsData.getFirstName());
			bhgeContactUsModel.setFirstName(contactUsData.getFirstName());
			bhgeContactUsModel.setLastName(contactUsData.getLastName());
			bhgeContactUsModel.setCompanyName(contactUsData.getCompanyName());
			bhgeContactUsModel.setJobRole(contactUsData.getTitle());
			bhgeContactUsModel.setCompanyEmailAddress(contactUsData.getEmail());
			bhgeContactUsModel.setPhoneNum(contactUsData.getPhoneNum());
			bhgeContactUsModel.setCountry(contactUsData.getCountry());
			bhgeContactUsModel.setState(contactUsData.getState());
			bhgeContactUsModel.setCity(contactUsData.getCity());
			bhgeContactUsModel.setZipCode(contactUsData.getPostalCode());
			bhgeContactUsModel.setAreaOfInterest(contactUsData.getAreaOfInterest());
			bhgeContactUsModel.setContactUsNotes(contactUsData.getMktoPersonNotes());
			bhgeContactUsModel.setCommunicationsPreference(Boolean.valueOf(contactUsData.isOptIn()));
			modelService.save(bhgeContactUsModel);
		}
		catch (final RuntimeException e)
		{
			LOG.error("Error while saving contacus data : " + e);
		}

	}

	@Override
	public String getEndPointForMarketoService(final String key)
	{
		String value = null;
		final String queryString = FETCH_VALUE_FROM_KEY_QUERY + key + "'";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.setResultClassList(Arrays.asList(String.class));
		final SearchResult<String> results = flexibleSearchService.search(query);
		value = CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult().get(0) : null;
		return value;
	}

}
