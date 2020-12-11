'use strict';

let prevBtn = document.querySelector(".button-prev");
let nextBtn = document.querySelector(".button-next");

let reviewItems = document.querySelectorAll(".slider__item");

prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);

let slideIndex = 0;

function slideNext(){
  reviewItems.forEach(el => el.classList.add('hidden'))
  if(slideIndex<reviewItems.length-1){
    slideIndex++
  } else if( slideIndex = reviewItems.length-1 ){
    slideIndex = 0
  }
  reviewItems[slideIndex].classList.remove('hidden')
}

function slidePrev(){
  reviewItems.forEach(el => el.classList.add('hidden'))
  if( slideIndex == 0 ){
    slideIndex = reviewItems.length-1
  } else if (0 < slideIndex < reviewItems.length-1){
    slideIndex--
  } 
  reviewItems[slideIndex].classList.remove('hidden')
}

