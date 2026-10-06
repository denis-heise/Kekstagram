import {success} from './message.js';

const sendForm = (pristine) => {
  if(pristine){
    success();
  }
};

export {sendForm};
