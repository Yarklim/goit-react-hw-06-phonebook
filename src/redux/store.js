import { createStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { rootReducer } from './reducer';

const enhancer = devToolsEnhancer();

export const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
  modal: false,
};

export const store = createStore(rootReducer, initialState, enhancer);
