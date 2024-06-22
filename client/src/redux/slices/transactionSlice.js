import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  transactions: null,
  status: "idle",
  error: null,
};

const api =
  "https://d3606faa-2c79-4b42-86d1-7c73e016125a.mock.pstmn.io/fastpay/transaction";

export const getTransactionData = createAsyncThunk(
  "transaction/data",
  async () => {
    try {
      let response = await axios.get(api);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState: initialState,

  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTransactionData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.transactions = action.payload;
    });

    builder.addCase(getTransactionData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getTransactionData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default transactionSlice.reducer;
