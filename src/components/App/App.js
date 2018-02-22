import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


export default App;
