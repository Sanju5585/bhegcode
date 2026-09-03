package com.bhge.facades.user.populators;

import com.bhge.facades.user.data.ManageUsersB2bUnitData;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.converters.Populator;
import org.apache.commons.lang3.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class BHGEUserManagementB2bUnitPopulator implements Populator<B2BUnitModel, ManageUsersB2bUnitData> {

    private static final Logger LOG = LogManager.getLogger(BHGEUserManagementB2bUnitPopulator.class);

    @Override
    public void populate(B2BUnitModel source, ManageUsersB2bUnitData target) {
        LOG.info("Populating B2BUnitModel to ManageUsersB2bUnitData{}", source.getUid());
        if (StringUtils.isNotBlank(source.getUid())) {
            target.setUid(source.getUid());
            target.setName(source.getName());
        }
    }
}
