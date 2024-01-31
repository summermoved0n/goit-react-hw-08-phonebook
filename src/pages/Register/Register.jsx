import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

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
    <div>
      <h2>Register a new account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleInputChange}
          required
          autoComplete="off"
        />
        <br />
        <input
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          required
          autoComplete="off"
        />
        <br />
        <input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          required
          autoComplete="off"
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
