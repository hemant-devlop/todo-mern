import React, { useEffect, useRef, useState } from 'react'
import { createTodo, getTodo, deleteTodo, updateTodo } from '../api/todoApi'
const TodoFrom = () => {

  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)
  const input=useRef(null);
  useEffect(() => {
    fetchTodo()
  }, [todoText])

  const fetchTodo = async () => {
    const data = await getTodo();
    setTodos(data)
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
    <div className="container mt-5 w-50">
      <h2 className="text-center mb-4" >✅ Todo App</h2>

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
        <button className="btn btn-primary" onClick={handleTodo}>
          {editId ? "update" : "add"}
        </button>
      </div>

      {/* Task List */}
      <ul className="list-group">
        {todos.map((item, ind) => <li key={ind}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>
            {item.title}
          </span>
          <div>
            <button onClick={() => handleUpdate(item)} className="btn btn-sm btn-success me-2">
              Update
            </button>
            <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-outline-danger">
              ❌
            </button>
          </div>
        </li>)}
      </ul>
    </div>
  )
}
export default TodoFrom;