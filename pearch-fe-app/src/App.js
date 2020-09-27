import React from 'react';
import './styles/App.css';
import { Sidebar, Feed } from './components'


function App() {
  return (
    //BEM
    <div className="app">
      <Sidebar />

      <Feed />

      {/* Widgets */}
    </div>
  );
}

export default App;
