import { Todo } from "./types";

const todos: Todo[] = []

const addTodo = (title: string) => {
    return {
        id: todos.length + 1,
        title: title,
        completed: false
    }
}

const pippo = addTodo("pippo");
todos.push(pippo)

const assignTodoToUser = (todo: Todo, userId: number) => {
    todo.userId = userId
}

assignTodoToUser(pippo, 123);
console.log(todos);