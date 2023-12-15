import React, { useState } from 'react'
import Balance from './Balance'
import FormAddSubs from './FormAddSubs'

const MainControl = ({count}) => {
  const [subs, setSubs] = useState([])
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')

  return (
    <div className='main-form'>
      <Balance count = {count}></Balance>
      <FormAddSubs setType={setType} setPrice={setPrice} type={type} price={price} setSubs={setSubs} subs={subs}></FormAddSubs>
    </div>
  )
}

export default MainControl