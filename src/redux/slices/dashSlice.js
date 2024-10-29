import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  boat_register_step1_data: null,
};

const dashSlice = createSlice({
  initialState,
  name: "dashboard",
  reducers: {
    boat_register_step1(state, action) {
      state.boat_register_step1_data = action.payload;
    },
  },
});
export const { boat_register_step1 } = dashSlice.actions;

export default dashSlice.reducer;
