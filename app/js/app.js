'use strict';

let menuBtn = document.querySelector('.main-nav__toogle');
let mainNav = document.querySelector('.main-nav__wrapper');
let bgDiv = document.querySelector('.body__background');

menuBtn.addEventListener('click', openMenu );

function openMenu(){
    mainNav.classList.toggle('hidden');
    bgDiv.classList.toggle('hidden');
    menuBtn.classList.toggle('main-nav__toogle--close');
}