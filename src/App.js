import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokecards from './Pokecards'
import { generateUrl } from './helpers/helper'

class App extends Component {
  constructor() {
    super()
    this.generator = generateUrl()
    this.state = {
      pokemon: []
    }
  }

  async componentDidMount() {
    const { value } = this.generator.next()
    const initialFetch = await fetch(value)
    const pokemon = await initialFetch.json()
    this.setState({pokemon: pokemon.results})
  }

  morePokemon = async () => {
    const { value } = this.generator.next()
    if(value) {
      const initialFetch = await fetch(value);
      const pokemon = await initialFetch.json()
      const newState = [...this.state.pokemon, ...pokemon.results]
      this.setState({pokemon: newState})
    }
  }
  render() {
    return (
      <div className="App">
        <h1> POKEMON </h1>
        <Pokecards pokemon={this.state.pokemon}
                  morePokemon={this.morePokemon}/>
      </div>
    );
  }
}

export default App;
