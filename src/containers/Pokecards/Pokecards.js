import React, { Component } from 'react'
import './Pokecards.css'
import { getPokemon, addStats } from '../../actions'
import { connect } from 'react-redux'
import Pokemon from 'pokemon-images'
import { generateUrl, padNumber, addImage } from '../../helpers/helper'
import data from '../../data/pokemon.json'

class Pokecards extends Component {
  constructor() {
    super()
    this.generator = generateUrl()
  }

  async componentDidMount() {
    const { value } = this.generator.next()
    const initialFetch = await fetch(value)
    const response = await initialFetch.json()
    const pokemon = addImage(response.results)
    console.log(pokemon);
    this.props.handleFetch(pokemon)
  }

   loadPokemon = async (creature) => {
    if(!creature.stats) {
      const intialFetch = await fetch(creature.url)
      const response = await intialFetch.json()
      this.props.stats(creature,response)
    }
  }

  morePokemon = async () => {
    const { value } = this.generator.next()
    if(value) {
      const initialFetch = await fetch(value)
      const response = await initialFetch.json()
      const pokemon = addImage(response.results)
      this.props.handleFetch(pokemon)}
  }

  mappedPokemon = async pokemon => {
    const unresolved = pokemon.map((creature, index) => (
      <article key={`${creature}-${index}`}
               className='card'>
       <h3>{padNumber(index + 1)}</h3>
       <img src={creature.image}/>
    </article>))
  }

  render() {
    const { pokemon } = this.props
    const render = !pokemon.length ? null : this.mappedPokemon(pokemon)

    return(
      <section className='pokecards-container'>
        <section className='cards'>
          {render}
            <button
              className='moar-pokemon'
              onClick={this.morePokemon}> load moar
            </button>
        </section>
        </section>
      )
  }
}

const mapStateToProps = ({getPokemon}) => ({pokemon:getPokemon})

const mapDispatchToProps = (dispatch) => ({
  stats:(pokemon, response) => dispatch(addStats(pokemon,response)),
  handleFetch: (results) => dispatch(getPokemon(results))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokecards)
