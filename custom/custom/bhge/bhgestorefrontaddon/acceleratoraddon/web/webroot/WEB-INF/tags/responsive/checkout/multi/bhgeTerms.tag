<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="bhgeTerms" class="hidden">
	<form action="/checkout/multi/summary/placeOrder" name="placeOrderForm" id="placeOrderForm" method="post" >
		<input type="hidden" name="govtAgencyFlagVal" value="">
		<input type="hidden" name="nuclearOpportFlagVal" value="">
		<input type="hidden" name="planToExportFlagVal" value="">
		<input type="hidden" name="isBuyerFlagVal" value="">
		<h4><b><spring:theme code="checkout.summary.confirmOrder.complianceque" text="Required federal compliance regulation questions"/>
		</b></h4>

		<spring:theme code="checkout.summary.confirmOrder.isGovtAgency" text="Is this a Government or Military opportunity, or does it involve nuclear, chemical, or biological weapons?"/>
		<span class="text-danger">*</span>
		<div class="radioinput-group">
			<div class="radioinput">
				<input type="radio" name="isGovtAgency" id="isGovtAgencyYes" value="true" tabindex="1"  required/>
				<label for="isGovtAgencyYes"> <spring:theme code="checkout.summary.confirmOrder.yes" text="Yes"/></label>
			</div>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<div class="radioinput">
				<input type="radio" name="isGovtAgency" id="isGovtAgencyNo" value="false" tabindex="2" required />
				<label for="isGovtAgencyNo"><spring:theme code="checkout.summary.confirmOrder.no" text="No"/></label>
			</div>
		</div>
		<span></span>
		<spring:theme code="checkout.summary.confirmOrder.isNuclearOpport" text="Is this a Nuclear Opportunity?"/>
		<span class="text-danger">*</span>
		<div class="radioinput-group">
			<div class="radioinput">
				<input type="radio" name="isNuclearOpport" id="isNuclearOpportYes" value="true" tabindex="3" required/>
				<label for="isNuclearOpportYes"> <spring:theme code="checkout.summary.confirmOrder.yes" text="Yes"/></label>
			</div>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<div class="radioinput">
				<input type="radio" name="isNuclearOpport" id="isNuclearOpportNo" value="false" tabindex="4" />
				<label for="isNuclearOpportNo"><spring:theme code="checkout.summary.confirmOrder.no" text="No"/></label>
			</div>
		</div>

		<spring:theme code="checkout.summary.confirmOrder.planToExport" text="Will any materials in this order be exported from the requested shipping address?"/>
		<span class="text-danger">*</span>

		<div class="radioinput-group">
			<div class="radioinput">
				<input type="radio" name="isPlanToExport" id="planToExportYes"  class="js-planToExportYes" tabindex="5" required value="true"/>
				<label for="planToExportYes"> <spring:theme code="checkout.summary.confirmOrder.yes" text="Yes"/></label>
			</div>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<div class="radioinput">
				<input type="radio" name="isPlanToExport" id="planToExportNo" class="js-planToExportNo" tabindex="6" value="false" />
				<label for="planToExportNo"><spring:theme code="checkout.summary.confirmOrder.no" text="No"/></label>
			</div>
		</div>
		<div class="form-group bhge-js-exportadd" id="exportAddrArea">
			<label style="text-transform: unset;" for="exportAddress" class="control-label"><spring:theme code="checkout.summary.export.Address" text="Export Address"/>
				<span class="text-danger">*</span>
			</label>
            <textarea name="exportAddress" class="form-control" rows="3" id="exportAddress" maxlength="500" ></textarea>
			<span class="help-block hide">
			<spring:theme code="checkout.summary.confirmOrder.exportaddress" text="Please enter export address"/>
		</span>
		</div>
        <spring:theme code="checkout.summary.confirmOrder.isEnduser" text="Is the end user a government agency or buying for a government?"/>
        <span class="text-danger">*</span>
        <div class="radioinput-group">
            <div class="radioinput">
                <input type="radio" name="isEnduser" id="endUserYes"  class="js-endUserYes" tabindex="7" required value="true"/>
                <label for="endUserYes"> <spring:theme code="checkout.summary.confirmOrder.yes" text="Yes"/></label>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div class="radioinput">
                <input type="radio" name="isEnduser" id="endUsertNo" class="js-endUserYes" tabindex="7" value="false" />
                <label for="endUsertNo"><spring:theme code="checkout.summary.confirmOrder.no" text="No"/></label>
            </div>
        </div>
		<div class="faChkSqr">
            <label for="termsChecks" style="cursor: default;">
                <input type="checkbox" id="termsCheck" name="termsCheck" tabindex="7" style="position: relative;cursor: pointer;" required>
				<span style="margin-left: -24px">
							<spring:theme code="checkout.summary.placeOrder.termsAndConditionsUrl"/>
						<span class="text-danger">*</span>
						</span>
			</label>
		</div>

		<button id="placeOrder1" type="submit" class="btn-primary--bhge js-placeOrder1">
			<spring:theme code="checkout.summary.confirmOrder.submitorder" text="Submit Order"/>
		</button>

		<input type="hidden" name="CSRFToken" value="${CSRFToken.token}">
	</form>
	<script>

        $(function() {

            var textAera = $('textarea[name="exportAddress"]');
            var txtArea = $('textarea[name="exportAddress"]')[textAera.length - 1];
            var placeOrderBtn = $('.js-placeOrder1')[textAera.length - 1];
            var isExportAddValid = false;

            $('.bhge-js-exportadd').hide();
            $('input[name="isPlanToExport"]').on('click', function() {
                if ($(this).val() == 'true') {
                    $('.bhge-js-exportadd').show();
                }
                else {
                    $('.bhge-js-exportadd').hide();
                }
            });

            $('input[name="isGovtAgency"]').on('click', function() {
                $('input[name=govtAgencyFlagVal]').val($( 'input[name=isGovtAgency]:checked' ).val());
            });

            $('input[name="isNuclearOpport"]').on('click', function() {
                $('input[name=nuclearOpportFlagVal]').val($( 'input[name=isNuclearOpport]:checked' ).val());
            });

            $('input[name="isPlanToExport"]').on('click', function() {
                $('input[name=planToExportFlagVal]').val($( 'input[name=isPlanToExport]:checked' ).val());
            });
            $('textarea[name="exportAddress"]').on('input', function () {
                $(this).css('border-color','#13294b');
                var placeOrderBtncnt = $('.js-placeOrder1');

                var placeOrderBtn = $('.js-placeOrder1')[placeOrderBtncnt.length - 1];

                $(placeOrderBtn).attr('disabled','false');
                $(placeOrderBtn).removeAttr('disabled');
                $(placeOrderBtn).removeClass('btn-primary--bhge-disabled').addClass('btn-primary--bhge');
                isExportAddValid = true;
            });
            $('.js-planToExportNo').on('click',function () {

                $(placeOrderBtn).attr('disabled','false');
                $(placeOrderBtn).removeAttr('disabled');
                $(placeOrderBtn).removeClass('btn-primary--bhge-disabled').addClass('btn-primary--bhge');
            });
            $('input[name="isEnduser"]').on('click', function() {
                $('input[name=isBuyerFlagVal]').val($( 'input[name=isEnduser]:checked' ).val());
            });
            $('.js-placeOrder1').on('click',function (e) {
                var isPlanToExport = $('input[name="isPlanToExport"]').is(':checked');
                var isGovtAgency = $('input[name="isGovtAgency"]').is(':checked');
                var isNuclearOpport = $('input[name="isNuclearOpport"]').is(':checked');
                var isEndUSer = $('input[name="isEnduser"]').is(':checked');
                var termsCheck = $('input[name=termsCheck]').is(':checked');

                var isYesPlantToExport = $('input[id="planToExportYes"]').is(':checked');

                if(isYesPlantToExport ) {
                    if( $(txtArea).val().trim() == "") {
                        $(txtArea).css('border-color','red');
                        $(placeOrderBtn).removeClass('btn-primary--bhge').addClass('btn-primary--bhge-disabled');
                        $(placeOrderBtn).attr('disabled','true');
                    } else {
                        $(txtArea).css('border-color','#13294b');
                        isExportAddValid = true;
                    }
                }
                $('input[name=termsCheck]').change(function() {

				if ($(this).is(':checked')) {
                    termsCheck = true;
                    } else {
                    termsCheck = false;
                    }
                });
                if(termsCheck == false){
                    $('input[name=termsCheck]').css('color','red');
                }

                if(isPlanToExport && isGovtAgency && isNuclearOpport && isEndUSer && termsCheck ) {
                    if($('input.js-planToExportNo').is(':checked')) {
                        $('.overlayloader').show();
                    } else if ($('input.js-planToExportYes').is(':checked') && !($(txtArea).val().trim() == "")){
                    $('.overlayloader').show();
                }
                }
            });
        });

	</script>
</div>