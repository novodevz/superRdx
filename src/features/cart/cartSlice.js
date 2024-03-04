// authSlice.js

// eslint-disable-next-line
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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Define your synchronous reducers here
    addToCartRdcr: (state, action) => {
      const { prods } = state;
      const { payload: newProd } = action;

      const existingProdIndex = prods.findIndex(
        (prod) => prod.id === newProd.id
      );

      if (existingProdIndex !== -1) {
        // If product already exists in cart, increment its amount
        const updatedProds = prods.map((prod) => {
          if (prod.id === newProd.id) {
            return { ...prod, amount: (prod.amount || 0) + 1 }; // Create a new object with the updated amount
          }
          return prod;
        });
        state.prods = updatedProds;
      } else {
        // If product doesn't exist in cart, add it with amount = 1
        state.prods = [...prods, { ...newProd, amount: 1 }]; // Create a new object with the amount property
      }

      state.prodCnt = state.prods.length;
    },
    rmvFromCartRdcr: (state, action) => {
      const { prods } = state;
      const { payload: prodToRemove } = action;

      const updatedProds = prods.map((prod) => {
        if (prod.id === prodToRemove.id) {
          // If the product ID matches the one to remove
          if (prod.amount && prod.amount > 1) {
            // If product's amount is more than 1, decrement its amount
            return { ...prod, amount: prod.amount - 1 }; // Create a new object with decremented amount
          } else {
            // If product's amount is 1 or not defined, remove it from cart
            return null; // Remove the product from the cart
          }
        }
        return prod;
      });

      // Remove any null entries (products with amount <= 0) from the updatedProds array
      state.prods = updatedProds.filter((prod) => prod !== null);
      state.prodCnt = state.prods.length;
    },
    resetCartRdct: (state, _) => {
      state.prodCnt = 0;
      state.prods = [];
    },

    // Add more synchronous reducers as needed
  },
});

export const { addToCartRdcr, rmvFromCartRdcr, resetCartRdct } =
  cartSlice.actions;

// Define selector functions here if needed
export const slctCartProds = (state) => state.cart.prods;
export const slctCartProdCnt = (state) => state.cart.prodCnt;

export default cartSlice.reducer;
