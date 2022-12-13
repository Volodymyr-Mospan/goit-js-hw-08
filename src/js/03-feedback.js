const formRef = document.querySelector(`.feedback-form`);

const formElements = [...formRef.querySelectorAll('[name]')];

formElements.forEach(el => {
  if (localStorage.getItem(`${el.name}`)) {
    el.value = localStorage.getItem(`${el.name}`);
  }
});

formRef.addEventListener('input', onInputForm);
formRef.addEventListener('submit', onSubmit);

function onInputForm(eve) {
  setInputValueInStorage(eve.target.name, eve);
}

function setInputValueInStorage(name, eve) {
  localStorage.setItem(`${name}`, eve.target.value);
}

function onSubmit(eve) {
  eve.preventDefault();
  formRef.reset();
  formElements.forEach(el => localStorage.removeItem(`${el.name}`));
}
