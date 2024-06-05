import React from 'react';
import './ContactForm.css';

const ContactForm = ({ newContact, setNewContact, handleAddContact, isEditing }) => {
  return (
    <div className="contact-form">
      <input
        type="text"
        placeholder="Name"
        value={newContact.name}
        onChange={e => setNewContact({ ...newContact, name: e.target.value })}
      />
      <select
        value={newContact.gender}
        onChange={e => setNewContact({ ...newContact, gender: e.target.value })}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select
        value={newContact.type}
        onChange={e => setNewContact({ ...newContact, type: e.target.value })}
      >
        <option value="Personal">Personal</option>
        <option value="Business">Business</option>
      </select>
      <button onClick={handleAddContact}>
        {isEditing ? 'Update Contact' : 'Add Contact'}
      </button>
    </div>
  );
};

export default ContactForm;

