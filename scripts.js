//Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "inline") {
        navlinks.style.display === "none";
        menuicon.style.color === "#2a1f14";
    } else {
        navlinks.style.display = "inline";
        menuicon.style.color = "#f6eee4";
    }

}