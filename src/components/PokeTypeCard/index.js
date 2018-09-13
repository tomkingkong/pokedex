import React from 'react';
import { PokeCard } from '../PokeCard';

import './PokeTypes.css'

export const PokeTypeCard = ({ name, pokemon }) => {
  // const displayPokemon = pokemon.map(poke => <PokeCard {...poke} />);
  return (
    <div className="PokeTypes">
      <h4>{name}</h4>
      {/* {displayPokemon} */}
    </div>
  )
}