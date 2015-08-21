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

    $( '#contact-form-submit' ).on( 'submit', function(e) {
	    e.preventDefault();
	    alert("sending email");
	    var email = $('#InputEmail').val();
		var name = $('#InputName').val();
		var telephone = $('#InputTelephone').val();
		var postalCode = $('#InputPostalCode').val();
		alert(email+' '+name+' '+telephone+' '+postalCode);
	    $.ajax({
	        type: "POST",
	        url: host+'/mail/',
	        data: {email:email, name:name, telephone:telephone, postalCode: postalCode}
	        success: function() {
	        alert( "ok" );
	        }
	    });
	});
});