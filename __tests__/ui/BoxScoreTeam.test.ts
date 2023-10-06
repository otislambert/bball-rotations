import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/svelte";
import { mockBS } from "../../__mocks__/data/BSwasdet102522.data";
import BoxScoreTeam from "$components/boxscoreTeam.svelte";

const team = mockBS.homeTeam;

describe("Box Score Team Rendering", () => {
  describe("Box Score Elements", () => {
    beforeEach(() => {
      render(BoxScoreTeam, { props: { team } });
    });

    it("Renders the team name header", () => {
      expect(screen.getByTestId("bs-team-header-text")).toBeDefined();
      expect(screen.getByTestId("bs-team-header-text").textContent).toBe(
        "Washington Wizards - 120"
      );
    });
    it("Renders the team name header as h3", () => {
      expect(screen.getByTestId("bs-team-header-text").nodeName).toBe("H3");
    });

    it("renders a team table div", () => {
      expect(screen.getByTestId("bs-team-table")).toBeDefined();
    });
  });

  describe("Box Score Team Table", () => {
    beforeEach(() => {
      render(BoxScoreTeam, { props: { team } });
    });

    it("is rendered as a table ele", () => {
      expect(screen.getByTestId("bs-team-table").nodeName).toBe("TABLE");
    });
    it("has a thead element", () => {
      const head = screen.getByTestId("bs-team-table-head");
      expect(head).toBeDefined();
      expect(head.nodeName).toBe("THEAD");
    });
    it("has a table body", () => {
      const body = screen.getByTestId("bs-team-table-body");
      expect(body).toBeDefined();
      expect(body.nodeName).toBe("TBODY");
    });
    it("body and head have same amount of columns", () => {
      const bodyRow = screen.getAllByTestId("bs-player-row")[0];
      const headRow = screen.getByTestId("bs-team-table-head-row");

      expect(headRow.children.length).toBe(bodyRow.children.length);
    });
  });

  describe("Box Score Stat Formatting", () => {
    beforeEach(() => {
      render(BoxScoreTeam, { props: { team } });
    });

    it("correctly formats player minutes", () => {
      expect(screen.getAllByTestId("bs-player-minutes")[0].textContent).toMatch(
        /[0-9]+:[0-9]+/
      );
    });
  });
});
