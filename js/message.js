import {bodyPage, closeModal} from './form.js';

const successTemplate = document.querySelector('#success').content;
const successSection = successTemplate.querySelector('.success').cloneNode(true);
const successButton = successSection.querySelector('.success__button');
const errorBlock = document.querySelector('#error').content;
const errorSection = errorBlock.querySelector('.error').cloneNode(true);
const errorButton = errorSection.querySelector('.error__button');

function success (){
    closeModal();
    bodyPage.appendChild(successSection);
    successButton.addEventListener('click', function(){
        successSection.remove();
    });
    closeMessage(successSection);
};

function errorMesage (){
    errorSection.style.zIndex = 2;
    bodyPage.appendChild(errorSection);
    errorButton.addEventListener('click', function(){
        errorSection.remove();
    });

    closeMessage(errorSection);
};

function closeMessage (section){
    section.addEventListener('click', function(evt){
        const target = evt.target;

        if(target.classList.contains(`${section.className}`)){
            section.remove();
        };
    });
    bodyPage.addEventListener('keydown', function(evt){
        if(evt.key === "Escape"){
            section.remove();
        };
    });
};

export {success, errorMesage, errorBlock, closeMessage};