const navbar = document.getElementById("navbar");
const dropdownElements = document.querySelectorAll(".animation-dropdown");

const navElements = [nav1, nav2, nav3, nav4];

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
