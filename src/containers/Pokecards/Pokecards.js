import React, { Component } from 'react'
import { getPokemon, addStats } from '../../actions'
import { connect } from 'react-redux'
import Pokemon from 'pokemon-images'
import Card from '../../components/Card/Card'
import { generateUrl, addImage } from '../../helpers/helper'
import data from '../../data/pokemon.json'
import './Pokecards.css'

class Pokecards extends Component {
  constructor() {
    super()
    this.generator = generateUrl()
    this.state = {
      disable: false
    }
  }

  async componentDidMount() {
    const { value } = this.generator.next()
    const initialFetch = await fetch(value)
    const response = await initialFetch.json()
    const pokemon = addImage(response.results)
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
      const pokemon = addImage(response.results)
      this.props.handleFetch(pokemon)}
  }

  mappedPokemon = pokemon => {
    return pokemon.map((creature, index) => (
      <Card key={`${creature}-${index}`}
            index={index}
            {...creature}
      /> ))
  }


  render() {
    const { pokemon } = this.props
    const { disable } = this.state
    const render = !pokemon.length ? null : this.mappedPokemon(pokemon)

    return(
      <section className='pokecards-container'>
        <section className='cards'>
          {render}
            <button
              disabled={disable}
              className='moar-pokemon'
              onClick={this.morePokemon}
              > load moar
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
