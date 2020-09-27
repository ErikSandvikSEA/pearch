import React from 'react';
import './styles/App.css';
import { Sidebar, Feed, Widgets } from './components'
import axios from 'axios'
import { mellin } from './secrets/secrets'

const baseUrl = 'https://api.twitter.com/'
const validToken = 'AAAAAAAAAAAAAAAAAAAAANdXIAEAAAAANDnUKIWbuosSmrf7rcbVb09GElU%3Dv17iS8cESY6DDtBbr4W0ek5byXSgs6P4pPCjUtvEnCf430Jtml'

const config = {
  headers: {
    'Authorization': 'Bearer ' + 'AAAAAAAAAAAAAAAAAAAAANdXIAEAAAAANDnUKIWbuosSmrf7rcbVb09GElU%3Dv17iS8cESY6DDtBbr4W0ek5byXSgs6P4pPCjUtvEnCf430Jtml'
  }
}

const getData = () => {
  axios
    .get()
}

function App() {
  return (
    //BEM
    <div className="app">
      <Sidebar />

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
