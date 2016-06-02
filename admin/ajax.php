<?php
add_action( 'wp_enqueue_scripts', 'add_frontend_ajax_javascript_file' );
function add_frontend_ajax_javascript_file() {
    wp_enqueue_script( 'ajax_custom_script', THEME_DIR . '/admin/ajax.js', array('jquery') );
    wp_localize_script( 'ajax_custom_script', 'ajaxurl', admin_url( 'admin-ajax.php' ));
}

add_action( 'wp_ajax_send_email_from_steps', 'send_email_from_steps' );
add_action( 'wp_ajax_nopriv_send_email_from_steps', 'send_email_from_steps' );

add_action( 'wp_ajax_get_country_from_region', 'get_country_from_region' );
add_action( 'wp_ajax_nopriv_get_country_from_region', 'get_country_from_region' );

add_action( 'wp_ajax_get_all_posts_from_country', 'get_all_posts_from_country' );
add_action( 'wp_ajax_nopriv_get_all_posts_from_country', 'get_all_posts_from_country' );

add_action( 'wp_ajax_send_email_to_center', 'send_email_to_center' );
add_action( 'wp_ajax_nopriv_send_email_to_center', 'send_email_to_center' );

function send_email_from_steps() {
	$ans1 		= isset($_POST['ans1']) ? sanitize_text_field($_POST['ans1'] ) : '';
	$ans2 		= isset($_POST['ans2']) ? sanitize_text_field($_POST['ans2'] ) : '';
	$ans3 		= isset($_POST['ans3']) ? sanitize_text_field($_POST['ans3'] ) : '';
	$fullname 	= isset($_POST['fullname']) ? sanitize_text_field($_POST['fullname'] ) : '';
	$email 		= isset($_POST['email']) ? sanitize_text_field($_POST['email'] ) : '';

	$response = array();

	if( $ans1 == 0 || $ans2 == 0 ) {
		$email_message = "לא התקבלת";
	} else {
		$email_message = "התקבלת!";
	}

	if( $fullname && $email ) {

		$send_to_user = send_mail_to_user($ans1, $ans2, $ans3, $fullname, $email, $email_message);

		$send_to_admin = send_mail_to_admin($ans1,$ans2,$ans3,$fullname, $email);

		if($send_to_admin) {
			$response['to_admin'] = "email sent to admin";
		}

		echo json_encode($response);

	}
	die();
}

function get_country_from_region(){
	$parent_id = isset($_POST['parent_id']) ? sanitize_text_field( $_POST['parent_id']  ) : '';
	$countries = get_terms( 'location', array( 'parent'=> $parent_id , 'hide_empty'=>false) );
	$options = array();

	if($countries) {
		foreach($countries as $country) {
			$options[$country->term_id] = $country->name;
		}
		echo json_encode($options);
	}

	die();
}

function get_all_posts_from_country(){

	$country_term_id = isset($_POST['country_term_id']) ? sanitize_text_field( $_POST['country_term_id']  ) : '';
	$center_args = array(
		'post_type'			=> 'center',
		'posts_per_page'	=> -1,
		'tax_query'			=> array(
			array(
				'terms'		=> $country_term_id,
				'field'		=> 'term_id',
				'taxonomy'	=> 'location'
			)
		)
	);
	$result = array();
	$center_query = new WP_Query($center_args);

	ob_start();

    if( $center_query->have_posts() ) {
        while($center_query->have_posts()): $center_query->the_post();
            global $post;
            get_template_part("inc/ajax","center");
        endwhile; wp_reset_query();
    } else {
        ?>
        <div class="ajax_response_message no_centers">
            <?php _e('There is no Centers','insightec'); ?>
        </div>
        <?php
    }



	$results['html'] = ob_get_clean();

	echo json_encode($results);

	die();
}

function send_mail_to_user($ans1, $ans2, $ans3, $fullname, $email, $email_message) {
	$to = $email;
	$subject = "Hello You are In";
	$email_message = "New message from: ".$ans1.' '.$ans2.' '.$ans3.' '.$fullname.' '. $email ;

	$send_mail = wp_mail( $to, $subject, $email_message);
	if($send_mail) {
		return true;
	} else {
		return false;
	}
}

function send_mail_to_admin( $ans1,$ans2,$ans3,$fullname, $email ) {
	$to = get_option('admin_email');
	$subject = "New form submition";
	$message = "New message from: ".$ans1.' '.$ans2.' '.$ans3.' '.$fullname.' '. $email ;
	$send_mail = wp_mail( $to, $subject, $message);
	if($send_mail) {
		return true;
	} else {
		return false;
	}
}


function send_email_to_center(){

	$result = array();

	$fullname 		= isset($_POST['fullname']) ? sanitize_text_field($_POST['fullname'] ) : '';
	$phone 			= isset($_POST['phone']) ? sanitize_text_field($_POST['phone'] ) : '';
	$email 			= isset($_POST['email']) ? sanitize_text_field($_POST['email'] ) : '';
	$comment 		= isset($_POST['comment']) ? sanitize_text_field($_POST['comment'] ) : '';
	$post_id 	    = isset($_POST['pid']) ? sanitize_text_field($_POST['pid'] ) : '';

	$to = get_field('centeremail',$post_id);

	$result['mailto'] = $to;

	$subject = "New Requests From - " . $fullname;
	$message = "User Details:\n";
	$message .= "Name: " . $fullname . "\n";
	$message .= "Phone: " . $phone . "\n";
	$message .= "Email: " . $email . "\n";
	$message .= "Comment: " . $comment . "\n";

	if(wp_mail( $to , $subject, $message)){
		$result['mail'] = 'success';
	}else{
		$result['mail'] = 'not';
	}

	echo json_encode($result);
	die();
}
