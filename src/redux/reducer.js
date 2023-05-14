import { combineReducers } from 'redux';

export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'add/contact':
      return [...state, action.payload];
    case 'delete/contact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};
const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/contact':
      return (state = action.payload);
    default:
      return state;
  }
};

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'togle/modal':
      return (state = !action.payload);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  modal: modalReducer,
});
