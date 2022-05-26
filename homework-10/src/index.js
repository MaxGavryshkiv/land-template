//imports
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const debounce = require('lodash.debounce');

//Consts
const DEBOUNCE_DELAY = 300;

const inputRef = document.getElementById('search-box');
const countryListUlRef = document.querySelector('.country-list');
const countryInfoDivRef = document.querySelector('.country-info');

//Listener
inputRef.addEventListener('input', debounce(foundCountry, DEBOUNCE_DELAY));

//functions
function foundCountry(e) {
  let inputValue = e.target.value;

  if (inputValue.trim() === '') {
    return;
  }
  //fetch func
  fetchCountries(inputValue.trim())
    .then(data => {
      if (data.length > 10) {
        clearAllCountent();
        Notify.info('Too many matches found. Please enter a more specific name.');
        return;
      }

      if (data.length > 2 && data.length <= 10) {
        clearAllCountent();
        createListMarkup(data);
        return;
      }

      clearAllCountent();
      createInfoMarkup(data);
    })
    .catch(error => {
      clearAllCountent();
      Notify.failure('Oops, there is no country with that name');
    });
}

function createListMarkup(dataArr) {
  const markup = dataArr
    .map(
      ({ flags, name }) =>
        `<li class='country-list__item'><img class='county-list_item__img' src='${flags.svg}' alt='${name.official}'><p>${name.official}</p></li>`,
    )
    .join('');

  countryListUlRef.innerHTML = markup;
}

function createInfoMarkup(dataArr) {
  const markup = dataArr
    .map(
      ({ capital, flags, languages, name, population }) =>
        `<div class='flexDiv'><img class='country-info_img' src='${
          flags.svg
        }'> <h1 class='country-info_h1'>${name.official}</h1></div>
      <p class='country-info_p'><span class='country-info_span'>Capital:</span> ${capital}</p>
      <p class='country-info_p'><span class='country-info_span'>Population:</span> ${population}</p>
      <p class='country-info_p'><span class='country-info_span'>Languages:</span> ${Object.values(
        languages,
      )}</p>`,
    )
    .join('');

  countryInfoDivRef.innerHTML = markup;
}

function clearAllCountent() {
  countryListUlRef.innerHTML = '';
  countryInfoDivRef.innerHTML = '';
}
