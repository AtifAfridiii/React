import './App.css'
import React from 'react'
import AddTodo from './app/components/AddTodo'
import Todos from './app/components/Todo'

function App() {

  return (
    <>
    <h1>Redux Todo </h1>
    <AddTodo/>
    <Todos/>

    </>
  )
}

export default App
