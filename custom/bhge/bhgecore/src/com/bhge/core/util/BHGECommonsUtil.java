/**
 *
 */
package com.bhge.core.util;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;;


/**
 * @author 212695810 This util class contains common methods that can be reused across the board
 *
 */
public class BHGECommonsUtil
{
	private static final Logger LOG = Logger.getLogger(BHGECommonsUtil.class);
	private static final String FETCH_VALUE_FROM_KEY_QUERY = "SELECT {value} from {BHGEGlobalProperties} where {uid}='";

	/**
	 * Return value for key from BHGEGlobalProperties
	 *
	 * @param key
	 * @return
	 */
	public static String getValueFromBHGEGlobalProperties(final String key, final FlexibleSearchService flexibleSearchService)
	{
		String value = null;
		LOG.debug("Inside getValueFromBHGEGlobalProperties method in BHGECommonsUtil");
		final String queryString = FETCH_VALUE_FROM_KEY_QUERY + key + "'";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.setResultClassList(Arrays.asList(String.class));
		final SearchResult<String> results = flexibleSearchService.search(query);
		value = CollectionUtils.isNotEmpty(results.getResult()) ? results.getResult().get(0) : null;
		LOG.debug("Value for key " + key + " from properties is " + value);
		return value;
	}
	
	public static List<RegionData> getRegionsWithoutEmptyValues(final List<RegionData> regionsData) {
		LOG.info("inside getRegionsWithoutEmptyValues method");
		final List<RegionData> regionDataList = new ArrayList<RegionData>();
		for (final RegionData regData : regionsData) {
			if (StringUtils.isNotBlank(regData.getName())) {
				regionDataList.add(regData);
			}
		}
		return regionDataList;
	}
	/**
	 * Retrieves sold to UID for current user's default B2B Unit
	 * @return
	 */
	public static String getSoldToUidForCurrentLoggedInUser(UserService userService)
	{
		UserModel currentUser = userService.getCurrentUser();
		if(currentUser != null && currentUser instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel geEdgeUser = (GEEdgeCustomerModel) currentUser;
			if(null != geEdgeUser.getDefaultB2BUnit() && geEdgeUser.getDefaultB2BUnit().getUid().contains("_")) {
				return geEdgeUser.getDefaultB2BUnit().getUid().split("_")[0];
			}
		}
		return null;
	}
	
	public static String formatDate(String unFormattedDate, String type){

		final String [] numericMonths = {"01","02","03","04","05","06","07","08","09","10","11","12"};

		final String [] characterMonths = {"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"};
		final String [] characterMonthsFull = {"January","February","March","April","May","June","July","August","September","October","November","December"};
		
		int monthCounter;
		if(returnBlank(unFormattedDate).equals("")){
			return "";
		}
		String year = unFormattedDate.substring(0,4);
		String numericMonth = unFormattedDate.substring(5,7);
		String date = unFormattedDate.substring(8,10);
		String charMonth = null;

		for(monthCounter=0; monthCounter<numericMonths.length; monthCounter++){
			if(numericMonths[monthCounter].equals(numericMonth)){
				if("full".equals(type)){
					charMonth = characterMonthsFull[monthCounter];	
				}else{
					charMonth = characterMonths[monthCounter];	
				}
			}
		}
		StringBuffer finalDate = new StringBuffer();
		finalDate.append(date);
		finalDate.append("-");
		finalDate.append(charMonth);
		finalDate.append("-");
		finalDate.append(year);
		return finalDate.toString();
	}
	
	public static String returnBlank(String s){
		String returnString = "";

		if("".equals(s) ||"null".equalsIgnoreCase(s)|| null == s ){
			returnString = "";
		}else{
		   StringBuffer buf = new StringBuffer();
		   int len = (s == null ? -1 : s.length());
		
		   for ( int i = 0; i < len; i++ ){
		       char c = s.charAt( i );
		       //if ( c>='a' && c<='z' || c>='A' && c<='Z' || c>='0' && c<='9'){
		       if ( c=='<' || c=='>'){
		    	   buf.append( "&#" + (int)c + ";" );
			   }else{
				   buf.append( c );
		       }
		   }
		   returnString = buf.toString();
		}
		return returnString;
	}
	public static LocalDate addWeekDays(LocalDate currentDate, Integer days) {
		LOG.info("weekDays function, days: "+days+ " currentDate: "+currentDate.toString());
		if (days == null || days < 0) {
			throw new IllegalArgumentException("Days must be a non-negative integer");
		}
		LocalDate futureDate = currentDate;
		int daysToAdd = 0;
		while (daysToAdd < days) {
			futureDate = futureDate.plusDays(1);
			if (isWeekday(futureDate)) {
				daysToAdd++;
			}
		}
		LOG.info("futureDate: "+ futureDate.toString());
		return futureDate;
	}
	private static boolean isWeekday(LocalDate date) {
		DayOfWeek day = date.getDayOfWeek();
		return day != DayOfWeek.SATURDAY && day != DayOfWeek.SUNDAY;
	}
}
