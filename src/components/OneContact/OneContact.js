import styles from './OneContact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDelete }) => (
  <div className={styles.item}>
    <p className={styles.text}>
      {name}:{number}
    </p>
    <button className={styles.btn} type="button" onClick={onDelete}>
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Contact;
