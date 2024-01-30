import { contactsReducer } from './contactsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});
