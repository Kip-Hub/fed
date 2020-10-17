"use strict";

var hamburgerButton = document.querySelector('nav button');
var nav = document.querySelector('header nav nav');

function toggleHamburger(event) {
    nav.classList.toggle("hamburger");
}

hamburgerButton.addEventListener('click', toggleHamburger);