import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { array, string } from 'prop-types';

import { PokeCard } from '../PokeCard';

import './PokeTypes.css'

export class PokeTypeCard extends Component {
  constructor() {
    super();
    this.state = {
      showPokemon: false
    }
  }

  handleClick = () => {
    this.setState({ showPokemon: !this.state.showPokemon });
  }

  render() {
    const { name, id, pokemon, storePokemons } = this.props;
    const { showPokemon } = this.state;
    const displayPokemon = pokemon.map(poke => {
      return storePokemons.find(pokemon => pokemon.id === poke);
    });

    return (
      <div className="PokeTypes">
        <h4>{name}</h4>
        {showPokemon && displayPokemon}
      </div>
    )
  }
}

PokeTypeCard.propTypes = {
  pokemon: array,
  name: string
}

export const mapStateToProps = ({ storePokemons }) => ({ storePokemons });

export default connect(mapStateToProps, null)(PokeTypeCard);