const parallax = document.getElementById("parallax");
var distanceToTop = window.scrollY + parallax.getBoundingClientRect().top
window.addEventListener("scroll", function()
{   
    let distanceToTop = parallax.getBoundingClientRect().top
    if (window.scrollY >= distanceToTop) {
        let offset = window.scrollY;
        parallax.style.backgroundPositionX = window.innerWidth + 2000 + -4 * offset + "px";
        parallax.style.backgroundPositionY = offset * 0.9 - distanceToTop + "px";
    }
    else {
        parallax.style.backgroundPositionX = window.innerWidth + 2000 + "px";
    }
})

function themeMode() {
    var element = document.body;
    let content = document.getElementById("themeButton");
    if (content.innerText == "Light") content.innerText = "Dark";
    else content.innerText = "Light"
    element.classList.toggle("light-mode");
}
