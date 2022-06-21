//countdown
var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('day').innerHTML = days + 'd';
  document.getElementById('hour').innerHTML =hours + 'h';
document.getElementById('min').innerHTML = minutes + 'm';
  document.getElementById('sec').innerHTML = seconds + 's';

  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.box').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    document.getElementById("demo").innerHTML = "Happy New Year🎉🎈";
  }

}, 1000);





// first-swiper
 var streamsSlider = new Swiper('[data-slider="true"]', {
        autoplay: true,
        pagination: {
            el: '[data-streams-pagination]',
            clickable: true,
        },
        navigation: {
          nextEl: "[data-next]",
          prevEl: "[data-prev]",
        },
        slidesPerView: 1,
        spaceBetween: -90,
        centeredSlides: true,
        loop:true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          350: {
            slidesPerView: 2,
          },
          550: {
            slidesPerView: 3,
          },
          750: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
        },
      });





      $(document).ready(function() {
        $("#owl-example").owlCarousel({
          items :3,
          navigation: true,
          navigationText:  [
          "<i class='icon-chevron-left icon-white'><</i>",
          "<i class='icon-chevron-right icon-white'>></i>"
          ],
          pagination: true,
          responsive :true,
          loop:true,
         autoPlay: true,
         autoplayTimeout:1000,
        });
      });












      
$(".brand__tb-slider").owlCarousel({
  rtl:true,
  items:5,
  margin: 10,
  loop: true,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
        items: 1,
        nav: false,
    },
    400: {
      items: 2,
      nav: false,
  },
    600: {
        items: 4,
        nav: false,
    },
    1000: {
        items: 6,
        nav: true,
        loop: true,
    },
},
});



var swiper = new Swiper(".swiper-container", {
	spaceBetween: 50,
	slidesPerView: 1,
  loop:true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	pagination: {
		el: ".swiper-pagination"
	},
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
  },
});




/* product left start */
if($(".product-left").length){
  var productSlider = new Swiper('.product-slider', {
    spaceBetween: 0,
    centeredSlides: false,
    loop:false,
    direction: 'horizontal',
    loopedSlides: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    resizeObserver:true,
  });
  var productThumbs = new Swiper('.product-thumbs', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: false,
    slideToClickedSlide: true,
    direction: 'horizontal',
    slidesPerView: 4,
    loopedSlides: 4,
  });
  productSlider.controller.control = productThumbs;
  productThumbs.controller.control = productSlider;
  



}

$('.owl-product').owlCarousel({
              autoplay: true,
              loop: true,
              margin: 30,
              dots: true,
              nav: true,
              items: 3,
              responsiveClass: true,
              responsive: {
                0: {
                  items: 1,
                  nav: true,
              },
                600: {
                    items: 2,
                    nav: true,
                },
                900:{
                  items: 2,
                    nav: false,
                },
                1000: {
                    items: 3,
                    nav: false,
                }
            },
});




// article-owlcarosel

$('.Article-slider').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 30,
  dots: true,
  nav: true,
  items: 3,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
  },
    600: {
        items: 2,
        nav: true,
    },
    900:{
      items: 2,
        nav: false,
    },
    1000: {
        items: 3,
        nav: false,
    }
},
});


	$('.cart-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.cart-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});
