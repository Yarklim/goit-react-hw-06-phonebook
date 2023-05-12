import PropTypes from 'prop-types';
import { Form, InputStyled, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
       <h3>Name</h3>
      <InputStyled
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter name"
        required
      />
      <h3>Number</h3>
      <InputStyled
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter number"
        required
      />
      <Button type="submit" onSubmit={onSubmit}>
        Add contact
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
