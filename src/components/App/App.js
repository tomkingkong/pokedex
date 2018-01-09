import React, { Component } from 'react';
import './App.css';
import Pokecards from '../../containers/Pokecards/Pokecards'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <h1> POKEMON </h1>
        <Pokecards />
      </div>
    );
  }
}


export default App;
