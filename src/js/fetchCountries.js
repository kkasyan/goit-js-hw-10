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
