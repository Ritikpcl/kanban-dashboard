// App.js

import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Board from './components/Board/Board';
import { KanbanProvider } from './context/KanbanContext';
import Card from './components/Card/Card'

function App() {
  return (
    <KanbanProvider>
      <div className="app">
        <Header/>
        <main>
          <Board />
          {/* <Card/> */}
        </main>
      </div>
    </KanbanProvider>
  );
}

export default App;
