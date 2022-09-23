const envConfig = {
  baseUrl: process.env.BASE_URL || '',
  predictPaths: {
    basePath: '/predict/',
    get handwrittenDigits() {
      console.log(this);
      return this.basePath + 'digit';
    },
  },
};
Object.seal(envConfig);

export default envConfig;
