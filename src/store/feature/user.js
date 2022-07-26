import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    reset: () => {
      return {};
    }
  },
});

const { actions, reducer } = userSlice;

export const { reset, update } = actions;

export default reducer;
