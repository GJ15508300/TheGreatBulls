import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  language: null,
  selectedLan: null,
  userType: null,
  token: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    languageSelection(state, action) {
      state.language = action.payload;
    },
    selectedlanguage(state, action) {
      state.selectedLan = action.payload;
    },
    UserType(state, action) {
      state.userType = action.payload;
    },
    AuthToken(state, action) {
      state.AuthToken = action.payload;
    },
  },
});
export const { languageSelection, selectedlanguage, UserType, } = authSlice.actions;

export default authSlice.reducer;
