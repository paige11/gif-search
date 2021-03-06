import axios from 'axios';

const PUBLIC_KEY = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const getGifsBySearchTerm = searchTerm => {
  let sluggedTerm = searchTerm.replace(/ /g, '+');

  return axios.get(`${BASE_URL}/search?q=${sluggedTerm}&api_key=${PUBLIC_KEY}`);
}

export const getGifsByIds = ids => {
  let idsString = ids.join();

  return axios.get(`${BASE_URL}?ids=${idsString}&api_key=${PUBLIC_KEY}`);
}
