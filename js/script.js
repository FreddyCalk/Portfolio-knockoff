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
	 	$(window).resize(function(){
		$('footer').css({'top': $('html').height(),
						'position':'absolute'});
	})
	});
	$('#search').click(function(){
		$('.form-control').toggleClass('hidden');
	})
	$('.thumb-caption').hover(function(){
		$(this).toggleClass('black-text');
	})
	$(window).resize(function(){
		$('footer').style('position','absolute','bottom',$('main_body').prop('scrollHeight'));
	})
})