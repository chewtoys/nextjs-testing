import { useRecoilState } from "recoil";

import { todoList } from "@recoil/atoms";

interface Todo {
    id: number;
    text: string;
}

export const useTodos: () => [
    Todo[],
    {
        addTodo: (todo: Todo) => void;
        updateTodo: (id: number, todo: Todo) => void;
        removeTodo: (id: number) => void;
    },
] = () => {
    const [todos, setTodos] = useRecoilState<Todo[]>(todoList);

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id: number, todo: Todo) => {
        setTodos(todos.map((t) => (t.id === id ? todo : t)));
    };

    return [todos, { addTodo, updateTodo, removeTodo }];
};
