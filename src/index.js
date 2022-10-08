import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { createMarkupList, createInfoMarkup } from './js/createMarkup';
import { onError, onManyMatches } from './js/notifications';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  const name = (refs.inputEl.textContent = evt.target.value
    .trim()
    .toLowerCase());
  // const name = refs.inputEl.value.trim().toLowerCase();
  if (name === '') {
    clearPage();
    return;
  }
  fetchCountries(name)
    .then(countries => {
      clearPage();
      if (countries.length === 1) {
        console.log(countries);
        const markup = createInfoMarkup(countries);
        refs.countryInfoEl.insertAdjacentHTML('beforeend', markup);
      } else if (countries.length > 10) {
        console.log(countries);
        onManyMatches();
      } else if (countries.length > 1 && countries.length <= 10) {
        console.log(countries);
        const markup = createMarkupList(countries);
        refs.countryListEl.insertAdjacentHTML('beforeend', markup);
      }
    })
    .catch(onError);
}

export function clearPage() {
  refs.countryInfoEl.innerHTML = '';
  // refs.countryListEl.innerHTML = '';
}
