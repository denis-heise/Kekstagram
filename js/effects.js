const uploadEffects = document.querySelector('.img-upload__effects.effects');
const uploadEffectLevel = document.querySelector('.img-upload__effect-level.effect-level');
const inpetEffects = uploadEffects.querySelectorAll('input[type=radio]');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const buttonClose = document.querySelector('#upload-cancel');
const uiSliderOptions = {
    'DEFAULT': {
        RANGE: {
            MIN: 0,
            MAX: 1,
        },
        START: 1,
        STEP: 0.1,
        CURRENT_EFFECT: 'none',
        EFFECT_UNIT_MEASURE: '',
    },
    'CHROME': {
        RANGE: {
            MIN: 0,
            MAX: 1,
        },
        START: 1,
        STEP: 0.1,
        CURRENT_EFFECT: 'grayscale',
        EFFECT_UNIT_MEASURE: '',
    },
    'SEPIA': {
        RANGE: {
            MIN: 0,
            MAX: 1,
        },
        START: 1,
        STEP: 0.1,
        CURRENT_EFFECT: 'sepia',
        EFFECT_UNIT_MEASURE: '',
    },
    'MARVIN': {
        RANGE: {
            MIN: 0,
            MAX: 100,
        },
        START: 100,
        STEP: 1,
        CURRENT_EFFECT: 'invert',
        EFFECT_UNIT_MEASURE: '%',
    },
    'PHOBOS': {
        RANGE: {
            MIN: 0,
            MAX: 3,
        },
        START: 3,
        STEP: 0.1,
        CURRENT_EFFECT: 'blur',
        EFFECT_UNIT_MEASURE: 'px',
    },
    'HEAT': {
        RANGE: {
            MIN: 1,
            MAX: 3,
        },
        START: 3,
        STEP: 0.1,
        CURRENT_EFFECT: 'brightness',
        EFFECT_UNIT_MEASURE: '',
    }
};

noUiSlider.create(sliderElement, {
    connect: 'lower',
    range: {
      min: 0,
      max: 1,
    },
    start: 100,
    step: 0.1,
});

function showSlider ({RANGE: { MIN, MAX }, START, STEP, CURRENT_EFFECT, EFFECT_UNIT_MEASURE}){
    const img = document.querySelector('.img-upload__preview img');

    sliderElement.noUiSlider.updateOptions({
        range: {
          min: MIN,
          max: MAX,
        },
        start: START,
        step: STEP,
        connect: 'lower'
    });
    
    sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
        if (CURRENT_EFFECT === 'none') {
            img.style.filter = `${CURRENT_EFFECT}`;
        } else {
            img.style.filter = `${CURRENT_EFFECT}(${unencoded[handle]}${EFFECT_UNIT_MEASURE})`;
            effectLevelValue.setAttribute('value', unencoded[handle]);
        };
    });
};

sliderElement.style.display = 'none';
uploadEffectLevel.style.display = 'none';

uploadEffects.addEventListener('click', function(evt){
    const target = evt.target;

    if(target.id === 'effect-none'){
        sliderElement.style.display = 'none';
        uploadEffectLevel.style.display = 'none';
        showSlider(uiSliderOptions.DEFAULT);
    } else {
        sliderElement.style.display = 'block';
        uploadEffectLevel.style.display = 'block';
    }
});

function listenerСhoosEffect (element, imgDownloaded){
    element.addEventListener('click', function(){
        imgDownloaded.className = '';
        switch (element.id){
            case 'effect-chrome':
                imgDownloaded.classList.add('effects__preview--chrome');
                showSlider(uiSliderOptions.CHROME);
                break;
            case 'effect-sepia':    
                imgDownloaded.classList.add('effects__preview--sepia');
                showSlider(uiSliderOptions.SEPIA);
                break;
            case 'effect-marvin':
                imgDownloaded.classList.add('effects__preview--marvin');
                showSlider(uiSliderOptions.MARVIN);
                break;
            case 'effect-phobos':    
                imgDownloaded.classList.add('effects__preview--phobos');
                showSlider(uiSliderOptions.PHOBOS);
                break;
            case 'effect-heat':
                imgDownloaded.classList.add('effects__preview--heat');
                showSlider(uiSliderOptions.HEAT);
                break;
        };
    });
};

function filterEffect(imgDownloaded){
    inpetEffects.forEach(element => listenerСhoosEffect(element, imgDownloaded));
};

const noUiTarget = document.querySelector('.noUi-target');
const noUiConnects = document.querySelector('.noUi-connects');
noUiTarget.style.borderRadius = '16px';
noUiConnects.style.borderRadius = '16px';
noUiTarget.style.marginTop = '2px';

buttonClose.addEventListener('click', function(){
    sliderElement.noUiSlider.updateOptions({
        connect: 'lower',
        range: {
          min: 0,
          max: 1,
        },
        start: 100,
        step: 0.1,
    });
    sliderElement.style.display = 'none';
    uploadEffectLevel.style.display = 'none';
});

export {filterEffect, sliderElement, uploadEffectLevel};