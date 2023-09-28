const ADD_CONTACT = 'add/contact';
const DELETE_CONTACT = 'delete/contact';

const initialState = [
  { id: 'id-1', name: 'Igor Piliaev', number: '+380984834857' },
  { id: 'id-2', name: 'Aleksey Kudriavtcev', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

export const addContact = newContact => ({
  type: ADD_CONTACT,
  payload: newContact,
});

export const deleteContact = contactId => ({
  type: DELETE_CONTACT,
  payload: contactId,
});
