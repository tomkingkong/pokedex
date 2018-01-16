import React, { Component } from 'react'
import { padNumber } from '../../helpers/helper'
import { connect } from 'react-redux'
import { loading } from '../../actions'

const Card = ({ image, name, index, loadCount }) => (
  <article className='card'>
    <h3>{padNumber(index + 1)}</h3>
    <p>{name}</p>
    <img src={image}/>
  </article>
)

export default Card
