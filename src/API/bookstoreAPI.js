import axios from 'axios';

const APP_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tAB8SosTtsDw2NxkYEWP/books';

export const fetchBooksAPI = async () => {
  const response = await axios.get(APP_URL);
  return response.data;
};

export const deleteBookAPI = async (id) => axios({
  method: 'DELETE',
  url: `${APP_URL}/${id}`,
});

export const addBookAPI = async (book) => axios({
  method: 'POST',
  url: APP_URL,
  data: book,
});
