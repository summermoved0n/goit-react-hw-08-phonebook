import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
} from '@chakra-ui/react';
import { BsBox2Fill } from 'react-icons/bs';

import { Link } from 'react-router-dom';

export const BurgerMenu = ({ isOpen, onClose }) => (
  <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader fontSize={32} color={'black'}>
        Menu
      </DrawerHeader>
      <DrawerBody
        color={'black'}
        fontSize={24}
        display={'flex'}
        flexDirection={'column'}
        gap={8}
      >
        <Text onClick={onClose} h={27} w={58} _hover={{ color: 'blue' }}>
          <Link to="/">Home</Link>
        </Text>
        <Text onClick={onClose} h={27} w={73} _hover={{ color: 'blue' }}>
          <Link to="/login">Login</Link>
        </Text>
        <Text onClick={onClose} h={27} w={116} _hover={{ color: 'blue)' }}>
          <Link to="/register">Register</Link>
        </Text>
      </DrawerBody>
      <DrawerFooter>
        <Button variant="outline" mr={3} onClick={onClose}>
          Close
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
