import Notiflix from 'notiflix';
import { clearPage } from '../index';

export function onError(evt) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
  clearPage();
}

export function onManyMatches() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.',
    { timeout: 3000 }
  );
}
