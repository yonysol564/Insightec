<?php get_header(); ?>
<?php 
	//global $wp_query;
	//print_r($wp_query);
 ?>


<?php if (have_posts()) : while (have_posts()) : the_post(); ?>	
		<div class="single_story_bg">
			<div class="row">

		<!-- 	<div class="yotube_video_wrapper">
				<iframe src="https://www.youtube.com/embed/LumvIgV34Gk" width="471" height="270" frameborder="0" allowfullscreen="">
		                            </iframe>
			</div> -->

			    <?php $arrowright =  get_template_directory_uri() . '/images/singlearrright.png'; ?>
                <?php $arrowleft =  get_template_directory_uri() . '/images/singlearrleft.png'; ?>  

                <?php next_post_link( '%link', '<img class="arrowright" src="' . $arrowright . '" alt="next" title="next">'); ?>
                <?php previous_post_link('%link', '<img class="arrowleft" src="' . $arrowleft . '" alt="prev" title="prev">' ); ?>
			
			</div>
		</div>
		<section class="single_story_sec">
			<div class="row single_story_row">
				<div clas s="large-12 columns">
					<div class="h1_div">
						<h1>
							<?php the_title(); ?>
						</h1>
						<img src="<?php echo get_template_directory_uri(); ?>/images/bghomeplus.png" alt="<?php the_title(); ?>">
					</div>
					<div class="content_div">
							<?php the_content(); ?>
					</div>
				</div>
			</div>
		</section>
	<?php		  
 endwhile;
 endif; 
?>

<?php get_footer(); ?>

 
