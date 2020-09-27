import React, {  } from 'react';
import './styles/App.css';
import { Sidebar, Feed, Widgets } from './components'
import axios from 'axios'
import { mellin } from './secrets/secrets'

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.twitter.com'

const config = {
  headers: {
    'Authorization': 'Bearer ' + mellin.BearerToken,
    "Access-Control-Allow-Origin": "*",
  },
}


const getData = (username) => {
  axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${username}`, config)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

function App() {
  return (
    //BEM
    <div className="app">
      <button onClick={() => getData('@sandviksea')}>CLICK</button>
      <Sidebar />

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
