import {showImage} from './create-picture.js';
import {errorBlock, closeMessage} from './message.js';
import {bodyPage} from './form.js';


const URL_DATA  = "https://25.javascript.pages.academy/kekstagram/data";
const AMOUNT_RANDOM_CARDS = 10;
const imgFilters = document.querySelector('.img-filters')
const TYPE_FILTER = 'default';

function getData (typeFilter){
  fetch(URL_DATA)
  .then((response) => response.json())
  .then((data) => {
    imgFilters.classList.remove('img-filters--inactive');

    let dataCopy = data.slice();
    switch (typeFilter){
      case 'default':
        return showImage(data);
      case 'random':
        for (let i = 0; i < dataCopy.length; i++) {
          let j = Math.floor(Math.random() * (i + 1));
          [dataCopy[i], dataCopy[j]] = [dataCopy[j], dataCopy[i]];
        };
        return showImage(dataCopy.slice(0, AMOUNT_RANDOM_CARDS));
      case 'discussed':
        dataCopy = dataCopy.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1);
        return showImage(dataCopy);
    };
  })
  .catch(() =>{
    const errorSectionLoad = errorBlock.querySelector('.error').cloneNode(true);
    const titleError = errorSectionLoad.querySelector('.error__title');
    const buttonError = errorSectionLoad.querySelector('.error__button');

    titleError.textContent = "Ошибка загрузки  данных";
    buttonError.textContent = "Закрыть";
    bodyPage.appendChild(errorSectionLoad);

    buttonError.addEventListener("click", function(){
      errorSectionLoad.remove();
    });

    closeMessage(errorSectionLoad);
  });
};

document.addEventListener('DOMContentLoaded', function(){
  getData(TYPE_FILTER);
});

export {getData};
