document.addEventListener("DOMContentLoaded", () => {
  // FOOTER DINÁMICO
  document.querySelector("#currentyear").textContent = new Date().getFullYear();
  document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
  document.querySelector("#footer-info").innerHTML = 
    `&copy;${new Date().getFullYear()} 🌸 Rubia Magdalena Francesco 🌸 Madagascar`;

  // MENÚ HAMBURGUESA
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuBtn.innerHTML = navMenu.classList.contains("show") ? "&#10005;" : "&#9776;";
  });
});