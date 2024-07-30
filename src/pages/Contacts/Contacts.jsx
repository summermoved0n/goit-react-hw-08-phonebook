import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from '../../redux/contactsOperations';
import {
  selectContactItems,
  selectContactLoading,
} from '../../redux/selectors';
import { Spinner } from '../../components/Spinner/Spinner';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { Box, Heading, Text } from '@chakra-ui/react';
import { centerConteinerStyles } from 'services/stylesChakra';

export default function Contacts() {
  const contacts = useSelector(selectContactItems);
  const isLoading = useSelector(selectContactLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box {...centerConteinerStyles} flexDirection={'column'}>
        <Heading as="h2" mt={30} mb={30}>
          Contacts
        </Heading>
        <Box>
          <Box {...centerConteinerStyles} flexDirection={'column'}>
            <ContactForm />
            <Filter />
          </Box>
          <Box>
            {isLoading && <Spinner />}
            {contacts.length === 0 && !isLoading && (
              <Text mb={30} mt={30} textAlign={'center'}>
                Your contacts list is empty.
              </Text>
            )}
            {contacts.length > 0 && !isLoading && <ContactList />}
          </Box>
        </Box>
      </Box>
    </>
  );
}
