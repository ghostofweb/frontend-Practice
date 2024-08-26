import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  //const [variable, () to update that variable] = useState(default value)
  let [counter,setCounter] = useState(5)


function addValue(){
    counter = counter + 1
    setCounter(counter)
}

function minusValue(){
  if(counter > 0){
  setCounter(counter - 1)
  }
}
  return (
    <>
    <h1>Counter valie:{counter}</h1>

    <button onClick={addValue}>+{counter}</button>
    <br/>
    <button onClick={minusValue}>-{counter}</button>
    {counter}
    </>
  )
}

export default App
