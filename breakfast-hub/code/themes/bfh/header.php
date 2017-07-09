<header>
    <a href="http://toolkit4kinder.com/breakfast-hub/"><img class="logo" src="<?php bloginfo('template_url');?>/images/logo.png" alt="logo image"></a>
    <ul class="nav">
        <?php if (is_home()): ?>
            <?php echo '<li class="page_item current_page_item">';?>
        <?php else:?>
            <?php echo '<li class="page_item">';?>
        <?php endif;?>
            <a href="http://toolkit4kinder.com/breakfast-hub/">Home</a>
        </li>
        <?php wp_list_pages('title_li='); ?>
    </ul>
</header><!--header-->