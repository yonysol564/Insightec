<?php 
	$footer_logo = get_field('footer_logo','option');
	$footer_text = get_field('footer_text','option');
?>		 
					 	<footer>
					   		<div class="row">
					   			<div class="footer_div">
						   			<div class="large-12 columns">
						   				<div class="logo_div">
						   					<a href="<?php echo home_url(); ?>">
						   						<img src="<?php echo $footer_logo['url']; ?>" alt="Insightec">
						   					</a>	
						   				</div>
						   				<div class="plus_div">
						   					<img src="<?php echo get_template_directory_uri(); ?>/images/footerplus.png" alt="plus">
						   				</div>
						   				<div class="text_div">
						   					<h4><?php echo $footer_text; ?></h4>
						   				</div>
						   			</div>
						   		</div>	
					   		</div> 
					    </footer> 
		    		</div><!--  wraper -->
				</div><!--  off-canvas-content -->
			</div><!--  off-canvas-wrapper-inner -->
		</div><!--  off-canvas-wrapper -->
    	<?php wp_footer(); ?>
    </body>
</html>