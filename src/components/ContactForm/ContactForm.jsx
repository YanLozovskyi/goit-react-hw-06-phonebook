import React from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import {
  StyledForm,
  Label,
  StyledField,
  Button,
  ErrorMsg,
} from './ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
});

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={PhonebookSchema}
      onSubmit={({ name, number }, actions) => {
        const isNameDuplicate = contacts.some(
          contact =>
            contact.name.toLowerCase() === name.toLowerCase() ||
            contact.number === number
        );
        if (isNameDuplicate) {
          alert(`${name} is already in contacts.`);
          actions.resetForm();
          return;
        }
        dispatch(addContact({ name, number, id: nanoid() }));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          <StyledField
            name="name"
            type="text"
            placeholder="Enter contact name"
          />
          <ErrorMsg name="name" component="div" />
        </Label>
        <Label>
          <StyledField
            name="number"
            type="tel"
            placeholder="Enter contact number"
          />
          <ErrorMsg name="number" component="div" />
        </Label>
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Formik>
  );
};
