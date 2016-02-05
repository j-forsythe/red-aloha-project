$(function(){

  // smooth scrolling http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
	$('a[href^="#"]').on('click',function (event) {
	    event.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});

$(function() {

  $('.bxslider').bxSlider({
		speed: 150,
		controls: false,
		auto: true,
		minSlides: 1,
		maxSlides: 4,
		slideMargin: 0

	});

});



$('form').submit(function(event) {

  event.preventDefault();

  if($("#email").val() == '') {
    alert('Please enter valid email');
  }
  else {
    alert('Thanks for subscribing!');
  }
});
