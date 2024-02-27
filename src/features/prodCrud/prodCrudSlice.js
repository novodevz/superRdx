// prodCrudSlice.jd

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDepCatInfo } from "./prodCrudAPI";
import {
  getRelatedCategories,
  getAllProds,
  getAllDepsInfo,
} from "./prodCrudScript";

const initialState = {
  data: {},
  allProds: [],
  depSelected: -1,
  deps: [],
  depCats: [],
  status: "",
  error: null,
};

export const getDepCatInfoAPI = createAsyncThunk(
  "prodCrud/getDepCatInfo",
  async () => {
    try {
      const d = await getDepCatInfo();
      return d;
    } catch (error) {
      throw error;
    }
  }
);

const prodCrudSlice = createSlice({
  name: "prodCrud",
  initialState,
  reducers: {
    // Define your synchronous reducers here
    depSelectedRdcr: (state, action) => {
      //   console.log("Action Payload:", action.payload);
      //   console.log("Action Type:", action.type);
      // console.log("state.data:", current(state.data));
      // Ensure action.payload.value is parsed as a number
      state.depSelected = parseInt(action.payload.value);
      //   console.log(
      //     "state.depSelected:",
      //     state.depSelected,
      //     typeof state.depSelected
      //   );
      state.depCats = getRelatedCategories(state.data, state.depSelected);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDepCatInfoAPI.pending, (state, action) => {
        // console.log("Pending action type:", action.type);
        state.status = action.meta.requestStatus;
      })
      .addCase(getDepCatInfoAPI.fulfilled, (state, action) => {
        // console.log("Fulfilled action type:", action.type);
        state.status = action.meta.requestStatus;
        state.data = action.payload;
        // state.data = Object.assign({}, action.payload); // Update state.data immutably
        state.allProds = getAllProds(action.payload);
        state.deps = getAllDepsInfo(action.payload);
      })
      .addCase(getDepCatInfoAPI.rejected, (state, action) => {
        // console.log("Rejected action type:", action.type);
        state.status = action.meta.requestStatus;
        state.error = action.error.message;
      });
  },
});

export const slcAllProds = (state) => state.prodCrud.allProds;
export const slcDeps = (state) => state.prodCrud.deps;
export const slcDepCats = (state) => state.prodCrud.depCats;
export const slcError = (state) => state.prodCrud.error;

export const { depSelectedRdcr } = prodCrudSlice.actions;
export default prodCrudSlice.reducer;
