<div class="row steps_div">
	<div class="large-12 columns">
		<!--====================== Step 1 ======================-->
		<div class="row large-up-2 medium-up-2 element_row mobile_bg">
			<div class="column">
				<div class="text_column">
					<div class="steps step_1 step_done">
						<div class="num_step">
							<div class="inner_div">
								<span>1</span>
							</div>
						</div>
						<div class="text_div">
							<?php 
								$qu1 = get_field('step_one_que' , 'option');
								echo $qu1; 
							?> 
						</div>
						<div class="vertical_line line_done"></div>
					</div>
				</div>
			</div>
			<div class="column mob_pad">
				<div class="radio_div">
					<ul class="button-group round toggle" data-toggle="buttons-radio">
						<?php 
						$counter = 1;
						?>
						<?php if( have_rows('step_one_ans', 'option') ):
				            while ( have_rows('step_one_ans', 'option') ) : the_row();
				            $step_one_answer_label = get_sub_field('step_one_answer_label');
				            $step_one_answer = get_sub_field('step_one_answer');				    
				        ?>   
					      <li>
					        <input value="<?php if($step_one_answer) { echo '1'; }else{ echo '0'; } ?>" type="radio" id="r<?php echo $counter; ?>" name="answer_one" <?php if($counter == 1){ echo 'checked="checked"'; } ?> data-toggle="button">
					        <label class="button" for="r<?php echo $counter; ?>"><?php echo $step_one_answer_label; ?></label>
					      </li>	
				        <?php $counter++; endwhile; endif; ?>	
				    </ul>
				</div>
			</div>
		</div>

		<!--====================== Step 2 ======================-->
		<div class="row large-up-2 medium-up-2 element_row">
			<div class="column">
				<div class="text_column">
					<div class="steps step_2">
						<div class="num_step">
							<div class="inner_div">
								<span>2</span>
							</div>
						</div>
						<?php $qu2 = get_field('step_two_que' , 'option'); ?>
						<?php if($qu2): ?>
							<div class="text_div">
								<?php echo $qu2; ?> 
							</div>
						<?php endif; ?>
						<div class="vertical_line line_done"></div>
					</div>
				</div>
			</div>
			<div class="column mob_pad">
				<div class="select_div">
					<select id="select_opt">
						<option value="" disabled selected><?php _e('All','insightec'); ?></option>	
						<?php if( have_rows('step_two_ans', 'option') ):
				            while ( have_rows('step_two_ans', 'option') ) : the_row();
				            $step_two_answer_label = get_sub_field('step_two_answer_label');
				            $step_two_answer = get_sub_field('step_two_answer');				    
				        ?>   
								<option data-id="<?php if($step_two_answer) { echo '1'; }else{ echo '0'; } ?>"  value="husker"><?php echo $step_two_answer_label; ?></option>
				        <?php endwhile; endif; ?>	
				  	</select>
				</div>																				
			</div>
		</div>

		<!--====================== Step 3 ======================-->
		<div class="row large-up-2 medium-up-2 element_row mobile_bg">
			<div class="column">
				<div class="text_column">
					<div class="steps step_3">
						<div class="num_step">
							<div class="inner_div">
								<span>3</span>
							</div>
						</div>
						<?php $qu3 = get_field('step_three_que' , 'option'); ?>
						<?php if($qu3): ?>												
							<div class="text_div">
								<?php echo $qu3; ?> 
							</div>
						<?php endif; ?>
						<div class="vertical_line line_done"></div>
					</div>										
				</div>
			</div>
			<div class="column mob_pad">
				<div class="range_wrapper">

				  <div id="range_slide" class="slider" data-slider data-decimal="0" data-start="0" data-initial-start="18" data-end="55" data-step="1">
				    <span class="slider-handle" data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput2">
				    	<div class="input_wrap"><input id="sliderOutput2"></div>
				    </span>
				    <span class="slider-fill" data-slider-fill></span>
				    
				  </div>
				  
	
				  <div class="numbers_range">
				  	<div class="div_18">
					  	18
					  </div>
					<div class="div_55">
					  	55+
					</div>
				  </div>

				</div>										
			</div>
		</div>
		
		<!--====================== Step 4 ======================-->
		<div class="row large-up-2 medium-up-2  element_row">	
			<div class="column">
				<div class="text_column">
					<div class="steps step_4">
						<div class="wraper_div_mob">
							<div class="num_step">
								<div class="inner_div">
									<span>4</span>
								</div>
							</div>							
						</div>	
						<div class="text_div text_div_last">
							<?php $fullname = get_field('full_name_text' , 'option'); ?>
							<label>
								<?php echo $fullname; ?>
								<input name="center_fullname" type="text" placeholder="">
							</label>
						</div>	
						<div class="vertical_line line_done"></div>	
					</div>							
				</div>
			</div>
			<div class="column">
				<div class="text_div">
					<?php $email = get_field('email_text' , 'option');?>
					<label>

						<?php echo $email; ?><span class="form_ast">*</span><span class="email_err"><?php _e('Fill Email Address','insightec');?></span>
						<input name="center_email" type="email" placeholder="">
					</label>
				</div>										
			</div>							
		</div>

		<div class="row">
			<div class="large-12 column">
				<div class="done_steps_loader">
					<img src="<?php echo get_template_directory_uri(); ?>/images/loadersteps.gif" title="" alt="loader">
				</div>
			</div>
		</div>
	</div>	
</div>