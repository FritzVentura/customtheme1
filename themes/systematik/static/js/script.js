/*function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}*/

$(document).ready(function(){ 
   $('a').nivoLightbox(); 
    
    $('.nivo').nivoLightbox({
        effect:'slideLeft',
        keyboardNav:false,
});
    
}); 

