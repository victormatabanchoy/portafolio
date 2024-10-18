const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

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
