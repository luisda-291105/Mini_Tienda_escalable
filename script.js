const btn = document.getElementById("btn-toggle-menu");
const menu = document.getElementById("menu-nav");

if (window.innerWidth <= 768){
btn.addEventListener("click", () => {
    if (menu.style.display=== "none") {
        menu.style.display = "block";
    }else {
        menu.style.display= "none"
    }
})
}