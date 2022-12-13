import throttle from 'lodash.throttle';

const formRef = document.querySelector(`.feedback-form`);
const formElements = [...formRef.querySelectorAll('[name]')];

formElements.forEach(el => {
  if (localStorage.getItem(`${el.name}`)) {
    el.value = localStorage.getItem(`${el.name}`);
  }
});

formRef.addEventListener('input', throttle(onInputForm, 500));
formRef.addEventListener('submit', onSubmit);

function onInputForm(eve) {
  setInputValueInStorage(eve.target.name, eve);
}

function setInputValueInStorage(name, eve) {
  localStorage.setItem(`${name}`, eve.target.value);
}

function onSubmit(eve) {
  eve.preventDefault();
  let formData = {};
  formElements.forEach(el => {
    formData[el.name] = el.value;
    localStorage.removeItem(`${el.name}`);
  });
  console.log(formData);
  formRef.reset();
}
