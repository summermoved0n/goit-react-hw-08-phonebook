import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async registerData => {
    try {
      console.log(registerData);
      const { data } = await axios.post('/users/signup', registerData);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
