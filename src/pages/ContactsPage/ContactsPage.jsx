import React from 'react';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => (
  <main>
    <h2>Your Contacts</h2>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </main>
);

export default ContactsPage;
