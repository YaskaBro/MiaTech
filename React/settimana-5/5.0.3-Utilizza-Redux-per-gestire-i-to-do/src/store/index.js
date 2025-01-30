import { configureStore } from "@reduxjs/toolkit";
import TodoSliceReducer from './TodoSlice';

export default configureStore({
    reducer: {
        todos: TodoSliceReducer, 
    },
});