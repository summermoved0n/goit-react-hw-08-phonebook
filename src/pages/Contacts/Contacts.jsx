import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { fetchContacts } from '../../redux/contactsOperations';
import {
  selectContactItems,
  selectContactLoading,
} from '../../redux/selectors';
import { Spinner } from '../../components/Spinner/Spinner';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import css from './Contacts.module.css';

export default function Contacts() {
  const contacts = useSelector(selectContactItems);
  const isLoading = useSelector(selectContactLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success('Your contacts were successfully fetched!');
      })
      .catch(() => {
        toast.success('Oops, something went wrong!');
      });
  }, [dispatch]);

  return (
    <>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className={css.app_conteiner}>
        <ContactForm />
        <h2 className={css.app_subtitle}>Contacts</h2>
        <Filter />
        {isLoading && <Spinner />}
        {contacts.length === 0 && !isLoading && (
          <p className={css.app_text}>Your contacts list is empty.</p>
        )}
        {contacts.length > 0 && !isLoading && <ContactList />}
      </div>
    </>
  );
}
