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
