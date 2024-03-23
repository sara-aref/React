import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
  name: "contact",
  initialState: {},
  reducers: {
    addUserInfo: (state, action) => {
      state.userForm = action.payload;
    },
  },
});

export const { addUserInfo } = userInfo.actions;

export default userInfo.reducer;
