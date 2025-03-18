//import { data } from "./data.js";
let projectData = [];

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
/*
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
*/
/*
window.addEventListener("scroll", () => {
  //const sectionPos = skillsSection.getBoundingClientRect().top;
  //const screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});
 */

/* Popup Screen Functionalities Start */
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function fetchProjects() {
  fetch("http://82.29.179.243/projects")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      projectData = data;
      data.sort((a, b) => a.id - b.id);

      console.log(process.env.API_URL);
      const projectsContainer = document.getElementById("project-container");
      projectsContainer.innerHTML = "";

      data.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("card", `project-${project.id}`);
        projectCard.innerHTML = `
          <p>${project.projectName}</p>
          <p class="info-text">${project.projectDesc}</p>
          <button class="learnMoreBtn" data-project-id="${project.id}">Learn More</button>
        `;
        projectsContainer.appendChild(projectCard);

        const learnMoreBtn = projectCard.querySelector(".learnMoreBtn");
        learnMoreBtn.addEventListener("click", () => {
          const selectedProject = projectData.find((p) => p.id === project.id);
          if (selectedProject) {
            openModal(selectedProject);
          } else {
            console.error("Project not found", project.id);
          }
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", fetchProjects);

function openModal(project) {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content p");
  modalContent.innerHTML = `
    <p>Project Name: ${project.projectName}</p>
    <p>Github Repo: <a href="${project.github}" target="_blank">${project.github}</a></p>
    <p>Project URL: <a href="${project.projectUrl}" target="_blank">${project.projectUrl}</a></p>
  `;
  modal.style.display = "block";
}
/*
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
*/

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
  yearElement.textContent = currentYear;
});
