import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const submitData = {
      email,
      password,
    };
    dispatch(logIn(submitData));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.login_conteiner}>
      <h2 className={css.login_title}>Login to your account</h2>
      <form className={css.login_form} onSubmit={handleSubmit}>
        <p className={css.login_text}>Email</p>
        <input
          className={css.login_input}
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <p className={css.login_text}>Password</p>
        <input
          className={css.login_input}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <button className={css.login_btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
