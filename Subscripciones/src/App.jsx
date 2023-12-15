import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainControl from './components/MainControl'
import FormAddMoney from './components/FormAddMoney'

function App() {
  const [count, setCount] = useState(0)
  const [isValid, setIsValid]= useState(false)

  const component= isValid
                  ? <MainControl count={count}></MainControl>
                  : <FormAddMoney setCount= {setCount} setIsValid={setIsValid} ></FormAddMoney>

  return (
    <div className='App'>
      <Header></Header>
      {component}
    </div>
  )
}

export default App
