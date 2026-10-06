import {selectImage} from './form.js';
import {sendForm} from './send-data.js';

const inputHashTegs = document.querySelector('.text__hashtags');
const areaComments = document.querySelector('.text__description');
const buttonClose = document.querySelector('#upload-cancel');
const regularExp = /^[a-zA-ZА-Яа-я0-9]+\$/;
const textError = document.createElement('div');
const MAXIMUM_CHARACTER_COMMENT = 140;

const pristine = new window.Pristine(selectImage);
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
  }
}

function errorAreaComments (){
  areaComments.style.border = '2px solid red';
  areaComments.style.outline = 'red';
  textError.textContent = `Комментарий не может быть больше ${MAXIMUM_CHARACTER_COMMENT} символов`;
  textError.style.color = 'red';
  textError.style.outline = 'red';
  textError.style.marginTop = '0';
  areaComments.after(textError);
}

function checkHashTag (valueOneArray){
  if (!valueOneArray) {
    return true;
  }
  if(valueOneArray[0] !== '#' && document.querySelector('.text__hashtags:focus')){
    return false;
  } else if(valueOneArray[0] === '#' && valueOneArray.length < 2){
    return false;
  } if(valueOneArray[0] === '#' && !regularExp.test(valueOneArray.substring(1))){
    return false;
  } else if(valueOneArray.length > 20){
    return false;
  }
  return true;
}

function showErrorHashTag (valueOneArray){
  if (!valueOneArray) {
    return true;
  }
  if(valueOneArray[0] !== '#'){
    textError.textContent = 'Хэш-тег должен начинаться с #';
  } else if(valueOneArray[0] === '#' && valueOneArray.length < 2){
    textError.textContent = 'Хэш-тег не может состоять только из одной решётки';
  } else if(!regularExp.test(valueOneArray.substring(1))){
    textError.textContent = 'Хэш-тег может состоять только из букв и чисел';
  } else if(valueOneArray.length > 20){
    textError.textContent = 'Длина хэш-тега не должна превышать 20 символов';
  }
  inputHashTegs.style.border = '2px solid red';
  inputHashTegs.style.outline = 'red';
  textError.style.color = 'red';
  textError.style.outline = 'red';
  textError.style.marginTop = '-20px';
  inputHashTegs.after(textError);
  return true;
}

function validationHashTagsTwo(value){
  const trimmed = value.trim();
  if (!trimmed) {
    inputHashTegs.style.border = '1px solid rgb(133, 133, 133)';
    inputHashTegs.style.outline = '-webkit-focus-ring-color';
    textError.remove();
    return true;
  }

  const newArrayValueInput = trimmed.split(/\s+/);

  if(newArrayValueInput.length > 5){
    return false;
  }

  inputHashTegs.style.marginBottom = '20px';
  inputHashTegs.style.border = '1px solid rgb(133, 133, 133)';
  inputHashTegs.style.outline = '-webkit-focus-ring-color';
  textError.remove();

  for (let i = 0; i < newArrayValueInput.length; i++){
    const valueOneArray = newArrayValueInput[i];
    for (let j = 0; j < newArrayValueInput.length; j++){
      if (i !== j && valueOneArray.toLowerCase() === newArrayValueInput[j].toLowerCase()){
        return false;
      }
    }
  }

  for (let i = 0; i < newArrayValueInput.length; i++) {
    if (!checkHashTag(newArrayValueInput[i])) {
      return false;
    }
  }

  return true;
}

function errorHashTagsTwo (value){
  const trimmed = value.trim();
  const newArrayValueInput = trimmed.split(/\s+/);

  if(newArrayValueInput.length > 5){
    textError.textContent = 'Нельзя указывать больше пяти хэш-тегов';
  } else {
    let isDuplicate = false;
    for (let i = 0; i < newArrayValueInput.length; i++){
      for (let j = 0; j < newArrayValueInput.length; j++){
        if (i !== j && newArrayValueInput[i].toLowerCase() === newArrayValueInput[j].toLowerCase()){
          isDuplicate = true;
        }
      }
    }
    if (isDuplicate) {
      textError.textContent = 'Хэш-тег не может быть использован дважды';
    } else {
      for (let i = 0; i < newArrayValueInput.length; i++) {
        if (!checkHashTag(newArrayValueInput[i])) {
          showErrorHashTag(newArrayValueInput[i]);
          return;
        }
      }
    }
  }

  inputHashTegs.style.border = '2px solid red';
  inputHashTegs.style.outline = 'red';
  textError.style.color = 'red';
  textError.style.outline = 'red';
  textError.style.marginTop = '-20px';
  inputHashTegs.after(textError);
}

buttonClose.addEventListener('click', ()=> {
  inputHashTegs.style.border = '1px solid rgb(133, 133, 133)';
  inputHashTegs.style.outline = '-webkit-focus-ring-color';
  areaComments.style.border = '1px solid rgb(133, 133, 133)';
  areaComments.style.outline = '-webkit-focus-ring-color';
  textError.remove();
});

selectImage.addEventListener('submit', (evt)=> {
  evt.preventDefault();
  sendForm(pristine.validate());
});
