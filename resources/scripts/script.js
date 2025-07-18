$(document).ready(function(){
    $('.img-phrase').css({height: window.innerHeight});
    $(window).scroll(function(){
        var header = $('.header');
        if($(window).scrollTop() > 0){
            header.css('background-color', 'rgba(255, 255, 255, 1)');
            $('.header *').css('color', 'black');
        }else 
            {
                header.css('background-color', 'unset');
                $('.header h1 a').css('color', 'white');
                $('.header .nav a').css('color', 'white');
            }
    })

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
});

function dropdown(){
    document.getElementById("myDropdown").classList.toggle("show");
}