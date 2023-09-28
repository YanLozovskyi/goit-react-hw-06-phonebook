import {
  Notifications,
  Filter,
  Section,
  ContactList,
  ContactForm,
} from 'components';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
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
