<?php 
if(function_exists('register_sidebar')){ //If there is a widget friendly sidebar
	register_sidebar(array(
        'before_widget'=>'<div>', //Add a <li> element before a widget
        'after_widget' =>'</div>', //Add a </li> element after a widget
        'before_title' => '<p>', //Add a <h2> element before a widget title
        'after_title' => '</p>' //Add a <h2> element after a widget title
			          ));
}
?>