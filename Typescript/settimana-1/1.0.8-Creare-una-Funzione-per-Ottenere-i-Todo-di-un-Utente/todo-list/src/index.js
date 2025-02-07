"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = [];
var addTodo = function (title) {
    return {
        id: todos.length + 1,
        title: title,
        completed: false
    };
};
var pippo = addTodo("pippo");
todos.push(pippo);
var assignTodoToUser = function (todo, userId) {
    todo.userId = userId;
};
assignTodoToUser(pippo, 123);
var getUserTodos = function (userId) { return todos.filter(function (t) { return t.userId === userId; }); };
console.log(getUserTodos(123));
