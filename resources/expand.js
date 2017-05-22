$(document).ready(function() {
	console.log("the expand script has loaded")
});


 $(document).ready(function() {

		$('.concept-name').click(function() {

				if ($(this).parent().is('.open')){
						$(this).closest('.concept').find('.concept-content-container').animate({'height':'0'},500);
						$(this).closest('.concept').removeClass('open');

						}else{
								var newHeight =$(this).closest('.concept').find('.concept-content').height() + 20 +'px';
								$(this).closest('.concept').find('.concept-content-container').animate({'height':newHeight},500);
								$(this).closest('.concept').addClass('open');
						}

		});

});

$(document).ready(function() {
	var elem = $(location.hash);
	var newHeight =$(elem).closest('.concept').find('.concept-content').height() +'px';
	$(elem).closest('.concept').find('.concept-content-container').animate({'height':newHeight},500);
	$(elem).closest('.concept').addClass('open');
});