import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import GamePageHeader from "$components/GamePageHeader.svelte";
import GamePageHeaderArena from "$components/GamePageHeaderArena.svelte";
import GamePageHeaderTeam from "$components/GamePageHeaderTeam.svelte";
import { mockBS } from "../../__mocks__/data/BSwasdet102522.data";

describe("Game Page Header Rendering", () => {
  beforeEach(() => {
    render(GamePageHeader, { props: { boxScore: mockBS } });
  });

  it("renders itself", () => {
    expect(screen.getByTestId("gph-component")).toBeDefined();
  });
  it("renders two team components", () => {
    expect(screen.getAllByTestId("gph-team-component").length).toBe(2);
    expect(screen.getAllByTestId("gph-team-score").length).toBe(2);
    expect(screen.getAllByTestId("gph-team-name").length).toBe(2);
  });
  it("renders an arena component", () => {
    expect(screen.getByTestId("gph-arena-component")).toBeDefined();
    expect(screen.getByTestId("gph-arena-city")).toBeDefined();
    expect(screen.getByTestId("gph-arena-name")).toBeDefined();
    expect(screen.getByTestId("gph-arena-date")).toBeDefined();
  });
});

describe("Game Page Header Arena", () => {
  describe("Text Content", () => {
    const { arena, gameTimeHome } = mockBS;

    beforeEach(() => {
      render(GamePageHeaderArena, { props: { arena, gameTimeHome } });
    });

    it("has the correct city name", () => {
      expect(screen.getByTestId("gph-arena-city").textContent).toBe(
        "Washington, DC"
      );
    });
    it("has the correct arena name", () => {
      expect(screen.getByTestId("gph-arena-name").textContent).toBe(
        "Capital One Arena"
      );
    });
    it("has the correct date and time", () => {
      expect(screen.getByTestId("gph-arena-date").textContent).toBe(
        "4:00 PM - October 25th, 2022"
      );
    });
  });
  describe("Classes", () => {
    const { arena, gameTimeHome } = mockBS;

    beforeEach(() => {
      render(GamePageHeaderArena, { props: { arena, gameTimeHome } });
    });

    it("component has the correct class", () => {
      expect(screen.getByTestId("gph-arena-component").classList).toContain([
        "flex",
        "column",
        "arena",
      ]);
    });
    it("city has the correct class", () => {
      expect(screen.getByTestId("gph-arena-city").classList).toContain([
        "city",
      ]);
      it("name has the correct class", () => {
        expect(screen.getByTestId("gph-arena-name").classList).toContain([
          "arena",
        ]);
      });
    });
    it("date has the correct class", () => {
      expect(screen.getByTestId("gph-arena-date").classList).toContain([
        "date",
      ]);
    });
  });
});

describe("Game Page Header Team", () => {
  describe("Text Content", () => {
    const team = mockBS.awayTeam;

    beforeEach(() => {
      render(GamePageHeaderTeam, { props: { team } });
    });

    it("has the correct team name", () => {
      expect(screen.getByTestId("gph-team-name").textContent).toBe(
        "Detroit Pistons"
      );
    });
    it("has the correct score", () => {
      expect(screen.getByTestId("gph-team-score").textContent).toBe("99");
    });
  });

  describe("Classes", () => {
    const team = mockBS.awayTeam;

    beforeEach(() => {
      render(GamePageHeaderTeam, { props: { team } });
    });

    it("score has the correct classes", () => {
      expect(screen.getByTestId("gph-team-score").classList).toContain([
        "score",
      ]);
    });
    it("name has the correct classes", () => {
      expect(screen.getByTestId("gph-team-name").classList).toContain(["name"]);
    });
    it("container has the correct classes", () => {
      expect(screen.getByTestId("gph-team-component").classList).toContain([
        "flex",
        "column",
        "team",
      ]);
    });
  });
});