const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const isOpen = navMenu.classList.contains("active");

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});
