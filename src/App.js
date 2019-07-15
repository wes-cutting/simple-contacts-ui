import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './config/Routes'
import Nav from './config/Nav'
import './styles/App.css'
import {getContacts, addContact, login} from './config/contacts'

const App = () => {
    
    return (
      <Router>
        <Nav />
        <Routes
          getContacts={getContacts}
          addContact={addContact}
          login={login}
        />
      </Router>
    );
}

export default App