<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="formElement" tagdir="/WEB-INF/tags/responsive/formElement" %>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="common" tagdir="/WEB-INF/tags/responsive/common" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<spring:htmlEscape defaultHtmlEscape="true" />
<script src='https://www.google.com/recaptcha/api.js?render=${resitekey}'></script>

<c:if test="${not empty supportTicketForm}">
    <div id="global-alerts" class="global-alerts"></div>
    <div class="back-link border">
        <div class="row">
            <div class="container-lg col-md-6">
                <sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
                <a href="support-tickets">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
              </sec:authorize>   
                <span class="label"><spring:theme code="text.account.supporttickets" text="Support Tickets" /></span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="container-lg col-md-6">
            <div class="account-section-content">
                <div class="account-section-form">
                    <div id="customer-ticketing-alerts"></div>
                    <form:form method="post" modelAttribute="supportTicketForm" enctype="multipart/form-data">
                        <formElement:formInputBox idKey="createTicket-subject" labelKey="text.account.supporttickets.createTicket.subject" path="subject" inputCSS="text" mandatory="true" />
                        <div id="NotEmpty-supportTicketForm-subject" class="help-block" style="display: none;">
                            <span id="subject-errors"></span>
                        </div>
                        <div id="Size-supportTicketForm-subject" class="help-block" style="display: none;"></div>
                        
                        <formElement:formInputBox idKey="createTicket-name" labelKey="text.account.supporttickets.createTicket.name" path="name" inputCSS="text" mandatory="true" />
                        <div id="NotEmpty-supportTicketForm-name" class="help-block" style="display: none;">
                            <span id="name-errors"></span>
                        </div>
                        <div id="Size-supportTicketForm-name" class="help-block" style="display: none;"></div>
                        
                        <formElement:formInputBox idKey="createTicket-phoneNo" labelKey="text.account.supporttickets.createTicket.phoneNo" path="phoneNo" inputCSS="text" mandatory="true" />
                        <div id="NotEmpty-supportTicketForm-phoneNo" class="help-block" style="display: none;">
                            <span id="phoneNo-errors"></span>
                        </div>
                        <div id="Pattern-supportTicketForm-phoneNo" class="help-block" style="display: none;">
                            <span id="phoneNo-errors"></span>
                        </div>
                        <div id="Size-supportTicketForm-phoneNo" class="help-block" style="display: none;"></div>
                        
                        <formElement:formInputBox idKey="createTicket-emailId" labelKey="text.account.supporttickets.createTicket.emailId" path="emailId" inputCSS="text" mandatory="true" />
                        <div id="NotEmpty-supportTicketForm-emailId" class="help-block" style="display: none;">
                            <span id="subject-errors"></span>
                        </div>
                        <div id="Size-supportTicketForm-emailId" class="help-block" style="display: none;"></div>
                        

                        <div id="test-append">
                        <formElement:formTextArea idKey="createTicket-message" labelKey="text.account.supporttickets.createTicket.message" path="message" mandatory="true" areaCSS="form-control" labelCSS="control-label"/>
                        <div id="NotEmpty-supportTicketForm-message" class="help-block" style="display: none;"></div>
                        <div id="Size-supportTicketForm-message" class="help-block" style="display: none;"></div>
</div>
                      <script type="text/javascript">
                                    var id;
                                        $(window).on('ready resize', function() {
                                            clearTimeout(id);
                                            id = setTimeout(doneResizing, 300);
                                        });
                                    function doneResizing(){
                                           if($(window).width() <= 1024) {
                                            document.getElementById('formfeedback__pasteimage').style.display="none";
                                          } else {
                                             document.getElementById('formfeedback__pasteimage').style.display="block";
                                          }
                                    }
                                    function removePasteImage(ele) {
                                        var item = document.getElementById("pasteImage")
                                        if(item) {
                                            $('#image-holder').empty()
                                        }
                                    }
                                    var IMAGE_MIME_REGEX = /^image\/(p?jpeg|gif|png)$/i;
                                    var loadImage = function (file) {
                                      var imageHolder = document.getElementById('image-holder');
                                        var reader = new FileReader();
                                            reader.onload = function(e){
                                            var img = document.createElement('img');
                                            img.setAttribute('id','pasteImage')
                                            img.src = e.target.result;
                                            img.width = 350;
                                            imageHolder.append(img);
                                        };
                                        reader.readAsDataURL(file);

                                        var imageHolder = $("#image-holder");
                                        imageHolder.append('<span id="remove__image" class="glyphicon glyphicon-trash"></span>');
                                        if(document.getElementById("remove__image")) {
                                            var removeImage = document.getElementById("remove__image");
                                            removeImage.onclick = removePasteImage;
                                        }
                                    };

                                    document.onpaste = function(e){
                                        document.getElementById('formfeedback__pasteimage').setAttribute('contenteditable','false');
                                        var items = e.clipboardData.items;
                                        //debugger;
                                        for (var i = 0; i < items.length; i++) {
                                            if (IMAGE_MIME_REGEX.test(items[i].type)) {
                                                loadImage(items[i].getAsFile());
                                                return;
                                            }
                                        }
                                        // Normal paste handling here
                                    }
                            </script>
                            <style>
                                #formfeedback__pasteimage , img#pasteImage  {
                                    text-align: center;
                                    border: 1px solid #8686865c;
                                    margin-bottom:1em;
                                    width: 100%;
                                    min-height: 10em;
                                    text-align: center;
                                    background-color: #f5f5f5;
                                    color: #868686;
                                }
                                 #formfeedback__pasteimage > image-holder {
                                     width: 100%;
                                     max-height: 10em;
                                     margin-bottom:2em;
                                 }
                                 #pasteImage {
                                     height: 10em;
                                 }
                                 #remove__image{
                                    cursor:pointer;
                                 }
                            </style>

                        <label for="additionalAttachment" class="control-label">
                        <spring:theme code="feedback.page.attachment" text="Attachment"/>
                        </label>
                            <div class="form-group">
                                <div id="formfeedback__pasteimage" contentEditable="true">
                                    <spring:theme code="feedback.imagepaste.text" text="Paste from clipboard/copied image here"/>
                                <div id="image-holder"></div>
                            </div>
                        </div>

                          <div class="form-group file-upload js-file-upload">
                            <label class="control-label file-upload__label" for="files"> <spring:theme code="text.account.supporttickets.createTicket.selectFile" text="Select a file"/> </label>
                            <div class="file-upload__wrapper btn btn-default secondary-btn-bhge">
                                <span> <spring:theme code="text.account.supporttickets.createTicket.chooseFile" text="Choose file"/> </span>
                                <input type="file" name="files" id="attachmentFiles" multiple size="60" class="file-upload__input js-file-upload__input1" data-max-upload-size="${maxUploadSize}" accept="image/jpg, application/pdf"/>
                            </div>
                            <span class="file-upload__file-name js-file-upload__file-name">
                                <spring:theme code="text.account.supporttickets.createTicket.noFileChosen"/>
                            </span>
                            <div class="m-t-10 error selectedFile d-none"><spring:theme code="checkout.fileupload.allowedfiles.message" text="Only .pdf,.jpg can be uploaded."/>
                                                                                                            </div>
                        </div>
<sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
                        <%--Associated Objects--%>
                        <c:if test="${not empty associatedObjects}">
                            <div class="form-group hide">
                            <label class="control-label" for="text.account.supporttickets.createTicket.associatedTo.option1"> <spring:theme code="text.account.supporttickets.createTicket.associatedTo" text="Associated To"/></label>

                            <form:select path="associatedTo" cssClass="form-control">
                                <option><spring:theme code="text.account.supporttickets.createTicket.associatedTo.option1" text="Please select"></spring:theme></option>
                                <c:forEach var="associatedMap" items="${associatedObjects}">
                                    <c:forEach var="associatedItem" items="${associatedMap.value}">
                                        <form:option value="${associatedMap.key}=${associatedItem.code}">
                                            <c:choose>
                                                <c:when test="${'SavedCart' eq associatedItem.type }"><spring:message code="text.account.supporttickets.createTicket.${associatedItem.type}"/>: ${associatedItem.code}; <spring:message code="text.account.supporttickets.createTicket.updated"/>: <fmt:formatDate pattern="dd/MM/yy" value="${associatedItem.modifiedtime}"/></c:when>
                                                <c:otherwise><spring:message code="text.account.supporttickets.createTicket.${associatedMap.key}"/>: ${associatedItem.code}; <spring:message code="text.account.supporttickets.createTicket.updated"/>: <fmt:formatDate pattern="dd/MM/yy" value="${associatedItem.modifiedtime}"/></c:otherwise>
                                            </c:choose>
                                        </form:option>
                                    </c:forEach>
                                </c:forEach>
                            </form:select>
                            </div>
                        </c:if>

                       <%--Ticket Categories--%>
                        <c:if test="${not empty categories}">
                            <div class="form-group hide">
                                <label class="control-label" for="text.account.supporttickets.createTicket.ticketCategory"> <spring:theme code="text.account.supporttickets.createTicket.ticketCategory" text="Category"/></label>

                                <form:select path="ticketCategory" cssClass="form-control">
                                    <c:forEach var="category" items="${categories}">
                                        <form:option value="${category}"><spring:message code="text.account.supporttickets.createTicket.ticketCategory.${category}"/></form:option>
                                    </c:forEach>
                                </form:select>
                            </div>
                        </c:if>
</sec:authorize>


<sec:authorize access="hasAnyRole('ROLE_ANONYMOUS')">
<c:if test="${not empty categories}">
                            <div class="form-group hide">
                                <label class="control-label" for="text.account.supporttickets.createTicket.ticketCategory"> <spring:theme code="text.account.supporttickets.createTicket.ticketCategory" text="Category"/></label>

                                <form:select path="ticketCategory" cssClass="form-control">
                                    <c:forEach var="category" items="${categories}">
                                        <form:option value="${category}"><spring:message code="text.account.supporttickets.createTicket.ticketCategory.${category}"/></form:option>
                                    </c:forEach>
                                </form:select>
                            </div>
                        </c:if>
       <div class="form-group">
         <div class="row">
				<%--	<div id="captchaButton" class="g-recaptcha" data-sitekey="${resitekey}" data-callback="enableBtn"></div>  --%>
					<div class="captcha_group"> </div>
		 </div>
	  </div>
</sec:authorize>
                        <div id="customer-ticketing-buttons" class="form-actions">
                            <div class="accountActions">
                                <div class="row">
                                    <div class="col-sm-6 col-sm-push-6 accountButtons">
                                        <ycommerce:testId code="supportTicket_create_button">
                                        <sec:authorize access="hasAnyRole('ROLE_ANONYMOUS')">
                                            <button class="primary-btn-bhge btn btn-block" type="submit" id="addTicket" >
                                            <spring:theme code="text.account.supporttickets.createTicket.submit" text="Submit"/>
                                            </button>
                                        </sec:authorize>
                                         <sec:authorize access="!hasAnyRole('ROLE_ANONYMOUS')">
                                           <button class="primary-btn-bhge btn btn-block" type="submit" id="addTicket">
                                            <spring:theme code="text.account.supporttickets.createTicket.submit" text="Submit"/>
                                            </button>
                                          </sec:authorize>
                                        </ycommerce:testId>
                                    </div>

                                    <div class="col-sm-6 col-sm-pull-6 accountButtons">
                                        <a href="support-tickets" class="secondary-btn-bhge btn btn-default btn-block">
                                            <spring:theme code="text.account.supporttickets.createTicket.back" text="Cancel" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form:form>
                </div>
            </div>
        </div>
    </div>

    <div style="display: none">
        <span id="supporttickets-tryLater"><spring:theme code="text.account.supporttickets.tryLater"/></span>
        <span id="attachment-file-max-size-exceeded-error-message"><spring:theme code="text.account.supporttickets.fileMaxSizeExceeded"/></span>
        <span id="file-too-large-message"><spring:theme code="text.account.supporttickets.file.is.large.than" arguments="${maxUploadSizeMB}"/></span>
    </div>
    <common:globalMessagesTemplates/>
</c:if>
<div class="agreePopup hide">
	<div class="feedbackPopupHeadline">
		<span class="headline-text">Site Feedback</span>
	</div>

	<div class="feedbackPopupBody">
		<div id="contantBody" style="">
			<div class="mar-0">
				<h4>Thank you for your customer support request. Your message has been sent to one of our Customer Service Agents who will contact you shortly.</h4>
			</div>
			<div class="clearfix"></div>

				<div class="modal-footer">
					<button class="btn btn-primary" id="feedbackOK" onclick="feedbackOK();" type="button" data-dismiss="modal">OK</button>
			   	</div>
		</div>
	</div>
</div>

<script type="text/javascript">
function enableBtn(){
	   $("#addTicket").removeAttr("disabled");
	 }
		$(window).on("load",function(){

			var flag='${Flag}';
			var disable='${disable}';
			var SSO='${SSO}';
			var FirstName='${FirstName}';
			var LastName='${LastName}';
			var Mail='${Mail}';
			var AccessStatus='${AccessStatus}';
			var homeUrl='${homeUrl}';
					
			// var isRecaptcha = $('.g-recaptcha').has('iframe').length ? true : false ;
            var isRecaptcha = !($.isEmptyObject('#g-recaptcha-response')) ? true : false ;

            if(!isRecaptcha){
				 var captchaVar="";
					    captchaVar += "<table id=\"captcha-field\">";
					    captchaVar += "<tr>";
					    captchaVar += "<td>";
					    captchaVar += "<img id=\"captcha_id\" name=\"imgCaptcha\" src=\"/captcha.jpg\"> <\/td>";
					    captchaVar += "<td>  <a href=\"javascript:void(0);\"";
					    captchaVar += "title=\"change captcha text\"";
					    captchaVar += "onclick=\"document.getElementById('captcha_id').src = '/captcha.jpg?' + Math.random();  return false\">";
					    captchaVar += "<span class=\"mar-left-10 glyphicon glyphicon-refresh\"><\/span>";
					    captchaVar += "<\/a><\/td>";
					    captchaVar += "";
					    captchaVar += "<\/tr>";
					   captchaVar += "<\/table>";
					   captchaVar += "<input type=\"text\" class=\"form-control captcha mar-top-10\" name=\"captchaText\" value=\"\" id=\"captchaText\" maxlength=\"6\">";
					   captchaVar += "<label for=\"captchaText\" class=\"control-label\">Enter the above code here <span class=\"color-red mar-left-4\">*<\/span><\/label>";
						if($('#captcha-field').length == 0) {
							 $('.captcha_group').append(captchaVar)
							 }
							$('.captcha_group').show()
						} else {
							 $('.captcha_group ').hide();
						}				  
		});
</script>

<script>
    grecaptcha.ready(function() {

        grecaptcha.execute('${resitekey}', {action: 'homepage'}).then(function(token) {
            var inputHidden = '<input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" value="'+token+'"'+">"
            $('captcha_group').append(inputHidden);
        });
    });
</script>
<script>
    function resetCaptchaToken() {
    grecaptcha.ready(function() {

        grecaptcha.execute('${resitekey}', {action: 'homepage'}).then(function(token) {
            var inputHidden = '<input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" value="'+token+'"'+">"
            $('captcha_group').append(inputHidden);
        });
    });
    }
</script>