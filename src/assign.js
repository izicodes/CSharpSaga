document.addEventListener("DOMContentLoaded", function () {
  // Variables
  const goUpIcon = document.querySelector("#goUpIcon");
  const selectElement = document.getElementById("status-select-group");

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  hamburger.onclick = function () {
    nav.classList.toggle("active");
  };

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

  selectElement.addEventListener("change", function () {
    const selectedOption = this.value;

    if (selectedOption === "not-started") {
      selectElement.style.backgroundColor = "#ccc";
    } else if (selectedOption === "working") {
      selectElement.style.backgroundColor = "#f3d8ba";
    } else if (selectedOption === "completed") {
      selectElement.style.backgroundColor = "#a7e1a4";
    }
  });
});
