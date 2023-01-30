const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll("#navbar ul li a");

// Function to change navlink style on scroll
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 80) {
      current = section.getAttribute("id"); }
  });

  navLink.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};