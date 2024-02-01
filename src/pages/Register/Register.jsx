import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './Register.module.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
      name,
      email,
      password,
    };
    dispatch(register(submitData));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.register_conteiner}>
      <h2 className={css.register_title}>Register a new account</h2>
      <form className={css.register_form} onSubmit={handleSubmit}>
        <p className={css.register_text}>Name</p>
        <input
          className={css.register_input}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleInputChange}
          required
          autoComplete="off"
        />
        <p className={css.register_text}>Email</p>
        <input
          className={css.register_input}
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          required
          autoComplete="off"
        />
        <p className={css.register_text}>Password</p>
        <input
          className={css.register_input}
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          required
          autoComplete="off"
        />
        <button className={css.register_btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
