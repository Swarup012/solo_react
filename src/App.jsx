import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/ToDo'

function App() {


  return (
    <>
    <h2 className='text-center mt-4 text-2xl font-bold '>Hi Pritha . Here you can store your todos</h2>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
