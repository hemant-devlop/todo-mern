import { useState } from "react"
import { createContext } from "react"
export const TodoContext=createContext({
    todo:[],
    addFunc:(data)=>{}
})

export default function TodoProvider({children}){
    const [addTodo,setAddTodo]=useState([])

    function addFunc(data){
        setAddTodo(data)
    }
    const value={
        todo:addTodo,
        addFunc:addFunc
    }
    return(
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}