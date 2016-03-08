$(document).ready(function() {

	$(function() {
		// configuration
		var width = 400;
		var aS = 1000;
		var pS = 3000;
		var currentSlide = 1;

		// cash DOM
		var $slider = $('#slider');
		var $slideContainer = $slider.find('.slides');
		var $slides = $slideContainer.find('.slide');

		var interval;

		function startSlider() {
			interval = setInterval(function() {
				$slideContainer.animate({'margin-left': '-='+width}, aS, function() {
					currentSlide++;
					if (currentSlide === $slides.length) {
						currentSlide = 1;
						$slideContainer.css('margin-left', 0);
					}
				});
			}, pS);
		};

		function stopSlider() {
			clearInterval(interval);
		};
		//setInterval
			//animate margin-left
			//if its last slide, go to position 1 (0px)

		$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
		//listen for mouseenter and pause
		//resume on mouseleave
		startSlider();
	});

});
