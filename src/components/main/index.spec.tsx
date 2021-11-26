import { render } from "@test";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<Main />);

        expect(component).toBeTruthy();
    });

    it("renders texts successfully", () => {
        const { getByText } = render(<Main />);

        const text = getByText("superplate");
        expect(text).toBeDefined();
        // getByText(
        //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        // );
    });

    it("renders button successfully", () => {
        const { getByText } = render(<Main />);

        const text = getByText("Docs");
        expect(text).toBeDefined();
    });
});
