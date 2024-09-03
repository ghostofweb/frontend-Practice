import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8); // Set a default length
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    document.execCommand('copy');
  }, []);
// we know we will use this again and again with each button click 
  // and change of length
  // so if we using this () again and again, we should use a hook name 
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 my-12 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-2xl text-center font-bold mb-6'>Password Generator</h1>
        <div className='flex shadow-inner rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-4 bg-gray-700 text-white text-lg'
            placeholder='Generated Password'
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-600 text-white px-4 py-2 shrink-0 hover:bg-blue-700 active:bg-blue-800 transition-all duration-200"
            onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex flex-col gap-4 text-sm'>
          <div className='flex items-center justify-between'>
            <label className='text-white'>Length: {length}</label>
            <input
              type='range'
              min={6}
              max={20}
              value={length}
              className='cursor-pointer w-2/3'
              onChange={(e) => { setLength(parseInt(e.target.value)) }}
            />
          </div>
          <div className='flex items-center gap-4'>
            <label className='flex items-center text-white'>
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => { setNumberAllowed((prev) => !prev) }}
                className='cursor-pointer'
              />
              <span className='ml-2'>Include Numbers</span>
            </label>
            <label className='flex items-center text-white'>
              <input
                type="checkbox"
                checked={characterAllowed}
                onChange={() => { setCharacterAllowed((prev) => !prev) }}
                className='cursor-pointer'
              />
              <span className='ml-2'>Include Symbols</span>
            </label>
          </div>
        </div>
        <div className='mt-6 text-center'>
          <button
            className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all duration-200'
            onClick={passwordGenerator}
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
