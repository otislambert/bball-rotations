import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { mockBS } from "../../__mocks__/data/BSwasdet102522.data";
import BoxScoreTeam from "$components/boxscoreTeam.svelte";

const team = mockBS.homeTeam;

describe("Box Score Team Rendering", () => {
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
