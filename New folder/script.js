let navToggleStatus = false;

let toggleNav = function() {
    let getsidebar = document.querySelector(".nav-sidebar");
    let getsidebarUl = document.querySelector(".nav-sidebar ul");
    let getsidebarTitle = document.querySelector(".nav-sidebar span");
    let getsidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if(navToggleStatus === false) {
    getsidebarUl.style.visibility = "visible";
    getsidebar.style.width = "272px";
    getsidebarTitle.style.opacity = "0.5";

    let arrayLength = getsidebarLinks.length;
    for (let i=0; i<arrayLength; i++){
        getsidebarLinks[i].style.opacity = "1";
    }

    navToggleStatus = true;

    }
    else if(navToggleStatus === true) {
    getsidebar.style.width = "50px";
    getsidebarTitle.style.opacity = "0";

    let arrayLength = getsidebarLinks.length;
    for (let i=0; i<arrayLength; i++){
        getsidebarLinks[i].style.opacity = "0";
    }
    getsidebarUl.style.visibility = "hidden";
    navToggleStatus = false;

    }
}