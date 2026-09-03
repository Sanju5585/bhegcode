package com.bhge.core.oldcart.dao;

import de.hybris.platform.core.model.order.CartModel;

import java.util.Date;
import java.util.List;

public interface BHGEOldCartDao {
    List<CartModel> fetchOldCartDetailForUser(Date pastDate);
}
