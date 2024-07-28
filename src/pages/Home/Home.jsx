import { Box, Heading, Text } from '@chakra-ui/react';
import { HomeLink } from 'services/styledComponents';
import { CustomImage } from 'services/stylesChakra';

export default function Home() {
  return (
    <Box pt={30} pb={30}>
      <Heading
        as="h1"
        textAlign={'center'}
        textShadow={'2px 2px 4px rgba(143, 0, 172, 0.8)'}
        mb={30}
      >
        Welcome to Phonebook{' '}
      </Heading>

      <CustomImage>
        <Box
          borderRadius={10}
          bgColor={'rgba(0, 0, 0, 0.15)'}
          w={'100%'}
          h={'100%'}
        ></Box>
      </CustomImage>

      <Text>
        If you are visiting for the first time, please{' '}
        <HomeLink to="/register">register</HomeLink>... Or{' '}
        <HomeLink to="/login">login</HomeLink> to an existing account.
      </Text>
    </Box>
  );
}
