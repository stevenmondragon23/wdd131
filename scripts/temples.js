document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuBtn.innerHTML = navMenu.classList.contains("show") ? "&#10005;" : "&#9776;";
  });
});