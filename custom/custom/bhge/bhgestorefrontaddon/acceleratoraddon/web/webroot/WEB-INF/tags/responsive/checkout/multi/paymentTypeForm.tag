<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="formElement" tagdir="/WEB-INF/tags/responsive/formElement" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@ taglib prefix="address" tagdir="/WEB-INF/tags/responsive/address"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

 <sec:authorize access="hasAnyRole('ROLE_ANONYMOUS')">
 	<div class="row checkout-address-holder"> 	
 		<p class="text-bold dark-black m-b-20 m-t-20"><spring:theme code="shipping.options.soldtoaddress" text="Sold to address" /></p>
	 	<form:form id="bhgeSoldToAddressForm" method="post" modelAttribute="bhgeShippingAddressForm" action="${request.contextPath}/checkout/multi/delivery-address/bhgeAddAddress">
			<input type="hidden" name="saveInAddressBook" value="false">
			<div id="checkoutAddressFormId" class="checkoutAddressForm">
				<div class="row m-b-10">
					<div class="col-md-6">
						<formElement:formInputBox idKey="address.companyName" labelKey="address.companyName" path="companyName" inputCSS="form-control" mandatory="true" maxlength="40" />
					</div>
					<div class="col-md-6">
						<formElement:formInputBox idKey="address.line1" labelKey="address.line1" path="line1" inputCSS="form-control" mandatory="true" maxlength="40" />
					</div>
				</div>
				<div class="row m-b-10">
					<div class="col-md-6">
						<formElement:formInputBox idKey="address.line2" labelKey="address.line2" path="line2" inputCSS="form-control" mandatory="false" maxlength="40" />
					</div>
					<div class="col-md-6">
	
						<div id="checkoutAddressCountrySelector" data-region-selector="checkoutAddressRegionSelector" class="checkout-dropdown-container">
							<formElement:formSelectBox isCountry="true" idKey="chkaddress.country" labelKey="address.country" path="countryIso" mandatory="true" skipBlank="false" skipBlankMessageKey="address.country" items="${countryData}" itemValue="isocode" selectCSSClass="form-control m-0 h-40 light-border" />
						</div>	
					</div>
				</div>
				<div class="row m-b-10">
					<div class="col-md-6">
						<div id="checkoutAddressRegionSelector"	data-country-iso-code="${fn:escapeXml(addressData.country.isocode)}" class="form-group checkout-dropdown-container">
							<formElement:formSelectBox idKey="address.region" labelKey="address.state" path="regionIso" mandatory="true" skipBlank="false" skipBlankMessageKey="address.state" items="${regions}" itemValue="${useShortRegionIso ? 'isocodeShort' : 'isocode'}" selectCSSClass="form-control h-40 light-border"/>
						</div>
					</div>
					<div class="col-md-6">
						<formElement:formInputBox idKey="address.townCity" labelKey="address.townCity" path="townCity" inputCSS="form-control" mandatory="true" maxlength="40" />
					</div>
				</div>
				<div class="row m-b-10">
					<div class="col-md-6">
						<formElement:formInputBox idKey="address.postcode" labelKey="address.zipcode" path="postcode" inputCSS="form-control m-t-0" mandatory="true" maxlength="10" />
					</div>
				</div>
			</div>
		</form:form>	
	</div>
	<c:if test="${defaultSoldTo.paymentTrms.code eq 'IBS'}">
        <c:set var="paymentBoolean" value="true"></c:set>
    </c:if>
	<form:form id="selectPaymentTypeForm" modelAttribute="paymentTypeForm" action="${request.contextPath}/checkout/multi/payment-type/choose" method="post" class="ui-2">
		<div class="row">
			<div class="step-body-form col-md-12 m-b-20">
				<c:choose>
					<c:when test="${defaultSoldTo.paymentTrms.name eq null}">
						<p>
							<span class="text-bold dark-black">
								<spring:theme code="shipping.options.paymentTerms" text="Payment Terms:" />
							</span>&nbsp;<br>
							<span class="lite-gray ">${defaultSoldTo.paymentTerms}</span>
						</p>
					</c:when>
					<c:otherwise>
						<p> 
							<span class="text-bold dark-black">
								<spring:theme code="shipping.options.paymentTerms" text="Payment Terms:" />	
							</span>&nbsp;<br>
							<span class="lite-gray ">${defaultSoldTo.paymentTrms.name}</span>
						</p>
					</c:otherwise>
				</c:choose>
			</div>
			<div class="row m-t-0 m-l-0 m-r-0">
				<h1 class="cartType d-none notranslate">${cartCommerceType}</h1>
				<c:choose>
					<c:when test="${cartCommerceType != 'GUESTBUY'}">
						<span class="text-bold dark-black d-none">
							<spring:theme code="bh.rma.checkout.payment_method" text="Payment Method"/>
						</span>
					</c:when>
				</c:choose>
				
				<c:choose>
					<c:when test="${cartCommerceType == 'GUESTBUY'}">
						<div class="payment-method-field guest-buy m-t-20 col-md-12">
							<label class="text-bold dark-black checkout-sub-header m-b-10 col-md-4 p-l-0">
								<spring:theme text="Payment Method"/>
							</label>
														
							<div class="price-left-block col-md-8 m-t-20 m-b-5 text-bold" style="text-align: center;font-size: 18px">
								<span class="pull-right fs-18 text-bold">
									<ycommerce:testId code="cart_totalPrice_label">
										<c:choose>
											<c:when test="${showTax}">
												${cartData.totalPriceWithTax.formattedValue}
											</c:when>
											<c:otherwise>
												<c:choose>
													<c:when test="${cartData.totalPrice.value > 0}">
														${cartData.totalPrice.formattedValue}
													</c:when>
													<c:otherwise>
														<spring:theme code="cart.order.total.price"/>
													</c:otherwise>
												</c:choose>	
											</c:otherwise>
										</c:choose>						
									</ycommerce:testId>
								</span>
								
								<c:if test="${cartData.totalItems > 0}">
									<div class="totalunitcount cart-totals-unitcount--bhge text-bold">
										<span class="text-bold pull-right fs-18 m-r-5">
											${cartData.totalItems}&nbsp; <spring:theme code="bh.rma.checkout.items" text="items"/> :
										</span>
									</div>
								</c:if>
								
							</div>
							
							<div class="radioinput-group pull-left m-l-5">
			                    <div class="radioinput">
			                        <input type="radio" name="paymentType" id="paymentPO" value="ACCOUNT" tabindex="0" checked required/>
			                        <label for="isGovtAgencyYes"> <spring:theme code="bh.rma.checkout.account_payment" text="Account Payment"/></label>
			                    </div>
			                    
			                    <div class="radioinput">
			                        <input type="radio" name="paymentType" id="paymentCC" value="CARD" tabindex="0" required />
			                        <label for="isGovtAgencyNo"><spring:theme code="bh.rma.checkout.credit.card" text="Credit card payment"/></label>
			                    </div>
			                </div>
							
							<div id="poPaymentSection" style="border: solid 1px #dedede;height: auto;padding: 23px;overflow: hidden" class="row col-md-12 m-l-0 ">
								<div class="col-md-12">
									<div class="from-group col-md-4">
										<label for="PurchaseOrderNumber" class="control-label ">
											<spring:theme code="checkout.multi.purchaseOrderNumber.label" text="Purchase Order Number"></spring:theme>
											<span class="text-danger">*</span>
										</label>
										<input id="PurchaseOrderNumber" name="purchaseOrderNumber" value="${paymentTypeForm.purchaseOrderNumber}" type="text" class="text form-control m-t-10" maxlength="35" tabindex="0"/>
									</div>
									<div class="upload-po col-md-8">
										<div class="form-group">
											<label class="control-label">
												<spring:theme code="checkout.multi.uploadpo.label" text="Upload PO"></spring:theme>
												<span class="text-danger">*</span>
											</label><br>
											
					                         <label for="checkoutUploadPOFileId" class="secondary-btn-bhge control-label fileAttachLabelPO btn m-t-10 text-uppercase w-130 <c:if test="${not empty cartData.poAttachmentName}">disabled</c:if>">
					                             <spring:theme code="shipping.options.chooseFile" text="ChooseFile" />
					                         </label>
					                         <input id="checkoutUploadPOFileId" name="checkoutAttachFileNm" type="file" accept=".pdf,image/jpeg" class="pull-left hide uploadFile">
					                         <span class="checkoutSelectedFilePO file-selected-text">
			                                     <spring:theme code="shipping.options.noFileChoosen" text="No file chosen" />
					                         </span>
					                         <p class="text-muted m-t-10 lite-gray">
		                                         <spring:theme code="checkout.fileupload.allowedfiles.message" text="Only .pdf & .jpg can be uploaded." />
	                                        </p>
                              				 	<div class="attachFileDivPO <c:if test="${empty cartData.poAttachmentName}">hide</c:if>">                                				 	
                              				 		<label class="m-t-10"><spring:theme code="checkout.order.attached.file" text="Attached file"/></label>
                              				 		<div class="clearFix"></div>
                              				 		<div class="attachment-box btn-group btn-filter display-flex-center">
                              				 			<span class="removeFileName m-r-10 overflow-ellipsis">${cartData.poAttachmentName}</span>
                              				 			<a class="btn-remove-po" data-toggle="tooltip" data-original-title="Delete Attachment" data-placement="bottom" rel="tooltip">
                              				 				<i class="bhge-mcstore-icons icon-close-new"></i>
                              				 			</a>
                              				 		</div>
                              				 		<div class="clearFix"></div>
                              				 	</div>				                         
					                     </div>
			                     		 <div class="form-group">
				                         	<button id="checkoutUploadPOBtnId" class="btn btn-primary uploadBtn hide" disabled="disabled">
				                            	<spring:theme code="checkout.order.details.upload" text="Upload" />
				                            </button>
				                         </div>
									</div>
								</div>
							</div>
						
							<div id="ccPaymentSection" style="border: solid 1px #dedede;height: auto;padding: 23px;overflow: hidden" class="row col-md-12 m-l-0 hide">
								<span class="checkout-sub-header">
									<spring:theme code="checkout.order.creditcard.info" text="For credit card payments, our customer care team will be in touch with you once the order is placed."/>
								</span>
							</div>
						</div>						
					</c:when>
				</c:choose>
			</div>
		</div>
		<input type="hidden" id="googleCaptcha" name="googleCaptcha" value="${resitekey}"> 
	</form:form>
 	
 </sec:authorize>

 <sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
    <c:if test="${defaultSoldTo.paymentTrms.code eq 'IBS'}">
        <c:set var="paymentBoolean" value="true"></c:set>
    </c:if><form:form id="selectPaymentTypeForm" modelAttribute="paymentTypeForm" action="${request.contextPath}/checkout/multi/payment-type/choose" method="post" class="ui-2">
	<div class="row">
		<div class="step-body-form col-md-12">
			<div id="cusAccountDt">

				<p class="text-bold dark-black"><spring:theme code="shipping.options.soldtoaddress" text="Sold to address" />
				</p>
				<span class="lite-gray">
					<c:out value="${sessionSoldToName}"/><br>
						<c:if test="${not empty soldToAddress.line1}">
					<c:out value="${soldToAddress.line1}"/>
							<br>
						</c:if>
						<c:if test="${not empty soldToAddress.line2}">
					<c:out value="${soldToAddress.line2}"/>
							<br>
						</c:if>
						<c:if test="${not empty soldToAddress.town}">
					<c:out value="${soldToAddress.town}"/>
							<br>
						</c:if>
						<c:if test="${not empty soldToAddress.region.name}">
					<c:out value="${soldToAddress.region.name}"/>
							<br>
						</c:if>
						<c:if test="${not empty soldToAddress.country.name}">
							<c:out value="${soldToAddress.country.name}"/>
							,&nbsp;
						</c:if>
						<c:if test="${not empty soldToAddress.postalCode}">
							<c:out value="${soldToAddress.postalCode}"/>
						</c:if>
					
				</span>
				<c:choose>
					<c:when test="${defaultSoldTo.paymentTrms.name eq null}">
						<p style="margin-top:15px">
							<span class="text-bold dark-black">
								<spring:theme code="shipping.options.paymentTerms" text="Payment Terms:" />
							</span>&nbsp;<br>
							<span class="lite-gray ">${defaultSoldTo.paymentTerms}</span>
						</p>
					</c:when>
					<c:otherwise>
						<p style="margin-top:15px"> 
							<span class="text-bold dark-black">
								<spring:theme code="shipping.options.paymentTerms" text="Payment Terms:" />	
							</span>&nbsp;<br>
							<span class="lite-gray ">${defaultSoldTo.paymentTrms.name}</span>
						</p>
					</c:otherwise>
				</c:choose>
			</div>
			<div class="row m-t-20 m-l-0">
				<h1 class="cartType d-none notranslate">${cartCommerceType}</h1>

				<c:choose>
				<c:when test="${cartCommerceType != 'BUY'}">
				<span class="text-bold dark-black">
					<spring:theme code="bh.rma.checkout.payment_method" text="Payment Method"/>
				</span>
				</c:when>
				</c:choose>
				
				<c:choose>
				<c:when test="${cartCommerceType == 'BUY'}">
					
					<fieldset class="payment-method-field m-t-0 m-b-20">
					<legend class="checkout-sub-header m-b-10 col-md-4 p-l-0">
						<spring:theme code="bh.rma.checkout.account_payment" text="Account Payment"/></legend>
					<div class="price-left-block col-md-8 m-t-20 text-bold" style="text-align: center;font-size: 18px">
	<%-- 					<spring:theme code="text.account.order.orderTotals" /> --%>
					
						
						<span class="pull-right fs-18 text-bold">
							<ycommerce:testId code="cart_totalPrice_label">
								<c:choose>
									<c:when test="${showTax}">
										${cartData.totalPriceWithTax.formattedValue}
									</c:when>
									<c:otherwise>
									<c:choose>
									<c:when test="${cartData.totalPrice.value > 0}">
										${cartData.totalPrice.formattedValue}
										</c:when>
									<c:otherwise>
									<spring:theme code="cart.order.total.price"/>
									</c:otherwise>
									</c:choose>	
									</c:otherwise>
								</c:choose>
				
							</ycommerce:testId>
						</span>
						
						<c:if test="${cartData.totalItems > 0}">
						<div class="totalunitcount cart-totals-unitcount--bhge text-bold">
	<!-- 					   <span> -->
	<%-- 						   <spring:theme code="basket.page.totals.unitcount"/>: --%>
	<!-- 						</span> -->
							<span class="text-bold pull-right fs-18 m-r-5">
								${cartData.totalItems} &nbsp; <spring:theme code="bh.rma.checkout.items" text="items"/> :  </span>
						</div>
						</c:if>
						
					</div>
					<div style="border: solid 1px #dedede;height: auto;padding: 23px;overflow: hidden" class="row col-md-12 m-l-0">
					<div class="col-md-4">
						<div class="from-group">
							<label for="PurchaseOrderNumber" class="control-label ">
								<spring:theme code="checkout.multi.purchaseOrderNumber.label" text="Purchase Order Number"></spring:theme>
								<span class="text-danger">*</span>
								<c:if test="${paymentBoolean eq 'true'}">
                                   <i class="bhge-mcstore-icons icon-info-line" data-toggle="tooltip" data-placement="right"
                                   title='<spring:theme code="bhge.cart.purchase.tooltip" />'>
                                   </i>
                                </c:if>
							</label>
							  <c:choose>
                                 <c:when test = "${paymentBoolean eq 'true'}">
                                     <spring:theme var = "poPlaceholder" code="bhge.cart.purchase.tooltip" />
                                 </c:when>
                                 <c:otherwise>
                                   <c:set var="poPlaceholder" value=' '></c:set>
                                 </c:otherwise>
                            </c:choose>
                            <input id="PurchaseOrderNumber" name="purchaseOrderNumber" placeholder='${poPlaceholder}' value="${paymentTypeForm.purchaseOrderNumber}" type="text" class="text form-control m-t-10" maxlength="35" tabindex="0"/>
						</div>
							<%--<formElement:formInputBox idKey="PurchaseOrderNumber" labelKey="checkout.multi.purchaseOrderNumber.label" path="purchaseOrderNumber" inputCSS="text" />--%>
							<%--
								<div id="costCenter">
									<formElement:formSelectBox idKey="costCenterSelect" labelKey="checkout.multi.costCenter.label" path="costCenterId" skipBlank="false" skipBlankMessageKey="checkout.multi.costCenter.title.pleaseSelect" itemValue="code" itemLabel="name" items="${costCenters}" mandatory="true" selectCSSClass="form-control"/>
								</div>
							--%>
					</div>
					<div class="col-md-4">
						<formElement:formInputBox idKey="EndCustomerOrderNumber" labelKey="cart.left.navigation.ECPO" path="endCustomerOrderNumber" inputCSS="text m-t-10" maxlength="35" tabindex="0"/>
						<%-- <c:if test="${cartData.cartType=='FILM' || cartData.cartType=='HYBRID'}">
							<c:if test="${not empty defaultSoldTo.customerClass && defaultSoldTo.customerClass eq 'DS'}">
								<formElement:formInputBox idKey="EndUserNumber" labelKey="cart.left.navigation.endCustNum" path="endUserNumber" inputCSS="text" />
							</c:if>
						</c:if> --%>
					</div>
					
					<div class="upload-po col-md-4 d-none">
						<div class="form-group">
							<label class="control-label">
								<spring:theme text="Upload Purchase Order"></spring:theme>
							</label><br>
	                         <label for="checkoutUploadPOFileId" class="secondary-btn-bhge control-label fileAttachLabelPO btn m-t-10 text-uppercase w-130">
	                             <spring:theme code="shipping.options.chooseFile" text="ChooseFile" />
	                         </label>
	                         <input id="checkoutUploadPOFileId" name="checkoutAttachFileNm" type="file" accept=".xls,.doc,.pdf,.mov,.png,.docx,image/jpeg" class="pull-left hide uploadFile">
	                         <span class="checkoutSelectedFilePO">
	                                     <spring:theme code="shipping.options.noFileChoosen" text="No file chosen" />
	                         </span>
	                         <%--<p class="text-muted">
	                             <sub style="font-size:14px;color:#13294b">
	                                 <spring:theme code="checkout.fileupload.allowedfiles.message" text="Only .pdf and .jpg can be uploaded." />
	                             </sub>
	                         </p>--%>
	                         <div class="attachFileDivPO hide">
	                    	</div>
	                     </div>
	                     		<div class="form-group">
	                                <button id="checkoutUploadPOBtnId" class="btn btn-primary uploadBtn hide" disabled="disabled">
	                                    <spring:theme code="checkout.order.details.upload" text="Upload" />
	                                </button>
	                            </div>
					</div>
					
					</div>
					</fieldset>
					
				</c:when>
				<c:otherwise>
				<c:forEach items="${locationList}" var="eachLoc" varStatus="loop">
				
				<fieldset class="payment-method-field m-t-0 m-b-20">
				
				<span class="d-block text-uppercase m-t-15 checkout-location" style="font-size: 14px;color: #63666a">${eachLoc}</span>
				<legend class="checkout-sub-header m-b-10 col-md-4 p-l-0">
					<spring:theme code="bh.rma.checkout.account_payment" text="Account Payment"/></legend>

				<div class="price-left-block col-md-8 m-t-20 text-bold" style="text-align: center;font-size: 18px">
<%-- 					<spring:theme code="text.account.order.orderTotals" /> --%>
				
					
					<span class="pull-right fs-18 text-bold checkout-item-price">
<!-- 						<ycommerce:testId code="cart_totalPrice_label"> -->
<%-- 							<c:choose> --%>
<%-- 								<c:when test="${showTax}"> --%>
<%-- 									${cartData.totalPriceWithTax.formattedValue} --%>
<%-- 								</c:when> --%>
<%-- 								<c:otherwise> --%>
<%-- 								<c:choose> --%>
<%-- 								<c:when test="${cartData.totalPrice.value > 0}"> --%>
<%-- 									${cartData.totalPrice.formattedValue} --%>
<%-- 									</c:when> --%>
<%-- 								<c:otherwise> --%>
<%-- 								<spring:theme code="cart.order.total.price"/> --%>
<%-- 								</c:otherwise> --%>
<%-- 								</c:choose>	 --%>
<%-- 								</c:otherwise> --%>
<%-- 							</c:choose> --%>
			
<!-- 						</ycommerce:testId> -->
							<c:forEach items="${locationMap}" var="entry">
								${entry.key == eachLoc?entry.value:""}
							</c:forEach>
					</span>
					
<%-- 					<c:if test="${cartData.totalItems > 0}">
					<div class="totalunitcount cart-totals-unitcount--bhge text-bold">
<!-- 					   <span> -->
						   <spring:theme code="basket.page.totals.unitcount"/>:
<!-- 						</span> -->
						<span class="text-bold pull-right fs-18 m-r-5">${cartData.totalItems} &nbsp;<spring:theme code="bh.rma.checkout.items" text="items"/> :  </span>
					</div>
					</c:if> --%>
					<spring:theme code='bh.rma.checkout.items' text='items' var="txtitems" scope="page"/>
				<c:forEach items="${locationItemMap}" var="entry">
								<span class="text-bold pull-right fs-18 m-r-5">${entry.key == eachLoc?entry.value:""}${entry.key == eachLoc?txtitems :""} </span>
							</c:forEach>		
					
				</div>
				<div style="border: solid 1px #dedede;height: auto;padding: 23px;overflow: hidden" class="row col-md-12 m-l-0">
				<div class="col-md-4">
					<div class="from-group">
						<label for="PurchaseOrderNumber" class="control-label ">
							<spring:theme code="checkout.multi.purchaseOrderNumber.label" text="Purchase Order Number"></spring:theme>
							<span class="text-danger">*</span>
							<c:if test="${paymentBoolean eq 'true'}">
                               <i class="bhge-mcstore-icons icon-info-line" data-toggle="tooltip" data-placement="right"
                               title='<spring:theme code="bhge.cart.purchase.tooltip" />'>
                               </i>
                            </c:if>
						</label>
						<c:choose>
                            <c:when test="${paymentBoolean eq 'true'}">
                                   <spring:theme var = "poPlaceholder" code="bhge.cart.purchase.tooltip" />
                            </c:when>
                            <c:otherwise>
                                    <c:set var="poPlaceholder" value=' '></c:set>
                            </c:otherwise>
                        </c:choose>
                        <input id="PurchaseOrderNumber" name="purchaseOrderNumber_${loop.index}" placeholder="${poPlaceholder}" value="${paymentTypeForm.purchaseOrderNumber}" type="text" class="text form-control m-t-10" maxlength="35" tabindex="0"/>
					</div>
						<%--<formElement:formInputBox idKey="PurchaseOrderNumber" labelKey="checkout.multi.purchaseOrderNumber.label" path="purchaseOrderNumber" inputCSS="text" />--%>
						<%--
							<div id="costCenter">
								<formElement:formSelectBox idKey="costCenterSelect" labelKey="checkout.multi.costCenter.label" path="costCenterId" skipBlank="false" skipBlankMessageKey="checkout.multi.costCenter.title.pleaseSelect" itemValue="code" itemLabel="name" items="${costCenters}" mandatory="true" selectCSSClass="form-control"/>
							</div>
						--%>
				</div>
				<div class="col-md-4">
					<formElement:formInputBox idKey="EndCustomerOrderNumber" labelKey="cart.left.navigation.ECPO" path="endCustomerOrderNumber" inputCSS="text m-t-10"  maxlength="35" tabindex="0"/>
					<%-- <c:if test="${cartData.cartType=='FILM' || cartData.cartType=='HYBRID'}">
						<c:if test="${not empty defaultSoldTo.customerClass && defaultSoldTo.customerClass eq 'DS'}">
							<formElement:formInputBox idKey="EndUserNumber" labelKey="cart.left.navigation.endCustNum" path="endUserNumber" inputCSS="text" />
						</c:if>
					</c:if> --%>
				</div>
				
				<div class="upload-po col-md-4">
					<div class="form-group">
						<label class="control-label">
							<spring:theme code="checkout.multi.uploadpo.label" text="Upload PO"></spring:theme>
						</label>
						<span class="text-danger">*</span>
						<br>
                         <label for="checkoutUploadPOFileId_${loop.index}" class="secondary-btn-bhge control-label fileAttachLabelPO_${loop.index} btn m-t-10 text-uppercase w-130">
                             <spring:theme code="shipping.options.chooseFile" text="ChooseFile" />
                         </label>
                         <input id="checkoutUploadPOFileId_${loop.index}" onchange="uploadMultiplePO(event,'${loop.index}')" name="checkoutAttachFileNm" type="file" accept=".xls,.doc,.pdf,.mov,.png,.docx,image/jpeg" class="pull-left hide uploadFile">
                         <span class="checkoutSelectedFilePO_${loop.index}">
                                     <spring:theme code="shipping.options.noFileChoosen" text="No file chosen" />
                         </span>
                         <p class="text-muted">
                             <sub style="font-size:12px;color:#13294b">
                                 <spring:theme code="checkout.fileupload.allowedfiles.message" text="Only .jpg and .pdf and images can be uploaded." />
                             </sub>
                         </p>
                         <div class="attachFileDivPO_${loop.index} hide">
	                        <span>
	                            <spring:theme code="checkout.order.details.attachedFile" text="Attached file" />
	                        </span>
                    	</div>
                     </div>
                     		<div class="form-group">
                                <button id="checkoutUploadPOBtnId_${loop.index}" class="btn btn-primary uploadBtn hide" disabled="disabled">
                                    <spring:theme code="checkout.order.details.upload" text="Upload" />
                                </button>
                            </div>
				</div>
				<span class="upload-help-text m-l-10 d-none" style="color: #63666a;"><spring:theme code="shipping.options.wecango" text="We can go faster if you give us one ahead of time, but not required at this point."/></span>
				</div>
				</fieldset>
				</c:forEach>
				</c:otherwise>
				</c:choose>
			</div>
			
		</div>
	</div>

	<%-- <button id="choosePaymentType_continue_button" type="submit" class="btn btn-primary btn-block checkout-next">
		<spring:theme code="checkout.multi.paymentType.continue"/>
	</button> --%>
</form:form>
</sec:authorize>