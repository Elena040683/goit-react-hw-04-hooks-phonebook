import { useState, useEffect } from 'react';
// import defaultContacts from '../defaultContacts.json'

const useLS = defaultContacts => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts
  );

  useEffect(() => {
    localStorage.setItem(contacts, JSON.stringify('contacts'));
  }, [contacts]);
  return [contacts, setContacts];
};

export default useLS;
