// on load
window.onload = function() {
  if (typeof(Storage) !== "undefined") {
    if (Number(localStorage.theme) == 1) themeMode();
    else localStorage.theme = 0;
  }
}
// theme
function themeMode() {
  var element = document.body;
  let content = document.getElementById("themeButton");
  if (content.innerText == "Light") {
    content.innerText = "Dark"
    localStorage.theme = 0
  }
  else {
    content.innerText = "Light"
    localStorage.theme = 1
  }
  element.classList.toggle("light-mode");
}

// menu
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden'); // show/hide menu when button clicked
})
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.add('hidden'); // hide menu when click occurs outside menu
  }
})

// logo parallax
const parallax = document.getElementById("parallax");
var distanceToTop = window.scrollY + parallax.getBoundingClientRect().top
window.addEventListener("scroll", function() {   
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

// location demo
const locationDemo = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    locationDemo.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  locationDemo.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

