package com.bhge.core.oldcart.service;

import de.hybris.platform.core.model.order.CartModel;

import java.util.Date;
import java.util.List;

public interface BHGEOldCartService {

    List<CartModel> fetchOldCartDetails(Date pastDate);
}
