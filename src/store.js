import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./config/reducer";
export const store = configureStore({
  reducer: userReducer,
});
