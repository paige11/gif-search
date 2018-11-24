import axios from 'axios';

const PUBLIC_KEY = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw';
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${PUBLIC_KEY}`;

export const searchForGifs = searchString => {
  let searchParams = searchString.replace(/ /g, '+');

  return axios.get(`${BASE_URL}&q=${searchParams}`);
}
