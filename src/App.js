import React from 'react';
import './App.css';
import Pokedex from './Pokedex'
import Pokegame from './Pokegame'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Pokedex />
        <Pokegame />
      </div>
    );
  }
}

export default App;