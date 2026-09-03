<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="formElement" tagdir="/WEB-INF/tags/responsive/formElement" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@ taglib prefix="b2b-multi-checkout" tagdir="/WEB-INF/tags/addons/bhgestorefrontaddon/responsive/checkout/multi" %>

<%--<form:form action="${placeOrderUrl}" id="placeOrderForm1" modelAttribute="placeOrderForm">--%>
<form action="/checkout/multi/summary/placeOrder" name="placeOrderForm" id="placeOrderForm" method="post"  >
		
		<c:set var="isCheckoutEnabled" value="true"></c:set>
		<sec:authorize access="hasAnyRole('ROLE_ANONYMOUS')">
			<button id="confirmGuestOrder" type="button" class="confirmGuestOrder btn-primary--bhge btn-block btn-place-order btn-block" style="margin: auto; margin-bottom: 10px;">
				<spring:theme code="checkout.summary.confirmOrder" text="Confirm Order"/>
			</button>
		</sec:authorize>
		<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
			<c:choose>
				<c:when test="${soldtoBlocksCheck == 'YES'}">
					<button id="confirmorder" type="button" class= "btn confirmorder btn-block btn-place-order btn-primary--bhge-disabled btn--continue-checkout--bhge" style="margin: auto;margin-bottom: 10px;" disabled="disabled" >
						<spring:theme code="checkout.summary.confirmOrder" text="Confirm Order"/>
					</button>
				</c:when>
				<c:otherwise>
					<button id="confirmorder" type="button" class="confirmorder btn-primary--bhge btn-block btn-place-order btn-block" style="margin: auto; margin-bottom: 10px;">
		
						<spring:theme code="checkout.summary.confirmOrder" text="Confirm Order"/>
					</button>
				</c:otherwise>
			</c:choose>
		</sec:authorize>

	<%-- <c:if test="${cartData.quoteData eq null}">
            <button id="scheduleReplenishment" type="button" class="btn btn-default btn-block scheduleReplenishmentButton checkoutSummaryButton" disabled="disabled">
                <spring:theme code="checkout.summary.scheduleReplenishment"/>
            </button>

            <b2b-multi-checkout:replenishmentScheduleForm/>
        </c:if> --%>
	<%--</form:form>--%>

</form>
<b2b-multi-checkout:bhgeTerms/>
