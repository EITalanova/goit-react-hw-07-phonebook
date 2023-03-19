import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { deleteContact } from 'redux/contactsSlice';
import css from './ContactEll.module.css';

const ContactEll = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const handleDeleteBtn = contactId => {
    dispatch(deleteContact(contactId));
  };

  const nameVerification = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <>
      {nameVerification.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            {name}: {number}
            <button className={css.btn} onClick={() => handleDeleteBtn(id)}>
              x
            </button>
          </li>
        );
      })}
    </>
  );
};

ContactEll.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactEll;
