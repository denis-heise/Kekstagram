const imgUpload = document.querySelector('.img-upload__scale');
const scaleControlValue = imgUpload.querySelector('.scale__control--value');
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;


function changeScale (){
    scaleControlValue.value = '100%';
    imgUpload.addEventListener('click', listenerClickButtonScale);
};

function listenerClickButtonScale (evt){
    const target = evt.target;
    const scaleValue = parseFloat(scaleControlValue.value);

    target.classList.contains('scale__control--smaller') && scaleValue !== MIN_SCALE ? scaleControlValue.value = `${scaleValue - SCALE_STEP}%` : scaleControlValue;
     
    target.classList.contains('scale__control--bigger') && scaleValue !== MAX_SCALE ? scaleControlValue.value = `${scaleValue + SCALE_STEP}%` : scaleControlValue;

    scaleImg();
};

function scaleImg (){
    const scaleValue = parseFloat(scaleControlValue.value);
    const img = document.querySelector('.img-upload__preview img');
    img.style.transform = `scale(${scaleValue / 100})`;
    
};

export {changeScale, imgUpload, listenerClickButtonScale};