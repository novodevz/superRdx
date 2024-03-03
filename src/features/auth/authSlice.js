import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authFn, refresh } from "./loginAPI";
import { handelToken, tokenTTL } from "./scripts";

const initialState = {
  username: "",
  register: false,
  login: false,
  loginTimeStamp: "",
  ttl: 0,
  remember: false,
  reqStat: "",
  isadmin: false,
};

export const loginAsc = createAsyncThunk("auth/authFn", async (d) => {
  const response = await authFn(d);
  return response.data;
});

export const refreshAsc = createAsyncThunk("auth/refresh", (a) => {
  const response = refresh(a);
  return response;
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
      state.username = "";
      state.loginTimeStamp = "";
      state.ttl = 0;
      state.remember = false;
      state.isadmin = false;
    },
    isadminRdcr: (state) => {
      state.isadmin = true;
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
        if (action.meta.arg.url === "login") {
          state.login = true;
          state.username = action.meta.arg.username;
          state.loginTimeStamp = Date.now();
          state.isadmin = handelToken(action.payload, state.remember.remember);
          state.ttl = tokenTTL();
        }
      })
      .addCase(loginAsc.rejected, (state, action) => {
        state.reqStat = action.meta.requestStatus;
        console.log(state.reqStat);
        // console.log("register: ", state.register, "login: ", state.login);
      })
      .addCase(refreshAsc.fulfilled, (state, action) => {
        console.log("in extra rdcr");
        state.loginTimeStamp = Date.now();
        handelToken(action.payload, state.remember.remember);
        state.ttl = tokenTTL();
      });
  },
});

export const { rememberRdcr, logoutRdcr, isadminRdcr } = authSlc.actions;
export const slctUsername = (state) => state.auth.username;
export const slcIsAdmin = (state) => state.auth.isadmin;
export const slctRegister = (state) => state.auth.register;
export const slctLogin = (state) => state.auth.login;
export const slctLoginTimeStamp = (state) => state.auth.loginTimeStamp;
export const slctTTL = (state) => state.auth.ttl;
export const slcRemember = (state) => state.auth.remember;
export default authSlc.reducer;

// export const cntActions = cntSlc.actions;
// export const { inc, dec } = cntActions;
