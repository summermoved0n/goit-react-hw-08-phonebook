import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

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
      const { data } = await axios.post('/users/signup', registerData);
      toast.success(`Welcome to new account "${data.user.name}".🖐`);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Something went wrong. Try entering the data again.');
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async registerData => {
  try {
    console.log(registerData);
    const { data } = await axios.post('/users/login', registerData);
    console.log(data);
    token.set(data.token);
    toast.success(`Welcome to your account "${data.user.name}".🖐`);
    return data;
  } catch (error) {
    toast.error('Something went wrong. Try entering the data again.');
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
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
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
