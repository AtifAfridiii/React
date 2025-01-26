import { createContext, useContext } from "react";
import React from "react";

export const todoContext = createContext({
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

export const useTodo = ()=>{
    return useContext(todoContext)
}

export const todoProvider = todoContext.Provider