import {success, errorMesage} from './message.js';
import {selectImage} from './form.js';

const URL_SERVER = "https://25.javascript.pages.academy/kekstagram";
      
const sendForm = (pristine) => {
  if(pristine){
    const formData = new FormData(selectImage);
    fetch(
      URL_SERVER,
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        success();
      } else {
        errorMesage();
      }
    })
      .catch(() => {
        errorMesage();
      });
  };
};
  
export {sendForm};  