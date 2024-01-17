document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const profileImage = document.getElementById("profileImage");
  const logo = document.getElementById("logo");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      // Inverte as cores da imagem profileImage para branco
      profileImage.style.filter = "invert(1)";
      // Inverte as cores da logo para branco
      logo.style.filter = "invert(1)";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      // Remove a inversão das cores da imagem profileImage
      profileImage.style.filter = "none";
      // Remove a inversão das cores da logo
      logo.style.filter = "none";
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);

  // Save user preference on load
  const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
      profileImage.style.filter = "invert(1)";
      logo.style.filter = "invert(1)";
    }
  }

  // Adding date
  let myDate = document.querySelector("#datee");
  const year = new Date().getFullYear();
  myDate.innerHTML = year;
});
