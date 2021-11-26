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

    it("should increment counter by 1", async () => {
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

    it("should decrement counter by 1", async () => {
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
