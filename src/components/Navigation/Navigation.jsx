import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthLoggedIn } from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { StyledLink } from '../../services/styledComponents';

import { FaAddressBook } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import {
  Box,
  Button,
  Container,
  Text,
  Breadcrumb,
  BreadcrumbItem,
} from '@chakra-ui/react';
import { mainConteinerStyles, navigationStyles } from 'services/stylesChakra';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);

  return (
    <Box {...mainConteinerStyles}>
      <Box {...navigationStyles}>
        <Box display={'flex'} alignItems={'center'} p={0} gap={2}>
          <Text fontWeight={700} fontSize={22}>
            Phonebook
          </Text>
          <FaAddressBook size={22} color="#f7f7f7" />
        </Box>

        <Button
          h={30}
          p={0}
          m={0}
          border={'1px solid gray'}
          bgColor={'transparent'}
        >
          <BsList size={26} color="#f7f7f7" />
        </Button>

        <Breadcrumb display={'none'}>
          <BreadcrumbItem>
            <StyledLink to="/">Home</StyledLink>
          </BreadcrumbItem>
          {isLoggedIn && (
            <BreadcrumbItem>
              <StyledLink to="/contacts">Contacts</StyledLink>
            </BreadcrumbItem>
          )}
          {isLoggedIn ? (
            <BreadcrumbItem>
              <UserMenu />
            </BreadcrumbItem>
          ) : (
            <Container>
              <BreadcrumbItem>
                <StyledLink to="/login">Login</StyledLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <StyledLink to="/register">Register</StyledLink>
              </BreadcrumbItem>
            </Container>
          )}
        </Breadcrumb>
      </Box>
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
