import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  const user ={
    name: 'John Doe',
    age:"92"
  }

  return (
    <>
    // sending them the properties to the
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="sahiljeet" btntxt="clickme"/>
    <Card username="singh" />
    </>
  )
}

export default App
