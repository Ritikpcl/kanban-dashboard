import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Board from './components/Board/Board';
import { useContext } from 'react';
import { KanbanContext } from './context/KanbanContext';

function App() {

  const { loading,state  } = useContext(KanbanContext);
console.log(loading,state)
if(loading) return (<div>Loading...</div>)
  return (
      <div className="app">
        <Header />
        <main>
          <Board />
        </main>
      </div>
  );
}

export default App;
