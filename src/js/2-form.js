const feedbackForm = document.querySelector('.feedback-form');
const textarea = feedbackForm.elements.message;
const email = feedbackForm.elements.email;
const localStorageKey = 'feedback-form-state';

window.addEventListener('load', () => {
  const storedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};

  email.value = storedState.email || '';
  textarea.value = storedState.message || '';
});

feedbackForm.addEventListener('input', () => {
  const currentState = {
    email: email.value,
    message: textarea.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(currentState));
});

feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();

  const submittedData = {
    email: evt.target.elements.email.value.trim(),
    message: evt.target.elements.message.value.trim(),
  };
  console.log(submittedData);

  localStorage.removeItem(localStorageKey);
  feedbackForm.reset();
});
