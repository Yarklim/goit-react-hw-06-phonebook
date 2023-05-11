import PropTypes from 'prop-types';
import { List, Item, BtnDelete } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <BtnDelete type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </BtnDelete>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
