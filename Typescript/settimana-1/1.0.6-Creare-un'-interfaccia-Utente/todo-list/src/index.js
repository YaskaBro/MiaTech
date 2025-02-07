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
console.log(todos);
