// R E A C T
import React from 'react';
// A X I O S
import logo from './sourceCred.png';
// C O M P O N E N T S
// C S S
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          C R E A T E the change you want to see . . .
        </p>
        <p>🐰 . . . . . . . 🕳️</p>
        <a
          className="App-link"
          href="https://sourcecred.io/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Cred
        </a>
      </header>
    </div>
  );
}

export default App;
