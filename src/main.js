import { searchFormImg } from './js/pixabay-api.js';
import {
  showLoader,
  hideLoader,
  createMarkup,
  clearImagesGallery,
  searchError,
  initializeLightbox,
  searchInfo,
} from './js/render-functions.js';

const loaderContainer = document.querySelector('.loader-container');
const form = document.getElementById('form');
const ulGroup = document.querySelector('.ul-group');
const loadMoreBtn = document.querySelector('.load-more-btn');

form.addEventListener('submit', handleSearch);
loadMoreBtn.style.display = 'none';
let page = 1;
const limit = 15;
const maxPages = 15;

async function handleSearch(event) {
  event.preventDefault();
  showLoader(loaderContainer);

  clearImagesGallery(ulGroup);

  const inputForm = form.elements.img.value.trim();
  try {
    const images = await searchFormImg(inputForm, page, limit);
    if (images.length === 0) {
      loadMoreBtn.style.display = 'none';
      clearImagesGallery(ulGroup);
      searchError();
    } else {
      renderImages(images);
      loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    console.error(error);
    searchError();
  } finally {
    hideLoader(loaderContainer);
    form.reset();
  }
}

function renderImages(images) {
  images.forEach(image => {
    const markup = createMarkup(image);
    ulGroup.insertAdjacentHTML('beforeend', markup);
  });
  const lightbox = initializeLightbox();
  lightbox.refresh();
}

loadMoreBtn.addEventListener('click', clickNextSearch);

async function clickNextSearch() {
  page++;

  try {
    if (page > maxPages) {
      searchInfo();
      loadMoreBtn.style.display = 'none';
      return;
    }

    const images = await searchFormImg(
      form.elements.img.value.trim(),
      page,
      limit
    );
    if (images.length === 0) {
      loadMoreBtn.style.display = 'none';
      searchInfo();
    } else {
      renderImages(images);
      loadMoreBtn.style.display = 'block';

      const cardHeight = ulGroup
        .querySelector('.gallery-item')
        .getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    console.error(error);
    searchError();
  }
}
