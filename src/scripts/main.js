'use strict';

document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.querySelector(".header__menuBtn");
	const menu = document.querySelector(".page__menu");
	const navLink = document.querySelectorAll(".menu__link");
	const menuBtnDisplayStyle = window.getComputedStyle(menuBtn).display;

	menuBtn.addEventListener("click", () => {
		menu.classList.toggle("page__menu--active");
		menuBtn.classList.toggle("header__menuBtn--active")
	});

	if (menuBtnDisplayStyle) {
		navLink.forEach(link => {
			link.addEventListener("click", () => {
				menu.classList.remove("page__menu--active");
				menuBtn.classList.remove("header__menuBtn--active")
			});
		});
	}
});
