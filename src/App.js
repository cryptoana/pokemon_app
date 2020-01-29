import React from 'react';
import './App.css';
import Pokecard from './Pokecard'
import Pokedex from './Pokedex'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Pokecard 
          id={4}
          name="Charmander"
          type="fire"
          XP={62}
        />
        <Pokedex />
      </div>
    );
  }
}

export default App;