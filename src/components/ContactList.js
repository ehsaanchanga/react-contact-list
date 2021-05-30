import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = props => {
  const deleteContactHnadler = id => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map(contact => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHnadler}
        key={contact.id}
      />
    );
  });
  return (
    <div style={{ marginTop: '5rem' }}>
      <Link to="/add">
        <button
          className="ui button blue right"
          style={{ marginBottom: '2rem' }}
        >
          Add Contact
        </button>
      </Link>

      <h2>Contact List</h2>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
