import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { renderInfoMarkup, renderListMarkup } from './js/createMarkup';
import { onError, onManyMatches } from './js/notifications';
import { clearPageInfo, clearPageList } from './js/clearPage';

import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  clearPageInfo();
  clearPageList();
  const name = evt.target.value.trim().toLowerCase();

  if (!name) {
    return;
  }
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
        clearPageInfo();
        clearPageList();
      }
    })
    .catch(error => {
      onError();
      console.log(error.message);
      clearPageInfo();
      clearPageList();
    });
}
