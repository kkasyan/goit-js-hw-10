export function createMarkup(name) {
  createInfoMarkup(name);
  createMarkupList(name);
}

function createInfoMarkup(countries) {
  const markup = countries
    .map(({ capital, name, population, languages, flags }) => {
      return `<ul class="country-info__list">
      <h2 class="country-list__name">${name.official}</h2>
      <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${
        name.official
      }" width = 30px height = 30px> 
            <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(
              languages
            ).join(', ')}</p></li>
        </ul>
        `;
    })
    .join('');
  return markup;
}

function createMarkupList(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return ` <li class="country-list__item">
              <img class="country-list__flag" src="${countries.flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
              <h2 class="country-list__name">${name.official}</h2>
          </li>`;
    })
    .join('');
  return markup;
}
