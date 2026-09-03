package com.bhge.facades.UserManage.impl;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.facades.UserManage.BHGEUserManageFacade;
import com.bhge.facades.roleAccessCheck.DSRoleAccessCheckFacade;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.ManageUsersB2bUnitData;
import com.bhge.facades.user.populators.BHGEUserManagementB2bUnitPopulator;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.converters.Converters;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.annotation.Resource;
import java.util.List;

public class BHGEUserManageFacadeImpl implements BHGEUserManageFacade {

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name="bhgeB2BUnitService")
    private BHGEB2BUnitService defaultB2BUnitService;

    @Resource(name ="dsRoleAccessCheckFacade")
    DSRoleAccessCheckFacade dsRoleAccessCheckFacade;
    @Resource(name = "bhgeUserManagementConverter")
    Converter<B2BCustomerModel, BHGECustomerData> bhgeUserManagmentConverter;

    @Resource(name = "bhgeUserManagementB2bUnitConverter")
    Converter<B2BUnitModel, ManageUsersB2bUnitData> bhgeUserManagementB2bUnitConverter;

    @Autowired
    private BHGEUserManagementB2bUnitPopulator manageB2bUnitPopulator;

    @Override
    public SearchPageData<BHGECustomerData> getUserDetails(final PageableData pageableData, String searchTerm, List<String> filterRoles, String b2bUnit, boolean isInternalUsers)
    {
        UserModel user = userService.getCurrentUser();
        if (user instanceof GEEdgeCustomerModel)
        {
            SearchPageData<B2BCustomerModel> b2BCustomerModels = new SearchPageData<>();
            if (StringUtils.isNotBlank(b2bUnit)) {
                b2BCustomerModels = defaultB2BUnitService.getAllCustoomersForB2bUnits(pageableData,b2bUnit, searchTerm, filterRoles, user.getUid(), isInternalUsers);
            } else {
                B2BUnitModel parentUnitModel = ((GEEdgeCustomerModel) user).getDefaultSoldTo();
                String parentUnit = parentUnitModel.getUid();
                b2BCustomerModels = defaultB2BUnitService.getAllCustoomersForB2bUnits(pageableData,parentUnit, searchTerm, filterRoles, user.getUid(), isInternalUsers);
            }
            return convertPageData(b2BCustomerModels,bhgeUserManagmentConverter);
        }
        return null;
    }

    @Override
    public boolean updateUserDetails(String uid, String role, boolean loginDisabled) {
        UserModel currentUser=userService.getCurrentUser();
        if(isUpdateAllowed(currentUser)) {
            return defaultB2BUnitService.updateUserDetails(uid, role, loginDisabled, currentUser.getUid());
        }
        return false;
    }

    @Override
    public SearchPageData<ManageUsersB2bUnitData> getB2bUnits(PageableData pageableData, String searchTerm) {
        SearchPageData<B2BUnitModel> b2bUnits = defaultB2BUnitService.getAllB2bUnits(pageableData, searchTerm);
        return convertPageData( b2bUnits , bhgeUserManagementB2bUnitConverter );
    }

    @Override
    public ManageUsersB2bUnitData getB2bUnit(String searchTerm) {
        ManageUsersB2bUnitData b2bUnitData = new ManageUsersB2bUnitData();
        B2BUnitModel b2bUnit = defaultB2BUnitService.getB2bUnit(searchTerm);
        if (StringUtils.isNotBlank(b2bUnit.getUid())) {
            manageB2bUnitPopulator.populate(b2bUnit, b2bUnitData);
            return b2bUnitData;
        }
        return null;
    }

    protected <S, T> SearchPageData<T> convertPageData(final SearchPageData<S> source, final Converter<S, T> converter)
    {
        final SearchPageData<T> result = new SearchPageData<T>();
        result.setPagination(source.getPagination());
        result.setSorts(source.getSorts());
        result.setResults(Converters.convertAll(source.getResults(), converter));
        return result;
    }

    private boolean isUpdateAllowed(UserModel user) {
        for (final PrincipalGroupModel eachGroup : user.getGroups())
            {
                if(eachGroup.getUid().equalsIgnoreCase("UG_ADMIN_ORDER_STORE")) {
                    return true;
                    }
            }
            return false;
    }

}
