package com.bhge.couponservices.redemption.strategies.impl;

import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.couponservices.dao.CouponRedemptionDao;
import de.hybris.platform.couponservices.model.CouponRedemptionModel;
import de.hybris.platform.couponservices.redemption.strategies.CouponRedemptionStrategy;
import de.hybris.platform.promotionengineservices.promotionengine.impl.DefaultPromotionEngineService;
import de.hybris.platform.promotions.PromotionsService;
import de.hybris.platform.servicelayer.time.TimeService;
import de.hybris.platform.site.BaseSiteService;

import java.util.List;
import java.util.Objects;

import jakarta.annotation.Resource;

import com.bhge.core.model.BHGECouponModel;


public class BHGECouponSingleCodeCouponRedemptionStrategy implements CouponRedemptionStrategy<BHGECouponModel>
{

	private CouponRedemptionDao couponRedemptionDao;
	private TimeService timeService;
	private PromotionsService promotionsService;

	@Resource
	private DefaultPromotionEngineService defaultPromotionEngineService;

	private BaseSiteService baseSiteService;

	@Override
	public boolean isRedeemable(final BHGECouponModel coupon, final AbstractOrderModel abstractOrder, final String couponCode)
	{
		return checkGECodeCouponRedeemable(coupon, abstractOrder.getUser());

	}

	@Override
	public boolean isCouponRedeemable(final BHGECouponModel coupon, final UserModel user, final String couponCode)
	{
		return checkGECodeCouponRedeemable(coupon, user);

	}

	protected boolean checkGECodeCouponRedeemable(final BHGECouponModel coupon, final UserModel user)
	{
		final List<CouponRedemptionModel> couponRedemptionsUser = getCouponRedemptionDao().findCouponRedemptionsByCodeAndUser(
				coupon.getCouponId(), user);

		final int maxRedemptionsPerCustomer = Objects.isNull(coupon.getMaxRedemptionsPerCustomer()) ? Integer.MAX_VALUE : coupon
				.getMaxRedemptionsPerCustomer().intValue();

		boolean redeemable = false;

		if (couponRedemptionsUser.size() < maxRedemptionsPerCustomer)
		{
			final int maxTotalRedemptions = Objects.isNull(coupon.getMaxTotalRedemptions()) ? Integer.MAX_VALUE : coupon
					.getMaxTotalRedemptions().intValue();
			final List<CouponRedemptionModel> couponRedemptionTotal = getCouponRedemptionDao().findCouponRedemptionsByCode(
					coupon.getCouponId());
			redeemable = couponRedemptionTotal.size() < maxTotalRedemptions;
		}

		return redeemable;
	}


	protected CouponRedemptionDao getCouponRedemptionDao()
	{
		return couponRedemptionDao;
	}

	public void setCouponRedemptionDao(final CouponRedemptionDao couponRedemptionDao)
	{

		this.couponRedemptionDao = couponRedemptionDao;
	}


	public BaseSiteService getBaseSiteService()
	{
		return baseSiteService;
	}

	public void setBaseSiteService(final BaseSiteService baseSiteService)
	{
		this.baseSiteService = baseSiteService;
	}

	public TimeService getTimeService()
	{
		return timeService;
	}

	public PromotionsService getPromotionsService()
	{
		return promotionsService;
	}


	public void setPromotionsService(final PromotionsService promotionsService)
	{
		this.promotionsService = promotionsService;
	}


	public void setTimeService(final TimeService timeService)
	{
		this.timeService = timeService;
	}
}
