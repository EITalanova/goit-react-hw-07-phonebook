
import AddContacts from './AddContacts/AddContacts';
import ContactList from './ContactList/ContactList';
import ContactEll from './ContactEll/ContactEll';
import Filter from './Filter/Filter';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 10,
        color: '#010101',
    
      }}
    >
      <h1>Phonebook</h1>
      <AddContacts />
      <h2>Contacts</h2>
      <Filter />
      <ContactList>
        <ContactEll />
      </ContactList>
    </div>
  );
}

export default App;
