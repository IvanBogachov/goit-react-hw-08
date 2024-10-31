import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '/src/redux/contactsOps.js';
import { selectFilteredContacts } from "/src/redux/selectors.js";
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
