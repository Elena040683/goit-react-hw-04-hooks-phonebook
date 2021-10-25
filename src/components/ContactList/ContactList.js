import styles from './ContactList.module.css';
import Contact from '../OneContact/OneContact';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            onDelete={() => deleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
