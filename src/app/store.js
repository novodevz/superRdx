import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import crudSlice from "../features/crud/crudSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    crud: crudSlice,
  },
});
