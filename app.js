const toggle_btn = document.querySelector(".toggle-theme");
const body = document.body;

function toggleTheme() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    toggle_btn.textContent = "Dark Mode";
  } else {
    body.classList.add("dark-mode");
    toggle_btn.textContent = "Light Mode";
  }
}
toggle_btn.addEventListener("click", toggleTheme);
