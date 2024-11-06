import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    const response = await axios.post("/users/signup", credentials);
    return response.data;
  }
);

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await axios.post("/users/login", credentials);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue("No token");
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await axios.get("/users/current");
    return response.data;
  }
);
