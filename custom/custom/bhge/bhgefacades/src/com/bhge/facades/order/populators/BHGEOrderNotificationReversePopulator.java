package com.bhge.facades.order.populators;

import com.bhge.core.model.OrderNotificationModel;
import com.bhge.facades.order.notification.data.OrderNotificationData;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.internal.model.impl.DefaultModelService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

public class BHGEOrderNotificationReversePopulator implements Populator<OrderNotificationData, OrderNotificationModel> {
    private static final Logger LOG = Logger.getLogger(BHGEOrderNotificationReversePopulator.class);
    private UserService userService;

    @Resource(name = "b2bUnitService")
    private B2BUnitService b2bUnitService;

    @Override
    public void populate(OrderNotificationData source, OrderNotificationModel target) throws ConversionException {
        try {
            final UserModel currentUser = userService.getCurrentUser();
            if(!userService.isAnonymousUser(currentUser) && currentUser instanceof GEEdgeCustomerModel geEdgeCustomer){
                if(Objects.nonNull(source)){
                    target.setCustomer(geEdgeCustomer);
                    final B2BUnitModel parentB2bUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(geEdgeCustomer.getDefaultB2BUnit().getUid().split("_")[0]);
                    target.setB2bUnit(parentB2bUnit);
                    target.setOrderId(source.getOrderId());
                    target.setOrderStatus(source.getStatus());
                    target.setIsOrderRead(source.isIsOrderRead());
                    target.setBlockReason(source.getBlockedReason());
                    updateNotificationERPDate(source, target);
                }
            }
        } catch (Exception e) {
            LOG.error("Exception in Order Notification Reverse populator "+e.getMessage());
        }
    }

    private void updateNotificationERPDate(OrderNotificationData source, OrderNotificationModel target) {
        String updatedDate = source.getUpdatedDate();
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        try {
            Date date = formatter.parse(updatedDate);
            target.setUpdatedDate(date);
        } catch (ParseException e) {
            LOG.error("Exception while Parsing updated Date from for "+source.getOrderId());
        }
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
