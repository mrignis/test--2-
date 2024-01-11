const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

// Завантаження збережених даних з локального сховища
const savedData = JSON.parse(localStorage.getItem(storageKey)) || {};
emailInput.value = savedData.email || '';
messageInput.value = savedData.message || '';

// Делегування подій для полів вводу
feedbackForm.addEventListener('input', event => {
  if (event.target.type === 'email' || event.target.type === 'textarea') {
    savedData[event.target.name] = event.target.value;
    localStorage.setItem(storageKey, JSON.stringify(savedData));
  }
});

// Відправлення форми
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Форма відправлена:', savedData);

  // Очищення полів форми та локального сховища
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem(storageKey);
});
