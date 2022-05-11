//variebles
const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

//addEventListenet
form.addEventListener('input', formInput);
form.addEventListener('submit', formSubmit);

//init data
if (localStorage.getItem('feedback-form-state')) {
  const {
    elements: { email, message },
  } = form;

  try {
    const feedback = JSON.parse(localStorage.getItem('feedback-form-state'));
    email.value = feedback.email;
    message.value = feedback.message;
  } catch (error) {
    console.log(error.message);
  }
}

//function
function formInput(e) {
  const {
    elements: { email, message },
  } = e.currentTarget;
  try {
    throttle(
      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify({ email: email.value, message: message.value }),
      ),
      500,
    );
  } catch (error) {
    console.log(error.message);
  }
}

function formSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (localStorage.getItem('feedback-form-state')) {
    try {
      const feedback = JSON.parse(localStorage.getItem('feedback-form-state'));
      console.log(feedback);

      localStorage.removeItem('feedback-form-state');
      email.value = '';
      message.value = '';
    } catch (error) {
      console.log(error.message);
    }
  }
  return;
}
