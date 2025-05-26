const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      return ``;
    }
    return 'http://localhost:8000';
};
  
export const BASE_URL = getBaseUrl();