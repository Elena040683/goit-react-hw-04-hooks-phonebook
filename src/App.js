import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import defaultContacts from './defaultContacts.json';
import useLS from './hooks/useLS';

export default function App() {
  const [contacts, setContacts] = useLS(defaultContacts);
  const [filter, setFilter] = useState('');

  const addNewContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    contacts.some(e => e.name === name)
      ? alert(`${name} already exists`)
      : setContacts([...contacts, contact]);
  };

  //     : setContacts(prev => [...prev, contact]);

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  const filterByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = filterByName();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Container>
  );
}
