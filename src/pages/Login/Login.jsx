import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

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
    <div>
      <h2>Login to your account!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
