// navSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRoute: "/", // Initial route is the root
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
      console.log(state.currentRoute, "<----------currentRout");
    },
  },
});

export const { setCurrentRoute } = navSlice.actions;

export const slctCurrentRoute = (state) => state.nav.currentRoute;

export default navSlice.reducer;
