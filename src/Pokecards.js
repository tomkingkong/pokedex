import React from 'react'

const Pokecards = ({pokemon, morePokemon}) => {

  const mappedPokemon = pokemon.map((creature, index) => (<li key={`${creature}-${index}`}>
    {creature.name}
  </li>))
  return(
    <section>
      <ol>
        {mappedPokemon}
      </ol>
      <button onClick={morePokemon}> load moar </button>
    </section>
  )
}

export default Pokecards
