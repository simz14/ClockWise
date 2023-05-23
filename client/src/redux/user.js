import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
  },
  reducers: {
    setTo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTo } = userSlice.actions;

export default userSlice.reducer;
