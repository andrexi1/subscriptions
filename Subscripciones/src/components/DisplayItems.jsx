import React from 'react'
import SingleItems from './SingleItems'

const DisplayItems = ({subs, eliminarItem, editItem}) => {

  return (
    <>
    <h2>Subscripciones</h2>
    {
      subs.map(item =>(
        <SingleItems key={item.id} id={item.id} price={item.price} type={item.type} eliminarItem={eliminarItem} editItem={editItem}></SingleItems>
      ))
    }
    </>
  )
}

export default DisplayItems