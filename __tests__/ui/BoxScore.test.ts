import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { mockBS } from "../../__mocks__/data/BSwasdet102522.data";
import BoxScore from "$components/boxscore.svelte";

describe("Box Score Component", () => {
  describe("Rendering", () => {
    beforeEach(() => {
      render(BoxScore, { props: { boxScore: mockBS } });
    });

    it("renders itself", () => {
      expect(screen.getByTestId("bs-component")).toBeDefined();
    });
    it("renders two bs team components", () => {
      expect(screen.getAllByTestId("bs-team-component").length).toBe(2);
    });
  });

  describe("Text Content", () => {
    beforeEach(() => {
      render(BoxScore, { props: { boxScore: mockBS } });
    });

    it("header has the correct text", () => {
      expect(screen.getByTestId("bs-header-text").textContent).toBe("Stats");
    });
  });
});

