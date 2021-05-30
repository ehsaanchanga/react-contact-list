import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

const App = () => {
  const LocalStorageKey = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addConatctHandler = contact => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = id => {
    const newContactLst = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(newContactLst);
  };
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LocalStorageKey));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={props => (
              <AddContact {...props} addConatctHandler={addConatctHandler} />
            )}
          />
          <Route path="/contact/:id" component={ContactDetail}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
