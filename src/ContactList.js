import React from 'react';
import './ContactList.css';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, handleEditContact, handleDeleteContact }) => {
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            handleEditContact={handleEditContact}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

