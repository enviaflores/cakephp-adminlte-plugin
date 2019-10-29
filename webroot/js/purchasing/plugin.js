$( document ).ready(function() {
	
	$('#NewPurchasingRequestQuantity,#NewPurchasingRequestAmount').on('keypress', function(key) {
	    if(key.charCode < 48 || key.charCode > 57) return false;
	});
	
	$('#purchasingRequestDialog .modal-header').addClass('purchasing_dialog_header');
	$('#purchasingRequestDialog .modal-dialog ').addClass('purchasing_dialog_body');
	
	$('#NewPurchasingRequestAnotherSupplier').parent().hide();
	
	let newListNode = $('<li />').attr({
       id: 'purchasing_request_button'
    });
	$(newListNode).addClass('dropdown tasks-menu');
	
	let newAnchorNode = $('<a/>').attr({
       id: 'purchasing_request_trigger_link',
       href: 'javascript:open_purchase_request_dialog()',
       title: ' Requisición de compra'
    });
	
	let newSpanNode = $('<span/>');
	$(newSpanNode).addClass('fa fa-cart-arrow-down');
	
	$(newAnchorNode).append(newSpanNode);
	$(newListNode).append(newAnchorNode);
	
	$('div.navbar-custom-menu > ul').prepend(newListNode);
	
	$('#NewPurchasingRequestPurchaseType').on("select2:select", function (e) {
		if(!$('#form_container').is(':visible'))
			$('#form_container').show('slow');
		 self['prepare_'+$(this).val()]();
	});
	
	$('#NewPurchasingRequestSupplierId').on("select2:select", function (e) {
		if($(this).val()==0)
			$('#NewPurchasingRequestAnotherSupplier').parent().show();
		else
			$('#NewPurchasingRequestAnotherSupplier').parent().hide();
		
	});

	$('#purchasingRequestDialogCloseBtn').on('click',function(){
		restore_purchase_form();
	});
	
	
	
	$('#purchasingRequestDialogSaveBtn').on('click',function(){
		
		if(not_valid_purchase_inputs())
			show_notification('warning','La solicitud no puede ser enviada<br>Captura toda la información requerida');
		else
			$('#NewPurchasingRequestIndexForm').submit();
		
	});
	
	$('#NewPurchasingRequestIndexForm').on('submit',function(e){
		e.preventDefault();
		Swal.fire({
			  title: 'Se enviará esta solicitud al responsable del departamento',
			  text: "¿Desea continuar?",
			  type: 'question',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Aceptar'
			}).then((result) => {
			  if (result.value) {
				  var formData = new FormData($(this)[0]);
				  $.ajax({
						type: 'POST',
						url: '/admin_l_t_e/purchasing_request/add',
						data: formData,
			            async: false,
			            dataType : 'json',
			            cache: false,
			            contentType: false,
			            processData: false,
						beforeSend: function(){
							blockUI();
						},
						success: function(data) {
							if(data.result!='ok')
								show_notification('error',data.response,'center',1900);
							else{								
								show_notification('success',data.response);
								$('#purchasingRequestDialog').modal('hide');
								restore_purchase_form();
								
							}
	
						},
						error: function(){
							
						},
						complete: function(){
							unblockUI();
						}
					});
			  }
			});
	});

});



function open_purchase_request_dialog() {
	$('#purchasingRequestDialog').modal('show');
}

function prepare_purchase(){
	$('#service_container').hide();
	$('#purchase_container').show('slow');
	
}

function prepare_service(){
	$('#purchase_container').hide();
	$('#service_container').show('slow');
}


function show_notification(type, content,  position='center', timer = 1500) {
	Swal.fire({
		position: 'center',
		type: type,
		title: content,
		showConfirmButton: false,
		timer: timer
	})
}

function restore_purchase_form(){
	$('#NewPurchasingRequestIndexForm').trigger('reset');
	$('#form_container').hide();
	$('#NewPurchasingRequestPurchaseType').val('').trigger('change');
	$('#NewPurchasingRequestSupplierId').val('').trigger('change');
	$('#NewPurchasingRequestAnotherSupplier').parent().hide();
	$('#NewPurchasingRequestServiceId').val('').trigger('change');
}


function not_valid_purchase_inputs(){
	is_invalid=false;

	// General info validation
	switch(true){
		case $('#NewPurchasingRequestPurchaseType').val() === null : $('div[for="NewPurchasingRequestPurchaseType"]').addClass('has-error');
		case $('#NewPurchasingRequestSupplierId').val() === null: $('div[for="NewPurchasingRequestSupplierId"]').addClass('has-error');
		case $('#NewPurchasingRequestAmount').val()=='': $('div[for="NewPurchasingRequestAmount"]').addClass('has-error');
		case $.trim($('#NewPurchasingRequestComments').val()).length == 0: $('div[for="NewPurchasingRequestComments"]').addClass('has-error');
		is_invalid=true;
		break;
	}
	
	// If another supplier was selected
	if($('#NewPurchasingRequestSupplierId').val()==0 && $.trim($('#NewPurchasingRequestAnotherSupplier').val()).length == 0){
		is_invalid=true;
		$('div[for="NewPurchasingRequestSupplierId"]').addClass('has-error');
	}
		
	
	
	// specific validation for purchase
	if($('#NewPurchasingRequestPurchaseType').val()=='purchase'){
		switch(true){
		case $('#NewPurchasingRequestQuantity').val()=='': $('div[for="NewPurchasingRequestQuantity"]').addClass('has-error');
		case $.trim($('#NewPurchasingRequestName').val()).length == 0: $('div[for="NewPurchasingRequestName"]').addClass('has-error');
		is_invalid=true;
		break;
		}
	}
	
	// validation for services
	else if($('#NewPurchasingRequestPurchaseType').val()=='service'){
		
		// check for at least one attachment
		attachment_exists=false;
		$("input:file").each(function (index) {  
			if($(this).val()!=''){
				attachment_exists=true;
				return;
			}
				
		});
		
		// if Not selected service id or there's no attached file
		if($('#NewPurchasingRequestServiceId').val() === null){
			is_invalid=true;
			$('div[for="NewPurchasingRequestServiceId"]').addClass('has-error');
		}
		
		if(!attachment_exists)
			is_invalid=true;
		
			
			
		
	}
	return is_invalid;
}