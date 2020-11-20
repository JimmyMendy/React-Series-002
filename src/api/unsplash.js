import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID kUNJW2j9jrOi38TTks4TzBR5ROPOb0q0biopirn1smI'
  }
});