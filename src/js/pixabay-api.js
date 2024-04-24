import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '43475278-2a58784aecd56e70c750f20e8';

export async function searchFormImg(search, page = 1, perPage = 15) {
  const params = {
    key: KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  };

  try {
    const response = await axios.get(`${BASE_URL}/`, { params });
    return response.data.hits;
  } catch (error) {
    throw new Error(error.message);
  }
}
