import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuthLoggedIn } from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { StyledLink } from '../../services/styledComponents';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);
  return (
    <div className={css.conteiner}>
      <nav className={css.navigation}>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
