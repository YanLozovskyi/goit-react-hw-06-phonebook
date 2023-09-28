import { ContactItem, DeleteButton } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const normilizedFilter = filter.toLowerCase();

  const displayedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normilizedFilter)
  );
  return (
    <ul>
      {displayedContacts.map(({ name, id, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ul>
  );
};
