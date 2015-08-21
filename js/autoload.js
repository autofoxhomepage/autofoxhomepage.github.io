$(document).ready(function() {
	
	$.scrollIt();

 	$("#testimonial").owlCarousel({
    	items : 1,
    	singleItem : true,
    	autoPlay : true,
    	stopOnHover : true
    });

    $("#contact-form").submit(function(e){
    	e.preventDefault();
  	});

    $( '#contact-form-submit' ).on('click', function(e) {
	    e.preventDefault();
	    var email = $('#InputEmail').val();
		var name = $('#InputName').val();
		var telephone = $('#InputTelephone').val();
		var postalCode = $('#InputPostalCode').val();
	    $.ajax({
	        type: "POST",
	        url: '/mail/',
	        data: {email:email, name:name, telephone:telephone, postalCode: postalCode},
	        beforeSend: function() {
                $('#contact-form-submit').html('<i class="fa fa-circle-o-notch fa-spin"></i>');
            },
	        success: function(e) {
	        	$('#contact-form-submit').html('<i class="fa fa-check"></i> Send');
	        },
	        error: function(e){
				$('#contact-form-submit').html('<i class="fa fa-close"></i> Try again');
	        }
	    });
	});
});