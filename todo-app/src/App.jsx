import React from 'react'
import TodoFrom from './components/TodoFrom'
import './App.css'
import TodoNavbar from './components/TodoNavbar'
const App = () => {

  return (
    <div className='todo'>
      <TodoNavbar/>
      <TodoFrom/>
    </div>
  )
}

export default App