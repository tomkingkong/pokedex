import React from 'react'
import { padNumber } from '../../helpers/helper'

const Card = ({ creature, index }) => (
  <article className='card'>
     <h3>{padNumber(index + 1)}</h3>
     <img src={creature.image}/>
  </article>
)

export default Card
