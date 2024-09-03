import { useState } from 'react'
import './App.css'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("inr")
  const [to,setTo] = useState("usd")
  const [convertedAmount,setConversionAmount] = useState(0)  

  return (
    <>
   
    </>
  )
}

export default App
