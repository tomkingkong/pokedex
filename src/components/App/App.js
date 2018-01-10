import React, { Component } from 'react';
import './App.css';
import Pokecards from '../../containers/Pokecards/Pokecards'
import Pokestats from '../../containers/Pokestats/Pokestats'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <Pokecards />
        <Pokestats />
      </div>
    );
  }
}


export default App;
