// import React from 'react';
// import { LOCAL_STORAGE } from 'helpers/localStorage';

import {
  Notifications,
  Filter,
  Section,
  ContactList,
  ContactForm,
} from 'components';
import { useSelector } from 'react-redux';

export const App = () => {
  // const LOCAL_STORAGE_KEY = 'contacts';

  const contacts = useSelector(state => state.contacts);
  // const initialContacts = () => {
  //   const storedContacts = LOCAL_STORAGE.load(LOCAL_STORAGE_KEY);
  //   return storedContacts ?? [];
  // };

  // const [contacts, setContacts] = useState(initialContacts);

  // useEffect(() => {
  //   LOCAL_STORAGE.save(LOCAL_STORAGE_KEY, contacts);
  // }, [contacts]);

  // setContacts(prevContacts => [
  //   ...prevContacts,
  //   { id: nanoid(), ...newContact },
  // ]);
  // };

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notifications message={'There are no contacts in your phonebook.'} />
        )}
      </Section>
    </>
  );
};
