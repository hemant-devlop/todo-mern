import React from 'react'
import TodoFrom from './components/TodoFrom'
import './App.css'
import TodoNavbar from './components/TodoNavbar'
const App = () => {

  return (
    <div className='todo'>
      <TodoNavbar/>
      <div className='max-w-300 mx-auto bg-[#a8a8a8] rounded'>
        <TodoFrom/> 
      </div>
    </div>
  )
}

export default App