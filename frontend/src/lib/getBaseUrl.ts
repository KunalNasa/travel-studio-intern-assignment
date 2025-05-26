const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      return `https://${process.env.VERCEL_URL}`;
    }
    return 'http://localhost:8000';
};
  
export const BASE_URL = getBaseUrl();