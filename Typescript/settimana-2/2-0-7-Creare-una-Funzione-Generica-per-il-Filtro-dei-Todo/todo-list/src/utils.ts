import { Todo } from "./types";

function filterTodos<T>(todos: T[], filterFn: (todo: T) => boolean): T[] {
    return todos.filter(filterFn);
}