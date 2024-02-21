import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authFn } from "./loginAPI";
import { handelToken } from "./scripts";

const initialState = {
  username: "",
  register: false,
  login: false,
  remember: false,
  reqStat: "reqStat",
};

export const loginAsc = createAsyncThunk("auth/authFn", async (d) => {
  const response = await authFn(d);
  return response.data;
});

export const authSlc = createSlice({
  name: "auth",
  initialState,
  reducers: {
    rememberRdcr: (state, action) => {
      state.remember = action.payload; // Update the state with the checkbox value
    },
    logoutRdcr: (state) => {
      sessionStorage.clear();
      state.login = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsc.pending, (state, action) => {
        state.reqStat = action.meta.requestStatus;
        console.log(state.reqStat);
        // console.log("register: ", state.register, "login: ", state.login);
      })
      .addCase(loginAsc.fulfilled, (state, action) => {
        // console.log(action.meta.arg);
        state.reqStat = action.meta.requestStatus;
        console.log(state.reqStat);
        if (action.meta.arg.url === "register") state.register = true;
        if (action.meta.arg.url === "login") state.login = true;
        state.username = action.meta.arg.username;
        // console.log("register: ", state.register, "login: ", state.login);
        handelToken(action.payload, state.remember.remember);
      })
      .addCase(loginAsc.rejected, (state, action) => {
        state.reqStat = action.meta.requestStatus;
        console.log(state.reqStat);
        // console.log("register: ", state.register, "login: ", state.login);
      });
  },
});

export const { rememberRdcr, logoutRdcr } = authSlc.actions;
export const slctUsername = (state) => state.auth.username;
export const slctRegister = (state) => state.auth.register;
export const slctLogin = (state) => state.auth.login;
export default authSlc.reducer;

// export const cntActions = cntSlc.actions;
// export const { inc, dec } = cntActions;
