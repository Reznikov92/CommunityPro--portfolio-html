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

// Load saved user theme preference or detect system preference
const currentTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleSwitch.checked = currentTheme === "dark";
} else if (prefersDark.matches) {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleSwitch.checked = true;
}

// Listen for system theme changes if user hasn't set a manual preference
prefersDark.addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    const newTheme = e.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    toggleSwitch.checked = e.matches;
  }
});


// Set current year in footer
const myDate = document.querySelector("#datee");
if (myDate) {
  myDate.textContent = new Date().getFullYear();
}
