import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser: any = createAsyncThunk(
  "user/getUser",
  async (userName: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      return data;
    } catch (error: any) {
      // FIX TYPE
      return rejectWithValue(error.message);
    }
  }
);
