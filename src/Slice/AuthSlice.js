import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "authslice",
  initialState: {
    login: false,
    accessToken: "",
  },
  reducers: {
    login: (state) => {
      state.login = true;
    },
    logout: (state) => {
      state.login = false;
      state.accessToken = "";
    },
    setAccesstoken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { login, logout, setAccesstoken } = AuthSlice.actions;

export default AuthSlice.reducer;
