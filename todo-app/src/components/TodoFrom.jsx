import React, { useEffect, useRef, useState } from 'react'
import { createTodo, getTodo, deleteTodo, updateTodo } from '../api/todoApi'
import List from './List'
import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'
const TodoFrom = () => {
  const todoCtx=useContext(TodoContext)
  const [todoText, setTodoText] = useState('')
  const [editId, setEditId] = useState(null)
  const input=useRef(null);
  useEffect(() => {
    fetchTodo()
  }, [todoText])

  const fetchTodo = async () => {
    const data = await getTodo();
    todoCtx.addFunc(data)
  }
  const handleTodo = () => {
    editId ?handleUpdateTodoList() :handleAddTodo()
  }
  const handleAddTodo = async () => {
    if (todoText.trim() === "") {
      alert('Please Enter values')
    } else {
      try {
        await createTodo(todoText);
        setTodoText("");
      } catch (error) {
        console.log(error)
      }
    }
  }
  const handleGetTodo = (e) => {
    setTodoText(e.target.value)
  }
  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodo()
  }
  const handleUpdate = (item) => {
    setTodoText(item.title)
    setEditId(item._id)
  }
  const handleUpdateTodoList = async () => {
    try {
      await updateTodo(editId, todoText);
      fetchTodo()
      setEditId('')
      setTodoText('')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="max-w-100 mx-auto mt-5 " >
      <h1  className="text-center mb-4" > Todo App</h1>

      {/* Input + Button */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new task..."
          value={todoText}
          onChange={handleGetTodo}
          ref={input}
        />
        <button className="bg-white todo-list px-2 font-semibold rounded-e" onClick={handleTodo}>
          {editId ? "update" : "add"}
        </button>
      </div>

      {/* Task List */}
       <h3 className='text-sm '>Today tasks</h3>
     <List todos={todoCtx.todo} />
    </div>
  )
}
export default TodoFrom;