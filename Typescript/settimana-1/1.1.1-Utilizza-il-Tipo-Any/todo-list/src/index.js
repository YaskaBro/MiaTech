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
var throwError = function (message) {
    throw new Error(message);
};
var parseInput = function (input) {
    if (typeof input === "string") {
        return input;
    }
    else if (typeof input === "number") {
        return input.toString();
    }
    else {
        throw new Error("Input non valido: ".concat(input));
    }
};
throwError("ciao");
parseInput("ciao");
