import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/authOperations';

export const UserMenu = () => {
  const { email } = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  return (
    <div className={css.user_conteiner}>
      <p>🐷</p>
      <p>{email}</p>
      <button
        className={css.user_btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
