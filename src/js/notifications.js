import Notiflix from 'notiflix';

export function onError(evt) {
  return Notiflix.Notify.failure('Oops, there is no country with that name');
  clearPage(evt);
}

export function onManyMatches(name) {
  return Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.',
    { timeout: 3000 }
  );
}
