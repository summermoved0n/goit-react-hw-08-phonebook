import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Heading,
} from '@chakra-ui/react';
import { centerConteinerStyles, CustomInput } from 'services/stylesChakra';

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
    <Box pt={30}>
      <Heading as="h2" mb={10}>
        Login to your account
      </Heading>
      <FormControl
        {...centerConteinerStyles}
        flexDirection={'column'}
        gap={3}
        onSubmit={handleSubmit}
      >
        <FormHelperText color={'text'} fontSize={24}>
          Email
        </FormHelperText>
        <CustomInput
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <FormHelperText color={'text'} fontSize={24}>
          Password
        </FormHelperText>
        <CustomInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <Button
          mt={10}
          mb={10}
          color={'input'}
          transition={'color 250ms ease'}
          _hover={{
            color: 'blue',
          }}
          type="submit"
        >
          Login
        </Button>
      </FormControl>
    </Box>
  );
}
