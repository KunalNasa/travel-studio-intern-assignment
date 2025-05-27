const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      // blank because verce don't support base url for free tier as per my knowledge. Although tried configuring it to vercel_base url but it was unsuccessful in free tier.
      return ``;
    }
    return 'http://localhost:8000';
};
  
export const BASE_URL = getBaseUrl();