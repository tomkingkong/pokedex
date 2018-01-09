import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokecards from './Pokecards'
import { generateUrl } from './helpers/helper'
import { connect } from 'react-redux'
import { getPokemon } from './actions'

class App extends Component {
  constructor() {
    super()
    this.generator = generateUrl()
    this.state = {
      pokemon: []
    }
  }

  async componentDidMount() {
    const { value } = this.generator.next() // this is going to give me the url that has my pokemon from the api
    const initialFetch = await fetch(value)
    const pokemon = await initialFetch.json() // this is giving an array of pokemon (the first 20)
    this.props.handleFetch(pokemon.results)
  }

  morePokemon = async () => {
    const { value } = this.generator.next()
    if(value) {
      const initialFetch = await fetch(value);
      const pokemon = await initialFetch.json()
      this.props.handleFetch(pokemon.results)
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

const mapDispatchToProps = dispatch => ({
  handleFetch: (results) => dispatch(getPokemon(results))
})

export default connect(null, mapDispatchToProps)(App);
