import nock from "nock";

import { FetchExample } from "./index";
import { mockResponse } from "./mocks";

import { render, waitFor } from "@test";

describe("Fetch testing with testing-library and nock", () => {
    it("renders the mock result", async () => {
        nock("https://jsonplaceholder.typicode.com")
            .get("/users/1")
            .reply(200, mockResponse);

        const { getByTestId } = render(<FetchExample />);

        await waitFor(() => {
            expect(getByTestId("users-container")).toBeDefined();
            expect(getByTestId("user-username").textContent).toBe(
                mockResponse.username,
            );
            expect(getByTestId("user-email").textContent).toBe(
                mockResponse.email,
            );
        });
    });

    it("renders the error result", async () => {
        nock("https://jsonplaceholder.typicode.com")
            .get("/users/1")

            .replyWithError("Something awful happened");

        const { getByText, getByTestId } = render(<FetchExample />);

        await waitFor(() => {
            expect(getByTestId("error-container")).toBeDefined();
            
            expect(getByText(/FetchError/i)).toBeDefined();
            expect(getByText(/Something awful happened/i)).toBeDefined();
        });
    });
});
