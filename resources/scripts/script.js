$(document).ready(function(){
    /*fixed header invades section */
    $('.img-phrase').css({height: window.innerHeight});
    $(window).scroll(function(){
        var header = $('.header');
        if($(window).scrollTop() > 0){
            header.css('background-color', 'rgba(255, 255, 255, 1)');
            $('.header *').css('color', 'black');
        }else header.css('background-color', 'unset') && $('.header *').css('color', 'white');
    })
});