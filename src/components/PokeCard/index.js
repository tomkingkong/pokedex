import React from 'react';

export const PokeCard = ({ name, type, weight, sprites }) => {
  return (
    <div className="pokemon">
      <h3>{name}</h3>
      <img src={sprites.front_default} alt={name}/>
      <p>Type: {type}</p>
      <p>Weight: {weight}</p>
    </div>
  )
}