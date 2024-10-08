const hamburger = document.querySelector(".mobile-hamburger"); // Select the hamburger icon
const navLinks = document.querySelector(".navigation-links > ul"); // Select the ul within navigation-links

hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
