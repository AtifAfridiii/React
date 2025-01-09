import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("red")

  return (

      <div className="W-full h-screen duration-200" 
      style={{backgroundColor: color}} >
      
      <div className="flex gap-11 " >
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-10 px-10 " 
        onClick={()=>setColor('Green')}>Green</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-10 " onClick={()=>setColor('blue')} >Blue</button>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-10 px-10" onClick={()=>setColor('pink')}>Pink</button>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-10 px-10" onClick={()=>setColor('orange')}>Orange</button>
      </div>

      </div>

  )
}

export default App
