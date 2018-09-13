import React from 'react';

export const PokeCard = ({ name, type, weight, sprite }) => {
  return (
    <div>
      <h4>{name}</h4>
      <div>{sprite}</div>
      <p>Type: {type}</p>
      <p>Weight: {weight}</p>
    </div>
  )
}