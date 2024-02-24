import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import crudSlice from "../features/crud/crudSlice";
import superSliceRdcr from "../features/super/superSlice";
import navSliceRdcr from "../features/nav/navSlice";
import cartSliceRdcr from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    crud: crudSlice,
    super: superSliceRdcr,
    nav: navSliceRdcr,
    cart: cartSliceRdcr,
  },
});
