import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { FighterSelectionPage } from './components/FighterSelectionPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FighterSelectionPage />
      </header>
    </div>
  );
}

export default App;
