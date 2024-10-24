// const checkboxContainer = document.querySelector(".checkbox");
// const body = document.querySelector("body");

// let checked = false;
// checkboxContainer.addEventListener("click", () => {
//   if (!checked) {
//     checkboxContainer.style.boxShadow = "0 0 2px white";
//     checkboxContainer.style.setProperty("--before-left", "50%");
//     checkboxContainer.style.setProperty("--before-bgColor", "white");
//     checkboxContainer.style.boxShadow = "0 0 2px white";
//     body.style.backgroundColor = "black";
//     checked = true;
//   } else {
//     checkboxContainer.style.setProperty("--before-left", "10%");
//     checkboxContainer.style.boxShadow = "0 0 2px black";
//     body.style.backgroundColor = "white";

//     checked = false;
//   }
// });

const navbar = document.getElementById("navbar");
const dropdownElements = document.querySelectorAll(".animation-dropdown");

const navElements = [nav1, nav2, nav3, nav4, nav5];

const nav_menu = document.querySelector(".bx-menu");
const navbar_mobile = document.querySelector(".container-mobile");
const nav_mobile = document.querySelectorAll(".nav-mobile");
const anchor_mobile = document.querySelectorAll(".navlist-mobile li a");
let navbarActive = false;

anchor_mobile.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    anchor_mobile.forEach((item) =>
      item.style.setProperty("--navwidthMobile", "0")
    );

    anchor.style.setProperty("--navwidthMobile", "100%");
  });
});

nav_mobile.forEach((nav, index) => {
  nav.onclick = function () {
    nav_mobile.forEach((alamak) => alamak.classList.remove("active"));
    nav_mobile[index].classList.add("active");
  };
});

nav_menu.addEventListener("click", () => {
  if (!navbarActive) {
    navbar_mobile.style.width = "180px";
    navbarActive = true;
  } else {
    navbarActive = false;
    navbar_mobile.style.width = "0";
    navbar_mobile.style.height = "100vh";
  }
});

document.addEventListener("click", (event) => {
  if (
    navbarActive &&
    !nav_menu.contains(event.target) &&
    !navbar_mobile.contains(event.target)
  ) {
    navbarActive = false;
    navbar_mobile.style.width = "0";
  }
});

navElements.forEach((nav, index) => {
  nav.onclick = function () {
    navElements.forEach((el) => el.classList.remove("active"));
    nav.classList.add("active");
  };
});
window.addEventListener("scroll", () => {
  let value_y = window.scrollY;
  if (value_y > 10) {
    navbar.style.borderBottom = "0.1px solid black";
    navbarActive = false;
    navbar_mobile.style.width = "0";
  } else {
    navbar.style.border = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn-aboutme");
  const homeImageProfile = document.querySelector(".container img");

  dropdownElements.forEach((element) => {
    button.style.setProperty("--before-width", "100%");
    setTimeout(() => {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
      homeImageProfile.style.transform = "translateX(0) rotate(-720deg)";
      button.style.setProperty("--before-width", "0");
    }, 500);
  });
});

document.addEventListener("scroll", function () {
  const aboutImageProfile = document.querySelector(".card-about img");
  const aboutImageProfilePosition =
    aboutImageProfile.getBoundingClientRect().top;

  if (
    aboutImageProfilePosition < window.innerHeight &&
    aboutImageProfilePosition > 0
  ) {
    aboutImageProfile.style.margin = "0";
    aboutImageProfile.style.transform = "translateX(0) rotate(720deg)";
  }

  const skillsSection = document.getElementById("skill");
  const skillsPosition = skillsSection.getBoundingClientRect().top;

  const buttonAboutMe = document.querySelector(".btn-aboutme");
  const buttonAboutMePosition = buttonAboutMe.getBoundingClientRect().top;

  if (buttonAboutMePosition < window.innerHeight && buttonAboutMePosition > 0) {
    buttonAboutMe.style.setProperty("--before-width", "0");
  } else {
    buttonAboutMe.style.setProperty("--before-width", "100% ");
  }
  dropdownElements.forEach((element) => {
    const position = element.getBoundingClientRect().top + 100;

    if (position < window.innerHeight && position > 0) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    } else {
      element.style.opacity = 0;
      element.style.transform = "translateY(-10px)";
    }
  });

  if (skillsPosition < window.innerHeight) {
    const skills = [
      { id: "html-skill", width: "70%" },
      { id: "css-skill", width: "65%" },
      { id: "js-skill", width: "10%" },
      { id: "php-skill", width: "5%" },
    ];
    skills.forEach((skill) => {
      const skillBar = document.getElementById(skill.id);
      if (skillBar) {
        skillBar.style.width = skill.width;
        skillBar.style.transition = "width 1.5s ease-in-out";
      }
    });
  } else {
    const skills = [
      { id: "html-skill", width: "0" },
      { id: "css-skill", width: "0" },
      { id: "js-skill", width: "0" },
      { id: "php-skill", width: "0" },
    ];
    skills.forEach((skill) => {
      const skillBar = document.getElementById(skill.id);
      if (skillBar) {
        skillBar.style.width = skill.width;
        skillBar.style.transition = "width 0.5s ease-in-out";
      }
    });
  }
});

// Project card animation button hover
const buttonCard = document.querySelectorAll(".visit-project");
const projectCard = document.querySelectorAll(".project-card");

buttonCard.forEach((button, index) => {
  button.addEventListener("mouseenter", () => {
    projectCard[index].style.setProperty("--height", "30%");
  });

  button.addEventListener("mouseleave", () => {
    projectCard[index].style.setProperty("--height", "0");
  });
});
