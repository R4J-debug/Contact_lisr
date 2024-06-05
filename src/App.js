import React, { useState } from 'react'; 
import './App.css'; 
import ContactForm from './ContactForm'; 
import ContactList from './ContactList'; 
import Statistics from './Statistics'; 

const initialContacts = [ // Initializing an array of contact objects with some dummy data.
  { id: 1, name: 'Arijit Sarkar', gender: 'Male', type: 'Business' },
  { id: 2, name: 'Ahona Sarkar', gender: 'Female', type: 'Personal' },
  { id: 3, name: 'Alnitha Dsouza', gender: 'Female', type: 'Business' },
  { id: 4, name: 'Brown Fish', gender: 'Male', type: 'Personal' }
];

const App = () => { // Defining the App component.
  const [contacts, setContacts] = useState(initialContacts); 
  const [newContact, setNewContact] = useState({ name: '', gender: 'Male', type: 'Personal' }); 
  const [isEditing, setIsEditing] = useState(false);
  const [currentContactId, setCurrentContactId] = useState(null);

  const handleAddContact = () => { // Function to handle adding a new contact.
      if (isEditing) {
        // Update the existing contact
        setContacts(
          contacts.map(contact =>
            contact.id === currentContactId ? { ...newContact, id: currentContactId } : contact
          )
        );
        setIsEditing(false);
        setCurrentContactId(null);
      } else {
        // Add new contact
        setContacts([...contacts, { ...newContact, id: Date.now() }]);
      }
      setNewContact({ name: '', gender: 'Male', type: 'Personal' });
    };

  const handleDeleteContact = (id) => { // Function to handle deleting a contact.
    setContacts(contacts.filter(contact => contact.id !== id)); 
  };

  const handleEditContact = (id) => {
    const contact = contacts.find(contact => contact.id === id);
    setNewContact(contact);
    setIsEditing(true);
    setCurrentContactId(id);
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContactForm
        newContact={newContact}
        setNewContact={setNewContact}
        handleAddContact={handleAddContact}
        isEditing={isEditing} // Pass edit mode state to ContactForm
      />
      <ContactList
        contacts={contacts}
        handleEditContact={handleEditContact}
        handleDeleteContact={handleDeleteContact}
      />
      <Statistics contacts={contacts} />
    </div>
  );
};

export default App; 
