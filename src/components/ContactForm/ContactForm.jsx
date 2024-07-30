import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactItems } from '../../redux/selectors';
import { postContact } from '../../redux/contactsOperations';
import toast from 'react-hot-toast';
import { Button, FormControl, FormLabel } from '@chakra-ui/react';
import {
  buttonsStyles,
  centerConteinerStyles,
  CustomInput,
} from 'services/stylesChakra';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactItems);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const addContact = data => {
    const { name, number } = data;
    const getName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (getName) {
      toast.error(`'${name}' is already in contacts!`);
      return;
    }
    const contact = {
      name,
      number,
    };
    console.log(contact);
    dispatch(postContact(contact))
      .unwrap()
      .then(() => {
        toast(`Contact '${name}' was successfully added!`, {
          icon: '👏',
        });
      })
      .catch(() => {
        toast.success('Oops, something went wrong!');
      });
  };

  const resetSubmit = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    resetSubmit();
  };

  const inputNameId = 'nameInput';
  const inputNumberId = 'numberInput';

  return (
    <form onSubmit={handleSubmit}>
      <FormControl {...centerConteinerStyles} flexDirection={'column'} gap={5}>
        <FormLabel m={0} htmlFor={inputNameId}>
          <CustomInput
            type="text"
            name="name"
            value={name}
            id={inputNameId}
            placeholder="Name"
            required
            onChange={handleChange}
            autoComplete="off"
          />
        </FormLabel>
        <FormLabel m={0} htmlFor={inputNumberId}>
          <CustomInput
            type="tel"
            name="number"
            value={number}
            id={inputNumberId}
            placeholder="Number"
            required
            onChange={handleChange}
            autoComplete="off"
          />
        </FormLabel>
        <Button
          m={'0 auto'}
          bgColor={'text'}
          color={'input'}
          {...buttonsStyles}
          type="submit"
        >
          Add contact
        </Button>
      </FormControl>
    </form>
  );
}
