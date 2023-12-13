import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FormAddMoney from './components/FormAddMoney'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header></Header>
      <FormAddMoney setCount= {setCount}></FormAddMoney>
    </div>
  )
}

export default App
