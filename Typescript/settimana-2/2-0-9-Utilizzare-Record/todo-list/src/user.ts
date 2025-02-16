import { Todo } from "./types";

class User {
    id: string;
    name: string;
    email?: string;
    Todos: Todo[] = [];

    constructor(id: string, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    addTodo(todo: Todo): void {
        this.Todos.push(todo)
    }
}


const user1 = new User("1", "Mario Rossi", "mario.rossi@example.com");
const user2 = new User("2", "Luca Bianchi", "luca.bianchi@example.com");
const user3 = new User("3", "Leonardo Horis", "leonardo.horis@example.com");


const todo1: Todo = {
    id: 1,
    title: "Comprare il latte",
    completed: false,
    status: 0,
};

const todo2: Todo = {
    id: 2,
    title: "Fare la spesa",
    completed: false,
    status: 0
};

user1.addTodo(todo1);
user2.addTodo(todo2);
user3.addTodo(todo1)


