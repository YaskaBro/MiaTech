import { Todo } from "./types";

function filterTodos(todos: Todo[], filterFn: (todo: Todo) => boolean): Todo[] {
    return todos.filter(filterFn);
}