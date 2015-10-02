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

	    if(scrollPos >= 100){
	    	
	    	

	    	$(".logo-small").hide(0, function(){ // zmiana na wąski navbar
	    		$(".navbar").removeClass("nav-static");
	    		$(".navbar").addClass('navbar-fixed-top');

	    		// $(".navbar-ghost").addClass('navbar-ghost-visible');
	    		$(".logo-big").fadeIn(0); // pokazanie loga 1 linijkowego
	    		
	   			$(".navbar").css("min-height", "64px");
	    		$(".navbar").css("height", "64px");
	    		$(".navbar-right").css("margin-top", "4px");
	    		$(".navbar-header").css("margin-bottom", "0px");
	    		// $(".navbar .container").css("margin-top", "15px");

				// $(".navbar-brand").css("height", "auto");
	    	});
	    }else{
	    	
	    	$(".navbar").removeClass('navbar-fixed-top');
	    	$(".navbar").addClass("nav-static");

	    	$(".logo-big").hide(0, function(){ // zmiana na szeroki navbar
	    		
	    		
	    		// $(".navbar-ghost").removeClass('navbar-ghost-visible');
	    		$(".logo-small").fadeIn(0);	// pokazanie loga 2 linijkowego
	    		
	    		$(".navbar").css("min-height", "80px");
	    		$(".navbar").css("height", "80px");
	    		$(".navbar-right").css("margin-top", "13px"); 
	    		$(".navbar-header").css("margin-bottom", "14px");
	    		// $(".navbar .container").css("margin-top", "15px");
	    		
	    		// $(".navbar-brand").css("height", "50px");
	    	
	    	});

	    	
			// $(".navbar").animate({height: "10vh"}, 300);
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