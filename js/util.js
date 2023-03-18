function getRandoNumber(min, max) {
    if(min < max && min >= 0 && max > 0 && min !== max){
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    } else {
        throw console.log('error')
    };
};
  
function checkLength (stringCheck, maxLength){
    if(stringCheck.length <= maxLength){
        return true
    } else {
        return false
    };
};

checkLength(3, 23);