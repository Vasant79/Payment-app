import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSLice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    addData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addData } = authSLice.actions;
export default authSLice.reducer;
