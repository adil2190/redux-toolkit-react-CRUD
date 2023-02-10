import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./models/users";

export default configureStore({
  reducer: {
    users: usersSlice,
  },
});
