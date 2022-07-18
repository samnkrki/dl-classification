import axios from 'axios';

/**
 * returns a promise
 * @param {File} image
 */
export function predictImage(image) {
  const reqBody = new FormData();
  reqBody.append(image, image);
  return axios.post('', reqBody);
}
