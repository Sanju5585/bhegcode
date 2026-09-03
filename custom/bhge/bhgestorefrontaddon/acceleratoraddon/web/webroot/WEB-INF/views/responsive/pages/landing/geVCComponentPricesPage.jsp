<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- <%@ taglib prefix="template" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/template" %> --%>
<%-- <%@ taglib prefix="cart" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/cart" %> --%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="theme" tagdir="/WEB-INF/tags/shared/theme" %>
<%@ taglib prefix="format" tagdir="/WEB-INF/tags/shared/format" %>
<%-- <%@ taglib prefix="common" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/common" %> --%>
<%@ taglib prefix="breadcrumb" tagdir="/WEB-INF/tags/desktop/nav/breadcrumb" %>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%-- <%@ taglib prefix="user" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/user" %>
 --%>

<c:choose>
	<c:when test="${not empty cartData && not empty cartData.entries && fn:length(cartData.entries) > 0}">
	<!-- <h1>1</h1> -->
	<div class="container-fluid">
		<c:forEach items="${cartData.entries}" var="entry">
			<c:if test="${not empty entry && entry.entryNumber == entryNumber}">
			<%-- <h1>${entry.entryNumber}</h1> --%>
				<c:if test="${not empty entry.componentPriceList && fn:length(entry.componentPriceList) > 0}">
				<%-- <h1>${fn:length(entry.componentPriceList)}</h1> --%>
				<div class="row-fluid col-md-12 col-xs-12 col-sm-12" id="vcOptionsPriceTable"style="background: linear-gradient(to right, #005eb8, #00b5e2);background: linear-gradient(to right, #005eb8, #00b5e2);line-height: 2em; color: white;">
					<!--<table class="table vc-optionsprice-table" id="vcOptionsPriceTable">-->
						<!--<thead>-->
							<!--<tr>-->
							<!--<th style="width:10%"><spring:theme code="vc.pricebreakup.table.component.sno" text="SNo" /></th>
								<th style="width:30%"><spring:theme code="vc.pricebreakup.table.component.name" text="Component Name" /></th>
								<th style="width:30%"><spring:theme code="vc.pricebreakup.table.component.description" text="Component Description" /></th>
								<th style="width:30%"><spring:theme code="vc.pricebreakup.table.component.price" text="Price" /></th>-->
							<!--</tr>-->
						<!--</thead>-->
						<!-- <div class="row-fluid col-md-12 col-xs-12 col-sm-12 " style="background: linear-gradient(to right, #005eb8, #00b5e2);background: linear-gradient(to right, #005eb8, #00b5e2);line-height: 2em; color: white;"> -->
									<div class="col-md-1 col-xs-1 col-sm-1 p-0 text-center"><spring:theme code="vc.pricebreakup.table.component.sno" text="SNo" /></div>
									<div class="col-md-3 col-xs-3 col-sm-3 text-center"><spring:theme code="vc.pricebreakup.table.component.name" text="Component Name" /></div>
									<div class="col-md-4 col-xs-4 col-sm-4 text-center"><spring:theme code="vc.pricebreakup.table.component.description" text="Component Description" /></div>
									<div class="col-md-4 col-xs-4 col-sm-4 text-center"><spring:theme code="vc.pricebreakup.table.component.price" text="Price" /></div>
								<!-- </div> -->
					</div>
						<!--<tbody>-->
							<c:forEach items="${entry.componentPriceList}" var="componentItem" varStatus="loop">
								<!--<tr>-->
								<div class="row-fluid col-md-12 col-xs-12 col-sm-12 options-breakup-table-border-row" style="word-wrap: break-word; display: flex;" data-line="${loop.count}">
									<!--<td>${loop.count}</td>-->
									<div class="col-md-1 col-xs-1 col-sm-1 text-center">
									${loop.count}
									</div>
									<!--<td>-->
									<div class="col-md-3 col-xs-3 col-sm-3 text-center options-breakup-table-col-border-left">
										<label>
											<span>&nbsp;${componentItem.name}</span>
										</label>
									</div>
									<!--</td>-->
									<!--<td>-->
									<div class="col-md-4 col-xs-4 col-sm-4 text-center options-breakup-table-col-border-left options-breakup-table-col-border-right">
										<label>
											<span>&nbsp;${componentItem.description}</span>
										</label>
										</div>
									<!--</td>-->
									<!--<td>-->
									<div class="col-md-4 col-xs-4 col-sm-4 text-center">
										<label >
											<span>&nbsp;
												<format:price priceData="${componentItem.componentPrice}" displayFreeForZero="false" />
											</span>
										</label>
										</div>
									<!--</td>-->
									</div>
								<!--</tr>-->
							</c:forEach>
						<!--</tbody>-->
					<!--</table>-->
				</c:if>
			</c:if>
		</c:forEach>
		</div>
	</c:when>
	<c:otherwise>
		<spring:theme code="cart.entry.vc.componentprices.notavailable" text="Options1 Price Breakup Not Available" />
	</c:otherwise>
</c:choose>