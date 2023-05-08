import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://quizapi.io/api",
  params: {
    apiKey: "mryzcG50D9p3P32N0ACkJ09stUNXhwQl4nH0nf6U",
    limit: 10,
  },
});

