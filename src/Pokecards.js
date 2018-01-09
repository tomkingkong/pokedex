import React, { Component } from 'react'
import './Pokecards.css'
import { connect } from 'react-redux'
import { addStats } from './actions'
import Pokemon from 'pokemon-images'
class Pokecards extends Component {
  constructor() {
    super()
  }

  async loadPokemon(creature){
    if(!creature.stats) {
      const intialFetch = await fetch(creature.url)
      const response = await intialFetch.json()
      this.props.stats(creature,response)
    }
  }
  mappedPokemon = (pokemon) => {
    return pokemon.map((creature, index) => (
      <article key={`${creature}-${index}`}
               className='card'
               onClick={() => this.loadPokemon(creature)}>
     <img src={Pokemon.getSprite(creature.name)}/>
    </article>))
  }

  render() {
    const { pokemon } = this.props
    return(
        <section className='cards'>
            {!pokemon.length ? null : this.mappedPokemon(pokemon)}
          <button
            className='moar-pokemon'
            onClick={this.props.morePokemon}> load moar
          </button>
        </section>
      )
  }

}

const mapStateToProps = ({getPokemon}) => {
  return {pokemon:getPokemon}
}

const mapDispatchToProps = (dispatch) => ({
  stats:(pokemon, response) => dispatch(addStats(pokemon,response))
})
export default connect(mapStateToProps, mapDispatchToProps)(Pokecards)
