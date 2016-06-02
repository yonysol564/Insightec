function open_contact_popup() {
    jQuery('.open-popup-link').magnificPopup({
         items: {
              type:'inline',
              src: '#test-popup'
          },
          callbacks: {
            beforeOpen: function() {
                var clickedA   = this.st.el;
                var pid        = clickedA.parents('.row_result').attr('data-postid');
                var pTitle     = clickedA.parents('.row_result').attr('data-title');
                var pEmail     = clickedA.parents('.row_result').attr('data-email');
                var locationID = clickedA.parents('.row_result').find("a.button.open-popup-link").data("locationid");

                var all_centers_by_term = [];
                jQuery(".tabs-panel.is-active .row_result").each(function(){
                  var title = jQuery(this).find(".center_title_div h4").text();
                  all_centers_by_term.push(title);
                });

                if(all_centers_by_term) {
                    jQuery('#select_sort2').html(' ');
                    jQuery.each(all_centers_by_term, function (i, item) {
                        jQuery('#select_sort2').append(jQuery('<option>', {
                            value: item,
                            text : item
                        }));
                    });
                }

                jQuery('#test-popup').find('.top_div span.change_title').html('');
                jQuery('#test-popup').find('.top_div span.change_title').html(pTitle);
                jQuery('#test-popup').find('input[name="sent_to_email"]').val(pEmail);
                jQuery('#test-popup').find('form[name="center_form"]').attr("data-pid", pid);
            },
            open: function() {
                //console.log("opened");
            },
            close: function() {

            }

          }

    });
}

function fix_center_position(){
    jQuery(".content_m .row").each(function(){
        var targetElement = jQuery(this).find(".center_col_img");
        var moviedElement = jQuery(this).find(".large-6").first();
        jQuery(targetElement).insertBefore(moviedElement);
    })
}

jQuery(document).ready(function(){

    open_contact_popup();

    fix_center_position();

    jQuery('input[name=center_email]').focus(function(){
        jQuery(this).removeClass('email_b_red');
        jQuery('span.email_err').hide();
    });

    jQuery("button#checkout_out_btn").click(function(event) {

            event.preventDefault();

            var ans1        = jQuery('input:radio[name=answer_one]:checked').val();
            var ans2        = jQuery('#select_opt option:checked').attr('data-id');
            var ans3        = jQuery('#sliderOutput2').val();
            var fullname    = jQuery('input:text[name=center_fullname]').val();
            var email       = jQuery('input[name=center_email]').val();
            var errors      = false;

            var data     = {
                type: "POST",
                action: "send_email_from_steps",
                ans1 : ans1,
                ans2 : ans2,
                ans3 : ans3,
                fullname : fullname,
                email : email,
                data_type : "json"
            };

            if( !isValidEmailAddress(email) ){
                errors = true;
                jQuery('input[name=center_email]').addClass(' email_b_red ');
                jQuery('span.email_err').show();
              //  jQuery('span.email_err').html('Fill Email Address');
            }

            if(!errors) {
                jQuery('.done_steps_loader').show();
                jQuery.post( ajaxurl, data, function(response) {
                    result = jQuery.parseJSON(response);
                    if(result.to_admin){
                        jQuery('.done_steps_loader').hide();
                        nofityUser(result.to_admin);
                    }
                });
            }

    });

    jQuery('select#select_reg, select#select_reg_m').change(function() {
        jQuery("select#select_cnt option , select#select_cnt_m option").remove();
        var soption = '<option disabled value="0">Select Country</option>';

        jQuery('#select_cnt').append(soption);
        jQuery("#select_cnt_m").append(soption);

        jQuery("#select_cnt").removeAttr("disabled");
        jQuery("#select_cnt_m").removeAttr("disabled");

        var parent_id = jQuery('option:selected', this).val();

            var data     = {
                type: "POST",
                action: "get_country_from_region",
                parent_id : parent_id,
                data_type : "json"
            };


           if (parent_id) {
            jQuery('.change_country_loader').show();
            jQuery("#select_cnt").prop('disabled', 'disabled');
            jQuery("#select_cnt_m").prop('disabled', 'disabled');
            jQuery.post( ajaxurl, data, function(response) {

                jQuery('.change_country_loader').hide();
                jQuery("#select_cnt").removeAttr("disabled");
                jQuery("#select_cnt_m").removeAttr("disabled");
                result = jQuery.parseJSON(response);
                if(result){

                  jQuery.each(result, function(key, value) {
                        var option = '<option value='+key+'>'+value+'</option>';
                        jQuery('#select_cnt').append(option);
                        jQuery("#select_cnt_m").append(option);
                    });
                }

            });
           }

    });

    jQuery('select#select_cnt, select#select_cnt_m').change(function() {
        jQuery('.no_centers').hide();
        jQuery('#panel2').html('');
        jQuery('.content_m').html('');

        jQuery('.loader_div').show();
        var country_term_id = jQuery(this).val();
        var data     = {
            type: "POST",
            action: "get_all_posts_from_country",
            country_term_id : country_term_id,
            data_type : "json"
        };

       if (country_term_id) {
             jQuery.post( ajaxurl, data, function(response) {
               jQuery('.loader_div').hide();
                result = jQuery.parseJSON(response);
                //console.log(result.html);
                if(result.html){
                    jQuery("#panel2").html(result.html);
                     jQuery('.content_m').html(result.html);
                    open_contact_popup();
                    fix_center_position();
                }else{
                    jQuery('.no_centers').show();
                }
            });
       }

    });

    jQuery('form[name="center_form"]').submit(function(e){
        e.preventDefault();
        var fullname        = jQuery(this).find('input[name="c_fullname"]').val();
        var phone           = jQuery(this).find('input[name="c_phone"]').val();
        var email           = jQuery(this).find('input[name="c_email"]').val();
        var comment         = jQuery(this).find('textarea[name="c_comment"]').val();
        var pid             = jQuery(this).attr('data-pid');

        var errors    = false;
        var data  = {
            type      : "POST",
            action    : "send_email_to_center",
            fullname  : fullname,
            phone     : phone,
            email     : email,
            comment   : comment,
            pid       : pid,
            data_type : "json"
        };

        if( !isValidEmailAddress(email) ){
            errors = true;
        }

        if ( fullname == '' || fullname == ' ' ) {
            jQuery('input[name="c_fullname"]').css('border','1px solid red');
        }
        if ( email == '' ) {
            jQuery('input[name="c_email"]').css('border','1px solid red');
        }
        if ( phone == '' || phone == ' ' ) {
            jQuery('input[name="c_phone"]').css('border','1px solid red');
        }

        if(!errors) {
            jQuery('.center_form_popup .done_form_center_loader').css('visibility','visible');

            jQuery.post( ajaxurl, data, function(response) {
                jQuery('.center_form_popup .done_form_center_loader').css('visibility','hidden');
                result = jQuery.parseJSON(response);
                    console.log(result.mailto);
                if(result.mail){
                    location.reload();
                }
            });
        }
    });
}); // end ready
