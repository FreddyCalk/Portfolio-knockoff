$(document).ready(function(){
	var mainNav = $('#nav-bar');
	var body = $('#body-wrapper');
	var mainNavScroll = 'nav-bar-scrolled';
	var headerHeight = $('#header').outerHeight();
	$(window).scroll(function(){
		if($(this).scrollTop()>headerHeight){
			mainNav.addClass(mainNavScroll);
			body.addClass('body-scrolled');
		}else{
			mainNav.removeClass(mainNavScroll);
			body.removeClass('body-scrolled');
		}
	})
	$(window).load(function() {
		$('.flexslider').flexslider({
	   		animation: "slide"
	 	});
	});
	$('#search').click(function(){
		$('.form-control').toggleClass('hidden');
	})
	$('.thumb-caption').hover(function(){
		$(this).toggleClass('black-text');
	})
	// window.addEventListener('resize', function(){
		var body2 = $('body')[0].scrollHeight;
		console.log(body2);
		$('footer').css('top',body2+700+'px','position','absolute');
	// })
})