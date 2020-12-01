'use strict';

let menuBtn = document.querySelector('.main-nav__toogle');
let mainNavWr = document.querySelector('.main-nav__wrapper');
let bgDiv = document.querySelector('.body__background');
let mainNav = document.querySelector('.main-nav');
let orderBtn = document.querySelector('.week-product__button');
let popUp = document.querySelector('.modal');

menuBtn.addEventListener('click', openMenu );
mainNav.classList.remove('main-nav--no-js');

function openMenu(){
    mainNav.classList.toggle('main-nav--closed');
    bgDiv.classList.toggle('hidden');
    menuBtn.classList.toggle('main-nav__toogle--close');
}

orderBtn.addEventListener('click', openModal );

function openModal(){
    popUp.classList.toggle('hidden');
    bgDiv.classList.toggle('hidden');
}