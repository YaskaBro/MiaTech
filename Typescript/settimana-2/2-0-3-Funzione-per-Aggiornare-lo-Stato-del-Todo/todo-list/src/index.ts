import { Todo, TodoWithMetadata, User, Project, Todostatus } from "./types";

const todos: Todo[] = []

const addTodo = (title: string, metadata?: string | object) => {
    return {
        id: todos.length + 1,
        title: title,
        completed: false,
        metadata: metadata,
        status: Todostatus.Pending
    }
}

const pippo = addTodo("pippo");
todos.push(pippo)

const assignTodoToUser = (todo: Todo, userId: number) => {
    todo.userId = userId
}

assignTodoToUser(pippo, 123);

const getUserTodos = (userId: number) => todos.filter(t => t.userId === userId);

console.log(getUserTodos(123));

const throwError = (message?: string): never => {
    throw new Error(message)
}

const parseInput = (input: unknown): string => {
    if (typeof input === "string") {
        return input;
    } else if (typeof input === "number") {
        return input.toString()
    } else {
        throw new Error(`Input non valido: ${input}`) as never;
    }
}

throwError("ciao")

parseInput("ciao")

const updateTodo = (todo: Todo, updates: Partial<Todo>) => {
    return { ...todo, ...updates }
}

const getTodoSummary = (todo: Todo): [string, boolean] => {
    return [todo.title, todo.completed];
}

const createProject = (users: User[], todos: Todo[]): Project =>{
    return { users, todos };
}

const updateTodoStatus = (todoId :number , status: Todostatus) => {
    const foundTodo = todos.find((todo)=>todo.id = todoId);
    if (foundTodo){foundTodo.status = status}
}