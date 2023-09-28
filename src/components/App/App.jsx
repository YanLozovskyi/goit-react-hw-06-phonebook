import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { LOCAL_STORAGE } from 'helpers/localStorage';

import {
  Notifications,
  Filter,
  Section,
  ContactList,
  ContactForm,
} from 'components';

export const App = () => {
  const LOCAL_STORAGE_KEY = 'contacts';

  const initialContacts = () => {
    const storedContacts = LOCAL_STORAGE.load(LOCAL_STORAGE_KEY);
    return storedContacts ?? [];
  };

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    LOCAL_STORAGE.save(LOCAL_STORAGE_KEY, contacts);
  }, [contacts]);

  const addContact = newContact => {
    const isNameDuplicate = contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );

    if (isNameDuplicate) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };

  const onButtonDeleteClick = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const normilizedFilter = filter.toLocaleLowerCase();

  const displayedContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normilizedFilter)
  );
  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm onAdd={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={onFilterChange} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={displayedContacts}
            onDelete={onButtonDeleteClick}
          />
        ) : (
          <Notifications message={'There are no contacts in your phonebook.'} />
        )}
      </Section>
    </>
  );
};
