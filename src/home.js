document.addEventListener("DOMContentLoaded", function () {
  //   Variables
  const arrowIcon = document.querySelector("#go-down-icon");
  const goUpIcon = document.querySelector("#goUpIcon");
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  // ------------------------------------------------------- //

  arrowIcon.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = "#featured-assignments";
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      duration: 5500,
    });
  });

  goUpIcon.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = "#myNav";
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
      duration: 1000,
    });
  });

  hamburger.onclick = function () {
    nav.classList.toggle("active");
  };
});
