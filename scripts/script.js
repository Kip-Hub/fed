"use strict";

var hamburgerButton = document.querySelector('nav button');
var nav = document.querySelector('header nav nav');
var volgOns = document.querySelector('footer section h2:first-of-type');
var container = document.querySelector('footer section:first-of-type .container');
var merkenContainer = document.querySelector('footer section:nth-of-type(2) .container');
var onzeMerken = document.querySelector('footer section:nth-of-type(2) h2:first-of-type');
var worldMap = document.querySelector('footer section:nth-of-type(3) img');
var mapButton = document.querySelector('footer section:nth-of-type(3) h2')


function toggleHamburger(event) {
    nav.classList.toggle("hamburger");
}

function toggleVolgons(event) {
    container.classList.toggle("volgons");
}

function toggleMerken(event) {
    merkenContainer.classList.toggle("onzemerken");
}

function toggleMap(event) {
    worldMap.classList.toggle("active");
}

hamburgerButton.addEventListener('click', toggleHamburger);
volgOns.addEventListener('click', toggleVolgons);
mapButton.addEventListener('click', toggleMap);
onzeMerken.addEventListener('click', toggleMerken);