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

    const removeTodo = (id: Todo["id"]) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id: Todo["id"], todo: Todo) => {
        console.log("init", todos);
        console.log("trying: ", id, todo);
        setTodos(
            todos.map((t) => {
                if (t.id == id) {
                    console.log("updated: ", id, todo);
                    return todo;
                }
                console.log("not updated: ", id, todo);
                return t;
            })
        );
    };

    return [todos, { addTodo, updateTodo, removeTodo }];
};
