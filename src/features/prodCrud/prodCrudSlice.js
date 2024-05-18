// prodCrudSlice.jd

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDepCatInfo, delProd, prodUpd } from "./prodCrudAPI";
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
  isLoading: false,
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

export const delProdAPI = createAsyncThunk("prodCrud/delProd", async (id) => {
  try {
    const res = delProd(id); // Assuming delProd returns a promise
    return res;
  } catch (error) {
    throw error;
  }
});

export const prodUpdAPI = createAsyncThunk("prodCrud/prodUpd", (a) => {
  try {
    const res = prodUpd(a);
    return res;
  } catch (e) {
    throw e;
  }
});

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
        state.isLoading = true;
        // console.log("Pending action type:", action.type);
        state.status = action.meta.requestStatus;
      })
      .addCase(getDepCatInfoAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log("Fulfilled action type:", action.type);
        state.status = action.meta.requestStatus;
        state.data = action.payload;
        // state.data = Object.assign({}, action.payload); // Update state.data immutably
        state.allProds = getAllProds(action.payload);
        state.deps = getAllDepsInfo(action.payload);
      })
      .addCase(getDepCatInfoAPI.rejected, (state, action) => {
        state.isLoading = false;
        // console.log("Rejected action type:", action.type);
        state.status = action.meta.requestStatus;
        state.error = "somthing went wrong :(";
      });
  },
});

export const slcAllProds = (state) => state.prodCrud.allProds;
export const slcDeps = (state) => state.prodCrud.deps;
export const slcDepCats = (state) => state.prodCrud.depCats;
export const slcIsLoading = (state) => state.prodCrud.isLoading;
export const slcError = (state) => state.prodCrud.error;

export const { depSelectedRdcr } = prodCrudSlice.actions;
export default prodCrudSlice.reducer;
