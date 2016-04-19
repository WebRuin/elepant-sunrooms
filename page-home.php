<?php
/*
 Template Name: Home Page
*/
?>

<?php get_header('landing'); ?>

<!-- Banner -->
		<section id="banner">
			<div class="inner">
				<h2><?php bloginfo('name'); ?></h2>
				<p><?php bloginfo('description'); ?></p>
			</div>
			<a href="#one" class="more scrolly">Learn More</a>
		</section>

	<!-- One -->
		<section id="one" class="wrapper style1 special">
			<div class="inner">
				<header class="major">
					<h2>Arcu aliquet vel lobortis ata nisl<br />
					eget augue amet aliquet nisl cep donec</h2>
					<p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
					fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
				</header>
				<!-- <ul class="icons major">
					<li><span class="icon fa fa-wrench major style1"><span class="label">Lorem</span></span></li>
					<li><span class="icon fa fa-cogs major style2"><span class="label">Ipsum</span></span></li>
					<li><span class="icon fa fa-cubes major style3"><span class="label">Dolor</span></span></li>
				</ul> -->
			</div>
		</section>

		<!-- Landing Posts -->
		<?php echo '<section id="two" class="wrapper alt style2">'; ?>
		<?php query_posts( array ( 'landing' => 'landing' ) ); ?>
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<section class="spotlight">';
				<div class="image">
					<?php the_post_thumbnail( '100%', 'auto'); ?>
				</div>
				<div class="content">
					<h2><?php the_title(); ?></h2>
					<?php the_excerpt(); ?>
				</div>
			</section>
		<?php endwhile; endif; ?>
		<?php echo '</section>'; ?>
		<!-- END Landing Posts -->

<?php get_footer(); ?>
