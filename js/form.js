import {changeScale, imgUpload, listenerClickButtonScale} from './change-picture.js';
import {filterEffect, sliderElement, uploadEffectLevel} from './effects.js';

const FILE_TYPES = ['.gif', '.jpg', '.jpeg', '.png'];
const ALT = 'Аватар пользователя';
const bodyPage = document.querySelector('body');
const selectImage = document.querySelector('#upload-select-image');
const uploadFile = selectImage.querySelector('#upload-file');
const uploadOverlay = selectImage.querySelector('.img-upload__overlay');
const buttonClose = uploadOverlay.querySelector('.img-upload__cancel');
const previewImageBlock = uploadOverlay.querySelector('.img-upload__preview');
const previewImage = previewImageBlock.querySelector('img');
const imageEffects = document.querySelectorAll('.effects__preview');

function showModal (){
  uploadOverlay.classList.remove('hidden');
  bodyPage.classList.add('modal-open');
  buttonClose.addEventListener('click', () => {
    closeModal();
  });
  uploadOverlay.addEventListener('keydown', (evt) => {
    const inputHashTegs = uploadOverlay.querySelector('.text__hashtags:focus');
    const areaComments = uploadOverlay.querySelector('.text__description:focus');
    const errorSection = document.querySelector('.error');
    if(evt.key === 'Escape' && inputHashTegs === null && areaComments === null && errorSection === null){
      closeModal();
    }
  });
}

function closeModal (){
  uploadOverlay.classList.add('hidden');
  bodyPage.classList.remove('modal-open');
  selectImage.reset();

  const customPhoto = previewImageBlock.querySelector('.property-new-photo');
  if(customPhoto){
    customPhoto.remove();
  }
  if (previewImage && !previewImageBlock.contains(previewImage)) {
    previewImageBlock.appendChild(previewImage);
  }

  sliderElement.style.display = 'none';
  uploadEffectLevel.style.display = 'none';
  imgUpload.removeEventListener('click', listenerClickButtonScale);
}

function changeImage (){
  const file = uploadFile.files[0];
  if (!file) {
    return;
  }
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const existingCustomPhoto = previewImageBlock.querySelector('.property-new-photo');
      if (existingCustomPhoto) {
        existingCustomPhoto.remove();
      }
      if (previewImage) {
        previewImage.remove();
      }

      const propertyPhotosNode = document.createElement('img');
      propertyPhotosNode.setAttribute('src', reader.result);
      propertyPhotosNode.setAttribute('alt', ALT);
      propertyPhotosNode.classList.add('property-new-photo');
      previewImageBlock.appendChild(propertyPhotosNode);

      imageEffects.forEach((item) => {
        item.style.backgroundImage = `url(${reader.result})`;
      });

      showModal();
      changeScale();
      filterEffect(propertyPhotosNode);
    });

    reader.readAsDataURL(file);
  }
}

uploadFile.addEventListener('change', changeImage);

export {bodyPage, selectImage, uploadOverlay, closeModal};
