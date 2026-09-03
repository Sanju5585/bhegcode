	<%@ tag body-content="empty" trimDirectiveWhitespaces="true" %>
<%@ attribute name="order" required="true" type="de.hybris.platform.commercefacades.order.data.OrderData" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="order" tagdir="/WEB-INF/tags/responsive/order" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="template"
	tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/template"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags"%>
<%@ taglib prefix="theme" tagdir="/WEB-INF/tags/shared/theme"%>
<%@ taglib prefix="format" tagdir="/WEB-INF/tags/shared/format"%>
<%@ attribute name="count" required="false" type="java.lang.Integer"%>
<%@ taglib prefix="common"
	tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/common"%>
<%@ taglib prefix="breadcrumb"
	tagdir="/WEB-INF/tags/desktop/nav/breadcrumb"%>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@ taglib prefix="user"
	tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/user"%>
<%@ taglib prefix="b2b-order" tagdir="/WEB-INF/tags/addons/bhgestorefrontaddon/responsive/order" %>	
<spring:htmlEscape defaultHtmlEscape="true" />

<div class="m-t-5 m-b-20 p-r-0" style="height: 110px;overflow: hidden;border: solid 1px #e3e3e3;">
	<h1 class="d-none rma-number">${rmaDataList[0].rmaNumber}</h1>
	<div class="col-lg-9 col-md-9 col-sm-9 p-15">
		<div class="row display-flex-center">
			<div class="col-md-4"><span class="order-confirm-subheader text-uppercase order-bold-font"><spring:theme code="order.confirmation.summary.header" text="Summary"/></span></div>
			<c:choose>
				<c:when test="${not empty rmaDataList[0].rmaNumber}">
					<c:set var="count" value="0" scope="page"/>
					<c:forEach items="${rmaDataList}" var="item" >
						<c:if test="${not empty item.rmaLineData}">
							<c:set var="count" value="${count + item.rmaLineData.size()}" scope="page"/>
						</c:if>
					</c:forEach>
<div class="col-md-10"><span><spring:theme code="order.confirmation.total.order" text="Total order"/> (${count}&nbsp;<spring:theme code="order.confirmation.items.counts" text="items"/>)</span></div><%-- orderData.totalItems --%>
				</c:when>
				<c:otherwise>
					<c:set var="count" value="0" scope="page"/>
					<c:forEach items="${orderDetailsList}" var="item" >
						<c:if test="${not empty item.entries}">
							<c:set var="count" value="${count + item.entries.size()}" scope="page"/>
						</c:if>
					</c:forEach>
					<div class="col-md-10"><span><spring:theme code="order.confirmation.total.order" text="Total order"/> (${count}&nbsp;<spring:theme code="order.confirmation.items.counts" text="items"/>)</span></div>
				</c:otherwise>
			</c:choose>
		</div>
		<%-- <div class="row m-0 m-t-20">
			<span class="order-bold-font d-block">Enter Customer Number</span>
			<span>${rmaDataList[0].custNumber}</span>
		</div> --%>
	</div>
	<c:choose>
		<c:when test="${not empty rmaDataList[0].rmaNumber}">
			<c:set var="className" value="d-none"></c:set>
		</c:when>
		<c:otherwise>
			<c:set var="className" value=""></c:set>
		</c:otherwise>
	</c:choose>
	<c:choose>
<c:when test="${not empty orderDetailsList[0]}">
	<div class="col-lg-3 col-md-3 col-sm-3 price-section order-confrm-net-amount order-bold-font dark-font p-5 p-l-10 p-r-10 ${className}">
		<div class="row discount-row">
			<div class="col-md-5">
				<spring:theme code="order.confirmation.net.amount" text="Net amount"/>
			</div>
			<div class="col-md-7" style="text-align: right">
			<c:choose>
			<c:when test="${netAmount.value>0}">
			<span class="order-net-selling" style="font-size: 18px">  ${netAmount.formattedValue}</span>
			</c:when>
			<c:otherwise>
			<span class="order-net-selling" style="font-size: 18px"><spring:theme code="cart.order.total.price"/></span>
			</c:otherwise>
			</c:choose>
				
			</div>
		</div>
		<c:if test="${orderData.commerceType =='RETURNS'}">
			<div class="row discount-row" style="display:none;">
				<c:if test="${netSilverClause.value>0}">
					<div class="col-md-5">
						<spring:theme code="order.confirmation.total.discount" text="Total Discount"/>
					</div>
					<div class="col-md-7" style="text-align: right">
						<span class="order-discount" style="font-size: 18px" data-discount-amount="${netSilverClause.value}">  ${netSilverClause.formattedValue}</span>
					</div>
				</c:if>
			</div>
		</c:if>
		<c:choose>
		<c:when test="${empty rmaDataList[0].rmaNumber}">
		<div class="row discount-row">
		<c:if test="${netSilverClause.value>0}">
			<div class="col-md-5">
			    <spring:theme code="order.confirmation.silver.clause" text="Silver clause"/>
			</div>
			<div class="col-md-7" style="text-align: right">
				<span class="order-discount" style="font-size: 18px" data-discount-amount="${netSilverClause.value}">  ${netSilverClause.formattedValue}</span>
			</div>
		</c:if>
		</div>
		</c:when>
		</c:choose>
		<div class="row discount-row" style="display:none;">
		<c:if test="${totalDiscount.value>0}">
			<div class="col-md-5">
				<spring:theme code="order.confirmation.total.coupon.discount" text="Total Coupon Discount"/>
			</div>
			<div class="col-md-7" style="text-align: right">
				<span class="order-discount" style="font-size: 18px" data-discount-amount="${totalDiscount.value}">  ${totalDiscount.formattedValue}</span>
			</div>
		</c:if>
		</div>
		<div class="row discount-row" style="display:none;">
		<c:if test="${yourPriceDiscount.value>0}">
			<div class="col-md-5">
				<spring:theme code="order.confirmation.total.discount" text="Total Discount"/>
			</div>
			<div class="col-md-7" style="text-align: right">
				<span class="order-discount" style="font-size: 18px" data-discount-amount="${yourPriceDiscount.value}">  ${yourPriceDiscount.formattedValue}</span>
			</div>
		</c:if>
		</div>
		<!-- <div class="row discount-row" style="display:none;">
		<c:if test="${couponDiscount.value>0}">
			<div class="col-md-5">
				<spring:theme code="order.confirmation.Coupon.discount" text="Coupon Discount"/>
			</div>
			<div class="col-md-7" style="text-align: right">
				<span class="order-discount" style="font-size: 18px" data-discount-amount="${couponDiscount.value}">  ${couponDiscount.formattedValue}</span>
			</div>
		</c:if>
		</div>  -->
		<div class="row m-0 m-t-10">
			<span class="normal-font tax-text">*<spring:theme code="order.confirmation.charges.info" text="Plus tax, handling and freight charges"/></span>
			</div>
		</div>
	</c:when>
	</c:choose>
	
	<c:choose>
<c:when test="${not empty rmaDataList[0].rmaNumber}">
	<div class="col-lg-3 col-md-3 col-sm-3 price-section order-confrm-net-amount order-bold-font dark-font p-5 p-l-10 p-r-10">
		<div class="row">
			<div class="col-md-5">
				<spring:theme code="order.confirmation.net.amount" text="Net amount"/>
			</div>
			<div class="col-md-7" style="text-align: right">
			<c:choose>
			<c:when test="${netAmount.value>0}">
			<span class="order-net-selling" style="font-size: 18px">  ${netAmount.formattedValue}</span>
			</c:when>
			<c:otherwise>
			<span class="order-net-selling" style="font-size: 18px"><spring:theme code="cart.order.total.price"/></span>
			</c:otherwise>
			</c:choose>
				
			</div>
		</div>
		<c:choose>	
		<c:when test="${netAmount.value>0}">
		<div class="row discount-row" style="display:none;">
			<div class="col-md-5">
				<spring:theme code="order.confirmation.discount" text="Discount"/>
			</div>
			<div class="col-md-7" style="text-align: right">
				<span class="order-discount" style="font-size: 18px" data-discount-amount="${netSilverClause.value}">  ${netSilverClause.formattedValue}</span>
			</div>
		</div>
		</c:when>
		</c:choose>
		<div class="row m-0 m-t-10">
			<span class="normal-font tax-text">*<spring:theme code="order.confirmation.charges.info" text="Plus tax, handling and freight charges"/></span>
			</div>
		</div>
	</c:when>
	</c:choose>
</div>
<c:choose>
<c:when test="${not empty rmaDataList[0].rmaNumber}">
<c:forEach items="${rmaDataList}" var="item" varStatus="loop">
<div class="order-main">
<div class="order-item-header p-l-15 p-t-0 order-bold-font display-flex-center word-wrap-all">
	<div class="col-lg-2 col-md-2 col-sm-2"><spring:theme code="order.confirmation.rma.requested" text="RMA Requested"/>  &nbsp;&nbsp;${loop.index+1}</div>
    <div class="col-lg-3 col-md-3 col-sm-3" style="overflow-y:auto;height: 20px"><spring:theme code="order.confirmation.rma.number" text="RMA number"/> - ${item.rmaNumber}</div>
    <div class="col-lg-2 col-md-2 col-sm-2" style="overflow-y:auto;height: 20px"><spring:theme code="order.confirmation.po.number" text="PO"/> - ${item.poNumber}</div>
    <div class="col-lg-3 col-md-3 col-sm-3" style="overflow-y:auto;height: 20px"><spring:theme code="order.confirmation.customer.po" text="Customer PO number"/> - ${item.custNumber}</div>
    <div class="col-lg-1 col-md-1 col-sm-1">${not empty item.rmaLineData?item.rmaLineData.size() : 0}&nbsp;<spring:theme code="order.confirmation.items.counts" text="items"/></div>
	<div class="col-lg-1 col-md-1 col-sm-1">
		<div class="collapse-expand-arrow p-r-0 pull-right m-r-20">
			<span onclick="toggleOrderEntries(this)" class="panel-expand bhge-mcstore-icons icon-down-arrow-blue panel-arrow pull-right m-t-10" style="cursor:pointer"></span>
			<span style="display: none" onclick="toggleOrderEntries(this)" class="panel-collapse bhge-mcstore-icons icon-up-arrow-blue panel-arrow pull-right m-t-10" style="cursor:pointer"></span>
		</div>
	</div>
</div>
<c:forEach items="${item.rmaLineData}" var="eachItem" varStatus="count">
	<div class="order-item-body p-l-5 p-t-10 p-b-10 ">
		<div class="col-lg-2 col-md-2 col-sm-2 m-0">
			<div class="col-md-2 round-shape m-t-5 normal-font display-flex-center">${count.index+1}</div>
			<div class="col-md-9">
				<span class="order-bold-font dark-font"><spring:theme code="order.confirmation.part.name" text="Part name"/></span>
				<span class="d-block normal-font">${eachItem.partName}</span>
			</div>
		</div>
		<div class="col-lg-2 col-md-2 col-sm-2 p-0">
			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.part.number" text="Part number"/></span>
			<span class="normal-font">${eachItem.partNumber}</span>
		</div>
		<div class="col-lg-2 col-md-2 col-sm-2 p-0">
			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.service.offering" text="Service offering"/></span>
<%-- 			<span class="normal-font">${eachItem.serviceOfferingText}</span> --%>
			<%-- Service Offering Text --%>
            <span class="normal-font">
             <%--     ${
                  fn:trim(eachItem.serviceOfferingText) == 'RETURNFORCREDIT' || fn:trim(eachItem.serviceOfferingText) == 'RETURNFORSCRAP' || fn:trim(eachItem.serviceOfferingText) == 'RETURNFORREPLACE'?
                  (fn:trim(eachItem.serviceOfferingText) == 'RETURNFORCREDIT'? "Return for Credit":
                  (fn:trim(eachItem.serviceOfferingText) == 'RETURNFORSCRAP'? "Return for Scrap":
                  "Product Recalled"
                  )
                  )
                  : eachItem.serviceOfferingText
                } --%>
                <c:choose>
                <c:when test="${fn:trim(eachItem.serviceOfferingText) == 'RETURNFORCREDIT' || fn:trim(eachItem.serviceOfferingText) == 'RETURNFORSCRAP' || fn:trim(eachItem.serviceOfferingText) == 'RETURNFORREPLACE'}">
                    <c:choose>
                    <c:when test="${fn:trim(eachItem.serviceOfferingText) == 'RETURNFORCREDIT'}">
                        <spring:theme code="order.confirmation.return.credit" text="Return for Credit"/>
                    </c:when>
                    <c:otherwise>
                        <c:choose>
                        <c:when test="${fn:trim(eachItem.serviceOfferingText) == 'RETURNFORSCRAP'}">
                            <spring:theme code="order.confirmation.return.scrap" text="Return for Scrap"/>
                        </c:when>
                        <c:otherwise>
                            <spring:theme code="order.confirmation.product.recalled" text="Product Recalled"/>
                        </c:otherwise>
                        </c:choose>
                    </c:otherwise>
                    </c:choose>
                </c:when>
                <c:otherwise>
                    ${eachItem.serviceOfferingText}
                </c:otherwise>
                </c:choose>
            </span>
		</div>
		<div class="col-lg-1 col-md-1 col-sm-1 p-0">
			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.product.quantity" text="Quantity"/></span>
			<span class="normal-font">${eachItem.quantity}</span>
		</div>
		<div class="col-lg-1 col-md-1 col-sm-1 p-0">
			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.unit.list" text="Unit list"/></span>
			<span class="normal-font">
			<%--${
            empty (eachItem.unitList.value) || (eachItem.unitList.value) < 1?  "To be quoted": (eachItem.unitList.formattedValue)
              } --%>
                <c:choose>
                    <c:when test="${empty (eachItem.unitList.value) || (eachItem.unitList.value) < 1}">
                        <spring:theme code="cart.order.total.price" text="To be quoted"/>
                    </c:when>
                    <c:otherwise>
                            ${eachItem.unitList.formattedValue}
                    </c:otherwise>
                </c:choose>
                  </span>
	</span>
		</div>
		<c:choose>
		<c:when test="${(eachItem.silverClause.value > 0 && eachItem.netSelling.value > 0) || eachItem.netSelling.value < 1}">
		<div class="col-lg-1 col-md-1 col-sm-1 p-0 discount-row" style="display:none;">
			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.discount" text="Discount"/></span>
			<span class="normal-font" data-discount-amount="${eachItem.silverClause.value}"> 
			<%-- ${
             empty (eachItem.silverClause.value) || (eachItem.silverClause.value) < 1?  "To be quoted": (eachItem.silverClause.formattedValue)
             } --%>
           <c:choose>
                <c:when test="${empty (eachItem.silverClause.value) || (eachItem.silverClause.value) < 1}">
                    <spring:theme code="cart.order.total.price" text="To be quoted"/>
                </c:when>
                <c:otherwise>
                        ${eachItem.silverClause.formattedValue}
                </c:otherwise>
            </c:choose>
	</span>
		</div>
		</c:when>
		</c:choose>
		<div class="col-lg-1 col-md-1 col-sm-1 p-0">
			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.unit.selling" text="Unit selling"/></span>
			<span class="normal-font">
			<%--	${
            empty (eachItem.unitSelling.value) || (eachItem.unitSelling.value) < 1?  "To be quoted": (eachItem.unitSelling.formattedValue)
               } --%>
                <c:choose>
                    <c:when test="${empty (eachItem.unitSelling.value) || (eachItem.unitSelling.value) < 1}">
                        <spring:theme code="cart.order.total.price" text="To be quoted"/>
                    </c:when>
                    <c:otherwise>
                            ${eachItem.unitSelling.formattedValue}
                    </c:otherwise>
                </c:choose>
			</span>
		</div>
		<div class="col-lg-1 col-md-1 col-sm-1 p-0">
			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.net.selling" text="Net selling"/></span>
			<span class="normal-font" data-order-selling="${eachItem.netSelling}"> 
			<%--	${
            empty (eachItem.netSelling.value) || (eachItem.netSelling.value) < 1?  "To be quoted": (eachItem.netSelling.formattedValue)
             } --%>
           <c:choose>
                <c:when test="${empty (eachItem.netSelling.value) || (eachItem.netSelling.value) < 1}">
                    <spring:theme code="cart.order.total.price" text="To be quoted"/>
                </c:when>
                <c:otherwise>
                        ${eachItem.netSelling.formattedValue}
                </c:otherwise>
            </c:choose>
           </span>
			</span>
		</div>
	</div>
</c:forEach>
</div>
</c:forEach>
</c:when>
<c:otherwise>
<c:forEach items="${orderDetailsList}" var="item" varStatus="loop">
    <div class="order-main">
    <div class="order-item-header p-l-15 p-t-0 order-bold-font display-flex-center">
	<div class="col-lg-5 col-md-5 col-sm-5" style="overflow-y:auto;height: 20px"><spring:theme code="order.confirmation.order.ordernumber" text="Order number"/> &nbsp; &nbsp; ${item.code}</div>
	<!-- <div class="col-lg-3 col-md-3 col-sm-3"></div> -->
		<div class="col-lg-2 col-md-2 col-sm-2">${not empty item.entries?item.entries.size() : 0}&nbsp;<spring:theme code="order.confirmation.items.counts" text="items"/></div>
	<div class="col-lg-1 col-md-1 col-sm-1"></div>
	<div class="col-lg-3 col-md-3 col-sm-3"><spring:theme code="order.confirmation.net.amount" text="Net Amount"/> : ${item.totalPrice.formattedValue}</div>
	<div class="col-lg-1 col-md-1 col-sm-1">
		<div class="collapse-expand-arrow p-r-0 pull-right m-r-20">
			<span onclick="toggleOrderEntries(this)" class="panel-expand bhge-mcstore-icons icon-down-arrow-blue panel-arrow pull-right m-t-10" style="cursor:pointer"></span>
			<span style="display: none" onclick="toggleOrderEntries(this)" class="panel-collapse bhge-mcstore-icons icon-up-arrow-blue panel-arrow pull-right m-t-10" style="cursor:pointer"></span>
		</div>
	</div>
</div>
<c:forEach items="${item.entries}" var="eachItem" varStatus="count">
	<div class="order-item-body p-l-5 p-t-10 p-b-10 ">
		<div class="col-lg-3 col-md-3 col-sm-3 m-0">
			<div class="col-md-3 round-shape m-t-5 display-flex-center normal-font">${count.index+1}</div>
			<div class="col-md-9">
				<span class="order-bold-font dark-font"><spring:theme code="order.confirmation.part.name" text="Part name"/></span>
				<span class="d-block normal-font">${eachItem.partName}</span>
			</div>
		</div>
		<div class="col-lg-2 col-md-2 col-sm-2 p-0">
			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.part.number" text="Part number"/></span>
			<span class="normal-font">${eachItem.partNumber}</span>
		</div>
		<div class="col-lg-1 col-md-1 col-sm-1 p-0 p-r-60">
			<p class="order-bold-font d-block dark-font text-center m-0"><spring:theme code="order.confirmation.product.quantity" text="Quantity"/></p>
			<p class="normal-font text-center">${eachItem.quantity}</p>
		</div>
<!-- 		<div class="col-lg-1 col-md-1 col-sm-1 p-0"> -->
<!-- 			<span class="order-bold-font d-block dark-font">Unit list</span> -->
<%-- 			<span class="normal-font">${currencySymbol} ${currencyIsoCode} ${eachItem.unitSelling}</span> --%>
<!-- 		</div> -->
<!-- 		<div class="col-lg-1 col-md-1 col-sm-1 p-0"> -->
<!-- 			<span class="order-bold-font d-block dark-font">Discount</span> -->
<%-- 			<span class="normal-font">${currencySymbol} ${currencyIsoCode} ${eachItem.silverClause}</span> --%>
<!-- 		</div> -->
     		<div class="col-lg-2 col-md-2 col-sm-2 p-0">
 			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.unit.selling" text="Unit selling"/></span>
            <span class="normal-font"> ${eachItem.listPrice.formattedValue}</span>
     		</div>
     		<div class="col-lg-2 col-md-2 col-sm-2 p-0">
 			<span class="order-bold-font d-block dark-font"><spring:theme code="order.confirmation.net.selling" text="Net selling"/></span>
			<span class="normal-font" data-order-selling="${eachItem.netSelling}">${eachItem.netSellingPrice.formattedValue}</span>
     		</div>
           </div>
           </c:forEach>
           </div>
           </c:forEach>
    </c:otherwise>
    </c:choose>
<div class="well well-quinary well-xs m-t-20">
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
</c:if>
<c:forEach items="${orderDetailsList}" var="orderData" varStatus="count">
	<div class="split-orderID${count.index}" <c:if test="${count.index gt 0}">style="display:none"</c:if>>
		<div class="well well-quinary well-xs">
		    <div class="well-content order-section-title">
		        <spring:theme code="text.account.orderHistory.shippingDetails.title" />
		     	<a class="toggle-order-section pull-right">
		          		<span class="glyphicon glyphicon-chevron-up"></span>			
				</a>
		    </div>
		   <div class="well-content">
		        <div class="row">
		            <div class="col-md-5 order-ship-to">
		                <div class="value-order"><spring:theme code="order.summary.deliveryPoint" text="Delivery Point" /></div>
		                <div class="label-order">
		                	<div class="label-order">${fn:escapeXml(orderData.deliveryPoint)}</div>
		                </div>
		            </div>
		        </div>
		    </div> 
		    <div class="well-content">
		        <div class="row">
		            <div class="col-md-5 order-ship-to">
		                <div class="value-order"><spring:theme code="text.account.order.shipto" /></div>
		                <div class="label-order"><order:addressItem address="${order.deliveryAddress}"/></div>
		            </div>
		        </div>
		    </div>
		<!-- </div> -->
		
		 <%--     <div class="well-content">
		        <div class="row">
		            <div class="col-md-5 order-shipping-method">
		                <div class="label-order"><spring:theme code="text.shippingMethod" /></div>
		                <div class="value-order">${fn:escapeXml(orderData.deliveryOptions)}</div>
		            </div>
		        </div>
		    </div> --%>
		<!-- <div class="well well-quinary well-xs"> -->
			<div class="well-content">
			<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
		        <div class="row">
					<!-- <div class="item-group"> -->
						<div class="col-md-5 order-ship-to">
							<div class="value-order"><spring:theme code="order.summary.incloTerms1" /></div>
							<c:choose>
								<c:when test="${shipToIncotrmName eq null}">
									<div class="label-order">${fn:escapeXml(shipToIncoterm1)}</div>
								</c:when>
								<c:otherwise>
									<div class="label-order">${fn:escapeXml(shipToIncotrmName)}</div>
								</c:otherwise>
							</c:choose>
						</div>
					 </div>
			</sec:authorize>
				 	<%-- <div class="item-group">
						<div class="col-md-5 order-ship-to">
							<div class="value-order"><spring:theme code="order.summary.incloTerms2"/></div>
							<div class="label-order">${fn:escapeXml(shipToIncoterm2)}</div>
						</div>
					</div>  --%>
			</div>
<!-- 		</div> -->
			<div class="well-content">
		        <div class="row">		
					<!-- <div class="item-group"> -->
						<div class="col-md-5 order-ship-to">
							<div class="value-order"><spring:theme code="order.summary.ship" text="Ship" /></div>
							<c:choose>
								<c:when test="${orderData.isShipCompleteOrder eq false}">
									<div class="label-order">
										<spring:theme code="order.summary.partial" text="Partial" />-
										<spring:theme code="order.summary.confirmPageTop.partialShip" text="Ship Partial Shipment." />
									</div>					
								</c:when>
								<c:otherwise>
									<div class="label-order">
										<spring:theme code="order.summary.complete" text="Complete" />-
										<spring:theme code="order.summary.completeShip" text="Items will ship together." />
									</div>
								</c:otherwise>
							</c:choose>
						</div>
					<!-- </div> -->
					<div class="item-group">
						<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
						<div class="col-md-5 order-ship-to">
							<div class="value-order"><spring:theme code="order.summary.reqdeliverydate" text="Requested Ship Date" /></div>
							<%-- <c:choose>
								<c:when test="${orderData.isShipCompleteOrder eq true}" >
									<div class="label-order">${orderData.requestedHdrDeliveryDate}</div>
								</c:when>
								<c:otherwise> --%>
									<%-- <c:if test="${'FILM' ne orderData.cartType}">
										<div class="label-order">${orderData.requestedHdrDeliveryDate}</div>
									</c:if>
									<c:if test="${'FILM' eq orderData.cartType}">
										<div class="label-order">${orderData.requestedHdrDeliveryDateFilm}</div>
									</c:if> --%>
									<c:if test="${orderDetailsList.size() > 1}">								
									<c:forEach items="${orderDetailsList}" var="orderDatas" varStatus="count">
									<c:if test="${'FILM' ne orderDatas.cartType}">
									<c:if test="${orderDatas.commerceType !='RETURNS'}">
									<c:if test="${orderDatas.requestedHdrDeliveryDate != null}">
										<div class="label-order"> <b>Order ${orderDatas.code}</b> : ${orderDatas.requestedHdrDeliveryDate}</div>
									</c:if>
									</c:if>
									<c:if test="${orderDatas.commerceType =='RETURNS'}">
									<c:if test="${count.count eq 1}">
                                        <div class="label-order"> ${orderDatas.requestedHdrDeliveryDate} </div>
                                    </c:if>
									</c:if>
									</c:if>
									<c:if test="${'FILM' eq orderDatas.cartType}">
									<c:if test="${orderDatas.requestedHdrDeliveryDateFilm != null}">
										<div class="label-order"> <b>Order ${orderDatas.code}</b> : ${orderDatas.requestedHdrDeliveryDateFilm}</div>
									</c:if>
									</c:if>
									</c:forEach>
									</c:if>
									<c:if test="${orderDetailsList.size() eq 1}">
									<c:if test="${'FILM' ne orderData.cartType}">
										<div class="label-order">${orderData.requestedHdrDeliveryDate}</div>
									</c:if>
									<c:if test="${'FILM' eq orderData.cartType}">
										<div class="label-order">${orderData.requestedHdrDeliveryDateFilm}</div>
									</c:if> 
									</c:if>
								<%-- </c:otherwise>
							</c:choose> --%>
						</div>
						</sec:authorize>
					</div>
				</div>
			</div>
			<div class="well-content">
				<div class="row">
					<div class="item-group">
						<c:if test="${not empty orderData.deliveryOptions}">
						<%-- <div class="item-group" > --%>
							<div class="col-md-5 order-ship-to">
								<div class="value-order"><spring:theme code="text.shippingMethod" text="Shipping Method" /></div>
								<c:choose>
									<c:when test="${orderData.deliveryOptions == 'Prepay & Add'}">
										<div class="label-order"><spring:theme code="shipping.options.prepay" text="Prepay & Add" /></div>
									</c:when>
									<c:otherwise>
										<div class="label-order"><spring:theme code="shipping.options.Collect" text="Collect" /></div>
									</c:otherwise>
								</c:choose>
							</div>
						<%-- </div> --%>
						</c:if>
						<c:if test="${not empty orderData.deliveryCarrier && 'FILM' ne orderData.cartType}"> 
					<%-- <div class="item-group"> --%>

							<div class="col-md-5 order-ship-to">
								<div class="value-order"><spring:theme code="order.summary.carrier" /></div>
								<div class="label-order">${fn:escapeXml(orderData.deliveryCarrierName)}</div>
							</div>

					<%-- </div> --%>

						</c:if>
						<c:if test="${not empty orderData.deliveryAccount && orderData.deliveryOptions != 'Prepay & Add'}">
						<%-- <div class="item-group"> --%>

							<div class="col-md-5 order-ship-to">
								<div class="value-order"><spring:theme code="order.summary.deliveryAccount" /></div>
								<div class="label-order">${fn:escapeXml(orderData.deliveryAccount)}</div>
							</div>

						<%-- </div> --%>
						</c:if>
						<%-- <div class="col-md-5 order-ship-to"  style="border:1px solid red;">
							<div class="value-order"><spring:theme code="order.summary.carrier" /></div>
							<div class="label-order">${fn:escapeXml(orderData.deliveryCarrierName)}</div>
						</div> --%>
	

					</div>


				</div>
			</div>
			<div class="well-content">
			<div class="row">
				<!-- <div class="col-sm-4 item-wrapper"> -->
					<!-- <div class="item-group"> -->
						<div class="col-md-5 order-ship-to">
							<div class="value-order"><spring:theme code="order.summary.shipTo.contactName"/></div>
							<div class="label-order">${fn:escapeXml(orderData.shipToContactName)}</div>
						</div>
					<!-- </div> -->
					<!-- <div class="item-group"> -->
						<div class="col-md-5 order-ship-to">
							<div class="value-order"><spring:theme code="order.summary.shipTo.contactPhone" /></div>
							<div class="label-order">${fn:escapeXml(orderData.shipToContactPhone)}</div>
						</div>
					<!-- </div> -->
			<!-- 	</div> -->
			</div>
			</div>
			<div class="well-content">
				<div class="row">
					<!-- <div class="item-group"> -->
						<div class="col-md-5 order-ship-to">
							<div class="value-order"><spring:theme code="order.summary.shippingRemarks" /></div>
							<div class="label-order">${fn:escapeXml(orderData.shippingRemarks)}</div>
						</div>
					<!-- </div> -->
					<div class="item-group">
						<c:if test="${orderData.commerceType =='RETURNS'}">
                        							<div class="col-md-5 order-ship-to">
                        								<c:choose>

                        									<c:when test="${not empty orderData.alternateContactName}">

                        									<div class="value-order"><spring:theme code="cart.left.navigation.alternatecontactname" text="Alternate Contact Name" /></div>
                        									</c:when>
                        								</c:choose>

                        								<div class="label-order">${fn:escapeXml(orderData.alternateContactName)}</div>
                        					</div>
                        							<div class="col-md-5 order-ship-to">
                        								<c:choose>
                        									<c:when test="${not empty orderData.alternateContactNumber}">
                        									<div class="value-order"><spring:theme code="cart.left.navigation.alternatecontactnumber" text="Alternate Contact Number" /></div>
                        									</c:when>
                        								</c:choose>
                        

                        								<div class="label-order">${fn:escapeXml(orderData.alternateContactNumber)}</div>
                        					</div>
                        							<div class="col-md-5 order-ship-to">
                        							<c:choose>
                        								<c:when test="${not empty orderData.alternateContactEmail}">
                        								<div class="value-order"><spring:theme code="cart.left.navigation.alternatecontactemail" text="Alternate Contact Email" /></div>
                        								</c:when>
                        							</c:choose>

                        							<div class="label-order">${fn:escapeXml(orderData.alternateContactEmail)}</div>
                        							</div>
                        							</c:if>
					</div>
				</div>
			</div>
		</div>
	</div>
</c:forEach>
<div class="well well-quinary well-xs">
	<div class="well-content order-section-title">
        <spring:theme code="order.summary.notification.attachment" text="3. Notifications & Attachments"/>
       	<a class="toggle-order-section pull-right">
          		<span class="glyphicon glyphicon-chevron-up"></span>			
		</a>
    </div>
    
	<div class="well-content row">
        <div class="col-md-6 p-0">
            <div class="col-md-5 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.orderAck" text="Order Acknowledgement" /></div>
				<div class="label-order">${orderData.orderConfirmation}</div>
			</div>
		</div>
		<div class="col-md-6">
            <div class="col-md-5 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.shipNotification" text="Ship Notification" /></div>
				<div class="label-order">${orderData.shipNotificationEmail}</div>
			</div>
		</div>
	</div>
	<%--<div class="well-content">
        <div class="row">
            <div class="col-md-5 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.shipNotification" text="Ship Notification" /></div>
				<div class="label-order">${orderData.shipNotificationEmail}</div>
			</div>
		</div>
	</div>--%>
	<div class="well-content row">
        <div class="col-md-6 p-0">
            <div class="col-md-5 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.invoiceEmail" text="Invoice Email" /></div>
				<div class="label-order">${orderData.invoiceEmail}</div>
			</div>
		</div>
		<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
		<div class="col-md-6">
            <div class="col-md-12 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.gereview" text="Do you need GE to review this order?" /></div>
				<div class="label-order">
					<c:choose>
						<c:when test="${orderData.isSpecialDiscountPresent}">
							<spring:theme code="order.confirmation.yes" text="Yes" />
						</c:when>
						<c:otherwise>
							<spring:theme code="order.confirmation.no" text="No" />
						</c:otherwise>
					</c:choose>
				</div>
			</div>
		</div>
		</sec:authorize>
	</div>
	<%--<div class="well-content">
        <div class="row">
            <div class="col-md-5 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.gereview" text="Do you need GE to review this order?" /></div>
				<div class="label-order">
					<c:choose>
						<c:when test="${orderData.isSpecialDiscountPresent}">
							<spring:theme code="order.confirmation.yes" text="Yes" />
						</c:when>
						<c:otherwise>
							<spring:theme code="order.confirmation.no" text="No" />
						</c:otherwise>
					</c:choose>
				</div>
			</div>
		</div>
	</div>--%>
	<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
	<c:if test="${orderData.isSpecialDiscountPresent}">
		<div class="well-content">
	        <div class="row">
	            <div class="col-md-5 order-ship-to">
					<div class="value-order"><spring:theme code="order.summary.gereview.details.reason"	text="Reason" /></div>
					<div class="label-order">${orderData.specialDiscountCode}</div>
				</div>
			</div>
		</div>
	</c:if>
	</sec:authorize>
	<div class="well-content">
        <div class="row">
            <div class="col-md-5 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.additionalAttachment" text="Additional Attachment" /></div>
				<div class="label-order">
					<c:choose>
						<c:when test="${not empty orderData.attachmentName}">
							<p>${orderData.attachmentName}</p>
						</c:when>
						<c:otherwise>
							<spring:theme code="order.additional.attachment"
								text="No attachment found." />
						</c:otherwise>
					</c:choose>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="well well-quinary well-xs">
	<div class="well-content order-section-title">
        <spring:theme code="order.summary.compliance.header" text="4. Compliance"/>
         <a class="toggle-order-section pull-right">
          		<span class="glyphicon glyphicon-chevron-up"></span>			
		</a>
    </div>
	<div class="well-content">
        <div class="row">
            <div class="col-md-5 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.governmentOppurtunity" text="Is this a Government or Military opportunity, or does it involve nuclear, chemical, or biological weapons?" /></div>
				<div class="label-order">
					<c:choose>
						<c:when test="${orderData.isGovernment}">
							<spring:theme code="order.confirmation.yes" text="yes" />
						</c:when>
						<c:otherwise>
							<spring:theme code="order.confirmation.no" text="No" />
						</c:otherwise>
					</c:choose>
				</div>
			</div>
		</div>
	</div>
	<div class="well-content">
        <div class="row">
            <div class="col-md-5 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.nuclearOppurtunity" text="Is this a Nuclear Opportunity?" /></div>
				<div class="label-order">
					<c:choose>
						<c:when test="${orderData.isNuclearOppurtunity}">
							<spring:theme code="order.confirmation.yes" text="yes" />
						</c:when>
						<c:otherwise>
							<spring:theme code="order.confirmation.no" text="No" />
						</c:otherwise>
					</c:choose>
				</div>
			</div>
		</div>
	</div>
	<div class="well-content">
        <div class="row">
            <div class="col-md-5 order-ship-to">
				<div class="value-order"><spring:theme code="order.summary.exportAddressquestion" text="Will any materials in this order be exported from the requested shipping address?" /></div>
				<div class="label-order">
					<c:choose>
						<c:when test="${orderData.isExport}">
							<spring:theme code="order.confirmation.yes" text="yes" />
						</c:when>
						<c:otherwise>
							<spring:theme code="order.confirmation.no" text="No" />
						</c:otherwise>
					</c:choose>
				</div>
			</div>
		</div>
	</div>
	<c:if test="${not empty orderData.exportAddress}">
		<div class="well-content">
	        <div class="row">
	            <div class="col-md-5 order-ship-to">
					<div class="value-order"><spring:theme code="order.summary.exportAddress" text="Export Address" /></div>
					<div class="label-order">
						${orderData.exportAddress}
					</div>
				</div>
			</div>
		</div>
	</c:if>

        <div class="well-content">
            <div class="row">
                <div class="col-md-5 order-ship-to">
                    <div class="value-order"><spring:theme code="order.summary.isbuyer" text="Is the end user a government agency or buying for a government?" /></div>
                    <div class="label-order">
                    <c:choose>
                            <c:when test="${orderData.isBuyer}">
                                <spring:theme code="order.confirmation.yes" text="yes" />
                            </c:when>
                            <c:otherwise>
                                <spring:theme code="order.confirmation.no" text="No" />
                            </c:otherwise>
                    </c:choose>
                    </div>
                </div>
            </div>
        </div>

    <c:if test="${not empty orderData.enduserAddress}">
    <div class="well-content">
        <div class="row">
            <div class="col-md-5 order-enduser-address">
                <div class="value-order"><spring:theme code="order.summary.endsueraddress" text="End user address" /></div>
                <div class="label-order">
                    <address class="endUserAddress" id="endUserAddress">
                        <c:choose>
                            <c:when test="${orderData.enduserAddress ne null}">
                                <c:if test="${not empty orderData.enduserAddress.companyName}">
                                    <span class="text-bold dark-black"> ${orderData.enduserAddress.companyName} </span></br>
                                </c:if>
                                ${orderData.enduserAddress.line1}<br>
                                <c:if test="${not empty orderData.enduserAddress.line2}">
                                    ${orderData.enduserAddress.line2}<br>
                                </c:if>
                                <c:if test="${not empty orderData.enduserAddress.town}">
                                    ${orderData.enduserAddress.town}<br>
                                </c:if>
                                <c:if test="${not empty orderData.enduserAddress.region}">
                                    ${orderData.enduserAddress.region.name}<br>
                                </c:if>
                                <c:if test="${not empty defaultShiptToAddress.country}">
                                    ${orderData.enduserAddress.country.name},&nbsp;
                                </c:if>
                                ${orderData.enduserAddress.postalCode}
                                <input type="hidden" name="sapCustomerID" id="sapCustomerID"
                                        value="${orderData.enduserAddress.sapCustomerID}" />
                            </c:when>
                            <c:otherwise>
                                ${orderData.enduserAddress.formattedAddress}
                            </c:otherwise>
                        </c:choose>

                    </address>
                </div>
            </div>
        </div>
    </div>
    </c:if>
</div>
			
<%-- <ul class="item__list">
    <li class="hidden-xs hidden-sm">
        <ul class="item__list--header">
            <li class="item__toggle"></li>
            <li class="item__image"></li>
            <li class="item__info"><spring:theme code="basket.page.item"/></li>
            <li class="item__price"><spring:theme code="basket.page.price"/></li>
            <li class="item__quantity"><spring:theme code="basket.page.qty"/></li>
            <li class="item__total--column"><spring:theme code="basket.page.total"/></li>
        </ul>
    </li>
    <c:forEach items="${orderDetailsList}" var="orderData" varStatus="count">
	    <div class="account-orderdetail account-consignment split-orderID${count.index}" <c:if test="${count.index gt 0}">style="display:none"</c:if>>
			<c:forEach items="${orderData.entries}" var="entry" varStatus="loop">
		        <order:orderEntryDetails orderEntry="${entry}" order="${order}" itemIndex="${loop.index}"/>
			</c:forEach>
		</div>
	</c:forEach>
</ul> --%>
