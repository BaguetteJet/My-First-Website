// logo parallax
const parallax = document.getElementById("parallax");
var distanceToTop = window.scrollY + parallax.getBoundingClientRect().top
window.addEventListener("scroll", function()
{   
    let distanceToTop = parallax.getBoundingClientRect().top
    let distnaceToStart = parallax.offsetTop
    if (distanceToTop <= -100) {
        let offset = window.scrollY - distnaceToStart;
        parallax.style.backgroundPositionX = window.innerWidth + 500 + -4 * offset + "px";
        parallax.style.backgroundPositionY = offset * 0.9 - distanceToTop + "px";
    }
    else {
        parallax.style.backgroundPositionX = window.innerWidth + 2000 + "px";
    }
})
// theme
function themeMode() {
    var element = document.body;
    let content = document.getElementById("themeButton");
    if (content.innerText == "Light") content.innerText = "Dark";
    else content.innerText = "Light";
    element.classList.toggle("light-mode");
}
// menu
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
    // show/hide menu when button clicked
menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
})
    // hide menu when click event occurs outside menu
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.add('hidden');
  }
})

