import { useState } from 'react'
import './App.css'

function App() {
  
  let [Counter , setCounter] = useState(0)

  const Increament = ()=>{
    
      setCounter(Counter+1)
    
        
      
  }

  const Decreament =()=>{
    if(Counter!=0){
      setCounter(Counter-1)
    }
  } 

  return (
    <>
    <button onClick={
      Increament
    }>Increament : {Counter}</button>
    <br />
    <br /> 
    <button onClick={
      Decreament
    }>Decreamentcreament : {Counter}</button>
        </>
  )
}

export default App
