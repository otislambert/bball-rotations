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
    it("renders an expand button", () => {
      expect(screen.getByTestId("bs-team-expand-btn")).toBeDefined();
    });
  });

  describe("Box Score Expand Button", () => {
    beforeEach(() => {
      render(BoxScoreTeam, { props: { team } });
    });

    afterEach(() => {
      const reset = screen.getByTestId("bs-team-reset-btn");

      act(async () => {
        await fireEvent.click(reset);
      });
    });

    it("renders the button as a button element", () => {
      expect(screen.getByTestId("bs-team-expand-btn").nodeName).toBe("BUTTON");
    });
    it("renders the correct text on load", () => {
      expect(screen.getByTestId("bs-team-expand-btn").textContent).toBe(
        "Expand"
      );
    });
    it("renders the correct text after click", () => {
      const btn = screen.getByTestId("bs-team-expand-btn");

      // checks for text content before clicking
      expect(btn.textContent).toBe("Expand");

      // fires click
      act(async () => {
        await fireEvent.click(btn);

        // checks again for text content
        expect(btn.textContent).toBe("Hide");
      });
    });

    it("displays the correct number of players when not expanded", () => {
      const btn = screen.getByTestId("bs-team-expand-btn");

      // checks that expanded is false
      expect(btn.textContent).toBe("Expand");

      // checks for the amount of players
      expect(screen.getAllByTestId("bs-player-row").length).toBe(5);
    });

    it("displays more players when expanded", () => {
      const btn = screen.getByTestId("bs-team-expand-btn");

      //checks that only five players are initially shown.
      expect(screen.getAllByTestId("bs-player-row").length).toBe(5);

      //fires click
      act(async () => {
        await fireEvent.click(btn);

        // checks again for text content
        expect(screen.getAllByTestId("bs-player-row").length).toBeGreaterThan(
          6
        );
      });
    });

    it("has the correct class", () => {
      expect(screen.getByTestId("bs-team-expand-btn").classList).toContain([
        "expand-btn",
      ]);
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
