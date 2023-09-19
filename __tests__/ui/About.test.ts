import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import About from "$components/About.svelte";

describe("About Component Rendering", () => {
  beforeEach(() => {
    render(About);
  });

  it("renders itself", () => {
    expect(screen.getByTestId("aboutComponent")).toBeDefined();
  });
  it("renders the header", () => {
    expect(screen.getByTestId("aboutHeader")).toBeDefined();
  });
  it("renders the text", () => {
    expect(screen.getByTestId("aboutText")).toBeDefined();
  });
});

describe("About Component Text", () => {
  beforeEach(() => {
    render(About);
  });

  it("Has the correct header", () => {
    expect(screen.getByTestId("aboutHeader").textContent).toBe("About");
  });
  it("Has the correct text", () => {
    expect(screen.getByTestId("aboutText").textContent).toBe(
      "Web app for showing NBA Rotation Data."
    );
  });
});
