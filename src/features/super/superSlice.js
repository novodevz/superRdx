// superSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProds } from "./superAPI";

// Define your async thunk for getting all products
export const getAllProdsAsync = createAsyncThunk(
  "super/getAllProds",
  async (path, thunkAPI) => {
    // Change 'a' to '_' if you're not using the argument
    try {
      const response = await getAllProds(path); // Call the correct API method
      // Return data to be added to the Redux store
      return response;
    } catch (error) {
      // Handle errors here
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

const initialState = {
  // Define your initial state here
  prods: [],
  prodCnt: 0,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  // Add more initial state properties as needed
};

const superSlice = createSlice({
  name: "super",
  initialState,
  reducers: {
    // Define your synchronous reducers here
    prodsRdcr: (state, action) => {
      state.prods = action.payload; // Set products to the payload data
    },
    prodCntRdcr: (state, action) => {
      // Fix the name of the action parameter
      state.prodCnt += action.payload.length; // Increment prodCnt by the length of the payload
    },
    // Add more synchronous reducers as needed
  },
  extraReducers: (builder) => {
    // Define extra reducers here for handling async actions
    builder
      .addCase(getAllProdsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProdsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.prods = action.payload; // Update products with the fetched data
      })
      .addCase(getAllProdsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
    // Add more extra reducers for other async actions as needed
  },
});

export const { prodsRdcr, prodCntRdcr } = superSlice.actions;

// Define selector functions here if needed
export const slctProds = (state) => state.super.prods;
export const slctProdCnt = (state) => state.super.prodCnt;
export const slctIsLoggedIn = (state) => state.super.isLoggedIn;
export const slctIsLoading = (state) => state.super.isLoading;
export const slctError = (state) => state.super.error;

export default superSlice.reducer;
