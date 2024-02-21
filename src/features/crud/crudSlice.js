import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { crudAPI } from "./crudAPI";

const initialState = {
  prods: [],
  status: "",
  error: null,
};

export const fetchProds = createAsyncThunk("crud/fetchProds", async () => {
  try {
    const prods = await crudAPI.get();
    return prods;
  } catch (error) {
    throw error;
  }
});

export const createProd = createAsyncThunk(
  "crud/createProd",
  async (productData) => {
    try {
      const newProd = await crudAPI.post(productData);
      return newProd;
    } catch (error) {
      throw error;
    }
  }
);

export const updateProd = createAsyncThunk("crud/updateProd", async (a) => {
  try {
    const updatedProd = await crudAPI.put(a);
    return updatedProd;
  } catch (error) {
    throw error;
  }
});

export const deleteProd = createAsyncThunk(
  "crud/deleteProd",
  async (productId) => {
    try {
      await crudAPI.delete(productId);
      return productId;
    } catch (error) {
      throw error;
    }
  }
);

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProds.pending, (state, action) => {
        state.status = action.meta.requestStatus;
      })
      .addCase(fetchProds.fulfilled, (state, action) => {
        state.status = action.meta.requestStatus;
        state.prods = action.payload;
      })
      .addCase(fetchProds.rejected, (state, action) => {
        state.status = action.meta.requestStatus;
        state.error = action.error.message;
      })
      .addCase(createProd.fulfilled, (state, action) => {
        state.status = action.meta.requestStatus;
        state.prods.push(action.payload);
      })
      .addCase(updateProd.fulfilled, (state, action) => {
        state.status = action.meta.requestStatus;
        const { id } = action.payload;
        const existingProdIndex = state.prods.findIndex(
          (prod) => prod.id === id
        );
        if (existingProdIndex !== -1) {
          state.prods[existingProdIndex] = action.payload;
        }
      })
      .addCase(deleteProd.fulfilled, (state, action) => {
        state.status = action.meta.requestStatus;
        state.prods = state.prods.filter((prod) => prod.id !== action.payload);
      });
  },
});

export const slctProds = (state) => state.crud.prods;
export const slctStatus = (state) => state.crud.status;
export const slctError = (state) => state.crud.error;

export default crudSlice.reducer;
