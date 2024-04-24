import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function showLoader(loaderContainer) {
  loaderContainer.style.display = 'block';
}

export function hideLoader(loaderContainer) {
  loaderContainer.style.display = 'none';
}

export function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" height="240" />
    <ul class="property-list">
      <li class="property-item">
        <p class="property-title">Likes</p>
        <p class="property-value">${likes}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Views</p>
        <p class="property-value">${views}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Comments</p>
        <p class="property-value">${comments}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Downloads</p>
        <p class="property-value">${downloads}</p>
      </li>
    </ul>  
  </a>
</li>

  `;
}

export function clearImagesGallery(ulGroup) {
  ulGroup.innerHTML = '';
}

export function searchError() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there was an error processing your request. Please try again later.',
    position: 'topRight',
  });
}

export function initializeLightbox() {
  return new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}

export function searchInfo() {
  iziToast.info({
    title: 'info',
    position: 'topRight',
    message: "We're sorry, but you've reached the end of search results.",
  });
}
