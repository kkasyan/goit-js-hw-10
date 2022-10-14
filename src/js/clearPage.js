import { refs } from './refs';

export function clearPageInfo() {
  refs.countryInfoEl.innerHTML = '';
}

export function clearPageList() {
  refs.countryListEl.innerHTML = '';
}
