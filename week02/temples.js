// ----------------- FOOTER DINÁMICO -----------------
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Año dinámico + nombre personalizado
const year = new Date().getFullYear();
document.querySelector("#footer-info").innerHTML = 
  `&copy;${year} 🌸 Rubia Magdalena Francesco 🌸 Madagascar`;

// Última modificación de la página
document.querySelector("#lastModified").textContent = 
  `Last Modification: ${document.lastModified}`;

// ----------------- MENÚ HAMBURGUESA -----------------
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // Cambiar símbolo ☰ ↔ X
  if (navMenu.classList.contains("show")) {
    menuBtn.innerHTML = "&#10005;"; // X
  } else {
    menuBtn.innerHTML = "&#9776;"; // ☰
  }
});
