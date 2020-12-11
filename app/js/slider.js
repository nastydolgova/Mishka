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



// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlide() {
//   showSlides(slideIndex += 1);
// }
// function minusSlide() {
//   showSlides(slideIndex -= 1);  
// }
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slider__item");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//       slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace("pagination-item-active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
// }
// let reviewsData = [
//   {
//     text:
//       "Я молодая мама, но всё равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке, и мои фотографии сразу стали более стильными, а также набирают больше лайков!",
//     author: "Анастасия Красильникова",
//     authorlink: "@misssssiskras",
//     id: "1",
//   },
//   {
//     text: "Мне все понравилось",
//     author: "Анна Блинная",
//     authorlink: "@blin",
//     id: "2",
//   },
//   {
//     text: "Самые худшие корзины",
//     author: "Владислав Мирный",
//     authorlink: "@vladmir",
//     id: "3",
//   },
// ];

// let review = `
//         <p class="reviews__text">
//           ${reviewsData[z].text}
//          </p>
//          <p  class="reviews__author">
//             ${reviewsData[z].author}
//         </p>
//         <a href="#" class="reviews__author-link"> ${reviewsData[z].authorlink} </a>
//         </span>
//        `;
// reviewItem.innerHTML += review;
