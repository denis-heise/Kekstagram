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
    buttonClose.addEventListener('click', function () {
        closeModal();
    }); 
    uploadOverlay.addEventListener('keydown', function (evt) {
        const inputHashTegs = uploadOverlay.querySelector('.text__hashtags:focus');
        const areaComments = uploadOverlay.querySelector('.text__description:focus');
        const errorSection = document.querySelector('.error');
        if(evt.key === "Escape" && inputHashTegs === null && areaComments === null && errorSection === null){
            closeModal();
        };
    });  
};

function closeModal (){
    const previewNewImage = previewImageBlock.querySelector('img');
    uploadOverlay.classList.add('hidden');
    bodyPage.classList.remove('modal-open');
    selectImage.reset();
    if(previewNewImage){
      previewImageBlock.removeChild(previewNewImage);
    };
    sliderElement.style.display = 'none';
    uploadEffectLevel.style.display = 'none';
    imgUpload.removeEventListener('click', listenerClickButtonScale);
};

function changeImage (){    
    const file = uploadFile.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();
      previewImage.remove();
  
      reader.addEventListener('load', () => {
        previewImage.src = reader.result;
        function getPhotos () {
          const propertyPhotosNode = document.createElement('img');
          function setAttributes (el, options) {
            Object.keys(options).forEach((attr) => {
              el.setAttribute(attr, options[attr]);
            });
          }
          setAttributes(propertyPhotosNode, {'src': reader.result, 'alt': ALT});
          propertyPhotosNode.classList.add('property-new-photo')
          previewImageBlock.appendChild(propertyPhotosNode);
          imageEffects.forEach(item => {
            item.style.backgroundImage = `url(${propertyPhotosNode.getAttribute('src')})`;
          });
          changeScale();
          filterEffect(propertyPhotosNode);
        }
        getPhotos();
      });
      reader.readAsDataURL(file);
    };
};  

uploadFile.addEventListener('change', () => {
  showModal();
  changeImage();
});

export {bodyPage, selectImage, uploadOverlay, closeModal};