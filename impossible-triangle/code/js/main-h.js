
(function() {
    // set the height of header to the innerHeight of browser window
    document.getElementsByTagName("header")[0].style.height=window.innerHeight+"px";
}());


    $(function () {
  		$('[data-toggle="popover"]').popover()
	});

(function(){
    // change the style of nav when it moves inside the hero image and outside the horo image
    window.onscroll = function(){

        
        if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
            
            // change the background color of nav to black
            $("#navbarNavAltMarkup").addClass("bk-b");
            $(".navbar-toggler-icon").addClass("bk-b");
        }else{
            // to make the text impossible triangle disappear and appear as the page scrolling by setting the opacity
            var opacityLevel = Math.round(10*document.body.scrollTop/window.innerHeight);
            console.log(opacityLevel);
            switch (opacityLevel) {
                case 0:
                    $(".txt-header-titles img").attr("class", "opacity10");
                    break;
                case 1:
                    $(".txt-header-titles img").attr("class", "opacity08");
                    break;
                case 2:
                    $(".txt-header-titles img").attr("class", "opacity06");
                    break;
                case 3:
                    $(".txt-header-titles img").attr("class", "opacity04");
                    break;
                case 4:
                    $(".txt-header-titles img").attr("class", "opacity02");
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                default:
                    $(".txt-header-titles img").attr("class", "opacity00");
                    break;
                    
            }
            //$(".txt-header-titles img").css("opacity", 1-2*document.body.scrollTop/window.innerHeight);
            
            // change the background color of nav back to transparant
            $("#navbarNavAltMarkup").removeClass("bk-b");
            $(".navbar-toggler-icon").removeClass("bk-b");
        }
    };
}());

(function () {
    // close the login form when clicking the background of login form
	$("#nav-login").click(function (){
		$("#login").toggleClass("display-none");
		$("body").toggleClass("overflow-hidden");
	});
    // close the login form when clicking the background of login form
    $(".login div .close").click(function (){
		$("#login").toggleClass("display-none");
		$("body").toggleClass("overflow-hidden");
	});
	$(".login button[type=submit]").click(function (){
		$("#login").toggleClass("display-none");
		$("body").toggleClass("overflow-hidden");
	});
	$("#login").on("click", function (e){
		if(e.target!==this){return;}
		$("#login").toggleClass("display-none");
		$("body").toggleClass("overflow-hidden");
	});
}());

(function () {
    if (window.imageSlide !== undefined) {
        // initialize portfolio text
        document.addEventListener("imagesliderend", function (e) {
            document.getElementsByClassName("txt-name")[0].innerHTML=document.getElementById(e.detail).getAttribute("name");
            document.getElementsByClassName("txt-details")[0].innerHTML=document.getElementById(e.detail).innerHTML;
        });
        // initialize imageSlider
        imageSlide(0);
    }

}());

(function () {
    // for order.html, set the height of body tag to contain the order-form div
    if ($("#order-form").length>0){
        $("body").height($(".row.order").position().top+$(".row.order").outerHeight());
        window.onresize = function (){
            $("body").height($(".row.order").position().top+$(".row.order").outerHeight());
        }
    }
}());

// this function link the tabs and paragraphs in the about section
function clickAboutTab (e) {
    $(".about .nav-link.active").removeClass("active");
    $(".about .section.active").removeClass("active");
    $(e).toggleClass("active");
    $(".about .section[name='"+$(e).attr("name")+"']").toggleClass("active");
}