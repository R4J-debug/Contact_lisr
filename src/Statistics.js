import React from 'react';
import './Statistics.css';

const Statistics = ({ contacts }) => {
  const countContacts = (gender, type) => {
    return contacts.filter(contact => contact.gender === gender && contact.type === type).length;
  };

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Male Personal Contacts: {countContacts('Male', 'Personal')}</p>
      <p>Female Personal Contacts: {countContacts('Female', 'Personal')}</p>
      <p>Male Business Contacts: {countContacts('Male', 'Business')}</p>
      <p>Female Business Contacts: {countContacts('Female', 'Business')}</p>
    </div>
  );
};

export default Statistics;
