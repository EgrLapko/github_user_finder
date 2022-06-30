import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersActions";

interface UsersState {
  users: any[];
  isLoading: boolean;
  error: any;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      const res = action.payload?.items;

      state.isLoading = false;
      state.error = null;

      if (res && Array.isArray(res)) {
        state.users = res || [];
      }
    },
    [getUsers.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
