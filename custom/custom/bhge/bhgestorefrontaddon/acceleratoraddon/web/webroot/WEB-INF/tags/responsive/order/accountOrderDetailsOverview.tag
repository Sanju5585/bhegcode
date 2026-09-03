<%@ tag body-content="empty" trimDirectiveWhitespaces="true" %>
<%@ attribute name="order" required="true" type="de.hybris.platform.commercefacades.order.data.OrderData" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="format" tagdir="/WEB-INF/tags/shared/format" %>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="action" tagdir="/WEB-INF/tags/responsive/action" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<spring:htmlEscape defaultHtmlEscape="true" />	

<c:forEach items="${orderDetailsList}" var="orderData" varStatus="count">
<div class="split-orderID${count.index}" <c:if test="${count.index gt 0}">style="display:none"</c:if>>

  <!--   <div class="col-sm-12 col-md-9 col-no-padding"> -->
   		<div class="well-content order-section-title">
			<spring:theme code="text.account.orderHistory.accountDetails.title"/>
	     	<a class="toggle-order-section pull-right">
          		<span class="glyphicon glyphicon-chevron-up"></span>			
			</a>
		</div>
        <div class="well-content">
            <div class="col-sm-4 item-wrapper">
                <div class="item-group">
                    <!--<c:if test="${orderData.paymentType.code=='ACCOUNT'}">-->
                        <ycommerce:testId code="orderDetail_overviewParentBusinessUnit_label">
                            <!--<span class="item-label"><spring:theme code="text.account.order.orderDetails.ParentBusinessUnit"/></span>-->
                            <span class="item-value"><spring:theme code="order.summary.soldTo"/></span>
                            <sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
                            <span class="item-label">
                            <c:out value="${sessionSoldToName}"/></br><c:out value="${soldToAddress.line1}"/></br><c:out value="${soldToAddress.line2}"/></br>
							<c:out value="${soldToAddress.town}"/></br><c:out value="${soldToAddress.region.name}"/></br><c:out value="${soldToAddress.country.name}"/>,&nbsp;${soldToAddress.postalCode}
                            </span>
                             <span class="item-value">${fn:escapeXml(orderData.costCenter.unit.name)}</span>
                             </sec:authorize>
							<!-- Guest User -->
                             <sec:authorize access="hasAnyRole('ROLE_ANONYMOUS')">
                            <c:if test="${orderData.paymentAddress ne null}">
                            <span class="item-label">
                            <c:out value="${orderData.paymentAddress.companyName}"/></br><c:out value="${orderData.paymentAddress.line1}"/></br><c:out value="${orderData.paymentAddress.line2}"/></br>
							<c:out value="${orderData.paymentAddress.town}"/></br><c:out value="${orderData.paymentAddress.region.name}"/></br><c:out value="${orderData.paymentAddress.country.name}"/>,&nbsp;${orderData.paymentAddress.postalCode}
                            </span>
                             </c:if>
                             </sec:authorize>
                             
                        </ycommerce:testId>
                   <!--  </c:if> -->
                </div>
                <div class="item-group d-none">
                    <ycommerce:testId code="orderDetail_overviewOrderID_label">
                        <span class="item-value"><spring:theme code="text.account.orderHistory.orderNumber"/></span>
                        <span class="item-label m-b-10">
                        ${fn:escapeXml(orderData.code)}
                        </span>
                    </ycommerce:testId>
                </div>
                <div class="item-group d-none">
                    <c:if test="${orderData.paymentType.code=='ACCOUNT' and not empty orderData.purchaseOrderNumber}">
                        <ycommerce:testId code="orderDetail_overviewPurchaseOrderNumber_label">
                            <span class="item-value"><spring:theme code="text.account.order.orderDetails.purchaseOrderNumber"/></span>
                            <span class="item-label m-b-10">${fn:escapeXml(orderData.purchaseOrderNumber)}</span>
                        </ycommerce:testId>
                    </c:if>
                </div>
                <div class="item-group d-none">
					<span class="item-value"><spring:theme code="order.sumamry.endCustRef"/></span>
					<c:choose>
						<c:when test="${not empty orderData.endCustomerPo}">
							<span class="item-label m-b-10">${fn:escapeXml(orderData.endCustomerPo)}</span>
						</c:when>
						<c:otherwise>
							-
						</c:otherwise>
					</c:choose>
                </div>
                <div class="item-group">
                    <ycommerce:testId code="orderDetail_overviewOrderStatus_label">
                        <c:choose>
	               		<c:when test="${not empty rmaDataList[0].rmaNumber}">
	               			<span class="item-value"><spring:theme code="text.account.orderHistory.rmastatus" text="RMA status"/></span>
                            <span class="item-label m-b-10"><spring:theme code="text.account.submitted.rmastatus" text="Submitted"/></span>
	               		</c:when>
	               		<c:otherwise>
                        	<span class="item-value"><spring:theme code="text.account.orderHistory.orderStatus"/></span>
                        	<c:if test="${not empty orderData.statusDisplay}">
                            	<span class="item-label m-b-10"><spring:theme code="text.account.order.status.display.${fn:escapeXml(orderData.statusDisplay)}"/></span>
                        	</c:if>
                        </c:otherwise>
                        </c:choose>
                    </ycommerce:testId>
                </div>
            </div>
            <div class="col-sm-4 item-wrapper">
                <div class="item-group">
                    <ycommerce:testId code="orderDetail_overviewStatusDate_label">
                        <span class="item-value"><spring:theme code="text.account.orderHistory.datePlaced"/></span>
                        <span class="item-label m-b-10"><fmt:formatDate value="${order.created}" dateStyle="medium" timeStyle="short" type="both"/> UTC</span>
                    </ycommerce:testId>
                </div>
                <div class="item-group">
                	<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
                    <ycommerce:testId code="orderDetail_overviewPlacedBy_label">
                        <span class="item-value"><spring:theme code="checkout.multi.summary.orderPlacedBy"/></span>
                        <span class="item-label m-b-10"><spring:theme code="text.company.user.${fn:escapeXml(order.b2bCustomerData.titleCode)}.name" text=""/>&nbsp;${fn:escapeXml(order.b2bCustomerData.firstName)}&nbsp;${fn:escapeXml(order.b2bCustomerData.lastName)}</span>
                    </ycommerce:testId>
                    </sec:authorize>
                    <sec:authorize access="hasAnyRole('ROLE_ANONYMOUS')">
                    <ycommerce:testId code="orderDetail_overviewPlacedBy_label">
                        <span class="item-value"><spring:theme code="checkout.multi.summary.orderPlacedBy"/></span>
                        <span class="item-label m-b-10"><spring:theme code="text.company.user.${fn:escapeXml(order.b2bCustomerData.titleCode)}.name" text=""/>&nbsp;${fn:escapeXml(order.alternateContactName)}&nbsp;</span>
                    </ycommerce:testId>
                    </sec:authorize>
                </div>
<!--                 <div class="item-group"> -->
<%--                     <ycommerce:testId code="orderDetail_overviewPlacedBy_label"> --%>
<%--                         <span class="item-value"><spring:theme code="text.account.orderHistory.paymentType"/></span> --%>
<%--                         <span class="item-label">${fn:escapeXml(orderData.paymentType.displayName)}</span> --%>
<%--                     </ycommerce:testId> --%>
<!--                 </div> -->

<%-- 				<div class="item-group">
					<span class="item-label"><spring:theme code="cart.left.navigation.endCustNum"/></span>
					<span class="item-value">${fn:escapeXml(orderData.endUserNumber)}</span>
				</div> --%>
<%--                 <div class="item-group">
                    <!--<c:if test="${orderData.paymentType.code=='ACCOUNT'}">-->
                        <ycommerce:testId code="orderDetail_overviewCostCenter_label">
                            <span class="item-label"><spring:theme code="order.summary.paymentTerms"/></span>
                            <c:choose>
                            	<c:when test="${defaultSoldTo.paymentTrms.name eq null}">
                            		<span class="item-value">${fn:escapeXml(defaultSoldTo.paymentTerms)}</span>
                            	</c:when>
                            	<c:otherwise>
                            		<span class="item-value">${fn:escapeXml(defaultSoldTo.paymentTrms.name)}</span>
                            	</c:otherwise>
                            </c:choose>
                        </ycommerce:testId>
                    </c:if>
                </div> --%>
                <div class="item-group">
                	<c:if test="${orderData.quoteCode ne null}">
							<spring:url htmlEscape="false" value="/my-account/my-quotes/${orderData.quoteCode}" var="quoteDetailUrl"/>
	                    <ycommerce:testId code="orderDetail_overviewQuoteId_label">
	                        <span class="item-value"><spring:theme code="text.account.quote.code"/></span>
	                        <span class="item-label">
										<a href="${quoteDetailUrl}" >
											${fn:escapeXml(orderData.quoteCode)}
										</a>
	                        </span>
	                    </ycommerce:testId>
                    </c:if>
                </div>
                <div class="item-group">
                	<c:if test="${not empty orderData.appliedCouponCodes[0]}">
						<span class="item-value"><spring:theme code="order.summary.couponcode" text="Coupon code"/></span>
						<span class="item-label">${fn:escapeXml(orderData.appliedCouponCodes[0])}</span>
					</c:if>
				</div>
            </div>
<%--             <div class="col-sm-4 item-wrapper">
                <div class="item-group">
                    <ycommerce:testId code="orderDetail_overviewOrderTotal_label">
                        <span class="item-label"><spring:theme code="text.account.order.total"/></span>
                        <span class="item-value"><format:price priceData="${order.totalPrice}"/></span>
                    </ycommerce:testId>
                </div>
            </div> --%>
            
	        <div class="item-group col-md-12 p-0">
	           <ycommerce:testId code="orderDetail_overviewPlacedBy_label">
	               <span class="item-value d-inline-block"><spring:theme code="text.account.orderHistory.paymentType"/></span>
	               <c:choose>
	               <c:when test="${not empty rmaDataList[0].rmaNumber}">
	               <c:forEach items="${orderDetailsList}" var="orderDetails" varStatus="count">
	               	<div class="row m-t-10 m-b-5">
		               	<div class="col-md-6">
		               	<span class="item-label text-uppercase" style="font-family: GE Inspira Sans Bold!important">${fn:escapeXml(orderDetails.returnLocation)}</span>
<%-- 		               	<span class="item-label m-t-10">${fn:escapeXml(orderDetails.paymentType.displayName)}</span> --%>
						<span class="item-label m-t-10"><spring:theme code="order.summary.account.payment" text="Account Payment"/></span>
		               	</div>
		               	
		               	<div class="col-md-6 price-info" style="color: #152b4d;font-family: GE Inspira Sans Bold;font-size: 18px">
		               	<span class="pull-right">${orderDetails.totalReturnPrice.formattedValue}</span>
		               	<span class="pull-right m-r-5">${orderDetails.totalReturnItems} <spring:theme code="order.confirmation.items.counts" text="items"/> : </span>
		               	</div>
	               	</div>
	               	<div class="location-data p-l-10 p-t-25" style="width: 100%;height: 95px;border: solid 1px #dedede;">
	               		<div class="col-md-2">
	               			<span class="d-block" style="color:#13294b;font-family: GE Inspira Sans Bold"><spring:theme code="order.summary.po.number" text="PO number"/></span>
	               			<span class="d-block m-t-5" style="color: #63666a;width:150px;word-break:break-all;">${orderDetails.customerPO}</span>
	               		</div>
	               		<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
	               		<div class="col-md-3">
	               			<span class="d-block" style="color:#13294b;font-family: GE Inspira Sans Bold"><spring:theme code="order.summary.end.customer" text="End customer PO number"/></span>
	               			<span class="d-block m-t-5" style="color: #63666a;width:150px;word-break:break-all;">${orderDetails.endCustomerPo}</span>
	               		</div>
	               		</sec:authorize>
	               		<div class="col-md-7">
	               			<span class="d-block" style="color:#13294b;font-family: GE Inspira Sans Bold"><spring:theme code="order.summary.upload.po" text="Upload PO"/></span>
	               			<c:forEach items="${orderDetails.returnPoAttachment}" var="eachPO" varStatus="loop">
	               				<div class="m-t-5 p-5" style="width: 110px;border-radius: 2px;background-color: #f3f3f3;overflow: auto;">${eachPO}</div>
	               			</c:forEach>
	               		</div>
	               	</div>
	               	<h1></h1>
	               </c:forEach>
	               </c:when>
	               <c:otherwise>
	               	<div class="row m-t-10 m-b-5">
		               	<div class="col-md-6">
		               	<span class="item-label">${orderData.paymentType.displayName}</span>
		               	</div>
		               	
		               	<div class="col-md-6 price-info" style="color: #152b4d;font-family: GE Inspira Sans Bold;font-size: 18px">
		               	<span class="pull-right"></span>
		               	<span class="pull-right m-r-5"></span>
		               	</div>
	               	</div>
	               <c:if test="${orderData.paymentType.code=='ACCOUNT' and not empty orderData.purchaseOrderNumber}">	               	
	               	<div class="location-data p-l-10 p-t-25" style="width: 100%;height: 95px;border: solid 1px #dedede;">
	               		<div class="col-md-2">
	               			<span class="d-block" style="color:#13294b;font-family: GE Inspira Sans Bold"><spring:theme code="order.summary.po.number" text="PO number"/></span>
	               			<span class="d-block m-t-5" style="color: #63666a;width:150px;word-break:break-all;">
	               			
		                        <ycommerce:testId code="orderDetail_overviewPurchaseOrderNumber_label">
<%-- 		                            <span class="item-value"><spring:theme code="text.account.order.orderDetails.purchaseOrderNumber"/></span> --%>
		                            <span class="item-label m-b-10">${fn:escapeXml(orderData.purchaseOrderNumber)}</span>
		                        </ycommerce:testId>
                    		
	               			
	               			</span>
	               		</div>
	               		<div class="col-md-3">
	               		<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
	               			<span class="d-block" style="color:#13294b;font-family: GE Inspira Sans Bold"><spring:theme code="order.summary.end.customer" text="End customer PO number"/></span>
	               			<span class="d-block m-t-5" style="color: #63666a;width:150px;word-break:break-all;">
	               			
	               			<c:choose>
								<c:when test="${not empty orderData.endCustomerPo}">
									<span class="item-label m-b-10">${fn:escapeXml(orderData.endCustomerPo)}</span>
								</c:when>
								<c:otherwise>
									-
								</c:otherwise>
							</c:choose>
	               			
	               			</span>
	               		</sec:authorize>
	               		</div>
	               		<div class="col-md-7 d-none">
	               			<span class="d-block" style="color:#13294b;font-family: GE Inspira Sans Bold"><spring:theme code="order.summary.upload.po" text="Upload PO"/></span>
<%-- 	               			<c:forEach items="${returnPoAttachment}" var="eachPO" varStatus="loop"> --%>
	               				<div class="m-t-5 p-5" style="width: 110px;border-radius: 2px;background-color: #f3f3f3;overflow: auto;"></div>
<%-- 	               			</c:forEach> --%>
	               		</div>
	               	</div>
	               	</c:if>
	               </c:otherwise>
	               </c:choose>
	           </ycommerce:testId>
			</div>
            
        </div>
 <!--    </div> -->

<%--     <div class="col-sm-12 col-md-3 item-action">
        <c:set var="orderCode" value="${orderData.code}" scope="request"/>
        <action:actions element="div" parentComponent="${component}"/>
    </div> --%>
	    
</div>
</c:forEach>