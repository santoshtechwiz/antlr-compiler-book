// App.js

import './App.css';
import Book from './Book';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Create Compiler in C# using Antlr</h1>
      </header>
      <Book />
    </div>
  );
}

export default App;
