import { data } from "./data.js";

let home = document.getElementById("home");
let navbar = document.getElementById("main-nav");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add("sticky");
    home.classList.add("navbarOffsetMargin");
  } else {
    navbar.classList.remove("sticky");
    home.classList.remove("navbarOffsetMargin");
  }
});

const lines = document.querySelectorAll(".line");
const titles = document.querySelectorAll(".section-title");

window.addEventListener("scroll", check_animation);

check_animation();

function check_animation() {
  const trigger = (window.innerHeight / 6) * 4;

  lines.forEach((line) => {
    const top = line.getBoundingClientRect().top;

    if (trigger > top) {
      line.classList.add("line-animation");
    } else {
      line.classList.remove("line-animation");
    }
  });

  titles.forEach((title) => {
    const top = title.getBoundingClientRect().top;

    if (trigger > top) {
      title.classList.add("section-title-animation");
    } else {
      title.classList.remove("section-title-animation");
    }
  });
}

var pix = document.getElementsByClassName("pixel");

for (var i = 0; i < pix.length; i++) {
  pix[i].style.animationDelay = Math.ceil(Math.random() * 5000) + "ms";
}

const skillsSection = document.getElementById("skills-section");

const progressBars = document.querySelectorAll(".progress-bar");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

/* Popup Screen Functionalities Start */
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal with specific content
function openModal(projectKey) {
  // Get the project information based on the project key
  var projectInfo = data[projectKey];

  // Set the content of the modal dynamically
  var modalContent = document.querySelector(".modal-content p");
  modalContent.innerHTML = `
    <p>Project Name: ${projectInfo.projectName}</p>
    <p>Github Repo: <a href="${projectInfo.github}">${projectInfo.github}</a></p>
    <p>Live Link: <a href="${projectInfo.live}">${projectInfo.live}</a></p>
  `;

  // Open the modal
  modal.style.display = "block";
}

// Add click event listeners to each "Learn More" button
for (let i = 1; i <= 6; i++) {
  var btn = document.getElementById(`learnMore${i}`);
  btn.onclick = function () {
    // Get the project key based on the button's ID
    var projectKey = `project${i}`;
    console.log("test");
    // Open the modal with the project information
    openModal(projectKey);
  };
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/* Popup Screen Functionalities End */

document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  yearElement.textContent = currentYear;
});
