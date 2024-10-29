import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userType: null,
  token: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    UserType(state, action) {
      state.userType = action.payload;
    },
    AuthToken(state, action) {
      state.AuthToken = action.payload;
    },
  },
});
export const { UserType } = authSlice.actions;

export default authSlice.reducer;
