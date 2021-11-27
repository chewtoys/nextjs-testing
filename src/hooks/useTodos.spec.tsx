import { renderHook, act } from "@testing-library/react-hooks";
import { AllTheProviders } from "@test";
import { useTodos } from "./useTodos";

describe("Recoil useTodos Hook", () => {
    it("should set initial todos to []", async () => {
        const { result } = renderHook(() => useTodos(), {
            wrapper: AllTheProviders,
        });
        const [todos] = result.current;

        expect(todos.length).toEqual(0);
    });

    it("should add todo", async () => {
        const { result } = renderHook(() => useTodos(), {
            wrapper: AllTheProviders,
        });
        const [, { addTodo }] = result.current;

        act(() => {
            addTodo({
                id: 111,
                text: "Learn Recoil",
            });
        });

        const [todos] = result.current;

        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe("Learn Recoil");
    });

    it("should edit todo", async () => {
        const { result } = renderHook(() => useTodos(), {
            wrapper: AllTheProviders,
        });
        const [, { addTodo, updateTodo }] = result.current;

        act(() => {
            addTodo({
                id: 111,
                text: "Learn Recoil",
            });

            
        });

        act(() => {
            updateTodo(111, {
                id: 111,
                text: "Try Recoil",
            });
        });

        const [todos] = result.current;

        console.log(todos);
        
        // expect(todos.length).toBe(1);
        // expect(todos[0].text).toBe("Try Recoil");
    });

    it("should remove todo", async () => {
        const { result } = renderHook(() => useTodos(), {
            wrapper: AllTheProviders,
        });
        const [, { removeTodo }] = result.current;

        act(() => {
            removeTodo(111);
        });

        const [todos] = result.current;

        expect(todos.length).toBe(0);
    });
});
