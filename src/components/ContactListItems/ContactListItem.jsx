import { Box, Button, ListItem, Text } from '@chakra-ui/react';
import { buttonsStyles } from 'services/stylesChakra';

export default function ContactListItem({ id, name, number, deleteContact }) {
  return (
    <ListItem
      bgColor={['text', 'text', 'transparent']}
      borderRadius={5}
      display={'flex'}
      gap={[2, 2, 2, 10]}
      flexWrap={'wrap'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={['4px 8px', '4px 8px', '0']}
    >
      <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'} gap={2}>
        <Text
          color={['black', 'black', 'text']}
          fontWeight={600}
          fontSize={['16px', '16px', '20px']}
        >
          {name}:
        </Text>
        <Text color={['input', 'input', 'text']}>{number}</Text>
      </Box>
      <Button
        type="button"
        h={30}
        bgColor={['transparent', 'transparent', 'text']}
        border={['1px solid black', '1px solid black', 'none']}
        {...buttonsStyles}
        onClick={() => deleteContact(id, name)}
      >
        Delete
      </Button>
    </ListItem>
  );
}
