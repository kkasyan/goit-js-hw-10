import Notiflix from 'notiflix';
import { clearPage } from '../index';

export function onError(evt) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
  clearPage(evt);
}

export function onManyMatches(name) {
  if (name.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.',
      { timeout: 3000 }
    );
  }
}
