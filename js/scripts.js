// jQuery(window).load(function(){
// 	alert('dfdf');
// });

jQuery(document).ready(function(){
	var window_width = jQuery( window ).width();

	if (window_width < 664)
	{

		// jQuery('@tab_local').removeClass('tabs-title');
		// jQuery('#tab_world').removeClass('tabs-title');

		// tabcon = jQuery('.tabs-content');
		// jQuery('append_div').append(tabcon);
	}

	jQuery.scrollSpeed(180, 700);

	if(jQuery('.slider_div').length){
		jQuery('html.en .slider_div, html.fr .slider_div , html.de .slider_div ').slick({
			infinite: true,
			speed: 800,
			fade: true,
			autoplay: false,
  			autoplaySpeed: 2000,
			slidesToShow: 1,
 			slidesToScroll: 1,
 			focusOnSelect: false,
			prevArrow: '<div class="carousel-prev carousel-arr"></div>',
			nextArrow: '<div class="carousel-next carousel-arr"></div>',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows:false,
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots:false,
						slidesToShow: 1
					}
				}
			]
		});
	}

	if(jQuery('.slider_div').length){
		jQuery('html.he .slider_div').slick({
			infinite: true,
			speed: 800,
			fade: true,
			rtl: true,
			autoplay: false,
  			autoplaySpeed: 2000,
			slidesToShow: 1,
 			slidesToScroll: 1,
 			focusOnSelect: false,
			prevArrow: '<div class="carousel-prev carousel-arr"></div>',
			nextArrow: '<div class="carousel-next carousel-arr"></div>',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows:false,
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots:false,
						slidesToShow: 1
					}
				}
			]
		});
	}


	if(jQuery('.home_bg').length){
		jQuery('html.en .home_bg , html.fr .home_bg , html.de .home_bg').slick({
			infinite: true,
			speed: 1000,
			fade: true,
			dots: true,
			autoplay: true,
  			autoplaySpeed: 1800,
			slidesToShow: 1,
 			slidesToScroll: 1,
 			focusOnSelect: false,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows:false,
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots:false,
						slidesToShow: 1
					}
				}
			]
		});
	}

	if(jQuery('.home_bg').length){
		jQuery('html.he .home_bg').slick({
			infinite: true,
			speed: 1000,
			fade: true,
			dots: true,
			rtl: true,
			autoplay: true,
			autoplaySpeed: 1800,
			slidesToShow: 1,
			slidesToScroll: 1,
			focusOnSelect: false,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows:false,
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots:false,
						slidesToShow: 1
					}
				}
			]
		});
	}

	// jQuery("form.sort_cat_form #select_sort").change(function(){
	// 	jQuery('form.sort_cat_form').submit();
	//<input role="button" type="submit" aria-label="submit form" value="Send" class="button">
	// });

	jQuery(".contact_sec .wpcf7-submit").click(function(event){
		if (!jQuery('.must_tocheck').is(':checked')) {
			event.preventDefault();
			jQuery('.must_tocheck').parents('.columns').find('label').css('color','red');
		}
	});

	jQuery("#select_sort").change(function() {
		var value = jQuery('option:selected', this).val();
		var url = jQuery('option:selected', this).attr('data-url');
		if(value== 0){
			location.href = url;
		}
		console.log(url);
	location.href = url;
	});


	jQuery('.physician_row ul li.tabs-title>a').click(function(e) {
		e.preventDefault();
	});

	jQuery('#tab_world').click(function() {
		jQuery('section.centers_sec .steps_wrap .main_content .form_div_step2 .sort_div').show();
		jQuery('section.centers_sec .steps_wrap .main_content .form_div_step2 .sort_div').css('display', ' table');
	});

	jQuery('#tab_local').click(function() {
		jQuery('section.centers_sec .steps_wrap .main_content .form_div_step2 .sort_div').hide();
	});

	jQuery('.btn_icon').click(function() {
		jQuery('.search_div_open').slideToggle( "fast", function() {
			jQuery('.btn_icon img.search_icon_act').show();
			jQuery('.btn_icon img.search_icon').hide();
			jQuery('input.input_search').focus();
		});
		return false;
	});

	jQuery('.accordion-section-title').click(function(e) {
		e.preventDefault();
		var currentAttrValue = jQuery(this).attr('href');
		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();
			jQuery(this).addClass('active');
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}
	});

	if (jQuery('.physician_row > ul.tabs > li').hasClass('is-active')) {
		jQuery(this).find('.tab_list_img_active').css('margin', '0 auto');
		// jQuery(this).siblings().find('img.tab_list_img_active').hide();
		// jQuery(this).siblings().find('img.tab_list_img').show();
	}

	jQuery('.physician_row ul.tabs li a').click(function(e) {
		jQuery(this).parent().siblings().find('img.tab_list_img_active').hide();
		jQuery(this).parent().siblings().find('img.tab_list_img').show();
		jQuery('.physician_row ul.tabs li a .img.tab_list_img').show();
		jQuery('.physician_row ul.tabs li a .img.tab_list_img').show();
		jQuery(this).find('img.tab_list_img_active').show();
		jQuery(this).find('img.tab_list_img').hide();
	});


	jQuery('select#select_opt').change(function() {
		jQuery('.step_2').addClass(' step_done ');
		jQuery(this).css('border', '3px solid #f68d38');
	});

	jQuery('[data-slider]').bind('keyup mouseup', function () {
		jQuery('#range_slide span.slider-fill').css( 'background-color' , '#f68d38');
	    jQuery('.step_3').addClass(' step_done ');
	});

	 jQuery('input[name=center_email]').first().keyup(function () {
	    var email = this.value;
	    validateEmail(email);
	});

     jQuery('.mrgfus_pop').magnificPopup({
     items: {
          type:'inline',
          src: '#mrgfus_popup'
      }
    });


	jQuery(document).foundation();

})


function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    if (!emailReg.test(email) || jQuery('input[name=center_email]').val() == '') {
      	 jQuery('.step_4').removeClass('step_done');
    } else {
         jQuery('.step_4').addClass(' step_done ');
    }
}




function close_accordion_section() {
	jQuery('.accordion .accordion-section-title').removeClass('active');
	jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};


function nofityUser(message) {
	alert("asd");
    var n = noty({
        text  : message,
        layout: 'topRight',
        type  : 'success',
        timeout: 3000,
        animation: {
            open  : 'animated bounceIn',
            close : 'animated bounceOut',
            easing: 'swing',
            speed : 500
        }
    });
}
