import { toolsLinks } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/middleware/api";
import { GET_ALL_TOOLS } from "../../actionTypes/storage/tools";
import { getToken } from "../auth";

// eslint-disable-next-line import/prefer-default-export
// export function fetchTools() {
//   return async (dispatch: Dispatch) => {
//     const request = await axios.get(toolsLinks.getTools);
//     dispatch({ type: FETCH_TOOLS, payload: request.data.results });
//   };
// }

// eslint-disable-next-line import/prefer-default-export
export const getAll = createAsyncThunk(GET_ALL_TOOLS, async () => {
  console.log("try to get");
  const request = await axios.get(toolsLinks.getAll, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return request.data;
});
