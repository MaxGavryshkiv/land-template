//imports
import Notiflix from 'notiflix';

//const
const promiseFormRef = document.querySelector('.form');

//addEventListener
promiseFormRef.addEventListener('submit', callPromises);

//functions
function callPromises(e) {
  e.preventDefault();
  const amount = e.currentTarget.amount.value;
  const delay = e.currentTarget.delay.value;
  const step = e.currentTarget.step.value;

  for (let i = 0; i < amount; i++) {
    let count = delay;
    if (i !== 0) {
      count = Number(delay) + Number(step) * i;
    }
    createPromise(i + 1, count)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
