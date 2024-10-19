const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let value_y = window.scrollY;
  if (value_y > 10) {
    navbar.style.borderBottom = "1px solid black";
  } else {
    navbar.style.border = "none";
  }
});
