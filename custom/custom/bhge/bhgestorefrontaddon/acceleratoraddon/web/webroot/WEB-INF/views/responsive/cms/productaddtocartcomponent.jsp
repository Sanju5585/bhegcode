<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="action" tagdir="/WEB-INF/tags/responsive/action" %>
<%@ taglib prefix="product" tagdir="/WEB-INF/tags/responsive/product" %>
<%@ taglib prefix="b2b-product" tagdir="/WEB-INF/tags/addons/bhgestorefrontaddon/responsive/product" %>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags" %>
<%@ taglib prefix="format" tagdir="/WEB-INF/tags/shared/format"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags" %>
<%@ taglib prefix="cart" tagdir="/WEB-INF/tags/responsive/cart" %>

<style>
.lead-time-details{
    display:none !important;
}
.product-details-panel .shipping-details .ship-date-details{
    margin-left:0px !important;
}
.product-details-panel .pdp-actions .switch-sales-area-btn {
    width: auto;
    text-transform: capitalize;
}
</style>
<c:url value="/cart/add" var="addToCartUrl" />
<spring:url value="${product.url}/configuratorPage/CPQCONFIGURATOR" var="configureUrl" htmlEscape="false"></spring:url>
<c:set var="qtyMinus" value="1" />
<c:set var="createRMALink" value="/rma-form/${product.code}"/>
<div class="product-info">
	
	<div class="part-detail">
		<label>
			<spring:theme code="pdp.page.part.number" text="Part Number"/>
		</label>
		<span class="item__code--bhge">
				${fn:escapeXml(product.code)}
		</span>
	</div>
	<div class="part-detail m-t-20">
		<label>
			<spring:theme code="pdp.page.part.name" text="Part Name"/>
		</label>
		<span class="item__name--bhge">
				${fn:escapeXml(product.name)}
		</span>
	</div>

	<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
	   <c:choose>
	      <c:when test="${product.stock.stockLevelStatus.code eq 'inStock' and empty product.stock.stockLevel}">
	         <c:set var="maxQty" value="FORCE_IN_STOCK"/>
	      </c:when>
	      <c:otherwise>
	         <c:set var="maxQty" value="${product.stock.stockLevel}"/>
	      </c:otherwise>
	   </c:choose>
	   
	   <c:choose>
	      <c:when test="${not empty updatedQuanity}">
	         <c:set var="updatedQuanity">
	            ${updatedQuanity}
	         </c:set>
	      </c:when>
	      <c:otherwise>
	         <c:set var="updatedQuanity">
	            1
	         </c:set>
	      </c:otherwise>
	   </c:choose>
	   
	   <c:choose>
	      <c:when test="${not empty cartData.connectivityerror}">
	         <div class="bhge-pdp-error-box display-flex-justify-left m-t-40">
	   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
	   			<div class="bhge-inventory-err-msg text-left">
	            	<spring:theme code="jco.connectivity.error.pdp1" text="Not able to fetch the price and availability due to connectivity issue."/>
	         	</div>
	         	<div class="bhge-inventory-err-msg text-left">
	            	<spring:theme code="jco.connectivity.error.home2" text="Please try again later!"/>
	         	</div>
	   		</div>
	      </c:when>
	      
	      <c:when test="${product.hybrisStatus eq 'CATALOG'}">
	         <div class="bhge-pdp-error-box display-flex-justify-left m-t-40">
	   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
	   			<div class="bhge-inventory-err-msg text-left">
	            	<spring:theme code="search.results.catalog.only.message" text="This product is not available for purchase at this time.If you would like to purchase this product, please inform BHGE via 'Contact Us'."/>
	         	</div>
	   		</div>
	   
	   		<div class="pdp-actions obsolete-cases">
	   			<div class="buy-action pull-left p-r-25">
	   				<button class="btn catalog-only-btn secondary-btn-bhge full-width form-control pull-left disabled m-0">
			            <spring:theme code="search.grid.page.catalog.only" text="Catalogue Only"/>
			        </button>
	   			</div>
	   			
	   			 <div class="returns-action pull-left p-l-22">
					<c:if test="${product.productAccessData.isService}">
						<button type="button" onclick="showLoaderAndRedirect('${createRMALink}')" class="full-width btn-blue full-width returns-btn form-control">
			            	<span class="bhge-mcstore-icons icon-return-button"></span>
			            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
			            </button>
			            	<div class="service-offerings-text">
			             		<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
				          	  	</c:if>
						        <c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
						        	<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
						        </c:if>
				          	</div>
				          </c:if>
					<c:if test="${!product.productAccessData.isService}">
						<c:choose>
							<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
								<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
									<span class="bhge-mcstore-icons icon-buy"></span>
						           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
						        </button>
						        <div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
								</div>
							</c:when>
							<c:when test="${product.productAccessData.isobsolete}">
								<div class="product-action-links pdp-action-links">
									<a href="/contactus">
						           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
						        	</a>
								</div>
								<div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.return.obsolete" /></span>
								</div>
							</c:when>
							<c:otherwise>
								<div class="product-action-links pdp-action-links">
									<a href="/contactus">
						           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
						        	</a>
								</div>
								<div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.cannot.return"/></span>
								</div>
							</c:otherwise>
						</c:choose>
					</c:if>
				</div>
	   		</div>
	      </c:when>
	      
	      <c:when test="${product.configurable}">
	         <div class="bhge-pdp-error-box display-flex-justify-left m-t-40">
	   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
	   			<div class="bhge-inventory-err-msg text-left">
	   				<spring:theme code="bhge.pdp.configure.text" text="This product requires configuration. Price and other details will be available in the configuration page"/>
	         	</div>
   			</div>
	   
	   		<form:form method="post" id="configureForm" class="configure_form m-t-40" action="${configureUrl}">
	            <div class="quantity">
	               <span class="quantity-text">
                       <spring:theme code="basket.page.quantity" />
                    </span>
	               <div id="decreaseInvent" class="btn item__quantity--change js-product__quantity--change--decrease--bhge product_decrease p-0" ><span class="bhge-mcstore-icons icon-qty-minus"></span></div>
	               <input id="quantity_0${product.code}" id="qty" name="qty" value="${updatedQuanity}" autocomplete="off" class="item__list--qty js-update-product-quantity-input--bhge"
	                  onkeydown=" return isCheckValidQty(event)"
	                  type="text"
	                  oninput="setCustomValidity('')"
	                  value="1"
	                  size="1"
	                  maxlength="4" placeholder="<spring:theme code="bhge.availbilityWidget.qty" text="Qty "/>" data-min="1" data-max="9999">
	               <div id="increaseInvent" class="btn item__quantity--change js-product__quantity--change--increase--bhge  product_increase p-0" ><span class="bhge-mcstore-icons icon-qty-plus"></span></div>
	               <label for="quantity_0${product.code}" class="items-text">
	                  <b>
	                     <c:choose>
	                        <c:when test="${entry.product.uom eq 'Piece'}">
	                           <spring:theme code="product.detail.unit.of.measure.value" text="Each :"/>
	                        </c:when>
	                        <c:otherwise>
	                           ${entry.product.uom}
	                        </c:otherwise>
	                     </c:choose>
	                  </b>
	               </label>
	            </div>
	            <div class="pdp-actions">	            
	            	<c:if test="${product.productAccessData.isBuy}">
			            <div class="buy-action pull-left p-r-25">     
				            <button id="configureProduct" type="${buttonType}" class="secondary-btn-bhge add-to-cart-btn js-enable-btn configure-product-btn m-t-0" disabled="disabled"
				               name="configure">
				               <i class="fa fa-gear" aria-hidden="true"></i>
				               <spring:theme code="basket.configure.product"/>
				            </button>
				            <c:if test="${isFptProduct eq 'YES'}">
				               <button id="displayBOMPopup" type="button" class="secondary-btn-bhge add-to-cart-btn js-enable-btn display-bom-btn" disabled="disabled"
				                  name="configure">
				                  <spring:theme code="bhge.display.material.bom" text="Material Bom"></spring:theme>
				               </button>
				            </c:if>
			            </div>
		            </c:if>
		            <c:if test="${!product.productAccessData.isBuy}">
		            	<div class="product-action-links pdp-action-links">
							<a href="/contactus">
				           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
				        	</a>
						</div>
		            </c:if>
		            <div class="returns-action pull-left p-l-22">	
						<c:if test="${product.productAccessData.isService}">
							<button type="button" class="btn-blue returns-btn form-control" onclick="ACC.common.createRMA('${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')">
				            	<span class="bhge-mcstore-icons icon-return-button"></span>
				            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
				            </button>						        
				        	<div class="service-offerings-text">
						        <c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
				          	  	</c:if>
				          	  	<c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
					          		<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
					          	</c:if>
			          	  	</div>
						</c:if>
						<c:if test="${!product.productAccessData.isService}">
							<c:choose>
								<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
									<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
										<span class="bhge-mcstore-icons icon-buy"></span>
							           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>
							        </button>
							        <div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
									</div>
								</c:when>
								<c:when test="${product.productAccessData.isobsolete}">
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
									</div>
									<div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.return.obsolete" /></span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.cannot.return"/></span>
									</div>
								</c:otherwise>
							</c:choose>
						</c:if>
					</div>
				</div>
	         </form:form>
	      </c:when>

	      <c:when test="${product.productAccessData.isBuyPresentInOtherSalesArea}">

     		<div class="obsolete-cases bhge-pdp-error-box display-flex-justify-left m-t-40">
	   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
	   			<div class="bhge-inventory-err-msg text-left">
	            	<spring:theme code="bhge.products.buy.other.sales.area"/>
	         	</div>
   			</div>
   			<div class="clearfix"></div>
            <div class="pdp-actions obsolete-cases">
         		<div class="buy-action pull-left p-r-25">
         			<button type="button" class="pull-left secondary-btn-bhge full-width form-control switch-sales-area-btn" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'buy'); ">
         				<span class="bhge-mcstore-icons icon-buy"></span>
			           	<span><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
			        </button>
			        <div class="product-info-upper buy-text">
						<span><spring:theme code="bhge.products.buy.other.sales.area"/></span>
					</div>
         		</div>

				<div class="returns-action pull-left p-l-22">
					<c:if test="${product.productAccessData.isService}">
						<button type="button" onclick="ACC.common.createRMA('${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')" class="btn-blue returns-btn form-control">
			            	<span class="bhge-mcstore-icons icon-return-button"></span>
			            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
			            </button>
			            <div class="service-offerings-text">
		            		<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
			          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
			          	  	</c:if>
			          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
			          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
			          	  	</c:if>
			          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
			          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
			          	  	</c:if>
			          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
			          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
			          	  	</c:if>
					        <c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
					        	<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
					        </c:if>
					   	</div>
					</c:if>
					<c:if test="${!product.productAccessData.isService}">
						<c:choose>
							<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
								<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
									<span class="bhge-mcstore-icons icon-buy"></span>
						           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
                  				</button>
						        <div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
								</div>
							</c:when>
							<c:when test="${product.productAccessData.isobsolete}">
								<div class="product-action-links pdp-action-links">
									<a href="/contactus">
						           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
						        	</a>
								</div>
								<div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.return.obsolete" /></span>
								</div>
							</c:when>
							<c:otherwise>
								<div class="product-action-links pdp-action-links">
									<a href="/contactus">
						           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
						        	</a>
								</div>
								<div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.cannot.return"/></span>
								</div>
							</c:otherwise>
						</c:choose>
					</c:if>
				</div>
            </div>
	      </c:when>

	      <c:when test="${product.productAccessData.isobsolete and product.replacementProductStatus ne '' and product.replacementProductStatus ne Null and (product.productAccessData.isCustomerBuy and (product.productAccessData.customerEcommerceFlag == 'E1' || product.productAccessData.customerEcommerceFlag == 'E2'))}">

	      	<div class="obsolete-cases bhge-pdp-error-box display-flex-justify-left m-t-40">
	   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
	   			<div class="bhge-inventory-err-msg text-left">
	            	<spring:theme code="bhge.products.obsolete.replacement"/>
	         	</div>
   			</div>

   			<div class="clearfix"></div>

            <div class="pdp-actions obsolete-cases">
         		<div class="buy-action pull-left p-r-25">

         			<button type="button" class="pull-left secondary-btn-bhge full-width form-control switch-sales-area-btn">
         				<span><spring:theme code="bhge.products.view.replacement"/></span>
			        </button>

         		</div>

				<div class="returns-action pull-left p-l-22">
					<c:if test="${product.productAccessData.isService}">
						<button type="button" onclick="ACC.common.createRMA('${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')" class="btn-blue returns-btn form-control">
			            	<span class="bhge-mcstore-icons icon-return-button"></span>
			            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
			            </button>	
			            <div class="service-offerings-text">
		            		<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
			          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
			          	  	</c:if>
			          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
			          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
			          	  	</c:if>
			          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
			          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
			          	  	</c:if>
			          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
			          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
			          	  	</c:if>
					        <c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
					        	<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
					        </c:if>
				          </div>
					</c:if>
					<c:if test="${!product.productAccessData.isService}">
						<c:choose>
							<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
								<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
									<span class="bhge-mcstore-icons icon-buy"></span>
						           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
						        </button>
						        <div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
								</div>
							</c:when>
							<c:when test="${product.productAccessData.isobsolete}">
								<div class="product-action-links pdp-action-links">
									<a href="/contactus">
						           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
						        	</a>
								</div>
								<div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.return.obsolete" /></span>
								</div>
							</c:when>
							<c:otherwise>
								<div class="product-action-links pdp-action-links">
									<a href="/contactus">
						           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
						        	</a>
								</div>
								<div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.cannot.return"/></span>
								</div>
							</c:otherwise>
						</c:choose>
					</c:if>
				</div>
            </div>

	      </c:when>

	     <c:when test="${product.productAccessData.isBuy}">
	     	<c:forEach items="${cartData.entries}" var="entry" begin="0" end="0">
		            <div class="addtocart-component">

		            	<div class="price-details m-t-40">
				  	  		<c:choose>
			            		<c:when test="${entry.listPrice.value > 0}">
				                   <div class="bhge-product-details__UOM pull-left list-price-details">
				                      <span class="list-price-text"><spring:theme code="order.summary.listPrice" text=" List Price"/></span>
				                      <span class="list-price-value">${entry.listPrice.currencyIso} ${' '} ${currentCurrency.symbol} <fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${entry.listPrice.value}" /></span>
				                      <span class="list-price-value m-l-10">(<spring:theme code="home.inventory.qty" text="Quantity" />&nbsp;1)</span>
				                   </div>
				                   <c:if test="${not empty entry.silverClausePrice && entry.silverClausePrice.value > 0 && entry.productType == 'ITFILM'}">
				                      <div class="bhge-product-details__UOM pull-left silver-clause-price-details m-r-30">
				                      	<span class="silver-price-text"><spring:theme code="cart.silverClausePrice" text="Silver Clause Price"/></span>
				                      	<span class="silver-price-value">
				                      		${fn:containsIgnoreCase(entry.silverClausePricePercentage, '-') ? "-" : "+"}
				                            ${entry.listPrice.currencyIso} ${' '} ${currentCurrency.symbol}
				                            <format:price priceData="${entry.silverClausePrice}" displayFreeForZero="false" displayOnlyCurrenySymbol="true"/>
				                      	</span>
				                      	<span class="list-price-value m-l-10">(<spring:theme code="home.inventory.qty" text="Quantity" />&nbsp;1)</span>
				                      </div>
				                   </c:if>

				                   <div class="bhge-product-details__UOM pull-left your-price-details">
				                      <span class="your-price-text"><spring:theme code="order.confirmation.disc" text="Your Price"/></span>
				                      	<c:choose>
				                            <c:when test="${!entry.discountPrice.matches('[0-9]*.?[0-9]+$')}">
				                               <span class="list-price-value">${DiscountNotAvailable}</span>
				                            </c:when>
				                            <c:when test="${entry.discountPrice eq '0.00'}">
				                               <span class="list-price-value">${DiscountNotAvailable}</span>
				                            </c:when>
				                            <c:otherwise>
				                               <span class="list-price-value">${entry.listPrice.currencyIso} ${' '} ${currentCurrency.symbol}
				                               	<fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${fn:escapeXml(entry.discountPrice)}" />
				                               </span>
				                               <span class="list-price-value m-l-10">(<spring:theme code="home.inventory.qty" text="Quantity" />&nbsp;1)</span>
				                            </c:otherwise>
				                         </c:choose>
				                   </div>
				                </c:when>
				                <c:otherwise>
									<div class="obsolete-cases bhge-pdp-error-box display-flex-justify-left m-t-40">
							   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
							   			<div class="bhge-inventory-err-msg text-left">
							            	<spring:theme code="bhge.product.price.PDP.noPrice" text="Price and Avalability Not Found. Please try again!"/>
							         	</div>
						   			</div>
				                   <br/>
				                </c:otherwise>
				             </c:choose>
			             </div>
						 <div class="clearfix"></div>

		       		   <div class="shipping-details m-t-40">

			       		  <div class="lead-time-details pull-left">
			                 <sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
			                 	<span class="bhge-icons ico_history_lg"></span>
			                    <span class="shipping-details-header"><spring:theme code="product.detail.lead.time"/></span>
			                    <c:choose>
			                       <c:when test="${product.deliveryTime ne '' and product.deliveryTime ne null}">
			                          <span class="lead-time-value">
			                             <fmt:formatNumber value="${product.deliveryTime}" minFractionDigits="0" maxFractionDigits="0" />
			                             &nbsp;
			                             <spring:theme code="search.resultsgrid.days" text="day(s)"/>
			                          </span>
			                       </c:when>
			                       <c:otherwise>
			                          <span class="lead-time-value">
			                             <spring:theme code="product.lead.time.not.availalble" text="NA"/>
			                          </span>
			                       </c:otherwise>
			                    </c:choose>
			                 </sec:authorize>
			              </div>

			              <div class="bhge-product-details__UOM ship-date-details pull-left">
			              	  <span class="bhge-mcstore-icons icon-ship"></span>
			                  <c:choose>
			                     <c:when test="${(entry.isEngineeringHold eq true)}">
			                        <span class="dateDetail">
			                           <p class="text-danger">
			                           		Not Available
			                           </p>
			                        </span>
			                     </c:when>
			                     <c:otherwise>
			                        <div class="dateDetail m-l-40">
			                           <span class="shipping-details-header"><spring:theme code="product.detail.ship.date"/></span>
			                           <span class="dateDetailschange">
			                              <c:forEach items="${entry.estimatedShipDates}" var="date">
			                                 <c:choose>
			                                    <c:when test="${(date eq 'No estimate available')}">
			                                       <span class="ship-date-value full-width">${date}</span>
			                                       <span class="ship-date-value ship-date-qty full-width">(<spring:theme code="home.inventory.qty" text="Quantity"/>&nbsp;${entry.quantity})</span>
			                                    </c:when>
			                                    <c:otherwise>
			                                       <c:set var="estShipDateVal" value="${fn:split(date, ' ')}" />
			                                       <c:choose>
			                                          <c:when test="${not empty estShipDateVal && fn:length(estShipDateVal) > 1
			                                             && estShipDateVal[1] eq '01-Jan-2100'}">
			                                             <span class="ship-date-value full-width">
			                                                <spring:theme code="cart.estimatedshipdate.notavailable.message1" text="No estimate available"/>
			                                             </span>
			                                             <span class="ship-date-value full-width">(<spring:theme code="home.inventory.qty" text="Quantity"/>&nbsp;${estShipDateVal[0]})</span>
			                                          </c:when>
			                                          <c:when test="${not empty estShipDateVal && fn:length(estShipDateVal) > 1}">
			                                             <span class="ship-date-value full-width">
			                                                ${estShipDateVal[1]}
			                                             </span>
			                                             <span class="ship-date-value full-width">(<spring:theme code="home.inventory.qty" text="Quantity"/>&nbsp;${estShipDateVal[0]})</span>
			                                          </c:when>
			                                       </c:choose>
			                                    </c:otherwise>
			                                 </c:choose>
			                              </c:forEach>
			                           </span>
			                        </div>
			                     </c:otherwise>
			                  </c:choose>
			               </div>

			               <c:if test="${not empty entry.availabilityDetails && fn:length(entry.availabilityDetails) > 0}">
			                  <c:forEach items="${entry.availabilityDetails}" var="availabilityDetail" varStatus="i">
			                     <c:if test="${not empty availabilityDetail && availabilityDetail.isDefaultPlant eq true}">
			                        <c:set var="defaultPlantForEntry" value="${availabilityDetail.plant}" />
			                     </c:if>
			                  </c:forEach>
			               </c:if>

			               <div class="bhge-product-details__UOM pull-left available-details" style="max-width: 190px">
			               	  <span class="bhge-mcstore-icons icon-warehouse"></span>
			                  <div class="dropdown-toggle m-l-40" type="button" data-toggle="dropdown" >
			                     <div class="shipping-details-header">
			                        <spring:theme code="order.summary.avaiable.at" />
			                     </div>
				                     <c:choose>
				                        <c:when test="${fn:length(entry.availabilityDetails) eq 0}">
				                           <span class="plant-detail"><spring:theme code="order.summary.noavaiablestock" text="No plant detail available" /></span>
				                        </c:when>
				                        <c:when test="${fn:length(entry.availabilityDetails) eq 1}">

				                           <span class="plant-detail">
				                              <c:choose>
				                                 <c:when test="${not empty entry.plantName}">
				                                    ${entry.plantName}
				                                 </c:when>
				                                 <c:otherwise>
				                                    ${entry.plant}
				                                 </c:otherwise>
				                              </c:choose>
				                           </span>
				                           <span class="plant-detail">(${entry.availableQuantity})</span>
				                           <c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == entry.plant}">
				                              (
				                              <spring:theme code="order.summary.default" text="Default" />
				                              )
				                           </c:if>
				                        </c:when>
				                        <c:when test="${fn:length(entry.availabilityDetails) > 1}">
				                        <c:choose>
			                     <c:when test="${not empty entry.stockDetails}">
			                        <div class="stockDetailsForEntry" id="stockDetailsForEntry${entry.entryNumber}">
			                           <select class="cart-availblity-pdp--list multiplePlantDiv" id="cart-dropdown-${entry.entryNumber}" style="width: 150px">
			                              <c:forEach items="${entry.stockDetails}"  var="stockDetail" varStatus="i">
			                                 <option  class="js-cart-option-${entry.entryNumber}-${i.index}"
			                                 data-name="defaultPlant-${entry.entryNumber}"
			                                 data-entrynumber="${entry.entryNumber}"
			                                 data-value="${stockDetail.plant}"
			                                 value="${stockDetail.plant}"
			                                 ${entry.plant == stockDetail.plant ? "selected='selected'" : ''}>
			                                 <span class="js-plantName">
			                                    <c:choose>
			                                       <c:when test="${not empty stockDetail.plantName}">
			                                          ${stockDetail.plantName}
			                                       </c:when>
			                                       <c:otherwise>
			                                          ${fn:escapeXml(stockDetail.plant)}
			                                       </c:otherwise>
			                                    </c:choose>
			                                 </span>&nbsp;
			                                 <b>(${stockDetail.actualStockQty})</b>
			                                 <c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == stockDetail.plant}">
			                                    &nbsp;(
			                                    <spring:theme code="order.summary.default" text="Default" />
			                                    )
			                                 </c:if>
			                                 </option>
			                              </c:forEach>
			                           </select>


			                           <input type="hidden" name="defaultPlant-${entry.entryNumber}" data-checked="true" class="${entry.productType=='ITFILM' ? 'film': 'non-film'}"
			                              checked="checked"  data-entrynumber="${entry.entryNumber}" value="${entry.plant}" data-defaultplant="${defaultPlantForEntry}"/>
			                        </div>
			                     </c:when>
			                     <c:otherwise>
				                        	<span class="plant-detail"><spring:theme code="order.summary.noavaiablestock" text="No plant detail available" /></span>
				                  </c:otherwise>
			                     </c:choose>
			                  </c:when>
			                    <c:otherwise>
				                        	<span class="plant-detail"><spring:theme code="order.summary.noavaiablestock" text="No plant detail available" /></span>
				                  </c:otherwise>
				                     </c:choose>
			                  </div>
			                  <form:form action="${product.url}" method="POST" id="BHGEChangePlantForm" name="BHGEChangePlantForm">
			                     <input type='hidden' id= 'quantityForPlantChange' name='quantity' value='' />
			                     <input type='hidden' id= 'defaultPlant' name='defaultPlant' value='' />
			                     <input type='hidden' id= 'productCode' name='productCode' value='${product.code}' />
			                  </form:form>
			               </div>

		       		    </div>
		       		   <div class="clearfix"></div>

						<c:if test="${empty showAddToCart ? true : showAddToCart}">
		                  <div class="quantity m-t-45">
		                  		<span class="quantity-text">
			                        <spring:theme code="basket.page.quantity" />
			                     </span>
			                  	<div class="quantity-container pull-left">
				                     <div id="decreaseInvent" class="btn item__quantity--change js-product__quantity--change--decrease--bhge product_decrease p-0" ><span class="bhge-mcstore-icons icon-qty-minus"></span></div>
				                     <input id="quantity_0${product.code}" name="quantity" value="${updatedQuanity}" autocomplete="off" class="item__list--qty js-update-product-quantity-input--bhge"
				                        onkeydown=" return isCheckValidQty(event)"
				                        type="text"
				                        oninput="setCustomValidity('')"
				                        value="1"
				                        size="1"
				                        maxlength="4" placeholder="<spring:theme code="bhge.availbilityWidget.qty" text="Qty "/>" data-min="1" data-max="9999">
				                     <div id="increaseInvent" class="btn item__quantity--change js-product__quantity--change--increase--bhge  product_increase p-0" ><span class="bhge-mcstore-icons icon-qty-plus"></span></div>
				                     <label for="quantity_0${product.code}" class="items-text">
				                        <b>
				                           <c:choose>
				                              <c:when test="${entry.product.uom eq 'Piece'}">
				                                 <spring:theme code="product.detail.unit.of.measure.value" text="Each :"/>
				                              </c:when>
				                              <c:otherwise>
				                                 ${entry.product.uom}
				                              </c:otherwise>
				                           </c:choose>
				                        </b>
				                     </label>
		           	                <button type="submit" data-loading-text="<i class='fa fa-spinner fa-spin'></i>"
			                        	class="form-control hidden js-update-entry-quantity-PDP--bhge secondary-btn-bhge pdp-update-qty-btn" >
			                        	<spring:theme code="cart.qty.update" text="Update"/>
			                     	</button>
			                  	</div>
		                  </div>
		               </c:if>

		               <div class="clearfix"></div>
		               <div class="col-md-12 m-t-40 p-l-17 m-b-10">
                          <cart:wishlist></cart:wishlist>
                          <a href="/site-equipment/add-part/${product.code}?partName=${product.name}" class="addToEquipment m-l-10"><span class="bhge-icons ico_inventory_lg"></span><spring:theme code="bhge.products.add.equipment" text="Add to My Equipment" /></a>
                       </div>
		               <div class="pdp-actions">
		               		<c:choose>
			               		<c:when test="${entry.listPrice.value > 0}">
				               		<div class="buy-action pull-left p-r-25">
				               			<div class="addCaseAccessoryText pull-left m-r-15" style="display: none;">
							               <button class="secondary-btn-bhge select-accessories-btn" onClick="BHGEaccessory.onSelectAccessoryClick()"><spring:theme code="product.detail.select.accessories" /></button>
							            </div>
					            		<form:form id="addToCartForm${product.code}" action="${addToCartUrl}" method="post" class="add_to_cart_form pull-left">
					                    	<ycommerce:testId code="addToCartButton">
					                        	<input type="hidden" name="callingsourceinfo" value="<spring:theme code="callingsource.PDP" text="PDP page"/>"/>
					                        	<input type="hidden" name="productCodePost" value="${fn:escapeXml(product.code)}"/>
					                        	<input type="hidden" name="productNamePost" value="${fn:escapeXml(product.name)}"/>
					                        	<input type="hidden" name="productPostPrice" value="${entry.netTotal}"/>
					                        	<input type="hidden" maxlength="4" size="1" id="qty" name="qty" class="qty js-qty-selector-input" value="${updatedQuanity}">
					                        	<button type="submit" onclick="ACC.product.addToCart(event, '${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')" class="primary-btn-bhge buy-button ">
					                           		<span class="bhge-mcstore-icons icon-buy"></span>
					                           		<span class="buy-btn-text"><spring:theme code="basket.buy.product" /></span>
					                        	</button>
					                     	</ycommerce:testId>
					                	 </form:form>
					                	 <div class="addCaseAccessoryText select-case-text text-danger m-t-10" style="display: none;">
						              		<span><spring:theme code="product.accessories.case.select" text="Select at least one Case Accessory"/></span>
						              	</div>
									</div>
								</c:when>
								<c:when test="${(entry.isEngineeringHold eq true)}">
									<div class="buy-action pull-left p-r-25">
										<div class="pull-lefts bhge-pdp-error-box display-flex-justify-left m-t-40">
								   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
								   			<div class="bhge-inventory-err-msg text-left">
								            	<spring:theme code="Engineering.Hold" text="Product is currently on a stop order. Ship date will be provided by customer care after order submission."/>
								         	</div>
							   			</div>
						   			</div>
								</c:when>
								<c:otherwise>
				               		<div class="buy-action pull-left p-r-25">
				               			<div class="product-action-links pdp-action-links">
						         			<a href="/contactus">
										    	<spring:theme code="bhge.products.customer.care"/>
										    </a>
									    </div>
									    <div class="product-info-upper text-danger p-0">
											<span> <spring:theme code="bh.product.pdp.details" text="Price is not available, contact customer care to buy."/> </span>
										</div>
					         		</div>
				               	</c:otherwise>
							</c:choose>
							<div class="returns-action pull-left p-l-22">
								<product:productActionLink product="${product}"/>
								<c:if test="${!product.productAccessData.isService}">
									<c:choose>
										<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
											<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
												<span class="bhge-mcstore-icons icon-buy"></span>
									           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
									        </button>
									        <div class="product-info-upper return-text">
												<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
											</div>
										</c:when>
										<c:when test="${product.productAccessData.isobsolete}">
											<div class="product-action-links pdp-action-links">
												<a href="/contactus">
									           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
									        	</a>
											</div>
											<div class="product-info-upper return-text">
												<span><spring:theme code="bhge.products.return.obsolete" /></span>
											</div>
										</c:when>
										<c:otherwise>
											<div class="product-action-links pdp-action-links">
												<a href="/contactus">
									           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
									        	</a>
											</div>
											<div class="product-info-upper return-text">
												<span><spring:theme code="bhge.products.cannot.return"/></span>
											</div>
										</c:otherwise>
									</c:choose>
								</c:if>
							</div>
		               </div>

		                <div class="clearfix"></div>
		            </div>

		            <div class="selected-accessories-container m-t-30" style="display: none;">
						<span class="selected-count-text"><spring:theme	code="product.detail.selected" />&nbsp;(<span class="total-selected-acc-val"></span>)</span>
						<div class="selected-accessories m-t-15"></div>
						<span class="selected-acc-view-more"><a href="#case-accessory"><spring:theme code="product.detail.accessories.view.more" /></a></span>
						<div class="clearfix"></div>
					</div>
		         </c:forEach>
	      </c:when>

	      <c:when test="${product.productAccessData.isobsolete and !product.productAccessData.isBuy }">
	     	<div class="obsolete-cases bhge-pdp-error-box display-flex-justify-left m-t-40">
	   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
	   			<div class="bhge-inventory-err-msg text-left">
	            	<spring:theme code="bhge.products.buy.obsolete"/>
	         	</div>
   			</div>

   			<div class="pdp-actions obsolete-cases">
   				<div class="returns-action pull-left full-width">
   					<c:if test="${!product.productAccessData.isService}">
						<c:choose>
							<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
								<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
									<span class="bhge-mcstore-icons icon-buy"></span>
						           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
						        </button>
						        <div class="product-info-upper return-text full-width">
									<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
								</div>
							</c:when>
							<c:otherwise>
								<div class="product-action-links pdp-action-links full-width">
									<a href="/contactus">
						           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
						        	</a>
								</div>
							</c:otherwise>
						</c:choose>
					</c:if>
   				</div>
   			</div>

	      </c:when>

	   	 <c:when test="${!product.productAccessData.isBuy and !product.productAccessData.isobsolete}">

   			<div class="clearfix"></div>
            <div class="pdp-actions obsolete-cases">
         		<div class="buy-action pull-left p-r-25">
         			<c:if test="${!product.productAccessData.isobsolete && (product.productAccessData.isCustomerBuy && (product.productAccessData.customerEcommerceFlag == 'E1' || product.productAccessData.customerEcommerceFlag == 'E2'))}">
	         			<div class="product-action-links pdp-action-links">
							<a href="/contactus">
				           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
				        	</a>
						</div>
						<div class="product-info-upper return-text">
							<span><spring:theme code="bhge.product.dialogue.customer" text="To purchase this item please contact or open a dialogue with Customer Care"/></span>
						</div>
				    </c:if>
         		</div>
				<div class="returns-action pull-left p-l-22">
          <product:productActionLink product="${product}"/>
					<c:if test="${!product.productAccessData.isService}">
						<c:choose>
							<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
								<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
									<span class="bhge-mcstore-icons icon-buy"></span>
						           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
						        </button>
						        <div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
								</div>
							</c:when>
							<c:when test="${product.productAccessData.isobsolete}">
								<div class="product-action-links pdp-action-links">
									<a href="/contactus">
						           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
						        	</a>
								</div>
								<div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.return.obsolete" /></span>
								</div>
							</c:when>
							<c:otherwise>
								<div class="product-action-links pdp-action-links">
									<a href="/contactus">
						           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
						        	</a>
								</div>
								<div class="product-info-upper return-text">
									<span><spring:theme code="bhge.products.cannot.return"/></span>
								</div>
							</c:otherwise>
						</c:choose>
					</c:if>
				</div>
            </div>

	      </c:when>

	   </c:choose>
	</sec:authorize>

	<sec:authorize access="hasAnyRole('ROLE_ANONYMOUS')">
	      
	<c:if test="${product.isAnonymousBuy}">
		 <c:if test="${not empty cartData.connectivityerror}">
	         <div class="bhge-pdp-error-box display-flex-justify-left m-t-40">
	   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
	   			<div class="bhge-inventory-err-msg text-left">
	            	<spring:theme code="jco.connectivity.error.pdp1" text="Not able to fetch the price and availability due to connectivity issue."/>
	        	</div>
	         	<div class="bhge-inventory-err-msg text-left">
	            	<spring:theme code="jco.connectivity.error.home2" text="Please try again later!"/>
	         	</div>
	   		</div>
	    </c:if>
		<c:if test="${buyWithOutB2BUnit eq 'true'}">
			<div class="bhge-pdp-error-box display-flex-justify-left m-t-40">
	   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
	   			<div class="bhge-inventory-err-msg text-left">
	            	<span> <spring:theme code="bh.product.pdp.details" text="Price is not available, contact customer care to buy."/> </span>
	         	</div>
	   		</div>
		</c:if>
		<c:forEach items="${cartData.entries}" var="entry" begin="0" end="0">
		
			<div class="product-details-holder row m-0 m-t-30">
				<div class="details-left-box col-md-7 pull-left p-l-25 p-b-25">
					<div class="quantity m-t-40 m-b-20">
				    	<label class="pdp-labels">
                            <spring:theme code="bh.product.pdp.quantity" text="Quantity" />
				      	</label>
				      	
				      	<div id="decreaseInvent" class="btn item__quantity--change js-product__quantity--change--decrease--bhge product_decrease p-0" ><span class="bhge-mcstore-icons icon-qty-minus"></span></div>
				      	<input id="quantity_0${product.code}" name="quantity" value="${updatedQuanity}" autocomplete="off" class="item__list--qty js-update-product-quantity-input--bhge"
					         onkeydown=" return isCheckValidQty(event)"
					         type="text"
					         oninput="setCustomValidity('')"
					         value="1"
					         size="1"
					         maxlength="4" placeholder="<spring:theme code="bhge.availbilityWidget.qty" text="Qty "/>" data-min="1" data-max="9999">
				      	<div id="increaseInvent" class="btn item__quantity--change js-product__quantity--change--increase--bhge  product_increase p-0" ><span class="bhge-mcstore-icons icon-qty-plus"></div>
				      	<label for="quantity_0${product.code}">
				        	<b class="m-l-10">
				            	<c:choose>
				               		<c:when test="${product.uom eq 'Piece'}">
				                  		<spring:theme code="product.detail.unit.of.measure.value" text="Each :"/>
				               		</c:when>
				               		<c:otherwise>
				                  		${product.uom}
				               		</c:otherwise>
				            	</c:choose>
				         	</b>
				      	</label>
				   </div>
				   
				   <div class="clearfix"></div>
				   
				   <div class="shipping-details m-t-30">
				   		<div class="bhge-product-details__UOM pull-left available-details m-0">
			          	  	<span class="bhge-mcstore-icons icon-warehouse"></span>
			               	<div class="dropdown-toggle m-l-40" type="button" data-toggle="dropdown" >
			                  <div class="shipping-details-header">
			                     <spring:theme code="order.summary.avaiable.at" />
			                  </div>
			                  <c:choose>
			                      <c:when test="${fn:length(entry.availabilityDetails) eq 0}">
			                         <span class="plant-detail"><spring:theme code="order.summary.noavaiablestock" text="No plant detail available" /></span>
			                      </c:when>
			                      <c:when test="${fn:length(entry.availabilityDetails) eq 1}">
			
			                         <span class="plant-detail">
			                            <c:choose>
			                               <c:when test="${not empty entry.plantName}">
			                                  ${entry.plantName}
			                               </c:when>
			                               <c:otherwise>
			                                  ${entry.plant}
			                               </c:otherwise>
			                            </c:choose>
			                         </span>
			                         <span class="plant-detail">(${entry.availableQuantity})</span>
			                         <c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == entry.plant}">
			                            (
			                            <spring:theme code="order.summary.default" text="Default" />
			                            )
			                         </c:if>
			                      </c:when>
			                      <c:when test="${fn:length(entry.availabilityDetails) > 1}">
		                      		<c:choose>
					                  <c:when test="${not empty entry.stockDetails}">
					                     <div class="stockDetailsForEntry" id="stockDetailsForEntry${entry.entryNumber}">
					                        <select class="cart-availblity-pdp--list multiplePlantDiv" id="cart-dropdown-${entry.entryNumber}" style="width: 150px">
					                           <c:forEach items="${entry.stockDetails}"  var="stockDetail" varStatus="i">
					                              <option  class="js-cart-option-${entry.entryNumber}-${i.index}"
					                              data-name="defaultPlant-${entry.entryNumber}"
					                              data-entrynumber="${entry.entryNumber}"
					                              data-value="${stockDetail.plant}"
					                              value="${stockDetail.plant}"
					                              ${entry.plant == stockDetail.plant ? "selected='selected'" : ''}>
					                              <span class="js-plantName">
					                                 <c:choose>
					                                    <c:when test="${not empty stockDetail.plantName}">
					                                       ${stockDetail.plantName}
					                                    </c:when>
					                                    <c:otherwise>
					                                       ${fn:escapeXml(stockDetail.plant)}
					                                    </c:otherwise>
					                                 </c:choose>
					                              </span>&nbsp;
					                              <b>(${stockDetail.actualStockQty})</b>
					                              <c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == stockDetail.plant}">
					                                 &nbsp;(
					                                 <spring:theme code="order.summary.default" text="Default" />
					                                 )
					                              </c:if>
					                              </option>
					                           </c:forEach>
					                        </select>				
					
					                        <input type="hidden" name="defaultPlant-${entry.entryNumber}" data-checked="true" class="${entry.productType=='ITFILM' ? 'film': 'non-film'}"
					                           checked="checked"  data-entrynumber="${entry.entryNumber}" value="${entry.plant}" data-defaultplant="${defaultPlantForEntry}"/>
					                     </div>
					                  </c:when>
			                  		<c:otherwise>
			                      		<span class="plant-detail"><spring:theme code="order.summary.noavaiablestock" text="No plant detail available" /></span>
			                		</c:otherwise>
			                  	</c:choose>
			               		 </c:when>
				                 <c:otherwise>
				                      	<span class="plant-detail"><spring:theme code="order.summary.noavaiablestock" text="No plant detail available" /></span>
				                 </c:otherwise>
		                   		</c:choose>
			               </div>
			               <form:form action="${product.url}" method="POST" id="BHGEChangePlantForm" name="BHGEChangePlantForm">
			                  <input type='hidden' id= 'quantityForPlantChange' name='quantity' value='' />
			                  <input type='hidden' id= 'defaultPlant' name='defaultPlant' value='' />
			                  <input type='hidden' id= 'productCode' name='productCode' value='${product.code}' />
			               </form:form>
			            </div>
					</div>
				</div>
				
				<div class="details-right-box col-md-5 pull-right p-0 p-l-25 p-r-25">					
					<div class="price-details m-t-40">
			  	  		<c:choose>
		            		<c:when test="${entry.listPrice.value > 0}">
			                   <div class="bhge-product-details__UOM pull-left list-price-details m-r-0">
			                      <span class="list-price-text"><spring:theme code="order.summary.listPrice" text=" List Price"/></span>
			                      <span class="list-price-value">${entry.listPrice.currencyIso} ${' '} ${currentCurrency.symbol} <fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${entry.listPrice.value}" /></span>
			                      <span class="list-price-value m-l-10">(<spring:theme code="home.inventory.qty" text="Quantity" />&nbsp;1)</span>
			                   </div>
			                   <c:if test="${not empty entry.silverClausePrice && entry.silverClausePrice.value > 0 && entry.productType == 'ITFILM'}">
			                      <div class="bhge-product-details__UOM pull-left silver-clause-price-details m-r-30">
			                      	<span class="silver-price-text"><spring:theme code="cart.silverClausePrice" text="Silver Clause Price"/></span>
			                      	<span class="silver-price-value">
			                      		${fn:containsIgnoreCase(entry.silverClausePricePercentage, '-') ? "-" : "+"}
			                            ${entry.listPrice.currencyIso} ${' '} ${currentCurrency.symbol}
			                            <format:price priceData="${entry.silverClausePrice}" displayFreeForZero="false" displayOnlyCurrenySymbol="true"/>
			                      	</span>
			                      	<span class="list-price-value m-l-10">(<spring:theme code="home.inventory.qty" text="Quantity" />&nbsp;1)</span>
			                      </div>
			                   </c:if>
			                </c:when>
			                <c:otherwise>
								<div class="obsolete-cases bhge-pdp-error-box display-flex-justify-left m-t-40">
						   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
						   			<div class="bhge-inventory-err-msg text-left">
						            	<spring:theme code="bhge.product.price.PDP.noPrice" text="Price and Avalability Not Found. Please try again!"/>
						         	</div>
					   			</div>
			                   <br/>
			                </c:otherwise>
			             </c:choose>
		            </div>
					
					<div class="pdp-actions">
						<c:choose>
					       <c:when test="${entry.listPrice.value > 0}">
						 	   <form:form id="addToCartForm${product.code}" action="${addToCartUrl}" method="post" class="add_to_cart_form">
							      <ycommerce:testId code="addToCartButton">
							         <input type="hidden" name="productCodePost" value="${fn:escapeXml(product.code)}"/>
							         <input type="hidden" name="productNamePost" value="${fn:escapeXml(product.name)}"/>
							         <input type="hidden" name="productPostPrice" value="${entry.netTotal}"/>
							         <input type="hidden" name="guestCartType" value="<spring:theme code="guest.Buy.Cart" text="guestBuy"/>"/>
							         <input type="hidden" maxlength="4" size="1" id="qty" name="qty" class="qty js-qty-selector-input" value="1">
							         <button type="submit" onclick="ACC.product.guestAddToCart(event, '${fn:escapeXml(product.code)}')"
							         	data-productName= '${fn:escapeXml(product.name)}'
							         	class="pull-left btn-green w-200">
							           	<span class="bhge-mcstore-icons icon-buy"></span>
							            <spring:theme code="basket.add.to.basket" />
							         </button>
							      </ycommerce:testId>
							   </form:form>
						   </c:when>
						   <c:otherwise>
								<div class="buy-action pull-left p-r-25">
									<div class="product-action-links">
										<a href="/contactus">
										 	<spring:theme code="bhge.products.customer.care"/>
										</a>
								   </div>
							  	   <div class="product-info-upper text-danger p-0">
							   	   		<span> <spring:theme code="bh.product.pdp.details" text="Price is not available, contact customer care to buy."/> </span>
								   </div>
								</div>
						  </c:otherwise>
					  </c:choose>
					</div>				
				</div>			
			</div>
				   
		   <div class="addCaseAccessoryText pull-left m-r-15 m-t-15" style="display: none;">
	          <button class="secondary-btn-bhge select-accessories-btn" style="width: 200px;" onClick="BHGEaccessory.onSelectAccessoryClick()"><spring:theme code="product.detail.select.accessories" /></button>
	       </div>
	       
		   <div class="addCaseAccessoryText text-danger" style="display: none;margin-top: 65px;">
		      <spring:theme code="product.accessories.case.select" text="Select at least one Case Accessory"/>
		   </div>
	   </c:forEach>
   </c:if>
	   
   <c:if test="${product.isAnonymousQuote}">   
   	<div class="product-details-holder row m-0 m-t-30">   	
   		<div class="details-left-box col-md-7 pull-left p-l-25 p-b-25">
   			<div class="quantity m-t-40 m-b-20">
		    	<label class="pdp-labels">
                    <spring:theme code="bh.product.pdp.quantity" text="Quantity" />
		      	</label>
		      	
		      	<div id="decreaseInvent" class="btn item__quantity--change js-product__quantity--change--decrease--bhge product_decrease p-0" ><span class="bhge-mcstore-icons icon-qty-minus"></span></div>
			    <input id="quantity_0${product.code}" name="quantity" value="${updatedQuanity}" autocomplete="off" class="item__list--qty js-update-product-quantity-input--bhge"
			         onkeydown=" return isCheckValidQty(event)"
			         type="text"
			         oninput="setCustomValidity('')"
			         value="1"
			         size="1"
			         maxlength="4" placeholder="<spring:theme code="bhge.availbilityWidget.qty" text="Qty "/>" data-min="1" data-max="9999">
			    <div id="increaseInvent" class="btn item__quantity--change js-product__quantity--change--increase--bhge  product_increase p-0" ><span class="bhge-mcstore-icons icon-qty-plus"></div>
			    <label for="quantity_0${product.code}">
			       <b class="m-l-10">
			          <c:choose>
			             <c:when test="${product.uom eq 'Piece'}">
			                <spring:theme code="product.detail.unit.of.measure.value" text="Each :"/>
			             </c:when>
			             <c:otherwise>
			                ${product.uom}
			             </c:otherwise>
			          </c:choose>
			       </b>
			    </label>
		   </div>
   		</div>
   		
   		<div class="details-right-box col-md-5 pull-right p-0 p-l-25 p-r-25 display-flex-center">
   			<form:form id="addToCartForm${product.code}" action="${addToCartUrl}" method="post" class="add_to_cart_form">
		      <ycommerce:testId code="addToCartButton">
		         <input type="hidden" name="productCodePost" value="${fn:escapeXml(product.code)}"/>
		         <input type="hidden" name="productNamePost" value="${fn:escapeXml(product.name)}"/>
		         <input type="hidden" name="productPostPrice" value="${entry.netTotal}"/>
		         <input type="hidden" name="guestCartType" value="<spring:theme code="guest.Quote.Cart" text="guestQuote"/>"/>
		         <input type="hidden" maxlength="4" size="1" id="qty" name="qty" class="qty js-qty-selector-input" value="1">
		         <button type="submit" onclick="ACC.product.guestAddToCart(event, '${fn:escapeXml(product.code)}')" 
		         	data-productName= '${fn:escapeXml(product.name)}'
		         	class="rfq-add-cart-btn pull-left w-200">
		           	<span class="bhge-mcstore-icons icon-rma-inquiry"></span>
                    <spring:theme code="pdp.button.request.quote" text="REQUEST FOR QUOTE" />
		         </button>
		      </ycommerce:testId>
		   </form:form>
   		</div>   	
   	</div>
   </c:if>
   	   <c:if test="${product.isAnonymousReturn}">
	   	   <div class="quantity m-t-40 m-b-30">
	      <label>
	         <spring:theme code="basket.page.cart.quantity" text="Qty" />
	      </label>
	      &nbsp;
	      <div id="decreaseInvent" class="btn item__quantity--change js-product__quantity--change--decrease--bhge product_decrease p-0" ><span class="bhge-mcstore-icons icon-qty-minus"></span></div>
	      <input id="quantity_0${product.code}" name="quantity" value="${updatedQuanity}" autocomplete="off" class="item__list--qty js-update-product-quantity-input--bhge"
	         onkeydown=" return isCheckValidQty(event)"
	         type="text"
	         oninput="setCustomValidity('')"
	         value="1"
	         size="1"
	         maxlength="4" placeholder="<spring:theme code="bhge.availbilityWidget.qty" text="Qty "/>" data-min="1" data-max="9999">
	      <div id="increaseInvent" class="btn item__quantity--change js-product__quantity--change--increase--bhge  product_increase p-0" ><span class="bhge-mcstore-icons icon-qty-plus"></div>
	      <label for="quantity_0${product.code}">
	         <b class="m-l-10">
	            <c:choose>
	               <c:when test="${product.uom eq 'Piece'}">
	                  <spring:theme code="product.detail.unit.of.measure.value" text="Each :"/>
	               </c:when>
	               <c:otherwise>
	                  ${product.uom}
	               </c:otherwise>
	            </c:choose>
	         </b>
	      </label>
	   </div>
	   <button type="button" class="btn-blue returns-btn form-control m-t-15 m-l-20 pull-left" onclick='ACC.common.rmaGuestProductLogin("${fn:escapeXml(product.code)}");' style="width: 200px; height: 40px;">
				            	<span class="bhge-mcstore-icons icon-return-button"></span>
				            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
		</button>	
		</c:if>
		<c:if test="${product.isAnonymousCatalog}">
		<div class="pdp-actions obsolete-cases">
		<div class="pull-left p-r-25" style="width: 55%">
	   				<button class="btn catalog-only-btn secondary-btn-bhge full-width form-control pull-left disabled m-0">
			            <spring:theme code="search.grid.page.catalog.only" text="Catalogue Only"/>
			        </button>
	   			</div>
	   			</div>
		</c:if>
	</sec:authorize>

</div>

<div class="product-info-sticky" style="display: none">

	<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">

		<div class="col-md-2 product-name-cell pdp-sticky-cells p-l-25">
			<div class="part-detail">
				<span class="item__code--bhge">
						${fn:escapeXml(product.code)}
				</span>
			</div>
			<div class="part-detail m-t-5">
				<span class="item__name--bhge">
						${fn:escapeXml(product.name)}
				</span>
			</div>
		</div>

		<c:choose>
	      <c:when test="${product.stock.stockLevelStatus.code eq 'inStock' and empty product.stock.stockLevel}">
	         <c:set var="maxQty" value="FORCE_IN_STOCK"/>
	      </c:when>
	      <c:otherwise>
	         <c:set var="maxQty" value="${product.stock.stockLevel}"/>
	      </c:otherwise>
	   </c:choose>
	   <c:choose>
	      <c:when test="${not empty updatedQuanity}">
	         <c:set var="updatedQuanity">
	            ${updatedQuanity}
	         </c:set>
	      </c:when>
	      <c:otherwise>
	         <c:set var="updatedQuanity">
	            1
	         </c:set>
	      </c:otherwise>
	   </c:choose>
	   <c:choose>
	      <c:when test="${not empty cartData.connectivityerror}">
	      	<div class="col-md-7 product-info-cell pdp-sticky-cells p-t-5 p-l-20">
		      	<div class="bhge-pdp-error-box display-flex-justify-left">
		   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
		   			<div class="bhge-inventory-err-msg text-left">
		            	<spring:theme code="jco.connectivity.error.pdp1" text="Not able to fetch the price and availability due to connectivity issue."/>
		         	</div>
		         	<div class="bhge-inventory-err-msg text-left">
		            	<spring:theme code="jco.connectivity.error.home2" text="Please try again later!"/>
		         	</div>
		   		</div>
	   		</div>
	      </c:when>

	      <c:when test="${product.hybrisStatus eq 'CATALOG'}">

	      	<div class="col-md-6 catalog-info product-info-cell pdp-sticky-cells p-t-5 p-l-20">
		      	<div class="bhge-pdp-error-box p-5 display-flex-justify-left">
		   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
		   			<div class="bhge-inventory-err-msg text-left">
		            	<spring:theme code="search.results.catalog.only.message" text="This product is not available for purchase at this time.If you would like to purchase this product, please inform BHGE via 'Contact Us'."/>
		         	</div>
		   		</div>
	   		</div>

	   		<div class="col-md-2 product-buy-action-cell pdp-sticky-cells p-t-5 p-l-10">
		    	<button class="btn catalog-only-btn secondary-btn-bhge form-control pull-left disabled m-0 full-width">
		            <spring:theme code="search.grid.page.catalog.only" text="Catalogue Only"/>
		        </button>
	        </div>

	        <div class="col-md-2 product-return-action-cell pdp-sticky-cells">
				<div class="pdp-actions">
					<div class="returns-action pull-left full-width">
						<c:if test="${product.productAccessData.isService}">
							<button type="button" class="full-width btn-blue returns-btn form-control" onclick="ACC.common.createRMA('${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')">
				            	<span class="bhge-mcstore-icons icon-return-button"></span>
				            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
				            </button>
				            <div class="service-offerings-text">
				             	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
				          	  	</c:if>
				          	  	<c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
					          		<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
					          	</c:if>
			          	  	</div>
						</c:if>
						<c:if test="${!product.productAccessData.isService}">
							<c:choose>
								<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
									<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
										<span class="bhge-mcstore-icons icon-buy"></span>
							           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
							        </button>
							        <div class="product-info-upper return-text">
										<span class="overflow-ellipsis"><spring:theme code="bhge.products.return.other.sales.area" /></span>
									</div>
								</c:when>
								<c:when test="${product.productAccessData.isobsolete}">
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text">
										<span class="overflow-ellipsis"><spring:theme code="bhge.products.return.obsolete" /></span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.cannot.return"/></span>
									</div>
								</c:otherwise>
							</c:choose>
						</c:if>
					</div>
				</div>
			</div>

	      </c:when>

	      <c:when test="${product.configurable}">
	         <form:form method="post" id="configureForm" class="configure_form" action="${configureUrl}">
	         	<div class="col-md-3 product-quantity-cell pdp-sticky-cells">
	         		<div class="quantity">
		               <label>
		                  <spring:theme code="basket.page.cart.quantity" text="Qty" />
		               </label>
		               &nbsp;
		               <div id="decreaseInvent" class="btn item__quantity--change js-product__quantity--change--decrease--bhge product_decrease p-0" >-</div>
		               <input id="quantity_0${product.code}" id="qty" name="qty" value="${updatedQuanity}" autocomplete="off" class="item__list--qty js-update-product-quantity-input--bhge"
		                  onkeydown=" return isCheckValidQty(event)"
		                  type="text"
		                  oninput="setCustomValidity('')"
		                  value="1"
		                  size="1"
		                  maxlength="4" placeholder="<spring:theme code="bhge.availbilityWidget.qty" text="Qty "/>" data-min="1" data-max="9999">
		               <div id="increaseInvent" class="btn item__quantity--change js-product__quantity--change--increase--bhge  product_increase p-0" >+</div>
		               <label for="quantity_0${product.code}">
		                  <b>
		                     <c:choose>
		                        <c:when test="${entry.product.uom eq 'Piece'}">
		                           <spring:theme code="product.detail.unit.of.measure.value" text="Each :"/>
		                        </c:when>
		                        <c:otherwise>
		                           ${entry.product.uom}
		                        </c:otherwise>
		                     </c:choose>
		                  </b>
		               </label>
		            </div>
	         	</div>

	            <div class="col-md-3 product-buy-action-cell pdp-sticky-cells">
	            	<button id="configureProduct" type="${buttonType}" class="form-control add-to-cart-btn js-enable-btn" style="margin-top:10px;" disabled="disabled"
		               name="configure">
		               <i class="fa fa-gear" aria-hidden="true"></i>
		               <spring:theme code="basket.configure.product"/>
		            </button>
		            <c:if test="${isFptProduct eq 'YES'}">
		               <button id="displayBOMPopup" type="button" class="form-control add-to-cart-btn js-enable-btn" style="margin-top:10px;" disabled="disabled"
		                  name="configure">
		                  <spring:theme code="bhge.display.material.bom" text="Material Bom"></spring:theme>
		               </button>
		            </c:if>
	            </div>
	         </form:form>

	         <div class="col-md-2 product-return-action-cell pdp-sticky-cells">
				<div class="pdp-actions">
					<div class="returns-action pull-left full-width">
						<c:if test="${product.productAccessData.isService}">
							<button type="button" class="full-width btn-blue returns-btn form-control" onclick="ACC.common.createRMA('${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')">
				            	<span class="bhge-mcstore-icons icon-return-button"></span>
				            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
				            </button>
				            <div class="service-offerings-text">
				             	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
				          	  	</c:if>
				          	  	<c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
						          	<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
					            </c:if>
					         </div>
						</c:if>
						<c:if test="${!product.productAccessData.isService}">
							<c:choose>
								<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
									<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
										<span class="bhge-mcstore-icons icon-buy"></span>
							           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	

							        </button>
							        <div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
									</div>
								</c:when>
								<c:when test="${product.productAccessData.isobsolete}">
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.return.obsolete" /></span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.cannot.return"/></span>
									</div>
								</c:otherwise>
							</c:choose>
						</c:if>
					</div>
               </div>
			</div>

	      </c:when>

	      <c:when test="${product.productAccessData.isBuyPresentInOtherSalesArea}">
	      	<div class="col-md-5 product-info-cell pdp-sticky-cells p-t-5 p-l-20">
	      		<div class="bhge-pdp-error-box display-flex-justify-left">
		   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
		   			<div class="bhge-inventory-err-msg text-left">
		            	<spring:theme code="bhge.products.buy.other.sales.area"/>
		         	</div>
	   			</div>
	      	</div>
	      	<div class="col-md-3 product-buy-action-cell pdp-sticky-cells p-l-20 p-r-20">
	      		<div class="pdp-actions buy-action pull-left full-width">
         			<button type="button" class="pull-left secondary-btn-bhge full-width form-control switch-sales-area-btn" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'buy'); ">
         				<span class="bhge-mcstore-icons icon-buy"></span>
			           	<span><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
			        </button>
			        <div class="product-info-upper buy-text">
						<span class="display-block overflow-ellipsis"><spring:theme code="bhge.products.buy.other.sales.area"/></span>
					</div>
         		</div>
	      	</div>
	      	<div class="col-md-2 product-return-action-cell pdp-sticky-cells">
				<div class="pdp-actions">
					<div class="returns-action pull-left full-width">
						<c:if test="${product.productAccessData.isService}">
							<button type="button" class="full-width btn-blue returns-btn form-control" onclick="ACC.common.createRMA('${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')">
				            	<span class="bhge-mcstore-icons icon-return-button"></span>
				            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
				            </button>
				            <div class="service-offerings-text">
				            	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
				          	  	</c:if>
				          	  	<c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
					          		<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
					          	</c:if>
			          	  	</div>
						</c:if>
						<c:if test="${!product.productAccessData.isService}">
							<c:choose>
								<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
									<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
										<span class="bhge-mcstore-icons icon-buy"></span>
							           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
							        </button>
							        <div class="product-info-upper return-text full-width">
										<span class="display-block overflow-ellipsis"><spring:theme code="bhge.products.return.other.sales.area" /></span>
									</div>
								</c:when>
								<c:when test="${product.productAccessData.isobsolete}">
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text full-width">
										<span class="display-block overflow-ellipsis"><spring:theme code="bhge.products.return.obsolete" /></span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text full-width">
										<span><spring:theme code="bhge.products.cannot.return"/></span>
									</div>
								</c:otherwise>
							</c:choose>
						</c:if>
					</div>
	              </div>
			</div>
	      </c:when>

	      <c:when test="${product.productAccessData.isobsolete and product.replacementProductStatus ne '' and product.replacementProductStatus ne Null and (product.productAccessData.isCustomerBuy and (product.productAccessData.customerEcommerceFlag == 'E1' || product.productAccessData.customerEcommerceFlag == 'E2'))}">
	      	<div class="col-md-5 product-info-cell pdp-sticky-cells p-t-5 p-l-20">
	      		<div class="bhge-pdp-error-box display-flex-justify-left">
		   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
		   			<div class="bhge-inventory-err-msg text-left">
		            	<spring:theme code="bhge.products.obsolete.replacement"/>
		         	</div>
	   			</div>
	      	</div>
	      	<div class="col-md-2 product-buy-action-cell pdp-sticky-cells p-t-5 p-l-10">
	      		<div class="buy-action pull-left p-r-25">
         			<button type="button" class="pull-left secondary-btn-bhge full-width form-control switch-sales-area-btn replacement-btn">
         				<span><spring:theme code="bhge.products.view.replacement"/></span>
			        </button>
         		</div>
	      	</div>
	      	<div class="col-md-3 product-return-action-cell pdp-sticky-cells">
				<div class="pdp-actions">
					<div class="returns-action pull-left">
						<c:if test="${product.productAccessData.isService}">
							<button type="button" class="full-width btn-blue returns-btn form-control" onclick="ACC.common.createRMA('${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')">
				            	<span class="bhge-mcstore-icons icon-return-button"></span>
				            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
				            </button>
				            <div class="service-offerings-text">
				            	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
				          	  	</c:if>
				          	  	<c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
					          		<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
					         	</c:if>
			          	  	</div>
						</c:if>
						<c:if test="${!product.productAccessData.isService}">
							<c:choose>
								<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
									<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control full-width" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
										<span class="bhge-mcstore-icons icon-buy"></span>

							           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
							        </button>
							        <div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
									</div>
								</c:when>
								<c:when test="${product.productAccessData.isobsolete}">
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text full-width">
										<span><spring:theme code="bhge.products.return.obsolete" /></span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text full-width">
										<span><spring:theme code="bhge.products.cannot.return"/></span>
									</div>
								</c:otherwise>
							</c:choose>
						</c:if>
					</div>
	              </div>
			</div>
	      </c:when>

	      <c:when test="${product.productAccessData.isBuy}">
	        	<c:forEach items="${cartData.entries}" var="entry" begin="0" end="0">
					<div class="col-md-2 product-price-cell pdp-sticky-cells p-t-5 p-l-20">
						<div class="price-details">
				  	  		<c:choose>
			            		<c:when test="${entry.listPrice.value > 0}">
				                   <div class="bhge-product-details__UOM pull-left list-price-details">
				                      <span class="list-price-text"><spring:theme code="order.summary.listPrice" text=" List Price"/></span>
				                      <span class="list-price-value">${entry.listPrice.currencyIso} ${' '} ${currentCurrency.symbol} <fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${entry.listPrice.value}" /></span>
				                      <span class="list-price-value m-l-10">(Qty&nbsp;1)</span>
				                   </div>
				                   <c:if test="${not empty entry.silverClausePrice && entry.silverClausePrice.value > 0 && entry.productType == 'ITFILM'}">
				                      <div class="bhge-product-details__UOM pull-left silver-clause-price-details">
				                      	<span class="silver-price-text"><spring:theme code="cart.silverClausePrice" text="Silver Clause Price"/></span>
				                      	<span class="silver-price-value">
				                      		${fn:containsIgnoreCase(entry.silverClausePricePercentage, '-') ? "-" : "+"}
				                            ${entry.listPrice.currencyIso} ${' '} ${currentCurrency.symbol}
				                            <format:price priceData="${entry.silverClausePrice}" displayFreeForZero="false" displayOnlyCurrenySymbol="true"/>
				                      	</span>
				                      	<span class="list-price-value m-l-10">(Qty&nbsp;1)</span>
				                      </div>
				                      <div class="clearfix"></div>
				                   </c:if>

				                   <div class="bhge-product-details__UOM pull-left your-price-details">
				                      <span class="your-price-text"><spring:theme code="order.confirmation.disc" text="Your Price"/></span>
				                      	<c:choose>
				                            <c:when test="${!entry.discountPrice.matches('[0-9]*.?[0-9]+$')}">
				                               <span class="list-price-value">${DiscountNotAvailable}</span>
				                            </c:when>
				                            <c:when test="${entry.discountPrice eq '0.00'}">
				                               <span class="list-price-value">${DiscountNotAvailable}</span>
				                            </c:when>
				                            <c:otherwise>
				                               <span class="list-price-value">${entry.listPrice.currencyIso} ${' '} ${currentCurrency.symbol}
				                               	<fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${fn:escapeXml(entry.discountPrice)}" />
				                               </span>
				                               <span class="list-price-value m-l-10">(Qty&nbsp;1)</span>
				                            </c:otherwise>
				                         </c:choose>
				                   </div>
				                </c:when>
				                <c:otherwise>
				                	<div class="bhge-pdp-error-box display-flex-justify-left">
				                		<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
				                		<div class="bhge-inventory-err-msg">
					                      <spring:theme code="bhge.product.price.PDP.noPrice" text="Price and Avalability Not Found. Please try again!"/>
					                   </div>
				                	</div>
				                	<br/>
				                </c:otherwise>
				             </c:choose>
			             </div>
					</div>

					<div class="col-md-2 product-availability-cell pdp-sticky-cells p-t-5 p-l-20">

						<c:if test="${not empty entry.availabilityDetails && fn:length(entry.availabilityDetails) > 0}">
		                  <c:forEach items="${entry.availabilityDetails}" var="availabilityDetail" varStatus="i">
		                     <c:if test="${not empty availabilityDetail && availabilityDetail.isDefaultPlant eq true}">
		                        <c:set var="defaultPlantForEntry" value="${availabilityDetail.plant}" />
		                     </c:if>
		                  </c:forEach>
		               </c:if>

		               <div class="bhge-product-details__UOM pull-left available-details">
		               	  <span class="bhge-mcstore-icons icon-warehouse"></span>
		                  <div class="dropdown-toggle m-l-40" type="button" data-toggle="dropdown" >
		                     <div class="shipping-details-header">
		                        <spring:theme code="order.summary.avaiable.at" />
		                     </div>
			                     <c:choose>
			                        <c:when test="${fn:length(entry.availabilityDetails) eq 0}">
			                           <span class="plant-detail"><spring:theme code="order.summary.noavaiablestock" text="No plant detail available" /></span>
			                        </c:when>
			                        <c:when test="${fn:length(entry.availabilityDetails) eq 1}">

			                           <span class="plant-detail overflow-ellipsis">
			                              <c:choose>
			                                 <c:when test="${not empty entry.plantName}">
			                                    ${entry.plantName}
			                                 </c:when>
			                                 <c:otherwise>
			                                    ${entry.plant}
			                                 </c:otherwise>
			                              </c:choose>
			                           </span>
			                           <span class="plant-detail">(${entry.availableQuantity})</span>
			                           <c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == entry.plant}">
			                              (
			                              <spring:theme code="order.summary.default" text="Default" />
			                              )
			                           </c:if>
			                        </c:when>
			                        <c:when test="${fn:length(entry.availabilityDetails) > 1}">
			                       <c:choose>
		                     <c:when test="${not empty entry.stockDetails}">
		                        <div class="stockDetailsForEntry m-l-0" id="stockDetailsForEntry${entry.entryNumber}">

		                           <select class="cart-availblity-pdp--list multiplePlantDiv" id="cart-dropdown-${entry.entryNumber}" style="width: 150px">
		                              <c:forEach items="${entry.stockDetails}"  var="stockDetail" varStatus="i">
		                                 <option  class="js-cart-option-${entry.entryNumber}-${i.index}"
		                                 data-name="defaultPlant-${entry.entryNumber}"
		                                 data-entrynumber="${entry.entryNumber}"
		                                 data-value="${stockDetail.plant}"
		                                 value="${stockDetail.plant}"
		                                 ${entry.plant == stockDetail.plant ? "selected='selected'" : ''}>
		                                 <span class="js-plantName">
		                                    <c:choose>
		                                       <c:when test="${not empty stockDetail.plantName}">
		                                          ${stockDetail.plantName}
		                                       </c:when>
		                                       <c:otherwise>
		                                          ${fn:escapeXml(stockDetail.plant)}
		                                       </c:otherwise>
		                                    </c:choose>
		                                 </span>&nbsp;
		                                 <b>(${stockDetail.actualStockQty})</b>
		                                 <c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == stockDetail.plant}">
		                                    &nbsp;(
		                                    <spring:theme code="order.summary.default" text="Default" />
		                                    )
		                                 </c:if>
		                                 </option>
		                              </c:forEach>
		                           </select>

		                           <input type="hidden" name="defaultPlant-${entry.entryNumber}" data-checked="true" class="${entry.productType=='ITFILM' ? 'film': 'non-film'}"
		                              checked="checked"  data-entrynumber="${entry.entryNumber}" value="${entry.plant}" data-defaultplant="${defaultPlantForEntry}"/>
		                        </div>
		                     </c:when>
		                      <c:otherwise>
			                        	<span class="plant-detail"><spring:theme code="order.summary.noavaiablestock" text="No plant detail available" /></span>
			                        </c:otherwise>
		                     </c:choose>
		                  </c:when>
			                        <c:otherwise>
			                        	<span class="plant-detail"><spring:theme code="order.summary.noavaiablestock" text="No plant detail available" /></span>
			                        </c:otherwise>
			                     </c:choose>
		                  </div>
		                  <form:form action="${product.url}" method="POST" id="BHGEChangePlantForm" name="BHGEChangePlantForm">
		                     <input type='hidden' id= 'quantityForPlantChange' name='quantity' value='' />
		                     <input type='hidden' id= 'defaultPlant' name='defaultPlant' value='' />
		                     <input type='hidden' id= 'productCode' name='productCode' value='${product.code}' />
		                  </form:form>
		               </div>

					</div>

					<div class="col-md-1 product-quantity-cell pdp-sticky-cells">
						<div class="quantity">
		                  		<span class="quantity-text">
			                        <spring:theme code="basket.page.quantity" />
			                     </span>
			                  	<div class="quantity-container pull-left full-width">
				                     <div id="decreaseInvent" class="btn item__quantity--change js-product__quantity--change--decrease--bhge product_decrease p-0 pull-left" ><span class="bhge-mcstore-icons icon-qty-minus"></span></div>
				                     <input id="quantity_0${product.code}" name="quantity" value="${updatedQuanity}" autocomplete="off" class="item__list--qty js-update-product-quantity-input--bhge pull-left"
				                        onkeydown=" return isCheckValidQty(event)"
				                        type="text"
				                        oninput="setCustomValidity('')"
				                        value="1"
				                        size="1"
				                        maxlength="4" placeholder="<spring:theme code="bhge.availbilityWidget.qty" text="Qty "/>" data-min="1" data-max="9999">
				                     <div id="increaseInvent" class="btn item__quantity--change js-product__quantity--change--increase--bhge  product_increase p-0 pull-left" ><span class="bhge-mcstore-icons icon-qty-plus"></span></div>
				                     <label for="quantity_0${product.code}" class="items-text">
				                        <b>
				                           <c:choose>
				                              <c:when test="${entry.product.uom eq 'Piece'}">
				                                 <spring:theme code="product.detail.unit.of.measure.value" text="Each :"/>
				                              </c:when>
				                              <c:otherwise>
				                                 ${entry.product.uom}
				                              </c:otherwise>
				                           </c:choose>
				                        </b>
				                     </label>
		           	                <button type="submit" data-loading-text="<i class='fa fa-spinner fa-spin'></i>"
			                        	class="form-control hidden js-update-entry-quantity-PDP--bhge secondary-btn-bhge pdp-update-qty-btn" >
			                        	<spring:theme code="cart.qty.update" text="Update"/>
			                     	</button>
			                  	</div>
		                  </div>
					</div>

					<div class="col-md-3 product-buy-action-cell pdp-sticky-cells">

						<div class="pdp-actions">
							<c:choose>
			            		<c:when test="${entry.listPrice.value > 0}">
				            		<div class="buy-action pull-left m-b-3">
				               			<div class="addCaseAccessoryText pull-left m-r-10" style="display: none;">
							               <button class="secondary-btn-bhge select-accessories-btn" onClick="BHGEaccessory.onSelectAccessoryClick()"><spring:theme code="product.detail.select.accessories" /></button>
							            </div>
					               		<c:if test="${entry.listPrice.value > 0}">
						                  <form:form id="addToCartForm${product.code}" action="${addToCartUrl}" method="post" class="add_to_cart_form pull-left">
						                     <ycommerce:testId code="addToCartButton">
						                        <input type="hidden" name="callingsourceinfo" value="<spring:theme code="callingsource.PDP" text="PDP page"/>"/>
						                        <input type="hidden" name="productCodePost" value="${fn:escapeXml(product.code)}"/>
						                        <input type="hidden" name="productNamePost" value="${fn:escapeXml(product.name)}"/>
						                        <input type="hidden" name="productPostPrice" value="${entry.netTotal}"/>
						                        <input type="hidden" maxlength="4" size="1" id="qty" name="qty" class="qty js-qty-selector-input" value="${updatedQuanity}">
						                        <button type="submit" onclick="ACC.product.addToCart(event, '${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')" class="primary-btn-bhge buy-button ">
						                           <span class="bhge-mcstore-icons icon-buy"></span>
						                           <span class="buy-btn-text"><spring:theme code="basket.buy.product" /></span>
						                        </button>
						                     </ycommerce:testId>
						                  </form:form>
						               </c:if>
									</div>
			            		</c:when>
			            		<c:when test="${(entry.isEngineeringHold eq true)}">
									<div class="buy-action pull-left p-r-25">
										<div class="pull-lefts bhge-pdp-error-box display-flex-justify-left m-t-40">
								   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
								   			<div class="bhge-inventory-err-msg text-left">
								            	Product is on a stop order
								         	</div>
							   			</div>
						   			</div>
								</c:when>
								<c:otherwise>
				               		<div class="buy-action pull-left p-r-25">
				               			<div class="product-action-links pdp-action-links">
						         			<a href="/contactus">
										    	<spring:theme code="bhge.products.customer.care"/>
										    </a>
									    </div>
									    <div class="product-info-upper text-danger p-0">
											<span> <spring:theme code="bh.product.pdp.details" text="Price is not available, contact customer care to buy."/> </span>
										</div>
					         		</div>
				               	</c:otherwise>
			            	</c:choose>

						</div>

						<div class="addCaseAccessoryText text-danger" style="display: none;">
		               		<spring:theme code="product.accessories.case.select" text="Select at least one Case Accessory"/>
		            	</div>

					</div>

					<div class="col-md-2 product-return-action-cell pdp-sticky-cells">
						<div class="pdp-actions">
							<div class="returns-action pull-left full-width">
								<c:if test="${product.productAccessData.isService}">
									<button type="button" class="full-width btn-blue returns-btn form-control" onclick="ACC.common.createRMA('${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')">
						            	<span class="bhge-mcstore-icons icon-return-button"></span>
						            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
						            </button>
						            <div class="service-offerings-text">
							            <c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
						          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
						          	  	</c:if>
						          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
						          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
						          	  	</c:if>
						          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
						          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
						          	  	</c:if>
						          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
						          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
						          	  	</c:if>
						          	  	<c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
							          		<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
							          	</c:if>
				          	  		</div>
								</c:if>
								<c:if test="${!product.productAccessData.isService}">
									<c:choose>
										<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
											<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control"  onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
												<span class="bhge-mcstore-icons icon-buy"></span>
									           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
									        </button>
									        <div class="product-info-upper return-text">
												<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
											</div>
										</c:when>
										<c:when test="${product.productAccessData.isobsolete}">
											<div class="product-action-links pdp-action-links">
												<a href="/contactus">
									           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
									        	</a>
											</div>
											<div class="product-info-upper return-text">
												<span><spring:theme code="bhge.products.return.obsolete" /></span>
											</div>
										</c:when>
										<c:otherwise>
											<div class="product-action-links pdp-action-links">
												<a href="/contactus">
									           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
									        	</a>
											</div>
											<div class="product-info-upper return-text full-width">
												<span class="product-info-overflow"><spring:theme code="bhge.products.cannot.return"/></span>
											</div>
										</c:otherwise>
									</c:choose>
								</c:if>
							</div>
		               </div>
					</div>

		         </c:forEach>
	      </c:when>

	       <c:when test="${product.productAccessData.isobsolete and !product.productAccessData.isBuy and !product.productAccessData.isService}">

	       <div class="col-md-6 catalog-info product-info-cell pdp-sticky-cells p-t-5 p-l-20">
		     	<div class="obsolete-cases bhge-pdp-error-box display-flex-justify-left">
		   			<span class="bhge-mcstore-icons icon-info-line pull-left"></span>
		   			<div class="bhge-inventory-err-msg text-left">
		            	<spring:theme code="bhge.products.buy.obsolete"/>
		         	</div>
	   			</div>
	   		</div>
	   		<div class="col-md-4 product-return-action-cell pdp-sticky-cells">
				<div class="pdp-actions">
					<div class="returns-action pull-left full-width">
						<c:if test="${!product.productAccessData.isService}">
							<c:choose>
								<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
									<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
										<span class="bhge-mcstore-icons icon-buy"></span>
							           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
							        </button>
							        <div class="product-info-upper return-text full-width">
										<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="product-action-links obsolete-case pdp-action-links">
										<a href="/contactus" class="m-t-18">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
								</c:otherwise>
							</c:choose>
						</c:if>
					</div>
				</div>
			</div>
	      </c:when>

	      <c:when test="${!product.productAccessData.isBuy and !product.productAccessData.isobsolete}">
	      	<div class="col-md-3 product-buy-action-cell pdp-sticky-cells p-t-15 p-l-10">
	      		<div class="buy-action pull-left p-r-25">
	      		<c:if test="${!product.productAccessData.isobsolete && (product.productAccessData.isCustomerBuy && (product.productAccessData.customerEcommerceFlag == 'E1' || product.productAccessData.customerEcommerceFlag == 'E2'))}">
         			<a href="#">
				    	<spring:theme code="bhge.products.customer.care"/>
				    </a>
				 </c:if>
         		</div>
	      	</div>
	      	<div class="col-md-2 product-return-action-cell pdp-sticky-cells">
				<div class="pdp-actions">
					<div class="returns-action pull-left full-width">
						<c:if test="${product.productAccessData.isService}">
							<button type="button" class="full-width btn-blue returns-btn form-control" onclick="ACC.common.createRMA('${fn:escapeXml(product.code)}', '${fn:escapeXml(product.name)}')">
				            	<span class="bhge-mcstore-icons icon-return-button"></span>
				            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
				            </button>
				            <div class="service-offerings-text">
				             	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV1')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.repair.text" text="Return"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV2')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.calibration.text" text="Calibration"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV3')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.upgrade.text" text="Upgrade"/></span>
				          	  	</c:if>
				          	  	<c:if test="${fn:containsIgnoreCase(product.productAccessData.availableServiceOfferingCodes, 'SRV4')}">
				          	  		<span class="return-btn-text"><spring:theme code="bhge.PDP.offering.text" text="Offering 4"/></span>
				          	  	</c:if>
				          	  	<c:if test="${not empty product.productAccessData.availableServiceOfferingCodes}" >
					          		<span class="return-btn-text"><spring:theme code="bhge.PDP.available.text" text="Available"/></span>
					          	</c:if>
				          	  </div>
						</c:if>
						<c:if test="${!product.productAccessData.isService}">
							<c:choose>
								<c:when test="${product.productAccessData.isServicePresentInOtherSalesArea}">
									<button type="button" class="pull-left switch-sales-area-btn secondary-btn-bhge form-control" onClick="ACC.common.switchSalesArea('${fn:escapeXml(product.code)}', '${product.url}' ,'return'); ">
										<span class="bhge-mcstore-icons icon-buy"></span>

							           	<span class="switch-sa-btn-text"><spring:theme code="bhge.product.check.sales" text="Switch M&C business"/></span>	
							        </button>
							        <div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.return.other.sales.area" /></span>
									</div>
								</c:when>
								<c:when test="${product.productAccessData.isobsolete}">
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.return.obsolete" /></span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="product-action-links pdp-action-links">
										<a href="/contactus">
							           		<spring:theme code="bhge.product.customer.care" text="Contact customer care"/>		
							        	</a>
									</div>
									<div class="product-info-upper return-text">
										<span><spring:theme code="bhge.products.cannot.return"/></span>
									</div>
								</c:otherwise>
							</c:choose>
						</c:if>
					</div>
	              </div>
			</div>
	      </c:when>
	   </c:choose>


	</sec:authorize>

	<sec:authorize access="hasAnyRole('ROLE_ANONYMOUS')">
		<div class="non-loggedin">
			<div class="col-md-4 product-name-cell pdp-sticky-cells p-l-25">
				<div class="part-detail">
					<span class="item__code--bhge">
							${fn:escapeXml(product.code)}
					</span>
				</div>
				<div class="part-detail m-t-5">
					<span class="item__name--bhge">
							${fn:escapeXml(product.name)}
					</span>
				</div>
			</div>

			<div class="col-md-3 product-quantity-cell pdp-sticky-cells">
				<div class="quantity">
			    	<label class="m-r-10 m-t-15">
			        	<spring:theme code="basket.page.cart.quantity" text="Qty" />
			      	</label>
			      	<div id="decreaseInvent" class="btn item__quantity--change js-product__quantity--change--decrease--bhge product_decrease p-0 m-t-10" ><span class="bhge-mcstore-icons icon-qty-minus"></span></div>
			      	<input id="quantity_0${product.code}" name="quantity" value="${updatedQuanity}" autocomplete="off" class="m-t-10 item__list--qty js-update-product-quantity-input--bhge"
				         onkeydown=" return isCheckValidQty(event)"
				         type="text"
				         oninput="setCustomValidity('')"
				         value="1"
				         size="1"
				         maxlength="4" placeholder="<spring:theme code="bhge.availbilityWidget.qty" text="Qty "/>" data-min="1" data-max="9999">
			      	<div id="increaseInvent" class="btn item__quantity--change js-product__quantity--change--increase--bhge  product_increase p-0 m-t-10" ><span class="bhge-mcstore-icons icon-qty-plus"></div>
			      	<label for="quantity_0${product.code}" class="m-r-10 m-t-15 m-l-10">
			      	   <b>
			        	    <c:choose>
			            		<c:when test="${product.uom eq 'Piece'}">
			                	  <spring:theme code="product.detail.unit.of.measure.value" text="Each :"/>
			               		</c:when>
			               		<c:otherwise>
			               	   		${product.uom}
			               		</c:otherwise>
			            	</c:choose>
			         	</b>
			      </label>
			   </div>
			</div>

		   	<div class="col-md-5 product-buy-ation-cell pdp-sticky-cells m-t-10">
		   		<div class="select-accessory addCaseAccessoryText pull-left m-r-10" style="display: none;">
		        	<button class="secondary-btn-bhge select-accessories-btn" onClick="BHGEaccessory.onSelectAccessoryClick()"><spring:theme code="product.detail.select.accessories" /></button>
		        	<div class="addCaseAccessoryText text-danger m-t-5" style="display: none;">
						<spring:theme code="product.accessories.case.select" text="Select at least one Case Accessory"/>
					</div>
		        </div>
		        <c:if test="${filter !='RETURN' and product.isAnonymousBuy and (product.hybrisStatus eq 'SELLANDRETURN' or product.hybrisStatus eq 'SELL' or product.hybrisStatus eq 'CATALOG' or product.hybrisStatus eq 'OBSOLETE')}">
		   		<form:form id="addToCartForm${product.code}" action="${addToCartUrl}" method="post" class="add_to_cart_form">
	      <ycommerce:testId code="addToCartButton">
	         <input type="hidden" name="productCodePost" value="${fn:escapeXml(product.code)}"/>
	         <input type="hidden" name="productNamePost" value="${fn:escapeXml(product.name)}"/>
	         <input type="hidden" name="productPostPrice" value="${entry.netTotal}"/>
	         <input type="hidden" maxlength="4" size="1" id="qty" name="qty" class="qty js-qty-selector-input" value="1">
	         <button type="submit" onclick="ACC.product.bindToAddToCartForm()" style="color: #00bf6f;width: 200px" class="inventory-check-cart-btn primary-btn-bhge pull-left inventory-check-btn">
	           	<span class="bhge-mcstore-icons icon-buy"></span>
	            <spring:theme code="basket.add.to.basket" />
	         </button>
	      </ycommerce:testId>
	   </form:form>
	   </c:if>
	   <c:if test="${filter !='BUY' and product.hybrisStatus eq 'SELLANDRETURN' or product.hybrisStatus eq 'RETURN'}">
	   <button type="button" class="btn-blue returns-btn form-control m-t-15 m-l-20 pull-left" onclick='ACC.common.rmaGuestProductLogin("${fn:escapeXml(product.code)}");' style="width: 200px; height: 40px;">
				            	<span class="bhge-mcstore-icons icon-return-button"></span>
				            	<span class="return-btn-text"><spring:theme code="bhge.product.check.return" text="Return"/></span>
				 </button>		
		</c:if>
		   	</div>
		
		</div>		
	   
	</sec:authorize>

</div>


