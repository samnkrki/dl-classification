const envConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || '',
  predictPaths: {
    basePath: '/predict/',
    get handwrittenDigits() {
      return this.basePath + 'digit';
    },
    get catDogPrediction() {
      return this.basePath + 'cat-dog';
    },
  },
  classificationOptions: [
    {
      id: 1,
      label: 'Handwritten digits classification',
    },
    {
      id: 2,
      label: 'Cat or Dog Prediction',
      description: 'This is used to determine whether an input image is a dog or a cat.'
    },
  ],
};
Object.seal(envConfig);
export default envConfig;
