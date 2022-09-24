const envConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || '',
  categoriesPaths: {
    basePath: '/categories'
  },
  predictPaths: {
    basePath: '/predict',
    get catDogPrediction() {
      return this.basePath + 'cat-dog';
    },
  },
};
Object.seal(envConfig);
export default envConfig;
