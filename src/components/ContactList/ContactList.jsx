import { useDispatch, useSelector } from 'react-redux';
import ContactListItems from '../ContactListItems/ContactListItem';
import css from './ContactList.module.css';
import { removeContact } from '../../redux/contactsOperations';
import { selectVisibleContacts } from '../../redux/selectors';
import toast from 'react-hot-toast';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const deleteContact = (id, name) => {
    dispatch(removeContact(id))
      .unwrap()
      .then(() => {
        toast(`You deleted '${name}'!`, {
          icon: '💔',
        });
      })
      .catch(() => {
        toast.success('Oops, something went wrong!');
      });
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItems
          key={id}
          s
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}
