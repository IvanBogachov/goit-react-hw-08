import React from 'react';
import ContactList from '/src/components/ContactList/ContactList';
import ContactForm from '/src/components/ContactForm/ContactForm';
import SearchBox from '/src/components/SearchBox/SearchBox';

const ContactsPage = () => (
  <main>
    <h2>Contacts</h2>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </main>
);

export default ContactsPage;
