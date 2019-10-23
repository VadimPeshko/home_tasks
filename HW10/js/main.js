'use strict'
const modal = document.querySelector('.modal');
const card = document.getElementById('header-cart__img');
const modalClose = document.querySelector('.modal-close');


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
  })
  .catch((err) =>{
    console.warn(err);
    productCard.innerHTML = '<div style ="color: red; font-size: 36px">Ошибка!</div>'
  })
};

function showCards(data) {
  const goodsWrap = document.querySelector('.goods');
    data.forEach(good => {
    const cards = document.createElement('div');
    cards.className = 'col-lg-4 col-sm-6';
    cards.innerHTML =`
    <div class = "cards" data-category = "${good.category}">
    <div class="product-card mb-4">
    <h4 class="product-card__title">${good.name}</h4>
    <img src="${good.image}" alt="Honor 20" class="product-card__img">
    <p class="product-card__description">${good.title}</p>
    <div class="product-card__price">${good.price} р.</div>
    <button class="product-card__btn">В Карзину</button>
    </div>
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

let addCart = function() {
  const modalBody = document.querySelector('.modal-body');
  const product = document.querySelectorAll('.goods .cards');
  const spanText = document.querySelector('.header-cart__text');
  let count = 0;
  
  product.forEach(element => {
    const productBtn = element.querySelector('.product-card__btn');
    
    productBtn.addEventListener('click', () => {
      count++;
      spanText.textContent = count;
      const cards = document.createElement('div');
      cards.className = 'col-lg-3 col-md-6 col-sm-12';
      const productClone = element.cloneNode(true);
      cards.appendChild(productClone);
      modalBody.appendChild(cards);
      showData();

      const removeBtn = productClone.querySelector('.product-card__btn');
      removeBtn.textContent = "Удалить из корзины";
      removeBtn.addEventListener('click', () => {
        count--;
        spanText.textContent = count;
        productClone.remove();
        showData();
      });
    });
  });

  function showData (){
    const cardsPrice = modalBody.querySelectorAll('.product-card__price');
    const modalSubtitle = document.querySelector('.modal-head__subtitle span');
    let sum = 0;
    cardsPrice.forEach(element => {
      let price = parseFloat(element.textContent);
      sum += price;
    });
    modalSubtitle.textContent = sum;
  }
}

let choiceCategory = function() {
  const link = document.querySelectorAll('.link');
  const cards = document.querySelectorAll('.cards');
 
  link.forEach(element => {
    element.addEventListener('click', (event) => {
        cards.forEach(element => {
          if (element.dataset.category === event.target.textContent){
            element.style.display =  '';
          } else {
            element.style.display = 'none';
          }
        });
    });
  });
}

let search = function() {
  const input = document.querySelector('.header-search__input');
  const inputBtn = document.querySelector('.header-search__btn');
  const productTitle = document.querySelector('product-card__title');
  const cards = document.querySelectorAll('.cards');

  inputBtn.addEventListener('click', () => {
    console.log(input.includes(productTitle));
  });
}

getData().then((data) => {
showCards(data);
openCard();
closeCard();
addCart();
choiceCategory();
search();
});


// 9.08 - карточки
// 9.10 - db