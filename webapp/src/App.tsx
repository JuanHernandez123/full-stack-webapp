import React from 'react';
import './App.css';
import PetList from './components/PetList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pet Information System</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <PetList />
      </main>
    </div>
  );
}

export default App;