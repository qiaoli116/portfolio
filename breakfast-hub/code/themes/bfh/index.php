<?php global $wp_query; ?>
<?php if ( !$current_page = get_query_var('paged') ) : ?>
<?php	 $current_page = 1; ?>
<?php endif; ?>
<?php $args = array(
	'base'               => get_pagenum_link(1) . '%_%',
	'format'             => '?paged=%#%',
	'total'              => $wp_query->max_num_pages,
	'current'            => $current_page,
	'show_all'           => false,
	'end_size'           => 1,
	'mid_size'           => 2,
	'prev_next'          => true,
	'prev_text'          => __('« Previous'),
	'next_text'          => __('Next »'),
	'type'               => 'plain',
	'add_args'           => false,
	'add_fragment'       => '',
	'before_page_number' => '',
	'after_page_number'  => ''
); ?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><?php bloginfo('name'); ?></title>
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
        <?php get_header();?>
        <div class="clearfix">

            <?php if (is_home()): ?>
                <?php echo "<main>";?>
            <?php endif?><!--(if is_home()) openning main tag-->
            
            <!-- >>> main loop to display post -->
            <?php if (have_posts()) :  ?>
                <?php while (have_posts()) : the_post(); ?>
                    <?php if (is_home()): ?>
                        <div class="post-list">
                            <a class="post-title" href="<?php the_permalink();?>">
                                <?php the_title(); ?>
                            </a>
                    <?php endif?><!--(if is_home()) show link and title-->
                            <div class="post-content"><?php the_content();?></div>
                    <?php if (is_home()): ?>
                        </div><!--post-list-->
                    <?php endif?>
                <?php endwhile; // while (have_posts()) : the_post()?>
            <?php else: // if (have_posts())?>
                <?php echo   '<p>No content found</p>'; ?>
            <?php endif; // if (have_posts())?>
            <!-- <<< main loop to display post -->
            
            
            <?php if (is_home()): ?>
                <div class="post-page"><?php echo paginate_links( $args ); ?></div>
                <?php echo "</main>";?>
            <?php endif?><!--(if is_home()) closing main tag-->
            
            
            <?php if (is_home()): ?>
                
                <aside>
                    <?php get_sidebar();?>
                    
                </aside>
            <?php endif?><!--(if is_home())-->

        </div><!--clearfix-->
        <footer>
            <?php get_footer(); ?>

        </footer><!--footer-->
    </div><!--wrapper-->
    <script src="https://use.fontawesome.com/698c101a4e.js"></script>
</body>
</html>

    