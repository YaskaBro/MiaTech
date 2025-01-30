import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false, todos: [] }

const TodoSlice = createSlice({ 
    name: "todos", 
    initialState: initialState,
    reducers:{
        
    }
})