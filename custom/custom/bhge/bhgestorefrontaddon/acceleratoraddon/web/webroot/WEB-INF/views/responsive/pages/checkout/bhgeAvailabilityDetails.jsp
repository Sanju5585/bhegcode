TEST1
<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="template" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/template" %>
<%@ taglib prefix="cart" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/cart" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="theme" tagdir="/WEB-INF/tags/shared/theme" %>
<%@ taglib prefix="format" tagdir="/WEB-INF/tags/shared/format" %>
<%@ taglib prefix="common" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/common" %>
<%@ taglib prefix="breadcrumb" tagdir="/WEB-INF/tags/desktop/nav/breadcrumb" %>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="user" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/user" %>

<%-- <c:choose>
<c:when test="${cartData.isShipCompleteOrder eq false}">
	<c:forEach items="${cartData.entries}" var="entry">
		<tr class="even geTr" role="row">
		   <td><!--<i class="single-select-tick icon-check-empty" data-select="true"></i>-->
		   <input id="${entry.product.code}" name="${entry.entryNumber}" class="gecheckbox" onchange="uncheckRoot(this)" name="productCheckbox" id="productCheckbox" type="checkbox">
		    </td>
		    <td>
				<div class="">	
					<h4><a href="/p/${entry.product.code}?categoryCode=${entry.product.parentCategoryCode}" class="show-product-dt productDtPopup" data-popbox="modal${entry.product.code}" target="_blank">${entry.product.code}</a></h4>
					<p >${entry.product.name}</p>
			  
				   <label class="mar-0"><spring:theme code="cart.productDesription" text="Product Description"/></label>
				   <p class="prod-descrip mar-0 color-grey">
						${entry.product.description}
				   </p>
				   <c:if test="${fn:length(entry.product.description) gt 60}">
				   <a href="#" class="product-descrip-more more mar-btm-10 "></a> </c:if>
				   <div class="clearfix"></div>
				   
				   configure link
					<c:if test="${entry.getProduct().configurable}">
					<spring:url	value="${entry.itemPK}/ ${entry.product.code} /configCartEntry"	var="configUrl"></spring:url>
					<a href="${configUrl}" class="btn pull-left btn-info active mar-right-5"><spring:theme code="cart.reconfigure" text="Reconfigure"/></a>
					</c:if>
					
					<button  class="btn pull-left singleDelete cartItemRemovalBtn"><spring:theme code="product.review.page.remove.text" text="Remove"/></button>
					
					
				</div>
		   </td>
		   <td>
		   		<div class="col-lg-11 col-sm-12 col-md-12 pad-0">
			   		<label class="col-xs-6  col-sm-8 col-lg-9 col-md-8  pad-0">
			   			<spring:theme code="cart.listPrice" text="List Price"/>:&nbsp;
			   		</label>
			   		<label class="col-xs-6  col-lg-3  col-md-4 col-sm-4   pad-0">${currencyISO}<span class="text-right pull-right">&nbsp;${currencyFormattedValue} <format:price priceData="${entry.basePrice}" displayFreeForZero="true"/></span></label>
			   		<div class="clearfix"></div>
					<div class="border-top"></div>
					
					<c:set var="discPrice">
						${entry.discountPrice}
					</c:set>
					
					<c:choose>
	                     		<c:when test="${!discPrice.matches('[0-9]*.?[0-9]+$')}">
	                     			<label> <span class ="clrRed">${DiscountNotAvailable}</span></label>
						</c:when>
						<c:when test="${entry.yourPriceDiscount.value <= 0}">
	                     			<label><span class ="clrRed">${DiscountNotAvailable}</span></label>
						</c:when>
						<c:otherwise>
							<label class="col-xs-6  col-sm-8 col-lg-9 col-md-8  pad-0">
								<spring:theme code="cart.yourPrice" text="Your Price Discount"/>
								<c:choose>
									<c:when test="${not empty entry.discountPercentage}">
										&nbsp;(${entry.discountPercentage}&nbsp;<spring:theme code="cart.disc.percentage.message" text="% Discount on LP"/>):&nbsp; 
									</c:when>
									<c:otherwise>	
										&nbsp;(0.00&nbsp;<spring:theme code="cart.disc.percentage.message" text="% Discount on LP"/>):&nbsp;
									</c:otherwise>
								</c:choose>
							</label>
							<label class="col-xs-6  col-lg-3  col-md-4 col-sm-4 pad-0">${currencyISO} <span class="text-right pull-right">&nbsp;${entry.yourPriceDiscount.value > 0?"-":""}${currencyFormattedValue}
							<format:price priceData="${entry.yourPriceDiscount}" displayFreeForZero="false"/></span></label>
						</c:otherwise>
					</c:choose>
					<div class="clearfix"></div>
					
					<c:if test="${fn:length(cartData.appliedCouponCodes) gt 0 && entry.couponDiscount != null && entry.couponDiscount.doubleValue() != 0.0}">
					<label class="col-xs-6  col-sm-8 col-lg-9 col-md-8  pad-0"> <spring:theme code="order.confirmation.couponDiscount" text="Coupon Discount"/>
						<c:choose>
								 <c:when test="${entry.couponDiscountPercentage != null}">
								 	(${entry.couponDiscountPercentage}% on ${entry.isListprice?"List Price":"Your Price"}):
								 </c:when>
						</c:choose>
					</label>
					<label class="col-xs-6  col-lg-3  col-md-4 col-sm-4 pad-0">${currencyISO}<span class="text-right pull-right">&nbsp;-${currencyFormattedValue}
							<fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${entry.couponDiscount}" /></span></label>
					</c:if>
					<div class="clearfix"></div>
					<c:if test="${entry.isSameDayShipChecked}">
						<label class="col-xs-6  col-sm-8 col-lg-9 col-md-8  pad-0"><spring:theme code="sds.sameDayPrice" text="Same day shipment"/>:&nbsp;
						</label>
						<label class="col-xs-6  col-lg-3  col-md-4 col-sm-4 pad-0">${currencyISO}<span class="text-right pull-right">&nbsp;${currencyFormattedValue}
						<fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${entry.shipmentCost}" /></span></label>
					</c:if>
					<div class="clearfix"></div>
					
					<div class="border-top"></div>
					<label class="col-xs-6  col-sm-8 col-lg-9 col-md-8   pad-0 font-bold"><spring:theme code="order.confirmation.netTotal" text="Selling Price"/>:</label>
					<label class="col-xs-6  col-lg-3  col-md-4 col-sm-4 pad-0 font-bold">${currencyISO}<span class="text-right pull-right">&nbsp;${currencyFormattedValue}
							<fmt:formatNumber minFractionDigits="2" maxFractionDigits="2" value="${entry.netTotal}" /></span></label>
				</div>
		   </td>
		   <td>
				 <form class="updateCartForm" id="updateCartForm${entry.entryNumber}" action="/cart/update" method="post">
				 <input type="hidden" name="entryNumber" value="${entry.entryNumber}"/>
				  <input type="hidden" name="productCode" value="${entry.product.code}"/>
				  <input type="hidden" name="initialQuantity" value="${entry.quantity}"/>
					<div class="input-group qtyComponent mar-btm-10">
					  <span class="input-group-btn">
						<button class="btn btn-default minus" type="button">-</button>
					  </span>
					  <input type="text" class="form-control qtyInputField text-center orderQuantity qty-input numeric-validate pad-5 mar-0 white-bg" id="quantity" maxlength="3" name="quantity" value="${entry.quantity}"  placeholder="">
					  <span class="input-group-btn">
						<button class="btn btn-default plus" type="button">+</button>
					  </span>
					</div>
				<div class="clearfix"></div>
				<div><a href="#" class="hide qtyUpdate"><spring:theme code="cart.update" text="Update"/></a>&nbsp;</div></form>
		   </td>
		   <td class="multiPlantTableTd multiPlantTd${entry.entryNumber}">
		   		<div class="availabilitySection${entry.entryNumber}">
					<c:choose>
	           			<c:when test="${(entry.isDuplicateLine eq false)}">	
	           				<c:choose>
	            				<c:when test="${(entry.isEngineeringHold eq true)}">
	            					<span class="dateDetail">
	            					<c:if test="${not empty EngineeringHold}"><spring:theme code="Engineering.Hold" text="Product is currently on a stop order. Ship date will be provided by customer care after order submission."/></c:if>
	            					</span>
	            				</c:when>
	            				<c:otherwise>
	            					<c:forEach items="${entry.estimatedShipDates}" var="date">
	            						<c:choose>
										<c:when test="${(date eq 'No estimate available')}">
											<span class="dateDetail clrRed">
												<spring:theme code="cart.items.tag.estShipDate" text="Est. Ship Date"/>:&nbsp;
												${date}&nbsp;(<spring:theme code="cart.qty" text="Qty"/>&nbsp;${entry.quantity})
											</span>
										</c:when>
										<c:otherwise>
											<span class="dateDetail">
												<spring:theme code="cart.items.tag.estShipDate" text="Est. Ship Date"/>:&nbsp;
												<c:set var="estShipDateVal" value="${fn:split(date, ' ')}" />
												<c:choose>
													<c:when test="${not empty estShipDateVal && fn:length(estShipDateVal) > 1
																		&& estShipDateVal[1] eq '01-Jan-2100'}">
														<spring:theme code="cart.estimatedshipdate.notavailable.message1" text="No estimate available"/>
														&nbsp;(<spring:theme code="cart.qty" text="Qty"/>&nbsp;${estShipDateVal[0]})
													</c:when>
													<c:when test="${not empty estShipDateVal && fn:length(estShipDateVal) > 1}">
														${estShipDateVal[1]}&nbsp;(<spring:theme code="cart.qty" text="Qty"/>&nbsp;${estShipDateVal[0]})
													</c:when>																
												</c:choose>
												
											</span><br/>
										</c:otherwise>
									</c:choose>
								</c:forEach>
	           					</c:otherwise>
	     									</c:choose>
	     							
	     								<c:if test="${fn:length(entry.estimatedShipDates) > 1}">
					   		<div class="alert alert-warning mar-top-10 mar-bottom-10">
	          									 <i class="icon-warning-sign color-orange"></i><span class="color-orange mar-left-4">
									<spring:theme code="cart.split.availability.message" text="To request partial shipments of this product,  please order this product as multiple lines in the shopping cart." />
								</span>
							</div>
						</c:if>
	           			</c:when>
	           			<c:otherwise>
	           				<span class="dateDetail clrRed"><spring:theme code="cart.items.tag.estShipDate" text="Est. Ship Date"/>:&nbsp;
								<spring:theme code="cart.estimatedshipdate.notavailable.message1" text="No Estimate Available"/>&nbsp;(<spring:theme code="cart.qty" text="Qty"/>&nbsp;${entry.quantity})
							</span>
	           			</c:otherwise>
	           		</c:choose>
					
	     								<c:if test="${not empty entry.availabilityDetails && fn:length(entry.availabilityDetails) > 0}">
	     									<c:forEach items="${entry.availabilityDetails}" var="availabilityDetail" varStatus="i">
	     										<c:if test="${not empty availabilityDetail && availabilityDetail.isDefaultPlant eq true}">
	     											<c:set var="defaultPlantForEntry" value="${availabilityDetail.plant}" />
	     										</c:if>
	     									</c:forEach>
	     								</c:if>
	     								
	     								<c:choose>
							<c:when test="${entry.isDuplicateLine eq false}">
								<c:set var="hideElement" value="" />
							</c:when>
							<c:otherwise>
								<c:set var="hideElement" value="hide" />
							</c:otherwise>
						</c:choose>
	     								
	     								
	     								<c:if test="${not empty entry.plant}">
	     									<div class="clearfix mar-top-10"></div>
	     									<p class="mar-0 ${hideElement}"><spring:theme code="order.confirmation.availMultiple" text="Availability from multiple warehouses"/></p>
	     								</c:if>
	     								
	      							<div class="row mar-0 multiplePlantDiv ${hideElement}">
					  		<c:if test="${not empty entry.plant}">
								<div class="checkbox   pad-0 mar-0 ">
									<label class="col-lg-12 col-xs-12  col-sm-12 col-md-12 border-btm pad-0"><span class=" font-bold"><spring:theme code="cart.plant" text="Warehouse"/></span><span class="font-bold pull-right"><spring:theme code="cart.inventory" text="Inventory"/></span></label>
									<div class="clearfix"></div>
									
									<c:choose>
										<c:when test="${not empty defaultPlantForEntry && defaultPlantForEntry == entry.plant}">
											<label class="col-lg-12 col-sm-12  col-md-12 pad-0 col-xs-12 defaultPlant border-btm" data-toggle="tooltip" data-placement="bottom" title="" data-original-title='<spring:theme code="cart.warehouse.message" text="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."/>'
												data-content='<spring:theme code="cart.warehouse.message" text="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."/>'>
										</c:when>
										<c:otherwise>
											<label class="col-lg-12 col-sm-12 pad-0 col-md-12 col-xs-12  border-btm">
										</c:otherwise>
									</c:choose>
									
									  <input class="defaultPlantValue pull-left" type="radio" name="defaultPlant[${entry.entryNumber}]" checked="checked" 
									  		data-entrynumber="${entry.entryNumber}" value="${entry.plant}">
									  		<span class="mar-left-4 plantName">
									  			<c:choose>
									  				<c:when test="${not empty entry.plantName}">
									  					${entry.plantName}
									  				</c:when>
									  				<c:otherwise>
									  					${entry.plant}		
									  				</c:otherwise>
									  			</c:choose>
									  			
									  			<c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == entry.plant}">
										  			&nbsp;(<spring:theme code="order.summary.default" text="Default"/>)
										  		</c:if>
										  	</span>
									  <span class="pull-right  mar-left-20">:&nbsp;${entry.availableQuantity}</span>
									</label>
								</div>
								<div class="clearfix"></div>
							</c:if>
							
							<div class="stockDetailsForEntry" id="stockDetailsForEntry${entry.entryNumber}">
								<c:if test="${not empty entry.stockDetails}">
									<c:forEach items="${entry.stockDetails}" var="stockDetail" varStatus="i">
										<c:if test="${entry.plant != stockDetail.plant}">
											<div class="checkbox pad-0 mar-0 hide multiplePlants">
												
												<c:choose>
													<c:when test="${not empty defaultPlantForEntry && defaultPlantForEntry == stockDetail.plant}">
														<label class="col-lg-12 col-sm-12  col-md-12 pad-0 col-xs-12 defaultPlant border-btm" data-toggle="tooltip" data-placement="bottom" title="" data-original-title='<spring:theme code="cart.warehouse.message" text="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."/>'
																data-content='<spring:theme code="cart.warehouse.message" text="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."/>'>
													</c:when>
													<c:otherwise>
														<label class="col-lg-12 col-sm-12 pad-0 col-md-12 col-xs-12  border-btm">
													</c:otherwise>
												</c:choose>
									
												  <input class="defaultPlantValue pull-left" type="radio" name="defaultPlant[${entry.entryNumber}]" 
												  		data-entrynumber="${entry.entryNumber}" value="${stockDetail.plant}">
												  		<span class="mar-left-4 plantName">
												  			<c:choose>
												  				<c:when test="${not empty stockDetail.plantName}">
												  					${stockDetail.plantName}
												  				</c:when>
												  				<c:otherwise>
												  					${stockDetail.plant}		
												  				</c:otherwise>
												  			</c:choose>
												  		
												  			<c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == stockDetail.plant}">
													  			&nbsp;(<spring:theme code="order.summary.default" text="Default"/>)
													  		</c:if>
												  		</span>
												  <span class="pull-right mar-left-20">:&nbsp;${stockDetail.actualStockQty}</span>
												</label>
											</div>
										</c:if>
										<div class="clearfix"></div>
									</c:forEach>
								</c:if>
							</div>
						</div>
						<c:if test="${not empty entry.stockDetails && fn:length(entry.stockDetails) > 1}">
							<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 pad-0 mar-0 ${hideElement}">
								<a class="pull-right showMultPlants cur-point" data-entrynumber="${entry.entryNumber}" data-hide="true">>&nbsp;<spring:theme code="cart.alternatives" text="Alternatives"/></a>
							</div>
							<div class="clearfix"></div>
						</c:if>
					</div>
					
					<div class="requiredDateShow hide col-lg-7 col-sm-4 col-md-12 col-xs-8 pad-0">
						<label><spring:theme code="cart.RDD" text="Requested Delivery Date"/></label>
						<div class="input-group">
							<input readonly="readonly" id="reqDelDateItem[${entry.entryNumber}]" data-provide="datepicker" name="requiredDeliveryDateItem[${entry.entryNumber}]" value="<fmt:formatDate value="${entry.requestedDeliveryDate}" pattern="dd-MMM-yyyy"/>" class="form-control rdd-datepicker" type="text">
							<span class="input-group-addon calendarFrom"><i class="icon-calendar  color-grey"></i></span>
						</div> 
					</div>
					
					<div class="clearfix"></div>
					<label class="mar-0"><spring:theme code="checkout.order.details.note" text="Note"/>:<i rel="popover" data-content='<spring:theme code="cart.notes.txt" text="If you have any special instructions for our shipping team for this item, please enter it here."/>' 
							data-placement="bottom" class="icon-info-sign  ship-info color-grey" data-html="true" data-original-title="" title=""></i>
					</label>
					<div class="clearfix"></div>
					<textarea name="notes[${entry.entryNumber}]" class="col-lg-8 white-bg notes${entry.entryNumber}">${entry.entryNotes}</textarea>
		   </td>
		</tr>
	</c:forEach>
</c:when>

<c:when test="${cartData.isShipCompleteOrder eq true}">
	<c:if test="${not empty cartData && not empty cartData.entries}">
		<c:forEach items="${cartData.entries}" var="entry">
			<c:if test="${not empty entry && entry.entryNumber == entryNumber}">
				<c:choose>
					<c:when test="${(entry.isEngineeringHold eq true)}">
						<span class="dateDetail">${EngineeringHold}</span>
					</c:when>
					<c:otherwise>
	       				<c:forEach items="${entry.estimatedShipDates}" var="date">
	          				<c:choose>
								<c:when test="${(date eq 'No estimate available')}">
									<span class="dateDetail clrRed">
										<spring:theme code="cart.items.tag.estShipDate" text="Est. Ship Date"/>:&nbsp;
										${date}&nbsp;(<spring:theme code="cart.qty" text="Qty"/>&nbsp;${entry.quantity})
									</span>
								</c:when>
								<c:otherwise>
									<span class="dateDetail">
										<spring:theme code="cart.items.tag.estShipDate" text="Est. Ship Date"/>:&nbsp;
										<c:set var="estShipDateVal" value="${fn:split(date, ' ')}" />
										<c:choose>
											<c:when test="${not empty estShipDateVal && fn:length(estShipDateVal) > 1
																&& estShipDateVal[1] eq '01-Jan-2100'}">
												<spring:theme code="cart.estimatedshipdate.notavailable.message1" text="No estimate available"/>
												&nbsp;(<spring:theme code="cart.qty" text="Qty"/>&nbsp;${estShipDateVal[0]})
											</c:when>
											<c:when test="${not empty estShipDateVal && fn:length(estShipDateVal) > 1}">
												${estShipDateVal[1]}&nbsp;(<spring:theme code="cart.qty" text="Qty"/>&nbsp;${estShipDateVal[0]})
											</c:when>																
										</c:choose>
										
									</span><br/>
								</c:otherwise>
							</c:choose>
						</c:forEach>
	      			</c:otherwise>
			  	</c:choose>
			  	
			  	<c:if test="${not empty entry.availabilityDetails && fn:length(entry.availabilityDetails) > 0}">
					<c:forEach items="${entry.availabilityDetails}" var="availabilityDetail" varStatus="i">
						<c:if test="${not empty availabilityDetail && availabilityDetail.isDefaultPlant eq true}">
							<c:set var="defaultPlantForEntry" value="${availabilityDetail.plant}" />
						</c:if>
					</c:forEach>
				</c:if>
	          	
	          	<c:if test="${fn:length(entry.estimatedShipDates) > 1}">
			   		<div class="alert alert-warning mar-top-10 mar-bottom-10">
	        				<i class="icon-warning-sign color-orange"></i><span class="color-orange mar-left-4">
							<spring:theme code="cart.split.availability.message" text="To request partial shipments of this product,  please order this product as multiple lines in the shopping cart." />
						</span>
					</div>
				</c:if>
																		
				<c:if test="${not empty entry.plant}">
					<div class="clearfix mar-top-10"></div>
					<p class="mar-0"><spring:theme code="order.confirmation.availMultiple" text="Availability from multiple plants"/></p>
				</c:if>
			  								
			   	<div class="row mar-0 multiplePlantDiv font-size-14">
			  		<c:if test="${not empty entry.plant}">
						<div class="checkbox   pad-0 mar-0 ">
							<label class="col-lg-12 col-xs-11  col-sm-12 col-md-12 border-btm pad-0"><span class=" font-bold"><spring:theme code="cart.plant" text="Warehouse"/></span><span class="font-bold pull-right"><spring:theme code="cart.inventory" text="Inventory"/></span></label>
							<div class="clearfix"></div>
							
							<c:choose>
								<c:when test="${not empty defaultPlantForEntry && defaultPlantForEntry == entry.plant}">
									<label class="col-lg-12 col-sm-12  col-md-12 pad-0 col-xs-12 defaultPlant border-btm" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."
											data-content="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product.">
								</c:when>
								<c:otherwise>
									<label class="col-lg-12 col-sm-12 pad-0 col-md-12 col-xs-12  border-btm">
								</c:otherwise>
							</c:choose>
														
							  <input class="defaultPlantValue pull-left" type="radio" name="defaultPlant[${entry.entryNumber}]" checked="checked" 
							  		data-entrynumber="${entry.entryNumber}" value="${entry.plant}">
							  		<span class="mar-left-4">
							  		
							  			<c:choose>
							  				<c:when test="${not empty entry.plantName}">
							  					${entry.plantName}
							  				</c:when>
							  				<c:otherwise>
							  					${entry.plant}		
							  				</c:otherwise>
							  			</c:choose>
							  			
							  			<c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == entry.plant}">
								  			&nbsp;(<spring:theme code="order.summary.default" text="Default"/>)
								  		</c:if>
								  	</span>
							  <span class="pull-right  mar-left-20">:&nbsp;${entry.availableQuantity}</span>
							</label>
						</div>
						<div class="clearfix"></div>
					</c:if>
					
					<div class="stockDetailsForEntry" id="stockDetailsForEntry${entry.entryNumber}">
						<c:if test="${not empty entry.stockDetails}">
							<c:forEach items="${entry.stockDetails}" var="stockDetail" varStatus="i">
								<c:if test="${entry.plant != stockDetail.plant}">
									<div class="checkbox pad-0 mar-0 hide multiplePlants">
										
										<c:choose>
											<c:when test="${not empty defaultPlantForEntry && defaultPlantForEntry == stockDetail.plant}">
												<label class="col-lg-12 col-sm-12  col-md-12 pad-0 col-xs-12 defaultPlant border-btm" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."
														data-content="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product.">
											</c:when>
											<c:otherwise>
												<label class="col-lg-12 col-sm-12 pad-0 col-md-12 col-xs-12  border-btm">
											</c:otherwise>
										</c:choose>
										
										  <input class="defaultPlantValue pull-left" type="radio" name="defaultPlant[${entry.entryNumber}]" 
										  		data-entrynumber="${entry.entryNumber}" value="${stockDetail.plant}">
										  		<span class="mar-left-4">
										  		
										  			<c:choose>
										  				<c:when test="${not empty stockDetail.plantName}">
										  					${stockDetail.plantName}
										  				</c:when>
										  				<c:otherwise>
										  					${stockDetail.plant}		
										  				</c:otherwise>
										  			</c:choose>
							  			
										  			<c:if test="${not empty defaultPlantForEntry && defaultPlantForEntry == stockDetail.plant}">
											  			&nbsp;(<spring:theme code="order.summary.default" text="Default"/>)
											  		</c:if>
										  		</span>
										  <span class="pull-right mar-left-20">:&nbsp;${stockDetail.actualStockQty}</span>
										</label>
									</div>
								</c:if>
								<div class="clearfix"></div>
							</c:forEach>
						</c:if>
					</div>
				</div>
					
				<c:if test="${not empty entry.stockDetails && fn:length(entry.stockDetails) > 1}">
					<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 pad-0 mar-0">
						<a class="pull-right showMultPlants cur-point" data-entrynumber="${entry.entryNumber}" data-hide="true">>&nbsp;<spring:theme code="cart.alternatives" text="Alternatives"/></a>
					</div>
					<div class="clearfix"></div>
				</c:if>
							
			</c:if>
		</c:forEach>
	</c:if>
</c:when>
</c:choose> --%>

<c:if test="${not empty cartData && not empty cartData.entries}">
	<c:forEach items="${cartData.entries}" var="entry">
		<c:if test="${not empty entry && entry.entryNumber == entryNumber}">
			<div class="availabilitySection${entry.entryNumber} marTL10 availabilitySec" data-entryNumber="${entry.entryNumber}">
													<!-- Availability Starts -->
													
													<c:choose>
														<c:when test="${entry.productType=='ITFILM'}">
															<span class="hide availabilityFilmSec"></span>										
														</c:when>
														<c:otherwise>
															<span class="hide availabilityNonFilmSec"></span>										
														</c:otherwise>
													</c:choose>
													
													<c:if
														test="${not empty entry.availabilityDetails && fn:length(entry.availabilityDetails) > 0}">
														<c:forEach items="${entry.availabilityDetails}"
															var="availabilityDetail" varStatus="i">
															<c:if
																test="${not empty availabilityDetail && availabilityDetail.isDefaultPlant eq true}">
																<c:set var="defaultPlantForEntry"
																	value="${availabilityDetail.plant}" />
															</c:if>
														</c:forEach>
													</c:if>
													<c:choose>
														<c:when test="${entry.isDuplicateLine eq false}">
															<c:set var="hideElement" value="" />
														</c:when>
														<c:otherwise>
															<c:set var="hideElement" value="hide" />
														</c:otherwise>
													</c:choose>
													<c:if test="${not empty entry.plant}">
														<div class="clearfix mar-top-10"></div>
														<p class="mar-0 ${hideElement} font-bold">
															<spring:theme code="order.confirmation.availMultiple"
																text="Availability from multiple warehouses" />
														</p>
													</c:if>
													<div class="row mar-0 multiplePlantDiv ${hideElement}">
														<c:if test="${not empty entry.plant}">
															<div class="checkbox   pad-0 mar-0 ">
																<label
																	class="col-lg-10 col-xs-12  col-sm-12 col-md-12 border-btm pad-0"><span
																	class=" font-bold"><spring:theme
																			code="cart.plant" text="Warehouse" /></span><span
																	class="font-bold pull-right"><spring:theme
																			code="cart.inventory" text="Inventory" /></span></label>
																<div class="clearfix"></div>
																<c:choose>
																	<c:when
																		test="${not empty defaultPlantForEntry && defaultPlantForEntry == entry.plant}">
																		<label
																			class="col-lg-10 col-sm-12  col-md-12 pad-0 col-xs-12 defaultPlant border-btm"
																			data-toggle="tooltip" data-placement="bottom"
																			title=""
																			data-original-title='<spring:theme code="cart.warehouse.message" text="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."/>'
																			data-content='<spring:theme code="cart.warehouse.message" text="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."/>'>
																	</c:when>
																	<c:otherwise>
																		<label
																			class="col-lg-10 col-sm-12 pad-0 col-md-12 col-xs-12  border-btm">
																	</c:otherwise>
																</c:choose>
																<input class="defaultPlantValue pull-left" type="radio"
																	name="defaultPlant[${entry.entryNumber}]"
																	checked="checked"
																	data-entrynumber="${entry.entryNumber}"
																	value="${entry.plant}"> <span
																	class="mar-left-4 plantName"> <c:choose>
																		<c:when test="${not empty entry.plantName}">
														  					${entry.plantName}
														  				</c:when>
																		<c:otherwise>
														  					${entry.plant}		
														  				</c:otherwise>
																	</c:choose> <c:if
																		test="${not empty defaultPlantForEntry && defaultPlantForEntry == entry.plant}">
															  			&nbsp;(<spring:theme code="order.summary.default"
																			text="Default" />)
															  		</c:if>
																</span> <span class="pull-right  mar-left-20">:&nbsp;${entry.availableQuantity}</span>
																</label>
															</div>
															<div class="clearfix"></div>
														</c:if>
														<div class="stockDetailsForEntry"
															id="stockDetailsForEntry${entry.entryNumber}">
															<c:if test="${not empty entry.stockDetails}">
																<c:forEach items="${entry.stockDetails}"
																	var="stockDetail" varStatus="i">
																	<c:if test="${entry.plant != stockDetail.plant}">
																		<div class="checkbox pad-0 mar-0 hide multiplePlants">
																			<c:choose>
																				<c:when
																					test="${not empty defaultPlantForEntry && defaultPlantForEntry == stockDetail.plant}">
																					<label
																						class="col-lg-10 col-sm-12  col-md-12 pad-0 col-xs-12 defaultPlant border-btm"
																						data-toggle="tooltip" data-placement="bottom"
																						title=""
																						data-original-title='<spring:theme code="cart.warehouse.message" text="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."/>'
																						data-content='<spring:theme code="cart.warehouse.message" text="This is the default warehouse for this product. Click Alternatives to see additional warehouses available for this product."/>'>
																				</c:when>
																				<c:otherwise>
																					<label
																						class="col-lg-10 col-sm-12 pad-0 col-md-12 col-xs-12  border-btm">
																				</c:otherwise>
																			</c:choose>
																			<input class="defaultPlantValue pull-left"
																				type="radio"
																				name="defaultPlant[${entry.entryNumber}]"
																				data-entrynumber="${entry.entryNumber}"
																				value="${stockDetail.plant}"> <span
																				class="mar-left-4 plantName"> <c:choose>
																					<c:when test="${not empty stockDetail.plantName}">
																	  					${stockDetail.plantName}
																	  				</c:when>
																					<c:otherwise>
																	  					${stockDetail.plant}		
																	  				</c:otherwise>
																				</c:choose> <c:if
																					test="${not empty defaultPlantForEntry && defaultPlantForEntry == stockDetail.plant}">
																		  			&nbsp;(<spring:theme code="order.summary.default"
																						text="Default" />)
																		  		</c:if>
																			</span> <span class="pull-right mar-left-20">:&nbsp;${stockDetail.actualStockQty}</span>
																			</label>
																		</div>
																	</c:if>
																	<div class="clearfix"></div>
																</c:forEach>
															</c:if>
														</div>
													</div>
													<c:if
														test="${not empty entry.stockDetails && fn:length(entry.stockDetails) > 1}">
														<div
															class="col-lg-10 col-sm-12 col-md-12 col-xs-12 pad-0 mar-0 ${hideElement}">
															<a class="pull-right showMultPlants cur-point hand"
																data-entrynumber="${entry.entryNumber}" data-hide="true">>&nbsp;<spring:theme
																	code="cart.alternatives" text="Alternatives" /></a>
														</div>
														<div class="clearfix"></div>
													</c:if>
													<!-- Availability Ends -->
												
												
												<div class="mar-top-10"></div>
												<div class="col-lg-12 col-xs-12 pad-0 marTL10">
													<h4>
														<span class="font-bold"><spring:theme
																code="cart.right.nav.estShipDate"
																text="Estimated Shipment Date:" /></span><i
															class="mar-left-4 icon-warning-sign color-orange" rel="tooltip" data-toggle="tooltip" data-placement="bottom" 
															data-original-title='<spring:theme code="right.section.estShipDate" text="This gives our earliest estimate of when the product can ship.  If you do NOT enter a Requested Ship Date, it may be scheduled up to 5 days after this Estimated date, to fit our best shipping schedule."/>'></i>
													</h4>
													<!-- Estimated Date Changes Starts -->
													<c:choose>
														<c:when test="${(entry.isDuplicateLine eq false)}">
															<c:choose>
																<c:when test="${(entry.isEngineeringHold eq true)}">
																	<span id="est-shipdate" class="dateDetail"> <c:if
																			test="${not empty EngineeringHold}">
																			<spring:theme code="Engineering.Hold"
																				text="Product is currently on a stop order. Ship date will be provided by customer care after order submission." />
																		</c:if>
																	</span>
																</c:when>
																<c:otherwise>
																	<c:forEach items="${entry.estimatedShipDates}"
																		var="date">
																		<c:choose>
																			<c:when test="${(date eq 'No estimate available')}">
																				<span id="est-shipdate" class="dateDetail clrRed"> <spring:theme
																						code="cart.items.tag.estShipDate"
																						text="Est. Ship Date" />:&nbsp;<spring:theme code="cart.estimatedshipdate.notavailable.message2" text="Customer care team will need to confirm availability"/>&nbsp;(<spring:theme
																						code="cart.qty" text="Qty" />&nbsp;${entry.quantity})
																				</span>
																			</c:when>
																			<c:otherwise>
																				<span id="est-shipdate" class="dateDetail"> <spring:theme
																						code="cart.items.tag.estShipDate"
																						text="Est. Ship Date" />:&nbsp; <c:set
																						var="estShipDateVal"
																						value="${fn:split(date, ' ')}" /> <c:choose>
																						<c:when
																							test="${not empty estShipDateVal && fn:length(estShipDateVal) > 1
																							&& estShipDateVal[1] eq '01-Jan-2100'}">
																							<p class="font-bold">
																							<spring:theme code="cart.estimatedshipdate.notavailable.message2" text="Customer care team will need to confirm availability"/>
																			&nbsp;(<spring:theme code="cart.qty" text="Qty" />&nbsp;${estShipDateVal[0]})</p>
																		</c:when>
																						<c:when
																							test="${not empty estShipDateVal && fn:length(estShipDateVal) > 1}">
																			${estShipDateVal[1]}&nbsp;(<spring:theme
																								code="cart.qty" text="Qty" />&nbsp;${estShipDateVal[0]})
																		</c:when>
																					</c:choose>
																				</span>
																				<br />
																			</c:otherwise>
																		</c:choose>
																	</c:forEach>
																</c:otherwise>
															</c:choose>
<%-- 															<c:if test="${fn:length(entry.estimatedShipDates) > 1}"> 
																<div
																	class="alert alert-warning mar-top-10 mar-bottom-10">
																	<i class="icon-warning-sign color-orange"></i><span
																		class="color-orange mar-left-4"> <spring:theme
																			code="cart.split.availability.message"
																			text="To request partial shipments of this product,  please order this product as multiple lines in the shopping cart." />
																	</span>
																</div>
															</c:if>--%>
														</c:when>
														<c:otherwise>
															<span id="est-shipdate" class="dateDetail clrRed"><spring:theme
																	code="cart.items.tag.estShipDate" text="Est. Ship Date" />:&nbsp;
																<p class="font-bold">
																<spring:theme
																	code="cart.estimatedshipdate.notavailable.message1"
																	text="No Estimate Available" />&nbsp;(<spring:theme
																	code="cart.qty" text="Qty" />&nbsp;${entry.quantity})
																</p>
															</span>
														</c:otherwise>
													</c:choose>
													<!-- Estimated Date Changes Ends -->
													</div>
												</div>	
		</c:if>
	</c:forEach>
</c:if>