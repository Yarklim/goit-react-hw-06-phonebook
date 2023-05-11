import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { EmergencyBtn } from './EmergencyBtn';
import { Modal } from './Modal';
import { EmergencyContent } from './EmergencyContent';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts') ?? [])
  );
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const item = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (item) {
      alert(`${name} is alredy in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, { name, id, number }]);
    }
    e.target.reset();
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleChengeInput = str => {
    setFilter(str);
  };

  const handleFiltered = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeInput={handleChengeInput} />
      <ContactList
        onSubmit={handleSubmit}
        contacts={handleFiltered()}
        onDelete={handleDelete}
      />
      <EmergencyBtn onClick={toggleModal} title="EMERGENCY NUMBERS!!!" />
      {showModal && (
        <Modal onClose={toggleModal}>
          {<EmergencyContent onClose={toggleModal} />}
        </Modal>
      )}
    </Container>
  );
};
