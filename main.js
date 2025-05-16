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
// visitor counter
const hitApiUrl = 'https://baguettejetdatabase.glitch.me/hit';
const countApiUrl = 'https://baguettejetdatabase.glitch.me/count';
function updateVisitorCount() {
  fetch(countApiUrl)
  .then(response => response.json())
  .then(data => {
    const numberElement = document.getElementById('visitor-count');
    if (numberElement) {
      numberElement.innerText = data.visits.toLocaleString(); // format with commas
    }
  })
  .catch(err => {
    console.error('Error fetching visitor count:', err);
  });
}
if (!sessionStorage.getItem("hasVisited")) {
  // First visit in this session: increment count
  fetch(hitApiUrl)
  .then(response => response.json())
  .then(() => {
    sessionStorage.setItem("hasVisited", "true");
    updateVisitorCount();
  })
  .catch(err => {
    console.error('Error hitting count API:', err);
  });
} else {
  // Already visited in this session: just display count
  updateVisitorCount();
}

// location demo: Rome coordinates
const locationDemo = document.getElementById("demo");
const romeLat = 41.9028;
const romeLon = 12.4964;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    locationDemo.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// Haversine formula to calculate distance in kilometers accoriding to chatGPT lol
function getDistanceFromRome(lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const lat1 = romeLat * Math.PI / 180;
  const lon1 = romeLon * Math.PI / 180;
  const lat2Rad = lat2 * Math.PI / 180;
  const lon2Rad = lon2 * Math.PI / 180;
  const dLat = lat2Rad - lat1;
  const dLon = lon2Rad - lon1;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2Rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}
function showPosition(position) {
  const userLat = position.coords.latitude;
  const userLon = position.coords.longitude;
  const distance = getDistanceFromRome(userLat, userLon);
  locationDemo.innerHTML = `You are approximately ${distance.toFixed(2)} km from Rome.`;
}

