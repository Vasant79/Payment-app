import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: null,
  status: "idle",
  error: null,
};

const url = "https://665e123be88051d6040952be.mockapi.io/api/user";

export const getUser = createAsyncThunk("user/details", async () => {
  try {
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error();
  }
});

const authSLice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    addData: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.userInfo = action.payload[0];
      console.log("status succeeded ", state.userInfo);
    });

    builder.addCase(getUser.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { addData } = authSLice.actions;
export default authSLice.reducer;
