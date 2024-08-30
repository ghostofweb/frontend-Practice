import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdewfghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[ length , numberAllowed, characterAllowed , setPassword ])
//for optimization 

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select() // to highlight the value of that input(optimization)
  passwordRef.current?.setSelectionRange()
  window.navigator.clipboard.writeText(password)
},[password])

// To run
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  // we know we will use this again and again with each button click 
  // and change of length
  // so if we using this () again and again, we should use a hook name useCallback
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 pb-4 my-8 text-orange-500 bg-gray-600'>
      <h1 className='text-white text-center py-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-4'
        placeholder='Passowrd'
        readOnly
        ref={passwordRef} />
        {/* giving password reference */}
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900 active:text-sm"
        onClick={copyPasswordToClipboard}> copy </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
           min={6} 
           max={100} 
           value={length}
            className='cursor-pointer' 
            onChange={(e) => {setLength(e.target.value)}}/> 
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {setNumberAllowed((prev) => !prev)}}/> 
          {/* if false, make it true, if true make it false  */}
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={characterAllowed}
          id="characterAllowed"
          onChange={() => {setCharacterAllowed((prev) => !prev)}}/> 
          {/* if false, make it true, if true make it false  */}
          <label>Character</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
