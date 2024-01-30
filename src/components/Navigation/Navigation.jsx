import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={css.conteiner}>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
