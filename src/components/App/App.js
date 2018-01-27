import React, { Component } from 'react';
import './App.css';
import Pokecards from '../../containers/Pokecards/Pokecards'
// import Pokestats from '../../containers/Pokestats/Pokestats'

class App extends Component {
  constructor() {
    super()
    this.state = {
      PokeCards: null,
      loading: true
    }
  }

  async componentDidMount() {
    const lazyPokeStats = await import('../../containers/Pokecards/Pokecards')
    const { default: PokeCards} = lazyPokeStats
    this.setState({ PokeCards, loading: false })
  }

  render() {
  const { PokeCards } = this.state
  const ren = PokeCards ? < PokeCards />
                        : <img className='loader' src='./pikachu.gif'/>
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        {ren}
      </div>
    );
  }
}


export default App;
