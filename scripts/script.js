"use strict";

var hamburgerButton = document.querySelector('nav button');
var nav = document.querySelector('header nav nav');
var volgOns = document.querySelector('footer section h2:first-of-type');
var container = document.querySelector('footer section:first-of-type .container');

function toggleHamburger(event) {
    nav.classList.toggle("hamburger");
}

function toggleVolgons(event) {
    container.classList.toggle("volgons");
}

hamburgerButton.addEventListener('click', toggleHamburger);
volgOns.addEventListener('click', toggleVolgons);