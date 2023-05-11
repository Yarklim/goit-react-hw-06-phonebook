import PropTypes from 'prop-types';
import { Title, Input } from './Filter.styled';

export const Filter = ({ filter, onChangeInput }) => {
  const handleChange = event => {
    onChangeInput(event.target.value);
  };
  return (
    <>
      <Title>Find contacts by name</Title>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter name"
        onChange={handleChange}
        filter={filter}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
