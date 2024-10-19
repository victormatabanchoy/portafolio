const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const togglerColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (toggleIcon.src.includes("moon.png")) {
    toggleIcon.src = "assets/icons/sun.svg";
    toggleText.textContent = "light mode";
  } else {
    toggleIcon.src = "assets/icons/moon.png";
    toggleText.textContent = "Dark mode";
  }
});
togglerColors.addEventListener("click", (e) => {
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});
