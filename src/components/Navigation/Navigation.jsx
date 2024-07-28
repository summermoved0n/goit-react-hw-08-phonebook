import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthLoggedIn } from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { StyledLink } from '../../services/styledComponents';

import { FaAddressBook } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import {
  Box,
  Container,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  useDisclosure,
} from '@chakra-ui/react';

import {
  BurgerButton,
  mainConteinerStyles,
  navigationStyles,
  centerConteinerStyles,
} from 'services/stylesChakra';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box {...mainConteinerStyles}>
      <Box {...navigationStyles}>
        <Box {...centerConteinerStyles} gap={2}>
          <Text fontWeight={700} fontSize={22}>
            Phonebook
          </Text>
          <FaAddressBook size={22} color="#f7f7f7" />
        </Box>

        <div>
          <BurgerButton onClick={onOpen} display={['flex', 'none']}>
            <BsList size={26} color="#f7f7f7" />
          </BurgerButton>
          <BurgerMenu isOpen={isOpen} onClose={onClose} />
        </div>

        <Breadcrumb display={['none', 'flex']}>
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
