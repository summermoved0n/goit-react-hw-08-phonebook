import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthLoggedIn } from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { StyledLink } from '../../services/styledComponents';

import { FaAddressBook } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import {
  Box,
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
import Footer from 'components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <Box {...mainConteinerStyles}>
        <Box {...navigationStyles}>
          <Box {...centerConteinerStyles} gap={2}>
            <Text fontWeight={700} fontSize={22}>
              Phonebook
            </Text>
            <FaAddressBook size={22} color="#f7f7f7" />
          </Box>

          <Box>
            <BurgerButton onClick={onOpen} display={['flex', 'none']}>
              <BsList size={26} color="#f7f7f7" />
            </BurgerButton>
            <BurgerMenu isOpen={isOpen} onClose={onClose} />
          </Box>

          <Breadcrumb display={['none', 'flex']} separator=" ">
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
              <BreadcrumbItem {...centerConteinerStyles} gap={3}>
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/register">Register</StyledLink>
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        <main>
          <Outlet />
        </main>
      </Box>
      <Footer />
    </>
  );
};
