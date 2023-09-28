const ADD_CONTACT = 'add/contact';
const DELETE_CONTACT = 'delete/contact';

export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.paylod);
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
