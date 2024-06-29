import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(contact => contact.name === name);
    if (!existingContact) {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      this.setState(prevState => ({
        
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      alert(`${name} already exist in the list`);
    }
  };

  handleSearch = filter => {
    this.setState({ filter: filter });
  };

  handleDelete = newContacts => {
    this.setState({ contacts: newContacts });
  };

  render() {
    //console.log('Ma randez...'); 
    return (
      <>
        <div className={styles.mainContainer}>
          <h2>Phonebook</h2>
          <ContactForm onAddContact={this.handleAddContact} />

          <h2>Contacts</h2>
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onSearch={this.handleSearch}
            onDelete={this.handleDelete}
          />
        </div>
      </>
    );
  }
}
export default App;