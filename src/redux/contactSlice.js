import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Igor Piliaev', number: '+380984834857' },
  { id: 'id-2', name: 'Aleksey Kudriavtcev', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
