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
      <Box {...centerConteinerStyles} flexDirection={'column'} pb={[0, 0, 30]}>
        <Heading as="h2" mt={30} mb={30} fontSize={[34, 34, 34, 40, 44]}>
          Contacts
        </Heading>
        <Box
          display={'flex'}
          alignItems={['center', 'center', 'flex-start']}
          flexDirection={['column', 'column', 'row']}
          gap={[0, 0, 10, 10, 20]}
        >
          <Box
            {...centerConteinerStyles}
            flexDirection={'column'}
            borderBottom={['1px solid white', '1px solid white', 'none']}
            pb={[30, 30, 0]}
          >
            <Text
              display={['none', 'none', 'block']}
              fontSize={[22, 22, 22, 26, 30]}
              fontWeight={600}
              borderBottom={'1px solid white'}
            >
              Add contact / Filter
            </Text>
            <Box pt={30}>
              <ContactForm />
              <Filter />
            </Box>
          </Box>
          <Box
            pt={[30, 30, 0]}
            pb={[30, 30, 0]}
            display={'flex'}
            flexDirection={'column'}
          >
            <Text
              display={['none', 'none', 'block']}
              fontSize={[22, 22, 22, 26, 30]}
              fontWeight={600}
              pl={5}
              borderBottom={'1px solid white'}
            >
              Name / Phone
            </Text>
            {isLoading && (
              <Box {...centerConteinerStyles} pt={'50%'}>
                <Spinner />
              </Box>
            )}
            {contacts.length === 0 && !isLoading && (
              <Text
                textAlign={'center'}
                pt={[0, 0, 30]}
                fontSize={[16, 16, 18, 20, 22]}
              >
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
