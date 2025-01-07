import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-50 text-black p-5 rounded-xl '>Tailwind test</h1>
      <br/>
  <Card Username='ssssdd' />
  <br /><br />
  <Card Username='always' />
    </>
  )
}

export default App
