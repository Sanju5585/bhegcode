<%-- <%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="b2b-order" tagdir="/WEB-INF/tags/addons/bhgestorefrontaddon/responsive/order" %>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="well-lg well well-tertiary">
    <ycommerce:testId code="orderDetail_overview_section">
        <b2b-order:accountOrderDetailsOverview order="${orderData}"/>
    </ycommerce:testId>
</div>
<c:if test="${not empty orderData.placedBy}">
	<div class="alert alert-info order-placedby">
	<c:choose>
		<c:when test="${not empty agent}">
			<spring:theme code="text.account.order.placedBy" arguments="${orderData.placedBy}"/>
		</c:when>
		<c:otherwise>
			<spring:theme code="text.account.order.placedByText"/>
		</c:otherwise>
	</c:choose>
	</div>
</c:if> --%>
<style>
	.dark-black {
		color: #13294b !important;
	}
	.lite-gray {
		color: #63666a !important;
	}
	.well, .cart-total--bhge, .account-orderdetail .item__list {
		box-shadow: 0 0 8px 0 #00000019;
		transition: 0.3s;
	}
	.well:hover, .cart-total--bhge:hover, .account-orderdetail .item__list:hover {
		box-shadow: 0 4px 18px 0 rgba(0,0,0,0.2);
	}
	.well-content {
		padding: 15px 20px !important;
	}
	.item-wrapper {
		padding-left: 0px;
	}
	.well-content .item-label, .well-content .label-order {
		font-family: 'GE Inspira Sans' !important;
		color: #63666a !important;
		font-weight: normal !important;
	}
	.well-content .item-value, .well-content .value-order {
		font-family: 'GE Inspira Sans Bold' !important;
		padding-bottom: 5px;
	}
	.well-content .toggle-order-section {
		display: none;
	}
	.well-content .item-group {
		padding-bottom: 15px;
	}
	.well .order-section-title {
		text-transform: uppercase;
		font-size: 24px;
		padding-bottom: 5px !important;
		color: #13294b;
		font-weight: normal !important;
	}
	.cart-total--bhge {
		padding: 15px 30px;
	}
	.cart-total--bhge .cart__heading--bhge {
		font-size: 24px;
		font-family: 'GE Inspira Sans Bold' !important;
		margin-bottom: 10px;
	}
	.payment-border {
		border: solid 1px #dedede;
		height: 95px;
		padding: 20px;
	}
</style>