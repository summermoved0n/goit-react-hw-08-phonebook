import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { email } = useSelector(selectAuthUser);

  return (
    <div className={css.user_conteiner}>
      <p>🐷</p>
      <p>{email}</p>
      <button className={css.user_btn} type="button">
        Logout
      </button>
    </div>
  );
};
