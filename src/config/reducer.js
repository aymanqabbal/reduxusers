import { createReducer } from "@reduxjs/toolkit";
import { addUser, deleteUser, modifyUser } from "./actions";
const initialState = {
  users: [
    { name: "ayman", email: "ayman.me@gmail.com" },
    { name: "brad", email: "brad.me@gmail.com" },
  ],
};
export const userReducer = createReducer(initialState, (builder) =>
  builder.addCase(
    (addUser,
    (state, action) => {
      state.users.push(action.payload);
      console.log(state.users);
    })
  )
);
