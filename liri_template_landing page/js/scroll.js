$(function() {
	$('a[href^="#"]').click(function() {
		var target = $(this).attr('href');
		var strip = target.slice(1);
		var anchor = $("div[id='" + strip +"']");

		$('html, body').animate({
			scrollTop: anchor.offset().top

		}, 'slow');
			
	});

});