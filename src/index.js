import './css/styles.css';
// import { fetchCountries } from './js/fetchCountries';
// import { refs } from './js/refs';
// import { createMarkup } from './js/createMarkup';
// import { onError, onManyMatches } from './js/notifications';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('input'),
  countryListEl: document.querySelector('.coutry-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  // clearPageInfo();
  // clearPageList();
  const name = evt.target.value.trim().toLowerCase();
  // const name = (refs.inputEl.textContent = evt.target.value
  //   .trim()
  //   .toLowerCase());
  // const name = refs.inputEl.value.trim().toLowerCase();
  if (!name) {
    return;
  }
  // fetchCountries(name)
  //   .then(name => createMarkup(name))
  //   .catch(clearPage(), onError());
  fetchCountries(name)
    .then(countries => {
      if (countries.length === 1) {
        console.log(countries);
        renderInfoMarkup(countries);
      } else if (countries.length >= 2 && countries.length <= 10) {
        console.log(countries);
        renderListMarkup(countries);
      } else {
        console.log(countries);
        onManyMatches();
        // clearPage();
      }
    })
    .catch(error => {
      onError();
      console.log(error.message);
    });
}

export function clearPageInfo() {
  refs.countryInfoEl.innerHTML = '';
}

export function clearPageList() {
  refs.countryListEl.innerHTML = '';
}

export function renderInfoMarkup(countries) {
  const markup = countries.map(createInfoMarkup).join('');
  refs.countryInfoEl.innerHTML = markup;
}

export function renderListMarkup(countries) {
  const markup = countries.map(createMarkupList).join('');
  refs.countryListEl.innerHTML = markup;
}

export function onError(evt) {
  return Notiflix.Notify.failure('Oops, there is no country with that name');
  clearPage(evt);
}

export function onManyMatches(name) {
  return Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.',
    { timeout: 3000 }
  );
}

function createInfoMarkup({ capital, name, population, languages, flags }) {
  return `<ul class="country-info__list">
      <h2 class="country-list__name">${name.official}</h2>
      <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${
    name.official
  }" width = "100px" height = "100px"> 
            <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(
              languages
            ).join(', ')}</p></li>
        </ul>
        `;
}

function createMarkupList({ name, flags }) {
  return ` <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = "100px" height = "100px">
              <h2 class="country-list__name">${name.official}</h2>
          </li>`;
}

export function fetchCountries(countryValue) {
  return fetch(BASE_URL + countryValue + FILTERS).then(response => {
    if (response.ok) {
      return response.json();
    } else if (response.status === 404) {
      throw new Error(response.status);
    }
  });
}

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const FILTERS = '?fields=flags,name,capital,population,languages';
