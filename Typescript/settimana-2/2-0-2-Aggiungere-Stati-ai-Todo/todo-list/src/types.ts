export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    status: Todostatus,
}

export interface User {
    id: number,
    name: string,
    email?: string
    readonly todos: Todo[]
}

export interface TodoWithMetadata extends Todo {
    metadata: any
}

export interface Project {
    users: User[];
    todos: Todo[];
}

export enum Todostatus {
    Pending,
    InProgress,
    Completed,
}