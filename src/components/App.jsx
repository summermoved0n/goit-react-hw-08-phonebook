import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { currentUser } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
