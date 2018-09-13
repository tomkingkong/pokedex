import React, { Component } from 'react';
import PropTypes, { array, func } from 'prop-types';
import { connect } from 'react-redux';
import { populateTypes, populatePokemon } from '../../actions';
import { fetchTypes, fetchPokemon } from '../../utilities/fetch';
import { PokeTypeCard } from '../../components/PokeTypeCard';

import './PokeSection.css';

class PokeTainer extends Component {

  async componentDidMount() {
    const pokemonTypes = await fetchTypes();
    const pokemon = await fetchPokemon();
    this.props.populatePokemon(pokemon);
    this.props.populateTypes(pokemonTypes);
  }

  render() {
    const { types } = this.props;
    const displayPokeTypes = types.map(type => <PokeTypeCard {...type} />)
    return (
      <div className="PokeSection">
        {displayPokeTypes}
      </div>
    );
  }
}

PokeTainer.propTypes = {
  types: array,
  populateTypes: func.isRequired
};

export const mapStateToProps = ({ types }) => ({ types });
export const mapDispatchToProps = dispatch => ({ 
  populateTypes: (types) => dispatch(populateTypes(types)),
  populatePokemon: (pokemon) => dispatch(populatePokemon(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeTainer);
