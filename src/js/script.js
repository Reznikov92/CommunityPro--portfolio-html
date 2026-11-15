const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Toggle mobile menu
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

// Apply and store color theme
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function switchTheme(e) {
  applyTheme(e.target.checked ? "dark" : "light");
}

toggleSwitch.addEventListener("change", switchTheme);

// Load saved user theme preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleSwitch.checked = currentTheme === "dark";
}

// Set current year in footer
const myDate = document.querySelector("#datee");
if (myDate) {
  myDate.textContent = new Date().getFullYear();
}
