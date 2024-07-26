import React from 'react';
import css from './Home.module.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className={css.home_conteiner}>
      <h1 className={css.home_title}>Welcome to Phonebook </h1>
      <p className={css.home_text}>
        If you are visiting for the first time, please{' '}
        <NavLink to="/register">register</NavLink>... Or{' '}
        <NavLink to="/login">login</NavLink> to an existing account.
      </p>
    </div>
  );
}
