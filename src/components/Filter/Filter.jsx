import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { CustomInput } from 'services/stylesChakra';
import { FormControl, FormLabel } from '@chakra-ui/react';

export default function Filter() {
  const dispatch = useDispatch();
  const inputFilterId = nanoid();

  const handleFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <FormControl mt={5}>
      <FormLabel m={'0'} htmlFor={inputFilterId}>
        <CustomInput
          type="text"
          name="filter"
          id={inputFilterId}
          placeholder="Search name"
          onChange={handleFilter}
        />
      </FormLabel>
    </FormControl>
  );
}
