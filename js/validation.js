import {selectImage} from './form.js';
import {sendForm} from './send-data.js';

const inputHashTegs = document.querySelector('.text__hashtags');
const areaComments = document.querySelector('.text__description');
const buttonClose = document.querySelector('#upload-cancel');
const regularExp = /^[a-zA-ZА-Яа-я0-9]+$/;
const textError = document.createElement('div');
const MAXIMUM_CHARACTER_COMMENT = 140;

const pristine = new Pristine(selectImage);
pristine.addValidator(areaComments, validationComments, errorAreaComments);
pristine.addValidator(inputHashTegs, validationHashTagsTwo, errorHashTagsTwo);

function validationComments (value){
    if(value.length <= MAXIMUM_CHARACTER_COMMENT){
        areaComments.style.border = '1px solid rgb(133, 133, 133)';
        areaComments.style.outline = '-webkit-focus-ring-color';    
        textError.remove();
        return true;
    } else {
        return false;
    };
};

function errorAreaComments (){
    areaComments.style.border = '2px solid red';
    areaComments.style.outline = 'red';    
    textError.textContent = `Комментарий не может быть больше ${MAXIMUM_CHARACTER_COMMENT} символов`;
    textError.style.color = 'red';
    textError.style.outline = 'red';
    textError.style.marginTop = '0';
    areaComments.after(textError);

    
    // areaComments.addEventListener('blur', function(){
    //     textError.remove();
    // });
};

function checkHashTag (valueArray){
    const valueOneArray = valueArray[0];
    
    if(valueOneArray[0] !== "#" && document.querySelector('.text__hashtags:focus')){
        return false;
    } else if(valueOneArray[0] === "#" && valueOneArray.length < 2){
        return false;
    } if(valueOneArray[0] === "#" && !regularExp.test(valueOneArray.substring(1))){
        return false;
    } else if(valueOneArray.length > 20){
        return false;
    };
    return true;
};

function showErrorHashTag (valueArray){
    const valueOneArray = valueArray[0];
    if(valueOneArray[0] !== "#"){
        textError.textContent = "Хэш-тег должен начинаться с #";
    } else if(valueOneArray[0] === "#" && valueOneArray.length < 2){
        textError.textContent = 'Хэш-тег не может состоять только из одной решётки';
    } else if(!regularExp.test(valueOneArray.substring(1))){
        textError.textContent = "Хэш-тег может состоять только из букв и чисел";
    } else if(valueOneArray.length > 20){
        textError.textContent = 'Длина хэш-тега не должна превышать 20 символов';
    };
    inputHashTegs.style.border = '2px solid red';
    inputHashTegs.style.outline = 'red'; 
    textError.style.color = 'red';
    textError.style.outline = 'red';
    textError.style.marginTop = '-20px';
    inputHashTegs.after(textError);
    return true;
};

function validationHashTagsTwo(value){
    const newArrayValueInput = value.split(' ').map(el => el.split(' '));   

    if(newArrayValueInput.length > 5){
        return false;
    };

    inputHashTegs.style.marginBottom = '20px'; 
    inputHashTegs.style.border = '1px solid rgb(133, 133, 133)';
    inputHashTegs.style.outline = '-webkit-focus-ring-color'; 
    textError.remove();

    for (let i = 0; i < newArrayValueInput.length; i++){
        const valueOneArray = newArrayValueInput[i][0];
        for (let j = 0; j < newArrayValueInput.length; j++){
            if (!(newArrayValueInput.indexOf(newArrayValueInput[i]) === newArrayValueInput.indexOf(newArrayValueInput[j])) && valueOneArray.toLowerCase() === newArrayValueInput[j][0].toLowerCase()){
                return false;
            };
        };
    };
    switch (newArrayValueInput.length){
        case 1:
            return checkHashTag(newArrayValueInput[0]);
        case 2:
            return checkHashTag(newArrayValueInput[1]);
        case 3:
            return checkHashTag(newArrayValueInput[2]);
        case 4:
            return checkHashTag(newArrayValueInput[3]);
        case 5:
            return checkHashTag(newArrayValueInput[4]);
    };
    return true;
};

function errorHashTagsTwo (value){
    const newArrayValueInput = value.split(' ').map(el => el.split(' '));   
    if(newArrayValueInput.length > 5){
         textError.textContent = 'Нельзя указывать больше пяти хэш-тегов';
    } else {
        textError.textContent = 'Хэш-тег не может быть использован дважды';
    }
    switch (newArrayValueInput.length){
        case 1:
            return showErrorHashTag(newArrayValueInput[0]);
        case 2:
            return showErrorHashTag(newArrayValueInput[1]);
        case 3:
            return showErrorHashTag(newArrayValueInput[2]);
        case 4:
            return showErrorHashTag(newArrayValueInput[3]);
        case 5:
            return showErrorHashTag(newArrayValueInput[4]);
    };
    inputHashTegs.style.border = '2px solid red';
    inputHashTegs.style.outline = 'red'; 
    textError.style.color = 'red';
    textError.style.outline = 'red';
    textError.style.marginTop = '-20px';
    inputHashTegs.after(textError);

    // inputHashTegs.addEventListener('blur', function(){
    //     textError.remove();
    // });
};

buttonClose.addEventListener('click', function(){
    inputHashTegs.style.border = '1px solid rgb(133, 133, 133)';
    inputHashTegs.style.outline = '-webkit-focus-ring-color'; 
    areaComments.style.border = '1px solid rgb(133, 133, 133)';
    areaComments.style.outline = '-webkit-focus-ring-color'; 
    textError.remove();
});

selectImage.addEventListener('submit', function(evt){
    evt.preventDefault();
    sendForm(pristine.validate());
});