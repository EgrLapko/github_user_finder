import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserRepos: any = createAsyncThunk(
    "userRepos/getUserRepos",
    async (userName: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://api.github.com/users/${userName}/repos`);
            const data = await response.json();
            return data;
        } catch (error: any) {
            // FIX TYPE
            return rejectWithValue(error.message);
        }
    }
);
