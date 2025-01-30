import { createContext, useContext } from "react";
import React from "react";

export const TodoContext = createContext({
    todos:[
       {
        id:1,
        msg:'todo message',
        completed : false
       }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { },
    updateTodo :(id , todo) => {

    }
})

export const UseTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider