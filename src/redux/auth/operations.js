import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("users/signup", userInfo);
      setAuthHeader(response.data.token);
      console.log(response);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("users/login", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const logOut = createAsyncThunk("outh/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("users/logout");
    clearAuthHeader();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;
    console.log(reduxState);

    setAuthHeader(savedToken);
    const response = await axios.get("users/current");
    return response.data;
  },
  {
    condition: (_, api) => {
      const reduxState = api.getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);