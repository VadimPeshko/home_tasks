'use strict'

//Получаем данные
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
  .catch((err) => {
    console.warn(err);
    productCard.innerHTML = '<div style ="color: red; font-size: 36px">Ошибка!</div>'
  })
};

// Выводим полученные данные
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

// Открываем, закрываем корзину
let toggleCart = function() {
  const modal = document.querySelector('.modal'),
        cart = document.getElementById('header-cart__img'),
        modalClose = document.querySelector('.modal-close');

  cart.addEventListener('click', () => {
    modal.style.cssText = 'display: block';
    document.body.style.cssText = 'overflow:  hidden';
  });

  modalClose.addEventListener('click', () => {
    modal.style.cssText = 'display: none';
    document.body.style.cssText = 'overflow:  visible';
  });
};

// Открываем, закрываем форму
let toggleModalForm = function() {
  const about = document.querySelector('.aboutus'),
        aboutClose = document.querySelector('.aboutus-close'),
        aboutOpen = document.querySelector('.footer-nav__about'),
        form = document.getElementById('form');

  aboutOpen.addEventListener('click', () => {
    about.style.cssText = 'display: block';
    document.body.style.cssText = 'overflow:  hidden';
  });

  aboutClose.addEventListener('click', () => {
    about.style.cssText = 'display: none';
    document.body.style.cssText = 'overflow:  visible';
    form.reset();
  });
};

//Проверка формы
let checkForm = function() {
  const form = document.getElementById('form');
  let error, success;
  let param = {
    msgError: 'error',
    masgSuccess: 'success',
    valError: `${(!name.value) ? 'Имя не должно быть пустым' : 'Введите имя'}`,
    valErrorMail: 'Введите E-mail',
    valSuccess: 'OK',
    cssError: 'font-size: 18px; font-weight: 400; color: rgb(185, 18, 27); margin-bottom: 10px',
    cssSuccess: 'font-size: 18px; font-weight: 400; color: #0fab2e; margin-bottom: 10px',
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    removeClass('.error');
    removeClass('.success');
    checkName();
    checkMail();
  });

  form.addEventListener('reset', () => {
    removeClass('.error');
    removeClass('.success');
  });

  // Создаем сообщение об ошибке или удаче
  function createMsg(element, clasName, text, css, path) {
    element = document.createElement('div');
    element.className = clasName;
    element.textContent = text;
    element.style.cssText = css;
    path.insertAdjacentElement('afterend', element);
  };

  // Проверка поля Имя
  function checkName() {
  const name = document.getElementById('name'),
        regName = /[A-Za-zА-Яа-я0-9]/;
  
    if(!regName.test(name.value)){
      createMsg(error, param.msgError, param.valError, param.cssError, name);
    }else {
      createMsg(success, param.masgSuccess, param.valSuccess, param.cssSuccess ,name);
    }
  };

  // Проверка E-mail
  function checkMail() {
    const mail = document.getElementById('email'),
          reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if (!reg.test(mail.value)) {
      createMsg(error, param.msgError, param.valErrorMail, param.cssError, mail);
    } else {
      createMsg(success, param.masgSuccess, param.valSuccess, param.cssSuccess, mail);
    }
  };

  // Удаляем лишние сообшения 
  function removeClass(item) {
    let element = document.querySelectorAll(`${item}`);
    element.forEach(el => {
      el.remove();
    })
  };
};

// Работ с товарами
let addCart = function() {
  const modalBody = document.querySelector('.modal-body'),
        product = document.querySelectorAll('.goods .cards'),
        spanText = document.querySelector('.header-cart__text');
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

  // Считаем сумму товаров
  function showData (){
    const cardsPrice = modalBody.querySelectorAll('.product-card__price'),
          modalSubtitle = document.querySelector('.modal-head__subtitle span');
    let sum = 0;
    cardsPrice.forEach(element => {
      let price = parseFloat(element.textContent);
      sum += price;
    });
    modalSubtitle.textContent = sum;
  };
};

// Выбор категории товаров
let choiceCategory = function() {
  const link = document.querySelectorAll('.link'),
        cards = document.querySelectorAll('.cards');
 
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
};

// Поиск
let search = function() {
  const input = document.querySelector('.header-search__input'),
        inputBtn = document.querySelector('.header-search__btn'),
        cards = document.querySelectorAll('.cards');

  inputBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let inputStr = input.value.toString().toLowerCase();
    cards.forEach(element => {
      const productTitle = element.querySelector('.product-card__title');
      if (productTitle.textContent.toLowerCase().indexOf(inputStr) > -1){
        element.style.display = '';
      }else {
        element.style.display = 'none';
      }
    });
  });
};

getData().then((data) => {
showCards(data);
toggleCart();
toggleModalForm();
checkForm();
addCart();
choiceCategory();
search();
});
