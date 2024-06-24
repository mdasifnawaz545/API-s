import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState={
    todos:[{id:uuid(),task:"Salaam",isDone:false}]
}

const slice={
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let todo={
                id:nanoid(),
                task:action.payload,
                isDone:false
            }
            state.push(todo);
        }
    }
}