// if(/Android/.test(navigator.appVersion)) {
// 	window.addEventListener("resize", function() {
// 		if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
// 			document.activeElement.scrollIntoView();
// 		}
// 	});
// } 

// Set fixed elements that need padding-right when locking the scroll
window.paddingRightItems = '#page-header';

// Locking scroll plugin options
var bodyScrollOptions = {
    reserveScrollBarGap: true,
    allowTouchMove: true
};

function openModal(hrefModal) {

    if ($(hrefModal).length > 0){
		$(hrefModal).trigger('beforeOpenModal').addClass('active');
		
		setTimeout(function() {
			$(hrefModal).addClass('fadeIn').trigger('afterOpenModal');
		}, 50);
    
        bodyScrollLock.clearAllBodyScrollLocks();
        bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
    }

}

function closeAllModals() {
	$('.popup-block.active').trigger('beforeCloseModal').removeClass('fadeIn');
	
	setTimeout(function() {
		$('.popup-block.active').removeClass('active', function() {
			bodyScrollLock.clearAllBodyScrollLocks();
		}).trigger('afterCloseModal');

		bodyScrollLock.clearAllBodyScrollLocks();
	}, 200);
}

function closeModal(hrefModal) {
	$(hrefModal).trigger('beforeCloseModal').removeClass('fadeIn');
	
	setTimeout(function() {
		$(hrefModal).removeClass('active', function() {
			bodyScrollLock.clearAllBodyScrollLocks();
		}).trigger('afterCloseModal');

		bodyScrollLock.clearAllBodyScrollLocks();
	}, 200);
}

$(document).keydown(function(event) { 
	if (event.keyCode == 27) { 
		closeAllModals();
	}
});

// Switch Modal function
$(document.body).on('click','[data-toggle="switch-modal"]',function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	$('.popup-block:not(:hidden)').removeClass('fadeIn active');
	
	$(hrefModal).addClass('active').addClass('fadeIn').scrollTop(0);
    
	bodyScrollLock.disableBodyScroll($(hrefModal)[0], bodyScrollOptions);
	
});

// Basic open modal
$(document.body).on('click','[data-toggle="modal"]',function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	openModal(hrefModal);
});

// Close modals if clicked on popup overlay
$(document.body).on('click','.popup-block__overlay',function(e) {
	var closeButton = $(this).children('[data-toggle="modal-dismiss"]');
	
	if (!(e.target != this)) {
		closeModal($(this).parents('.popup-block')[0]);
	}
});

// Attribute for closing modals
$(document.body).on('click','[data-toggle="modal-dismiss"]',function(e) {
	e.preventDefault();
	
	closeModal($(this).parents('.popup-block')[0]);
});


$('[data-toggle="scroll-to-top"]').click(function(e) {
	e.preventDefault();

	$('html,body').animate({
		scrollTop: 0
	}, 600);
});

$('[data-toggle="anchor"]').click(function(e) {
	e.preventDefault();

	var dataTarget = $(this).attr('data-target'),
		targetPos = $(dataTarget).offset().top - 150;

	$('html,body').animate({
		scrollTop: targetPos
	}, 400);
});

$('[data-toggle="tab"]').click(function(e) {
	e.preventDefault();

	var dataTarget = $(this).attr('data-target');

	if ($(this).parent().is('li')) {
		$(this).addClass('active').parent().addClass('active').siblings().removeClass('active').children().removeClass('active');
	} else {
		$(this).addClass('active').siblings().removeClass('active');
	}

	$(dataTarget).addClass('active').siblings().removeClass('active');
});

$(window).on('scroll load orientationchange', function() {
	var scrolledHeight = 100;

	if ($(this).scrollTop() > scrolledHeight && !($('body').hasClass("scrolled")) ) {
		$('body').addClass("scrolled");
	} else if($(this).scrollTop() <= scrolledHeight && $('body').hasClass("scrolled")) {
		$('body').removeClass("scrolled");
	}
});

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $(this).addClass('active');
  $("#header-menu").addClass("active");
});

$("#menu-toggle-active").click(function(e) {
  e.preventDefault();
  $("#header-menu").removeClass("active");
});

$('.btn--language').on('click', function() {
	$(this).toggleClass('active');
});

$(document).ready(function () {
 if( $(".swiper-container").length ) {
    var reviewsSwiper = new Swiper ('#reviews_slider', {
    slidesPerView: 'auto',
    speed: 1000,
		spaceBetween: 50,
		navigation: {
			nextEl: '.reviews-button-next',
			prevEl: '.reviews-button-prev',
		},
		pagination: {
			el: ".js--reviews-pag",
			clickable: true,
		},
    breakpoints: {
        320: {
        	spaceBetween: 20,
        },
        768: {

        },
    },
    });
    $(window).resize(function() {
        reviewsSwiper.update(true),
        console.log("reviewsSwiper update")
    })
 }
});

$('.main-block__hotspot-option.first').on('click', function() {
	$(this).addClass('active');
	$('.main-block__slide-description.first').toggleClass('active');
});

$('.main-block__hotspot-option.second').on('click', function() {
	$(this).addClass('active');
	$('.main-block__slide-description.second').toggleClass('active');
});

$('.main-block__hotspot-option.third').on('click', function() {
	$(this).addClass('active');
	$('.main-block__slide-description.third').toggleClass('active');
});

$('.main-block__hotspot-option.fourth').on('click', function() {
	$(this).addClass('active');
	$('.main-block__slide-description.fourth').toggleClass('active');
});

$('.overview-block__video-block').on('click', function() {
	$(this).addClass('active');
})

$('.form-control').focusin(function() {
	$(this).parent().addClass('active');
});

$('.form-control').focusout(function() {
	$('.form-block__input-wrapper').removeClass('active');
});

$('.form-control').keyup(function() {
	$(this).parent().addClass('remove');
});
