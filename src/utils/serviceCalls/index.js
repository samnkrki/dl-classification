import axios from 'axios';
import envConfig from '../config';

/**
 * returns a promise
 * @param {File} image
 * @param {string} category
 */
export function predictImage(image, category) {
  const reqBody = new FormData();
  reqBody.append('file', image);
  reqBody.append('category', category);
  return axios.post(envConfig.baseUrl + envConfig.predictPaths.basePath, reqBody);
}

/**
 * fetches all available categories for prediction
 * @returns Promise
 */
export function fetchCategories() {
  return axios.get(envConfig.baseUrl+ envConfig.categoriesPaths.basePath);
}