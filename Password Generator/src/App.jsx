import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  
  //use ref hook
  const passwordRef=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);
  },[password])

  
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-5 py-4 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 text-3xl mb-5'>Password Generator</h1>
      <div className='flex w-full rounded-lg  border-red-900 overflow-hidden'>
        <input type="text" className='w-full py-2 px-3 outline-none' readOnly placeholder='Password' value={password} ref={passwordRef} />
        <button className='shrink-0 bg-blue-600 outline-none text-white  py-2 px-4' onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      <div className='flex my-3 justify-between'>
        <div className='mr-1 '>
          <input type="range" className='cursor-pointer'
            value={length}
            min={6}
            max={100}
            onChange={(e) => setLength(e.target.value)} /> <label htmlFor="">Length : {length}</label>
        </div>
        <div>
          <input type="checkbox" className='cursor-pointer' defaultChecked={numberAllowed} onChange={() => { setNumberAllowed((prev) => !prev) }} /> <label htmlFor="">Number</label>
        </div>

        <div>
          <input type="checkbox" className='cursor-pointer' defaultChecked={charAllowed} onClick={() => { setCharAllowed((prev) => !prev) }} /> <label htmlFor="">Character</label>
        </div>
        
      </div>
      <div className='flex justify-center align-baseline'>
          <button onClick={passwordGenerator} className='bg-green-600 text-white py-2 px-3 my-4 rounded-md text-'>Generate Password</button>
        </div>
    </div>
  )
}

export default App
