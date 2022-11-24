// /* eslint-disable no-param-reassign */
// import { createReducer } from "@reduxjs/toolkit";
// // import { showModal, setMovie, clearModal, getMovieDetails } from "../actions/app";

// type AppStateProps = {
//   showModal: boolean;
// }
// //   movie: movieDetailsDto;
// // };

// const initialState = {
//   showModal: false,
//   movie: {
//     title: "",
//     name: "",
//     vote_average: 0,
//     release_date: 0,
//     first_air_date: 0,
//     runtime: 0,
//     episode_run_time: 0,
//     number_of_episodes: 0,
//     number_of_seasons: 0,
//     overview: "",
//   },
// };

// const appStateReducer = createReducer<AppStateProps>(initialState, (builder) => {
//   builder.addCase(showModal, (state, action) => {
//     state.showModal = action.payload;
//   });
//   builder.addCase(clearModal, (state, action) => {
//     state.movie = initialState.movie;
//   });
//   builder.addCase(setMovie, (state, action) => {
//     state.movie = action.payload;
//   });
//   builder.addCase(getMovieDetails.fulfilled, (state, action) => {
//     state.movie = action.payload;
//   });
// });

// export default appStateReducer;
