//import
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

//const
const startBttn = document.querySelector('[data-start]');
const daysDateSpanRef = document.querySelector('[data-days]');
const hoursDateSpanRef = document.querySelector('[data-hours]');
const minutesDateSpanRef = document.querySelector('[data-minutes]');
const secondsDateSpanRef = document.querySelector('[data-seconds]');
let dateMilesec;

//default functionaly
startBttn.disabled = true;

//options of flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!dateCheckFunction(selectedDates[0], new Date())) {
      startBttn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
      return;
    }
    startBttn.disabled = false;
    dateMilesec = selectedDates[0];
  },
};

//addEventListener
startBttn.addEventListener('click', startTimer);
flatpickr('#datetime-picker', options);

//functions
function dateCheckFunction(firstDate, secondDate) {
  if (firstDate.getTime() >= secondDate.getTime()) {
    return true;
  }

  return false;
}

function startTimer() {
  console.log(dateMilesec);
  const dateInterval = setInterval(() => {
    const dateObj = convertMs(dateMilesec.getTime() - new Date().getTime());
    if (
      dateObj.days === 0 &&
      dateObj.hours === 0 &&
      dateObj.minutes === 0 &&
      dateObj.seconds === 0
    ) {
      clearInterval(dateInterval);
    }
    daysDateSpanRef.textContent = addLeadingZero(dateObj.days);
    hoursDateSpanRef.textContent = addLeadingZero(dateObj.hours);
    minutesDateSpanRef.textContent = addLeadingZero(dateObj.minutes);
    secondsDateSpanRef.textContent = addLeadingZero(dateObj.seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
