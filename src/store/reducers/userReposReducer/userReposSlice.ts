import { createSlice } from "@reduxjs/toolkit";
import { getUserRepos } from "./userReposActions";

export type RepoType = {
  id: number;
  name: string;
  forks_count: number;
  stargazers_count: number;
  html_url: string;
};

interface Repos {
  repos: RepoType[];
  isLoading: boolean;
  error: any;
}

const initialState: Repos = {
  repos: [],
  isLoading: false,
  error: null,
};

export const userReposSlice = createSlice({
  name: "userRepos",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserRepos.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getUserRepos.fulfilled]: (state, action) => {
      const res = action.payload;

      state.isLoading = false;
      state.error = null;

      if (res) {
        state.repos = res;
      }
    },
    [getUserRepos.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default userReposSlice.reducer;
