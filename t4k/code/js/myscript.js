(function (){

}());


(function (){
    $(window).on("load", function (){
        $("body").removeClass("preload");
    })
}());

(function (){
    $(".category .tab").on("click", function (){
        var current_cat = $(".category .tab.active").attr("data-cat");
        var next_cat = $(this).attr("data-cat");
        
        // set active sub-category
        $(".sub-category." + current_cat).addClass("hidden");
        $(".sub-category." + next_cat).removeClass("hidden");
        
        // set active tab
        $(".category .tab.active").removeClass("active");
        $(this).addClass("active");        
	});
}());