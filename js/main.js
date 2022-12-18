const navButton = document.querySelector(".nav-button");
const navLogo = document.querySelector(".nav-logo-container");
const navUl = document.querySelector(".nav-list");

navButton.addEventListener("click", function () {
    if(navLogo.classList.contains("show-nav")) {
        navLogo.classList.remove("show-nav");
        navUl.classList.remove("show-nav");

    } else {
        navLogo.classList.add("show-nav");
        navUl.classList.add("show-nav");

    }
});