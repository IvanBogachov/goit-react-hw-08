import React from 'react';
import ContactList from '/src/components/ContactList/ContactList';
import ContactForm from '/src/components/ContactForm/ContactForm';
import SearchBox from '/src/components/SearchBox/SearchBox';

const ContactsPage = () => (
  <div>
    <h2>Contacts</h2>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default ContactsPage;
