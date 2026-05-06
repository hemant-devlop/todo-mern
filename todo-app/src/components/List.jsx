import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

const List = ({todos}) => {
    const todoctx=useContext(TodoContext);
    console.log(todoctx)
  return (
    <div>
      <ul className="m-0 p-0 space-y-6 py-2">
        {todos.reverse().map((item, ind) => <li key={ind}
          className="bg-white p-2 rounded-lg w-full flex items-center justify-between"
        >
          <div className='flex gap-2'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#4044c9" fill-rule="evenodd" d="M13 6a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5V.75a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 13 6M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5z" clip-rule="evenodd"/></svg>
          </span>
          <span className=' truncate capitalize todo-list font-medium'>
            {item.title}
          </span>
          </div>
          <div className='flex gap-2.5 relative'>
            <span className='absolute todo-list text-xs -top-5 font-sans py-0.5 -left-[1.10rem] bg-white text-nowrap px-2 rounded-t-lg'>{item.taskdate.slice(0,10)}</span>
            <button onClick={() => handleUpdate(item)} className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4044c9" d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"/><path fill="#4044c9" d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7L17.5 8.09L15.91 6.5zm-8 8l5.5-5.5l1.59 1.59l-5.5 5.5H9z"/></svg>
            </button>
            <button onClick={() => handleDelete(item._id)} className="">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4044c9" d="M3.94 5L2.22 3.28a.75.75 0 1 1 1.06-1.06l18.5 18.5a.75.75 0 0 1-1.06 1.06l-2.19-2.19A3.75 3.75 0 0 1 15.025 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zM15 16.06l-1.5-1.5v2.69a.75.75 0 0 0 1.5 0zm-4.5-4.5L9 10.06v7.19a.75.75 0 0 0 1.5 0zM15 9.75v2.069l4.026 4.026l.905-9.345h1.319a.75.75 0 0 0 0-1.5H15.5a3.5 3.5 0 1 0-7 0h-.318l5.318 5.319V9.75a.75.75 0 0 1 1.5 0M14 5h-4a2 2 0 1 1 4 0"/></svg>
            </button>
          </div>
        </li>)}
      </ul>
    </div>
  )
}

export default List