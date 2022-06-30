import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers: any = createAsyncThunk(
  "users/getUsers",
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${name}`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      // FIX TYPE
      return rejectWithValue(error.message);
    }
  }
);
