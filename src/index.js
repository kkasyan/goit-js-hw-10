import './css/styles.css';
// import { fetchCountries } from './js/fetchCountries';
// import { refs } from './js/refs';
// import { createMarkup } from './js/createMarkup';
import Notiflix from 'notiflix';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const FILTERS = '?fields=flags,name,capital,population,languages';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('input'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

function onError(evt) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
function clearPage() {}
function onInput() {}

refs.inputEl.addEventListener('input', evt => {
  const countryValue = (refs.inputEl.textContent = evt.currentTarget.value
    .trim()
    .toLowerCase());
  if (countryValue === '') {
    return;
  }
  fetchCountries(countryValue).then(createMarkup).catch(onError);
});

function createMarkup(countries) {
  return countries.map(({ capital, name, population, languages, flags }) => {
    if (countries.length > 10) {
      console.log('countries length:', countries.length);
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
    } else if (countries.length > 1) {
      console.log('countries length:', countries.length);
      const markup1 = `<li class='country__item'>${name.official}</li>`;
      refs.countryListEl.innerHTML += markup1;
    } else if (countries.length === 1) {
      console.log('countries length:', countries.length);
      const markup = `<h1>${name.official}</h1>
  <li class='country__item'><b>Capital:</b> ${capital}</li>
    <li class='country__item'><b>Population:</b> ${population}</li>
    <li class='country__item'><b>Languages:</b> ${languages}</li>`;
      refs.countryInfoEl.innerHTML += markup;
    }
  });
}

function fetchCountries(countryValue) {
  return fetch(BASE_URL + countryValue + FILTERS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// res => {
//   const markup = createMarkup(res);
//   refs.countryListEl.insertAdjacentHTML('beforeend', markup);
//   console.log(res);
// }
