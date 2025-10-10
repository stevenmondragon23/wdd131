document.addEventListener("DOMContentLoaded", () => {
  const menubtn = document.getElementById('menu-btn');
  const navigation = document.getElementById('navigation');

  menubtn.addEventListener('click', () => {
    navigation.classList.toggle("show");
    menubtn.innerHTML = navigation.classList.contains("show") ? "&#10005;" : "&#9776;";
  });
});