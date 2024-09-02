import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const LS_KEY = 'feedback-form-state';

updatePage();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(e) {
  const value = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(LS_KEY, JSON.stringify(value));
}

function updatePage() {
  const storedValue = JSON.parse(localStorage.getItem(LS_KEY));

  if (storedValue) {
    form.elements.email.value = storedValue.email;
    form.elements.message.value = storedValue.message;
  }
}

function onSubmit(e) {
  e.preventDefault();
  const savedData = localStorage.getItem(LS_KEY);
  const user = JSON.parse(savedData);
  console.log(user);
  localStorage.removeItem(LS_KEY);
  form.reset();
}
