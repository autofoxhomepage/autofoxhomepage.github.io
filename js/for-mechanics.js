$( '#for-mechanics-form-submit' ).on('click', function(e) {

	if(!$("#for-mechanics-form")[0].checkValidity()){
		$myForm.find(':submit').click();
	}

    e.preventDefault();
    var token = $('input[name="_token"]').val();
    var email = $('#InputEmail').val();
	var name = $('#InputName').val();
	var telephone = $('#InputTelephone').val();
	var source = $('#InputSource').val();

    $.ajax({
        type: "POST",
        url: '/for-mechanics/',
        data: {_token:token, email:email, name:name, telephone:telephone, source: source},
        beforeSend: function() {
            $('#for-mechanics-form-submit').html('<i class="fa fa-circle-o-notch fa-spin"></i>');
        },
        success: function(e) {
        	$('#for-mechanics-form-submit').html('<i class="fa fa-check"></i> Send');
        	$("#contactFormModal .modal-body p").html("Thank you for your applience!");
        	$('#contactFormModal').modal('show');
        },
        error: function(e){
			$('#for-mechanics-form-submit').html('<i class="fa fa-refresh"></i> Try again');
            console.log(e);
        }
    });
});