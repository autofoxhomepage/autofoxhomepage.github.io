$(document).ready(function() {
	
	$.scrollIt({
  		easing: 'swing',
  		topOffset: -77
	});

 	$("#testimonial").owlCarousel({
    	items : 1,
    	singleItem : true,
    	autoPlay : true,
    	stopOnHover : true
    });

    $("#contact-form").submit(function(e){
    	e.preventDefault();
  	});

	$(window).scroll(function(){
	    var scrollPos = $(document).scrollTop();

	    if(scrollPos >= 30){

	    	$(".logo-small").fadeOut('200', function(){
	    		$(".logo-big").fadeIn('200');
	    		$(".navbar .container").css("margin-top", 10);
	    		
	$(".navbar-brand").css("height", "auto");
	    		$(".navbar").css("min-height", "6vh");
	    		$(".navbar").css("height", "6vh");
	    	});
	    	console.log("> 30");
	    }else{
	    	$(".logo-big").fadeOut('200', function(){
	    		$(".logo-small").fadeIn('200');
	    		$(".navbar .container").css("margin-top", "3vh");
	    		$(".navbar").css("height", "10vh");
	    	});
	    }
	    console.log(scrollPos);
	});

    $( '#contact-form-submit' ).on('click', function(e) {

    	if(!$("#contact-form")[0].checkValidity()){
			$myForm.find(':submit').click();
    	}

	    e.preventDefault();
	    var token = $('input[name="_token"]').val();
	    var email = $('#InputEmail').val();
		var name = $('#InputName').val();
		var telephone = $('#InputTelephone').val();
		var postalCode = $('#InputPostalCode').val();
		var message = $("#InputMessage").val();

	    $.ajax({
	        type: "POST",
	        url: '/',
	        data: {_token:token, email:email, name:name, telephone:telephone, postalCode: postalCode, messageText:message},
	        beforeSend: function() {
                $('#contact-form-submit').html('<i class="fa fa-circle-o-notch fa-spin"></i>');
            },
	        success: function(e) {
	        	$('#contact-form-submit').html('<i class="fa fa-check"></i> Send');
	        	$("#contactFormModal .modal-body p").html("Thank you for your service request. You will be contacted shortly to schedule a service visit.");
	        	$('#contactFormModal').modal('show');
	        },
	        error: function(e){
				$('#contact-form-submit').html('<i class="fa fa-refresh"></i> Try again');
	        }
	    });
	});
});