import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userActions";

export type UserType = {
  login: string;
  avatar_url: string;
  email: string;
  location: string;
  created_at: string;
  followers: number;
  following: number;
  bio: string;
};

interface UserState {
  user?: UserType;
  isLoading: boolean;
  error: any;
}

const initialState: UserState = {
  user: undefined,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getUser.fulfilled]: (state, action) => {
      const res = action.payload;

      state.isLoading = false;
      state.error = null;

      if (res) {
        state.user = res;
      }
    },
    [getUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
