import { refs } from './refs';

export function renderInfoMarkup(countries) {
  const markup = countries.map(createInfoMarkup).join('');
  refs.countryInfoEl.innerHTML = markup;
}

export function renderListMarkup(countries) {
  const markup = countries.map(createMarkupList).join('');
  refs.countryListEl.innerHTML = markup;
}

function createInfoMarkup({ capital, name, population, languages, flags }) {
  return `<div class="country__thumb">
   <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${
    name.official
  }" width = "35px" height = "20px"> 
      <h2 class="country-info__name">${name.official}</h2></div>
      <ul class="country-info__list">
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
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = "60px" height = "40px">
              <h2 class="country-list__name">${name.official}</h2>
          </li>`;
}
