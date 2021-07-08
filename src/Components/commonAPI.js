import axios from 'axios';

export const get = (path) =>
  axios
    .get(`${path}`)
    .then(res => {
      return res;
    })
    .catch(error => {
      throw error;
});