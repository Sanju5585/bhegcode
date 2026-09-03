package com.bhge.core.coupon.impl;

import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.couponservices.services.impl.DefaultCouponService;
import de.hybris.platform.promotionengineservices.model.RuleBasedOrderEntryAdjustActionModel;
import de.hybris.platform.promotions.model.AbstractPromotionActionModel;
import de.hybris.platform.promotions.model.PromotionResultModel;
import de.hybris.platform.ruleengine.model.AbstractRuleEngineRuleModel;
import de.hybris.platform.ruleengine.model.DroolsRuleModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.coupon.service.BHGECouponService;
import com.bhge.core.model.BHGECouponModel;


public class BHGECouponServiceImpl extends DefaultCouponService implements BHGECouponService
{

	private static final Logger LOG = Logger.getLogger(BHGECouponServiceImpl.class);

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;


	/* Fetch Coupon coupon applied to cart */
	@Override
	public BHGECouponModel getAppliedCouponToCart(final String couponId)
	{
		if (couponId != null)
		{
			final String query = "select {PK} from {BHGECoupon} WHERE {couponid}= '" + couponId + "'";
			final List<BHGECouponModel> couponList = flexibleSearchService.<BHGECouponModel> search(query).getResult();
			if (couponList != null && !couponList.isEmpty())
			{
				final BHGECouponModel coupon = couponList.get(0);
				return coupon;
			}
			else
			{
				return null;
			}
		}
		return null;
	}


	@Override
	public String checkIfTargetPriceDiscountonYP(final String couponCode, final AbstractOrderModel order)
	{
		String discountCode = "";
		final BHGECouponModel geCoupon = getAppliedCouponToCart(couponCode);
		if (geCoupon != null)
		{

			Map<String, String> ruleMap = null;
			final Set<PromotionResultModel> promotionResults = order.getAllPromotionResults();
			for (final PromotionResultModel result : promotionResults)
			{
				final Collection<AbstractPromotionActionModel> actions = result.getActions();
				for (final AbstractPromotionActionModel action : actions)
				{
					if (action instanceof RuleBasedOrderEntryAdjustActionModel)
					{
						final RuleBasedOrderEntryAdjustActionModel ruleBasedAction = (RuleBasedOrderEntryAdjustActionModel) action;
						final AbstractRuleEngineRuleModel rule = ruleBasedAction.getRule();
						if (rule instanceof DroolsRuleModel)
						{
							final DroolsRuleModel droolsRule = (DroolsRuleModel) rule;
							ruleMap = droolsRule.getGlobals();
							LOG.debug("Rules Triggered for the Order : " + ruleMap);
						}
					}
				}

				if (geCoupon.getApplyOnlistPrice())
				{
					/**
					 * ruleOrderEntryFixedDiscountAction ruleOrderEntryPercentageDiscountAction
					 * ruleOrderEntryFixedPriceAction
					 */
					/**
					 * Discount Reason needs to be identified here ------------------------------------------- DFP Fixed % on
					 * List Price DFV Fixed Price for Product on List Price DOV Fixed Value on List Price
					 *
					 * DPY Fixed % on Your Price DVP Fixed Value on Your Price DVY Fixed Price for Product on Your Price
					 * -------------------------------------------
					 */
					if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedDiscountAction"))
					{
						discountCode = BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_LP;
					}
					else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryPercentageDiscountAction"))
					{
						discountCode = BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_LP;
					}
					else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedPriceAction"))
					{
						discountCode = BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_LP;
					}
				}
				else
				{
					if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedDiscountAction"))
					{
						discountCode = BhgeCoreConstants.DISC_CODE_FIXED_VALUE_ON_YP;
					}
					else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryPercentageDiscountAction"))
					{
						discountCode = BhgeCoreConstants.DISC_CODE_PERCENTAGE_ON_YP;
					}
					else if (ruleMap != null && ruleMap.containsKey("ruleOrderEntryFixedPriceAction"))
					{
						discountCode = BhgeCoreConstants.DISC_CODE_FIXED_PRICE_ON_PRODUCT_YP;
					}
				}

			}

		}


		return discountCode;
	}


}
