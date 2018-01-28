import React from 'react'
import { connect } from 'react-redux'
import { preLoad } from '../../actions'
import './PreLoadContainer.css'
const PreLoadContainer = ({ pokemon, preLoad, loaded}) => {
  const renderedCards = pokemon.map((poke, index) =>
        <img key= {`${index}-${poke.image}`}
             src={poke.image}
             onLoad={() => preLoad(poke)} />
       )
  return (
    <div className="hidden">
      {renderedCards}
    </div>
  )
}

const mapStateToProps = ({getPokemon, loaded}) => ({
  pokemon: getPokemon,
  loaded
})

const mapDispatchToProps = (dispatch) => ({
  preLoad: (pokemon) => dispatch(preLoad(pokemon))
})

export default connect(mapStateToProps,mapDispatchToProps)(PreLoadContainer)
