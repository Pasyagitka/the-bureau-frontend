// import axios from "axios";
// import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { detailsLink } from "@/constants";
// import { movieDto } from "@/types/dto/movieDto";
// import { getMovieDetailsType } from "@/types/getMovieDetailsType";
// import { APP_SHOW_MODAL, APP_CLEAR_MODAL, APP_GET_MOVIE_DETAILS, APP_SET_MOVIE } from "../actionTypes/app";

// export const showModal = createAction<boolean>(APP_SHOW_MODAL);
// export const clearModal = createAction(APP_CLEAR_MODAL);
// export const setMovie = createAction<movieDto>(APP_SET_MOVIE);

// export const getMovieDetails = createAsyncThunk(
//   APP_GET_MOVIE_DETAILS,
//   async ({ mediaType, mediaId }: getMovieDetailsType) => {
//     const request = await axios.get(detailsLink({ mediaType, mediaId }));
//     return request.data;
//   }
// );
