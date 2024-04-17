import axios from 'axios';

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

export const FetchArticles = async searchQuery => {
  //   const response = await axios.get(`/search?query= ${searchQuery}`);
  const response = await axios.get('/search', {
    params: {
      query: searchQuery,
    },
  });
  return response.data.hits;
};
