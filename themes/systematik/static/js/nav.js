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