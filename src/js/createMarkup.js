export function createMarkup(countries) {
  return /*html*/ `<li class='country__item'>флаг псевдоэлементом перед названием<p>${name.official}</p></li><h1>${name.official}</h1>
  <li class='country__item'><b>Capital:</b> ${capital}</li>
    <li class='country__item'><b>Population:</b> ${population}</li>
    <li class='country__item'><b>Languages:</b> ${languages}</li>`.join('');
}

// export function createMarkup(countries) {
//   return countries
//     .map(({ capital, name, population, languages }) => {
//       return /*html*/ `<li class='country__item'>флаг псевдоэлементом перед названием<p>${name.official}</p></li>``<h1>${name.official}</h1>
//   <li class='country__item'><b>Capital:</b> ${capital}</li>
//     <li class='country__item'><b>Population:</b> ${population}</li>
//     <li class='country__item'><b>Languages:</b> ${languages}</li>
//   `;
//     })
//     .join('');
// }
