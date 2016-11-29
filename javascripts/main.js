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

	// Add all responsive functions here
	function respond() {

	}

	$(document).ready(function() {
		respond();
		scrollSpyInit();
	})

	$(window).load(function() {

	});

	$(window).resize(function() {
		respond();
	});

	$(window).scroll(function() {

	});

}(jQuery));