import { renderHook } from "@testing-library/react-hooks";

import { AllTheProviders } from "@test";

import nock from "nock";

const BASE_URL = "https://api.github.com/users";
import useFetchData from "./useFetchData";

describe("react-query useFetchData Hook", () => {
    it("should set initial value to 0", async () => {
        const expectation = nock(BASE_URL).get("/api/data").reply(200, {
            answer: 42,
        });

        const { result, waitFor } = renderHook(() => useFetchData(), {
            wrapper: AllTheProviders,
        });

        await waitFor(() => {
            return result.current.isSuccess;
        });

        expect(result.current.data).toEqual({ answer: 42 });

        expectation.done();
    });
});
