const btn = document.getElementById("btn-toggle-menu");
const menu = document.getElementById("menu-nav");
const header = document.getElementById("header");

function toggleMenu() {
    menu.classList.toggle("show");
}

function handleResize() {
    if (window.innerWidth <= 768) {
        btn.addEventListener("click", toggleMenu );
    }else {
        menu.classList.remove("show");
        btn.removeEventListener("click", toggleMenu);
    }
}

handleResize();

window.addEventListener("resize" , handleResize);

window.addEventListener("scroll" , () => {
    if(window.scrollY > 50) {
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
})