import { combineReducers } from 'redux';

const contactsReducer = (state = [], action) => state;
const filterReducer = (state = '', action) => state;
const modalReducer = (state = false, action) => state;

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  modal: modalReducer,
});
