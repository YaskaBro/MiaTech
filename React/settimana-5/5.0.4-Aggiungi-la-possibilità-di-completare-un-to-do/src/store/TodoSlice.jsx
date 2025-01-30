import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            const exists = state.todos.some(todo => todo.id === action.payload.id);
            if (!exists) {
                state.todos.push(action.payload);
            }
        },
        completeTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = true;
            }
        }
    }
});

export const { addTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;