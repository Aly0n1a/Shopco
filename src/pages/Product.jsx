import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '/public/products.json'
import ProductWrap from '../companents/ProductWrap/ProductWrap'
import Reviews from '../companents/Reviews/Reviews'
import Also from '../companents/Also/Also'

const Product = () => {

    const {id} = useParams()

    const product = Products.find(item => item.id === Number(id))

  return (
    <>
    <ProductWrap product={product}/>
    <Reviews/>
    <Also/>
    </>
  )
}

export default Product