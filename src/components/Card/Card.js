import React from 'react'
import { padNumber } from '../../helpers/helper'

const Card = ({ image, index }) => (
  <article className='card'>
     <h3>{padNumber(index + 1)}</h3>
     <img src={image}/>
  </article>
)

export default Card
