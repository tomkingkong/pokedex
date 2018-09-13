import React, { Component } from 'react';
import './App.css';
import PokeTainer from '../../containers/PokeTainer/'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <PokeTainer />
      </div>
    );
  }
}


export default App;
