// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Define your async thunk for logging in
// export const loginAsync = createAsyncThunk(
//   "auth/login",
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await authAPI.login(credentials);
//       // Return data to be added to the Redux store
//       return response.data;
//     } catch (error) {
//       // Handle errors here
//       return thunkAPI.rejectWithValue({ message: error.message });
//     }
//   }
// );

const initialState = {
  // Define your initial state here
  prods: [],
  prodCnt: 0,
  // Add more initial state properties as needed
};

const authSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Define your synchronous reducers here
    prodsRdcr: (state, action) => {
      state.prods += action.payload; // todo complite the statement ...payload.arg
    },
    prodCntRdcr: (state) => {
      state.prodCnt += action.payload; // todo complite the statement ...payload.arg
    },
    // Add more synchronous reducers as needed
  },
  // extraReducers: {
  //   // Define extra reducers here for handling async actions
  //   [loginAsync.pending]: (state) => {
  //     state.isLoading = true;
  //     state.error = null;
  //   },
  //   [loginAsync.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.isLoggedIn = true;
  //     state.username = action.payload.username;
  //   },
  //   [loginAsync.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload.message;
  //   },
  //   // Add more extra reducers for other async actions as needed
  // },
});

export const { prodsRdcr, prodCountRdcr } = authSlice.actions;

// Define selector functions here if needed
export const slctProds = (state) => state.cart.prods;
export const slctProdCnt = (state) => state.cart.prodCnt;

export default authSlice.reducer;
