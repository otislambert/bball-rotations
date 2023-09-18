import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
// component imports
import GameCard from "../../src/components/GameCard.svelte";
import GameCardTeam from "../../src/components/GameCardTeam.svelte";
// mock data
import { MockGame } from "../../__mocks__/data/gameU1223bkndet";
import { clippers } from "../../__mocks__/data/ScheduleGameTeamU.data";

describe("GameCard Rendering", () => {
  it("Renders", () => {
    render(GameCard, { props: { game: MockGame } });
    expect(screen.getByTestId("gamecardComponent")).toBeDefined();
  });
  it("Renders the 'vs.' text", () => {
    render(GameCard, { props: { game: MockGame } });
    expect(screen.getByText("VS.")).toBeDefined();
  });
  it("Renders two teamContainers", () => {
    render(GameCard, { props: { game: MockGame } });
    expect(screen.getAllByTestId("teamContainer").length).toBe(2);
  });
  it("Renders as a button", () => {
    render(GameCard, { props: { game: MockGame } });
    expect(screen.getByTestId("gamecardComponent").nodeName).toBe("BUTTON");
  });
  it("Is disabled for unfinished games", () => {
    render(GameCard, { props: { game: MockGame } });
    expect(screen.getByTestId("gamecardComponent")).toHaveAttribute(
      "disabled",
      ""
    );
  });
  // TODO: add test for finished games
});

describe("Team Container", () => {
  it("Renders the team name", () => {
    render(GameCardTeam, { props: { team: clippers } });
    const name = screen.getByTestId("teamName").textContent;
    expect(name).toEqual("Clippers");
  });
  it("Renders the team city", () => {
    render(GameCardTeam, { props: { team: clippers } });
    expect(screen.getByTestId("teamCity").textContent).toEqual("LA");
  });
  it("Renders the team score", () => {
    render(GameCardTeam, { props: { team: clippers } });
    expect(screen.getByTestId("teamScore").textContent).toEqual("0");
  });
  it("Renders the team wins - losses", () => {
    render(GameCardTeam, { props: { team: clippers } });
    expect(screen.getByTestId("teamWinLoss").textContent).toEqual("0 - 0");
  });
});
