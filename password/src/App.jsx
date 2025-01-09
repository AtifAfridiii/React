import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [Length, setLength] = useState(8)
  const [Number , setNumber ] = useState(false)
  const [Symbol , setSymbol ] = useState(false)
  const [password,setpassword] = useState("")
  
const passwordGenerator = useCallback(()=>{
  let pass = ""
  let Str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let num = "0123456789"
  let sym = "!@#$%^&*()_+"
  if(Number) Str+=num 
  if(Symbol) Str+=sym

  for (let i = 1; i <=Length; i++) {
    let char = Math.floor(Math.random()*Str.length+1);
    pass+=Str.charAt(char)
  }
  setpassword(pass)
} , [Length,Number,Symbol,setpassword])

useEffect(() => {
  passwordGenerator()
}, [Length, Number, Symbol, passwordGenerator])

const passwordRef = useRef(null)

const copyToClipBoard = useCallback(() => {
     passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password)
},[password])


  return (
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
    <h1 className='text-white my-3 text-center'>Passoward Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 '> <input type="text"
     value={password}
     className='outline-none w-full py-1 px-3 bg-white'
     placeholder='Password'
     readOnly
     ref={passwordRef}
     />
     <button className='bg-blue-800 text-white outline-none px-3 py-0.5 shrink-0' onClick={
      copyToClipBoard
     }>Copy</button></div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 text-black'>
        <input 
        type="range"
        min={8}
        max={100}
        value={Length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {Length}</label>
      </div>
      <div className="flex items-center gap-x-1 text-black">
      <input
          type="checkbox"
          defaultChecked={Number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 text-black">
          <input
              type="checkbox"
              defaultChecked={Symbol}
              id="characterInput"
              onChange={() => {
                  setSymbol((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  </div>
  )
}

export default App
