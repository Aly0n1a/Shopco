import React from 'react'
import s from './Card.module.scss'

const Card = ({image, name="Soon...", rate="0", price="нет в наличие"}) => {
  return (
  <>
  <div className={s.card}>
    <img src={image} alt="" />
    <h3>{name}</h3>
  
    <b>{price}</b>

  </div>
  
  
  
  </>
  )
}

export default Card