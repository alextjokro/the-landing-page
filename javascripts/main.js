$(function() {

	// Get the dimensions of the viewport
   var width = window.innerWidth ||
               document.documentElement.clientWidth ||
               document.body.clientWidth;
   var height = window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight;

  // Initialize Bootstrap's ScrollSpy
  function scrollSpyInit() {
  	$('body').scrollspy({ target: '#main-nav' });
  }

  function headerHeight() {
     $('header').height($(window).height() - $('.navbar').height());
  }

  function projectBackground() {
		$('.recent-project__header--bg').height($('.recent-project__header').height() * 0.85);
		$('.recent-project__details--bg').height($('.recent-project__details').height() * 0.85);
	}

	// For every element that needs to use matchHeight.js
	function equalHeight() {
		$('.pitch__content h4').matchHeight();
		$('.why__content h4').matchHeight();
	}

	// Add all responsive functions here
	function respond() {
		headerHeight();
	}

	$(document).ready(function() {
		respond();
		// scrollSpyInit();
		equalHeight();
	})

	$(window).load(function() {
		projectBackground();
	});

	$(window).resize(function() {
		respond();
		projectBackground();
	});

	$(window).scroll(function() {

	});

}(jQuery));