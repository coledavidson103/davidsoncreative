$(document).ready(function () {	

	$(".client-list").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 960,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	});

	// Load Fancybox
	$(".fancybox").fancybox({
    helpers : {
        overlay : {
	      	css : {
              'background' : 'rgba(0, 0, 0, 0.75)'
	          },
          locked : false
        }
    }
	});

	// Determine the width of the window
	var w = $(window).width();

	// Determine the height of the window
	var h = $(window).height();

	// Fade in the mobile menu if the menu button is clicked
	$('.mobile-nav').on('click', function(){
		$('nav').toggleClass('mobile-nav-show');
	});

	// If the service button in the menu is clicked,
	// the screen width is less than 769 (mobile), toggle .submenu-show class
	// to show the submenu.
	if(w < 769) {
		$('.service-button').on('click', function () {
					$('.services-menu').toggleClass('submenu-show');
		});
	};

	// Animate the scroll when clicking on the scroller arrow
	$('#scroller-link').on('click', function() {
		$('#description').animatescroll();
	});

	// Paralax scroll the heading
	$(window).on('scroll', function() {
		var px = $(window).scrollTop();
		$('.page-title-container').css('top', -px);

		var o = (px / h) * 2 ;
		
		if(px > 0) {
			$('.page-title-container').css('opacity', 1 - o);
		};
	});

setTimeout(function(){

		// Isotope
		$('.grid').isotope({
		  // options
		  itemSelector: '.grid-item',
		  layoutMode: 'masonry'
		});

		
		$('.grid').isotope({ filter: '.featured'});
	

		$('.grid').isotope({ sortBy : 'random' });

		// console.log('did my timeout fire');
		console.log('logging my timeout');
	}, 1500);


		// Show client sorting options
		$('#client-sort').on('click', function() {
			$('#client-list').toggleClass('sort-select-show');
		});

		// Show medium sorting options
		$('#medium-sort').on('click', function() {
			$('#medium-list').toggleClass('sort-select-show');
		});

		// Show type sorting options
		$('#type-sort').on('click', function() {
			$('#type-list').toggleClass('sort-select-show');
		});


		  // options


		$('#featured').on('click', function() {
			$('.grid').isotope({ filter: '.featured'});
		});

		// init Isotope
		// var $grid = $('.grid').isotope({
		// });

		// filter items on button click
		$('.filter-button-group').on( 'click', 'li', function() {
		  var filterValue = $(this).attr('data-filter');
		  $('.grid').isotope({ filter: filterValue });
		});

		// Title changes
		$('#ylc').on('click', function () {
			$('.workspace h2').text('Client: Young Liberals of Canada');
		});

		$('#vancouver').on('click', function () {
			$('.workspace h2').text('Client: City of Vancouver');
		});

		$('#lpc').on('click', function () {
			$('.workspace h2').text('Client: Liberal Party of Canada');
		});

		$('#may').on('click', function () {
			$('.workspace h2').text('Client: Bryan May Campaign');
		});

		$('#web').on('click', function () {
			$('.workspace h2').text('Medium: Web Graphics');
		});

		$('#print').on('click', function () {
			$('.workspace h2').text('Medium: Print Graphics');
		});

		$('#social').on('click', function () {
			$('.workspace h2').text('Type: Social Media Graphics');
		});

		$('#info').on('click', function () {
			$('.workspace h2').text('Type: Inforgraphics');
		});

		$('#postcard').on('click', function () {
			$('.workspace h2').text('Type: Postcard');
		});

		$('#flyer').on('click', function () {
			$('.workspace h2').text('Type: Flyer');
		});

		$('#door').on('click', function () {
			$('.workspace h2').text('Type: Door Hanger');
		});

		$('#sorbara').on('click', function () {
			$('.workspace h2').text('Client: Francesco Sorbara Campaign');
		});

		$('#featured').on('click', function () {
			$('.workspace h2').text('Featured Work');
		});

});