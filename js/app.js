$(document).ready(function() {
	var lipstick = '<div class="col-md-1 col-md-offset-2"><span class="lipstick"></span></div>';
	var cancel = '<div class="col-md-1"><span class="glyphicon glyphicon-remove cancel"></span></div>';
	$('.addHit').keydown(function(event) {
        if (event.keyCode == 13) {
            newHit();
         }
    });

	function newHit() {
		var hit = $(".addHit").val();
		var entry ='<p class="hitEntry">'+ hit + '<img src="images/lipstick-stain.png" class="lips"></p>';
		var newRowContent = lipstick+'<div class="col-md-6">'+entry+'</div>'+cancel;
		var newRow = $('<div class="row hits">'+newRowContent+'</div>');
		$(newRow).slideDown().insertBefore(".newHit");
		$(".addHit").val('');
    }

    //use this format for event handlers so that dynamically created entries can have same behavior as static ones
	$(".container").on('mouseenter', '.row', function() {
		//alert("found it");
		if ($("col-md-6 .hitEntry").hasClass("cancelled")){
			//$(this).find(".lipstick").hide();
			//$(this).find(".cancel").hide();
		} else {
			$(this).find(".lipstick").show();
			$(this).find(".cancel").show();}
	});

	$(".container").on('mouseleave', '.row', function() {
		$(this).find(".lipstick").hide();
		$(this).find(".cancel").hide();
	});

	$(".container").on('click', '.lipstick', function() {
		$(this).closest(".row").find(".lips").show();
		$(this).remove();
	});
	$(".container").on('click', '.cancel', function() {
		$(this).closest(".row").find(".hitEntry").addClass("cancelled");
		$(this).closest(".row").find(".lipstick").remove();
		$(this).remove();
	});
});