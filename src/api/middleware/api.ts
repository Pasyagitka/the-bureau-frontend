/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */

// const axiosInstance = axios.create({
//   // TODO not used???
//   baseURL: process.env.API_BASE_URL,
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       await persistor.purge();
//       console.log(error, "axios 401");
//       deleteToken();
//       (window as Window).location = "/login";
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );\

// export default axiosInstance;
