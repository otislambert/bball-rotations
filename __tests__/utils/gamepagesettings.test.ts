import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { mockBS } from "../../__mocks__/data/BSwasdet102522.data";
import BoxScore from "$components/boxscore.svelte";

describe("Box Score Settings", () => {
  describe("Rendering", () => {
    beforeEach(() => {
      render(BoxScore, { props: { boxScore: mockBS } });
    });

    it("renders itself", () => {
      expect(screen.getByTestId("bs-settings-container")).toBeDefined();
    });

    // label rendering
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
    it("renders an 'ascending' label", () => {
      const label = screen.getByTestId("bs-settings-ascending-label")
      expect(label).toBeDefined();
      expect(label.textContent).toContain("Ascending")
      expect(label.nodeName).toBe("LABEL");
    });
    it("renders a 'sort by' label", () => {
      const label = screen.getByTestId("bs-settings-sort-label");
      expect(label).toBeDefined();
      expect(label.textContent).toContain("Sort by");
      expect(label.nodeName).toBe("LABEL");
    });

    // input rendering
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
    it("renders an 'ascending' checkbox", () => {
      const box = screen.getByTestId("bs-settings-ascending-box");
      expect(box).toBeDefined();
      expect(box.nodeName).toBe("INPUT")
      expect(box).toHaveAttribute("type", "checkbox");

    })
    it("renders a 'Sort by' select", () => {
      const select = screen.getByTestId("bs-settings-sort-select");
      expect(select).toBeDefined();
      expect(select.nodeName).toBe("SELECT");
    });
  });
});
