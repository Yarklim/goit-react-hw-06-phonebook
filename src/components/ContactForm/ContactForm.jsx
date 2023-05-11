import PropTypes from 'prop-types';
import { Input } from 'components/Input';
import { Form } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input onSubmit={onSubmit} />
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
