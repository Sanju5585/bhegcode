ACC.bhgeticketingaddon = {

	_autoload: [
		"onStatusChange",
		"bindMessageArea",
		"toggleAllMessages",
		"postNewMessage",
		"onFileChosen",
		"bindTicketAddActions",
		"bindTicketUpdateActions",

	],


	disableMessage: function(_this){
		var currentTicketStatus = $('input[id="currentTicketStatus"]').val();
		var selectedStatus = $(_this).val();

		if((currentTicketStatus === 'COMPLETED' && selectedStatus === 'COMPLETED') || (currentTicketStatus === 'CLOSED' && selectedStatus === 'CLOSED')) {
			$('textarea[id="message"]').attr('disabled','disabled');
			$('button[id="updateTicket"]').attr('disabled','disabled');
		} else {
			$('textarea[id="message"]').removeAttr('disabled');
		}
	},

	onStatusChange: function () {
        $(document).on('change', '.js-add-message-status', function () {
            ACC.bhgeticketingaddon.disableMessage(this);
		});
	},

    onFileChosen: function () {
        $(document).on('change', '#supportTicketForm input[name=files]', function () {
            ACC.bhgeticketingaddon.clearAlerts();
            var selectedFile = document.getElementById('attachmentFiles');
            if (!ACC.bhgeticketingaddon.isSelectedFilesValid(selectedFile))
            {
                var message = "<span style='color:red'>" + $('#file-too-large-message').text() + "</span>";
                $("#supportTicketForm").find(".js-file-upload__file-name").html(message);
            }
        });
    },

    bindMessageArea: function () {
        $(document).on('keyup', '.js-add-message', function () {
            if($(this).val().length > 0) {
                $('button[id="updateTicket"]').removeAttr('disabled');
                $('#NotEmpty-supportTicketForm-message').hide();
            } else {
                $('button[id="updateTicket"]').attr('disabled','disabled');
            }
        });
    },

	toggleAllMessages: function() {
		$('#ct-toggle-all-messages').on('click touchstart', function() {
			$('.cts-msg-history-item:not(.ct-msg-visible)').show();
			$(this).hide();
		});
	},

	postNewMessage: function () {
		var title = $('#ct-overlay-title').html();
		$('.ct-add-new-msg-btn').on('click touchstart', function(e) {
			e.preventDefault();
			$.colorbox({
				href: "#ct-add-new-msg",
				maxWidth:"100%",
				width: 525,
				opacity:0.7,
				title: title,
				inline: true,
                close: '<span class="glyphicon glyphicon-remove"></span>',
                onOpen: function () {
                    $('#ct-add-new-msg').fadeIn();
                },
                onComplete: function () {
                    ACC.bhgeticketingaddon.disableMessage($('.js-add-message-status'));

                    if (!$.trim($("#message").val())) {
                    	  $('button[id="updateTicket"]').attr('disabled', 'disabled');
                    }

                    ACC.csvimport.changeFileUploadAppearance();
                },
                onCleanup: function () {
                  $('#ct-add-new-msg').hide();
                }
            });
        })
    },

    isSelectedFilesValid: function (selectedFiles) {
        if (window.File && window.Blob) {
            var fileMaxSize = $('.js-file-upload__input').data('max-upload-size');
            var totalSize = 0;

            for (var i = 0; i < selectedFiles.files.length; ++i){
                totalSize += selectedFiles.files[i].size;
            }

            if ($.isNumeric(fileMaxSize) && totalSize > parseFloat(fileMaxSize)) {
                return false;
            }
        }

        return true;
    },

    displayCustomerTicketingAlert: function (options) {
        var alertTemplateSelector;

        switch (options.type) {
            case 'error':
                alertTemplateSelector = '#global-alert-danger-template';
                break;
            case 'warning':
                alertTemplateSelector = '#global-alert-warning-template';
                break;
            default:
                alertTemplateSelector = '#global-alert-info-template';
        }

        if (typeof options.message !== 'undefined') {
            $('#customer-ticketing-alerts').append($(alertTemplateSelector).tmpl({message: options.message}));
        }

        if (typeof options.messageId !== 'undefined') {
            $('#customer-ticketing-alerts').append($(alertTemplateSelector).tmpl({message: $('#' + options.messageId).text()}));
        }
    },

    displayGlobalAlert: function (options) {
        var alertTemplateSelector;

        switch (options.type) {
            case 'error':
                alertTemplateSelector = '#global-alert-danger-template';
                break;
            case 'warning':
                alertTemplateSelector = '#global-alert-warning-template';
                break;
            default:
                alertTemplateSelector = '#global-alert-info-template';
        }

        if (typeof options.message !== 'undefined') {
            $('#global-alerts').append($(alertTemplateSelector).tmpl({message: options.message}));
        }

        if (typeof options.messageId !== 'undefined') {
            $('#global-alerts').append($(alertTemplateSelector).tmpl({message: $('#' + options.messageId).text()}));
        }
    },

    bindTicketAddActions: function () {
        $(document).on('click', '#addTicket',
            function (event) {
                event.preventDefault();

                ACC.bhgeticketingaddon.formPostAction("support-tickets?ticketAdded=true");
            });
    },

    bindTicketUpdateActions: function () {
        $(document).on('click', '#updateTicket',
            function (event) {
                event.preventDefault();

                ACC.bhgeticketingaddon.formPostAction('?ticketUpdated=true');
            });
    },

    formPostAction: function (successRedirectUrl) {

        ACC.bhgeticketingaddon.clearAlerts();

        var form = document.getElementById("supportTicketForm");
        var formData = new window.FormData(form);

        var selectedFile = document.getElementById('attachmentFiles');
        if (selectedFile && !ACC.bhgeticketingaddon.isSelectedFilesValid(selectedFile)) {
            ACC.bhgeticketingaddon.displayCustomerTicketingAlert({
                type: 'error',
                messageId: 'attachment-file-max-size-exceeded-error-message'
            });
            return;
        }
        if (document.getElementById('formfeedback__pasteimage').getElementsByTagName('img').length >= 1) {
            var base64ImageFormPaste = document.getElementById('formfeedback__pasteimage').getElementsByTagName('img')[0].src;


            var blob =  ACC.bhgeticketingaddon.dataURItoBlob(base64ImageFormPaste);
            formData.append("files", blob, "pasteImage.jpg");
        } else {
            if( document.getElementById('pasteImage')) {
             var base64Image = document.getElementById('pasteImage').src;
             var blob = dataURItoBlob(base64Image);
             formData.append("files", blob, "pasteImage.jpg");
            }
        }
        console.log(formData);
        $.ajax({
            url: form.action,
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function () {
            	if(isLoggedIn === "true")
            	{
            		window.location.replace(successRedirectUrl);
            	}
            	else
            	{
            		var titleHeader = $('.feedbackPopupHeadline').html();
      			  	var bodyContent = $('.feedbackPopupBody').html();
	      		    ACC.colorbox.open(titleHeader, {
	      		        html: bodyContent,
	      		        width: "700px",
	      		        height: "50px"
	      		    });
	      			$("#cboxClose").attr("disabled", true);
            	}
            },
            error: function (jqXHR) {
                ACC.bhgeticketingaddon.processErrorResponse(jqXHR);
            }
        });
    },

    processErrorResponse: function (jqXHR) {
        ACC.bhgeticketingaddon.clearAlerts();
        if (jqXHR.status === 400 && jqXHR.responseJSON) {

            $.each(jqXHR.responseJSON, function() {
                $.each(this, function(k, v) {
                    var target = '#' + k;
                    $(target).show();
                    $(target).text(v);
                    if (k === 'NotEmpty-supportTicketForm-subject'
                        || k === 'Size-supportTicketForm-subject'
                        || k === 'NotEmpty-supportTicketForm-name'
                        || k === 'Size-supportTicketForm-name'
                        || k === 'NotEmpty-supportTicketForm-phoneNo'
                        || k === 'Size-supportTicketForm-phoneNo'
                        || k === 'Pattern-supportTicketForm-phoneNo'
                        || k === 'NotEmpty-supportTicketForm-emailId'
                        || k === 'Size-supportTicketForm-emailId'
                        || k === 'NotEmpty-supportTicketForm-message'
                        || k === 'Email-supportTicketForm-emailId'
                        || k === 'Size-supportTicketForm-message') {
                        ACC.bhgeticketingaddon.addHasErrorClass();
                    }
                    else {
                        ACC.bhgeticketingaddon.displayGlobalAlert({type: 'error', message: v});
                    }
                });
            });

            return;
        }

        ACC.bhgeticketingaddon.displayCustomerTicketingAlert({type: 'error', messageId: 'supporttickets-tryLater'});
    },

    addHasErrorClass: function () {
        $('#createTicket-message').parent().addClass('has-error');
    },

    clearAlerts: function () {
        $('#customer-ticketing-alerts').empty();
        $('#global-alerts').empty();
        $('#NotEmpty-supportTicketForm-subject').hide();
        $('#Size-supportTicketForm-message').hide();
        $('#Size-supportTicketForm-subject').hide();
        $('#createTicket-subject').parent().removeClass('has-error');
        $('#NotEmpty-supportTicketForm-message').hide();
        $('#createTicket-message').parent().removeClass('has-error');

        $('#NotEmpty-supportTicketForm-name').hide();
        $('#Size-supportTicketForm-name').hide();
        $('#createTicket-name').parent().removeClass('has-error');

        $('#NotEmpty-supportTicketForm-phoneNo').hide();
        $('#Size-supportTicketForm-phoneNo').hide();
        $('#Pattern-supportTicketForm-phoneNo').hide();
        $('#createTicket-phoneNo').parent().removeClass('has-error');

        $('#NotEmpty-supportTicketForm-emailId').hide();
        $('#Size-supportTicketForm-emailId').hide();
        $('#createTicket-emailId').parent().removeClass('has-error');
    },
     dataURItoBlob: function (dataURI) {
             // convert base64/URLEncoded data component to raw binary data held in a string
             var byteString;
             if (dataURI.split(",")[0].indexOf("base64") >= 0)
               byteString = atob(dataURI.split(",")[1]);
             else byteString = unescape(dataURI.split(",")[1]);
             // separate out the mime component
             var mimeString = dataURI
               .split(",")[0]
               .split(":")[1]
               .split(";")[0];
             // write the bytes of the string to a typed array
             var ia = new Uint8Array(byteString.length);
             for (var i = 0; i < byteString.length; i++) {
               ia[i] = byteString.charCodeAt(i);
             }
             return new Blob([ia], { type: mimeString });
           }
};
