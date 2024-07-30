import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import { Box, Button, Text } from '@chakra-ui/react';
import { centerConteinerStyles } from 'services/stylesChakra';

export const UserMenu = () => {
  const { email } = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  return (
    <Box
      {...centerConteinerStyles}
      flexDirection={['column', 'column', 'row']}
      gap={2}
    >
      <Text
        borderRadius={5}
        p={['2px', '0px']}
        bgColor={['text', 'transparent']}
      >
        {email}
      </Text>
      <Button
        h={30}
        _hover={{
          bgColor: 'blue',
          color: 'text',
        }}
        _focus={{
          bgColor: 'cornflowerblue',
        }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
