$(document).ready(function(){ 
   $('a').nivoLightbox(); 
    
    $('.nivo').nivoLightbox({
        effect:'slideLeft',
        keyboardNav:false,
});
    
}); 



// NAV SCROLL
                     
$(document).ready(function () {
    $(window).scroll(function () {
        
        
        if ($(window).scrollTop() > 8) {
            $('#splash-txt1').fadeOut(600);
            $('#splash-txt2').fadeOut(600);
            $('#title-txt').fadeOut(600);
        }
        
        
        if ($(window).scrollTop() < 8) {
            $('#splash-txt1').fadeIn(600);
            $('#splash-txt2').fadeIn(600);
            $('#title-txt').fadeIn(600);
        }
        
    });
});

