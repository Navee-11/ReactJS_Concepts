import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Helsinki" },
  { id: "1", name: "Tokyo" },
  { id: "2", name: "Berlin" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
