(function($)
{
	"use strict";
	
	// Preloader
	jQuery(window).on('load', function() {
		preloader();
	});
	
	var headerHeight = jQuery('.navbar').outerHeight();
	jQuery('.navbar-nav li a').on('click', function(event) {
		jQuery('.navbar-nav li').removeClass('active');
		jQuery(this).parent().addClass('active');
		var $anchor = jQuery(this);
		
		jQuery('html, body').stop().animate({
			scrollTop: jQuery($anchor.attr('href')).offset().top-headerHeight
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
	
	jQuery(".navbar-nav li a").on("click",function(event){
		jQuery(".navbar-collapse").removeClass('show');
		jQuery('.navbar-toggler').addClass('collapsed');
	});
	
	
	// Animation section
	 if(jQuery('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	// Preload
	function preloader(){
		jQuery(".preloaderimg").fadeOut();
		jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
			jQuery(this).remove();
		});
	}
	
	var animation = bodymovin.loadAnimation({
		container: document.getElementById('lottie1'),
		renderer: 'svg',
		loop: false,
		autoplay: true,
		path: './skin/lottie/lottie1/data.json'
	  })

	var lottie2 = bodymovin.loadAnimation(
		{
		  container: document.getElementById('lottie2'), // Required
		  path: './skin/lottie/lottie2/data.json', // Required
		  renderer: 'svg', // Required
		  loop: true, // Optional
		  autoplay: false, // Optiona
		}	
	)

	$('#about-us-first').mouseenter(function(event) {
		lottie2.loop = true
		lottie2.setDirection(1)
		lottie2.currentFrame = 0
		lottie2.play()
	}).mouseleave(function(event) {
		lottie2.loop = false
		lottie2.setDirection(-1)
		lottie2.goToAndStop(0,true)
	});

	bodymovin.loadAnimation(
		{
		  container: document.getElementById('lottie3'), // Required
		  path: './skin/lottie/lottie3/data.json', // Required
		  renderer: 'svg', // Required
		  loop: true, // Optional
		  autoplay: true, // Optional
		  name: "lottie3", // Name for future reference. Optional.
		}	
	)
	var lottie3_2 = bodymovin.loadAnimation(
		{
		  container: document.getElementById('lottie3-2'), // Required
		  path: './skin/lottie/lottie3/data.json', // Required
		  renderer: 'svg', // Required
		  loop: true, // Optional
		  autoplay: false, // Optional
		  name: "lottie3-2", // Name for future reference. Optional.
		}	
	)
	$('#about-us-last').mouseenter(function(event) {
		lottie3_2.play()
	}).mouseleave(function(event) {
		lottie3_2.goToAndStop(0,true)
	});

})(jQuery);	