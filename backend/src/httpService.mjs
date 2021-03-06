import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

  if (!expectedError) {
    console.error(`An unexpected error occurrred. (${error})`);
  }

  return Promise.reject({
    status: error.response.status,
    message: error.response.statusText,
    data: error.response.data,
  });
});


export const apiUrl = process.env['AUTH_API_URL'] ;

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  apiUrl,
};
