import { Todo } from "./types";

function filterTodos<T>(todos: T[], filterFn: (todo: T) => boolean): T[] {
    return todos.filter(filterFn);
}

type PartialTodo = {
    [K in keyof Todo]?: Todo[K];
};

const todos: Todo[] = [
];

function updatePartialTodo(todoId: number, updatedFields: PartialTodo): Todo {
    const todo = todos.find(t => t.id === todoId)!;
    Object.assign(todo, updatedFields);
    return todo;
}

type TodoRecord = Record<number, Todo>

function convertArrayToRecord(todos: Todo[]): TodoRecord {
    const record: TodoRecord = {};

    for (const todo of todos) {
        record[todo.id] = todo;
    }

    return record;
}