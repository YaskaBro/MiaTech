import { Todo } from "./types";

class User {
    id: string;
    name : string;
    email?: string;
    Todos: Todo [] = [];

    constructor(id: string, name: string, email?: string) {
        this.id= id;
        this.name= name;
        this.email= email;
    }

    addTodo (todo: Todo): void {
        this.Todos.push(todo)
    }
}