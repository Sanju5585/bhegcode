<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags"%>
<%@ taglib prefix="cart" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/cart"%>
<%@ taglib prefix="user" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/user"%>
<%@ taglib prefix="common" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/common"%>
<%@ taglib prefix="overview" tagdir="/WEB-INF/tags/addons/gesapconfigaddon/desktop/overview"%>
<%@ taglib prefix="nav" tagdir="/WEB-INF/tags/desktop/nav" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<style>
#saved-cart-name {
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    #cart-saved-date {
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
</style>
<spring:htmlEscape defaultHtmlEscape="true" />
<fmt:setLocale value="${defaultCurrencyFormat}" scope="session"/>
<spring:url value="/my-account/saved-carts/" var="savedCartsLink" htmlEscape="false" />
<c:set var="searchUrl" value="/my-account/saved-carts?sort=${ycommerce:encodeUrl(searchPageData.pagination.sort)}" />
<input type="hidden" id="pageSize" name="pageSize" value="5" />

<section class="module">
<div class="row dashboard-section--title">
				<span class="m-l-10"><spring:theme code="page.dashboard.saved.carts" text="Saved Carts"/></span>
		<a href="/savedcarts" class="pull-right m-t-5 m-r-15" style="font-size:14px;font-weight: bold;">
			<spring:theme code="text.account.savedcart.view.all.text" text="View all"/> &nbsp;
			<i class="glyphicon glyphicon-chevron-right"></i>
		</a>
		<i class="glyphicon glyphicon-info-sign pull-right m-t-7" data-toggle="tooltip" data-placement="left" title='<spring:theme code="saved.carts.RDDTxtMsg" text="See your different shopping carts" />'>
		</i>
			</div>
	<div class="module-body">
	<c:if test="${empty searchPageData.results}">
	<div class="col-sm-12 pad-0  mar-0">
				<div class="form-group text-center  mar-0">
			<spring:theme code="text.account.savedCarts.noSavedCarts" />&nbsp;&nbsp;
			<spring:url value="/cart" var="cartPageUrl" htmlEscape="false" />
			<a href="${cartPageUrl}"><spring:theme code="multi.carts.goto.cart" text="Go to cart"/></a>
		</div>
	</div>
	</c:if>

	<!-- no. of carts showing -->
	<c:if test="${not empty searchPageData.results}">
	<c:choose>
	<c:when test="${deleted eq 'deleted'}">
     <div class="col-lg-12 color-grey pad-0 pagination-bar-results">
      ${(fn:escapeXml(searchPageData.pagination.currentPage) * 5) + 1}
     -
     <c:choose>
     <c:when  test="${fn:escapeXml(searchPageData.pagination.totalNumberOfResults) > 5}">
     	${(fn:escapeXml(searchPageData.pagination.currentPage) * 5) + fn:escapeXml(searchPageData.pagination.pageSize)}
     </c:when>
     <c:otherwise>
     	${fn:escapeXml(searchPageData.pagination.totalNumberOfResults - 1)}
     </c:otherwise>
     </c:choose>
     of
     ${fn:escapeXml(searchPageData.pagination.totalNumberOfResults - 1)}&nbsp;
      <c:choose>
		<c:when test="${fn:escapeXml(searchPageData.pagination.totalNumberOfResults) eq 1}">
			<spring:theme code="multi.carts.saved.cart" text="Saved cart"/>
		</c:when>
		<c:otherwise>
			<spring:theme code="multi.carts.saved.carts" text=" Saved carts"/>
		</c:otherwise>
		</c:choose>
      </div>
      </c:when>
      <c:otherwise>
      	<div class="col-lg-12 color-grey pad-0 pagination-bar-results">
      ${(fn:escapeXml(searchPageData.pagination.currentPage) * 5) + 1}
     -
     <c:choose>
     <c:when  test="${fn:escapeXml(searchPageData.pagination.totalNumberOfResults) > 5}">
     	${(fn:escapeXml(searchPageData.pagination.currentPage) * 5) + fn:escapeXml(searchPageData.pagination.pageSize)}
     </c:when>
     <c:otherwise>
     	${fn:escapeXml(searchPageData.pagination.totalNumberOfResults)}
     </c:otherwise>
     </c:choose>
     of
     ${fn:escapeXml(searchPageData.pagination.totalNumberOfResults)}&nbsp;
      <c:choose>
		<c:when test="${fn:escapeXml(searchPageData.pagination.totalNumberOfResults) eq 1}">
			<spring:theme code="multi.carts.saved.cart" text="Saved cart"/>
		</c:when>
		<c:otherwise>
			<spring:theme code="multi.carts.saved.carts" text=" Saved carts"/>
		</c:otherwise>
		</c:choose>
      </div>
      </c:otherwise>
      </c:choose>

    <div class="clearfix"></div>
    <!-- 	For mobile view -->
		<div class="row-fluid col-md-12 col-xs-12 col-sm-12 visible-md" id="cartDetailTable">
									<div class="row-fluid col-md-12 col-xs-12 col-sm-12 form-group" style="font-size: 0.82em;font-weight: bold;padding-top:25px;border-bottom: solid 2px #b1b3b3 !important;">
										<div class="col-md-3 col-xs-3 col-sm-6 text-center"><spring:theme code="geedge.contactUs.name" text="Name"/></div>
										<div class="col-md-3 col-xs-3 col-sm-6 text-center"><spring:theme code="multi.carts.date.saved" text="Date Saved"/></div>
										<div class="col-md-3 col-xs-3 col-sm-6 text-center"><spring:theme code="text.number.of.items" text="QTY"/></div>
										<div class="col-md-3 col-xs-3 col-sm-6 text-center"><spring:theme code="multi.carts.total" text="Total"/></div>
									</div>
									<c:forEach items="${searchPageData.results}" var="savedCart" varStatus="loop">
										<c:if test="${fn:length(savedCart.entries) > 0}">
											<spring:url value="/my-account/saved-carts/${fn:escapeXml(savedCart.code)}/deleteSavedCart"
												var="deleteSavedCartUrl" htmlEscape="false" />
												<spring:url value="/my-account/saved-carts/${fn:escapeXml(savedCart.code)}/restore"
													var="restoreCartLink" htmlEscape="false" />
												<c:choose>
													<c:when test="${savedCart.importStatus eq 'PROCESSING' }">
														<c:set var="importCartIsProcessing" value="true" />
														<c:set var="cartIdRowMapping"
														value="${cartIdRowMapping}${savedCart.code}:${loop.index}," />
													</c:when>
													<c:otherwise>
														<c:set var="importCartIsProcessing" value="false" />
													</c:otherwise>
												</c:choose>
									<div class="row-fluid col-md-12 col-xs-12 col-sm-12" data-line="1">
									<!-- Name -->
										<div class="col-md-3 col-xs-3 col-sm-6 form-group">
											<c:if test="${fn:length(savedCart.name) <= 20}">
												<ycommerce:testId code="savedCarts_name_link">
													<a href="${savedCartsLink}${ycommerce:encodeUrl(savedCart.code)}"
														class="responsive-table-link js-saved-cart-name savedCartName pull-left ${importCartIsProcessing ? 'not-active' : '' }">
														${fn:escapeXml(savedCart.name)} </a>
												</ycommerce:testId>
											</c:if>
											<c:if test="${fn:length(savedCart.name) > 20}">
												<div id="saved-cart-name" title="${fn:escapeXml(savedCart.name)}">
													<ycommerce:testId code="savedCarts_name_link">
															<a href="${savedCartsLink}${ycommerce:encodeUrl(savedCart.code)}"
																class="responsive-table-link js-saved-cart-name savedCartName pull-left ${importCartIsProcessing ? 'not-active' : '' }">
														${fn:escapeXml(savedCart.name)} </a>
													</ycommerce:testId>
												</div>
											</c:if>
										</div>
										<!-- Date Saved -->
										<div class="col-md-3 col-xs-3 col-sm-6">
												<div class="js-saved-cart-date ${importCartIsProcessing ? 'hidden' : '' }" title="<fmt:formatDate value="${savedCart.saveTime}"
														dateStyle="medium" timeStyle="short" type="both" />">
											<ycommerce:testId code="savedCarts_created_label">
												<fmt:formatDate value="${savedCart.saveTime}"
													dateStyle="medium" timeStyle="short" type="date" />
											</ycommerce:testId>
										</div>
										</div>
										<!-- Quantity -->
										<div class="col-md-2 col-xs-2 col-sm-6">
												<ycommerce:testId
														code="savedCarts_noOfItems_label">
														<span class="js-saved-cart-number-of-items">
												 <c:if
															test="${importCartIsProcessing eq false}">
														${fn:length(savedCart.entries)}
												</c:if>
														</span>
											</ycommerce:testId>
										</div>
										
										<!-- Total -->
										<div class="col-md-3 col-xs-3 col-sm-6" style="padding-left: 0px;">
										<ycommerce:testId code="savedCarts_totalProductPrice_label">
											 <span class="js-saved-cart-total">
													${currencyISO}&nbsp;&nbsp;&nbsp; ${currencyFormattedValue}
														<c:if test="${importCartIsProcessing eq false}">
														<%-- ${fn:escapeXml(savedCart.totalPrice.formattedValue)}--%>
														<fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${fn:escapeXml(savedCart.totalPrice.value)}" />
														</c:if>
													</span>
												</ycommerce:testId>
										</div>
									</div>
									</c:if>
									</c:forEach>
							</div>
							
<!-- 	For desktop view -->

		<div class="row-fluid col-md-12 col-xs-12 col-sm-12 hidden-md" id="cartDetailTable">
									<div class="row-fluid col-md-12 col-xs-12 col-sm-12 form-group" style="font-size: 0.82em;font-weight: bold;padding-top:25px;border-bottom: solid 2px #b1b3b3 !important;">
										<div class="col-md-2 col-xs-2 col-sm-6 text-center"><spring:theme code="geedge.contactUs.name" text="Name"/></div>
										<div class="col-md-2 col-xs-2 col-sm-6 text-center"><spring:theme code="multi.carts.date.saved" text="Date Saved"/></div>
										<div class="col-md-2 col-xs-2 col-sm-6 text-center"><spring:theme code="text.number.of.items" text="QTY"/></div>
										<div class="col-md-2 col-xs-2 col-sm-6 text-center"><spring:theme code="multi.carts.total" text="Total"/></div>
										<div class="col-md-2 col-xs-2 col-sm-6 text-center"><spring:theme code="multi.carts.ID" text="ID"/></div>
										<div class="col-md-2 col-xs-2 col-sm-6 text-center"></div>
										<div class="col-md-2 col-xs-2 col-sm-6 text-center"></div>
									</div>
									<c:forEach items="${searchPageData.results}" var="savedCart" varStatus="loop">
										<c:if test="${fn:length(savedCart.entries) > 0}">
											<spring:url value="/my-account/saved-carts/${fn:escapeXml(savedCart.code)}/deleteSavedCart"
												var="deleteSavedCartUrl" htmlEscape="false" />
												<spring:url value="/my-account/saved-carts/${fn:escapeXml(savedCart.code)}/restore"
													var="restoreCartLink" htmlEscape="false" />
												<c:choose>
													<c:when test="${savedCart.importStatus eq 'PROCESSING' }">
														<c:set var="importCartIsProcessing" value="true" />
														<c:set var="cartIdRowMapping"
														value="${cartIdRowMapping}${savedCart.code}:${loop.index}," />
													</c:when>
													<c:otherwise>
														<c:set var="importCartIsProcessing" value="false" />
													</c:otherwise>
												</c:choose>
									<div class="row-fluid col-md-12 col-xs-12 col-sm-12" data-line="1">
									<!-- Name -->
										<div class="col-md-2 col-xs-2 col-sm-6 form-group">
											<c:if test="${fn:length(savedCart.name) <= 20}">
												<ycommerce:testId code="savedCarts_name_link">
													<a href="${savedCartsLink}${ycommerce:encodeUrl(savedCart.code)}"
														class="responsive-table-link js-saved-cart-name savedCartName pull-left ${importCartIsProcessing ? 'not-active' : '' }">
														${fn:escapeXml(savedCart.name)} </a>
												</ycommerce:testId>
											</c:if>
											<c:if test="${fn:length(savedCart.name) > 20}">
												<div id="saved-cart-name" title="${fn:escapeXml(savedCart.name)}">
													<ycommerce:testId code="savedCarts_name_link">
															<a href="${savedCartsLink}${ycommerce:encodeUrl(savedCart.code)}"
																class="responsive-table-link js-saved-cart-name savedCartName pull-left ${importCartIsProcessing ? 'not-active' : '' }">
														${fn:escapeXml(savedCart.name)} </a>
													</ycommerce:testId>
												</div>
											</c:if>
										</div>
										<!-- Date Saved -->
										<div class="col-md-2 col-xs-2 col-sm-6">
												<div class="js-saved-cart-date ${importCartIsProcessing ? 'hidden' : '' }" title="<fmt:formatDate value="${savedCart.saveTime}"
														dateStyle="medium" timeStyle="short" type="both" />">
											<ycommerce:testId code="savedCarts_created_label">
												<fmt:formatDate value="${savedCart.saveTime}"
													dateStyle="medium" timeStyle="short" type="date" />
											</ycommerce:testId>
										</div>
										</div>
										<!-- Quantity -->
										<div class="col-md-2 col-xs-2 col-sm-6">
												<ycommerce:testId
														code="savedCarts_noOfItems_label">
														<span class="js-saved-cart-number-of-items">
												 <c:if
															test="${importCartIsProcessing eq false}">
														${fn:length(savedCart.entries)}
												</c:if>
														</span>
											</ycommerce:testId>
										</div>
										
										<!-- Total -->
										<div class="col-md-2 col-xs-2 col-sm-6">
										<ycommerce:testId code="savedCarts_totalProductPrice_label">
											 <span class="js-saved-cart-total">
													${currencyISO}&nbsp;&nbsp;&nbsp; ${currencyFormattedValue}
														<c:if test="${importCartIsProcessing eq false}">
														<%-- ${fn:escapeXml(savedCart.totalPrice.formattedValue)}--%>
														<fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${fn:escapeXml(savedCart.totalPrice.value)}" />
														</c:if>
													</span>
												</ycommerce:testId>
										</div>
										<!-- ID -->
										<div class="col-md-2 col-xs-2 col-sm-6">
										<ycommerce:testId code="savedCarts_id_label">
											${fn:escapeXml(savedCart.code)}
										</ycommerce:testId>
										</div>
										<!-- Restore -->
										<div class="col-md-2 col-xs-2 col-sm-6">
										<a href="#" data-toggle="modal" data-target="#${fn:escapeXml(savedCart.code)}" class="js-restore-saved-cart font-bold">
												<span class="hidden-xs"><spring:theme code="multi.carts.restore" text="Restore"/></span>
												<i class="icon-reply visible-xs"></i>
										</a>
										<div class="modal fade"
							id="${fn:escapeXml(savedCart.code)}" tabindex="-1"
							role="dialog" aria-labelledby="myLargeModalLabel"
							aria-hidden="false">
							<div class="modal-dialog ">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal"
											aria-label="Close">
													<%--<img alt="" class="closeIcon" src="${commonResourcePath}/images/Icon_Close.png">--%>
										</button>
										<h3><spring:theme code="multi.carts.restore.savedcart" text="Restore Saved Cart"/></h3>
									</div>
									<div class="modal-body pad-20">
										<form:form name="restoreSaveCartForm"
											id="restoreSaveCartForm" class="mar-0"
											action="${restoreCartLink}"
											method="POST"
											autocomplete="off">
											<!-- <input type="hidden" name="savedCartId" id="savedCartId" value=""></input> -->
											<p><spring:theme code="multi.carts.activecart.message" text="The following saved cart will restore as active
												cart" /></p>
											<div class="clearfix mar-top-10"></div>
											<div class="clearfix mar-top-10"></div>
											<div class="modal-details row">
												<span class="col-xs-6"><spring:theme code="multi.carts.cartName" text="Cart Name:" /></span>
												<span class="col-xs-6"><b>${fn:escapeXml(savedCart.name)}</b></span>
												<div class="clearfix mar-top-10"></div>
												<div class="clearfix mar-top-10"></div>
												<span class="col-xs-6"><spring:theme code="multi.carts.ID" text="ID"/>:</span>
												<span class="col-xs-6"><b>${fn:escapeXml(savedCart.code)}</b></span>
												<div class="clearfix mar-top-10"></div>
												<div class="clearfix mar-top-10"></div>
												<span class="col-xs-6"><spring:theme code="text.number.of.items" text="Number of products:"/></span>
												<span class="col-xs-6"><b>${fn:length(savedCart.entries)}</b></span>
											</div>
											<div class="mar-top-20 clearfix"></div>
											<!-- <label for="keepRestoredCart"> <input
												type="checkbox" id="keepRestoredCart"
												name="keepRestoredCart" class="js-keep-restored-cart"
												checked="checked"> Keep a
												copy of this cart on saved list
											</label> -->
											<div class="mar-top-20 clearfix"></div>
											<div class="mar-top-20 clearfix"></div>
											<c:if test="${hasSessionCart eq true}">
											<p><spring:theme code="multi.carts.currentcart.message" text="The current items in the cart will be saved as:"/></p>
											<div class="mar-top-20 clearfix"></div>
											<div class="restore-current-cart-form js-restore-current-cart-form">
												<div class="form-group">
													<input type="text" id="cartName"
														name="cartName"
														class="text form-control js-current-cart-name"
														value="${autoGeneratedName}" maxlength="100" />
													<div class="js-restore-error-container help-block"></div>
												</div>
												<label for="preventSaveActiveCart">
												<input type="checkbox" id="preventSaveActiveCart"
													name="preventSaveActiveCart"
													class="js-prevent-save-active-cart">
													<spring:theme code="multi.carts.noSave.late" text="I do not want to save items for later"/>
												</label>
											</div>
											</c:if>
											<div class="mar-top-20 clearfix"></div>
											<div class="modal-actions">
												<div class="row">
													<div class="col-xs-12 col-sm-6 col-sm-push-6">
														<button type="submit"
															class="pad-10 font-size-130 btn btn-primary btn-block" >
															<spring:theme code="multi.carts.restore" text="Restore"/>
														</button>
													</div>
													<div class="col-xs-12 col-sm-6 col-sm-pull-6">
														<button type="button"
															class="pad-10 font-size-130 btn btn-default btn-block"
															data-dismiss="modal"><spring:theme code="geedge.expressOrder.cancel" text="Cancel"/></button>
													</div>
												</div>
											</div>
											<div></div>
										</form:form>
									</div>
								</div>

							</div>
						</div>
																<!-- Delete -->
										<a href="#" data-toggle="modal"
						data-target="#del${fn:escapeXml(savedCart.code)}"
						class="js-restore-saved-cart "> 
						<span class="glyphicon glyphicon-remove" style="font-size: 20px;left: 25px;"></span>
					</a> <!-- delete cart modal -->
						<div class="modal fade"
							id="del${fn:escapeXml(savedCart.code)}" tabindex="-1"
							role="dialog" aria-labelledby="myLargeModalLabel"
							aria-hidden="false">
							<div class="modal-dialog  ">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal"
											aria-label="Close">
											<img alt="" class="closeIcon" src="${commonResourcePath}/images/Icon_Close.png">
										</button>
										<h3><spring:theme code="multi.carts.delete.savedcart" text="Delete Saved Cart"/></h3>

									</div>
									<div class="modal-body pad-20">
										<p><spring:theme code="multi.carts.delete.message" text="The following cart will be deleted"/></p>
										<div class="clearfix mar-top-10"></div>
										<div class="clearfix mar-top-10"></div>
										<div class="modal-details row">
											<span class="col-xs-6"><spring:theme code="multi.carts.cartName" text="Cart Name:"/></span> <span
												class="col-xs-6"><b>${fn:escapeXml(savedCart.name)}</b></span>
											<div class="clearfix mar-top-10"></div>
											<div class="clearfix mar-top-10"></div>
											<span class="col-xs-6"><spring:theme code="multi.carts.ID" text="ID"/>:</span> <span class="col-xs-6"><b>${fn:escapeXml(savedCart.code)}</b></span>
											<div class="clearfix mar-top-10"></div>
											<div class="clearfix mar-top-10"></div>
											<span class="col-xs-6"><spring:theme code="multi.carts.number.products" text="Number of products:"/></span> <span
												class="col-xs-6"><b>${fn:length(savedCart.entries)}</b></span>
										</div>
										<div class="clearfix mar-top-10"></div>
										<div class="modal-actions mar-top-20">
<%-- 											<form:form name="deleteSaveCartForm" --%>
<%-- 												action="${deleteSavedCartUrl}" method="post"> --%>
												<input type="hidden" id="savedCartName" name="savedCartName" value="${fn:escapeXml(savedCart.name)}" />
												<div class="row">
													<div class="col-xs-12 col-sm-6 col-sm-push-6  ">
													<a href="${deleteSavedCartUrl}">
														<button
															class="pad-10 font-size-130 btn btn-primary btn-block delSavedCartItemBTn">
															<spring:theme code="cart.items.tag.delete" text="Delete"/></button>
													</a>
													</div>
													<div class="col-xs-12 col-sm-6 col-sm-pull-6">
														<button type="button"
															class="pad-10 font-size-130 btn btn-default btn-block"
															data-dismiss="modal"><spring:theme code="geedge.expressOrder.cancel" text="Cancel"/></button>
													</div>
												</div>
<%-- 											</form:form> --%>
										</div>
									</div>
								</div>
							</div>
										</div>
										</div>
									</div>
									</c:if>
									</c:forEach>
							</div>

			<%--<h3><a href="/my-account/saved-carts/" class="pull-right" style="font-size:16px;"><spring:theme code="text.account.savedcart.view.all.text" text="View all"/></a></h3>--%>
	 </c:if>
</div>
</section>
<script>
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
</script> 