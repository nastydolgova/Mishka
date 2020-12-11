'use strict';
(function(){
let bgDiv = document.querySelector('.body__background');
let orderBtnIndex = document.querySelector('.week-product__button');
let popUp = document.querySelector('.modal');
let orderBtnCatalog = document.querySelectorAll('.order-button');


orderBtnCatalog.forEach(buttonItem => buttonItem.addEventListener(`click`, openModal ));
orderBtnIndex.addEventListener('click', openModal ); 

document.addEventListener("keydown", function (e) {
    if ('Escape' === e.key && !popUp.classList.contains("hidden")) {
      popUp.classList.add("hidden");
      bgDiv.classList.add('hidden');
    }
  });

function openModal(){
    popUp.classList.toggle('hidden');
    bgDiv.classList.toggle('hidden');
}

})();