/*This function do the targetting the element on the web page and we gonna use that element
whenever we going to click it, it gonna add or remove the open class in that element that have some styling*/ 
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}   