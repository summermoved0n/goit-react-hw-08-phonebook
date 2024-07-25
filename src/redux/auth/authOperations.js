import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = 'https://connections-api.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async registerData => {
    try {
      console.log(registerData);
      const { data } = await axios.post('/users/signup', registerData);
      console.log(data);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async registerData => {
  try {
    console.log(registerData);
    const { data } = await axios.post('/users/login', registerData);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    console.log(data);
    token.unset();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const storageToken = state.auth.token;

    if (storageToken === null) {
      return rejectWithValue();
    }

    token.set(storageToken);
    try {
      const { data } = await axios.get('/users/current');
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
