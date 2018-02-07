$(window).on("load", sidenErKlar);

function sidenErKlar() {
    console.log("Menuen er loadet");
    
    $("#nav_open").on("click", navInd);
}

function navInd() {
    console.log("nav ind");
    
    $('#mySidenav').removeClass("sidenav_anim2");
    
    $('#mySidenav').addClass("sidenav_anim1");
    
    $("#nav_open").off("click", navInd);
    
    $("#mySidenav").on("click", navUd);
}


function navUd() {
    console.log("nav ud");
    
    $('#nav_open').removeClass("sidenav_anim");
    
    $('#mySidenav').addClass("sidenav_anim2");
    
    $("#mySidenav").off("click", navUd);
    
    $("#nav_open").on("click", navInd);
}



// NAV SCROLL
                     
$(document).ready(function () {
    $(window).scroll(function () {
        
        
        if ($(window).scrollTop() > 8) {
            $('#splash-txt').fadeOut(800);
        }
        
        
        if ($(window).scrollTop() < 5) {
            $('#splash-txt').fadeIn(800);
        }
        
    });
});

/*function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
}*/

// NAV DESKTOP

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}