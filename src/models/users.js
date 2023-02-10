import { createSlice } from "@reduxjs/toolkit";

export const name = "users";

const initialState = {
  list: [],
};

export const usersSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setUsers(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;