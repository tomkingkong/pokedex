import React, { Component } from 'react';
import PropTypes, { array, string } from 'prop-types';
import { fetchPokemonSepcific } from '../../utilities/fetch';

import { PokeCard } from '../PokeCard';

import './PokeTypes.css'

export class PokeTypeCard extends Component {
  constructor() {
    super();
    this.state = {
      showPokemon: false,
      types: []
    }
  }

  handleClick = async () => {
    const { pokemon } = this.props;
    if (!this.state.types.length) {
      const types = await Promise.all(pokemon.map( poke => fetchPokemonSepcific(poke)));
      this.setState({ types });
    }
    this.setState({ showPokemon: !this.state.showPokemon });
  }

  render() {
    const { name } = this.props;
    const { showPokemon, types } = this.state;
    const displayPokemon = types.map((pokemon, i) => <PokeCard {...pokemon} key={i} />);

    return (
      <div className={showPokemon ? "PokeTypes show" : "PokeTypes"} onClick={this.handleClick}>
        <h4>{name}</h4>
        <div className="pokemons">
          {displayPokemon}
        </div>
      </div>
    )
  }
}

PokeTypeCard.propTypes = {
  pokemon: array,
  name: string
}

export default PokeTypeCard;