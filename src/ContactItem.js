import React from 'react';
import './ContactItem.css';

const ContactItem = ({ contact, handleEditContact, handleDeleteContact }) => {
  return (
    <li className="contact-item">
      {contact.name} - {contact.gender} - {contact.type}
      <div>
        <button className="edit" onClick={() => handleEditContact(contact.id)}>Edit</button>
        <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ContactItem;
