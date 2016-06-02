<?php /* Template Name: About */  ?>
<?php get_header();  ?>
<?php 
	$about_bg_img = get_field('about_bg_img'); 
	$about_bgtitle = get_field('about_bgtitle'); 
?>
		
		<div class="about_bg" style="background-image: url('<?php echo $about_bg_img['url']; ?>');">
			<div class="row">
				<div class="large-6 columns header_col">
				<div class="top_div">
					<h1><?php echo $about_bgtitle; ?></h1>
				</div>
				<div class="bottom_div">
					
				</div>
				</div>
			</div>
		</div>
		<?php 
			$therapy_bg_img = get_field('therapy_bg_img');  
			$therapy_bg_img_text = get_field('therapy_bg_img_text'); 
			$therapy_section_text = get_field('therapy_section_text');  
		?>
		<section class="about_sec">
			<div class="about_img_div" style="background-image: url('<?php echo $therapy_bg_img['url']; ?>');">
				<div class="img_inner_div">
					<?php echo $therapy_bg_img_text; ?>		
				</div>
			</div>	

			<div class="about_text_div">
				<div class="rinner_div">
					<?php echo $therapy_section_text; ?>
				</div>
			</div>		
		</section>	

		<section class="about_sec_bottom">
			<?php 
				$about_bottom_title = get_field('about_bottom_title');  
				$about_bottom_content = get_field('about_bottom_content'); 
			?>
			<div class="row">
				<div class="large-12 columns">
					<h4>
						<?php echo $about_bottom_title; ?>
					</h4>
				</div>

			</div>
			<div class="row">
				<div class="large-12 columns">
					<?php echo $about_bottom_content; ?>
				</div>	
			</div>

		</section>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
