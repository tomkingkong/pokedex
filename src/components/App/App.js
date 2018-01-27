import React, { Component } from 'react';
import './App.css';
// import Pokecards from '../../containers/Pokecards/Pokecards'
// import Pokestats from '../../containers/Pokestats/Pokestats'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokestats: null,
      PokeCards: null
      loading: true
    }
  }

  async componentDidMount() {
    const lazyPokeStats = await import('../../containers/Pokecards/Pokecards')
    const { default: PokeCards} = lazyPokeStats
    this.setState({ PokeCards, loading: false })
  }

  render() {
  const { pokestats, PokeCards } = this.state
  const ren = PokeCards ? < PokeCards />
                        : 'why tho'
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        {ren}
        {/* <Pokestats /> */}
      </div>
    );
  }
}


export default App;
