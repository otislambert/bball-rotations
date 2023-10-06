import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import GraphContainer from "../../src/components/GraphContainer.svelte";
import pbp from "../../__mocks__/data/pbp0052";

describe("Rendering", () => {
  beforeEach(() => {
    render(GraphContainer, { props: { pbp } });
  });

  it("renders itself", () => {
    expect(screen.getByTestId("gc-root-container")).toBeDefined();
  });

  it("renders a header container", () => {
    expect(screen.getByTestId("gc-head-container")).toBeDefined();
  });
});
