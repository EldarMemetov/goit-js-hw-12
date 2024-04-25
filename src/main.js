// main.js
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
const backToTopBtn = document.querySelector('.back-to-top-btn');

form.addEventListener('submit', handleSearch);
loadMoreBtn.style.display = 'none';
backToTopBtn.style.display = 'none';
let page = 1;
let currentQuery = '';

async function handleSearch(event) {
  event.preventDefault();
  showLoader(loaderContainer);

  clearImagesGallery(ulGroup);
  page = 1;
  const inputForm = form.elements.img.value.trim();
  currentQuery = inputForm;
  try {
    const images = await searchFormImg(inputForm, page, 15);
    if (images.length === 0) {
      loadMoreBtn.style.display = 'none';
      clearImagesGallery(ulGroup);
      searchError();
    } else {
      renderImages(images);
      if (images.length < 15) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'block';
      }
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
    const images = await searchFormImg(currentQuery, page);
    if (images.length === 0) {
      loadMoreBtn.style.display = 'none';
      searchInfo();
    } else {
      renderImages(images);
      if (images.length < 15) {
        loadMoreBtn.style.display = 'none';
        searchInfo();
      }
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

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
