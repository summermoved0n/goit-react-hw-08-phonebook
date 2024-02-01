import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { currentUser } from '../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { selectAuthLoading } from '../redux/auth/authSelectors';
import { Spinner } from './Spinner/Spinner';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoading);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return isLoading ? (
    <div className={css.app_spinner}>
      <Spinner />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<Register />}
              restricted
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<Login />}
              restricted
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
