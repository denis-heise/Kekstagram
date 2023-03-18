import {bodyPage} from './form.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialСommentСount = bigPicture.querySelector('.social__comment-count');
const buttonСommentsLoader = bigPicture.querySelector('.social__comments-loader.comments-loader');
const bigPictureCancel = document.querySelector('.big-picture__cancel'); 
const commentSocial = socialComments.querySelector('.social__comment').cloneNode(true);

function createImage (item){
    const templatePicture = document.querySelector('#picture').content;
    const pictureBlock = templatePicture.querySelector('.picture');
    const pictureNode = pictureBlock.cloneNode(true);
    const picturesContainer = document.querySelector('.pictures.container')
    
    const oneImage = pictureNode.querySelector('.picture__img');
    const oneBlockComments = pictureNode.querySelector('.picture__comments');
    const oneBlockLikes = pictureNode.querySelector('.picture__likes');
    const comments = item.comments;
    oneImage.setAttribute('src', `${item.url}`)
    oneBlockComments.textContent = comments.length;
    oneBlockLikes.textContent = item.likes;

    picturesContainer.append(pictureNode);
    pictureNode.addEventListener('click', function (){
        const pictureImg = this.querySelector('.picture__img');
        const pictureLikes = this.querySelector('.picture__likes');
        const oldComments = socialComments.querySelectorAll('.social__comment');
        const numberComments = comments.length < 5 ? comments.length : '5';

        oldComments.forEach(element => element.remove());

        bigPicture.classList.remove('hidden');
        bigPictureImg.setAttribute('src', pictureImg.getAttribute('src'));
        socialCaption.textContent = item.description;
        commentsCount.textContent = comments.length;
        likesCount.textContent = pictureLikes.textContent;        
        socialСommentСount.textContent = `${numberComments} из ${commentsCount.textContent} комментариев`;
        comments.length < 5 ?  buttonСommentsLoader.classList.add('hidden') :  buttonСommentsLoader.classList.remove('hidden');

        for (let i = 0; i < item.comments.length; i++){
            const cloneDuplication = commentSocial.cloneNode(true);
            const socialPicture = cloneDuplication.querySelector('.social__picture');
            const socialText = cloneDuplication.querySelector('.social__text');

            socialPicture.setAttribute('src', item.comments[i].avatar);
            socialText.textContent = item.comments[i].message;

            if(i >= 5){
                cloneDuplication.classList.add('hidden'); 
            };

            socialComments.appendChild(cloneDuplication);
        };
      
        listenerLoaderComments();
    });
};

bigPictureCancel.addEventListener('click', hiddenBlockPictur);
document.addEventListener('keydown', function(evt){
    if(evt.key === "Escape"){
        hiddenBlockPictur();
    };
});

function listenerLoaderComments (){
    buttonСommentsLoader.addEventListener('click', showComments);
};

function showComments (){
    const socialCommentHidden = socialComments.querySelectorAll('.social__comment.hidden');
    const socialCommentAll = socialComments.querySelectorAll('.social__comment');
    
    if(socialCommentHidden.length <= 5){
        socialСommentСount.textContent = `${socialCommentAll.length} из ${commentsCount.textContent} комментариев`;
    } else {
        socialСommentСount.textContent = `${socialCommentAll.length - socialCommentHidden.length + 5} из ${commentsCount.textContent} комментариев`;
    };

    if (socialCommentHidden.length !== 0){
        for (let i = 0; i < 5; i++){
            if(socialCommentHidden[i] === undefined){
                return buttonСommentsLoader.classList.add('hidden');
            };
            socialCommentHidden[i].classList.remove('hidden');
        };
    } else {
        buttonСommentsLoader.classList.add('hidden');
        buttonСommentsLoader.removeEventListener('click', showComments);

    };
};

function hiddenBlockPictur (){
    bigPicture.classList.add('hidden');
    bodyPage.classList.remove('modal-open');
};

function showImage (newArray){
    const picture = document.querySelectorAll('.picture');

    if(picture.length !== 0){
        picture.forEach(item => item.remove());
    };

    for (const item of newArray){
        createImage(item);
    };
};

export {showImage};