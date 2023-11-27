import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Board from './components/Board/Board';
import { KanbanProvider } from './context/KanbanContext';

function App() {
  return (
    <KanbanProvider>
      <div className="app">
        <Header />
        <main>
          <Board />
        </main>
      </div>
    </KanbanProvider>
  );
}

export default App;
