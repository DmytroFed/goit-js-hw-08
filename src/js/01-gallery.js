
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// get access to the div where the collection will be stored
const galleryContainer = document.querySelector('.gallery');

// create a variable where the gallery will be stored
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

// add gallery to markup
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
     
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>`;
    })
    .join('');
}

// отображение подписей к изображениям из атрибута alt. 
//Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionType: 'attr',
  captionPosition: 'bottom',
  captionDelay: 350,
  captionsData: 'alt',
});

console.log(galleryItems);






