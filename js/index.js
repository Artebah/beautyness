"use strict";

// burger menu
const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const body = document.body;

menuIcon.onclick = () => {
  menuIcon.classList.toggle("active");
  menuBody.classList.toggle("active");
  body.classList.toggle("lock");
};

const headerCall = document.querySelector(".header__call");

if (window.innerWidth < 600) {
  menuBody.append(headerCall);
}
