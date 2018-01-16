import React, { Component } from 'react'
import { getPokemon, addStats } from '../../actions'
import { connect } from 'react-redux'
import Pokemon from 'pokemon-images'
import Card from '../../components/Card/Card'
import { generateUrl, addImage, addPosition } from '../../helpers/helper'
import data from '../../data/pokemon.json'
import './Pokecards.css'

class Pokecards extends Component {
  constructor() {
    super()
    this.generator = generateUrl()
    this.position = addPosition()
    this.state = {
      disable: false,
      loaded:[]
    }
  }

  componentDidMount = async () => {
    const { value } = this.generator.next()
    const initialFetch = await fetch(value)
    const response = await initialFetch.json()
    const pokemon = addImage(response.results, this.position)
    this.props.handleFetch(pokemon)
  }

  determainHide = (done) => {
    if(done) {
      this.setState({disable: true})
    }
  }

  morePokemon = async () => {
    const { value, done } = this.generator.next()
    if(value) {
      const initialFetch = await fetch(value)
      const response = await initialFetch.json()
      const pokemon = addImage(response.results, this.position)
      this.props.handleFetch(pokemon)}
  }

  mappedPokemon = pokemon => {
    return this.state.loaded.map((creature, index) => (
      <Card key={`${creature}-${index}`}
            index={index}
            {...creature}
      /> ))
  }

  lazyLoad = (pokemon) => {
    const loaded = [...this.state.loaded, pokemon].sort((a,b) => a.position - b.position)
    this.setState({loaded})
  }

  render() {
    const { pokemon } = this.props
    const { disable, loaded } = this.state
    const render = !pokemon.length ? <img className='loader'
                           src='./pikachu.gif'/> : this.mappedPokemon(pokemon)
    const lazy = pokemon.map(pokemon => {
      return <img src={pokemon.image} onLoad={() => this.lazyLoad(pokemon)} />
    })
    const loadingState = pokemon.length > loaded.length

    return(
      <section className='pokecards-container'>
        <section className='cards'>
          {render}
          { loadingState && <img className='loader'
                                 src='./pikachu.gif'/> }
            <button
              disabled={disable}
              className='moar-pokemon'
              onClick={this.morePokemon}
              > load moar
            </button>
        </section>
        <div className='hidden'>
          {lazy}
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({getPokemon}) => ({
  pokemon: getPokemon
})

const mapDispatchToProps = (dispatch) => ({
  stats:(pokemon, response) => dispatch(addStats(pokemon,response)),
  handleFetch: (results) => dispatch(getPokemon(results))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokecards)
