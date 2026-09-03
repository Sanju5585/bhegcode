package com.bhge.core.coupon.service;

import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.couponservices.services.CouponService;

import com.bhge.core.model.BHGECouponModel;


public interface BHGECouponService extends CouponService
{
	public BHGECouponModel getAppliedCouponToCart(String couponId);


	public String checkIfTargetPriceDiscountonYP(String couponCode, AbstractOrderModel order);

}
