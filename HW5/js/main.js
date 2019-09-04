let checkName = function(){
  let name = document.getElementById('name');
  const regName = /[A-Za-z]/;
  if(!name.value || name.value.length > 12 || !regName.test(name.value)){
    let error = document.createElement('div');
    error.className = 'error'
    error.textContent = 'Введите имя на английском';
    error.style.cssText = 'font-size: 18px; font-weight: 400; color: #EB5368; margin-bottom: 20px';
    name.insertAdjacentElement('afterend', error);
  }
  else {
    let success = document.createElement('div');
    success.className = 'success';
    success.textContent = 'ОК';
    success.style.cssText = 'font-size: 18px; font-weight: 400; color: #23FF69; margin-bottom: 20px';
    name.insertAdjacentElement('afterend', success);
  }
}

let checkPass = function(){
  let pass = document.getElementById('pass');
  const regPass = /[A-za-z0-9]/;
  if(pass.value > 7 || !regPass.test(pass.value)){
    let error = document.createElement('div');
    error.className = 'error'
    error.textContent = 'Введите пароль';
    error.style.cssText = 'font-size: 18px; font-weight: 400; color: #EB5368; margin-bottom: 20px';
    pass.insertAdjacentElement('afterend', error);
  }
  else {
    let success = document.createElement('div');
    success.className = 'success';
    success.textContent = 'ОК';
    success.style.cssText = 'font-size: 18px; font-weight: 400; color: #23FF69; margin-bottom: 20px';
    pass.insertAdjacentElement('afterend', success);
  }
}

let checkPass_two = function(){
  let pass_two = document.getElementById('pass_two');
  if(pass.value !== pass_two.value || !pass_two.value){
    let error = document.createElement('div');
    error.className = 'error'
    error.textContent = 'Пароли не совпадают';
    error.style.cssText = 'font-size: 18px; font-weight: 400; color: #EB5368; margin-bottom: 20px';
    pass_two.insertAdjacentElement('afterend', error);
  }
  else {
    let success = document.createElement('div');
    success.className = 'success';
    success.textContent = 'ОК';
    success.style.cssText = 'font-size: 18px; font-weight: 400; color: #23FF69; margin-bottom: 20px';
    pass_two.insertAdjacentElement('afterend', success);
  }
}

let checkPhone = function(){
  phone = document.getElementById('phone');
  const regPhone = /^\+375 \((17|29|33|44)\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  if(!regPhone.test(phone.value)){
    let error = document.createElement('div');
    error.className = 'error'
    error.textContent = 'Введите номер как в примере';
    error.style.cssText = 'font-size: 18px; font-weight: 400; color: #EB5368; margin-bottom: 20px';
    phone.insertAdjacentElement('afterend', error);
  }
  else {
    let success = document.createElement('div');
    success.className = 'success';
    success.textContent = 'ОК';
    success.style.cssText = 'font-size: 18px; font-weight: 400; color: #23FF69; margin-bottom: 20px';
    phone.insertAdjacentElement('afterend', success);
  }
}

let checkMail = function(){
  mail = document.getElementById('email');
  const reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  if (!reg.test(mail.value)){
    let error = document.createElement('div');
    error.className = 'error'
    error.textContent = 'Введите Email';
    error.style.cssText = 'font-size: 18px; font-weight: 400; color: #EB5368; margin-bottom: 20px';
    mail.insertAdjacentElement('afterend', error);
  }
  else {
    let success = document.createElement('div');
    success.className = 'success';
    success.textContent = 'ОК';
    success.style.cssText = 'font-size: 18px; font-weight: 400; color: #23FF69; margin-bottom: 20px';
    mail.insertAdjacentElement('afterend', success);
  }
}

let createMsg = function(className, text, style, path){
  const elem = document.createElement('div');
  elem.className = 'error';
  elem.textContent = text;
  elem.style.cssText = 'font-size: 18px; font-weight: 400; color: #EB5368; margin-bottom: 20px';
  elem.insertAdjacentElement('afterend', elem);
}

let removeError = function(){
  let errors = document.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
}

let removeSuccess = function(){
  let succes = document.querySelectorAll('.success');
    for (var i = 0; i < succes.length; i++) {
    succes[i].remove();
  }
};
