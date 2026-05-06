import React from 'react'
import TodoFrom from './components/TodoFrom'
import './App.css'
import TodoNavbar from './components/TodoNavbar'
import List from './components/List'
import { useContext } from 'react'
import { TodoContext } from './context/todoContext'
const App = () => {
  const todoctx=useContext(TodoContext)
  return (
    <div className='todo'>
      <TodoNavbar/>
      <div className='max-w-300 grid grid-cols-1 min-h-130 lg:grid-cols-2 mx-auto bg-[#3438a2] rounded'>
        <TodoFrom/> 
        <div className=' max-w-100 mt-5 mx-auto'>
          <h2 className='text-[#4044c9]'>Tasks List</h2>
          <List todos={todoctx.todo}/>
        </div>
      </div>
    </div>
  )
}

export default App