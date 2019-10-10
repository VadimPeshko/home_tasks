
const modal = document.querySelector('.modal');
const card = document.getElementById('header-cart__img');
const modalClose = document.querySelector('.modal-close');
let good;


function getData() {
  const productCard = document.querySelector('.product-card');
  return fetch('../db/db.json')
  .then((response) => {
    if(response.ok){
      return response.json();
    } else {
      throw new Error ('Данные не были полученны ' + response.status)
    }
  })
  .then((data) => {
    return data;
    good = data;
  })
  .catch((err) =>{
    console.warn(err);
    productCard.innerHTML = '<div style ="color: red; font-size: 36px">Ошибка!</div>'
  })
};

function showCards(good) {
  const goodsWrap = document.querySelector('.goods');
    good.forEach(function(element) {
    const cards = document.createElement('div');
    cards.className = 'col-lg-4 col-sm-6';
    cards.innerHTML =`
    <div class="product-card mb-4">
    <h4 class="product-card__title">${element.name}</h4>
    <img src="" alt="Honor 20" class="product-card__img">
    <p class="product-card__description">Android, экран 6.4" AMOLED (1080x2340), Exynos 9610, ОЗУ 4 ГБ,
        флэш-память 64 ГБ, карты памяти, камера 25 Мп, аккумулятор 4000 мАч, 2 SIM</p>
    <div class="product-card__price">799,00 р.</div>
    <button class="product-card__btn">В Карзину</button>
  </div>`;
  goodsWrap.appendChild(cards);
  });
};

let openCard = function() {
  card.onclick = function(){
    modal.style.cssText = 'display: block';
    document.body.style.cssText = 'overflow:  hidden';
  }
};

let closeCard = function() {
  modalClose.onclick = function() {
    modal.style.cssText = 'display: none';
    document.body.style.cssText = 'overflow:  visible';
  }
};
openCard();
closeCard();
getData();
showCards();

// 9.08 - карточки
// 9.10 - db