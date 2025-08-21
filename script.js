const btn = document.getElementById("btn-toggle-menu");
const menu = document.getElementById("menu-nav");

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