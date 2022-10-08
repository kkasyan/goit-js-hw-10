const BASE_URL = 'https://restcountries.com/v3.1/name/';
const FILTERS = '?fields=flag,name,capital,population,languages';

export function fetchCountries(countryValue) {
  return fetch(BASE_URL + countryValue + FILTERS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
  // .then(response => response);
}
