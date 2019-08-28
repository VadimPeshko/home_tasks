let checkName = function(){
  if(name.value.length <= 3){
    let error = document.createElement('div');
    error.className = 'error'
    error.textContent = 'Имя должно быть больше 3';
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

let checkPhone = function(){
  if(phone.value.length < 4 && isNaN){
    let error = document.createElement('div');
    error.className = 'error'
    error.textContent = 'Введите номер';
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
}

