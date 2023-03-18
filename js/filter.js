import {getData} from './get-data.js';

const TIMEOUT_DELAY = 500;
const imgFiltersForm = document.querySelector('.img-filters__form');
const buttonsFilterForm = imgFiltersForm.querySelectorAll('button');
let typeFilter = 'default';

imgFiltersForm.addEventListener('click', function(evt){
    const target = evt.target;

    buttonsFilterForm.forEach(item => {
        item.classList.remove('img-filters__button--active');
    });

    switch (target.id){
        case 'filter-default':
            target.classList.add('img-filters__button--active');
            debounce('default');
            break;
        case 'filter-random':
            target.classList.add('img-filters__button--active');
            debounce('random');
            break;
        case 'filter-discussed':
            target.classList.add('img-filters__button--active');
            debounce('discussed');
            break;
    };
});

function debounce (value){
    setTimeout(function(){
        typeFilter = value;
        return getData(typeFilter);
    }, TIMEOUT_DELAY);
};

export {typeFilter};