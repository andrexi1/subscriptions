import React, { useState } from 'react'

const FormAddSubs = ({setType, setPrice, type, price, setSubs, subs}) => {
  const [error, setError]= useState(false)
  

  const handleSubs= e =>{
    e.preventDefault()
    if (price === '' || Number(price)<0 || type==='') {
      setError(true)
      return
    }
    setError(false)
    const data={
      type: type,
      price: price,
      id: Date.now()
    }
    setSubs((subs) => [...subs, data]);
    //console.log(subs);
    //console.log(type);
    //console.log(price);
  }

  return (
    <div className="add-subscription">
      <h3>Agregar Suscripciones</h3>
      <form onSubmit={ handleSubs}>
        <p>Servicios</p>
        <select onChange={e=> setType(e.target.value)} value={type}>
          <option value="">--Elegir--</option>
          <option value="netflix">--Neflix--</option>
          <option value="disneyPlus">--Disney PLus--</option>
          <option value="hboMax">--HBO Max--</option>
          <option value="starPlus">--Star PLus--</option>
          <option value="primeVideo">--Prime Video--</option>
          <option value="spotify">--Spotify--</option>
          <option value="appleTv">--Apple Tv--</option>
        </select>
        <p>Cantidad</p>
        <input type="number" placeholder='20$' onChange={e=> setPrice(e.target.value)} value={price}/>
        <input type="submit" value='Agregar'/>
      </form>
      {error?<p className='error'>Campos invalidos</p> : null }
    </div>
  );
}

export default FormAddSubs