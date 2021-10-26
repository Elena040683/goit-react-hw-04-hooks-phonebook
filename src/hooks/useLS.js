import { useState, useEffect } from 'react';

const useLS = value => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? value
  );

  useEffect(() => {
    localStorage.setItem(contacts, JSON.stringify('contacts'));
  }, [contacts]);
  return [contacts, setContacts];
};

export default useLS;
