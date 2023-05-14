export const addContact = contact => {
  return {
    type: 'add/contact',
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: 'delete/contact',
    payload: id,
  };
};

export const filterContact = str => {
  return {
    type: 'filter/contact',
    payload: str,
  };
};

export const togleModal = showModal => {
  return {
    type: 'togle/modal',
    payload: showModal,
  };
};
