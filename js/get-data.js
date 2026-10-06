import { showImage } from './create-picture.js';
import { localPhotos } from './mocks.js';

const AMOUNT_RANDOM_CARDS = 10;
const imgFilters = document.querySelector('.img-filters');
const TYPE_FILTER = 'default';

function getData(typeFilter) {
  if (imgFilters) {
    imgFilters.classList.remove('img-filters--inactive');
  }

  const dataCopy = localPhotos.slice();

  switch (typeFilter) {
    case 'default':
      return showImage(localPhotos);
    case 'random':
      for (let i = 0; i < dataCopy.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [dataCopy[i], dataCopy[j]] = [dataCopy[j], dataCopy[i]];
      }
      return showImage(dataCopy.slice(0, AMOUNT_RANDOM_CARDS));
    case 'discussed':
      dataCopy.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1);
      return showImage(dataCopy);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getData(TYPE_FILTER);
});

export { getData };
