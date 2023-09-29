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
      expect(screen.getByTestId("bs-header-text").textContent).toBe("Boxscore");
    });
  });
});

describe("Box Score Settings", () => {
  describe("Rendering", () => {
    beforeEach(() => {
      render(BoxScore, { props: { boxScore: mockBS } });
    });

    it("renders itself", () => {
      expect(screen.getByTestId("bs-settings-container")).toBeDefined();
    });
    it("renders a 'show more' label", () => {
      const label = screen.getByTestId("bs-settings-expanded-label");
      expect(label).toBeDefined();
      expect(label.textContent).toContain("Show More")
      expect(label.nodeName).toBe("LABEL")
    });
    it("renders a 'show dnp' label", () => {
      const label = screen.getByTestId("bs-settings-dnp-label");
      expect(label).toBeDefined();
      expect(label.textContent).toContain("Show DNPs");
      expect(label.nodeName).toBe("LABEL");
    });
    it("renders a 'show expanded' checkbox", () => {
      const box = screen.getByTestId("bs-settings-expanded-box");
      expect(box).toBeDefined();
      expect(box.nodeName).toBe("INPUT")
      expect(box).toHaveAttribute("type", "checkbox");
    });
    it("renders a 'show DNPs' checkbox", () => {
      const box = screen.getByTestId("bs-settings-expanded-box");
      expect(box).toBeDefined();
      expect(box.nodeName).toBe("INPUT")
      expect(box).toHaveAttribute("type", "checkbox");
    });
  });
});
