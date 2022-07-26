$(document).ready(function(){

$(window).scroll(function(){
    if($(this).scrollTop() > 40){
        $("#upBtn").fadeIn();
    }else{
        $("#upBtn").fadeOut();
    }
});


    $("#upBtn").click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
    });
});