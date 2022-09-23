import axios from 'axios';
import envConfig from '../config';

/**
 * returns a promise
 * @param {File} image
 */
export function predictImage(image) {
  const reqBody = new FormData();
  reqBody.append('file', image);
  return axios.post(envConfig.baseUrl + envConfig.predictPaths.catDogPrediction, reqBody);
}
