import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo : [{
        id : 1 ,
        text : 'hello world' 
    }]
}

export const TodoSlice = createSlice({
    
    name : 'todo',
    initialState ,
    reducers : {
        addTodo : (state , action) => {
              const Todo = {
                id : nanoid(),
                text : action.payload
              }
              state.todo.push(Todo)
        },
    
        removeTodo : (state , action)=>{
             state.todo=state.todo.filter((todo)=>todo.id!==action.payload)
        }
    }
 
})

export  const {addTodo,removeTodo} = TodoSlice.actions ;

export default TodoSlice.reducer